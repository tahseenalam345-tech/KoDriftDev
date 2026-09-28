"use client";

import React from "react";
import { Star, ShieldCheck, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { testimonials } from "@/content/testimonials";

const STARS = [1, 2, 3, 4, 5];

function GlowingStarRow({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const starSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars rating" role="img">
      {STARS.map((s) => (
        <Star
          key={s}
          className={`${starSize} text-[#F59E0B] fill-[#F59E0B] filter drop-shadow-[0_2px_6px_rgba(245,158,11,0.45)]`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  if (name.includes("Dr. Tariq")) return "TM";
  if (name.includes("Muhammad")) return "MY";
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TestimonialPreview() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1);

  return (
    <section
      id="reviews"
      className="relative my-2 sm:my-5 lg:my-6 px-2 sm:px-4 lg:px-8 xl:px-10"
      aria-labelledby="testimonials-heading"
    >
      {/* ── Sculpted Island Stage: Warm Golden Trust & Amber Crystal Aesthetic ── */}
      <div
        className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 lg:pb-10 px-3 sm:px-6 lg:px-9 overflow-hidden border border-[rgba(245,158,11,0.26)] shadow-[0_20px_50px_-14px_rgba(217,119,6,0.12),inset_0_2px_4px_rgba(255,255,255,1)]"
        style={{
          background:
            "linear-gradient(165deg, #FFFDF9 0%, #FAF5EB 45%, #F4EBDA 100%)",
        }}
      >
        {/* Subtle Starlight Amber Matrix Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(217, 119, 6, 0.16) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Warm Golden Sunburst Radiance */}
        <div
          className="pointer-events-none absolute -top-24 -left-20 w-[540px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.20) 0%, rgba(217, 119, 6, 0.08) 50%, transparent 75%)",
            filter: "blur(110px)",
          }}
          aria-hidden="true"
        />

        {/* Ambient Rose-Coral Warm Crystal Reflection */}
        <div
          className="pointer-events-none absolute -bottom-16 right-8 w-[520px] h-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(244, 63, 94, 0.12) 0%, rgba(245, 158, 11, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* ── Section Header with Top-Right Trust Badge ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl">
              {/* 3D Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-[rgba(245,158,11,0.35)] shadow-[0_4px_16px_rgba(245,158,11,0.15),inset_0_1px_1px_rgba(255,255,255,1)]">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#F59E0B]" />
                </span>
                <span className="text-[10px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#92400E] via-[#D97706] to-[#F59E0B] bg-clip-text text-transparent">
                  Client Reviews & Trust
                </span>
              </div>

              <h2
                id="testimonials-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-[#0B132B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  Good work should
                </span>{" "}
                <span className="bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#F59E0B] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,158,11,0.22)]">
                  make a real difference.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] font-medium leading-relaxed max-w-[580px]">
                Direct feedback from founders, operators, and professionals who rely on KoDriftDev to build and maintain their software.
              </p>
            </div>

            {/* Top-Right Trust Score Pill */}
            <div className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-[rgba(245,158,11,0.30)] shadow-[0_4px_16px_rgba(245,158,11,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] sm:text-xs font-bold text-[#0B132B]">
                  5.0 ★ Client Rating
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#78350F]">
                  100% Verified Delivery
                </span>
              </div>
            </div>
          </div>

          {/* ── Featured Large 3D Crystal Review Block ── */}
          <blockquote
            className="group relative rounded-[18px] sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-8 lg:p-10 border-[1.5px] border-[rgba(245,158,11,0.28)] hover:border-[#F59E0B] backdrop-blur-xl shadow-[0_16px_36px_-10px_rgba(217,119,6,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_24px_50px_-10px_rgba(245,158,11,0.22),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 overflow-hidden"
            style={{
              background:
                "linear-gradient(150deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 250, 242, 0.92) 55%, rgba(253, 246, 233, 0.88) 100%)",
            }}
          >
            {/* Top ambient color reflection */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#F59E0B]/12 blur-2xl group-hover:bg-[#F59E0B]/22 transition-all duration-300"
              aria-hidden="true"
            />

            {/* Giant decorative watermark quote */}
            <Quote
              className="absolute top-4 right-6 sm:top-6 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 text-[#F59E0B]/10 pointer-events-none stroke-1 select-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-3 sm:space-y-5">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <GlowingStarRow size="lg" />
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-[#FEF3C7] text-[#92400E] border border-[rgba(245,158,11,0.30)]">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#16A34A]" />
                  Verified Case Study
                </span>
              </div>

              <p className="text-sm sm:text-xl lg:text-2xl font-heading font-semibold text-[#0B132B] leading-snug sm:leading-relaxed max-w-4xl tracking-tight">
                &ldquo;{featured.quote}&rdquo;
              </p>

              <footer className="pt-3 sm:pt-5 border-t border-[rgba(245,158,11,0.18)] flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white font-mono font-extrabold text-xs sm:text-base shadow-[0_4px_14px_rgba(245,158,11,0.35)]">
                    {getInitials(featured.name)}
                  </div>
                  <div>
                    <cite className="font-heading font-bold not-italic text-xs sm:text-base text-[#0B132B] block">
                      {featured.name}
                    </cite>
                    <p className="text-[11px] sm:text-sm text-[#475569] font-medium">
                      {featured.role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-[#78350F] bg-white/80 border border-[rgba(245,158,11,0.22)] shadow-xs">
                  <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#16A34A]" />
                  <span>{featured.verificationStatus}</span>
                </div>
              </footer>
            </div>
          </blockquote>

          {/* ── Two Supporting Review Cards (Tilted 3D Crystal Cards) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6" style={{ perspective: "1200px" }}>
            {supporting.map((item, idx) => (
              <blockquote
                key={item.name}
                className={`group relative flex flex-col justify-between rounded-[18px] sm:rounded-[26px] p-3.5 sm:p-7 border-[1.5px] border-[rgba(245,158,11,0.24)] hover:border-[#F59E0B] backdrop-blur-xl shadow-[0_12px_30px_-10px_rgba(217,119,6,0.10),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.20),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 ease-out overflow-hidden hover:rotate-0 hover:-translate-y-1.5 ${
                  idx === 0 ? "md:-rotate-[0.6deg]" : "md:rotate-[0.6deg]"
                }`}
                style={{
                  background:
                    "linear-gradient(150deg, rgba(255, 255, 255, 0.96) 0%, rgba(254, 250, 244, 0.90) 100%)",
                }}
              >
                {/* Subtle top glow */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#F59E0B]/10 blur-xl group-hover:bg-[#F59E0B]/18 transition-all duration-300"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <GlowingStarRow size="sm" />
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-[#92400E] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[rgba(245,158,11,0.25)]">
                      Verified
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-sm text-[#1E293B] leading-snug sm:leading-relaxed font-medium">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <footer className="relative z-10 mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-[rgba(245,158,11,0.16)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white font-mono font-bold text-xs shadow-xs">
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <cite className="font-heading font-bold not-italic text-xs sm:text-sm text-[#0B132B] block">
                        {item.name}
                      </cite>
                      <p className="text-[10px] sm:text-[11px] text-[#64748B] font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#16A34A] font-semibold">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>Client</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
