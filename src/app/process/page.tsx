import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/content/process";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "How We Work",
  description:
    "No mystery. No unnecessary meetings. Just a clear process and regular communication.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20 sm:space-y-28 bg-[#F4F1EA]">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
              How we work
            </span>
            <h1 className="hero-headline">
              How a project moves from idea to launch.
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
              No mystery. No unnecessary meetings. Just a clear process and regular communication.
            </p>
          </div>
        </Container>
      </section>

      {/* 5 Clear Process Steps: Easy to Scan Editorial Flow */}
      <section>
        <Container className="max-w-4xl space-y-6">
          <div className="divide-y divide-border rounded-[6px] border border-border bg-surface shadow-2xs">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="p-8 sm:p-10 flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 hover:bg-[#F4F1EA]/50 transition-colors duration-[180ms]"
              >
                {/* Step Number */}
                <div className="shrink-0 flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">
                    0{step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="space-y-2 flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                    {step.title}
                  </h2>
                  <p className="text-base text-muted leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* End CTA */}
      <section>
        <Container>
          <div className="rounded-[6px] border border-border bg-surface p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xs">
            <h2 className="section-headline">
              Ready to turn an idea into a working system?
            </h2>
            <p className="mt-3 text-base text-muted max-w-xl">
              We start with a straightforward discussion about what you want to achieve and
              build a clear path to get there.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" size="md" showArrow>
                Start a project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
