"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MoveHorizontal,
  ArrowRight,
  Sparkles,
  Camera,
  CheckCircle2,
  Zap,
  Sliders,
} from "lucide-react";
import { aiProductPhotoExamples, AiProductPhotoExample } from "@/content/aiProductPhotography";

interface DraggableComparisonSliderProps {
  example: AiProductPhotoExample;
}

function DraggableComparisonSlider({ example }: DraggableComparisonSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    setSliderPos(Math.round((clamped / rect.width) * 100));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    try {
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 5));
    else if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 5));
  };

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Compare original raw photo and AI-enhanced commercial product shot"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPos}
        className="relative aspect-square w-full overflow-hidden rounded-[20px] sm:rounded-[26px] cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#006EF5] border-[1.5px] border-[rgba(0,110,245,0.22)] shadow-[0_16px_40px_-10px_rgba(0,60,180,0.14),inset_0_1px_2px_rgba(255,255,255,0.8)] bg-neutral-900 touch-none"
      >
        {/* Layer 1: After Image (AI-enhanced Commercial Staging) */}
        <div className="absolute inset-0">
          <Image
            src={example.afterImage}
            alt={example.altAfter}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover object-center"
            priority
          />
          {/* Floating After Badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase bg-black/75 backdrop-blur-md text-[#60A5FA] border border-[#006EF5]/40 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              AI Staged
            </span>
          </div>
        </div>

        {/* Layer 2: Before Image (Raw Camera Photo) with dynamic clipping */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={example.beforeImage}
            alt={example.altBefore}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover object-center"
            priority
          />
          {/* Floating Before Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase bg-black/75 backdrop-blur-md text-neutral-200 border border-white/20 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
              Raw Photo
            </span>
          </div>
        </div>

        {/* Divider Bar & Circular Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] pointer-events-none z-20"
          style={{
            left: `${sliderPos}%`,
            background: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0 0 10px rgba(0, 110, 245, 0.6)",
          }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#003FC5] to-[#006EF5] text-white border-2 border-white shadow-[0_4px_16px_rgba(0,110,245,0.45)] transition-transform duration-150 active:scale-110">
            <MoveHorizontal className="h-4 w-4 text-white stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Subtle Drag Hint */}
      <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#5A6E85]">
        <Sliders className="w-3.5 h-3.5 text-[#006EF5]" />
        <span>Drag slider left or right to compare</span>
      </div>
    </div>
  );
}

