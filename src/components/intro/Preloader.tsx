"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasVideo, setHasVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { completePreloader } = useAnimation();

  useEffect(() => {
    // 1. Digital progress counter (0 -> 100 synchronized with video)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12 + 6);
      });
    }, 110);

    // 2. Video Playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }

    // 3. Clean exit when video finishes or 2.8s safety fallback
    const timer = setTimeout(() => {
      setLoading(false);
      completePreloader?.();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [completePreloader]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="kodrift-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#020617] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0050C8]/20 blur-[140px] pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#2C81FA]/15 blur-[80px] pointer-events-none" />

          {/* Background Cyber Grid */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#2C81FA 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Central Showcase Stage */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Rotating 3D HUD Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-44 h-44 rounded-full border border-dashed border-[#2C81FA]/30 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 rounded-full border border-dotted border-white/10 pointer-events-none"
            />

            {/* Video Logo Player (If present) */}
            <div 
              className="relative w-40 h-40 flex items-center justify-center rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,110,245,0.35)]"
              style={{
                maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle, black 70%, transparent 100%)",
              }}
            >
              {hasVideo ? (
                <video
                  ref={videoRef}
                  src="/videos/logo-intro.webm"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onError={() => setHasVideo(false)}
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Fallback Glowing Logo Mark with Laser Sweep */
                <div className="relative flex items-center justify-center w-full h-full bg-[#001C5B]/40 border border-[#2C81FA]/40 rounded-3xl backdrop-blur-md">
                  <div className="text-3xl font-black font-['Manrope'] tracking-wider text-white">
                    Ko<span className="text-[#2C81FA]">Drift</span>Dev
                  </div>
                  {/* Laser Scanline */}
                  <motion.div
                    animate={{ y: [-60, 60] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#76E1CD] to-transparent shadow-[0_0_15px_#76E1CD]"
                  />
                </div>
              )}
            </div>

            {/* Title & Digital Progress Counter */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-xs font-mono uppercase tracking-[0.35em] text-slate-400"
              >
                INITIALIZING SYSTEM
              </motion.span>

              {/* Progress Percentage */}
              <div className="flex items-center gap-2">
                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#003FC5] to-[#2C81FA]"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-[#2C81FA] w-8">
                  {Math.min(progress, 100)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
