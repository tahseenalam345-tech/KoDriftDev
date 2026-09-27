import { Testimonial } from "@/types";

/**
 * Approved client testimonials.
 * Screenshot verifications can be added later under public/images/testimonials/<slug>.jpg
 */
export const testimonials: Testimonial[] = [
  {
    name: "Tahseen",
    role: "CS Graduate & Junior Developer",
    rating: 5,
    quote:
      "I had good code projects but struggled to present them properly to recruiters. Kodriftdev built a sharp, responsive portfolio site for me, and I started getting interview responses within a few weeks of updating my CV.",
    verificationStatus: "Client quote supplied by KoDriftDev",
    hasScreenshot: false,
    screenshotUrl: null,
  },
  {
    name: "Dr. Tariq Mahmood",
    role: "Operations Head, Care Pharma",
    rating: 5,
    quote:
      "Tracking medicine expiries and stock counts manually was our biggest daily hassle. Kodriftdev delivered a fast, reliable SaaS tool for billing and inventory that cut our evening closing time by half.",
    verificationStatus: "Client quote supplied by KoDriftDev",
    hasScreenshot: false,
    screenshotUrl: null,
  },
  {
    name: "Muhammad Yaseen",
    role: "Director, Alazmat",
    rating: 5,
    quote:
      "Our front desk was always swamped with manual registers and phone bookings. Kodriftdev set up a clean online portal that automated the entire schedule. Patients book directly now with zero overlapping slots.",
    verificationStatus: "Client quote supplied by KoDriftDev",
    hasScreenshot: false,
    screenshotUrl: null,
  },
];
