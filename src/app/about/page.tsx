import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  MessageSquare,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Button } from "@/components/ui/Button";
import { teamMembers } from "@/content/team";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Direct Digital Engineering Team",
  description:
    "We are a Pakistan-based engineering and digital team building high-performance web platforms, SaaS software, apps, and AI automation. You speak directly with the architects and builders.",
  path: "/about",
});

const PRINCIPLES = [
  {
    icon: Code2,
    title: "Direct Engineering Access",
    desc: "No account manager layers or corporate telephone games. You collaborate directly with the engineers planning, writing, and deploying your code.",
    accent: "from-[#003FC5] to-[#006EF5]",
    iconColor: "text-[#006EF5]",
    bg: "rgba(0, 110, 245, 0.08)",
  },
  {
    icon: Zap,
    title: "Weekly Working Milestones",
    desc: "We don't vanish for months. You see working software early and often with testable staging environments and continuous weekly updates.",
    accent: "from-[#047857] to-[#10B981]",
    iconColor: "text-[#10B981]",
    bg: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: Layers,
    title: "Pragmatic Architecture",
    desc: "We build for real business utility. Modern Next.js, Node, and AI automations shaped strictly around your actual workflows and operational speed.",
    accent: "from-[#4338CA] to-[#6366F1]",
    iconColor: "text-[#6366F1]",
    bg: "rgba(99, 102, 241, 0.08)",
  },
  {
    icon: HeartHandshake,
    title: "Clean Ownership & Handovers",
    desc: "You own 100% of your codebase, credentials, and deployments. We provide thorough video documentation and seamless team onboarding.",
    accent: "from-[#B45309] to-[#F59E0B]",
    iconColor: "text-[#D97706]",
    bg: "rgba(245, 158, 11, 0.08)",
  },
];

export default function AboutPage() {
  const points = [
    "Talk directly to the engineers writing and architecting your code.",
    "Get clear weekly updates without confusing technical jargon.",
    "Start with focused high-impact features, then scale as revenue proves it.",
    "Work with people who genuinely care about the details and performance.",
  ];

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
          className="absolute top-[800px] -right-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
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
                About KoDriftDev
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight leading-[1.10]">
              A focused engineering team{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                that stays close to the work.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-lg text-[#2C3E5A] font-medium leading-relaxed max-w-2xl">
              We are a Pakistan-based team of developers, outreach specialists, and client-facing creators. You speak directly with the architects and builders executing your project.
            </p>

            {/* Value Metric Pills */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-[11px] sm:text-xs font-bold text-[#0B132B]">
                <Users className="h-3.5 w-3.5 text-[#006EF5]" />
                <span>Direct Access</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-[11px] sm:text-xs font-bold text-[#0B132B]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>100% Code Ownership</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-[11px] sm:text-xs font-bold text-[#0B132B]">
                <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" />
                <span>High-Fidelity Craft</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Four Core Engineering Principles (Crystal Island Cards) ── */}
      <section className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] sm:rounded-[28px] border-[1.5px] border-[rgba(0,110,245,0.18)] hover:border-[#006EF5] p-4 sm:p-7 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 247, 255, 0.92) 55%, rgba(228, 242, 255, 0.86) 100%)",
                    boxShadow:
                      "0 8px 24px -8px rgba(0, 110, 245, 0.06), inset 0 1.5px 2px rgba(255, 255, 255, 1)",
                  }}
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-[rgba(0,110,245,0.20)] shadow-[0_4px_16px_rgba(0,110,245,0.10)] mb-3 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${principle.iconColor}`} />
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold font-['Manrope'] text-[#0B132B] mb-1 sm:mb-2 tracking-tight group-hover:text-[#006EF5] transition-colors leading-snug">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#2C3E5A] font-medium leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 3. Team Section ── */}
      <section className="relative z-10">
        <Container className="space-y-6 sm:space-y-10">
          {/* Header Bar */}
          <div className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/90 via-white/80 to-[rgba(240,247,255,0.70)] backdrop-blur-xl border border-[rgba(0,110,245,0.18)] shadow-[0_4px_20px_rgba(0,110,245,0.06),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-1.5">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#006EF5]">
                Direct Core Team
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight">
                The people behind KoDriftDev.
              </h2>
              <p className="text-xs sm:text-sm text-[#3A4B6E] font-medium max-w-xl">
                Every project is handled directly by experienced builders and communicators.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white text-[11px] sm:text-xs font-bold text-[#0047BA] border border-[rgba(0,110,245,0.22)] shadow-xs self-start sm:self-auto">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#10B981]" />
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Small Team. Direct Work (Crystal Split Island) ── */}
      <section className="relative z-10">
        <Container>
          <div
            className="rounded-[22px] sm:rounded-[36px] border border-[rgba(0,110,245,0.22)] p-5 sm:p-12 lg:p-16 backdrop-blur-xl shadow-[0_16px_50px_-10px_rgba(0,110,245,0.12),inset_0_2px_4px_rgba(255,255,255,1)]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 247, 255, 0.92) 55%, rgba(228, 242, 255, 0.86) 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-3.5 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[rgba(0,110,245,0.08)] border border-[rgba(0,110,245,0.20)] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0047BA]">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#006EF5]" />
                  <span>Why Work With Us</span>
                </div>

                <h2 className="text-xl sm:text-4xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight leading-snug">
                  Small team. Direct work. Zero fluff.
                </h2>

                <p className="text-xs sm:text-base text-[#2C3E5A] font-medium leading-relaxed max-w-[500px]">
                  When you work with KoDriftDev, you don&apos;t navigate intermediate account handlers or bloated corporate bureaucracy. You collaborate directly with the people planning, coding, and deploying your system.
                </p>

                <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <Button href="/contact" variant="primary" size="md" showArrow>
                    Start a project
                  </Button>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/90 hover:bg-white text-xs font-extrabold text-[#2C3E5A] hover:text-[#006EF5] border border-[rgba(0,110,245,0.20)] shadow-xs transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2.5 sm:space-y-3.5">
                {points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3.5 rounded-xl sm:rounded-2xl border border-[rgba(0,110,245,0.18)] bg-white/90 p-3 sm:p-5 shadow-xs backdrop-blur-md hover:border-[#006EF5] transition-colors"
                  >
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#006EF5]/15 text-[#006EF5] mt-0.5 shadow-xs">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0B132B] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Final Sapphire Command Center Island ── */}
      <section className="relative z-10">
        <Container>
          <div
            className="relative rounded-[22px] sm:rounded-[36px] border border-[rgba(0,110,245,0.30)] p-6 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-[0_24px_60px_-15px_rgba(0,36,150,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.2)] overflow-hidden"
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
              <h2 className="text-xl sm:text-4xl font-extrabold font-['Manrope'] text-white tracking-tight leading-tight">
                Ready to build something reliable?
              </h2>
              <p className="text-xs sm:text-base text-slate-200/90 leading-relaxed font-medium">
                Let&apos;s talk through your goals, current operational bottlenecks, and timeline. We will give you a clear, honest engineering roadmap.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3.5 justify-center">
                <Button href="/contact" variant="primary" size="md" showArrow className="shadow-[0_8px_25px_rgba(0,110,245,0.4)]">
                  Start a project
                </Button>
                <Button href="/work" variant="secondary" size="md">
                  View our work
                </Button>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105"
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
