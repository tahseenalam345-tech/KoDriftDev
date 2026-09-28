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
  MessageSquare,
  HelpCircle,
  Check,
  X,
  Layers,
  Clock,
  Code2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { pricingPackages } from "@/content/pricing";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Pricing & Plans | Transparent Digital Engineering",
  description:
    "Three clear starting points. One tailored proposal. Transparent milestone-based pricing for websites, SaaS software, apps, and AI automation.",
  path: "/pricing",
});

const PLAN_THEMES = [
  {
    icon: Zap,
    pillLabel: "Focused Sprint",
    pillBg: "bg-[rgba(0,110,245,0.08)]",
    pillText: "#006EF5",
    pillBorder: "border-[rgba(0,110,245,0.20)]",
  },
  {
    icon: Sparkles,
    pillLabel: "Most Popular",
    pillBg: "bg-gradient-to-r from-[#003FC5] to-[#006EF5]",
    pillText: "#FFFFFF",
    pillBorder: "border-transparent",
  },
  {
    icon: Cpu,
    pillLabel: "Custom Systems",
    pillBg: "bg-[#2C81FA]/20",
    pillText: "#60A5FA",
    pillBorder: "border-[#2C81FA]/40",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Core Scope",
    starter: "1 Focused Service (e.g. Website or Redesign)",
    growth: "Multi-Service Platform (e.g. Web + Ordering/Ops)",
    scale: "Custom Software, Full SaaS or Mobile App",
  },
  {
    feature: "Architecture",
    starter: "Custom Next.js / Clean Code",
    growth: "Custom Next.js + Backend / CMS",
    scale: "Scalable Full-Stack Cloud Architecture",
  },
  {
    feature: "AI Integration",
    starter: "Basic AI Visuals or Lead Routing",
    growth: "Custom Chatbot or Automated Pipeline",
    scale: "Deep AI Workflows (n8n, Make, LLM APIs)",
  },
  {
    feature: "Working Demos",
    starter: "Staging Preview Before Launch",
    growth: "Weekly Working Milestone Demos",
    scale: "Sprint-Based Continuous Delivery",
  },
  {
    feature: "Revisions",
    starter: "Structured Review Cycles",
    growth: "Iterative Collaborative Reviews",
    scale: "Ongoing Architectural Iterations",
  },
  {
    feature: "Code Ownership",
    starter: "100% Complete Client Ownership",
    growth: "100% Complete Client Ownership",
    scale: "100% Complete Client Ownership",
  },
  {
    feature: "Handover & Docs",
    starter: "Video Walkthrough & Guide",
    growth: "Full Team Training & Docs",
    scale: "Comprehensive System Architecture Docs",
  },
];

