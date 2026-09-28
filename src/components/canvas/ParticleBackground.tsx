"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  TOTAL_POINTS,
  sampleTextCoordinates,
  generatePacman,
  generateWireframeCube,
  generateSoftwareStack,
  generatePhoneFrame,
  generateNeuralTorus,
  generateApertureRings,
  generateVolumetricSphere,
  generateCodeTag,
  generateGear,
  generateAiChip,
  generateAiCamera,
} from "./math/particleTargets";

const COLOR_DEEP = new THREE.Color("#001C82");
const COLOR_MAIN = new THREE.Color("#0050C8");
const COLOR_CYAN = new THREE.Color("#2C81FA");
const COLOR_WHITE = new THREE.Color("#FFFFFF");

function createParticleTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0.0, "rgba(255,255,255,1.0)");
  g.addColorStop(0.25, "rgba(44,129,250,0.95)");
  g.addColorStop(0.65, "rgba(0,80,200,0.4)");
  g.addColorStop(1.0, "rgba(0,0,0,0.0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.generateMipmaps = false;
  return tex;
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mounted = true;
    const isMobile = window.innerWidth < 1024;

    // FIX 1: Particles ki tadaad double kar di taake text hollow na rahay
    const count = isMobile ? 4800 : 7500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 7.0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Particle Group
    const particleGroup = new THREE.Group();
    if (isMobile) {
      particleGroup.position.set(0, 1.2, 0);
      particleGroup.scale.set(0, 0, 0);
    } else {
      particleGroup.position.set(2.2, 0, 0);
      particleGroup.scale.set(1, 1, 1);
    }
    scene.add(particleGroup);

    // 3. Targets
    const targets: Record<string, Float32Array> = {
      hero: sampleTextCoordinates("HI, WELCOME TO KODRIFTDEV", count, isMobile),
      sphere: generateVolumetricSphere(count, isMobile ? 1.1 : 1.4),
      pacman: generatePacman(count, 0.55, isMobile ? 0.48 : 0.58),
      // Services shapes: Code Tag </>, Gear icon, Phone frame, AI Chip, AI Camera (calibrated to fit neatly inside box)
      "services-code": generateCodeTag(count, isMobile ? 0.65 : 0.80),
      "services-gear": generateGear(count, isMobile ? 0.55 : 0.68, isMobile ? 0.20 : 0.25),
      "services-phone": generatePhoneFrame(count, isMobile ? 0.50 : 0.62, isMobile ? 0.90 : 1.10),
      "services-chip": generateAiChip(count, isMobile ? 0.62 : 0.76),
      "services-camera": generateAiCamera(count, isMobile ? 0.72 : 0.88, isMobile ? 0.48 : 0.60),
      // Aliases
      "services-cube": generateCodeTag(count, isMobile ? 0.65 : 0.80),
      "services-software": generateGear(count, isMobile ? 0.55 : 0.68),
      "services-torus": generateAiChip(count, isMobile ? 0.62 : 0.76),
      "services-aperture": generateAiCamera(count, isMobile ? 0.72 : 0.88),
      "work-aurax": sampleTextCoordinates("AURA-X", count, isMobile),
      "work-cluck": sampleTextCoordinates("CLUCK N MOO", count, isMobile),
      "work-pharmacy": sampleTextCoordinates("PHARMACY SAAS", count, isMobile),
      "work-prime": sampleTextCoordinates("PRIME ENERGY", count, isMobile),
      work: sampleTextCoordinates("FEATURED WORK", count, isMobile),
      pricing: sampleTextCoordinates("FLEXIBLE PLANS", count, isMobile),
      contact: sampleTextCoordinates("LET'S TALK", count, isMobile),
    };

    // 4. Buffers
    const currentPositions = new Float32Array(targets.hero);
    const sourcePositions = new Float32Array(targets.hero);
    const targetPositions = new Float32Array(targets.hero);

    let morphProgress = 1.0;
    let morphDuration = 0.65;
    let currentTargetKey = "hero";

    const setTarget = (key: string, duration = 0.65) => {
      currentTargetKey = key;
      const tgt = targets[key] ?? targets.sphere;
      for (let i = 0; i < count * 3; i++) {
        sourcePositions[i] = currentPositions[i];
        targetPositions[i] = tgt[i];
      }
      morphDuration = duration;
      morphProgress = 0;
    };

    // 5. Geometry & Colors (Eye gets white/cyan glow)
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));

    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      if (i < 80) {
        // Glowing Eye Highlight
        colors[i * 3] = COLOR_WHITE.r;
        colors[i * 3 + 1] = COLOR_WHITE.g;
        colors[i * 3 + 2] = COLOR_WHITE.b;
      } else {
        const p = Math.random();
        const c = p < 0.25 ? COLOR_DEEP : p > 0.7 ? COLOR_CYAN : COLOR_MAIN;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      // FIX 2: Particles ka size kafi barha diya taake letters solid nazar aayen
      size: isMobile ? 0.035 : 0.045,
      sizeAttenuation: true,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    particleGroup.add(points);

    // 6. 360-Directional Scroll & State
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let pacmanDirectionAngle = 0;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let currentActiveSection = "hero";

    let targetGroupX = isMobile ? 0 : 2.2;
    let currentGroupX = targetGroupX;
    let targetGroupY = isMobile ? 1.2 : 0;
    let currentGroupY = targetGroupY;
    let targetScale = isMobile ? 0 : 1.0;
    let currentScale = targetScale;

    const onScroll = () => {
      const currentY = window.scrollY;
      const dy = currentY - lastScrollY;
      lastScrollY = currentY;

      if (Math.abs(dy) > 1) {
        isScrolling = true;
        pacmanDirectionAngle = dy > 0 ? -Math.PI / 2 : Math.PI / 2;

        if (currentActiveSection !== "hero") {
          setTarget("pacman", 0.25);
        }

        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          checkActiveSection();
        }, 180);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const checkActiveSection = () => {
      const mid = window.innerHeight * 0.45;
      const sectionIds = ["hero", "services", "work", "pricing", "contact"];
      let closest = "hero";
      let closestDist = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - mid);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      if (closest !== currentActiveSection) {
        currentActiveSection = closest;
        if (closest === "hero") {
          targetGroupX = isMobile ? 0 : 2.2;
          targetGroupY = isMobile ? 1.2 : 0;
          targetScale = isMobile ? 0 : 1.0;
          setTarget("hero", 0.7);
        } else if (closest === "services") {
          setTarget("services-code", 0.65);
        } else if (closest === "work") {
          targetGroupX = isMobile ? 0 : 2.2;
          targetGroupY = 0;
          targetScale = isMobile ? 0.68 : 1.0;
          setTarget("work", 0.65);
        } else if (closest === "pricing") {
          targetGroupX = isMobile ? 0 : 2.2;
          targetGroupY = 0;
          targetScale = isMobile ? 0.68 : 1.0;
          setTarget("pricing", 0.65);
        } else if (closest === "contact") {
          targetGroupX = isMobile ? 0 : 2.2;
          targetGroupY = 0;
          targetScale = isMobile ? 0.68 : 1.0;
          setTarget("contact", 0.65);
        }
      }
    };
    checkActiveSection();

    // 7. Morph Shape Listener (stays locked in fixed red-marked anchor area for services)
    const handleMorphEvent = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      if (!detail) return;

      const [shape] = detail.split("-anchor-");

      if (shape === "code" || shape === "web" || shape === "cube") {
        currentActiveSection = "services";
        setTarget("services-code", 0.55);
      } else if (shape === "gear" || shape === "software") {
        currentActiveSection = "services";
        setTarget("services-gear", 0.55);
      } else if (shape === "phone" || shape === "app") {
        currentActiveSection = "services";
        setTarget("services-phone", 0.55);
      } else if (shape === "chip" || shape === "ai" || shape === "torus") {
        currentActiveSection = "services";
        setTarget("services-chip", 0.55);
      } else if (shape === "camera" || shape === "photo" || shape === "aperture") {
        currentActiveSection = "services";
        setTarget("services-camera", 0.55);
      } else if (targets[detail]) {
        setTarget(detail, 0.55);
      }
    };
    window.addEventListener("kd-morph-shape", handleMorphEvent);

    const handleProjectHover = (e: Event) => {
      const proj = (e as CustomEvent).detail as string;
      const map: Record<string, string> = {
        aurax: "work-aurax",
        cluck: "work-cluck",
        pharmacy: "work-pharmacy",
        prime: "work-prime",
      };
      setTarget(map[proj] ?? "work", 0.6);
    };
    window.addEventListener("kd-project-hover", handleProjectHover);

    // 8. Resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // 9. Main Render Loop
    let animId: number;
    const clock = new THREE.Clock();

    const updateAnchorPosition = () => {
      const isServiceShape = currentTargetKey.startsWith("services-");
      if (currentActiveSection === "services" || isServiceShape) {
        const anchorEl = document.getElementById("services-particle-anchor");
        if (anchorEl) {
          const rect = anchorEl.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            const visibleH = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
            const visibleW = visibleH * (window.innerWidth / window.innerHeight);

            const pixelCenterX = rect.left + rect.width / 2;
            const pixelCenterY = rect.top + rect.height * 0.44;

            targetGroupX = ((pixelCenterX / window.innerWidth) - 0.5) * visibleW;
            targetGroupY = (0.5 - (pixelCenterY / window.innerHeight)) * visibleH;

            const boxHeightWorld = (rect.height / window.innerHeight) * visibleH;
            targetScale = boxHeightWorld * (isMobile ? 0.42 : 0.46);
            return;
          }
        }
        targetGroupX = isMobile ? 0 : 2.2;
        targetGroupY = isMobile ? 1.0 : 0.6;
        targetScale = isMobile ? 0.55 : 0.65;
      } else if (currentActiveSection === "hero") {
        targetGroupX = isMobile ? 0 : 2.2;
        targetGroupY = isMobile ? 1.2 : 0;
        targetScale = isMobile ? 0 : 1.0;
      } else {
        targetGroupX = isMobile ? 0 : 2.2;
        targetGroupY = 0;
        targetScale = isMobile ? 0.68 : 1.0;
      }
    };

    const animate = () => {
      if (!mounted) return;
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      updateAnchorPosition();

      currentGroupX += (targetGroupX - currentGroupX) * 0.08;
      currentGroupY += (targetGroupY - currentGroupY) * 0.08;
      currentScale += (targetScale - currentScale) * 0.08;

      particleGroup.position.x = currentGroupX;
      particleGroup.position.y = currentGroupY;
      particleGroup.scale.set(currentScale, currentScale, currentScale);

      // Pac-Man Dynamic Chomping
      if (isScrolling) {
        const mouthAngle = Math.abs(Math.sin(elapsed * 9)) * 0.65;
        const pm = generatePacman(count, mouthAngle, isMobile ? 0.48 : 0.58);
        for (let i = 0; i < count * 3; i++) targetPositions[i] = pm[i];

        particleGroup.rotation.z = THREE.MathUtils.lerp(particleGroup.rotation.z, pacmanDirectionAngle, delta * 8);
      } else {
        particleGroup.rotation.z = THREE.MathUtils.lerp(particleGroup.rotation.z, 0, delta * 4);
      }

      if (morphProgress < 1.0) {
        morphProgress += delta / morphDuration;
        if (morphProgress > 1.0) morphProgress = 1.0;
      }
      const t = 1 - Math.pow(1 - Math.min(morphProgress, 1.0), 3);

      const pos = currentPositions;
      const src = sourcePositions;
      const tgt = targetPositions;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const bx = src[i3] + (tgt[i3] - src[i3]) * t;
        const by = src[i3 + 1] + (tgt[i3 + 1] - src[i3 + 1]) * t;
        const bz = src[i3 + 2] + (tgt[i3 + 2] - src[i3 + 2]) * t;

        pos[i3] += (bx - pos[i3]) * 0.16;
        pos[i3 + 1] += (by - pos[i3 + 1]) * 0.16;
        pos[i3 + 2] += (bz - pos[i3 + 2]) * 0.16;
      }
      geometry.attributes.position.needsUpdate = true;

      particleGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.08;
      particleGroup.rotation.x = Math.cos(elapsed * 0.3) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mounted = false;
      cancelAnimationFrame(animId);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("kd-morph-shape", handleMorphEvent);
      window.removeEventListener("kd-project-hover", handleProjectHover);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-30 pointer-events-none overflow-hidden max-w-full w-full h-full"
      style={{ width: "100%", height: "100%", maxWidth: "100%" }}
      aria-hidden="true"
    />
  );
}