"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  tx: number;
  ty: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  phase: number;
}

const SENTENCES = [
  "HI, WELCOME TO KODRIFTDEV",
  "HAVE A PROJECT IN MIND?",
  "LET'S TALK",
];

// Solid, high-contrast, deep electric brand blue palette
const BRAND_COLORS = [
  "#001C5B", // Deep solid midnight navy
  "#002878", // Deep royal navy
  "#003FC5", // Rich cobalt
  "#006EF5", // Brand electric blue
];

export function HeroParticleTypography() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Thick, solid, highly visible particle density
    const PARTICLE_COUNT = 1600;
    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const col = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        tx: width / 2,
        ty: height / 2,
        sx: Math.random() * width,
        sy: Math.random() * height,
        vx: 0,
        vy: 0,
        size: 1.25, // Thickened 1.25px particle dots for solid, bold, clearly visible letters
        color: col,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // High-resolution sampling with solid 800 extra-bold weight
    function sampleSentencePoints(text: string, w: number, h: number): [number, number][] {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = Math.max(w * 1.5, 800);
      offCanvas.height = 100;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return [];

      offCtx.fillStyle = "#000000";
      offCtx.fillRect(0, 0, offCanvas.width, offCanvas.height);

      // Solid 800 Extra-Bold font so letters are prominent, full-bodied, and clearly readable
      const fontSize = w < 440 ? 17 : w < 540 ? 20 : 23;
      offCtx.font = `800 ${fontSize}px 'Manrope', system-ui, -apple-system, sans-serif`;
      offCtx.textAlign = "left";
      offCtx.textBaseline = "middle";
      offCtx.fillStyle = "#FFFFFF";

      // Render with balanced spacing to prevent letter overlap
      const letterGap = w < 440 ? 2.4 : 3.6;
      let totalWidth = 0;
      for (let i = 0; i < text.length; i++) {
        totalWidth += offCtx.measureText(text[i]).width + letterGap;
      }

      let curX = (offCanvas.width - totalWidth) / 2;
      const curY = offCanvas.height / 2;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        offCtx.fillText(char, curX, curY);
        curX += offCtx.measureText(char).width + letterGap;
      }

      const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
      const points: [number, number][] = [];
      const step = 1.8; // Tight step for solid, high-density letter body

      for (let y = 0; y < offCanvas.height; y += step) {
        for (let x = 0; x < offCanvas.width; x += step) {
          const idx = (Math.floor(y) * offCanvas.width + Math.floor(x)) * 4;
          if (imgData.data[idx] > 130) {
            const relX = x - offCanvas.width / 2;
            const relY = y - offCanvas.height / 2;
            points.push([relX, relY]);
          }
        }
      }

      return points;
    }

    // Precompute targets for each sentence
    const targets: [number, number][][] = SENTENCES.map((s) =>
      sampleSentencePoints(s, width, height)
    );

    let activeSentenceIdx = 0;
    let morphProgress = 1.0;
    const transitionDuration = 0.65;
    const holdDuration = 3.4;

    function applySentenceTarget(idx: number) {
      const pts = targets[idx];
      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.sx = p.x;
        p.sy = p.y;

        if (pts.length > 0) {
          const pt = pts[i % pts.length];
          p.tx = cx + pt[0];
          p.ty = cy + pt[1];
        } else {
          p.tx = cx + (Math.random() - 0.5) * 60;
          p.ty = cy + (Math.random() - 0.5) * 20;
        }
      }
      morphProgress = 0;
    }

    applySentenceTarget(0);

    // Mouse proximity tracking
    const mouse = { x: -9999, y: -9999, active: false };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    // ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;

        for (let s = 0; s < SENTENCES.length; s++) {
          targets[s] = sampleSentencePoints(SENTENCES[s], width, height);
        }
        applySentenceTarget(activeSentenceIdx);
      }
    });
    resizeObserver.observe(container);

    // Animation loop
    let animId: number;
    let lastTime = performance.now();
    let sentenceTimer = 0;

    const render = (now: number) => {
      animId = requestAnimationFrame(render);

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      sentenceTimer += dt;
      if (sentenceTimer >= transitionDuration + holdDuration) {
        sentenceTimer = 0;
        activeSentenceIdx = (activeSentenceIdx + 1) % SENTENCES.length;
        applySentenceTarget(activeSentenceIdx);
      }

      if (morphProgress < 1.0) {
        morphProgress += dt / transitionDuration;
        if (morphProgress > 1.0) morphProgress = 1.0;
      }

      const t = 1 - Math.pow(1 - morphProgress, 3);

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        const targetX = p.sx + (p.tx - p.sx) * t;
        const targetY = p.sy + (p.ty - p.sy) * t;

        const microFloat = Math.sin(now * 0.002 + p.phase) * 0.15;

        const dx = targetX - p.x;
        const dy = (targetY + microFloat) - p.y;
        p.vx += dx * 0.15;
        p.vy += dy * 0.15;

        // Mouse proximity repel
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          const threshold = 35;

          if (dist < threshold && dist > 0) {
            const force = ((threshold - dist) / threshold) * 2.2;
            p.vx += (mdx / dist) * force;
            p.vy += (mdy / dist) * force;
          }
        }

        p.vx *= 0.65;
        p.vy *= 0.65;

        p.x += p.vx;
        p.y += p.vy;

        // Solid, clearly visible particle rendering
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      aria-label="Particle Typography"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
