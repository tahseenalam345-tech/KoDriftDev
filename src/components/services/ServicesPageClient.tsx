"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  Bot,
  TrendingUp,
  Sparkles,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  Camera,
  Search,
  Check,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceParticleCanvas } from "@/components/canvas/ServiceParticleCanvas";
import { serviceCategories, services } from "@/content/services";
import { siteConfig } from "@/content/site";

type CategoryFilter = "all" | "build" | "ai" | "grow";

interface FilterTab {
  id: CategoryFilter;
  label: string;
  count: number;
  icon: React.ElementType;
}

const FILTER_TABS: FilterTab[] = [
  { id: "all", label: "All Services", count: 10, icon: Layers },
  { id: "build", label: "Build & Systems", count: 3, icon: Cpu },
  { id: "ai", label: "AI & Automation", count: 2, icon: Bot },
  { id: "grow", label: "Grow & Support", count: 5, icon: TrendingUp },
];

const QUICK_SHAPES = [
  { shape: "code", label: "Web </>", name: "Web Development", tag: "</>" },
  { shape: "gear", label: "Software ⚙️", name: "Software Development", tag: "System" },
  { shape: "phone", label: "Mobile 📱", name: "App Development", tag: "iOS/Android" },
  { shape: "chip", label: "AI Chip 🧠", name: "AI Automation", tag: "Pipeline" },
  { shape: "camera", label: "Studio Lens 📷", name: "AI Photography", tag: "Studio" },
];

