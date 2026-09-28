import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { pricingPackages } from "@/content/pricing";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Pricing & Plans",
  description:
    "Three starting points. One custom plan. Use these as a guide. We will adjust the work, scope and quote around what you actually need.",
  path: "/pricing",
});

const PLAN_THEMES = [
  {
    icon: Zap,
    pillLabel: "Focused Sprint",
  },
  {
    icon: Sparkles,
    pillLabel: "Most Popular",
  },
  {
    icon: Cpu,
    pillLabel: "Custom Systems",
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* ── Page Hero ── */}
      <section className="relative px-2 sm:px-4 lg:px-8 xl:px-10">
        <div
          className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[40px] pt-8 sm:pt-14 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden border border-[rgba(0,110,245,0.18)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.08),inset_0_2px_4px_rgba(255,255,255,1)]"
          style={{
            background: "linear-gradient(175deg, #EEF4FB 0%, #E4ECF8 45%, #F0F5FC 100%)",
          }}
        >
          {/* Decorative Dot Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(rgba(0, 110, 245, 0.14) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute -top-24 -left-16 w-[500px] h-[360px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.16) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.32)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                Pricing & Plans
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              <span className="text-[#0B132B]">Three starting points.</span>{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent">
                One custom plan.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-[#3A4B6E] font-medium leading-relaxed max-w-[640px]">
              Use these as a guide. We shape the work, milestones, and deliverables around what your business actually needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 Responsive Pricing Columns ── */}
      <section className="px-2 sm:px-4 lg:px-8 xl:px-10">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {pricingPackages.map((pkg, idx) => {
              const theme = PLAN_THEMES[idx] || PLAN_THEMES[0];
              const Icon = theme.icon;
              const isGrowth = pkg.name === "Growth";
              const isScale = pkg.name === "Scale";

              return (
                <div
                  key={pkg.name}
                  className={`group rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 ${
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
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-xs ${
                            isScale
                              ? "bg-white/10 text-[#60A5FA] border border-[#2C81FA]/40"
                              : "bg-white/90 text-[#006EF5] border border-[rgba(0,110,245,0.20)]"
                          }`}
                        >
                          <Icon className="h-5 w-5 stroke-[2.2]" />
                        </div>
                        <h2
                          className={`font-heading font-extrabold text-2xl tracking-tight ${
                            isScale ? "text-white" : "text-[#0B132B]"
                          }`}
                        >
                          {pkg.name}
                        </h2>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
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

                    <p
                      className={`text-sm leading-relaxed ${
                        isScale ? "text-white/80" : "text-[#3A4B6E]"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {/* Best For */}
                    {pkg.bestFor && pkg.bestFor.length > 0 && (
                      <div
                        className={`pt-4 border-t space-y-2 ${
                          isScale ? "border-white/10" : "border-black/[0.06]"
                        }`}
                      >
                        <span
                          className={`block text-[11px] font-mono font-bold uppercase tracking-wider ${
                            isScale ? "text-white/50" : "text-[#5A6E85]"
                          }`}
                        >
                          Best for:
                        </span>
                        <ul className="space-y-1.5 text-xs">
                          {pkg.bestFor.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-center gap-2 ${
                                isScale ? "text-white/75" : "text-[#3A4B6E]"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  isScale ? "bg-[#60A5FA]" : "bg-[#006EF5]"
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Includes */}
                    <div
                      className={`pt-4 border-t space-y-3 ${
                        isScale ? "border-white/10" : "border-black/[0.06]"
                      }`}
                    >
                      <span
                        className={`block text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isScale ? "text-white/50" : "text-[#5A6E85]"
                        }`}
                      >
                        What’s included:
                      </span>
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 mt-0.5 ${
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

                  {/* Bottom CTA */}
                  <div
                    className={`mt-8 pt-5 border-t space-y-4 ${
                      isScale ? "border-white/10" : "border-black/[0.06]"
                    }`}
                  >
                    <p
                      className={`text-xs font-mono leading-tight ${
                        isScale ? "text-white/45" : "text-[#5A6E85]"
                      }`}
                    >
                      {pkg.note}
                    </p>

                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-bold transition-all duration-200 ${
                        isScale
                          ? "bg-white/10 hover:bg-white text-white hover:text-[#091326] border border-white/20 shadow-sm"
                          : isGrowth
                          ? "bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-white shadow-[0_4px_16px_rgba(0,110,245,0.30)] hover:scale-[1.02]"
                          : "bg-white hover:bg-[#F0F6FF] text-[#006EF5] border border-[rgba(0,110,245,0.25)] shadow-xs"
                      }`}
                    >
                      <span>{pkg.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Custom Scope Card ── */}
      <section className="px-2 sm:px-4 lg:px-8 xl:px-10">
        <Container className="max-w-4xl">
          <div
            className="rounded-[24px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 text-center flex flex-col items-center border border-[rgba(0,110,245,0.22)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.12),inset_0_2px_4px_rgba(255,255,255,1)]"
            style={{
              background: "linear-gradient(175deg, #EEF4FB 0%, #E2EDFC 100%)",
            }}
          >
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#006EF5] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Tailored Proposals</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Need something different?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3A4B6E] max-w-lg font-medium leading-relaxed">
              Most client projects combine services. Tell us what you want to achieve, and we will create a focused custom plan without forcing you into a rigid package.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,110,245,0.30)] transition-all hover:scale-[1.02]"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 hover:bg-white text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.25)] shadow-xs transition-all"
              >
                <span>View our work</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
