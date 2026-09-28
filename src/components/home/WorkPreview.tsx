"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Layers, Monitor, Smartphone, Cpu, Sparkles } from "lucide-react";
import { projects } from "@/content/projects";

// Filter definitions requested by user: web / app / soft / ai
type FilterId = "all" | "web" | "apps" | "saas" | "ai";

interface FilterTab {
  id: FilterId;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
}

const FILTER_TABS: FilterTab[] = [
  { id: "all", label: "All Projects", shortLabel: "All", icon: Layers },
  { id: "web", label: "Web & Stores", shortLabel: "Web", icon: Monitor },
  { id: "apps", label: "Apps & Mobile", shortLabel: "Apps", icon: Smartphone },
  { id: "saas", label: "Software & SaaS", shortLabel: "SaaS", icon: Cpu },
  { id: "ai", label: "AI & Tech", shortLabel: "AI", icon: Sparkles },
];

// Project visual theming matched directly to screenshots & branding
interface ProjectThemeConfig {
  slug: string;
  filterCategories: FilterId[];
  hoverKey: string;
  themeColor: string; // Primary brand accent
  themeGradient: string; // Header / ambient tint
  borderColor: string;
  borderHoverColor: string;
  shadowColor: string;
  badgeBg: string;
  badgeText: string;
  tagPills: string[];
}

const THEME_CONFIGS: Record<string, ProjectThemeConfig> = {
  "aurax-custom-oms-ecommerce": {
    slug: "aurax-custom-oms-ecommerce",
    filterCategories: ["all", "web", "saas"],
    hoverKey: "aurax",
    themeColor: "#D97706", // Luxury Gold / Amber
    themeGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.04) 50%, rgba(255, 255, 255, 0.9) 100%)",
    borderColor: "rgba(217, 119, 6, 0.22)",
    borderHoverColor: "rgba(217, 119, 6, 0.65)",
    shadowColor: "rgba(217, 119, 6, 0.22)",
    badgeBg: "rgba(254, 243, 199, 0.95)",
    badgeText: "#92400E",
    tagPills: ["Luxury E-Commerce", "Custom OMS", "Next.js"],
  },
  "cluck-n-moo-restaurant-platform": {
    slug: "cluck-n-moo-restaurant-platform",
    filterCategories: ["all", "web", "apps"],
    hoverKey: "cluck",
    themeColor: "#EA580C", // Sunset Flame Orange / Coral
    themeGradient: "linear-gradient(135deg, rgba(234, 88, 12, 0.12) 0%, rgba(249, 115, 22, 0.04) 50%, rgba(255, 255, 255, 0.9) 100%)",
    borderColor: "rgba(234, 88, 12, 0.22)",
    borderHoverColor: "rgba(234, 88, 12, 0.65)",
    shadowColor: "rgba(234, 88, 12, 0.22)",
    badgeBg: "rgba(255, 237, 213, 0.95)",
    badgeText: "#9A3412",
    tagPills: ["Mobile-First", "Restaurant Ordering", "Kitchen Ops"],
  },
  "kodrift-pharmacy-saas": {
    slug: "kodrift-pharmacy-saas",
    filterCategories: ["all", "saas", "apps"],
    hoverKey: "pharmacy",
    themeColor: "#0891B2", // Clinical Precision Cyan / Teal
    themeGradient: "linear-gradient(135deg, rgba(8, 145, 178, 0.12) 0%, rgba(6, 182, 212, 0.04) 50%, rgba(255, 255, 255, 0.9) 100%)",
    borderColor: "rgba(8, 145, 178, 0.22)",
    borderHoverColor: "rgba(8, 145, 178, 0.65)",
    shadowColor: "rgba(8, 145, 178, 0.22)",
    badgeBg: "rgba(207, 250, 254, 0.95)",
    badgeText: "#155E75",
    tagPills: ["Pharmacy SaaS", "Inventory Ops", "High Speed"],
  },
  "prime-energy-uk-profitability-system": {
    slug: "prime-energy-uk-profitability-system",
    filterCategories: ["all", "saas", "ai", "web"],
    hoverKey: "prime",
    themeColor: "#16A34A", // Renewable Clean Energy Lime / Emerald
    themeGradient: "linear-gradient(135deg, rgba(22, 163, 74, 0.12) 0%, rgba(101, 163, 13, 0.04) 50%, rgba(255, 255, 255, 0.9) 100%)",
    borderColor: "rgba(22, 163, 74, 0.22)",
    borderHoverColor: "rgba(22, 163, 74, 0.65)",
    shadowColor: "rgba(22, 163, 74, 0.22)",
    badgeBg: "rgba(220, 252, 231, 0.95)",
    badgeText: "#166534",
    tagPills: ["CleanTech System", "EPC API & Grants", "Turso DB"],
  },
  "medibook-clinic-booking-platform": {
    slug: "medibook-clinic-booking-platform",
    filterCategories: ["all", "web", "apps", "saas"],
    hoverKey: "medibook",
    themeColor: "#2563EB", // Royal Medical Blue
    themeGradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, rgba(255, 255, 255, 0.9) 100%)",
    borderColor: "rgba(37, 99, 235, 0.22)",
    borderHoverColor: "rgba(37, 99, 235, 0.65)",
    shadowColor: "rgba(37, 99, 235, 0.22)",
    badgeBg: "rgba(219, 234, 254, 0.95)",
    badgeText: "#1E40AF",
    tagPills: ["Clinic Booking", "Schedule Portal", "Patient UI"],
  },
  "developer-portfolio-website": {
    slug: "developer-portfolio-website",
    filterCategories: ["all", "web"],
    hoverKey: "portfolio",
    themeColor: "#7C3AED", // Modern Purple / Violet
    themeGradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(139, 92, 246, 0.04) 50%, rgba(255, 255, 255, 0.9) 100%)",
    borderColor: "rgba(124, 58, 237, 0.22)",
    borderHoverColor: "rgba(124, 58, 237, 0.65)",
    shadowColor: "rgba(124, 58, 237, 0.22)",
    badgeBg: "rgba(243, 232, 255, 0.95)",
    badgeText: "#6B21A8",
    tagPills: ["Portfolio", "Personal Branding", "Next.js"],
  },
};

