import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactFormPlaceholder } from "@/components/contact/ContactFormPlaceholder";
import { constructMetadata } from "@/lib/metadata";
import { ShieldCheck, Zap, MessageSquare } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us & Project Enquiries | Kodrift",
  description:
    "Get in touch with Kodrift's lead software engineers. Send us a message about what you want to build, automate, or scale. We return transparent, milestone-based proposals.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative py-8 sm:py-16 lg:py-20 space-y-12 sm:space-y-16 overflow-hidden bg-transparent">
      {/* ── Ambient Radiant Sky Glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.22) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute top-[700px] -left-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── Page Hero ── */}
      <section className="relative z-10">
        <Container>
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Top 3D Glassmorphic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.30)] shadow-[0_4px_16px_rgba(0,110,245,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                Direct Engineering Consultation
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold font-heading text-[#0B132B] tracking-tight leading-[1.12]">
              Let’s talk about{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                the work.
              </span>
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-[#3A4B6E] font-medium leading-relaxed max-w-2xl">
              Share what you want to build, automate, or fix. We will analyze your system requirements and return a clear, milestone-based proposal with no fluff.
            </p>

            {/* Value Metric Pills */}
            <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-[11px] sm:text-xs font-semibold text-[#0B132B]">
                <Zap className="h-3.5 w-3.5 text-[#F59E0B]" />
                <span>24h Proposal Turnaround</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-[11px] sm:text-xs font-semibold text-[#0B132B]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>100% Client Code Ownership</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-[11px] sm:text-xs font-semibold text-[#0B132B]">
                <MessageSquare className="h-3.5 w-3.5 text-[#006EF5]" />
                <span>Direct Engineer Contact</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Form & Direct Contact Details Grid ── */}
      <section className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <ContactDetails />
            </div>
            <div className="lg:col-span-7">
              <ContactFormPlaceholder />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