export function ServicesPageClient() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [activeShape, setActiveShape] = useState<string>("code");
  const [activeLabel, setActiveLabel] = useState<{ name: string; tag: string }>({
    name: "Web Development",
    tag: "</>",
  });

  const handleShapeChange = (shape: string, name: string, tag: string = "Core") => {
    setActiveShape(shape);
    setActiveLabel({ name, tag });
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kd-morph-shape", { detail: { shape } })
      );
    }
  };

  const handleCardHoverShape = (shape: string, name: string) => {
    setActiveShape(shape);
    const found = QUICK_SHAPES.find((s) => s.shape === shape);
    setActiveLabel({ name, tag: found?.tag || "Active" });
  };

  // Filtered categories
  const displayedCategories = serviceCategories.filter((cat) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "build") return cat.name.toLowerCase().includes("build");
    if (activeFilter === "ai") return cat.name.toLowerCase().includes("ai");
    if (activeFilter === "grow") return cat.name.toLowerCase().includes("grow");
    return true;
  });

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
          className="absolute top-[850px] -left-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-[1600px] -right-20 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.10) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── Hero Section ── */}
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
                Capabilities & Systems
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight leading-[1.08]">
              Architected for real scale.{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                Engineered for daily operations.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#2C3E5A] font-medium leading-relaxed max-w-2xl">
              Websites, custom software, practical mobile apps, and automated AI pipelines. We engineer reliable digital infrastructure shaped around your actual business workflow.
            </p>

            {/* Value Metric Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-xs font-bold text-[#0B132B]">
                <Zap className="h-3.5 w-3.5 text-[#006EF5]" />
                <span>10 Disciplines</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-xs font-bold text-[#0B132B]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>Custom Architecture</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-xs font-bold text-[#0B132B]">
                <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" />
                <span>3D Real-time Holograms</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[rgba(0,110,245,0.18)] shadow-xs text-xs font-bold text-[#0B132B]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#006EF5]" />
                <span>Zero Template Bloat</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Category Filter Bar ── */}
      <section className="relative z-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-[rgba(0,110,245,0.18)] shadow-[0_8px_25px_-5px_rgba(0,110,245,0.08),inset_0_1px_1px_rgba(255,255,255,1)]">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {FILTER_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`group relative inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-[0_6px_20px_rgba(0,110,245,0.30)] scale-[1.02]"
                        : "text-[#2C3E5A] hover:text-[#006EF5] hover:bg-white/90"
                    }`}
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(135deg, #0047BA 0%, #006EF5 100%)",
                          }
                        : {}
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-[#006EF5]/10 group-hover:text-[#006EF5]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Consultation Link */}
            <div className="hidden md:flex items-center gap-2 pr-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#006EF5] hover:text-[#004AC7] transition-colors"
              >
                <span>Need a custom scoped system?</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Two-Column Layout (Cards + Sticky 3D Morph Showcase) ── */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Categories & Luxury Service Cards */}
          <div className="space-y-16 sm:space-y-20">
            {displayedCategories.map((category) => {
              const categoryServices = services.filter(
                (s) => s.category.toLowerCase() === category.name.toLowerCase()
              );

              return (
                <section key={category.name} className="space-y-6">
                  {/* Category Header Island */}
                  <div className="relative p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/90 via-white/80 to-[rgba(240,247,255,0.70)] backdrop-blur-xl border border-[rgba(0,110,245,0.18)] shadow-[0_4px_20px_rgba(0,110,245,0.06),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#006EF5]" />
                        <h2 className="text-lg sm:text-2xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight">
                          {category.name}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3A4B6E] font-medium max-w-xl">
                        {category.description}
                      </p>
                    </div>

                    <span className="inline-flex items-center self-start sm:self-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-white text-[#006EF5] border border-[rgba(0,110,245,0.22)] shadow-xs shrink-0">
                      {categoryServices.length}{" "}
                      {categoryServices.length === 1 ? "Service" : "Services"}
                    </span>
                  </div>

                  {/* Service Cards Stack */}
                  <div className="space-y-3.5 sm:space-y-5">
                    {categoryServices.map((service, idx) => (
                      <ServiceCard
                        key={service.slug}
                        name={service.name}
                        slug={service.slug}
                        category={service.category}
                        shortDescription={service.shortDescription}
                        outcomes={service.outcomes}
                        deliverables={service.deliverables}
                        iconName={service.iconName}
                        featured={service.featured}
                        index={service.displayOrder || idx + 1}
                        onHoverShape={handleCardHoverShape}
                      />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Bottom Sapphire Command Center Island */}
            <div className="relative rounded-[22px] sm:rounded-[36px] border border-[rgba(0,110,245,0.30)] p-6 sm:p-12 text-center flex flex-col items-center shadow-[0_24px_60px_-15px_rgba(0,36,150,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.2)] overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #051438 0%, #082154 50%, #0B3378 100%)",
              }}
            >
              {/* Internal glow spheres */}
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
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#2C81FA]" />
                  <span>Direct Technical Consultation</span>
                </div>

                <h2 className="text-xl sm:text-4xl font-extrabold font-['Manrope'] text-white tracking-tight leading-tight">
                  Not sure which architecture fits your business?
                </h2>

                <p className="text-xs sm:text-base text-slate-200/90 leading-relaxed font-medium">
                  Tell us where your current operations bottleneck or what customer experience you want to build. We will recommend the exact pragmatic technical roadmap.
                </p>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    showArrow
                    className="shadow-[0_8px_25px_rgba(0,110,245,0.4)]"
                  >
                    Start a Project
                  </Button>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105"
                  >
                    <MessageSquare className="h-4 w-4 text-[#25D366]" />
                    <span>WhatsApp Engineer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Ambient Sticky 3D Morph Area */}
          <div className="hidden lg:flex sticky top-28 flex-col items-center min-h-[580px] select-none">
            {/* Ambient Background Glow behind 3D Morph */}
            <div
              className="absolute w-[440px] h-[440px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(44, 129, 250, 0.25) 0%, rgba(0, 110, 245, 0.12) 42%, rgba(0, 63, 197, 0.04) 75%, transparent 100%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            {/* 3D Morph Particle Showcase Stage Card */}
            <div className="relative w-full rounded-[32px] border-[1.5px] border-[rgba(0,110,245,0.25)] bg-gradient-to-br from-white/90 via-white/40 to-[rgba(235,245,255,0.60)] backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,110,245,0.18),inset_0_1.5px_2px_rgba(255,255,255,1)] p-4 overflow-hidden">
              
              {/* Header Bar inside 3D Pod */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[rgba(0,110,245,0.12)]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0047BA]">
                    Live 3D Particle State
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[rgba(0,110,245,0.08)] text-[#006EF5] font-bold">
                  4,200 Particles
                </span>
              </div>

              {/* Direct 3D Canvas Stage */}
              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden mt-2">
                <ServiceParticleCanvas activeShape={activeShape} />

                {/* Hologram Badge Indicator at bottom of canvas */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none whitespace-nowrap">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-white/95 backdrop-blur-xl text-[#006EF5] border border-[rgba(0,110,245,0.25)] shadow-[0_4px_16px_rgba(0,110,245,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
                    </span>
                    <span>{activeLabel.name}</span>
                    <span className="px-1.5 py-0.5 rounded bg-[rgba(0,110,245,0.10)] font-mono text-[10px] text-[#003FC5]">
                      {activeLabel.tag}
                    </span>
                  </span>
                </div>
              </div>

              {/* Interactive Quick Morph Controller */}
              <div className="mt-3 pt-3 border-t border-[rgba(0,110,245,0.12)]">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2 px-1">
                  Morph 3D Geometry
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {QUICK_SHAPES.map((item) => {
                    const isSelected = activeShape === item.shape;
                    return (
                      <button
                        key={item.shape}
                        onClick={() => handleShapeChange(item.shape, item.name, item.tag)}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-200 text-center truncate ${
                          isSelected
                            ? "bg-[#006EF5] text-white shadow-sm font-extrabold"
                            : "bg-white/80 hover:bg-white text-[#2C3E5A] border border-slate-200/80 hover:border-[#006EF5]/40"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Secondary Glass Information Box */}
            <div className="mt-4 w-full p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.15)] shadow-xs text-xs text-[#2C3E5A] font-medium leading-relaxed">
              <div className="flex items-center gap-2 mb-1.5 text-[#006EF5] font-extrabold">
                <Check className="h-4 w-4" />
                <span>Interactive Feedback</span>
              </div>
              <p className="text-[12px] text-slate-600">
                Hover any service card on the left to morph the real-time 3D particle array into its matching engineering geometry.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
