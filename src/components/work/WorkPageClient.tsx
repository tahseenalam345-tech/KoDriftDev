"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Monitor,
  Smartphone,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Project } from "@/types";
import { siteConfig } from "@/content/site";

type CategoryFilter = "all" | "web" | "saas" | "apps";

interface FilterTab {
  id: CategoryFilter;
  label: string;
  icon: React.ElementType;
}

const FILTER_TABS: FilterTab[] = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "web", label: "Web & E-Commerce", icon: Monitor },
  { id: "saas", label: "Software & SaaS", icon: Cpu },
  { id: "apps", label: "Mobile & Ops", icon: Smartphone },
];

export function WorkPageClient({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "web") {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes("commerce") ||
          p.category.toLowerCase().includes("restaurant") ||
          p.category.toLowerCase().includes("web")
      );
    }
    if (activeFilter === "saas") {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes("operations") ||
          p.category.toLowerCase().includes("saas") ||
          p.category.toLowerCase().includes("cleantech")
      );
    }
    if (activeFilter === "apps") {
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes("mobile") ||
          p.category.toLowerCase().includes("booking") ||
          p.category.toLowerCase().includes("restaurant")
      );
    }
    return projects;
  }, [projects, activeFilter]);

  const inProgressProjects = useMemo(() => {
    return projects.filter((p) =>
      p.status?.toLowerCase().includes("coming soon") ||
      p.status?.toLowerCase().includes("in progress")
    );
  }, [projects]);

  return (
    <div className="relative py-8 sm:py-16 lg:py-20 space-y-12 sm:space-y-20 lg:space-y-24 overflow-hidden bg-transparent">
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
          className="absolute top-[800px] -left-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.14) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── Page Hero ── */}
      <section className="relative z-10">
        <Container>
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            {/* Top 3D Glassmorphic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.30)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                Production Case Studies
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold font-heading text-[#0B132B] tracking-tight leading-[1.12]">
              Real platforms.{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                Built for daily operations.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-[#2C3E5A] font-medium leading-relaxed max-w-2xl">
              From bespoke order management systems and restaurant ordering engines to pharmaceutical SaaS platforms and CleanTech automation systems.
            </p>

            {/* Value Metric Pills */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-[11px] sm:text-xs font-semibold text-[#0B132B]">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#10B981]" />
                <span>100% On-Time Delivery</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-[11px] sm:text-xs font-semibold text-[#0B132B]">
                <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#F59E0B]" />
                <span>Next.js & Supabase Stack</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Interactive Category Filter Tabs ── */}
      <section className="relative z-20">
        <Container>
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-2 scrollbar-none">
            {FILTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-[#003FC5] to-[#006EF5] text-white shadow-[0_4px_16px_rgba(0,110,245,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-[1.02]"
                      : "bg-white/80 hover:bg-white text-[#3A4B6E] hover:text-[#006EF5] border border-[rgba(0,110,245,0.18)] hover:border-[rgba(0,110,245,0.40)] shadow-2xs"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-[#006EF5]"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── SECTION 1: Featured Editorial Case Studies ── */}
      <section className="relative z-10">
        <Container className="space-y-6 sm:space-y-10">
          <div className="flex items-center justify-between gap-4 border-b border-[rgba(0,110,245,0.16)] pb-3 sm:pb-4">
            <div>
              <h2 className="text-lg sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                Featured Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-medium mt-0.5 sm:mt-1">
                Deep-dive into platforms built with operational visibility and high conversion.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.20)]">
              {featuredProjects.length} Flagship Systems
            </span>
          </div>

          <div className="space-y-5 sm:space-y-12">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 1;
              const hasRealImage = project.imagePaths && project.imagePaths.length > 0;

              return (
                <div
                  key={project.slug}
                  className="group relative rounded-[20px] sm:rounded-[36px] p-3.5 sm:p-8 lg:p-10 border-[1.5px] border-[rgba(0,110,245,0.22)] hover:border-[#006EF5] backdrop-blur-xl shadow-[0_12px_32px_-10px_rgba(0,110,245,0.08),inset_0_2px_4px_rgba(255,255,255,1)] hover:shadow-[0_24px_60px_-10px_rgba(0,110,245,0.22),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-300 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(155deg, rgba(255, 255, 255, 0.98) 0%, rgba(242, 248, 255, 0.92) 50%, rgba(235, 245, 255, 0.88) 100%)",
                  }}
                >
                  {/* Subtle Top Accent Glow */}
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#006EF5]/12 blur-3xl group-hover:bg-[#006EF5]/22 transition-all duration-300"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-10 lg:gap-12 items-center relative z-10">
                    {/* Media Column with Hover Zoom */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="relative block w-full aspect-[16/9] sm:aspect-[16/10] rounded-[14px] sm:rounded-[26px] overflow-hidden bg-[#0A1628] border border-black/[0.08] shadow-md group/image"
                      >
                        {hasRealImage ? (
                          <Image
                            src={project.imagePaths[0]}
                            alt={`${project.title} interface preview`}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover/image:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-white/50 font-mono text-sm">
                            Platform Preview
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="space-y-2 sm:space-y-3">
                        {/* Tags Bar */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.22)]">
                            {project.category}
                          </span>
                          <span className="text-[11px] sm:text-xs font-mono text-[#64748B]">
                            {project.year} • {project.clientName}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-heading font-extrabold text-[#0B132B] group-hover:text-[#006EF5] transition-colors tracking-tight leading-tight">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-base text-[#3A4B6E] leading-snug sm:leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                          {project.summary}
                        </p>

                        {/* Top Features */}
                        {project.features && project.features.length > 0 && (
                          <ul className="space-y-1 sm:space-y-1.5 pt-0.5 sm:pt-1 text-xs sm:text-sm text-[#2C3E5A]">
                            {project.features.slice(0, 2).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 sm:gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#006EF5] shrink-0 mt-0.5" />
                                <span className="line-clamp-1 sm:line-clamp-none">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2 sm:pt-3 border-t border-[rgba(0,110,245,0.14)]">
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {project.techStack.split(",").slice(0, 4).map((tech) => (
                            <span
                              key={tech.trim()}
                              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-white/90 border border-[rgba(0,110,245,0.18)] text-[10px] sm:text-[11px] font-mono font-medium text-[#1E293B] shadow-2xs"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
                        <Link
                          href={`/work/${project.slug}`}
                          className="group/cta inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.30)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.45)] transition-all duration-200 hover:scale-105"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover/cta:translate-x-1" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-[#2C3E5A] hover:text-[#006EF5] bg-white/90 hover:bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[rgba(0,110,245,0.22)] shadow-2xs transition-colors"
                          >
                            <span>Live Platform</span>
                            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Filtered Systems & Projects Grid ── */}
      <section className="relative z-10">
        <Container className="space-y-4 sm:space-y-8">
          <div className="flex items-center justify-between gap-4 border-b border-[rgba(0,110,245,0.16)] pb-3 sm:pb-4">
            <div>
              <h2 className="text-lg sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                All Projects & Deployments
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-medium mt-0.5 sm:mt-1">
                Showing {filteredProjects.length} systems tailored to client requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-7">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Upcoming Systems / In-Progress ── */}
      {inProgressProjects.length > 0 && (
        <section className="relative z-10">
          <Container className="space-y-4 sm:space-y-8">
            <div className="border-b border-[rgba(0,110,245,0.16)] pb-3 sm:pb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 border border-amber-500/30 mb-1.5 sm:mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                Active Development
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                Concepts & Prototypes in Progress
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-medium mt-0.5 sm:mt-1">
                Mobile dispatch algorithms and internal CRM tools being prepared for production rollout.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {inProgressProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── SECTION 4: Direct Consultation CTA Island ── */}
      <section className="relative z-10">
        <Container>
          <div
            className="rounded-[22px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 border-[1.5px] border-[rgba(0,110,245,0.30)] backdrop-blur-xl shadow-[0_20px_50px_-14px_rgba(0,110,245,0.16),inset_0_2px_4px_rgba(255,255,255,1)] text-center flex flex-col items-center overflow-hidden relative"
            style={{
              background:
                "linear-gradient(155deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 248, 255, 0.92) 55%, rgba(228, 242, 255, 0.88) 100%)",
            }}
          >
            {/* Ambient Center Glow */}
            <div
              className="pointer-events-none absolute inset-x-1/4 top-1/2 -translate-y-1/2 h-36 rounded-full bg-[#006EF5]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,110,245,0.08)] border border-[rgba(0,110,245,0.25)] text-[#006EF5] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next Project</span>
              </div>

              <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                Have a platform or website you want to build?
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] leading-relaxed font-medium">
                Share what you are building or what is slowing your team down. We will analyze the requirements and recommend a clean, high-performance architecture.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.35)] hover:shadow-[0_6px_24px_rgba(0,110,245,0.50)] transition-all duration-200 hover:scale-105"
                >
                  <span>Start a project</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-[#1E293B] hover:text-[#006EF5] bg-white hover:bg-white/90 border border-[rgba(0,110,245,0.25)] shadow-xs transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp discussion</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
