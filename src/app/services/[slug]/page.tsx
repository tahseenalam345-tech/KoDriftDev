import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, Layers, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ChatbotDemoPlaceholder } from "@/components/home/ChatbotDemoPlaceholder";
import { AiPhotoPreview } from "@/components/home/AiPhotoPreview";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { constructMetadata } from "@/lib/metadata";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: service.metaTitle || service.name,
    description: service.metaDescription || service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related projects that list this service
  const relatedProjects = projects.filter(
    (p) => p.servicesProvided?.includes(service.name)
  );

  return (
    <div className="py-16 sm:py-24 space-y-16 sm:space-y-24 bg-[#F4F1EA]">
      {/* 1. Breadcrumb & Page Hero */}
      <section>
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-muted">
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3 text-border" />
            <span className="text-primary font-semibold truncate">{service.name}</span>
          </nav>

          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
              {service.category}
            </span>

            <h1 className="hero-headline">
              {service.name}
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium leading-relaxed font-heading">
              {service.shortDescription}
            </p>
            <p className="text-base text-muted leading-relaxed max-w-[620px]">
              {service.pageIntro}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="md" showArrow>
                {service.ctaText || "Start a project"}
              </Button>
              <Button
                href={relatedProjects.length > 0 ? "#related-work" : "/work"}
                variant="secondary"
                size="md"
              >
                See related work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Specific Interactive Demo Placeholders: Chatbot for AI Automation / Gallery for AI Photo */}
      {slug === "ai-automation" && (
        <section>
          <Container>
            <ChatbotDemoPlaceholder />
          </Container>
        </section>
      )}

      {slug === "ai-product-photography" && (
        <section>
          <Container>
            <AiPhotoPreview />
          </Container>
        </section>
      )}

      {/* 2. Key Outcomes & Typical Deliverables */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Outcomes */}
            <div className="rounded-[6px] border border-border bg-surface p-7 sm:p-9 shadow-2xs space-y-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-border">
                <Sparkles className="h-4 w-4 text-accent" />
                <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading">
                  Key Outcomes
                </h2>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-text font-body">
                {service.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="rounded-[6px] border border-border bg-surface p-7 sm:p-9 shadow-2xs space-y-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-border">
                <Layers className="h-4 w-4 text-primary" />
                <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading">
                  Typical Deliverables
                </h2>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-text font-body">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Relevant Projects Section */}
      <section id="related-work">
        <Container className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <span className="metadata-text text-accent">
                Case study examples
              </span>
              <h2 className="section-headline mt-1">
                Related projects
              </h2>
              <p className="text-sm text-muted mt-1">
                Real work built with {service.name}.
              </p>
            </div>
            <Link
              href="/work"
              className="text-link-underline text-xs"
            >
              <span>See all work</span>
            </Link>
          </div>

          {relatedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-[6px] border border-border bg-surface p-8 text-center max-w-xl mx-auto shadow-2xs">
              <p className="text-sm text-muted">
                No verified public case studies are currently displayed for this specific service.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Start a project
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Process Note */}
      {service.processNote && (
        <section>
          <Container>
            <div className="rounded-[6px] bg-[#FAF8F5] border border-border p-6 sm:p-8 max-w-4xl shadow-2xs">
              <span className="metadata-text text-accent">
                How we approach it
              </span>
              <p className="mt-2 text-base text-primary leading-relaxed font-medium">
                {service.processNote}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 5. Final Contact CTA */}
      <section>
        <Container>
          <div className="rounded-[6px] border border-border bg-surface p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xs">
            <h2 className="section-headline">
              Have a project in mind for {service.name}?
            </h2>
            <p className="mt-3 text-base text-muted max-w-xl">
              Tell us about your requirements, current workflow, or target deadline. We&apos;ll
              provide a clear, practical recommendation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="md" showArrow>
                Start a project
              </Button>
              <Button href="/services" variant="secondary" size="md">
                See all services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
