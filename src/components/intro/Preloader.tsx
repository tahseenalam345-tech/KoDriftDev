"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";

export function Preloader() {
  const { isPreloaderActive, completePreloader, setActiveShape } = useAnimation();
  const [stage, setStage] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const finishSequence = useCallback(() => {
    setIsFinished(true);
    setActiveShape("sphere");
  }, [setActiveShape]);

  useEffect(() => {
    // 0.0s – 0.6s: Blackout stage. Particles assemble rapidly into core
    setActiveShape("preloader");

    // 0.6s – 1.4s: The particle core stabilizes and pulses with electric blue/cyan glow
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 600);

    // 1.4s – 1.9s: Particles burst outward radially and smoothly settle into Hero sphere position
    const timer2 = setTimeout(() => {
      setStage(2);
      setActiveShape("sphere");
    }, 1400);

    // 1.6s – 2.2s: The preloader overlay fades to opacity: 0 over 0.6s (total exact 2.2s)
    const timer3 = setTimeout(() => {
      setStage(3);
      setIsFinished(true);
    }, 1600);

    // User skip via scroll or Escape key
    const handleSkip = (e: Event) => {
      if ("key" in e && (e as KeyboardEvent).key !== "Escape") return;
      finishSequence();
    };

    window.addEventListener("wheel", handleSkip, { passive: true });
    window.addEventListener("touchmove", handleSkip, { passive: true });
    window.addEventListener("keydown", handleSkip, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("wheel", handleSkip);
      window.removeEventListener("touchmove", handleSkip);
      window.removeEventListener("keydown", handleSkip);
    };
  }, [setActiveShape, finishSequence]);

  if (!isPreloaderActive || !isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinished ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => {
        if (isFinished) {
          setIsMounted(false);
          completePreloader();
          if (typeof window !== "undefined") {
            sessionStorage.setItem("kd_loaded", "true");
          }
        }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        background: "radial-gradient(circle at center, #040E24 0%, #020617 65%, #01040A 100%)",
        pointerEvents: isFinished ? "none" : "auto",
      }}
      aria-label="KoDriftDev Preloader"
    >
          {/* Central stage composition */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Core logo mark — reveals on Stage 1 */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={stage >= 1 ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6 flex h-[62px] w-[62px] items-center justify-center rounded-2xl overflow-hidden"
              style={{
                background: "#04070A",
                border: "1px solid rgba(44, 129, 250, 0.50)",
                boxShadow: "0 0 40px rgba(0, 110, 245, 0.55), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
              }}
            >
              <Image
                src="/images/logo/logo.png"
                alt="KoDrift Logo"
                width={56}
                height={56}
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Glowing minimalist brand title: KODRIFTDEV */}
            <motion.div
              initial={{ opacity: 0, y: 10, letterSpacing: "0.22em" }}
              animate={
                stage >= 1
                  ? { opacity: 1, y: 0, letterSpacing: "0.32em" }
                  : { opacity: 0, y: 10, letterSpacing: "0.22em" }
              }
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-heading font-extrabold text-[18px] sm:text-[20px] uppercase text-white tracking-[0.32em]"
              style={{
                textShadow: "0 0 24px rgba(44, 129, 250, 0.75), 0 0 45px rgba(0, 110, 245, 0.45)",
              }}
            >
              KODRIFT<span style={{ color: "#2C81FA" }}>DEV</span>
            </motion.div>

            {/* Micro subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={stage >= 1 ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-mono text-[10px] tracking-widest text-[#93C5FD] uppercase mt-2.5"
            >
              {stage === 2 ? "SYSTEM ASSEMBLED" : "INITIALIZING CORE"}
            </motion.p>
          </div>

          {/* Escape hint */}
          <div className="absolute bottom-6 text-center">
            <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">
              Press ESC or scroll to skip
            </span>
          </div>
        </motion.div>
  );
}
