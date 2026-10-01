import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ServicePreview } from "@/components/home/ServicePreview";
import { WorkPreview } from "@/components/home/WorkPreview";
import { AiPhotoPreview } from "@/components/home/AiPhotoPreview";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { PricingPreview } from "@/components/home/PricingPreview";
import { TestimonialPreview } from "@/components/home/TestimonialPreview";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full max-w-full overflow-x-clip">
      <Hero />
      {/* ── Continuous Atmospheric Background: Flows from Services all the way through Selected Work ── */}
      <div className="relative w-full max-w-full overflow-hidden overflow-x-clip">
        {/* Continuous Soft Tinted Base Canvas */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(246, 250, 255, 0.95) 0%, rgba(239, 245, 254, 0.88) 35%, rgba(235, 242, 253, 0.82) 70%, rgba(244, 248, 255, 0.95) 100%)",
          }}
          aria-hidden="true"
        />

        {/* High-Tech Dot Grid Texture matching Hero aesthetic */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 110, 245, 0.16) 1.1px, transparent 1.1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Atmospheric Radiance Orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Top-left crystal blue radiance behind Services headline */}
          <div
            className="absolute -top-16 -left-20 w-[640px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.20) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
              filter: "blur(110px)",
            }}
          />

          {/* Top-right prominent glow behind Services cards & particle torus */}
          <div
            className="absolute top-28 -right-24 w-[760px] h-[620px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.22) 0%, rgba(44, 129, 250, 0.12) 40%, rgba(0, 28, 91, 0.05) 70%, transparent 100%)",
              filter: "blur(120px)",
            }}
          />

          {/* Mid-section bridge glow connecting Services & Selected Work */}
          <div
            className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[700px] h-[450px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.14) 0%, rgba(0, 63, 197, 0.06) 50%, transparent 75%)",
              filter: "blur(130px)",
            }}
          />

          {/* Bottom ambient glow under Selected Work deck */}
          <div
            className="absolute bottom-10 right-10 w-[650px] h-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.14) 0%, transparent 70%)",
              filter: "blur(130px)",
            }}
          />
        </div>

        {/* Content Flow */}
        <div className="relative z-10">
          <ServicePreview />
          <WorkPreview />
        </div>
      </div>
      <AiPhotoPreview />
      <ProcessPreview />
      <PricingPreview />
      <TestimonialPreview />

      {/* ── Contact CTA: Compact & Focused (Main headline + 2 buttons) ── */}
      <section
        id="contact"
        className="relative py-10 sm:py-16 overflow-hidden"
        style={{
          background: "linear-gradient(150deg, #030A1A 0%, #06173B 45%, #0B2456 100%)",
        }}
        aria-label="Contact — Start a project"
      >
        {/* Crystal Atmosphere & Ambient Luminous Beams */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.25) 0%, rgba(44, 129, 250, 0.10) 45%, transparent 75%)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.30]"
            style={{
              backgroundImage: "radial-gradient(rgba(44, 129, 250, 0.25) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="space-y-4 sm:space-y-5">
            {/* 3D Glassmorphic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-[rgba(44,129,250,0.35)] shadow-[0_4px_16px_rgba(0,110,245,0.20)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C81FA] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2C81FA]" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#93C5FD] via-[#60A5FA] to-[#2C81FA] bg-clip-text text-transparent">
                Start a conversation
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Have an idea?{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#2C81FA] to-[#006EF5] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(44,129,250,0.35)]">
                Let&apos;s make it real.
              </span>
            </h2>

            {/* 2 Clean Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white overflow-hidden shadow-[0_4px_24px_rgba(0,110,245,0.45)] transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(92deg, #003FC5 0%, #006EF5 55%, #2C81FA 100%)",
                }}
              >
                <span>Contact Form</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white/95 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/35 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
