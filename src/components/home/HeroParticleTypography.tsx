"use client";

import React, { useEffect, useRef } from "react";

/*
 * High-Definition Particle Typography
 * ─ Auto-adjusting to screen size (responsive font sizing & multi-line break on mobile)
 * ─ Uniform Stride Sampling (100% solid, fully legible letters with no random scattering)
 * ─ Smooth dissolve transitions between sentences
 */

interface Particle {
  x: number;
  y: number;
  prevTx: number;
  prevTy: number;
  nextTx: number;
  nextTy: number;
  vx: number;
  vy: number;
  size: number;
  r: number;
  g: number;
  b: number;
  phase: number;
}

const SENTENCES = [
  "HI, WELCOME TO KODRIFTDEV",
  "HAVE A PROJECT IN MIND?",
  "LET'S TALK",
];

/* Rich, high-contrast sapphire and cobalt palette for crystal-clear readability */
const PALETTE: [number, number, number][] = [
  [0, 24, 115],  // Deep Navy
  [0, 50, 185],  // Royal Blue
  [0, 85, 225],  // High-Contrast Cobalt
  [0, 110, 245], // Signature Crystal Blue
];

async function samplePoints(
  text: string,
  W: number,
  H: number,
  count: number
): Promise<[number, number][]> {
  if (typeof window === "undefined") return [];
  if (!W || !H || W <= 0 || H <= 0) return [];

  try {
    if (document.fonts?.ready) await document.fonts.ready;

    // Use 2x offscreen buffer for crisp stroke geometry
    const SCALE = 2;
    const cw = Math.round(W * SCALE);
    const ch = Math.round(H * SCALE);

    const oc = document.createElement("canvas");
    oc.width = cw;
    oc.height = ch;
    const ctx = oc.getContext("2d");
    if (!ctx) return [];

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, cw, ch);

    // Responsive multi-line formatting on narrow screens (e.g. mobile)
    const isNarrow = W < 420;
    let lines: string[] = [text];

    if (isNarrow) {
      if (text.includes("WELCOME")) {
        lines = ["HI, WELCOME TO", "KODRIFTDEV"];
      } else if (text.includes("PROJECT")) {
        lines = ["HAVE A PROJECT", "IN MIND?"];
      }
    }

    // Auto-fit font size according to container dimensions
    let fs = lines.length > 1 ? Math.round(ch * 0.28) : Math.round(ch * 0.40);
    fs = Math.min(fs, lines.length > 1 ? 40 : 48);

    ctx.font = `900 ${fs}px 'Manrope', 'Inter', -apple-system, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Auto-shrink if text width exceeds 88% of container width
    const maxLineW = Math.max(...lines.map((l) => ctx.measureText(l).width));
    if (maxLineW > cw * 0.88) {
      fs = Math.floor(fs * (cw * 0.88) / maxLineW);
      ctx.font = `900 ${fs}px 'Manrope', 'Inter', -apple-system, sans-serif`;
    }

    // Render white text
    ctx.fillStyle = "#fff";
    if (lines.length > 1) {
      const lineSpacing = fs * 1.18;
      ctx.fillText(lines[0], cw / 2, ch / 2 - lineSpacing * 0.52);
      ctx.fillText(lines[1], cw / 2, ch / 2 + lineSpacing * 0.52);
    } else {
      ctx.fillText(lines[0], cw / 2, ch / 2);
    }

    const img = ctx.getImageData(0, 0, cw, ch);
    const validPixels: [number, number][] = [];

    // Scan pixels at high resolution
    const step = 2;
    for (let py = 0; py < ch; py += step) {
      for (let px = 0; px < cw; px += step) {
        if (img.data[(py * cw + px) * 4] > 110) {
          validPixels.push([px / SCALE, py / SCALE]);
        }
      }
    }

    const totalValid = validPixels.length;
    if (totalValid === 0) return [];

    // UNIFORM STRIDE SAMPLING: Guarantees every letter gets equal dot coverage (Zero holes/clumps)
    const pts: [number, number][] = [];
    const stride = totalValid / count;

    for (let i = 0; i < count; i++) {
      const idx = Math.floor(i * stride) % totalValid;
      pts.push(validPixels[idx]);
    }

    return pts;
  } catch (err) {
    console.warn("HeroParticleTypography: samplePoints handled safe fallback", err);
    return [];
  }
}

export function HeroParticleTypography() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function syncSize() {
      const clientW = container?.clientWidth || 0;
      const clientH = container?.clientHeight || 0;
      const W = Math.max(clientW, 1);
      const H = Math.max(clientH, 1);

      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      canvas!.width = Math.max(1, Math.round(W * dpr));
      canvas!.height = Math.max(1, Math.round(H * dpr));
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.scale(dpr, dpr);
      return { W, H };
    }

    let { W, H } = syncSize();

    // High density particle count for solid letterforms
    const COUNT = W < 450 ? 1200 : 1600;
    // 1.35px - 1.65px dots: Crisp, distinct, easily readable
    const PSIZE = 1.35;

    const particles: Particle[] = [];
    for (let i = 0; i < COUNT; i++) {
      const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      const px = Math.random() * W;
      const py = Math.random() * H;
      particles.push({
        x: px,
        y: py,
        prevTx: px,
        prevTy: py,
        nextTx: W / 2,
        nextTy: H / 2,
        vx: 0,
        vy: 0,
        size: PSIZE + Math.random() * 0.35,
        r,
        g,
        b,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const targets: ([number, number][] | null)[] = [null, null, null];

    let activeSentenceIdx = 0;
    let crossT = 1.0;
    const CROSS_DUR = 0.9;
    const HOLD_DUR = 3.4;
    let holdTimer = 0;
    let mounted = true;
    let canvasAlpha = 0;

    function morphToSentence(idx: number) {
      const pts = targets[idx];
      if (!pts || pts.length === 0) return;
      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];
        p.prevTx = p.nextTx;
        p.prevTy = p.nextTy;
        const [cx, cy] = pts[i % pts.length];
        p.nextTx = cx;
        p.nextTy = cy;
      }
      crossT = 0;
      holdTimer = 0;
    }

    (async () => {
      if (W <= 10 || H <= 10) {
        await new Promise((r) => setTimeout(r, 50));
        if (!mounted) return;
        ({ W, H } = syncSize());
      }
      for (let s = 0; s < SENTENCES.length; s++) {
        targets[s] = await samplePoints(SENTENCES[s], W, H, COUNT);
        if (!mounted) return;
      }
      if (targets[0] && targets[0].length > 0) {
        for (let i = 0; i < COUNT; i++) {
          const p = particles[i];
          const pts = targets[0]!;
          const [cx, cy] = pts[i % pts.length];
          p.prevTx = p.x;
          p.prevTy = p.y;
          p.nextTx = cx;
          p.nextTy = cy;
        }
        crossT = 0;
      }
    })();

    // Mouse interaction
    const mouse = { x: -9999, y: -9999, active: false };
    const onMM = (e: MouseEvent) => {
      const r = container!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onML = () => {
      mouse.active = false;
    };
    container.addEventListener("mousemove", onMM);
    container.addEventListener("mouseleave", onML);

    // Responsive ResizeObserver: Auto-adjusts immediately when screen size changes
    const ro = new ResizeObserver(async (entries) => {
      for (const entry of entries) {
        const ew = Math.round(entry.contentRect.width);
        const eh = Math.round(entry.contentRect.height);
        if (ew <= 0 || eh <= 0) continue;

        const size = syncSize();
        W = size.W;
        H = size.H;

        for (let s = 0; s < SENTENCES.length; s++) {
          targets[s] = await samplePoints(SENTENCES[s], W, H, COUNT);
        }
        if (mounted) morphToSentence(activeSentenceIdx);
      }
    });
    ro.observe(container);

    let animId: number;
    let lastT = performance.now();

    const render = (now: number) => {
      animId = requestAnimationFrame(render);

      const dt = Math.min((now - lastT) / 1000, 0.06);
      lastT = now;

      if (crossT < 1) crossT = Math.min(1, crossT + dt / CROSS_DUR);

      if (crossT >= 1) {
        holdTimer += dt;
        if (holdTimer >= HOLD_DUR) {
          activeSentenceIdx = (activeSentenceIdx + 1) % SENTENCES.length;
          morphToSentence(activeSentenceIdx);
        }
      }

      if (crossT >= 1) {
        canvasAlpha = Math.min(1, canvasAlpha + dt * 3);
      } else if (crossT < 0.35) {
        const p = crossT / 0.35;
        canvasAlpha = 1 - p * 0.92;
      } else if (crossT < 0.65) {
        canvasAlpha = 0.08;
      } else {
        const p = (crossT - 0.65) / 0.35;
        canvasAlpha = 0.08 + p * 0.92;
      }

      const ease = 1 - Math.pow(1 - Math.min(crossT, 1), 4);

      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = Math.max(0, Math.min(1, canvasAlpha));

      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];

        const bx = p.prevTx + (p.nextTx - p.prevTx) * ease;
        const by =
          p.prevTy +
          (p.nextTy - p.prevTy) * ease +
          Math.sin(now * 0.00065 + p.phase) * 0.25;

        p.vx += (bx - p.x) * 0.22;
        p.vy += (by - p.y) * 0.22;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 32 && dist > 0) {
            const f = ((32 - dist) / 32) * 2.2;
            p.vx += (dx / dist) * f;
            p.vy += (dy / dist) * f;
          }
        }

        p.vx *= 0.74;
        p.vy *= 0.74;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 6.2832);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    animId = requestAnimationFrame(render);

    return () => {
      mounted = false;
      cancelAnimationFrame(animId);
      ro.disconnect();
      container.removeEventListener("mousemove", onMM);
      container.removeEventListener("mouseleave", onML);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none"
      aria-label="Particle Typography"
    >
      <canvas ref={canvasRef} className="block" style={{ display: "block" }} />
    </div>
  );
}
