import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ProjectMeta } from "@/components/work/ProjectMeta";
import { AppShowcaseCard } from "@/components/work/AppShowcaseCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} — Production Case Study`,
    description: project.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isComingSoon =
    project.status?.toLowerCase().includes("coming soon") ||
    project.status?.toLowerCase().includes("in progress");

  // Related services
  const relatedServices = services.filter(
    (s) => project.servicesProvided?.includes(s.name)
  );

  return (
    <div className="relative py-8 sm:py-16 lg:py-20 space-y-12 sm:space-y-20 overflow-hidden bg-transparent">
      {/* ── Ambient Radiant Sky Glows (Theme Signature) ── */}
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
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── 1. Breadcrumbs & Project Hero Header ── */}
      <section className="relative z-10">
        <Container>
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-2xs text-xs font-mono text-[#64748B]">
            <Link href="/work" className="hover:text-[#006EF5] font-semibold transition-colors">
              Work & Case Studies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#94A3B8]" />
            <span className="text-[#0B132B] font-bold truncate max-w-[240px] sm:max-w-none">{project.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 border-b border-[rgba(0,110,245,0.16)]">
            <div className="max-w-[760px] space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {/* 3D Glassmorphic Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-[rgba(0,110,245,0.30)] shadow-[0_4px_16px_rgba(0,110,245,0.12)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
                  </span>
                  <span className="text-[11px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                    {project.category} · {project.year}
                  </span>
                </div>

                {isComingSoon ? (
                  <span className="text-xs font-semibold text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                    Case study in preparation
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Verified Production System</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0B132B] tracking-tight leading-[1.12]">
                {project.title}
              </h1>

              <p className="text-sm sm:text-lg text-[#3A4B6E] font-medium leading-relaxed max-w-[660px]">
                {project.summary}
              </p>
            </div>

            {project.liveUrl && (
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.30)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.45)] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <span>Visit live platform</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ── 2. Showcase Display: Interactive 3D Device Frame Sandbox OR Large Media Frame ── */}
      <section className="relative z-10">
        <Container>
          {project.slug === "soundmind-ai" || project.slug === "aether-diary" ? (
            <AppShowcaseCard
              title={project.title}
              category={project.category}
              description={project.summary}
              tags={project.techStack.split(",").map((s) => s.trim())}
              videoSrc={project.slug === "soundmind-ai" ? "/videos/soundmind.mp4" : "/videos/aether-diary.mp4"}
              posterSrc={
                project.imagePaths?.[0] ||
                (project.slug === "soundmind-ai"
                  ? "/images/projects/soundmind/1.jpeg"
                  : "/images/projects/aether-diary/1.jpeg")
              }
              screenshots={project.imagePaths || []}
              liveAppUrl={project.liveUrl || undefined}
            />
          ) : (
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[rgba(0,110,245,0.22)] shadow-[0_20px_50px_-14px_rgba(0,110,245,0.16),inset_0_2px_4px_rgba(255,255,255,1)] bg-white/90 backdrop-blur-xl p-2 sm:p-4">
              <PlaceholderMedia
                src={project.imagePaths?.[0]}
                alt={`${project.title} main platform overview`}
                label={`${project.title} — Main Showcase Cover`}
                category={project.category}
                contentType={isComingSoon ? "Prototype View" : "Production Platform"}
                sublabel={
                  isComingSoon
                    ? "Full case study in progress"
                    : "Verified production release"
                }
                aspectRatio="16/9"
                priority={true}
                className="w-full max-h-[580px] rounded-[18px] sm:rounded-[24px]"
              />
            </div>
          )}
        </Container>
      </section>

      {/* ── 3. Core Narrative & Engineering Architecture ── */}
      <section className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              {/* The Problem / Challenge */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006EF5]">
                  The Challenge
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                  What we set out to solve
                </h2>
                <div className="rounded-[22px] bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.18)] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,110,245,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
                  <p className="text-sm sm:text-base text-[#2C3E5A] leading-relaxed font-medium">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* What We Built / The Solution */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006EF5]">
                  Engineered Solution
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                  How we engineered the system
                </h2>
                <div className="rounded-[22px] bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.18)] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,110,245,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
                  <p className="text-sm sm:text-base text-[#2C3E5A] leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Parts & Capabilities */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006EF5]">
                    Core Capabilities
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                    Key platform parts
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0B132B]">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-[16px] border border-[rgba(0,110,245,0.18)] bg-white/90 backdrop-blur-md p-4 shadow-2xs"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#006EF5]/10 text-[#006EF5] mt-0.5">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span className="font-semibold leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes & Performance Results */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006EF5]">
                  Verified Impact
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                  Outcomes & results
                </h2>
                <div className="rounded-[22px] border border-[rgba(0,110,245,0.18)] bg-white/95 backdrop-blur-xl p-6 sm:p-8 space-y-4 shadow-[0_8px_30px_rgba(0,110,245,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
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

                  {project.testimonialReference && (
                    <div className="mt-4 pt-4 border-t border-[rgba(0,110,245,0.14)] text-xs text-[#64748B] font-mono">
                      <span className="font-bold text-[#0B132B]">Client Reference: </span>
                      {project.testimonialReference}
                    </div>
                  )}
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

      {/* ── 4. Screenshot Gallery ── */}
      {project.imagePaths.length > 1 && (
        <section className="relative z-10">
          <Container className="space-y-6">
            <div className="border-b border-[rgba(0,110,245,0.16)] pb-4 max-w-[720px]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006EF5]">
                Visual Gallery
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight mt-1">
                Screenshots & interface views
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-medium mt-1">
                High-fidelity interface perspectives from the active deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.imagePaths.slice(1).map((imgPath, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-[20px] border border-[rgba(0,110,245,0.18)] bg-white/90 backdrop-blur-md p-2.5 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <PlaceholderMedia
                    src={imgPath}
                    alt={`${project.title} interface view 0${idx + 2}`}
                    label={`${project.title} — View 0${idx + 2}`}
                    category={project.category}
                    contentType="Interface Screenshot"
                    sublabel="Production View"
                    aspectRatio="16/9"
                    className="w-full rounded-[14px]"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 5. Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="relative z-10">
          <Container className="space-y-6">
            <div className="border-b border-[rgba(0,110,245,0.16)] pb-4 max-w-[720px]">
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                Services used in this project
              </h2>
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

      {/* ── 6. Bottom Consultation CTA Island ── */}
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(0,110,245,0.08)] border border-[rgba(0,110,245,0.25)] text-[#006EF5] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next Project</span>
              </div>

              <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-[#0B132B] tracking-tight">
                Need a similar solution for your business?
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] leading-relaxed font-medium">
                Tell us about your requirements or what is slowing your business down. We will provide a clean, high-performance architecture recommendation.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#003FC5] to-[#006EF5] shadow-[0_4px_16px_rgba(0,110,245,0.35)] hover:shadow-[0_6px_24px_rgba(0,110,245,0.50)] transition-all duration-200 hover:scale-105"
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
