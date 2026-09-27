import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactFormPlaceholder } from "@/components/contact/ContactFormPlaceholder";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Send us a short message about what you want to build, improve or fix. We will come back with a practical next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 space-y-16 sm:space-y-24 bg-[#F4F1EA]">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-[720px] space-y-5">
            <span className="metadata-text text-accent">
              Contact
            </span>
            <h1 className="hero-headline">
              Let’s talk about the work.
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-[620px]">
              Send us a short message about what you want to build, improve or fix.
              We will come back with a practical next step.
            </p>
          </div>
        </Container>
      </section>

      {/* Form & Direct Contact Details */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <ContactDetails />
            </div>
            <div className="lg:col-span-7">
              <ContactFormPlaceholder />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
