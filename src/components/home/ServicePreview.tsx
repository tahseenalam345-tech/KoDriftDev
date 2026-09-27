"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { services } from "@/content/services";

export function ServicePreview() {
  const webDev = services.find((s) => s.slug === "web-development")!;
  const softwareDev = services.find((s) => s.slug === "software-development")!;
  const appDev = services.find((s) => s.slug === "app-development")!;
  const aiPhoto = services.find((s) => s.slug === "ai-product-photography")!;
  const aiAutomation = services.find((s) => s.slug === "ai-automation")!;

  const smallServices = [
    { ...appDev, num: "03", shape: "phone" },
    { ...aiPhoto, num: "04", shape: "aperture" },
    { ...aiAutomation, num: "05", shape: "torus" },
  ];

  const handleMorph = (shape: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kd-morph-shape", { detail: shape })
      );
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-transparent"
      aria-labelledby="services-heading"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[340px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.20) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-20 space-y-12 sm:space-y-14">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-4">
          <span className="metadata-text" style={{ color: "var(--brand-blue)" }}>
            What we build
          </span>
          <h2 id="services-heading" className="section-headline">
            Useful digital products.{" "}
            <span style={{ color: "var(--text-muted)" }}>
              Made around your business.
            </span>
          </h2>
          <p
            className="text-base sm:text-[17px] leading-relaxed max-w-[560px]"
            style={{ color: "var(--text-muted)" }}
          >
            Some projects start with a website. Others need an app, a better
            ordering flow or a system behind the scenes. We help with both.
          </p>
        </div>

        {/* Row 1: Two Large Featured Cards (Web & Software) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 01: Web Development */}
          <Link
            href={`/services/${webDev.slug}`}
            onMouseEnter={() => handleMorph("cube")}
            className="group relative block p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] dark:bg-slate-950/30 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(0,110,245,0.12)] hover:shadow-[0_30px_70px_-10px_rgba(0,110,245,0.25)] hover:border-[#2C81FA]/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            style={{
              boxShadow:
                "0 20px 50px -10px rgba(0, 110, 245, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            }}
          >
            <div className="flex items-baseline justify-between mb-5">
              <span
                className="font-mono text-3xl font-bold tracking-tight"
                style={{ color: "var(--teal)" }}
              >
                01
              </span>
              <span className="metadata-text" style={{ color: "var(--text-muted)" }}>
                Core Service
              </span>
            </div>
            <div className="h-px w-full mb-5 bg-white/10" aria-hidden="true" />
            <h3 className="sub-headline mb-3 text-slate-900 dark:text-white group-hover:text-[#2C81FA] transition-colors">
              {webDev.name}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
              {webDev.shortDescription}
            </p>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#006EF5] group-hover:text-[#2C81FA] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 02: Software Development */}
          <Link
            href={`/services/${softwareDev.slug}`}
            onMouseEnter={() => handleMorph("cube")}
            className="group relative block p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] dark:bg-slate-950/30 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(0,110,245,0.12)] hover:shadow-[0_30px_70px_-10px_rgba(0,110,245,0.25)] hover:border-[#2C81FA]/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            style={{
              boxShadow:
                "0 20px 50px -10px rgba(0, 110, 245, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            }}
          >
            <div className="flex items-baseline justify-between mb-5">
              <span
                className="font-mono text-3xl font-bold tracking-tight"
                style={{ color: "var(--brand-blue)" }}
              >
                02
              </span>
              <span className="metadata-text" style={{ color: "var(--text-muted)" }}>
                Core Service
              </span>
            </div>
            <div className="h-px w-full mb-5 bg-white/10" aria-hidden="true" />
            <h3 className="sub-headline mb-3 text-slate-900 dark:text-white group-hover:text-[#2C81FA] transition-colors">
              {softwareDev.name}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
              {softwareDev.shortDescription}
            </p>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#006EF5] group-hover:text-[#2C81FA] transition-colors">
              <span>Explore service</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Row 2: Three Compact Cards (App, Photo, AI) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {smallServices.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              onMouseEnter={() => handleMorph(svc.shape)}
              className="group relative block p-6 sm:p-7 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] dark:bg-slate-950/30 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(0,110,245,0.12)] hover:shadow-[0_30px_70px_-10px_rgba(0,110,245,0.25)] hover:border-[#2C81FA]/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              style={{
                boxShadow:
                  "0 20px 50px -10px rgba(0, 110, 245, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex items-baseline justify-between mb-4">
                <span
                  className="font-mono text-xl font-bold tracking-tight"
                  style={{
                    color: svc.num === "04" ? "var(--brand-blue)" : "var(--teal)",
                  }}
                >
                  {svc.num}
                </span>
                <span className="metadata-text" style={{ color: "var(--text-muted)" }}>
                  Service
                </span>
              </div>
              <div className="h-px w-full mb-4 bg-white/10" aria-hidden="true" />
              <h3 className="font-heading font-bold text-lg mb-2 leading-tight text-slate-900 dark:text-white group-hover:text-[#2C81FA] transition-colors">
                {svc.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                {svc.shortDescription}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#006EF5] group-hover:text-[#2C81FA] transition-colors">
                <span>Explore service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="flex items-center justify-end pt-2">
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#006EF5] hover:text-[#2C81FA] transition-colors"
          >
            <span>View all services & full breakdown</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
