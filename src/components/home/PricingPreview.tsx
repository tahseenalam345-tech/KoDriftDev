"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { pricingPackages } from "@/content/pricing";

const PLAN_THEMES = [
  {
    icon: Zap,
    themeColor: "#006EF5",
    badgeBg: "rgba(0, 110, 245, 0.08)",
    badgeBorder: "rgba(0, 110, 245, 0.20)",
    badgeText: "#006EF5",
    pillLabel: "Focused Sprint",
  },
  {
    icon: Sparkles,
    themeColor: "#006EF5",
    badgeBg: "rgba(0, 110, 245, 0.12)",
    badgeBorder: "rgba(0, 110, 245, 0.35)",
    badgeText: "#004AC7",
    pillLabel: "Most Popular",
  },
  {
    icon: Cpu,
    themeColor: "#2C81FA",
    badgeBg: "rgba(44, 129, 250, 0.20)",
    badgeBorder: "rgba(44, 129, 250, 0.40)",
    badgeText: "#60A5FA",
    pillLabel: "Custom Systems",
  },
];

export function PricingPreview() {
  return (
    <section
      id="pricing"
      className="relative my-2 sm:my-5 lg:my-6 px-2 sm:px-4 lg:px-8 xl:px-10"
      aria-labelledby="pricing-heading"
    >
      {/* ── Sculpted Island Stage with Cohesive Brand Architecture ── */}
      <div
        className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 lg:pb-10 px-3 sm:px-6 lg:px-9 overflow-hidden border border-[rgba(0,110,245,0.18)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.08),inset_0_2px_4px_rgba(255,255,255,1)]"
        style={{
          background:
            "linear-gradient(175deg, #EEF4FB 0%, #E4ECF8 45%, #F0F5FC 100%)",
        }}
      >
        {/* Subtle Decorative Architectural Dot Pattern Overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 110, 245, 0.14) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Azure Radiance */}
        <div
          className="pointer-events-none absolute -top-20 -left-16 w-[450px] h-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.14) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          aria-hidden="true"
        />

        {/* Ambient Warm Indigo Glow */}
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[480px] h-[340px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 75%)",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* ── Section Header with Top-Right Button ── */}
          <div className="flex items-start justify-between gap-3 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl">
              {/* 3D Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.32)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#006EF5]" />
                </span>
                <span className="text-[10px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                  Pricing & Plans
                </span>
              </div>

              <h2
                id="pricing-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-[#0B132B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  Start with what
                </span>{" "}
                <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                  makes sense.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] font-medium leading-relaxed max-w-[580px]">
                You do not need to fit into a rigid package. Use these starting points, then we tailor the work around your business.
              </p>
            </div>

            {/* Top-Right CTA Button */}
            <Link
              href="/pricing"
              className="group shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white/90 hover:bg-white text-xs sm:text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.25)] hover:border-[rgba(0,110,245,0.50)] shadow-[0_2px_10px_rgba(0,110,245,0.08)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.18)] transition-all duration-200 mt-0.5 sm:mt-1"
            >
              <span className="hidden sm:inline">View pricing guide</span>
              <span className="sm:hidden">Pricing</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* ── 3 Responsive Pricing Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {pricingPackages.map((pkg, idx) => {
              const theme = PLAN_THEMES[idx] || PLAN_THEMES[0];
              const Icon = theme.icon;
              const isGrowth = pkg.name === "Growth";
              const isScale = pkg.name === "Scale";

              return (
                <div
                  key={pkg.name}
                  className={`group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 ${
                    isScale
                      ? "border-[1.5px] border-[#2C81FA]/50 shadow-[0_16px_40px_-10px_rgba(0,110,245,0.30)]"
                      : isGrowth
                      ? "border-[1.5px] border-[#006EF5]/50 shadow-[0_16px_40px_-10px_rgba(0,110,245,0.20),inset_0_1px_2px_rgba(255,255,255,1)]"
                      : "border-[1.5px] border-[rgba(0,110,245,0.18)] shadow-[0_8px_24px_-8px_rgba(0,110,245,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)]"
                  }`}
                  style={{
                    background: isScale
                      ? "linear-gradient(155deg, #091326 0%, #0F2044 55%, #152E5E 100%)"
                      : isGrowth
                      ? "linear-gradient(150deg, #FFFFFF 0%, #F0F6FF 100%)"
                      : "linear-gradient(150deg, rgba(255, 255, 255, 0.96) 0%, rgba(242, 248, 255, 0.90) 100%)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div>
                    {/* Header Row: Icon, Name & Recommended Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-110 ${
                            isScale
                              ? "bg-white/10 text-[#60A5FA] border border-[#2C81FA]/40"
                              : "bg-white/90 text-[#006EF5] border border-[rgba(0,110,245,0.20)]"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3
                            className={`font-heading font-extrabold text-xl tracking-tight leading-none ${
                              isScale ? "text-white" : "text-[#0B132B]"
                            }`}
                          >
                            {pkg.name}
                          </h3>
                        </div>
                      </div>

                      {/* Pill Badge */}
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                          isScale
                            ? "bg-[#2C81FA]/20 text-[#60A5FA] border border-[#2C81FA]/40"
                            : isGrowth
                            ? "bg-gradient-to-r from-[#003FC5] to-[#006EF5] text-white shadow-xs"
                            : "bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.18)]"
                        }`}
                      >
                        {theme.pillLabel}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed mb-4 ${
                        isScale ? "text-white/75" : "text-[#3A4B6E]"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {/* Includes Section */}
                    <div
                      className={`pt-3.5 border-t ${
                        isScale ? "border-white/10" : "border-black/[0.06]"
                      }`}
                    >
                      <span
                        className={`block text-[10px] font-mono font-extrabold uppercase tracking-wider mb-2.5 ${
                          isScale ? "text-white/50" : "text-[#5A6E85]"
                        }`}
                      >
                        What’s included
                      </span>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs">
                            <CheckCircle2
                              className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                                isScale ? "text-[#60A5FA]" : "text-[#006EF5]"
                              }`}
                            />
                            <span
                              className={`leading-snug ${
                                isScale ? "text-white/85" : "text-[#2C3E5A]"
                              }`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Section */}
                  <div
                    className={`mt-5 pt-3.5 border-t ${
                      isScale ? "border-white/10" : "border-black/[0.06]"
                    }`}
                  >
                    <p
                      className={`text-[10px] sm:text-[11px] font-mono leading-tight mb-3 ${
                        isScale ? "text-white/45" : "text-[#5A6E85]"
                      }`}
                    >
                      {pkg.note}
                    </p>

                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                        isScale
                          ? "bg-white/10 hover:bg-white text-white hover:text-[#091326] border border-white/20 shadow-sm"
                          : isGrowth
                          ? "bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-white shadow-[0_4px_14px_rgba(0,110,245,0.30)] hover:scale-[1.02]"
                          : "bg-white hover:bg-[#F0F6FF] text-[#006EF5] border border-[rgba(0,110,245,0.25)] shadow-xs"
                      }`}
                    >
                      <span>{pkg.ctaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Custom Quote Callout Bar ── */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-[rgba(0,110,245,0.15)] shadow-xs">
            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2C3E5A]">
              <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>
                <strong>Need something tailored?</strong> Tell us your scope and get a custom quote with zero obligations.
              </span>
            </div>

            <Link
              href="/contact"
              className="shrink-0 text-xs font-bold text-[#006EF5] hover:text-[#004AC7] hover:underline"
            >
              Request custom proposal →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
