import React from "react";
import { Container } from "@/components/layout/Container";

export function IntroStatement() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 border-b border-border bg-[#F4F1EA]">
      <Container>
        <div className="max-w-4xl space-y-6">
          {/* Top Divider with Marker */}
          <div className="flex items-center gap-3">
            <span className="metadata-text text-accent">What we believe</span>
            <span className="h-[1px] flex-1 bg-border" />
          </div>

          {/* Heading */}
          <h2 className="section-headline">
            Good digital work solves a real problem.
          </h2>

          {/* Body */}
          <p className="text-lg sm:text-2xl text-muted font-normal leading-relaxed max-w-2xl font-body">
            A clearer website. An easier way to take orders. Less time spent on repetitive tasks.
            We start with what is getting in the way, then build the right thing.
          </p>
        </div>
      </Container>
    </section>
  );
}
