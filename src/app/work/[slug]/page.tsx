import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ProjectMeta } from "@/components/work/ProjectMeta";
import { ServiceCard } from "@/components/services/ServiceCard";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} - Case Study`,
    description: project.summary,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isComingSoon =
    project.status?.toLowerCase().includes("coming soon") ||
    project.status?.toLowerCase().includes("in progress");

  // Related services
  const relatedServices = services.filter(
    (s) => project.servicesProvided?.includes(s.name)
  );

  return (
    <div className="py-16 sm:py-24 space-y-16 sm:space-y-24 bg-[#F4F1EA]">
      {/* 1. Breadcrumbs & Project Hero */}
      <section>
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-muted">
            <Link href="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <ChevronRight className="h-3 w-3 text-border" />
            <span className="text-primary font-semibold truncate">{project.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-border">
            <div className="max-w-[720px] space-y-4">
              <div className="flex items-center gap-2">
                <span className="metadata-text text-accent">
                  {project.category} · {project.year}
                </span>
                {isComingSoon && (
                  <span className="metadata-text text-muted bg-surface px-2 py-0.5 rounded-[4px] border border-border">
                    Case study in progress
                  </span>
                )}
              </div>

              <h1 className="hero-headline">
                {project.title}
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-[620px]">
                {project.summary}
              </p>
            </div>

            {project.liveUrl && (
              <div className="shrink-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Visit live platform</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 2. Large Cover Image */}
      <section>
        <Container>
          <div className="overflow-hidden rounded-[6px] border border-border shadow-2xs bg-surface p-2 sm:p-3">
            <PlaceholderMedia
              src={project.imagePaths?.[0]}
              alt={`${project.title} main platform overview`}
              label={`${project.title} — Main Showcase Cover`}
              category={project.category}
              contentType={isComingSoon ? "Prototype View" : "Production Platform"}
              sublabel={
                isComingSoon
                  ? "Full case study in progress"
                  : "Verified production release"
              }
              aspectRatio="16/9"
              priority={true}
              className="w-full max-h-[580px]"
            />
          </div>
        </Container>
      </section>

      {/* 3. Core Narrative: The Problem / What We Built / Key Parts / Technology */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-12">
              {/* The Problem */}
              <div className="space-y-2 sm:space-y-4">
                <span className="metadata-text text-accent">
                  The problem
                </span>
                <h2 className="section-headline">
                  The challenge
                </h2>
                <div className="rounded-2xl sm:rounded-[6px] bg-surface border border-border p-4 sm:p-8 shadow-2xs">
                  <p className="text-sm sm:text-base text-text leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* What We Built */}
              <div className="space-y-2 sm:space-y-4">
                <span className="metadata-text text-primary">
                  The solution
                </span>
                <h2 className="section-headline">
                  What we built
                </h2>
                <div className="rounded-2xl sm:rounded-[6px] bg-surface border border-border p-4 sm:p-8 shadow-2xs">
                  <p className="text-sm sm:text-base text-text leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Parts */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2 sm:space-y-4">
                  <span className="metadata-text text-muted">
                    Capabilities
                  </span>
                  <h2 className="section-headline">
                    Key parts
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-text font-body">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-[6px] border border-border bg-surface p-3 sm:p-4 shadow-2xs"
                      >
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Notes & Results */}
              <div className="space-y-2 sm:space-y-4">
                <span className="metadata-text text-muted">
                  Outcomes
                </span>
                <h2 className="section-headline">
                  Project notes
                </h2>
                <div className="rounded-2xl sm:rounded-[6px] border border-border bg-surface p-4 sm:p-8 space-y-3 sm:space-y-4 shadow-2xs">
                  <ul className="space-y-2 sm:space-y-3.5 text-xs sm:text-base text-text font-body">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  {project.testimonialReference && (
                    <div className="mt-4 pt-4 border-t border-border text-xs text-muted font-mono">
                      <span className="font-semibold text-text">Client reference: </span>
                      {project.testimonialReference}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar: Technology & Metadata */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <ProjectMeta project={project} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Screenshot Gallery */}
      {project.imagePaths.length > 1 && (
        <section>
          <Container className="space-y-6">
            <div className="border-b border-border pb-4 max-w-[720px]">
              <span className="metadata-text text-accent">
                Visual gallery
              </span>
              <h2 className="section-headline mt-1">
                Screenshots & views
              </h2>
              <p className="text-sm text-muted mt-1">
                Production interface views from the active system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.imagePaths.slice(1).map((imgPath, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-[6px] border border-border bg-surface p-2 shadow-2xs"
                >
                  <PlaceholderMedia
                    src={imgPath}
                    alt={`${project.title} interface view 0${idx + 2}`}
                    label={`${project.title} — View 0${idx + 2}`}
                    category={project.category}
                    contentType="Interface Screenshot"
                    sublabel="Production View"
                    aspectRatio="16/9"
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. Related Services */}
      {relatedServices.length > 0 && (
        <section>
          <Container className="space-y-6">
            <div className="border-b border-border pb-4 max-w-[720px]">
              <h2 className="section-headline">
                Services used in this project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  slug={service.slug}
                  category={service.category}
                  shortDescription={service.shortDescription}
                  outcomes={service.outcomes}
                  iconName={service.iconName}
                  featured={service.featured}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Bottom CTA */}
      <section>
        <Container>
          <div className="rounded-[6px] border border-border bg-surface p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xs">
            <h2 className="section-headline">
              Need a similar solution for your business?
            </h2>
            <p className="mt-3 text-base text-muted max-w-xl">
              Tell us about your requirements or what is slowing your business down.
              We will give you a practical next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="md" showArrow>
                Start a project
              </Button>
              <Button href="/work" variant="secondary" size="md">
                See all work
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
