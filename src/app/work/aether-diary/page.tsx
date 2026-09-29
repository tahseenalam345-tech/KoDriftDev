import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, ChevronRight, Sparkles, Smartphone, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { InteractiveAppSandbox } from "@/components/work/InteractiveAppSandbox";
import { AppShowcaseCard } from "@/components/work/AppShowcaseCard";
import { ProjectMeta } from "@/components/work/ProjectMeta";
import { ServiceCard } from "@/components/services/ServiceCard";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Aether Diary — Live Interactive Mobile App Sandbox & Case Study",
  description:
    "Test Aether Diary live in your browser inside an interactive 3D iPhone mockup frame. Voice-first encrypted journaling built with Flutter and AudioWorklet streaming.",
  path: "/work/aether-diary",
});

export default function AetherDiaryPage() {
  const project = projects.find((p) => p.slug === "aether-diary") || {
    title: "Aether Diary",
    slug: "aether-diary",
    category: "Mobile App",
    featured: true,
    liveUrl: "/apps/aether-diary/index.html",
    summary:
      "Voice-first encrypted cognitive journaling app with speech-to-thought transcription, mood tracking, and intelligent daily reflections built with Flutter.",
    challenge:
      "Creating a frictionless, private journaling habit with instant voice memo recording, offline-first SQLite synchronization, and biometric-grade privacy protection on device storage.",
    solution:
      "Developed a modern Flutter application utilizing Web Audio Worklets, local media streaming, sentiment classification models, and an intuitive tactile card interface for daily memory capture.",
    features: [
      "One-tap voice journal capture with audio waveform visualization",
      "Encrypted on-device storage with privacy-first biometric access control",
      "Cognitive sentiment analytics and longitudinal mood calendar tracking",
      "Offline-first sync engine with resilient background queueing",
      "Clean minimalist typography and haptic feedback micro-interactions",
    ],
    role: "Full-Lifecycle Mobile App Development & Audio Worklet Engineering",
    techStack: "Flutter, Dart, AudioWorklet, SQLite, LocalStorage, BLoC",
    results: [
      "Instantaneous audio capture with zero-loss background persistence",
      "Offline-first reliability with client-side encrypted storage",
      "Direct interactive web sandbox available for instant testing",
    ],
    status: "Live Web Demo",
    imagePaths: ["/images/projects/aether-cover.png"],
    clientName: "Kodrift Labs",
    year: "2026",
    servicesProvided: ["App Development", "Custom Software"],
  };

  const relatedServices = services.filter(
    (s) => project.servicesProvided?.includes(s.name)
  );

  return (
    <div className="relative py-8 sm:py-16 lg:py-20 space-y-12 sm:space-y-20 overflow-hidden bg-transparent">
      {/* ── Ambient Radiant Sky Glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.20) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute top-[800px] -left-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── 1. Breadcrumbs & Project Hero Header ── */}
      <section className="relative z-10">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-xs font-mono text-[#64748B]">
            <Link href="/work" className="hover:text-[#006EF5] font-semibold transition-colors">
              Work & Case Studies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#94A3B8]" />
            <span className="text-[#0B132B] font-bold">Aether Diary</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 border-b border-[rgba(0,110,245,0.16)]">
            <div className="max-w-[760px] space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-[rgba(139,92,246,0.30)] shadow-[0_4px_16px_rgba(139,92,246,0.12)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]" />
                  </span>
                  <span className="text-[11px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">
                    {project.category} · {project.year}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-700 border border-purple-500/25">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                  Live Web Sandbox Ready
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B132B] tracking-tight leading-[1.12]">
                Aether Diary
              </h1>

              <p className="text-sm sm:text-lg text-[#3A4B6E] font-medium leading-relaxed max-w-[660px]">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/apps/aether-diary/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] shadow-[0_4px_16px_rgba(139,92,246,0.30)] hover:shadow-[0_6px_22px_rgba(139,92,246,0.45)] transition-all duration-200 hover:scale-105"
              >
                <span>Launch standalone tab</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Dual-Mode Showcase: Video Reel / Screenshot Gallery / Live Sandbox ── */}
      <section className="relative z-10">
        <Container>
          <AppShowcaseCard
            title="Aether Diary"
            category="Cognitive Voice Journal & Audio Notes"
            description="Voice-first encrypted cognitive journaling app with speech-to-thought transcription, mood tracking, and intelligent daily reflections built with Flutter."
            tags={["Flutter", "Dart", "AudioWorklet", "WASM", "SQLite", "Encrypted Storage"]}
            videoSrc="/videos/aether-diary.mp4"
            posterSrc="/images/projects/aether-diary/1.jpeg"
            screenshots={[
              "/images/projects/aether-diary/1.jpeg",
              "/images/projects/aether-diary/2.jpeg",
              "/images/projects/aether-diary/3.jpeg",
              "/images/projects/aether-diary/4.jpeg",
            ]}
            liveAppUrl="/apps/aether-diary/index.html"
          />
        </Container>
      </section>

      {/* ── 3. Core Narrative & Engineering Architecture ── */}
      <section className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              {/* The Problem */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">The Challenge</span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">What we set out to solve</h2>
                <div className="rounded-[22px] bg-white/90 backdrop-blur-xl border border-[rgba(139,92,246,0.18)] p-6 sm:p-8 shadow-[0_8px_30px_rgba(139,92,246,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
                  <p className="text-sm sm:text-base text-[#2C3E5A] leading-relaxed font-medium">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* What We Built */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">Engineered Solution</span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">How we engineered the client</h2>
                <div className="rounded-[22px] bg-white/90 backdrop-blur-xl border border-[rgba(139,92,246,0.18)] p-6 sm:p-8 shadow-[0_8px_30px_rgba(139,92,246,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
                  <p className="text-sm sm:text-base text-[#2C3E5A] leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">Core Capabilities</span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">Key parts & voice features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0B132B]">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-[16px] border border-[rgba(139,92,246,0.18)] bg-white/90 backdrop-blur-md p-4 shadow-2xs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] mt-0.5">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="font-semibold leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes & Performance Results */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">Verified Impact</span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">Verified performance results</h2>
                <div className="rounded-[22px] border border-[rgba(139,92,246,0.18)] bg-white/95 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-[0_8px_30px_rgba(139,92,246,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
                  <ul className="space-y-3 text-xs sm:text-base text-[#1E293B]">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
                          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                        </span>
                        <span className="font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar: Technology & Metadata */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <ProjectMeta project={project} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="relative z-10">
          <Container className="space-y-6">
            <div className="border-b border-[rgba(0,110,245,0.16)] pb-4 max-w-[720px]">
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">Services used in this project</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  slug={service.slug}
                  category={service.category}
                  shortDescription={service.shortDescription}
                  outcomes={service.outcomes}
                  iconName={service.iconName}
                  featured={service.featured}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 5. Bottom Consultation CTA Island ── */}
      <section className="relative z-10">
        <Container>
          <div
            className="rounded-[22px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 border-[1.5px] border-[rgba(0,110,245,0.30)] backdrop-blur-xl shadow-[0_20px_50px_-14px_rgba(0,110,245,0.16),inset_0_2px_4px_rgba(255,255,255,1)] text-center flex flex-col items-center max-w-4xl mx-auto overflow-hidden relative"
            style={{
              background:
                "linear-gradient(155deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 248, 255, 0.92) 55%, rgba(228, 242, 255, 0.88) 100%)",
            }}
          >
            <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.25)] text-[#7C3AED] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Audio App Development</span>
              </div>

              <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                Have an innovative mobile app concept?
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] leading-relaxed font-medium">
                From intelligent journal interfaces to real-time audio analysis, let&apos;s map out your architecture and deliver a production-ready application.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] shadow-[0_4px_16px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_24px_rgba(139,92,246,0.50)] transition-all duration-200 hover:scale-105"
                >
                  <span>Start a project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1E293B] hover:text-[#006EF5] bg-white hover:bg-white/90 border border-[rgba(0,110,245,0.25)] shadow-xs transition-colors"
                >
                  See all work
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
