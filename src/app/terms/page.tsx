import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: "Terms of engagement and collaboration principles for KoDriftDev.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Legal & Compliance
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted">
            Last updated: September 2026
          </p>
        </div>

        <Card variant="surface" size="lg" className="space-y-6 text-sm text-text leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-text mb-2">1. Scope of Engagement</h2>
            <p className="text-muted">
              All project work performed by KoDriftDev is governed by individual scope agreements,
              quotations, and delivery milestones confirmed prior to commencing development.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text mb-2">2. Intellectual Property</h2>
            <p className="text-muted">
              Upon final settlement of project invoices, clients receive the deliverables,
              custom code repositories, and relevant design assets specified in their agreement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text mb-2">3. Package Estimates</h2>
            <p className="text-muted">
              Package descriptions on this website represent guidance structures rather than
              rigid fixed-price contracts. Exact scopes, timelines, and deliverables are tailored
              per engagement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text mb-2">4. Contact Information</h2>
            <p className="text-muted">
              For any questions regarding these terms, reach out at kodriftdev@gmail.com.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
