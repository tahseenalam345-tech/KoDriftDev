"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { aiProductPhotoExamples, AiProductPhotoExample } from "@/content/aiProductPhotography";
import { cn } from "@/lib/utils";

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
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try { (e.target as HTMLElement).releasePointerCapture?.(e.pointerId); } catch { /* ignore */ }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 5));
    else if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Compare original and AI-enhanced product photo"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={sliderPos}
      className="relative aspect-video w-full overflow-hidden select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-teal"
      style={{
        borderRadius: "12px",
        border: "1px solid rgba(118,225,205,0.25)",
        background: "#050A09",
      }}
    >
      {/* After (AI-enhanced) */}
      <div className="absolute inset-0">
        {example.afterImage && (
          <Image src={example.afterImage} alt={example.altAfter} fill sizes="(max-width:1024px) 100vw, 1000px" className="object-cover" />
        )}
        <div className="absolute top-4 right-4 z-10">
          <span
            className="metadata-text px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(11,33,31,0.88)",
              border: "1px solid rgba(66,191,168,0.45)",
              color: "var(--teal-bright)",
            }}
          >
            AI-enhanced
          </span>
        </div>
      </div>
      {/* Before (Original) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        {example.beforeImage && (
          <Image src={example.beforeImage} alt={example.altBefore} fill sizes="(max-width:1024px) 100vw, 1000px" className="object-cover" />
        )}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="metadata-text px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(11,33,31,0.80)",
              border: "1px solid rgba(249,249,247,0.25)",
              color: "rgba(249,249,247,0.85)",
            }}
          >
            Original
          </span>
        </div>
      </div>
      {/* Divider handle */}
      <div className="absolute top-0 bottom-0 w-[2px] pointer-events-none" style={{ left: `${sliderPos}%`, background: "rgba(255,255,255,0.9)" }}>
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30"
          style={{ background: "var(--brand-blue)", boxShadow: "0 2px 12px rgba(45,140,255,0.4)" }}
        >
          <MoveHorizontal className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export function AiPhotoPreview({ className }: { className?: string }) {
  const activeExample = aiProductPhotoExamples[0];
  const isReady =
    activeExample?.status === "ready" &&
    Boolean(activeExample.beforeImage && activeExample.afterImage);

  return (
    <section
      className={cn("relative overflow-hidden py-24 sm:py-32 lg:py-40", className)}
      aria-labelledby="ai-photo-heading"
    >
      {/* Dark deep-teal stage background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #081C1B 0%, #0D2D2A 55%, #0A2423 100%)",
        }}
        aria-hidden="true"
      />

      {/* Stage lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/4 w-[500px] h-[400px] rounded-full"
          style={{ background: "var(--blue-light)", filter: "blur(120px)", opacity: 0.18 }}
        />
        <div
          className="absolute -bottom-16 right-1/4 w-[400px] h-[320px] rounded-full"
          style={{ background: "var(--lavender-light)", filter: "blur(110px)", opacity: 0.15 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "var(--teal-bright)", filter: "blur(150px)", opacity: 0.10 }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(249,249,247,0.6) 0.75px, transparent 0.75px)",
            backgroundSize: "18px 18px",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16" style={{ maxWidth: "1360px" }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl space-y-4">
            <span className="metadata-text" style={{ color: "var(--teal-bright)" }}>
              AI product photography
            </span>
            <h2 id="ai-photo-heading" className="section-headline" style={{ color: "rgba(249,249,247,0.95)" }}>
              Product images,{" "}
              <span style={{ color: "var(--teal)" }}>without the studio headache.</span>
            </h2>
            <p className="text-base sm:text-[17px] leading-relaxed max-w-[520px]" style={{ color: "rgba(249,249,247,0.55)" }}>
              We create polished visuals for product pages, ads and social media.
              New examples are being added.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href="/services/ai-product-photography"
              variant="secondary"
              size="md"
              showArrow
              className="border-white/30 text-white hover:bg-white hover:text-ink"
              style={{}}
            >
              Ask about product visuals
            </Button>
          </div>
        </div>

        {/* Comparison stage */}
        {isReady ? (
          <DraggableComparisonSlider example={activeExample} />
        ) : (
          /* Placeholder frame */
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(118,225,205,0.18)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderTop: "none" }}>
              {/* Left: Original */}
              <div className="p-8 sm:p-12 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="metadata-text" style={{ color: "rgba(249,249,247,0.45)" }}>
                    Original
                  </span>
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider"
                    style={{ color: "rgba(249,249,247,0.25)" }}
                  >
                    Input
                  </span>
                </div>
                <div
                  className="flex-1 rounded-xl flex flex-col items-center justify-center min-h-[200px] gap-4"
                  style={{
                    border: "1.5px dashed rgba(249,249,247,0.12)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center font-mono text-sm font-bold"
                    style={{
                      border: "1.5px dashed rgba(249,249,247,0.18)",
                      color: "rgba(249,249,247,0.30)",
                    }}
                  >
                    RAW
                  </div>
                  <p className="text-[12px] font-mono text-center" style={{ color: "rgba(249,249,247,0.30)" }}>
                    Standard studio or raw camera capture
                  </p>
                </div>
                <p className="text-[11px] font-mono" style={{ color: "rgba(249,249,247,0.25)" }}>
                  Unedited product asset
                </p>
              </div>

              {/* Right: AI-Enhanced */}
              <div className="p-8 sm:p-12 flex flex-col gap-6" style={{ borderTop: "1px solid rgba(118,225,205,0.14)" }}>
                <div className="flex items-center justify-between">
                  <span className="metadata-text" style={{ color: "var(--teal-bright)" }}>
                    AI-enhanced
                  </span>
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                    style={{ color: "var(--teal)" }}
                  >
                    Ready to sell
                  </span>
                </div>
                <div
                  className="flex-1 rounded-xl flex flex-col items-center justify-center min-h-[200px] gap-4"
                  style={{
                    border: "1.5px dashed rgba(66,191,168,0.30)",
                    background: "rgba(66,191,168,0.05)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center font-mono text-sm font-bold"
                    style={{
                      border: "1.5px solid rgba(66,191,168,0.35)",
                      background: "rgba(66,191,168,0.10)",
                      color: "var(--teal)",
                    }}
                  >
                    STAGED
                  </div>
                  <p className="text-[12px] font-mono text-center" style={{ color: "rgba(249,249,247,0.55)" }}>
                    Commercial lighting &amp; contextual staging
                  </p>
                </div>
                <p className="text-[11px] font-mono" style={{ color: "rgba(249,249,247,0.35)" }}>
                  High-fidelity advertising visual
                </p>
              </div>
            </div>

            {/* Status bar */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-8 sm:px-12 py-5"
              style={{ borderTop: "1px solid rgba(118,225,205,0.12)" }}
            >
              <span className="text-[12px] font-mono" style={{ color: "rgba(249,249,247,0.35)" }}>
                Examples being prepared
              </span>
              <span className="text-[12px] font-mono" style={{ color: "var(--teal)" }}>
                No fake photo samples shown
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
