"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";
import { processSteps } from "@/content/process";

const STEP_CONFIGS = [
  {
    icon: Compass,
    accent: "#006EF5",
    accentLight: "rgba(0, 110, 245, 0.10)",
    borderColor: "rgba(0, 110, 245, 0.22)",
    tag: "Discovery",
    deliverable: "Goal Alignment",
  },
  {
    icon: Layers,
    accent: "#6366F1",
    accentLight: "rgba(99, 102, 241, 0.10)",
    borderColor: "rgba(99, 102, 241, 0.22)",
    tag: "Roadmap",
    deliverable: "Scope & Timeline",
  },
  {
    icon: Sparkles,
    accent: "#2C81FA",
    accentLight: "rgba(44, 129, 250, 0.15)",
    borderColor: "rgba(44, 129, 250, 0.40)",
    tag: "Core Sprint",
    deliverable: "Interactive Prototype",
    isCore: true,
  },
  {
    icon: Code2,
    accent: "#10B981",
    accentLight: "rgba(16, 185, 129, 0.10)",
    borderColor: "rgba(16, 185, 129, 0.22)",
    tag: "Engineering",
    deliverable: "Full-Stack Build",
  },
  {
    icon: Rocket,
    accent: "#EA580C",
    accentLight: "rgba(234, 88, 12, 0.10)",
    borderColor: "rgba(234, 88, 12, 0.22)",
    tag: "Deployment",
    deliverable: "Go-Live & Handover",
  },
];

