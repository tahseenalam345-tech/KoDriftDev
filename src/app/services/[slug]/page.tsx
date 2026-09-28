import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, Layers, ChevronRight, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ChatbotDemoPlaceholder } from "@/components/home/ChatbotDemoPlaceholder";
import { AiPhotoPreview } from "@/components/home/AiPhotoPreview";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
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
    <div className="relative py-12 sm:py-20 space-y-16 sm:space-y-24 overflow-hidden bg-transparent">
      {/* ── Ambient Radiant Sky Glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[850px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(44, 129, 250, 0.22) 0%, rgba(0, 110, 245, 0.10) 45%, transparent 75%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute top-[750px] -right-20 w-[550px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* 1. Breadcrumb & Page Hero */}
      <section className="relative z-10">
        <Container>
          {/* Breadcrumb Capsule */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[rgba(0,110,245,0.18)] shadow-xs text-xs font-medium text-[#3A4B6E]">
            <Link href="/services" className="hover:text-[#006EF5] font-semibold transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#006EF5] font-extrabold truncate max-w-[200px] sm:max-w-none">
              {service.name}
            </span>
          </nav>

          <div className="max-w-[760px] space-y-5">
            {/* Category Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[rgba(0,110,245,0.25)] text-xs font-extrabold uppercase tracking-wider text-[#0047BA] shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006EF5]" />
              <span>{service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight leading-[1.1]">
              {service.name}
            </h1>

            <p className="text-lg sm:text-xl text-[#0B132B] font-semibold leading-snug font-['Manrope']">
              {service.shortDescription}
            </p>

            <p className="text-sm sm:text-base text-[#2C3E5A] font-medium leading-relaxed max-w-[660px]">
              {service.pageIntro}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3.5">
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
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-xs font-extrabold text-[#2C3E5A] hover:text-[#006EF5] border border-[rgba(0,110,245,0.20)] shadow-xs transition-all duration-200"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                <span>Quick WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Specific Interactive Demo Placeholders */}
      {slug === "ai-automation" && (
        <section className="relative z-10">
          <Container>
            <ChatbotDemoPlaceholder />
          </Container>
        </section>
      )}

      {slug === "ai-product-photography" && (
        <section className="relative z-10">
          <Container>
            <AiPhotoPreview />
          </Container>
        </section>
      )}

      {/* 2. Key Outcomes & Typical Deliverables in Crystal Cards */}
      <section className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Outcomes Card */}
            <div
              className="rounded-[20px] sm:rounded-[28px] border-[1.5px] border-[rgba(0,110,245,0.20)] p-4 sm:p-9 backdrop-blur-xl shadow-[0_12px_36px_-10px_rgba(0,110,245,0.10),inset_0_1.5px_2px_rgba(255,255,255,1)] space-y-3.5 sm:space-y-6"
              style={{
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 247, 255, 0.92) 55%, rgba(228, 242, 255, 0.86) 100%)",
              }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 pb-2.5 sm:pb-3 border-b border-[rgba(0,110,245,0.15)]">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 border border-[rgba(0,110,245,0.25)] text-[#006EF5] shadow-xs">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-2xl font-extrabold text-[#0B132B] font-['Manrope']">
                    Key Outcomes
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">What your business gains</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-base text-[#2C3E5A] font-medium">
                {service.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#006EF5]/15 text-[#006EF5] mt-0.5">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Card */}
            <div
              className="rounded-[20px] sm:rounded-[28px] border-[1.5px] border-[rgba(99,102,241,0.20)] p-4 sm:p-9 backdrop-blur-xl shadow-[0_12px_36px_-10px_rgba(99,102,241,0.10),inset_0_1.5px_2px_rgba(255,255,255,1)] space-y-3.5 sm:space-y-6"
              style={{
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 243, 255, 0.92) 55%, rgba(238, 235, 254, 0.86) 100%)",
              }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 pb-2.5 sm:pb-3 border-b border-[rgba(99,102,241,0.15)]">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 border border-[rgba(99,102,241,0.25)] text-[#6366F1] shadow-xs">
                  <Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-2xl font-extrabold text-[#0B132B] font-['Manrope']">
                    Typical Deliverables
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Tangible production assets</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-base text-[#2C3E5A] font-medium">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#6366F1]/15 text-[#6366F1] mt-0.5">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.5]" />
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
      <section id="related-work" className="relative z-10">
        <Container className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[rgba(0,110,245,0.18)]">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#006EF5]">
                Verified Case Studies
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold font-['Manrope'] text-[#0B132B] tracking-tight mt-1">
                Related Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#3A4B6E] font-medium mt-1">
                Real operational systems engineered with {service.name}.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#006EF5] hover:text-[#004AC7] transition-colors"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {relatedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-[20px] sm:rounded-[28px] border border-[rgba(0,110,245,0.20)] bg-white/80 backdrop-blur-xl p-5 sm:p-8 text-center max-w-xl mx-auto shadow-sm space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-[#3A4B6E] font-medium">
                We have built proprietary systems in this category under client NDA. Contact us directly to review relevant private portfolio demonstrations.
              </p>
              <div>
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Request Portfolio Demos
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Process Note */}
      {service.processNote && (
        <section className="relative z-10">
          <Container>
            <div className="rounded-[20px] sm:rounded-[28px] border border-[rgba(0,110,245,0.20)] bg-gradient-to-r from-white/90 via-white/80 to-[rgba(240,247,255,0.70)] backdrop-blur-xl p-4 sm:p-8 max-w-4xl shadow-sm">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#006EF5]">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Our Engineering Methodology</span>
              </div>
              <p className="mt-2 text-sm sm:text-lg text-[#0B132B] leading-relaxed font-semibold font-['Manrope']">
                {service.processNote}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 5. Final Contact CTA Island */}
      <section className="relative z-10">
        <Container>
          <div
            className="relative rounded-[20px] sm:rounded-[36px] border border-[rgba(0,110,245,0.30)] p-5 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-[0_24px_60px_-15px_rgba(0,36,150,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.2)] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #051438 0%, #082154 50%, #0B3378 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#006EF5]/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#2C81FA]/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-xl space-y-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-['Manrope'] text-white tracking-tight leading-tight">
                Have a project in mind for {service.name}?
              </h2>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-medium">
                Tell us about your requirements, current workflow bottlenecks, or target delivery timeline. We will provide a clean, practical engineering proposal.
              </p>
              <div className="mt-6 flex flex-wrap gap-3.5 justify-center">
                <Button href="/contact" variant="primary" size="md" showArrow className="shadow-[0_8px_25px_rgba(0,110,245,0.4)]">
                  Start a project
                </Button>
                <Button href="/services" variant="secondary" size="md">
                  See all services
                </Button>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105"
                >
                  <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
