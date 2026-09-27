import React from "react";
import { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { pricingPackages } from "@/content/pricing";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Pricing & Plans",
  description:
    "Three starting points. One custom plan. Use these as a guide. We will adjust the work, scope and quote around what you actually need.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20 sm:space-y-28 bg-[#F4F1EA]">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
              Flexible project plans
            </span>
            <h1 className="hero-headline">
              Three starting points. One custom plan.
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
              Use these as a guide. We will adjust the work, scope and quote around what you actually need.
            </p>
          </div>
        </Container>
      </section>

      {/* 3 Simple Columns with Thin Dividers */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg) => {
              const isGrowth = pkg.name === "Growth";

              return (
                <div
                  key={pkg.name}
                  className={`rounded-[6px] border ${
                    isGrowth ? "border-primary bg-surface" : "border-border bg-surface"
                  } p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-primary transition-all duration-[220ms]`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <h2 className="font-heading font-bold text-2xl text-primary">
                        {pkg.name}
                      </h2>
                      {isGrowth && (
                        <span className="metadata-text text-accent text-[10px]">
                          Good for growing businesses
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Best for */}
                    {pkg.bestFor && pkg.bestFor.length > 0 && (
                      <div className="pt-4 border-t border-border space-y-2">
                        <span className="metadata-text text-primary text-[10px]">
                          Best for:
                        </span>
                        <ul className="space-y-1.5 text-xs text-muted">
                          {pkg.bestFor.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Included Deliverables */}
                    <div className="pt-4 border-t border-border space-y-3">
                      <span className="metadata-text text-primary text-[10px]">
                        What is included:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-text">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border space-y-4">
                    <p className="text-xs text-muted font-mono">
                      {pkg.note}
                    </p>
                    <Button
                      href="/contact"
                      variant={isGrowth ? "primary" : "secondary"}
                      size="md"
                      className="w-full text-center"
                    >
                      {pkg.ctaLabel}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Need something different? Custom Scope Block */}
      <section>
        <Container>
          <div className="rounded-[6px] border border-border bg-surface p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xs">
            <div className="max-w-[620px] space-y-4">
              <h2 className="section-headline">
                Need something different?
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Most client projects combine services. Tell us what you want to achieve,
                and we will create a focused custom plan without forcing you into a rigid package.
              </p>
              <div className="pt-4">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Start a project
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
