import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { processSteps } from "@/content/process";

export function ProcessPreview() {
  // Step 3 = "Build" — make it most prominent (index 2, number 3)
  const buildIndex = processSteps.findIndex((s) => s.number === 3) ?? 2;

  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--line)" }}
      aria-labelledby="process-heading"
    >
      {/* Lavender glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[450px] h-[350px] rounded-full"
        style={{ background: "var(--lavender-light)", filter: "blur(130px)", opacity: 0.17 }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="metadata-text" style={{ color: "var(--brand-blue)" }}>
              How we work
            </span>
            <h2 id="process-heading" className="section-headline">
              Clear steps.{" "}
              <span style={{ color: "var(--text-muted)" }}>Good communication.</span>
            </h2>
            <p
              className="text-base sm:text-[17px] leading-relaxed max-w-[520px]"
              style={{ color: "var(--text-muted)" }}
            >
              We keep the work simple: understand the problem, plan properly, build
              carefully and stay available after launch.
            </p>
          </div>
          <Link href="/process" className="text-link-underline text-sm shrink-0">
            <span>Learn how we work</span>
            <ArrowRight className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Steps — horizontal on large, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(10%+12px)] right-[calc(10%+12px)] h-px"
            style={{ background: "var(--line)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative">
            {processSteps.map((step, idx) => {
              const isBuild = idx === buildIndex;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col rounded-xl p-5 sm:p-6 transition-all duration-[220ms]"
                  style={
                    isBuild
                      ? {
                          background: "var(--ink)",
                          border: "1px solid var(--ink-strong)",
                          boxShadow: "var(--shadow-float)",
                          color: "rgba(249,249,247,0.92)",
                          // Slightly taller on desktop
                          marginTop: "-8px",
                          paddingTop: "2rem",
                          paddingBottom: "2rem",
                        }
                      : {
                          background: "rgba(255,255,255,0.42)",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.72)",
                          boxShadow: "var(--shadow-glass)",
                        }
                  }
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-2xl font-bold"
                      style={{
                        color: isBuild ? "var(--teal-bright)" : "var(--teal)",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      0{step.number}
                    </span>
                    {isBuild && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                        style={{
                          background: "rgba(66,191,168,0.20)",
                          border: "1px solid rgba(118,225,205,0.30)",
                          color: "var(--teal-bright)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Core
                      </span>
                    )}
                  </div>

                  <div
                    className="h-px w-full mb-4"
                    style={{ background: isBuild ? "rgba(255,255,255,0.12)" : "var(--line)" }}
                    aria-hidden="true"
                  />

                  <h3
                    className="font-heading font-bold text-lg mb-2"
                    style={{
                      color: isBuild ? "rgba(249,249,247,0.95)" : "var(--ink)",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: isBuild ? "rgba(249,249,247,0.55)" : "var(--text-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
