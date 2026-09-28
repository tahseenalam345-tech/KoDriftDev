"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  generateCodeTag,
  generateGear,
  generatePhoneFrame,
  generateAiChip,
  generateAiCamera,
} from "./math/particleTargets";

const COLOR_DEEP = new THREE.Color("#002496");
const COLOR_MAIN = new THREE.Color("#0060E5");
const COLOR_CYAN = new THREE.Color("#2C81FA");
const COLOR_LIGHT = new THREE.Color("#70B2FF");
const COLOR_WHITE = new THREE.Color("#FFFFFF");

function createParticleTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
  g.addColorStop(0.25, "rgba(44, 129, 250, 0.95)");
  g.addColorStop(0.60, "rgba(0, 96, 229, 0.65)");
  g.addColorStop(0.85, "rgba(0, 36, 150, 0.25)");
  g.addColorStop(1.0, "rgba(0, 0, 0, 0.0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.generateMipmaps = false;
  return tex;
}

interface ServiceParticleCanvasProps {
  activeShape?: string;
  className?: string;
}

export function ServiceParticleCanvas({
  activeShape = "code",
  className = "",
}: ServiceParticleCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentShapeRef = useRef(activeShape);

  // Sync prop changes
  useEffect(() => {
    currentShapeRef.current = activeShape;
  }, [activeShape]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mounted = true;
    let animId: number;
    const count = 4200;

    // 1. Scene & Camera
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 50);
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Pre-generate Target Geometries
    const targets: Record<string, Float32Array> = {
      code: generateCodeTag(count, 1.10),
      gear: generateGear(count, 0.92, 0.36, 8, 0.26),
      phone: generatePhoneFrame(count, 0.82, 1.40),
      chip: generateAiChip(count, 1.05, 0.22),
      camera: generateAiCamera(count, 1.20, 0.82),
    };

    // Aliases
    targets.cube = targets.code;
    targets.web = targets.code;
    targets.software = targets.gear;
    targets.app = targets.phone;
    targets.torus = targets.chip;
    targets.ai = targets.chip;
    targets.aperture = targets.camera;
    targets.photo = targets.camera;

    // Initial shape
    const initialKey = targets[activeShape] ? activeShape : "code";
    const initialTarget = targets[initialKey];

    const currentPositions = new Float32Array(initialTarget);
    const sourcePositions = new Float32Array(initialTarget);
    const targetPositions = new Float32Array(initialTarget);

    let morphProgress = 1.0;
    const morphDuration = 0.55;
    let activeKey = initialKey;

    const morphTo = (key: string) => {
      const tgt = targets[key];
      if (!tgt || key === activeKey) return;
      activeKey = key;
      for (let i = 0; i < count * 3; i++) {
        sourcePositions[i] = currentPositions[i];
        targetPositions[i] = tgt[i];
      }
      morphProgress = 0;
    };

    // 3. Geometry & Colors
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));

    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const p = Math.random();
      let c: THREE.Color;
      if (p < 0.12) {
        c = COLOR_WHITE; // Sparkling highlights
      } else if (p < 0.35) {
        c = COLOR_LIGHT; // Cyan light
      } else if (p < 0.70) {
        c = COLOR_CYAN; // Primary Kodrift cyan-blue
      } else if (p < 0.90) {
        c = COLOR_MAIN; // Vibrant blue
      } else {
        c = COLOR_DEEP; // Deep contrast blue
      }
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.052,
      sizeAttenuation: true,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.96,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particleGroup = new THREE.Group();
    const points = new THREE.Points(geometry, material);
    particleGroup.add(points);
    scene.add(particleGroup);

    // 4. Interactive Mouse Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetTiltY = x * 0.45;
      targetTiltX = -y * 0.35;
    };

    const handleMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // 5. Global Morph Event Listener (from service card hovers)
    const handleMorphEvent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail) return;
      let shape = "";
      if (typeof detail === "string") {
        shape = detail.split("-anchor-")[0];
      } else if (typeof detail === "object") {
        shape = (detail as { shape?: string }).shape || "";
      }
      if (shape && targets[shape]) {
        morphTo(shape);
      }
    };
    window.addEventListener("kd-morph-shape", handleMorphEvent);

    // 6. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // 7. Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!mounted) return;
      animId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      // Check if external shape prop changed
      if (currentShapeRef.current !== activeKey && targets[currentShapeRef.current]) {
        morphTo(currentShapeRef.current);
      }

      // Morph interpolation
      if (morphProgress < 1.0) {
        morphProgress = Math.min(1.0, morphProgress + delta / morphDuration);
        // Quartic Ease-Out
        const t = 1 - Math.pow(1 - morphProgress, 4);

        const pos = geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const bx = sourcePositions[i3] + (targetPositions[i3] - sourcePositions[i3]) * t;
          const by = sourcePositions[i3 + 1] + (targetPositions[i3 + 1] - sourcePositions[i3 + 1]) * t;
          const bz = sourcePositions[i3 + 2] + (targetPositions[i3 + 2] - sourcePositions[i3 + 2]) * t;

          pos[i3] += (bx - pos[i3]) * 0.22;
          pos[i3 + 1] += (by - pos[i3 + 1]) * 0.22;
          pos[i3 + 2] += (bz - pos[i3 + 2]) * 0.22;
        }
        geometry.attributes.position.needsUpdate = true;
      }

      // Gentle continuous 3D rotation & hover tilt
      mouseX += (targetTiltX - mouseX) * 0.08;
      mouseY += (targetTiltY - mouseY) * 0.08;

      particleGroup.rotation.y = elapsed * 0.35 + mouseY;
      particleGroup.rotation.x = Math.sin(elapsed * 0.6) * 0.10 + mouseX;
      particleGroup.position.y = Math.sin(elapsed * 1.1) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mounted = false;
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("kd-morph-shape", handleMorphEvent);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto overflow-hidden ${className}`}
      aria-label="3D Service Particles Canvas"
    />
  );
}
