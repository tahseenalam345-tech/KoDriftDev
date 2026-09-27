import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { serviceCategories, services } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "Websites, apps, software, visual content and practical support for the parts of your business that need to work better.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20 sm:space-y-28 bg-[#F4F1EA]">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
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

      {/* Structured Service Lists by Category: Build / AI & Automation / Grow & Support */}
      <div className="space-y-16 sm:space-y-24">
        {serviceCategories.map((category) => {
          const categoryServices = services.filter(
            (s) => s.category.toLowerCase() === category.name.toLowerCase()
          );

          return (
            <section key={category.name}>
              <Container className="space-y-8">
                {/* Category Header */}
                <div className="pb-4 border-b border-border flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="space-y-1 max-w-xl">
                    <h2 className="section-headline">
                      {category.name}
                    </h2>
                    <p className="text-sm sm:text-base text-muted">
                      {category.description}
                    </p>
                  </div>
                  <span className="metadata-text text-muted shrink-0">
                    {categoryServices.length} {categoryServices.length === 1 ? "Service" : "Services"}
                  </span>
                </div>

                {/* Clean Row / List Layout */}
                <div className="divide-y divide-border rounded-[6px] border border-border bg-surface shadow-2xs">
                  {categoryServices.map((service, idx) => (
                    <div
                      key={service.slug}
                      className="group p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F4F1EA]/60 transition-colors duration-[180ms]"
                    >
                      <div className="space-y-2 md:max-w-xl">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-accent">
                            0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-primary font-heading group-hover:text-accent transition-colors duration-[180ms]">
                            <Link href={`/services/${service.slug}`}>
                              {service.name}
                            </Link>
                          </h3>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-accent transition-colors"
                        >
                          <span>Explore service</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-[3px]" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Bottom Consultation Block */}
      <section className="pt-4">
        <Container>
          <div className="rounded-[6px] border border-border bg-surface p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xs">
            <div className="max-w-[620px] space-y-4">
              <h2 className="section-headline">
                Not sure which service you need?
              </h2>
              <p className="text-base text-muted leading-relaxed">
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
        </Container>
      </section>
    </div>
  );
}
