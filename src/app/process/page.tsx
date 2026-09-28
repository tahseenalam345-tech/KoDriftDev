import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  Code2,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { processSteps } from "@/content/process";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "How We Work",
  description:
    "No mystery. No unnecessary meetings. Just a clear process and regular communication.",
  path: "/process",
});

const STEP_ICONS = [Compass, Layers, Sparkles, Code2, Rocket];
const STEP_TAGS = [
  "Discovery & Goals",
  "Scope & Roadmap",
  "UX & Visual Design",
  "Engineering & QA",
  "Launch & Handover",
];

export default function ProcessPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* ── Page Hero ── */}
      <section className="relative px-2 sm:px-4 lg:px-8 xl:px-10">
        <div className="relative mx-auto max-w-[1520px] rounded-[24px] sm:rounded-[40px] pt-8 sm:pt-14 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden border border-[rgba(0,110,245,0.18)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.08),inset_0_2px_4px_rgba(255,255,255,1)]"
          style={{
            background: "linear-gradient(175deg, #EEF4FB 0%, #E4ECF8 45%, #F0F5FC 100%)",
          }}
        >
          {/* Decorative Dot Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(rgba(0, 110, 245, 0.14) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute -top-24 -left-16 w-[500px] h-[360px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 110, 245, 0.16) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(0,110,245,0.32)] shadow-[0_4px_16px_rgba(0,110,245,0.12),inset_0_1px_1px_rgba(255,255,255,1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006EF5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006EF5]" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#001C5B] via-[#003FC5] to-[#006EF5] bg-clip-text text-transparent">
                How We Work
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              <span className="text-[#0B132B]">How a project moves from</span>{" "}
              <span className="bg-gradient-to-r from-[#002D8B] via-[#006EF5] to-[#2C81FA] bg-clip-text text-transparent">
                idea to launch.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-[#3A4B6E] font-medium leading-relaxed max-w-[640px]">
              No mystery. No unnecessary meetings. Just a clear roadmap, regular updates, and high-velocity engineering.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 Detailed Editorial Process Cards ── */}
      <section className="px-2 sm:px-4 lg:px-8 xl:px-10">
        <Container className="max-w-5xl space-y-5">
          <div className="space-y-4">
            {processSteps.map((step, idx) => {
              const Icon = STEP_ICONS[idx] || Compass;
              const tag = STEP_TAGS[idx] || "Sprint";
              const isHighlight = step.number === 3;

              return (
                <div
                  key={step.title}
                  className={`group rounded-[20px] sm:rounded-[26px] p-6 sm:p-8 flex flex-col md:flex-row md:items-start gap-5 sm:gap-8 transition-all duration-300 ease-out hover:-translate-y-1 ${
                    isHighlight
                      ? "border-[1.5px] border-[#2C81FA]/50 shadow-[0_16px_40px_-10px_rgba(0,110,245,0.25)]"
                      : "border-[1.5px] border-[rgba(0,110,245,0.18)] shadow-[0_8px_24px_-8px_rgba(0,110,245,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)]"
                  }`}
                  style={{
                    background: isHighlight
                      ? "linear-gradient(155deg, #091326 0%, #0F2044 55%, #152E5E 100%)"
                      : "linear-gradient(150deg, rgba(255, 255, 255, 0.96) 0%, rgba(242, 248, 255, 0.90) 100%)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Left Number & Icon */}
                  <div className="shrink-0 flex items-center md:flex-col md:items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${
                        isHighlight
                          ? "bg-white/10 text-[#60A5FA] border border-[#2C81FA]/40"
                          : "bg-white/90 text-[#006EF5] border border-[rgba(0,110,245,0.20)]"
                      }`}
                    >
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    <span
                      className={`font-mono text-2xl font-extrabold ${
                        isHighlight
                          ? "text-[#60A5FA]"
                          : "bg-gradient-to-br from-[#003FC5] to-[#006EF5] bg-clip-text text-transparent"
                      }`}
                    >
                      0{step.number}
                    </span>
                  </div>

                  {/* Right Content */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                          isHighlight
                            ? "bg-white/10 text-white/80 border border-white/15"
                            : "bg-[rgba(0,110,245,0.08)] text-[#006EF5] border border-[rgba(0,110,245,0.18)]"
                        }`}
                      >
                        {tag}
                      </span>
                      {isHighlight && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-[#2C81FA]/20 text-[#60A5FA] border border-[#2C81FA]/40">
                          Core Milestone
                        </span>
                      )}
                    </div>

                    <h2
                      className={`text-xl sm:text-2xl font-extrabold font-heading tracking-tight ${
                        isHighlight ? "text-white" : "text-[#0B132B]"
                      }`}
                    >
                      {step.title}
                    </h2>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isHighlight ? "text-white/80" : "text-[#3A4B6E]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── End Project Callout ── */}
      <section className="px-2 sm:px-4 lg:px-8 xl:px-10">
        <Container className="max-w-4xl">
          <div
            className="rounded-[24px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 text-center flex flex-col items-center border border-[rgba(0,110,245,0.22)] shadow-[0_20px_50px_-14px_rgba(0,50,150,0.12),inset_0_2px_4px_rgba(255,255,255,1)]"
            style={{
              background: "linear-gradient(175deg, #EEF4FB 0%, #E2EDFC 100%)",
            }}
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Ready to turn an idea into a working system?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3A4B6E] max-w-lg font-medium leading-relaxed">
              We start with a straightforward discussion about what you want to achieve and build a clear path to get there.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#003FC5] to-[#006EF5] hover:from-[#0035A8] hover:to-[#005ACF] text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,110,245,0.30)] transition-all hover:scale-[1.02]"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 hover:bg-white text-sm font-bold text-[#006EF5] hover:text-[#004AC7] border border-[rgba(0,110,245,0.25)] shadow-xs transition-all"
              >
                <span>View our work</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
