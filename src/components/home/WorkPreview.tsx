import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { projects } from "@/content/projects";

export function WorkPreview() {
  const aurax = projects.find((p) => p.slug === "aurax-custom-oms-ecommerce")!;
  const cluckNMoo = projects.find((p) => p.slug === "cluck-n-moo-restaurant-platform")!;
  const primeEnergy = projects.find((p) => p.slug === "prime-energy-uk-profitability-system")!;
  const pharmacy = projects.find((p) => p.slug === "kodrift-pharmacy-saas")!;

  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden kd-work-section"
      aria-labelledby="work-heading"
    >
      <style>{`
        .kd-work-section {
          background: var(--surface);
          border-top: 1px solid var(--line);
        }
        .kd-work-feature {
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-float);
        }
        .kd-work-feature .kd-screenshot {
          transition: transform 300ms cubic-bezier(0.22,1,0.36,1);
        }
        .kd-work-feature:hover .kd-screenshot { transform: scale(1.012); }
        .kd-work-card {
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          background: var(--surface);
        }
        .kd-work-card .kd-screenshot {
          transition: transform 300ms cubic-bezier(0.22,1,0.36,1), rotate 300ms;
        }
        .kd-work-card:hover .kd-screenshot { transform: scale(1.015) rotate(0.3deg); }
        .kd-work-link { color: var(--ink); transition: color 180ms ease; }
        .kd-work-link:hover { color: var(--brand-blue-deep); }
        .kd-work-muted { color: var(--text-muted); transition: color 180ms ease; }
        .kd-work-muted:hover { color: var(--ink); }
        .kd-arrow-link { transition: transform 180ms ease; }
        .kd-work-link:hover .kd-arrow-link { transform: translateX(3px); }
      `}</style>

      {/* Blue/teal ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
        style={{ background: "var(--teal-bright)", filter: "blur(140px)", opacity: 0.10 }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-16 sm:space-y-20">
        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="metadata-text" style={{ color: "var(--brand-blue)" }}>Selected work</span>
            <h2 id="work-heading" className="section-headline">
              Ideas turned into{" "}
              <span style={{ color: "var(--text-muted)" }}>working products.</span>
            </h2>
            <p className="text-base sm:text-[17px] leading-relaxed max-w-[560px]" style={{ color: "var(--text-muted)" }}>
              A few examples of websites, platforms and business tools we have built.
            </p>
          </div>
          <Link href="/work" className="text-link-underline text-sm shrink-0">
            <span>See all work</span>
            <ArrowRight className="h-4 w-4 ml-1.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Feature 1: AURA-X */}
        <div className="kd-work-feature relative group">
          <div
            className="pointer-events-none absolute top-0 left-0 w-[400px] h-[300px] rounded-full"
            style={{ background: "var(--teal-bright)", filter: "blur(100px)", opacity: 0.09 }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative overflow-hidden" style={{ minHeight: "340px" }}>
              <Image
                src={aurax.imagePaths[0]}
                alt="AURA-X luxury watches e-commerce and operations platform"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-top kd-screenshot"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent 65%, rgba(249,249,247,0.85) 100%)" }}
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {["E-commerce", "OMS", "Next.js"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold"
                    style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.85)", color: "var(--ink)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-10" style={{ background: "var(--surface)" }}>
              <div className="space-y-4">
                <span className="metadata-text" style={{ color: "var(--text-muted)" }}>{aurax.category} · {aurax.year}</span>
                <h3 className="sub-headline">
                  <Link href={`/work/${aurax.slug}`} className="kd-work-link">{aurax.title}</Link>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{aurax.summary}</p>
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                <p className="text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>{aurax.techStack}</p>
                <div className="flex flex-wrap items-center gap-5">
                  <Link href={`/work/${aurax.slug}`} className="kd-work-link inline-flex items-center gap-1.5 text-sm font-bold">
                    <span>Read case study</span>
                    <ArrowRight className="kd-arrow-link h-4 w-4" aria-hidden="true" />
                  </Link>
                  {aurax.liveUrl && (
                    <a href={aurax.liveUrl} target="_blank" rel="noopener noreferrer" className="kd-work-muted inline-flex items-center gap-1 text-xs font-mono">
                      <span>Visit site</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Cluck n Moo — reversed */}
        <div className="kd-work-feature relative group" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div
            className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[280px] rounded-full"
            style={{ background: "var(--brand-blue-light)", filter: "blur(100px)", opacity: 0.08 }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-10 order-2 lg:order-1" style={{ background: "var(--surface)" }}>
              <div className="space-y-4">
                <span className="metadata-text" style={{ color: "var(--text-muted)" }}>{cluckNMoo.category} · {cluckNMoo.year}</span>
                <h3 className="sub-headline">
                  <Link href={`/work/${cluckNMoo.slug}`} className="kd-work-link">{cluckNMoo.title}</Link>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{cluckNMoo.summary}</p>
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                <p className="text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>{cluckNMoo.techStack}</p>
                <div className="flex flex-wrap items-center gap-5">
                  <Link href={`/work/${cluckNMoo.slug}`} className="kd-work-link inline-flex items-center gap-1.5 text-sm font-bold">
                    <span>Read case study</span>
                    <ArrowRight className="kd-arrow-link h-4 w-4" aria-hidden="true" />
                  </Link>
                  {cluckNMoo.liveUrl && (
                    <a href={cluckNMoo.liveUrl} target="_blank" rel="noopener noreferrer" className="kd-work-muted inline-flex items-center gap-1 text-xs font-mono">
                      <span>Visit site</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative overflow-hidden order-1 lg:order-2" style={{ minHeight: "320px" }}>
              <Image
                src={cluckNMoo.imagePaths[0]}
                alt="Cluck n Moo restaurant ordering platform interface"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-top kd-screenshot"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to left, transparent 65%, rgba(249,249,247,0.85) 100%)" }}
              />
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                {["Restaurant", "Ordering", "Operations"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold"
                    style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.85)", color: "var(--ink)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-card row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { project: primeEnergy, alt: "Prime Energy UK heat pump job management system", tags: ["Job Management", "Next.js"] },
            { project: pharmacy, alt: "KoDrift Pharmacy SaaS retail operations platform", tags: ["SaaS", "Retail Ops"] },
          ].map(({ project, alt, tags }) => (
            <div key={project.slug} className="kd-work-card group">
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={project.imagePaths[0]}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top kd-screenshot"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold"
                      style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.85)", color: "var(--ink)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <span className="metadata-text block mb-2" style={{ color: "var(--text-muted)" }}>{project.category} · {project.year}</span>
                <h4 className="font-heading font-bold text-xl mb-2" style={{ color: "var(--ink)", letterSpacing: "-0.03em" }}>
                  <Link href={`/work/${project.slug}`} className="kd-work-link">{project.title}</Link>
                </h4>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>{project.summary}</p>
                <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--line)" }}>
                  <Link href={`/work/${project.slug}`} className="kd-work-link inline-flex items-center gap-1.5 text-sm font-bold">
                    <span>View case study</span>
                    <ArrowRight className="kd-arrow-link h-4 w-4" aria-hidden="true" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kd-work-muted inline-flex items-center gap-1 text-[11px] font-mono"
                    >
                      <span>Live platform</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
