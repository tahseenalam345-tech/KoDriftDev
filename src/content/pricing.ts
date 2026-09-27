import { PricingPackage } from "@/types";

export const pricingCopy = {
  heading: "Start simple. Build what you need.",
  subheading:
    "Choose a starting point, then we shape the final scope around your business, budget and priorities.",
  trustLine:
    "No confusing menus. No forced bundles. Just a clear starting point and a quote built around your actual needs.",
  customSection: {
    heading: "Need something different?",
    body: "Most client projects combine services. Tell us what you want to achieve, and we will create a focused custom plan without forcing you into a rigid package.",
    cta: "Get a Custom Quote",
  },
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Starter",
    eyebrow: "For a focused digital upgrade",
    description:
      "A practical starting point for businesses that need a clearer online presence or one high-priority digital solution.",
    bestFor: [
      "New or small businesses",
      "Simple business websites",
      "Focused redesigns or visual content needs",
    ],
    includes: [
      "Discovery call and project planning",
      "One core service or focused deliverable",
      "Responsive design and quality checks where applicable",
      "Clear handover and next-step guidance",
    ],
    ctaLabel: "Build My Starter Plan",
    note: "Every business is different. We tailor the final scope and quote after understanding what you need.",
    isRecommended: false,
  },
  {
    name: "Growth",
    eyebrow: "Good for growing businesses",
    description:
      "A more complete package for businesses that need a stronger website, an easier ordering experience, or a combination of services.",
    bestFor: [
      "Growing local businesses",
      "E-commerce, restaurant, clinic, and service businesses",
      "Businesses combining web, design, SEO, or automation work",
    ],
    includes: [
      "Strategy and discovery workshop",
      "A tailored mix of core services",
      "Conversion-focused user experience",
      "Launch support and practical recommendations",
    ],
    ctaLabel: "Build My Growth Plan",
    note: "Add or remove services based on your priorities. The final quote is custom.",
    isRecommended: true,
  },
  {
    name: "Scale",
    eyebrow: "For systems, products, and ongoing growth",
    description:
      "For businesses that need custom software, an application, automation, or a longer-term digital partner.",
    bestFor: [
      "Custom internal software",
      "Mobile or web applications",
      "AI automation and multi-service growth projects",
    ],
    includes: [
      "Detailed project planning",
      "Custom product or system development",
      "Integration and workflow support where needed",
      "Post-launch roadmap and ongoing support options",
    ],
    ctaLabel: "Plan a Scale Project",
    note: "Scope, timeline, integrations, and support are customized after a project consultation.",
    isRecommended: false,
  },
];
