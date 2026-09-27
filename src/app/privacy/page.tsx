import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and client data handling practices for KoDriftDev.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container className="max-w-4xl space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Legal & Compliance
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            Last updated: September 2026
          </p>
        </div>

        <Card variant="surface" size="lg" className="space-y-6 text-sm text-text leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-text mb-2">1. Overview</h2>
            <p className="text-muted">
              KoDriftDev respects the confidentiality and data integrity of our clients and
              website visitors. This placeholder policy outlines our commitment to handling
              enquiry information transparently.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text mb-2">2. Information We Collect</h2>
            <p className="text-muted">
              We collect information provided directly through project enquiry forms and direct
              communications, such as your name, business name, email address, WhatsApp number,
              and project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text mb-2">3. How Information Is Used</h2>
            <p className="text-muted">
              Collected details are used solely to assess project scope, communicate project
              proposals, and provide requested development and design services. We do not sell or
              distribute your contact information to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text mb-2">4. Direct Inquiries</h2>
            <p className="text-muted">
              For privacy-related questions or data deletion requests, please contact us directly
              at kodriftdev@gmail.com.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
