"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SENTENCES = [
  "HI, WELCOME TO KODRIFTDEV",
  "HAVE A PROJECT IN MIND?",
  "LET'S TALK",
];

export function HeroKineticBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SENTENCES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative flex items-center gap-2.5 px-4 sm:px-6 py-2 rounded-full overflow-hidden select-none transition-all duration-300 hover:border-[#006EF5]/60 hover:shadow-[0_8px_30px_rgba(0,110,245,0.20)]"
      style={{
        background: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(16px) saturate(140%)",
        WebkitBackdropFilter: "blur(16px) saturate(140%)",
        border: "1.5px solid rgba(44, 129, 250, 0.40)",
        boxShadow:
          "inset 0 1px 1px rgba(255, 255, 255, 0.95), 0 8px 24px -6px rgba(0, 110, 245, 0.16)",
      }}
    >
      {/* Radiant Electric Cyan Pulse Dot */}
      <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#006EF5]" />
      </span>

      {/* Kinetic Micro Sparkles */}
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#2C81FA] animate-pulse shrink-0"
        aria-hidden="true"
      />

      {/* 100% Crisp, Sharp, Highly-Readable Animated Typography */}
      <div className="relative h-5 sm:h-6 flex items-center overflow-hidden min-w-[220px] sm:min-w-[270px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(2px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block whitespace-nowrap font-heading font-extrabold text-[12px] sm:text-[13.5px] tracking-[0.10em] uppercase leading-none"
            style={{
              background:
                "linear-gradient(135deg, #001C5B 0%, #003FC5 50%, #006EF5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {SENTENCES[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Subtle end accent sparkle */}
      <span className="text-[11px] font-mono text-[#006EF5] font-bold select-none">
        ✦
      </span>
    </div>
  );
}