export function ProcessPreview() {
  return (
    <section
      id="process"
      className="relative my-2 sm:my-5 lg:my-6 px-2 sm:px-4 lg:px-8 xl:px-10"
      aria-labelledby="process-heading"
    >
      {/* ── Sculpted Island Stage: Precision Blueprint Aesthetic ── */}
      <div
        className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 lg:pb-10 px-3 sm:px-6 lg:px-9 overflow-hidden border border-[rgba(16,185,129,0.22)] shadow-[0_20px_50px_-14px_rgba(16,185,129,0.10),inset_0_2px_4px_rgba(255,255,255,1)]"
        style={{
          background:
            "linear-gradient(160deg, #F3FAF7 0%, #E7F6F2 45%, #EDF8F5 100%)",
        }}
      >
        {/* Architectural Technical Blueprint Matrix Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.40]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(16, 185, 129, 0.16) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Emerald Blueprint Glow */}
        <div
          className="pointer-events-none absolute -top-24 -left-20 w-[500px] h-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.16) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 75%)",
            filter: "blur(110px)",
          }}
          aria-hidden="true"
        />

        {/* Ambient Cyan Velocity Radiance */}
        <div
          className="pointer-events-none absolute -bottom-16 right-8 w-[520px] h-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, rgba(44, 129, 250, 0.06) 50%, transparent 75%)",
            filter: "blur(110px)",
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
                  How We Work
                </span>
              </div>

              <h2
                id="process-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-[#0B132B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  Clear steps.
                </span>{" "}
                <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                  Good communication.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] font-medium leading-relaxed max-w-[580px]">
                We keep the work simple: understand the problem, plan properly, build carefully and stay available after launch.
              </p>
            </div>

            {/* Top-Right CTA Button */}
            <Link
              href="/process"
              className="group shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white/90 hover:bg-white text-xs sm:text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.25)] hover:border-[rgba(0,110,245,0.50)] shadow-[0_2px_10px_rgba(0,110,245,0.08)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.18)] transition-all duration-200 mt-0.5 sm:mt-1"
            >
              <span className="hidden sm:inline">Learn how we work</span>
              <span className="sm:hidden">Process</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* ── 5 Process Step Cards Grid ── */}
          <div className="relative">
            {/* Subtle Desktop Connecting Progress Track behind cards */}
            <div
              className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,110,245,0.25) 0%, rgba(99,102,241,0.25) 30%, rgba(44,129,250,0.35) 50%, rgba(16,185,129,0.25) 75%, rgba(234,88,12,0.25) 100%)",
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3.5 relative z-10">
              {processSteps.map((step, idx) => {
                const config = STEP_CONFIGS[idx] || STEP_CONFIGS[0];
                const Icon = config.icon;
                const isCore = Boolean(config.isCore);
                const isMiddleFeatured = idx === 2; // Card 3: 1 in row (full-width on mobile)

                return (
                  <div
                    key={step.title}
                    className={`group relative flex flex-col justify-between rounded-[16px] sm:rounded-[22px] p-2.5 sm:p-4 transition-all duration-200 ease-out hover:-translate-y-1 ${
                      isMiddleFeatured ? "col-span-2 lg:col-span-1" : "col-span-1"
                    } ${
                      isCore
                        ? "border-[1.5px] border-[#2C81FA]/50 shadow-[0_8px_24px_-6px_rgba(0,110,245,0.28)]"
                        : "border border-[rgba(0,110,245,0.18)] shadow-[0_4px_16px_-6px_rgba(0,110,245,0.06)]"
                    }`}
                    style={{
                      background: isCore
                        ? "linear-gradient(155deg, #091326 0%, #0F2044 55%, #152E5E 100%)"
                        : "linear-gradient(150deg, rgba(255, 255, 255, 0.98) 0%, rgba(242, 248, 255, 0.92) 100%)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div>
                      {/* Top Row: Squircle Icon & Step Number */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                        <div
                          className={`flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl transition-transform duration-200 group-hover:scale-105 ${
                            isCore
                              ? "bg-white/10 text-[#60A5FA] border border-[#2C81FA]/40"
                              : "bg-white/90 border border-black/[0.06] shadow-xs"
                          }`}
                          style={{
                            color: isCore ? "#60A5FA" : config.accent,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 stroke-[2.2]" />
                        </div>

                        {/* Step Number + Badge */}
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          {isCore && (
                            <span className="px-1.5 py-0.2 rounded-full text-[7.5px] sm:text-[8.5px] font-mono font-bold tracking-wider uppercase bg-[#2C81FA]/20 text-[#60A5FA] border border-[#2C81FA]/40">
                              Core
                            </span>
                          )}
                          <span
                            className={`font-mono text-base sm:text-xl font-extrabold tracking-tight ${
                              isCore
                                ? "text-[#60A5FA]"
                                : "bg-gradient-to-br from-[#003FC5] to-[#006EF5] bg-clip-text text-transparent"
                            }`}
                          >
                            0{step.number}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tag */}
                      <div className="mb-1 sm:mb-1.5">
                        <span
                          className={`inline-block px-1.5 py-0.2 rounded-full text-[7.5px] sm:text-[8.5px] font-extrabold uppercase tracking-wider mb-0.5 sm:mb-1 ${
                            isCore
                              ? "bg-white/10 text-white/80 border border-white/15"
                              : "bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.18)]"
                          }`}
                        >
                          {config.tag}
                        </span>
                        <h3
                          className={`font-heading font-extrabold text-xs sm:text-base tracking-tight leading-snug ${
                            isCore ? "text-white" : "text-[#0B132B]"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-[10px] sm:text-xs leading-snug line-clamp-2 sm:line-clamp-none ${
                          isCore ? "text-white/75" : "text-[#3A4B6E]"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Deliverable Pill */}
                    <div
                      className={`mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t text-[9px] sm:text-[10px] font-semibold flex items-center justify-between ${
                        isCore
                          ? "border-white/10 text-white/60"
                          : "border-black/[0.06] text-[#5A6E85]"
                      }`}
                    >
                      <span className="text-slate-400">Deliverable:</span>
                      <span
                        className={`font-medium truncate max-w-[65%] text-right ${
                          isCore ? "text-[#60A5FA]" : "text-[#006EF5]"
                        }`}
                      >
                        {config.deliverable}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
