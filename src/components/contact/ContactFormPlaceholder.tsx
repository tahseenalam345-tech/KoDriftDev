"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

// ============================================================================
// TODO [Phase 4]: CONNECT LIVE SUBMISSION BACKEND
// In Phase 4, connect this form to Formspree, Resend API, or a Next.js Server Action.
// Environment variables needed in Phase 4:
//   - FORMSPREE_ENDPOINT or RESEND_API_KEY
// In Phase 1, form submission is non-functional / simulated to avoid false client claims.
// ============================================================================

export function ContactFormPlaceholder() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 1 Mock Notice
    setSubmitted(true);
  };

  return (
    <Card variant="surface" size="lg" className="space-y-4 sm:space-y-6 p-4 sm:p-8 rounded-2xl sm:rounded-[6px]">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-text">Project Enquiry Form</h2>
        <p className="mt-1 text-xs sm:text-sm text-muted">
          Fill in your details below and we will get back to you with a practical recommendation.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-[6px] bg-primary/10 border border-primary/20 p-6 text-center space-y-3">
          <h3 className="text-lg font-bold text-primary font-heading">Enquiry Received (Preview Mode)</h3>
          <p className="text-sm text-muted">
            Thank you for checking the form layout! Note that live backend submission
            is scheduled for Phase 4 (Formspree/Resend integration).
          </p>
          <p className="text-sm font-semibold text-text">
            For urgent enquiries right now, please reach out via{" "}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              WhatsApp
            </a>
            .
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setSubmitted(false)}
            className="mt-2"
          >
            Reset Form View
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                placeholder="e.g. Ali Khan"
                className="w-full rounded-[4px] border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
              >
                Business Name *
              </label>
              <input
                id="businessName"
                type="text"
                required
                placeholder="e.g. Care Pharma / Retail Store"
                className="w-full rounded-[4px] border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="name@business.com"
                className="w-full rounded-[4px] border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
              >
                WhatsApp Number *
              </label>
              <input
                id="whatsapp"
                type="tel"
                required
                placeholder="+92 300 1234567"
                className="w-full rounded-[4px] border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* What do you need help with? */}
            <div>
              <label
                htmlFor="serviceNeeded"
                className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
              >
                What do you need help with?
              </label>
              <select
                id="serviceNeeded"
                className="w-full rounded-[4px] border border-border bg-background px-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Web Development"
              >
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Software Development">Software Development</option>
                <option value="AI Product Photography">AI Product Photography</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="SEO">SEO</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Data Entry">Data Entry</option>
                <option value="Custom Combination">Custom Combination</option>
              </select>
            </div>

            {/* Estimated Budget (optional) */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
              >
                Estimated Budget (Optional)
              </label>
              <select
                id="budget"
                className="w-full rounded-[4px] border border-border bg-background px-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="Not yet determined"
              >
                <option value="Not yet determined">Not yet determined</option>
                <option value="Starter tier ($ / PKR)">Starter Project Tier</option>
                <option value="Growth tier ($ / PKR)">Growth Scope Tier</option>
                <option value="Custom Scale ($ / PKR)">Scale / Enterprise Scope</option>
              </select>
            </div>
          </div>

          {/* Preferred contact method */}
          <div>
            <label
              htmlFor="preferredContact"
              className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
            >
              Preferred Contact Method
            </label>
            <div className="flex flex-wrap gap-4 text-sm text-text">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="whatsapp"
                  defaultChecked
                  className="accent-primary"
                />
                <span>WhatsApp</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  className="accent-primary"
                />
                <span>Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  className="accent-primary"
                />
                <span>Phone Call</span>
              </label>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="projectDetails"
              className="block text-xs font-bold uppercase tracking-wider text-text mb-1.5"
            >
              Project Details *
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              required
              placeholder="Tell us what you want to build, automate, or improve..."
              className="w-full rounded-[4px] border border-border bg-background p-4 text-sm text-text placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="pt-2 space-y-3">
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              Send Project Enquiry
            </Button>
            <p className="text-xs text-muted">
              We use your details only to reply to your project enquiry.
            </p>
          </div>

          <div className="pt-3 border-t border-border text-xs text-muted flex items-center gap-1.5">
            <span>Prefer a quick message?</span>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-accent-hover underline"
            >
              Chat with us on WhatsApp.
            </a>
          </div>
        </form>
      )}
    </Card>
  );
}
