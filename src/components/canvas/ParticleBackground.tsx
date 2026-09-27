"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  TOTAL_POINTS,
  sampleTextCoordinates,
  generateStreamLine,
  generateWireframeCube,
  generatePhoneFrame,
  generateNeuralTorus,
  generateApertureRings,
  generateVolumetricSphere,
} from "./math/particleTargets";

// Theme colors
const COLOR_INNER = new THREE.Color("#003FC5");   // Deep inner cobalt
const COLOR_RADIANT = new THREE.Color("#006EF5"); // Radiant core blue
const COLOR_SPARKLE = new THREE.Color("#2C81FA"); // Electric cyan highlight

/**
 * Circular radial glow sprite
 */
function createParticleTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.20, "rgba(200, 235, 255, 0.98)");
    gradient.addColorStop(0.48, "rgba(44, 129, 250, 0.90)");
    gradient.addColorStop(0.72, "rgba(0, 110, 245, 0.55)");
    gradient.addColorStop(0.90, "rgba(0, 63, 197, 0.20)");
    gradient.addColorStop(1.0, "rgba(0, 28, 91, 0.0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 1024;
    const count = isMobile ? 3000 : TOTAL_POINTS;

    // 1. Scene & Perspective Camera (Front/Isometric View)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Anchor Group (Front/Isometric view, NO 360 spinning)
    const particleGroup = new THREE.Group();
    // Front-facing isometric orientation
    particleGroup.rotation.set(0.08, -0.12, 0);

    // Initial position starts centered/upper for the text greeting
    if (isMobile) {
      particleGroup.position.set(0, 1.6, 0);
      particleGroup.scale.set(0.65, 0.65, 0.65);
    } else {
      particleGroup.position.set(0.6, 0.1, 0);
      particleGroup.scale.set(1.0, 1.0, 1.0);
    }
    scene.add(particleGroup);

    // 4. Shape Target Cache
    const targets: Record<string, Float32Array> = {
      hero: sampleTextCoordinates("HI, WELCOME TO KODRIFTDEV", count, 0.009),
      sphere: generateVolumetricSphere(count, 1.9),
      stream: generateStreamLine(count, 7.5),
      "services-cube": generateWireframeCube(count, 2.4),
      "services-phone": generatePhoneFrame(count, 1.7, 3.2),
      "services-torus": generateNeuralTorus(count, 1.7, 0.58),
      "services-aperture": generateApertureRings(count),
      services: sampleTextCoordinates("OUR SERVICES", count, 0.011),
      work: sampleTextCoordinates("FEATURED WORK", count, 0.011),
      pricing: sampleTextCoordinates("FLEXIBLE PLANS", count, 0.011),
      contact: sampleTextCoordinates("LET'S TALK", count, 0.012),
    };

    // 5. Initial Outer Space Coordinates (Particles assemble from deep space into Hero text)
    const spaceCoords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 14.0 * (0.6 + 0.4 * Math.cbrt(Math.random()));
      spaceCoords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      spaceCoords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      spaceCoords[i * 3 + 2] = r * Math.cos(phi);
    }

    const currentPositions = new Float32Array(spaceCoords);
    const sourcePositions = new Float32Array(spaceCoords);
    const targetPositions = new Float32Array(targets.hero);

    let morphProgress = 0;
    let morphDuration = 1.1; // Step 1: 0.0s - 1.2s assemble text

    const setTarget = (key: string, duration = 0.85) => {
      const tgt = targets[key] || targets.hero;
      for (let i = 0; i < count * 3; i++) {
        sourcePositions[i] = currentPositions[i];
        targetPositions[i] = tgt[i];
      }
      morphDuration = duration;
      morphProgress = 0;
    };

    // 6. Geometry & Point Colors
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(currentPositions, 3)
    );

    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const p = Math.random();
      let c = COLOR_RADIANT;
      if (p < 0.25) c = COLOR_INNER;
      else if (p > 0.72) c = COLOR_SPARKLE;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // 7. Material (Point size: 0.038 desktop / 0.025 mobile)
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.025 : 0.038,
      sizeAttenuation: true,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.0, // Hidden by default on hero load
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    points.visible = false; // Hidden on initial hero view
    particleGroup.add(points);

    // 8. Proximity-Only Mouse Tracking
    const mouse3D = new THREE.Vector3(999, 999, 0);
    let isMouseActive = false;
    let rafMouseId: number | null = null;

    const onPointerMove = (e: PointerEvent) => {
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;

      const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
      vec.unproject(camera);
      vec.sub(camera.position).normalize();
      const distance = -camera.position.z / vec.z;
      const worldPos = camera.position.clone().add(vec.multiplyScalar(distance));

      if (!rafMouseId) {
        rafMouseId = requestAnimationFrame(() => {
          mouse3D.copy(worldPos);
          isMouseActive = true;
          rafMouseId = null;
        });
      }
    };

    const onPointerLeave = () => {
      isMouseActive = false;
      mouse3D.set(999, 999, 0);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    // 9. Window Resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobileNow = w < 1024;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      if (mobileNow) {
        particleGroup.scale.set(0.65, 0.65, 0.65);
        material.size = 0.025;
      } else {
        particleGroup.scale.set(1.0, 1.0, 1.0);
        material.size = 0.038;
      }

      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // 10. Morph Custom Event Listener (from Service cards)
    const handleMorphEvent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail === "string") {
        if (detail === "cube" || detail === "web") setTarget("services-cube");
        else if (detail === "phone" || detail === "app" || detail === "device") setTarget("services-phone");
        else if (detail === "torus" || detail === "ai") setTarget("services-torus");
        else if (detail === "aperture" || detail === "photo") setTarget("services-aperture");
        else if (targets[detail]) setTarget(detail);
      }
    };
    window.addEventListener("kd-morph-shape", handleMorphEvent);

    // 11. Scroll Stream & Section Observer
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let currentActiveSection = "hero";

    const onScroll = () => {
      const deltaY = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;

      if (deltaY > 6) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        setTarget("stream", 0.35);

        scrollTimeout = setTimeout(() => {
          checkActiveSection();
        }, 180);
      }
    };

    const checkActiveSection = () => {
      const midScreen = window.innerHeight * 0.45;
      let closestSection = "hero";
      let closestDist = Infinity;

      const sections = ["hero", "services", "work", "pricing", "contact"];
      const sectionElements = sections
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

      if (sectionElements.length === 0) return;

      sectionElements.forEach(({ id, el }) => {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - midScreen);
        if (dist < closestDist) {
          closestDist = dist;
          closestSection = id;
        }
      });

      if (closestSection !== currentActiveSection) {
        currentActiveSection = closestSection;
        if (closestSection === "hero") {
          // Handled by opacity fade
        } else if (closestSection === "services") {
          setTarget("services-cube");
        } else if (closestSection === "work") {
          setTarget("work");
        } else if (closestSection === "pricing") {
          setTarget("pricing");
        } else if (closestSection === "contact") {
          setTarget("contact");
        } else {
          setTarget("stream");
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // 12. Scripted Intro & Main Render Loop
    let animId: number;
    const clock = new THREE.Clock();
    const PROXIMITY_THRESHOLD = 1.35; // ONLY react when cursor is directly over/near particles

    // Intro milestones
    let introStep = 0; // 0: 0.0-1.2s (text), 1: 1.2-2.2s (sphere), 2: 2.2-3.4s (orbit arc), 3: settled

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // HERO VISIBILITY:
      // In hero section, background particles are completely shut off so no dots appear over cards.
      // They only activate when scrolling down to Services, Work, etc.
      const isHero = typeof window !== "undefined" && (window.scrollY < 120 || currentActiveSection === "hero");
      if (isHero) {
        material.opacity = 0.0;
        points.visible = false;
      } else {
        material.opacity = THREE.MathUtils.lerp(material.opacity, 0.95, delta * 3.5);
        points.visible = material.opacity > 0.01;
      }

      if (!isMobile) {
        particleGroup.position.set(2.4, 0, 0);
      } else {
        particleGroup.position.set(0, 1.6, 0);
      }

      // Progress morph
      if (morphProgress < 1) {
        morphProgress += delta / morphDuration;
        if (morphProgress > 1) morphProgress = 1;
      }
      const t = morphProgress < 0.5
        ? 4 * morphProgress * morphProgress * morphProgress
        : 1 - Math.pow(-2 * morphProgress + 2, 3) / 2;

      const pos = currentPositions;
      const src = sourcePositions;
      const tgt = targetPositions;

      const gx = particleGroup.position.x;
      const gy = particleGroup.position.y;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        let bx = src[i3] + (tgt[i3] - src[i3]) * t;
        let by = src[i3 + 1] + (tgt[i3 + 1] - src[i3 + 1]) * t;
        let bz = src[i3 + 2] + (tgt[i3 + 2] - src[i3 + 2]) * t;

        // Subtle organic breathing (NO chaotic distortion)
        const wave = Math.sin(elapsed * 1.6 + bx * 1.2) * 0.012;
        bx += wave;
        by += wave * 0.5;

        // PROXIMITY-ONLY CURSOR REPULSION (< 1.4 units)
        if (isMouseActive) {
          const worldPx = gx + bx;
          const worldPy = gy + by;

          const dx = worldPx - mouse3D.x;
          const dy = worldPy - mouse3D.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Strictly ZERO force if cursor is over text/buttons on left (dist >= 1.35)
          if (dist < PROXIMITY_THRESHOLD && dist > 0.001) {
            const force = (1.0 - dist / PROXIMITY_THRESHOLD) * 0.70;
            bx += (dx / dist) * force;
            by += (dy / dist) * force;
            bz += (Math.random() - 0.5) * force * 0.25;
          }
        }

        pos[i3] += (bx - pos[i3]) * 0.18;
        pos[i3 + 1] += (by - pos[i3 + 1]) * 0.18;
        pos[i3 + 2] += (bz - pos[i3 + 2]) * 0.18;
      }

      geometry.attributes.position.needsUpdate = true;

      // STABLE FORWARD-FACING ISOMETRIC ORIENTATION (NO 360 spinning)
      // Only gentle idle float inertia:
      particleGroup.rotation.y = -0.12 + Math.sin(elapsed * 0.4) * 0.05;
      particleGroup.rotation.x = 0.08 + Math.cos(elapsed * 0.3) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      if (rafMouseId) cancelAnimationFrame(rafMouseId);
      if (scrollTimeout) clearTimeout(scrollTimeout);

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("kd-morph-shape", handleMorphEvent);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[5] pointer-events-none overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
}
