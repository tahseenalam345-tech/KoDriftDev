import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { serviceCategories, services } from "@/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "Websites, apps, software, visual content and practical support for the parts of your business that need to work better.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20 sm:space-y-28 bg-transparent">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-[#006EF5]">
              What we do
            </span>
            <h1 className="hero-headline">
              What can we help you build?
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
              Websites, apps, software, visual content and practical support for the parts
              of your business that need to work better.
            </p>
          </div>
        </Container>
      </section>

      {/* Main 2-Column Section: 60% Left Cards / 40% Right Sticky 3D Morph Stage */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-8 items-start">
          {/* LEFT COLUMN: Categories & Frosted Glass Service Cards */}
          <div className="space-y-16 sm:space-y-24">
            {serviceCategories.map((category) => {
              const categoryServices = services.filter(
                (s) => s.category.toLowerCase() === category.name.toLowerCase()
              );

              return (
                <section key={category.name} className="space-y-6">
                  {/* Category Header */}
                  <div className="pb-4 border-b border-border flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="space-y-1 max-w-xl">
                      <h2 className="section-headline text-2xl sm:text-3xl">
                        {category.name}
                      </h2>
                      <p className="text-sm text-muted">
                        {category.description}
                      </p>
                    </div>
                    <span className="metadata-text text-muted shrink-0">
                      {categoryServices.length}{" "}
                      {categoryServices.length === 1 ? "Service" : "Services"}
                    </span>
                  </div>

                  {/* Frosted Glass Cards */}
                  <div className="space-y-5">
                    {categoryServices.map((service) => (
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
                </section>
              );
            })}

            {/* Bottom Consultation Block */}
            <div className="rounded-[28px] border border-white/10 bg-slate-900/40 p-8 sm:p-12 text-center flex flex-col items-center shadow-xl backdrop-blur-2xl">
              <div className="max-w-[560px] space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-white">
                  Not sure which service you need?
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tell us what is slowing your business down or what you want to improve.
                  We will recommend the most practical starting point.
                </p>
                <div className="pt-4">
                  <Button href="/contact" variant="primary" size="md" showArrow>
                    Start a project
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Ambient 3D Morph Area */}
          <div className="hidden lg:flex sticky top-36 flex-col items-center justify-center min-h-[500px] pointer-events-none select-none">
            {/* Ambient Background Glow behind 3D Morph */}
            <div
              className="absolute w-[440px] h-[440px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(44, 129, 250, 0.22) 0%, rgba(0, 110, 245, 0.12) 42%, rgba(0, 63, 197, 0.04) 75%, transparent 100%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
