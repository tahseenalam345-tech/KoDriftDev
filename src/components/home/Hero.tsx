"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroShowcaseStack } from "./HeroShowcaseStack";
import { HeroParticleTypography } from "./HeroParticleTypography";

export function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full max-w-full overflow-hidden overflow-x-clip bg-transparent"
      aria-label="KoDriftDev — Build better online"
    >
      {/* ── Ambient atmosphere (exact crystal blue palette from logo) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Prominent bottom-right crystal blue radiance (matching reference screenshot) */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-70px",
            width: "820px",
            height: "640px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at 65% 65%, rgba(44, 129, 250, 0.62) 0%, rgba(0, 110, 245, 0.46) 32%, rgba(0, 63, 197, 0.28) 58%, rgba(0, 28, 91, 0.16) 78%, transparent 100%)",
            filter: "blur(95px)",
          }}
        />
        {/* Bottom-center deep crystal underlay (#003FC5 / #001C5B) */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "22%",
            width: "560px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 110, 245, 0.28) 0%, rgba(0, 63, 197, 0.20) 45%, rgba(0, 28, 91, 0.12) 78%, transparent 100%)",
            filter: "blur(110px)",
          }}
        />
      </div>

      {/* ── Hero canvas ── */}
      <div
        className="relative mx-auto w-full px-2.5 sm:px-5"
        style={{ maxWidth: "1360px" }}
      >
        <div
          className="relative mx-0 sm:mx-4 md:mx-6 lg:mx-8 rounded-none sm:rounded-2xl overflow-hidden"
          style={{
            border: "none",
            background: "linear-gradient(150deg, rgba(255,255,255,0.65) 0%, rgba(244,246,250,0.40) 50%, rgba(235,240,248,0.25) 100%)",
            boxShadow: "0 24px 60px -12px rgba(0, 63, 197, 0.10), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            // Reduced hero canvas height & refined padding (plenty of room above headline on mobile)
            paddingTop: "clamp(62px, 7.5vw, 76px)",
            paddingBottom: "clamp(24px, 3.5vw, 64px)",
            paddingLeft: "clamp(1.1rem, 4vw, 2.5rem)",
            paddingRight: "clamp(1.1rem, 4vw, 2.5rem)",
          }}
        >
          {/* Canvas inner dot grid (contained to center card only) */}
          <div
            className="pointer-events-none absolute inset-0 rounded-none sm:rounded-2xl"
            style={{
              backgroundImage: "radial-gradient(rgba(100, 116, 139, 0.38) 1.1px, transparent 1.1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />

          {/* Canvas inner bottom-right main crystal radiance (matching reference) */}
          <div
            className="pointer-events-none absolute -bottom-28 -right-20 rounded-full"
            style={{
              width: "720px",
              height: "560px",
              background: "radial-gradient(circle at center, rgba(44, 129, 250, 0.52) 0%, rgba(0, 110, 245, 0.38) 32%, rgba(0, 63, 197, 0.22) 60%, rgba(0, 28, 91, 0.12) 80%, transparent 100%)",
              filter: "blur(75px)",
            }}
            aria-hidden="true"
          />

          {/* Canvas inner bright cyan reflection core */}
          <div
            className="pointer-events-none absolute -bottom-10 right-12 rounded-full"
            style={{
              width: "440px",
              height: "340px",
              background: "radial-gradient(circle, rgba(44, 129, 250, 0.55) 0%, rgba(0, 110, 245, 0.28) 45%, transparent 75%)",
              filter: "blur(55px)",
            }}
            aria-hidden="true"
          />

          {/* Canvas bottom wash across border */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
            style={{
              background: "linear-gradient(to top, rgba(0, 63, 197, 0.12) 0%, rgba(44, 129, 250, 0.06) 45%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* ── Top Centered Particle Typography (compact height on mobile) ── */}
          <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-30 w-[94%] max-w-[560px] sm:max-w-[680px] pointer-events-auto">
            <div
              className="h-[44px] sm:h-[72px] w-full flex items-center justify-center relative overflow-visible"
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "-8%",
                  right: "-8%",
                  background: "radial-gradient(ellipse 80% 100% at center, rgba(244,246,251,0.97) 0%, rgba(244,246,251,0.92) 45%, rgba(244,246,251,0.50) 70%, transparent 100%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                <HeroParticleTypography />
              </div>
            </div>
          </div>

          {/* Desktop: 54% left content / 46% right project visual */}
          <div
            className="relative z-10 grid grid-cols-1 lg:grid-cols-[54%_46%] gap-6 lg:gap-4 items-center"
            style={{ minHeight: "clamp(380px, 54vw, 640px)" }}
          >

            {/* ── LEFT: Copy (does not exceed 50% of canvas) ── */}
            <div className="relative z-20 flex flex-col justify-center lg:max-w-[520px] gap-3.5 sm:gap-5">

              {/* H1 — staggered forward movement for 'better' and 'online.', with 'better' in brand blue theme & hover shine effect */}
              <h1
                className="hero-headline flex flex-col items-start cursor-default"
                style={{
                  fontSize: "clamp(3.15rem, 8.8vw, 5.6rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.055em",
                }}
              >
                <motion.span
                  initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="block select-none"
                >
                  <span className="headline-shine-word headline-shine-dark headline-word-1">
                    Build
                  </span>
                </motion.span>

                <motion.span
                  initial={shouldReduce ? {} : { opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="block select-none ml-2.5 sm:ml-[clamp(1.2rem,3.4vw,3.2rem)]"
                >
                  <span className="headline-shine-word headline-shine-blue headline-word-2">
                    better
                  </span>
                </motion.span>

                <motion.span
                  initial={shouldReduce ? {} : { opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="block select-none ml-4 sm:ml-[clamp(2.4rem,6.8vw,6.4rem)]"
                >
                  <span className="headline-shine-word headline-shine-dark headline-word-3">
                    online.
                  </span>
                </motion.span>
              </h1>

              {/* Phrase panel + badge matching reference screenshot */}
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 sm:gap-3 self-start flex-wrap"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <div
                  className="px-3.5 py-1.5 sm:px-5.5 sm:py-3 rounded-xl sm:rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.82)",
                    backdropFilter: "blur(20px) saturate(130%)",
                    WebkitBackdropFilter: "blur(20px) saturate(130%)",
                    border: "1.5px solid rgba(44, 129, 250, 0.42)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.95), 0 8px 30px rgba(0, 110, 245, 0.16)",
                  }}
                >
                  <span
                    className="font-heading font-extrabold text-[13px] sm:text-base md:text-lg"
                    style={{
                      letterSpacing: "-0.038em",
                      lineHeight: 1.05,
                      background: "linear-gradient(135deg, #001C5B 0%, #003FC5 45%, #006EF5 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Websites. Apps. Systems.
                  </span>
                </div>

                {/* Floating pill badge matching "Creative" in reference screenshot */}
                <div
                  className="hidden sm:inline-flex items-center"
                  style={{
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #003FC5 0%, #006EF5 55%, #2C81FA 100%)",
                    boxShadow: "0 4px 16px rgba(0, 110, 245, 0.32)",
                    border: "1px solid rgba(255, 255, 255, 0.45)",
                    transform: "rotate(2deg) translateY(3px)",
                  }}
                >
                  <span className="text-[12px] font-bold text-white tracking-wide">Digital Studio</span>
                </div>
              </motion.div>

              {/* Body — 410px to 450px max width */}
              <p
                style={{
                  fontSize: "clamp(14px, 1.4vw, 17px)",
                  lineHeight: 1.55,
                  color: "var(--text-muted)",
                  maxWidth: "430px",
                }}
              >
                We build useful digital products for businesses.
              </p>

              {/* CTA row — glossy rounded pill buttons matching topbar with shine effect */}
              <div className="flex flex-row items-center justify-center sm:justify-start gap-2.5 sm:gap-3.5 pt-1 w-full">
                <Link
                  href="/contact"
                  className="btn-pill-dark lighter-button default group flex-1 sm:flex-initial inline-flex items-center justify-center text-center text-xs sm:text-sm py-2.5 px-3.5 sm:py-3.5 sm:px-6 shrink-0"
                >
                  <span className="truncate">Start a project</span>
                  <ArrowRight className="btn-arrow w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href="/work"
                  className="btn-pill-white lighter-button default group flex-1 sm:flex-initial inline-flex items-center justify-center text-center text-xs sm:text-sm py-2.5 px-3.5 sm:py-3.5 sm:px-6 shrink-0"
                >
                  <span className="truncate">View our work</span>
                  <ArrowRight className="btn-arrow w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: 3D Showcase with 3 layered cards and sentence particle typography ── */}
            <div className="relative flex items-center justify-center lg:justify-end w-full min-h-[225px] sm:min-h-[400px] md:min-h-[470px] z-20">
              <HeroShowcaseStack />
            </div>
          </div>

          {/* ── KoDrift 3D embossed decorative wordmark (Centered on mobile right below cards, right-aligned on desktop) ── */}
          <div
            className="pointer-events-none absolute bottom-1 sm:-bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 select-none overflow-hidden text-center w-full sm:w-auto"
            aria-hidden="true"
          >
            <span
              className="block font-heading font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(2.75rem, 11vw, 13rem)",
                letterSpacing: "-0.075em",
                lineHeight: "0.85",
                color: "rgba(255, 255, 255, 0.42)",
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.90)",
                textShadow: "0 4px 24px rgba(0, 63, 197, 0.22), 0 1px 2px rgba(0, 28, 91, 0.15)",
                userSelect: "none",
              }}
            >
              KoDrift
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
