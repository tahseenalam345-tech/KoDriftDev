"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HORIZONTAL_IMAGES = [
  {
    id: "rect-1",
    src: "/images/home/showcase-rect-1.png",
    alt: "KoDrift Digital Platform Dashboard",
  },
  {
    id: "rect-2",
    src: "/images/home/showcase-rect-2.png",
    alt: "KoDrift Web Architecture OMS",
  },
  {
    id: "rect-3",
    src: "/images/home/showcase-rect-3.png",
    alt: "KoDrift E-Commerce Platform",
  },
];

export function HeroShowcaseStack() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Elegant, smooth shuffle every 4.0 seconds
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HORIZONTAL_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Indices for the 3 simultaneous horizontal cards (Back, Middle, Front)
  const backIdx = (activeIdx + 2) % HORIZONTAL_IMAGES.length;
  const middleIdx = (activeIdx + 1) % HORIZONTAL_IMAGES.length;
  const frontIdx = activeIdx;

  return (
    <div
      className="relative flex items-center justify-center w-full max-w-[560px] h-[370px] sm:h-[420px] md:h-[450px] select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient crystal blue radiance behind images */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(44, 129, 250, 0.38) 0%, rgba(0, 110, 245, 0.22) 40%, rgba(0, 63, 197, 0.08) 70%, transparent 100%)",
          filter: "blur(55px)",
        }}
        aria-hidden="true"
      />

      {/* ── 1. CARD 1: BACK HORIZONTAL SCREEN (Top-right, z-10, staggered with equal spacing) ── */}
      <div
        className="absolute top-2 sm:top-4 right-2 sm:right-4 w-[73%] sm:w-[76%] z-10 pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-8deg) rotateX(4.5deg) rotateZ(3deg) scale(0.91)",
        }}
      >
        <div className="relative w-full aspect-[1350/900] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-slate-900/60 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,12,38,0.50)] overflow-hidden">
          <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-slate-950">
            {HORIZONTAL_IMAGES.map((img, idx) => {
              const isVisible = idx === backIdx;
              return (
                <div
                  key={img.id}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: isVisible ? 0.85 : 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 460px"
                    className="object-cover object-top"
                  />
                </div>
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── 2. CARD 2: MIDDLE HORIZONTAL SCREEN (Balanced equal offset, z-20) ── */}
      <div
        className="absolute top-6 sm:top-9 right-6 sm:right-9 w-[74%] sm:w-[77%] z-20 pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-6deg) rotateX(3deg) rotateZ(0.5deg) scale(0.96)",
        }}
      >
        <div className="relative w-full aspect-[1350/900] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-slate-900/70 backdrop-blur-xl border border-white/25 shadow-[0_24px_55px_rgba(0,12,38,0.55)] overflow-hidden">
          <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-slate-950">
            {HORIZONTAL_IMAGES.map((img, idx) => {
              const isVisible = idx === middleIdx;
              return (
                <div
                  key={img.id}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: isVisible ? 0.92 : 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 460px"
                    className="object-cover object-top"
                  />
                </div>
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── 3. CARD 3: FRONT HORIZONTAL SCREEN (Foreground active, equal step offset, z-25) ── */}
      <div
        className="absolute top-10 sm:top-14 right-10 sm:right-14 w-[75%] sm:w-[78%] z-25"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-4deg) rotateX(1.8deg) rotateZ(-2deg) scale(1.0)",
        }}
      >
        <div
          className="relative w-full aspect-[1350/900] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-slate-950/45 backdrop-blur-2xl border border-white/35 overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          style={{
            boxShadow:
              "0 28px 65px -12px rgba(0, 110, 245, 0.30), 0 16px 36px rgba(0, 15, 45, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.50)",
          }}
        >
          <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-slate-950">
            {/* Pure CSS crossfade dissolve: ZERO black flash, ZERO jump */}
            {HORIZONTAL_IMAGES.map((img, idx) => {
              const isCurrent = idx === frontIdx;
              return (
                <div
                  key={img.id}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: isCurrent ? 1 : 0,
                    zIndex: isCurrent ? 2 : 1,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 85vw, 480px"
                    className="object-cover object-top"
                  />
                </div>
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-white/15 pointer-events-none z-10" />
          </div>
        </div>
      </div>

      {/* ── 4. FRONT MOBILE MOCKUP (Vertically balanced & visually aligned, NOT too low, z-35) ── */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [-4, 4, -4],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.1 },
          x: { duration: 0.6, delay: 0.1 },
          y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-2 sm:left-4 md:left-6 top-6 sm:top-8 w-[29%] sm:w-[31%] max-w-[160px] aspect-[863/1347] z-35"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-7deg) rotateX(2deg) rotateZ(3deg) scale(1.02)",
        }}
      >
        <div
          className="relative w-full h-full p-1.5 sm:p-2 rounded-[22px] sm:rounded-[28px] bg-slate-950/80 backdrop-blur-2xl border-2 border-white/40 overflow-hidden transition-all duration-300 hover:scale-[1.04]"
          style={{
            boxShadow:
              "0 26px 60px rgba(0, 8, 28, 0.65), 0 0 28px rgba(44, 129, 250, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.70)",
          }}
        >
          {/* Mobile Dynamic Island Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 sm:w-13 h-2 sm:h-2.5 rounded-full bg-slate-950 border border-white/20 z-40" />

          <div className="relative w-full h-full rounded-[16px] sm:rounded-[22px] overflow-hidden bg-slate-950">
            <Image
              src="/images/home/showcase-vertical.png"
              alt="KoDrift Mobile Application"
              fill
              priority
              sizes="(max-width: 768px) 40vw, 200px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
