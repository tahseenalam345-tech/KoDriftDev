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

      {/* Contact CTA */}
      <section
        id="contact"
        className="relative py-28 sm:py-36 lg:py-44 overflow-hidden kd-contact-cta"
        aria-label="Contact — Start a project"
      >
        <style>{`
          .kd-contact-cta {
            background: linear-gradient(160deg, #081C1B 0%, #0D2D2A 60%, #091F1E 100%);
          }
        `}</style>

        {/* Atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-32 -left-24 w-[500px] h-[400px] rounded-full"
            style={{ background: "var(--blue-light)", filter: "blur(130px)", opacity: 0.16 }}
          />
          <div
            className="absolute -bottom-24 right-0 w-[450px] h-[360px] rounded-full"
            style={{ background: "var(--lavender-light)", filter: "blur(120px)", opacity: 0.14 }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(249,249,247,0.6) 0.75px, transparent 0.75px)",
              backgroundSize: "18px 18px",
              opacity: 0.04,
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="metadata-text" style={{ color: "var(--teal-bright)" }}>
                Start a conversation
              </span>
              <h2 className="section-headline" style={{ color: "rgba(249,249,247,0.95)" }}>
                Have an idea?{" "}
                <span style={{ color: "var(--teal)" }}>Let&apos;s make it real.</span>
              </h2>
              <p
                className="text-base sm:text-[17px] leading-relaxed max-w-[520px]"
                style={{ color: "rgba(249,249,247,0.52)" }}
              >
                Send us a quick message. Tell us what you want to build, improve or automate.
              </p>
              <p
                className="text-[13px] font-mono"
                style={{ color: "rgba(249,249,247,0.28)", letterSpacing: "0.02em" }}
              >
                Direct communication. Practical delivery. No unnecessary layers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact" className="btn-primary">
                  <span>Start a project</span>
                  <ArrowRight className="btn-arrow" aria-hidden="true" />
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.95)",
                    borderColor: "rgba(255,255,255,0.22)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.20), 0 3px 0 rgba(0,0,0,0.40)",
                  }}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" style={{ color: "var(--brand-blue-light)" }} aria-hidden="true" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>

            {/* Right: KD decorative mark */}
            <div
              className="hidden lg:flex lg:col-span-5 items-center justify-center select-none"
              aria-hidden="true"
            >
              <span
                className="font-heading font-extrabold leading-none"
                style={{
                  fontSize: "clamp(7rem, 14vw, 16rem)",
                  letterSpacing: "-0.08em",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(118,225,205,0.18)",
                  textShadow: "0 1px 0 rgba(118,225,205,0.08), 0 -1px 0 rgba(0,0,0,0.3)",
                  lineHeight: "0.85",
                }}
              >
                KD
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
