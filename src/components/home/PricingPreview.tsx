import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { pricingPackages } from "@/content/pricing";

export function PricingPreview() {
  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden kd-pricing-section"
      aria-labelledby="pricing-heading"
    >
      <style>{`
        .kd-pricing-section { background: var(--bg-soft); border-top: 1px solid var(--line); }
        .kd-pricing-card {
          border-radius: 16px;
          transition: transform 250ms cubic-bezier(0.22,1,0.36,1), box-shadow 250ms cubic-bezier(0.22,1,0.36,1);
        }
        .kd-pricing-card-starter {
          background: rgba(255,255,255,0.42);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: var(--shadow-glass);
          transform: rotate(-1.5deg);
        }
        .kd-pricing-card-growth {
          background: var(--surface-raised, #FEFEFE);
          border: 1.5px solid var(--teal);
          box-shadow: var(--shadow-float);
          transform: rotate(0deg);
        }
        .kd-pricing-card-scale {
          background: var(--ink);
          border: 1px solid var(--ink-strong);
          box-shadow: var(--shadow-float);
          transform: rotate(1.5deg);
        }
        .kd-pricing-card:hover { transform: rotate(0deg) translateY(-4px) !important; }
      `}</style>

      {/* Dual ambient glows */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[320px] rounded-full"
        style={{ background: "var(--blue-light)", filter: "blur(130px)", opacity: 0.16 }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[300px] rounded-full"
        style={{ background: "var(--lavender-light)", filter: "blur(120px)", opacity: 0.14 }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="metadata-text" style={{ color: "var(--brand-blue)" }}>Flexible project plans</span>
            <h2 id="pricing-heading" className="section-headline">Start with what makes sense.</h2>
            <p className="text-base sm:text-[17px] leading-relaxed max-w-[560px]" style={{ color: "var(--text-muted)" }}>
              You do not need to fit into a fixed package. Use these as starting points, then we tailor the work around you.
            </p>
          </div>
          <Link href="/pricing" className="text-link-underline text-sm shrink-0">
            <span>View pricing guide</span>
            <ArrowRight className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Three staggered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricingPackages.map((pkg) => {
            const isGrowth = pkg.name === "Growth";
            const isScale = pkg.name === "Scale";
            const cardClass = isScale
              ? "kd-pricing-card kd-pricing-card-scale"
              : isGrowth
              ? "kd-pricing-card kd-pricing-card-growth"
              : "kd-pricing-card kd-pricing-card-starter";

            return (
              <div key={pkg.name} className={`relative flex flex-col ${cardClass}`}>
                {/* Per-card glow */}
                {isGrowth && (
                  <div
                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full"
                    style={{ background: "var(--teal-bright)", filter: "blur(40px)", opacity: 0.25 }}
                    aria-hidden="true"
                  />
                )}
                {isScale && (
                  <div
                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full"
                    style={{ background: "var(--lavender-light)", filter: "blur(40px)", opacity: 0.20 }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 p-7 sm:p-8 flex flex-col flex-1 gap-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className="font-heading font-bold text-2xl"
                        style={{ color: isScale ? "rgba(249,249,247,0.95)" : "var(--ink)", letterSpacing: "-0.04em" }}
                      >
                        {pkg.name}
                      </h3>
                      {isGrowth && (
                        <span
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold"
                          style={{ background: "rgba(66,191,168,0.15)", border: "1px solid rgba(66,191,168,0.35)", color: "var(--teal-dim)" }}
                        >
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="h-px w-full mb-4" style={{ background: isScale ? "rgba(255,255,255,0.10)" : "var(--line)" }} />
                    <p className="text-sm leading-relaxed" style={{ color: isScale ? "rgba(249,249,247,0.55)" : "var(--text-muted)" }}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Includes */}
                  <div className="pt-4" style={{ borderTop: isScale ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--line)" }}>
                    <span className="metadata-text block mb-3" style={{ color: isScale ? "rgba(249,249,247,0.35)" : "var(--text-muted)" }}>
                      Includes
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "var(--teal)" }} aria-hidden="true" />
                          <span style={{ color: isScale ? "rgba(249,249,247,0.75)" : "var(--text)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div
                    className="mt-auto pt-6"
                    style={{ borderTop: isScale ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--line)" }}
                  >
                    <p className="text-xs font-mono mb-4" style={{ color: isScale ? "rgba(249,249,247,0.35)" : "var(--text-muted)" }}>
                      {pkg.note}
                    </p>
                    <Button
                      href="/contact"
                      variant={isGrowth ? "primary" : "secondary"}
                      size="md"
                      className={`w-full text-center ${isScale ? "border-white/30 text-white hover:bg-white hover:text-ink" : ""}`}
                    >
                      {pkg.ctaLabel}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote CTA */}
        <div className="text-center pt-2">
          <Link href="/contact" className="text-link-underline text-sm">
            <span>Get a custom quote</span>
            <ArrowRight className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