const PRICING_FAQS = [
  {
    q: "How does pricing and quotation work?",
    a: "Every business operates differently. Rather than forcing you into a rigid fixed price with hidden asterisks, we use these tiers as starting benchmarks. We map out your exact required features and provide a transparent, itemized milestone quote before any coding begins.",
  },
  {
    q: "How are project payments structured?",
    a: "We work on milestone-based payments (typically 50% upfront to commence architecture and 50% upon final verified deployment on your domain). For larger Scale platforms, we break milestones into weekly or bi-weekly delivered deliverables.",
  },
  {
    q: "Can we mix and match services?",
    a: "Yes, absolutely! Most of our successful projects combine services—such as a custom web frontend with an AI automated WhatsApp order capture pipeline. We tailor the scope specifically around what you need.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of the intellectual property, code repository, designs, and credentials from day one. There is zero vendor lock-in.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative py-12 sm:py-20 space-y-16 sm:space-y-24 overflow-hidden bg-transparent">
      {/* ── Ambient Radiant Sky Glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.22) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute top-[900px] -left-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── 1. Page Hero ── */}
      <section className="relative z-10">
        <Container>
          <div className="max-w-4xl space-y-6">
            {/* Top 3D Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.30)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
              </span>
              <span className="text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                Pricing & Engagement Models
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight leading-[1.10]">
              Three starting points.{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                One transparent quote.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-lg text-[#2C3E5A] font-medium leading-relaxed max-w-2xl">
              Use these packages as a transparent guide. We shape the deliverables, milestones, and quote around your actual operational priorities.
            </p>

            {/* Value Metric Pills */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-[11px] sm:text-xs font-bold text-[#0B132B]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>100% Code Ownership</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-[11px] sm:text-xs font-bold text-[#0B132B]">
                <Clock className="h-3.5 w-3.5 text-[#006EF5]" />
                <span>Milestone-Based Billing</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-[11px] sm:text-xs font-bold text-[#0B132B]">
                <Code2 className="h-3.5 w-3.5 text-[#6366F1]" />
                <span>Zero Template Bloat</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Three Responsive Crystal Pricing Cards ── */}
      <section className="relative z-10">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-7 items-stretch">
            {pricingPackages.map((pkg, idx) => {
              const theme = PLAN_THEMES[idx] || PLAN_THEMES[0];
              const Icon = theme.icon;
              const isGrowth = pkg.name === "Growth";
              const isScale = pkg.name === "Scale";

              return (
                <div
                  key={pkg.name}
                  className={`group relative rounded-[20px] sm:rounded-[32px] p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out select-none overflow-hidden ${
                    isScale
                      ? "border-[1.5px] border-[#2C81FA]/50 shadow-[0_20px_50px_-10px_rgba(0,110,245,0.30)] hover:-translate-y-2"
                      : isGrowth
                      ? "border-[2px] border-[#006EF5] shadow-[0_24px_60px_-10px_rgba(0,110,245,0.25),inset_0_1.5px_2px_rgba(255,255,255,1)] md:-translate-y-2 hover:-translate-y-3"
                      : "border-[1.5px] border-[rgba(0,110,245,0.20)] shadow-[0_10px_30px_-10px_rgba(0,110,245,0.08),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:-translate-y-2"
                  }`}
                  style={{
                    background: isScale
                      ? "linear-gradient(155deg, #051438 0%, #082154 55%, #0F2D6B 100%)"
                      : isGrowth
                      ? "linear-gradient(150deg, #FFFFFF 0%, #F0F6FF 100%)"
                      : "linear-gradient(150deg, rgba(255, 255, 255, 0.98) 0%, rgba(242, 248, 255, 0.92) 100%)",
                  }}
                >
                  {/* Top Specular Edge Glow */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

                  {/* Most Popular Floating Tag for Growth */}
                  {isGrowth && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-4 sm:py-1 rounded-b-xl text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#003FC5] to-[#006EF5] text-white shadow-md">
                        <Sparkles className="h-3 w-3" />
                        <span>Most Popular for SMBs</span>
                      </span>
                    </div>
                  )}

                  <div className="space-y-4 sm:space-y-6 pt-1 sm:pt-2">
                    {/* Header Row */}
                    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[rgba(0,110,245,0.12)]">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div
                          className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl shadow-xs transition-transform group-hover:scale-110 ${
                            isScale
                              ? "bg-white/10 text-[#60A5FA] border border-[#2C81FA]/40"
                              : isGrowth
                              ? "bg-[#006EF5]/15 text-[#006EF5] border border-[#006EF5]/30"
                              : "bg-white/90 text-[#006EF5] border border-[rgba(0,110,245,0.20)]"
                          }`}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
                        </div>
                        <div>
                          <h2
                            className={`font-heading font-extrabold text-xl sm:text-2xl tracking-tight leading-tight ${
                              isScale ? "text-white" : "text-[#0B132B]"
                            }`}
                          >
                            {pkg.name}
                          </h2>
                          <span
                            className={`text-[11px] sm:text-xs font-mono font-bold ${
                              isScale ? "text-white/60" : "text-slate-500"
                            }`}
                          >
                            {pkg.eyebrow}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${
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
                      className={`text-xs sm:text-[14px] leading-relaxed font-medium ${
                        isScale ? "text-slate-200" : "text-[#2C3E5A]"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {/* Best For Section */}
                    {pkg.bestFor && pkg.bestFor.length > 0 && (
                      <div
                        className={`pt-3 sm:pt-4 border-t space-y-1.5 sm:space-y-2.5 ${
                          isScale ? "border-white/10" : "border-[rgba(0,110,245,0.12)]"
                        }`}
                      >
                        <span
                          className={`block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider ${
                            isScale ? "text-white/60" : "text-slate-500"
                          }`}
                        >
                          Ideal Fit For:
                        </span>
                        <ul className="space-y-1 sm:space-y-1.5 text-xs">
                          {pkg.bestFor.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-center gap-2 font-medium ${
                                isScale ? "text-white/80" : "text-[#2C3E5A]"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                                  isScale ? "bg-[#60A5FA]" : "bg-[#006EF5]"
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* What's Included */}
                    <div
                      className={`pt-3 sm:pt-4 border-t space-y-2 sm:space-y-3 ${
                        isScale ? "border-white/10" : "border-[rgba(0,110,245,0.12)]"
                      }`}
                    >
                      <span
                        className={`block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isScale ? "text-white/60" : "text-slate-500"
                        }`}
                      >
                        What’s Included:
                      </span>
                      <ul className="space-y-1.5 sm:space-y-2.5">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] font-medium">
                            <CheckCircle2
                              className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5 ${
                                isScale ? "text-[#60A5FA]" : "text-[#006EF5]"
                              }`}
                            />
                            <span
                              className={`leading-snug ${
                                isScale ? "text-white/90" : "text-[#0B132B]"
                              }`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div
                    className={`mt-5 sm:mt-8 pt-3.5 sm:pt-5 border-t space-y-2.5 sm:space-y-4 ${
                      isScale ? "border-white/10" : "border-[rgba(0,110,245,0.12)]"
                    }`}
                  >
                    <p
                      className={`text-[10px] sm:text-[11px] font-mono leading-relaxed ${
                        isScale ? "text-white/50" : "text-slate-500"
                      }`}
                    >
                      {pkg.note}
                    </p>

                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                        isScale
                          ? "bg-white/15 hover:bg-white text-white hover:text-[#051438] border border-white/20 shadow-sm"
                          : isGrowth
                          ? "bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-white shadow-[0_6px_20px_rgba(0,110,245,0.35)] hover:scale-[1.02]"
                          : "bg-white hover:bg-[#F0F6FF] text-[#006EF5] border border-[rgba(0,110,245,0.25)] shadow-xs"
                      }`}
                    >
                      <span>{pkg.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 3. Feature Comparison Matrix ── */}
      <section className="relative z-10">
        <Container className="max-w-6xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#006EF5]">
              Detailed Breakdown
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight">
              Compare package capabilities.
            </h2>
            <p className="text-sm text-[#3A4B6E] font-medium">
              Transparent specifications with zero hidden assumptions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[28px] border border-[rgba(0,110,245,0.20)] bg-white/90 backdrop-blur-xl shadow-[0_12px_36px_-10px_rgba(0,110,245,0.10)]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[rgba(0,110,245,0.15)] bg-[rgba(240,247,255,0.60)]">
                  <th className="p-4 sm:p-5 font-heading font-extrabold text-[#0B132B] w-1/4">
                    Capability
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-extrabold text-[#006EF5] w-1/4">
                    Starter
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-extrabold text-[#003FC5] w-1/4 bg-[rgba(0,110,245,0.06)]">
                    Growth (Popular)
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-extrabold text-[#051438] w-1/4">
                    Scale
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(0,110,245,0.10)] font-medium text-[#2C3E5A]">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0B132B] bg-slate-50/40">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700">{row.starter}</td>
                    <td className="p-4 sm:p-5 font-semibold text-[#003FC5] bg-[rgba(0,110,245,0.03)]">
                      {row.growth}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── 4. Frequently Asked Questions ── */}
      <section className="relative z-10">
        <Container className="max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#006EF5]">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#3A4B6E] font-medium">
              Straightforward answers regarding contracts, milestones, and deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRICING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[rgba(0,110,245,0.18)] bg-white/90 p-5 sm:p-6 backdrop-blur-xl shadow-xs space-y-2.5"
              >
                <div className="flex items-center gap-2 text-[#006EF5] font-extrabold text-sm sm:text-base font-['Manrope']">
                  <HelpCircle className="h-4 w-4 shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#2C3E5A] font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Custom Scope Command Center Island ── */}
      <section className="relative z-10">
        <Container className="max-w-5xl">
          <div
            className="relative rounded-[22px] sm:rounded-[36px] border border-[rgba(0,110,245,0.30)] p-6 sm:p-12 lg:p-16 text-center flex flex-col items-center shadow-[0_24px_60px_-15px_rgba(0,36,150,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.2)] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #051438 0%, #082154 50%, #0B3378 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#006EF5]/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#2C81FA]/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#70B2FF]">
                <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#2C81FA]" />
                <span>Tailored Scoping</span>
              </div>

              <h2 className="text-xl sm:text-4xl font-extrabold font-['Manrope'] text-white tracking-tight leading-tight">
                Need a custom scoped system?
              </h2>

              <p className="text-xs sm:text-base text-slate-200/90 leading-relaxed font-medium">
                Most client projects combine services. Tell us where your workflow bottlenecks or what you want to achieve, and we will prepare a clear, custom plan with transparent milestones.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-xs sm:text-sm font-extrabold text-white shadow-[0_8px_25px_rgba(0,110,245,0.4)] transition-all hover:scale-105"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105"
                >
                  <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Engineer</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