export function WorkPreview() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  // Select key projects with images
  const projectList = useMemo(() => {
    return Object.keys(THEME_CONFIGS)
      .map((slug) => {
        const found = projects.find((p) => p.slug === slug);
        if (!found || !found.imagePaths || found.imagePaths.length === 0) return null;
        return {
          ...found,
          config: THEME_CONFIGS[slug],
        };
      })
      .filter(Boolean) as (typeof projects[0] & { config: ProjectThemeConfig })[];
  }, []);

  // Filtered list
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectList;
    return projectList.filter((p) => p.config.filterCategories.includes(activeFilter));
  }, [projectList, activeFilter]);

  // Dispatch project-hover event so the WebGL particle engine can morph
  // into the project name typography ("AURA-X", "CLUCK N MOO", etc.)
  const handleProjectHover = (hoverKey: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kd-project-hover", { detail: hoverKey })
      );
    }
  };

  return (
    <section
      id="work"
      className="relative my-2 sm:my-5 lg:my-6 px-2 sm:px-4 lg:px-8 xl:px-10"
      aria-labelledby="work-heading"
    >
      {/* ── Sculpted Island Stage with Soft Slate/Pearl Tint & Rounded Architecture ── */}
      <div
        className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 lg:pb-10 px-3 sm:px-6 lg:px-9 overflow-hidden border border-[rgba(0,110,245,0.18)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.08),inset_0_2px_4px_rgba(255,255,255,1)]"
        style={{
          background:
            "linear-gradient(175deg, #EEF4FB 0%, #E4ECF8 45%, #F0F5FC 100%)",
        }}
      >
        {/* Subtle Decorative Architectural Dot Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 110, 245, 0.14) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Warm Amber Glow for Luxury Projects */}
        <div
          className="pointer-events-none absolute -top-24 -left-20 w-[480px] h-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />

        {/* Ambient Vibrant Azure Radiance */}
        <div
          className="pointer-events-none absolute top-12 right-1/4 w-[600px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.14) 0%, rgba(44, 129, 250, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3.5 sm:space-y-5 lg:space-y-6">
          {/* ── Section Header with Button Placed Directly at Top-Right ── */}
          <div className="flex items-start justify-between gap-3 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl">
              {/* 3D Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.32)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#006EF5]" />
                </span>
                <span className="text-[10px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                  Selected Work
                </span>
              </div>

              <h2
                id="work-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-[#0B132B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  Ideas turned into
                </span>{" "}
                <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                  working products.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] font-medium leading-relaxed max-w-[560px]">
                A curated collection of websites, high-performance platforms, and business tools engineered for impact.
              </p>
            </div>

            {/* "See all case studies" button on the Top-Right */}
            <Link
              href="/work"
              className="group shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white/90 hover:bg-white text-xs sm:text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.25)] hover:border-[rgba(0,110,245,0.50)] shadow-[0_2px_10px_rgba(0,110,245,0.08)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.18)] transition-all duration-200 mt-0.5 sm:mt-1"
            >
              <span className="hidden sm:inline">See all case studies</span>
              <span className="sm:hidden">See all</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* ── Interactive Category Pills (Fits fully within mobile screen without overflow) ── */}
          <div className="w-full flex items-center justify-start">
            <div className="w-full sm:w-auto flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl sm:rounded-full bg-white/85 backdrop-blur-xl border border-[rgba(0,110,245,0.18)] shadow-[0_4px_18px_rgba(0,110,245,0.07),inset_0_1px_1px_rgba(255,255,255,1)]">
              {FILTER_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                const count =
                  tab.id === "all"
                    ? projectList.length
                    : projectList.filter((p) => p.config.filterCategories.includes(tab.id)).length;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    type="button"
                    className={`relative flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-[13px] font-bold transition-all duration-200 ${
                      isActive
                        ? "text-white shadow-[0_3px_12px_rgba(0,110,245,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-[1.02]"
                        : "text-[#3A4B6E] hover:text-[#0B132B] hover:bg-black/[0.03]"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #004AC7 0%, #006EF5 100%)"
                        : "transparent",
                    }}
                  >
                    <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isActive ? "text-white stroke-[2.4]" : "text-[#006EF5] stroke-[2]"}`} />
                    <span>
                      <span className="inline sm:hidden">{tab.shortLabel}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                    </span>
                    <span
                      className={`ml-0.5 px-1 sm:px-1.5 py-0.2 rounded-full text-[9px] sm:text-[10px] font-extrabold ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "bg-[rgba(0,110,245,0.08)] text-[#006EF5]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Compact 2-Column Responsive Grid with Reduced Card Sizes (Both Desktop & Mobile) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
            {filteredProjects.map((project) => {
              const { config } = project;
              return (
                <div
                  key={project.slug}
                  onMouseEnter={() => handleProjectHover(config.hoverKey)}
                  className="group lighter-button relative flex flex-col rounded-[18px] sm:rounded-[22px] overflow-hidden border-[1.5px] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5"
                  style={{
                    background: config.themeGradient,
                    borderColor: config.borderColor,
                    boxShadow: `0 8px 24px -10px ${config.shadowColor}, inset 0 1px 2px rgba(255,255,255,0.9)`,
                  }}
                >
                  {/* ── Sleek Compact Screenshot Window (aspect-[16/8.8]) ── */}
                  <div className="relative aspect-[16/8.8] w-full overflow-hidden bg-white/40 border-b border-black/[0.05]">
                    <Image
                      src={project.imagePaths[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Subtle fade overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 40%)",
                      }}
                    />

                    {/* Top Floating Tags */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {config.tagPills.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-tight shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                            style={{
                              background: "rgba(255, 255, 255, 0.88)",
                              backdropFilter: "blur(8px)",
                              border: `1px solid ${config.borderColor}`,
                              color: config.themeColor,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                        style={{
                          background: "rgba(255, 255, 255, 0.90)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(0,0,0,0.08)",
                          color: "#4A5568",
                        }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* ── Compact Card Content with Tailored Typography ── */}
                  <div className="flex flex-col flex-1 p-3.5 sm:p-4.5 justify-between bg-white/70 backdrop-blur-md">
                    <div className="space-y-1.5 sm:space-y-2">
                      {/* Category Label */}
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider"
                          style={{
                            background: config.badgeBg,
                            color: config.badgeText,
                            border: `1px solid ${config.borderColor}`,
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title with subtle brand color hover */}
                      <h3 className="font-heading font-extrabold text-[15px] sm:text-lg text-[#0B132B] tracking-tight leading-snug transition-colors duration-200">
                        <Link
                          href={`/work/${project.slug}`}
                          className="hover:underline decoration-2 underline-offset-4"
                          style={{
                            textDecorationColor: config.themeColor,
                          }}
                        >
                          {project.title}
                        </Link>
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-[13px] text-[#3A4B6E] font-medium leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* ── Bottom Action & Tech Line ── */}
                    <div className="mt-3 pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-extrabold transition-all group/link"
                        style={{ color: config.themeColor }}
                      >
                        <span>Read case study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold text-[#5A6E85] hover:text-[#0B132B] transition-colors"
                        >
                          <span>Live platform</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

