"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Cpu,
  Smartphone,
  Camera,
  Zap,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { services } from "@/content/services";

export function ServicePreview() {
  const webDev = services.find((s) => s.slug === "web-development")!;
  const softwareDev = services.find((s) => s.slug === "software-development")!;
  const appDev = services.find((s) => s.slug === "app-development")!;
  const aiPhoto = services.find((s) => s.slug === "ai-product-photography")!;
  const aiAutomation = services.find((s) => s.slug === "ai-automation")!;

  const [activeService, setActiveService] = React.useState<{ name: string; tag: string }>({
    name: "Web Development",
    tag: "</>",
  });

  // Emit morph event for 3D particles (with cardId for mobile touch positioning)
  const handleMorph = (shape: string, name: string, tag: string, cardId?: string) => {
    setActiveService({ name, tag });
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kd-morph-shape", { detail: { shape, cardId } })
      );
    }
  };

  return (
    <section
      id="services"
      className="relative pt-2 sm:pt-6 lg:pt-8 pb-1 sm:pb-2 overflow-hidden bg-transparent"
      aria-labelledby="services-heading"
    >
      {/* Ambient soft crystal blue radiance */}
      <div
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 w-[760px] h-[340px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.22) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-20 space-y-6 sm:space-y-10">
        {/* ── Section Heading & Fixed 3D Particle Showcase Stage (Hidden on Mobile, Visible on Desktop) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-center">
          <div className="space-y-2.5 sm:space-y-3.5">
            {/* "What we build" converted to a 3D Glassmorphic Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.32)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#006EF5]" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                What we build
              </span>
            </div>

            <h2
              id="services-heading"
              className="section-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="text-[#0B132B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                Useful digital products.
              </span>{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                Made around your business.
              </span>
            </h2>

            <p className="text-xs sm:text-[16px] leading-relaxed max-w-[560px] text-[#2C3E5A] font-medium">
              Some projects start with a website. Others need an app, a better
              ordering flow or a system behind the scenes. We help with both.
            </p>
          </div>

          {/* ── Fixed 3D Particle Showcase Stage (Hidden on Mobile, Visible on Desktop lg:flex) ── */}
          <div
            id="services-particle-anchor"
            className="hidden lg:flex relative h-[200px] sm:h-[265px] lg:h-[285px] w-full items-center justify-center rounded-2xl sm:rounded-3xl"
          >
            {/* Subtle glass pod backdrop */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl border border-[rgba(0,110,245,0.20)] bg-gradient-to-br from-white/70 via-white/30 to-[rgba(235,245,255,0.45)] backdrop-blur-md shadow-[0_18px_40px_-12px_rgba(0,110,245,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)]"
              aria-hidden="true"
            />
            {/* Soft radiant ambient glow */}
            <div
              className="pointer-events-none absolute inset-x-12 top-1/2 -translate-y-1/2 h-28 rounded-full bg-[#006EF5]/12 blur-3xl"
              aria-hidden="true"
            />
            
            {/* Dynamic hologram badge */}
            <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase bg-white/95 backdrop-blur-xl text-[#006EF5] border border-[rgba(0,110,245,0.24)] shadow-[0_4px_14px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
                </span>
                <span>{activeService.name}</span>
                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,110,245,0.10)] font-mono text-[9px] sm:text-[10px] text-[#004AC7]">
                  {activeService.tag}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* ── ROW 1: Two Large Featured Cards (Web & Software) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-6 lg:gap-7" style={{ perspective: "1200px" }}>
          
          {/* ── CARD 01: Web Development (Glacier Crystal Glass, -1.2deg Tilt) ── */}
          <Link
            id="service-card-web"
            href={`/services/${webDev.slug}`}
            onMouseEnter={() => handleMorph("code", "Web Development", "</>", "service-card-web")}
            onTouchStart={() => handleMorph("code", "Web Development", "</>", "service-card-web")}
            className="group lighter-button relative block p-3.5 sm:p-7 lg:p-8 rounded-[16px] sm:rounded-[28px] lg:rounded-[32px] border-[1.5px] border-[rgba(0,110,245,0.22)] hover:border-[#006EF5] backdrop-blur-xl shadow-[0_12px_30px_-10px_rgba(0,110,245,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_24px_50px_-10px_rgba(0,110,245,0.28),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 ease-out overflow-hidden -rotate-[0.8deg] sm:-rotate-[1.2deg] hover:rotate-0 hover:-translate-y-2 hover:scale-[1.015]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 247, 255, 0.90) 55%, rgba(228, 242, 255, 0.85) 100%)",
            }}
          >
            {/* Top ambient color reflection */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#006EF5]/15 blur-2xl group-hover:bg-[#006EF5]/25 transition-all duration-300"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-6">
              {/* 3D Glass Squircle Icon */}
              <div className="flex items-center gap-2 sm:gap-3.5">
                <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-white/90 text-[#006EF5] border border-[rgba(0,110,245,0.25)] shadow-[0_4px_14px_rgba(0,110,245,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-110">
                  <Globe className="h-4 w-4 sm:h-6 sm:w-6 stroke-[2.2]" />
                </div>
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.20)] shadow-xs">
                  Core Service
                </span>
              </div>

              {/* 3D Embossed Number */}
              <span className="font-heading font-extrabold text-xl sm:text-4xl tracking-tight bg-gradient-to-br from-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                01
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-[24px] font-heading font-extrabold text-[#0B132B] mb-1 sm:mb-3 group-hover:text-[#006EF5] transition-colors tracking-tight">
                {webDev.name}
              </h3>
              <p className="text-[11px] sm:text-base leading-snug sm:leading-relaxed text-[#2C3E5A] font-medium mb-2.5 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                {webDev.shortDescription}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-[#006EF5] group-hover:text-[#004AC7] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </Link>

          {/* ── CARD 02: Software Development (Indigo Crystal Glass, +1.2deg Tilt) ── */}
          <Link
            id="service-card-software"
            href={`/services/${softwareDev.slug}`}
            onMouseEnter={() => handleMorph("gear", "Software Development", "Gear", "service-card-software")}
            onTouchStart={() => handleMorph("gear", "Software Development", "Gear", "service-card-software")}
            className="group lighter-button relative block p-3.5 sm:p-7 lg:p-8 rounded-[16px] sm:rounded-[28px] lg:rounded-[32px] border-[1.5px] border-[rgba(99,102,241,0.22)] hover:border-[#6366F1] backdrop-blur-xl shadow-[0_12px_30px_-10px_rgba(99,102,241,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_24px_50px_-10px_rgba(99,102,241,0.28),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 ease-out overflow-hidden rotate-[0.8deg] sm:rotate-[1.2deg] hover:rotate-0 hover:-translate-y-2 hover:scale-[1.015]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(245, 243, 255, 0.90) 55%, rgba(238, 235, 254, 0.85) 100%)",
            }}
          >
            {/* Top ambient color reflection */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#6366F1]/15 blur-2xl group-hover:bg-[#6366F1]/25 transition-all duration-300"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-6">
              {/* 3D Glass Squircle Icon */}
              <div className="flex items-center gap-2 sm:gap-3.5">
                <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-white/90 text-[#6366F1] border border-[rgba(99,102,241,0.25)] shadow-[0_4px_14px_rgba(99,102,241,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-110">
                  <Cpu className="h-4 w-4 sm:h-6 sm:w-6 stroke-[2.2]" />
                </div>
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[rgba(99,102,241,0.08)] text-[#6366F1] border border-[rgba(99,102,241,0.20)] shadow-xs">
                  Core Service
                </span>
              </div>

              {/* 3D Embossed Number */}
              <span className="font-heading font-extrabold text-xl sm:text-4xl tracking-tight bg-gradient-to-br from-[#4338CA] to-[#6366F1] bg-clip-text text-transparent">
                02
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-[24px] font-heading font-extrabold text-[#0B132B] mb-1 sm:mb-3 group-hover:text-[#6366F1] transition-colors tracking-tight">
                {softwareDev.name}
              </h3>
              <p className="text-[11px] sm:text-base leading-snug sm:leading-relaxed text-[#2C3E5A] font-medium mb-2.5 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                {softwareDev.shortDescription}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-[#6366F1] group-hover:text-[#4F46E5] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </Link>
        </div>

        {/* ── ROW 2: Three Compact Cards (App, Photo, AI) with Unique Individual Styles ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6" style={{ perspective: "1200px" }}>
          
          {/* ── CARD 03: App Development (Mint/Teal Glass, -1.0deg Tilt) ── */}
          <Link
            id="service-card-app"
            href={`/services/${appDev.slug}`}
            onMouseEnter={() => handleMorph("phone", "App Development", "Mobile", "service-card-app")}
            onTouchStart={() => handleMorph("phone", "App Development", "Mobile", "service-card-app")}
            className="group lighter-button relative block p-3 sm:p-6 rounded-[16px] sm:rounded-[28px] border-[1.5px] border-[rgba(16,185,129,0.22)] hover:border-[#10B981] backdrop-blur-xl shadow-[0_10px_24px_-8px_rgba(16,185,129,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-8px_rgba(16,185,129,0.24),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 ease-out overflow-hidden -rotate-[0.6deg] sm:-rotate-[1.0deg] hover:rotate-0 hover:-translate-y-1.5 hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(236, 253, 245, 0.90) 55%, rgba(209, 250, 229, 0.85) 100%)",
            }}
          >
            <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex h-7 w-7 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-white/90 text-[#10B981] border border-[rgba(16,185,129,0.25)] shadow-[0_4px_12px_rgba(16,185,129,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-110">
                <Smartphone className="h-3.5 w-3.5 sm:h-5 sm:w-5 stroke-[2.2]" />
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight bg-gradient-to-br from-[#047857] to-[#10B981] bg-clip-text text-transparent">
                03
              </span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-[rgba(16,185,129,0.10)] text-[#059669] mb-1 sm:mb-2">
                Mobile & Web
              </span>
              <h3 className="text-[14px] sm:text-xl font-heading font-extrabold text-[#0B132B] mb-0.5 sm:mb-2 group-hover:text-[#10B981] transition-colors tracking-tight">
                {appDev.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#2C3E5A] font-medium leading-snug sm:leading-relaxed mb-2 sm:mb-5 line-clamp-2">
                {appDev.shortDescription}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#10B981] group-hover:text-[#059669] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* ── CARD 04: AI Product Photography (Prismatic Violet Glass, +0.4deg Tilt) ── */}
          <Link
            id="service-card-photo"
            href={`/services/${aiPhoto.slug}`}
            onMouseEnter={() => handleMorph("camera", "AI Photography", "Camera", "service-card-photo")}
            onTouchStart={() => handleMorph("camera", "AI Photography", "Camera", "service-card-photo")}
            className="group lighter-button relative block p-3 sm:p-6 rounded-[16px] sm:rounded-[28px] border-[1.5px] border-[rgba(168,85,247,0.22)] hover:border-[#A855F7] backdrop-blur-xl shadow-[0_10px_24px_-8px_rgba(168,85,247,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-8px_rgba(168,85,247,0.24),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 ease-out overflow-hidden rotate-[0.4deg] hover:rotate-0 hover:-translate-y-1.5 hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(253, 244, 255, 0.90) 55%, rgba(245, 208, 254, 0.85) 100%)",
            }}
          >
            <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex h-7 w-7 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-white/90 text-[#A855F7] border border-[rgba(168,85,247,0.25)] shadow-[0_4px_12px_rgba(168,85,247,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-110">
                <Camera className="h-3.5 w-3.5 sm:h-5 sm:w-5 stroke-[2.2]" />
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight bg-gradient-to-br from-[#7E22CE] to-[#A855F7] bg-clip-text text-transparent">
                04
              </span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-[rgba(168,85,247,0.10)] text-[#7E22CE] mb-1 sm:mb-2">
                AI Visuals
              </span>
              <h3 className="text-[14px] sm:text-xl font-heading font-extrabold text-[#0B132B] mb-0.5 sm:mb-2 group-hover:text-[#A855F7] transition-colors tracking-tight">
                {aiPhoto.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#2C3E5A] font-medium leading-snug sm:leading-relaxed mb-2 sm:mb-5 line-clamp-2">
                {aiPhoto.shortDescription}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#A855F7] group-hover:text-[#7E22CE] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* ── CARD 05: AI Automation (Sapphire/Sky Glass, +1.2deg Tilt) ── */}
          <Link
            id="service-card-ai"
            href={`/services/${aiAutomation.slug}`}
            onMouseEnter={() => handleMorph("chip", "AI Automation", "AI Chip", "service-card-ai")}
            onTouchStart={() => handleMorph("chip", "AI Automation", "AI Chip", "service-card-ai")}
            className="group lighter-button relative block p-3 sm:p-6 rounded-[16px] sm:rounded-[28px] border-[1.5px] border-[rgba(2,132,199,0.22)] hover:border-[#0284C7] backdrop-blur-xl shadow-[0_10px_24px_-8px_rgba(2,132,199,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-8px_rgba(2,132,199,0.24),inset_0_1.5px_2px_rgba(255,255,255,1)] transition-all duration-300 ease-out overflow-hidden rotate-[0.6deg] sm:rotate-[1.2deg] hover:rotate-0 hover:-translate-y-1.5 hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 249, 255, 0.90) 55%, rgba(224, 242, 254, 0.85) 100%)",
            }}
          >
            <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex h-7 w-7 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-white/90 text-[#0284C7] border border-[rgba(2,132,199,0.25)] shadow-[0_4px_12px_rgba(2,132,199,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-110">
                <Zap className="h-3.5 w-3.5 sm:h-5 sm:w-5 stroke-[2.2]" />
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight bg-gradient-to-br from-[#0369A1] to-[#0284C7] bg-clip-text text-transparent">
                05
              </span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-[rgba(2,132,199,0.10)] text-[#0369A1] mb-1 sm:mb-2">
                AI Systems
              </span>
              <h3 className="text-[14px] sm:text-xl font-heading font-extrabold text-[#0B132B] mb-0.5 sm:mb-2 group-hover:text-[#0284C7] transition-colors tracking-tight">
                {aiAutomation.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#2C3E5A] font-medium leading-snug sm:leading-relaxed mb-2 sm:mb-5 line-clamp-2">
                {aiAutomation.shortDescription}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#0284C7] group-hover:text-[#0369A1] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* ── Bottom Link with Glossy Button Hover ── */}
        <div className="flex items-center justify-end pt-1 sm:pt-2">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/80 hover:bg-white text-xs sm:text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.20)] hover:border-[rgba(0,110,245,0.50)] shadow-[0_2px_12px_rgba(0,110,245,0.08)] hover:shadow-[0_4px_20px_rgba(0,110,245,0.16)] transition-all duration-200"
          >
            <span>View all services & full breakdown</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

