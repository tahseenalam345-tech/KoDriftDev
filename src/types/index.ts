export interface SiteConfig {
  name: string;
  shortDescription: string;
  description: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  primaryCta: {
    label: string;
    href: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  image: string;
  linkedin: string | null;
  github: string | null;
}

export interface ServiceCategory {
  name: string;
  description: string;
  isPrimary: boolean;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  outcomes: string[];
  iconName: string;
  featured: boolean;
  category: string;
  displayOrder: number;
  metaTitle: string;
  metaDescription: string;
  pageIntro: string;
  deliverables: string[];
  processNote: string;
  ctaText: string;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  liveUrl: string | null;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  role: string;
  techStack: string;
  results: string[];
  imagePaths: string[];
  status?: string;
  testimonialReference?: string;
  clientName?: string | null;
  year?: string | null;
  servicesProvided?: string[];
  screenshots?: string[];
  testimonial?: string | null;
  resultMetrics?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  verificationStatus: string;
  hasScreenshot: boolean;
  screenshotUrl?: string | null;
}

export interface PricingPackage {
  name: string;
  eyebrow: string;
  description: string;
  bestFor: string[];
  includes: string[];
  ctaLabel: string;
  note: string;
  isRecommended?: boolean;
}

export interface ProcessStep {
  number?: number;
  title: string;
  description: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  x: string;
  tiktok: string;
  github: string;
}