export function AiPhotoPreview({ className }: { className?: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeExample = aiProductPhotoExamples[selectedIndex] || aiProductPhotoExamples[0];

  return (
    <section
      id="ai-photography"
      className={`relative my-2 sm:my-5 lg:my-6 px-2 sm:px-4 lg:px-8 xl:px-10 ${className || ""}`}
      aria-labelledby="ai-photo-heading"
    >
      {/* ── Sculpted Island Stage matching WorkPreview aesthetic ── */}
      <div
        className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 lg:pb-10 px-3 sm:px-6 lg:px-9 overflow-hidden border border-[rgba(0,110,245,0.18)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.08),inset_0_2px_4px_rgba(255,255,255,1)]"
        style={{
          background:
            "linear-gradient(175deg, #F0F6FD 0%, #E6EFFC 45%, #F4F8FD 100%)",
        }}
      >
        {/* Architectural Subtle Dot Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 110, 245, 0.14) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Warm Studio Glow */}
        <div
          className="pointer-events-none absolute -top-20 -left-16 w-[420px] h-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.10) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          aria-hidden="true"
        />

        {/* Ambient Azure Radiance */}
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[340px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.12) 0%, transparent 75%)",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* ── Section Header with Top-Right Action Button ── */}
          <div className="flex items-start justify-between gap-3 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
              {/* 3D Glassmorphic Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.32)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#006EF5]" />
                </span>
                <span className="text-[10px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                  AI Product Photography
                </span>
              </div>

              <h2
                id="ai-photo-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-[#0B132B] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  Studio quality visuals.
                </span>{" "}
                <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,110,245,0.22)]">
                  Zero photoshoot hassle.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#3A4B6E] font-medium leading-relaxed max-w-[580px]">
                Turn raw smartphone captures and supplier photos into high-converting commercial product staging with photorealistic lighting.
              </p>
            </div>

            {/* Top-Right CTA Button */}
            <Link
              href="/services/ai-product-photography"
              className="group shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white/90 hover:bg-white text-xs sm:text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.25)] hover:border-[rgba(0,110,245,0.50)] shadow-[0_2px_10px_rgba(0,110,245,0.08)] hover:shadow-[0_6px_22px_rgba(0,110,245,0.18)] transition-all duration-200 mt-0.5 sm:mt-1"
            >
              <span className="hidden sm:inline">Explore AI Photography</span>
              <span className="sm:hidden">Explore</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* ── Interactive Watch Switcher Tabs (3 user before/after pairs) ── */}
          <div className="w-full flex items-center justify-start">
            <div className="w-full sm:w-auto flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl sm:rounded-full bg-white/85 backdrop-blur-xl border border-[rgba(0,110,245,0.18)] shadow-[0_4px_18px_rgba(0,110,245,0.07),inset_0_1px_1px_rgba(255,255,255,1)]">
              {aiProductPhotoExamples.map((item, idx) => {
                const isActive = selectedIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    type="button"
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-[13px] font-bold transition-all duration-200 ${
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
                    <Camera className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isActive ? "text-white stroke-[2.4]" : "text-[#006EF5] stroke-[2]"}`} />
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── 2-Column Split: Interactive Slider & Feature Summary ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-center">
            {/* Left: The Before / After Comparison Slider */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
              <DraggableComparisonSlider example={activeExample} />
            </div>

            {/* Right: Live Transformation Details & Benefits */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-3.5 sm:space-y-4">
              {/* Product Info Card */}
              <div className="p-4 sm:p-5 rounded-[20px] bg-white/80 backdrop-blur-xl border border-[rgba(0,110,245,0.18)] shadow-[0_8px_24px_-8px_rgba(0,110,245,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[rgba(0,110,245,0.10)] text-[#006EF5] border border-[rgba(0,110,245,0.20)]">
                    {activeExample.category}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#5A6E85]">
                    Example 0{selectedIndex + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0B132B] tracking-tight">
                  {activeExample.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#3A4B6E] font-medium leading-relaxed">
                  {activeExample.subtitle}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeExample.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold text-[#004AC7] bg-[rgba(0,110,245,0.06)] border border-[rgba(0,110,245,0.14)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Quick Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-3 rounded-xl bg-white/75 backdrop-blur-md border border-black/[0.05] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B132B] mb-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>No Studio Needed</span>
                  </div>
                  <p className="text-[11px] text-[#5A6E85] leading-snug">
                    Send phone captures or supplier raw snaps.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/75 backdrop-blur-md border border-black/[0.05] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B132B] mb-0.5">
                    <Zap className="w-3.5 h-3.5 text-[#006EF5] shrink-0" />
                    <span>Rapid Turnaround</span>
                  </div>
                  <p className="text-[11px] text-[#5A6E85] leading-snug">
                    Entire product catalogs staged in 24–48 hours.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/75 backdrop-blur-md border border-black/[0.05] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B132B] mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                    <span>Exact Geometry</span>
                  </div>
                  <p className="text-[11px] text-[#5A6E85] leading-snug">
                    Real dials, bezels & logos preserved 100%.
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-1 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-xs sm:text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,110,245,0.28)] transition-all hover:scale-[1.02]"
                >
                  <span>Request a free sample staging</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/services/ai-product-photography"
                  className="text-xs font-bold text-[#006EF5] hover:text-[#004AC7] hover:underline"
                >
                  See pricing & workflow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
