import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { services } from "@/content/services";

export function ServicePreview() {
  const webDev = services.find((s) => s.slug === "web-development")!;
  const softwareDev = services.find((s) => s.slug === "software-development")!;
  const appDev = services.find((s) => s.slug === "app-development")!;
  const aiAutomation = services.find((s) => s.slug === "ai-automation")!;
  const aiPhoto = services.find((s) => s.slug === "ai-product-photography")!;

  const small = [appDev, aiPhoto, aiAutomation];

  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden kd-services-section"
      aria-labelledby="services-heading"
    >
      {/* CSS-based background managed via inline style */}
      <style>{`
        .kd-services-section {
          background: var(--bg-soft);
          border-top: 1px solid var(--line);
        }
        .kd-service-card-large {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 16px;
          box-shadow: var(--shadow-soft), var(--shadow-inset);
          transition: transform 250ms cubic-bezier(0.22,1,0.36,1), box-shadow 250ms cubic-bezier(0.22,1,0.36,1);
        }
        .kd-service-card-large:hover {
          transform: rotate(0deg) translateY(-4px) !important;
          box-shadow: var(--shadow-float), var(--shadow-inset);
        }
        .kd-service-card-large-teal { transform: rotate(-1deg); }
        .kd-service-card-large-coral { transform: rotate(1deg); }
        .kd-service-card-small {
          background: rgba(255,255,255,0.46);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.72);
          border-radius: 16px;
          box-shadow: var(--shadow-glass);
          transition: transform 250ms cubic-bezier(0.22,1,0.36,1);
        }
        .kd-service-card-small:hover {
          transform: rotate(0deg) translateY(-3px) !important;
        }
        .kd-service-card-small-a { transform: rotate(-1.5deg); }
        .kd-service-card-small-b { transform: rotate(1.5deg); }
        .kd-service-card-small-c { transform: rotate(-1deg); }
        .kd-arrow-right { transition: transform 180ms ease; }
        .kd-service-card-large:hover .kd-arrow-right,
        .kd-service-card-small:hover .kd-arrow-right { transform: translateX(4px); }
      `}</style>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[340px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.28) 0%, rgba(0, 110, 245, 0.16) 45%, rgba(0, 63, 197, 0.06) 75%, transparent 100%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-14">
        {/* Section heading */}
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

        {/* Large two-panel row: Web + Software */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ServiceLargeCard
            num="01"
            name={webDev.name}
            desc={webDev.shortDescription}
            slug={webDev.slug}
            rotateClass="kd-service-card-large-teal"
            numColor="var(--teal)"
          />
          <ServiceLargeCard
            num="02"
            name={softwareDev.name}
            desc={softwareDev.shortDescription}
            slug={softwareDev.slug}
            rotateClass="kd-service-card-large-coral"
            numColor="var(--brand-blue)"
          />
        </div>

        {/* Smaller three-card row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {small.map((svc, i) => {
            const rotateClasses = ["kd-service-card-small-a", "kd-service-card-small-b", "kd-service-card-small-c"];
            return (
              <ServiceSmallCard
                key={svc.slug}
                num={`0${i + 3}`}
                name={svc.name}
                desc={svc.shortDescription}
                slug={svc.slug}
                rotateClass={rotateClasses[i]}
              />
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="flex items-center justify-end pt-2">
          <Link href="/services" className="text-link-underline text-sm">
            <span>View all services</span>
            <ArrowRight className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ServiceLargeCard({
  num, name, desc, slug, rotateClass, numColor,
}: {
  num: string; name: string; desc: string; slug: string; rotateClass: string; numColor: string;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className={`group block p-7 sm:p-9 kd-service-card-large ${rotateClass}`}
    >
      <div className="flex items-baseline justify-between mb-5">
        <span className="font-mono text-3xl font-bold" style={{ color: numColor, letterSpacing: "-0.04em" }}>{num}</span>
        <span className="metadata-text" style={{ color: "var(--text-muted)" }}>Service</span>
      </div>
      <div className="h-px w-full mb-5" style={{ background: "var(--line)" }} aria-hidden="true" />
      <h3 className="sub-headline mb-3" style={{ color: "var(--ink)" }}>{name}</h3>
      <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
      <div className="mt-7 flex items-center gap-1.5">
        <span className="text-sm font-bold" style={{ color: "var(--ink)" }}>See service</span>
        <ArrowRight className="kd-arrow-right h-4 w-4" style={{ color: numColor }} aria-hidden="true" />
      </div>
    </Link>
  );
}

function ServiceSmallCard({
  num, name, desc, slug, rotateClass,
}: {
  num: string; name: string; desc: string; slug: string; rotateClass: string;
}) {
  return (
    <Link href={`/services/${slug}`} className={`group block p-6 kd-service-card-small ${rotateClass}`}>
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-mono text-xl font-bold" style={{ color: "var(--teal)", letterSpacing: "-0.03em" }}>{num}</span>
      </div>
      <div className="h-px w-full mb-4" style={{ background: "var(--line)" }} aria-hidden="true" />
      <h3 className="font-heading font-bold text-lg mb-2 leading-tight" style={{ color: "var(--ink)", letterSpacing: "-0.025em" }}>{name}</h3>
      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
      <div className="mt-5 flex items-center gap-1">
        <span className="text-xs font-bold" style={{ color: "var(--ink)" }}>See service</span>
        <ArrowRight className="kd-arrow-right h-3.5 w-3.5" style={{ color: "var(--teal)" }} aria-hidden="true" />
      </div>
    </Link>
  );
}
