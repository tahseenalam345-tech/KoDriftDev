import React from "react";
import { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Button } from "@/components/ui/Button";
import { teamMembers } from "@/content/team";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "We are a Pakistan-based team of developers, outreach specialists and client-facing creators. You speak directly with the people planning and building your project.",
  path: "/about",
});

export default function AboutPage() {
  const points = [
    "Talk directly to the people working on your project.",
    "Get clear updates without unnecessary layers.",
    "Start small, then add more as your business needs it.",
    "Work with people who care about getting the details right.",
  ];

  return (
    <div className="py-16 sm:py-24 space-y-20 sm:space-y-28 bg-[#F4F1EA]">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
              About KoDriftDev
            </span>
            <h1 className="hero-headline">
              A small team that stays close to the work.
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
              We are a Pakistan-based team of developers, outreach specialists and client-facing
              creators. You speak directly with the people planning and building your project.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section>
        <Container className="space-y-10">
          <div className="border-b border-border pb-5 max-w-[720px]">
            <h2 className="section-headline">
              The people behind KoDriftDev.
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2">
              Every project is handled directly by experienced builders and communicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Small Team. Direct Work Section */}
      <section>
        <Container>
          <div className="rounded-[6px] border border-border bg-surface p-8 sm:p-12 lg:p-16 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="metadata-text text-accent">
                  Why work with us
                </span>
                <h2 className="section-headline">
                  Small team. Direct work.
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed max-w-[500px]">
                  When you work with KoDriftDev, you don&apos;t navigate account managers or
                  corporate layers. You collaborate directly with the people planning and
                  building your project.
                </p>
                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="md" showArrow>
                    Start a project
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3.5">
                {points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-[6px] border border-border bg-[#F4F1EA] p-4 sm:p-5"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-text font-body">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
