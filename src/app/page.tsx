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

      {/* ── Contact CTA: Deep Midnight Sapphire & Hyper-Azure Radiance ── */}
      <section
        id="contact"
        className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
        style={{
          background: "linear-gradient(150deg, #030A1A 0%, #06173B 45%, #0B2456 100%)",
        }}
        aria-label="Contact — Start a project"
      >
        {/* Crystal Atmosphere & Ambient Luminous Beams */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-32 -left-24 w-[600px] h-[450px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.25) 0%, rgba(44, 129, 250, 0.12) 45%, transparent 75%)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute -bottom-24 right-0 w-[550px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.20) 0%, rgba(0, 45, 140, 0.15) 50%, transparent 75%)",
              filter: "blur(130px)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(rgba(44, 129, 250, 0.25) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: copy & actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* 3D Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-[rgba(44,129,250,0.35)] shadow-[0_4px_16px_rgba(0,110,245,0.20)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C81FA] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2C81FA]" />
                </span>
                <span className="text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#93C5FD] via-[#60A5FA] to-[#2C81FA] bg-clip-text text-transparent">
                  Start a conversation
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Have an idea?{" "}
                <span className="bg-gradient-to-r from-[#60A5FA] via-[#2C81FA] to-[#006EF5] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(44,129,250,0.35)]">
                  Let&apos;s make it real.
                </span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed max-w-[540px] text-white/75 font-medium">
                Send us a quick message. Tell us what you want to build, improve or automate. We respond within hours with practical suggestions.
              </p>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-white/50 tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <span>Direct founder communication • Practical delivery • Zero unnecessary layers</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white overflow-hidden shadow-[0_4px_24px_rgba(0,110,245,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(44,129,250,0.6)]"
                  style={{
                    background: "linear-gradient(92deg, #003FC5 0%, #006EF5 55%, #2C81FA 100%)",
                  }}
                >
                  <span>Start a project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm sm:text-base font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/35 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" aria-hidden="true" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>

            {/* Right: KD illuminated 3D monogram watermark */}
            <div
              className="hidden lg:flex lg:col-span-5 items-center justify-center select-none"
              aria-hidden="true"
            >
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute w-[320px] h-[320px] rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(0, 110, 245, 0.22) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                />
                <span
                  className="relative font-heading font-extrabold leading-none tracking-tighter"
                  style={{
                    fontSize: "clamp(8rem, 16vw, 18rem)",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(44, 129, 250, 0.35)",
                    textShadow: "0 0 40px rgba(0, 110, 245, 0.35)",
                    lineHeight: "0.85",
                  }}
                >
                  KD
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
