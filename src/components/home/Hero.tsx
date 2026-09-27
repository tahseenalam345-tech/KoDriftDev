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
      className="relative w-full overflow-hidden bg-transparent"
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
        className="relative mx-auto w-full"
        style={{ maxWidth: "1360px", padding: "0 1.25rem" }}
      >
        <div
          className="relative mx-0 sm:mx-4 md:mx-6 lg:mx-8 rounded-none sm:rounded-2xl overflow-hidden"
          style={{
            border: "none",
            background: "linear-gradient(150deg, rgba(255,255,255,0.65) 0%, rgba(244,246,250,0.40) 50%, rgba(235,240,248,0.25) 100%)",
            boxShadow: "0 24px 60px -12px rgba(0, 63, 197, 0.10), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            // Reduced hero canvas height & refined padding
            paddingTop: "clamp(58px, 6.2vw, 68px)",
            paddingBottom: "clamp(52px, 5.8vw, 64px)",
            paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)",
            paddingRight: "clamp(1.5rem, 4vw, 2.5rem)",
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

          {/* ── Top Centered Pure Particle Typography (No HTML frame, pure readable particles) ── */}
          <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[560px] sm:max-w-[620px] h-[48px] sm:h-[56px] flex items-center justify-center pointer-events-auto">
            <HeroParticleTypography />
          </div>

          {/* Desktop: 54% left content / 46% right project visual */}
          <div
            className="relative z-10 grid grid-cols-1 lg:grid-cols-[54%_46%] gap-8 lg:gap-4 items-center"
            style={{ minHeight: "clamp(480px, 54vw, 640px)" }}
          >

            {/* ── LEFT: Copy (does not exceed 50% of canvas) ── */}
            <div className="relative z-20 flex flex-col justify-center lg:max-w-[490px]" style={{ gap: "20px" }}>

              {/* H1 — exact copy, max 2 lines at 1280px */}
              <h1
                className="hero-headline"
                style={{
                  fontSize: "clamp(3.5rem, 5.4vw, 5.8rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.065em",
                  maxWidth: "7ch",
                }}
              >
                Build better online.
              </h1>

              {/* Phrase panel + badge matching reference screenshot */}
              <motion.div
                initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-3 self-start flex-wrap"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <div
                  style={{
                    padding: "13px 22px",
                    borderRadius: "18px",
                    background: "rgba(255, 255, 255, 0.82)",
                    backdropFilter: "blur(20px) saturate(130%)",
                    WebkitBackdropFilter: "blur(20px) saturate(130%)",
                    border: "1.5px solid rgba(44, 129, 250, 0.42)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.95), 0 8px 30px rgba(0, 110, 245, 0.16)",
                  }}
                >
                  <span
                    className="font-heading font-extrabold"
                    style={{
                      fontSize: "clamp(1.25rem, 2.1vw, 1.9rem)",
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
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  maxWidth: "430px",
                }}
              >
                We build useful digital products for businesses.
              </p>

              {/* CTA row — glossy rounded pill buttons matching topbar */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link href="/contact" className="btn-pill-dark group">
                  <span>Start a project</span>
                  <ArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
                <Link href="/work" className="btn-pill-dark group">
                  <span>View our work</span>
                  <ArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: 3D Showcase with 3 layered cards and sentence particle typography ── */}
            <div className="relative flex items-center justify-center lg:justify-end w-full min-h-[370px] sm:min-h-[430px] md:min-h-[470px] z-20">
              <HeroShowcaseStack />
            </div>
          </div>

          {/* ── KoDrift 3D embossed decorative wordmark matching reference screenshot ── */}
          <div
            className="pointer-events-none absolute -bottom-3 right-0 sm:right-6 select-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="block font-heading font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(4.5rem, 13vw, 13rem)",
                letterSpacing: "-0.075em",
                lineHeight: "0.80",
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
