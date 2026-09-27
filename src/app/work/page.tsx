import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/work/ProjectCard";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { projects } from "@/content/projects";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Work & Case Studies",
  description:
    "Every project here was made to help a business sell, organize, book, manage or communicate more clearly.",
  path: "/work",
});

export default function WorkPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const standardProjects = projects.filter(
    (p) => !p.featured && !p.status?.toLowerCase().includes("coming soon")
  );
  const inProgressProjects = projects.filter((p) =>
    p.status?.toLowerCase().includes("coming soon")
  );

  return (
    <div className="py-16 sm:py-24 space-y-20 sm:space-y-28 bg-[#F4F1EA]">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
              Portfolio
            </span>
            <h1 className="hero-headline">
              Work with a job to do.
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
              Every project here was made to help a business sell, organize, book, manage
              or communicate more clearly.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Projects: Large Editorial Portfolio Blocks */}
      <section>
        <Container className="space-y-12">
          <div className="border-b border-border pb-4 max-w-[720px]">
            <h2 className="section-headline">
              Featured work
            </h2>
            <p className="text-sm sm:text-base text-muted mt-1">
              Platforms and systems built around real business operations.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={project.slug}
                  className="rounded-[6px] border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-2xs"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Media Column */}
                    <div className={`lg:col-span-7 ${isEven ? "order-1 lg:order-2" : ""}`}>
                      <PlaceholderMedia
                        src={project.imagePaths?.[0]}
                        alt={`${project.title} platform overview`}
                        label={`${project.title} — Main Showcase`}
                        category={project.category}
                        contentType="Production Deployment"
                        sublabel="Case study preview"
                        aspectRatio="16/9"
                        priority={idx === 0}
                        className="w-full shadow-2xs"
                      />
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-5 flex flex-col justify-between space-y-5 ${isEven ? "order-2 lg:order-1" : ""}`}>
                      <div className="space-y-3">
                        <span className="metadata-text text-muted">
                          {project.category} · {project.year}
                        </span>
                        <h3 className="sub-headline">
                          <Link href={`/work/${project.slug}`} className="hover:text-accent transition-colors duration-[180ms]">
                            {project.title}
                          </Link>
                        </h3>
                        <p className="text-sm sm:text-base text-muted leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="text-xs text-muted font-mono pt-3 border-t border-border">
                        {project.techStack}
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-5">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors"
                        >
                          <span>View case study</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-[3px]" />
                        </Link>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-primary transition-colors"
                          >
                            <span>Visit live site</span>
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Additional Projects: Responsive 2- or 3-Column Grid */}
      {standardProjects.length > 0 && (
        <section>
          <Container className="space-y-8">
            <div className="border-b border-border pb-4 max-w-[720px]">
              <h2 className="section-headline">
                More projects
              </h2>
              <p className="text-sm sm:text-base text-muted mt-1">
                Booking portals, clinic systems, and developer presentation sites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {standardProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* In-Progress Prototypes */}
      <section className="pt-4">
        <Container className="space-y-8">
          <div className="border-b border-border pb-4 max-w-[720px]">
            <h2 className="section-headline">
              In progress
            </h2>
            <p className="text-sm sm:text-base text-muted mt-1">
              Mobile application concepts currently being prepared for full case study release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inProgressProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
