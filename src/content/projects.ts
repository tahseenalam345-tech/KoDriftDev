import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AURA-X Custom OMS & E-Commerce Platform",
    slug: "aurax-custom-oms-ecommerce",
    category: "E-Commerce & Operations",
    featured: true,
    liveUrl: "https://www.aurax-watches.com/",
    summary:
      "A luxury e-commerce storefront and custom order-management platform built to connect online selling with operational visibility.",
    challenge:
      "Luxury e-commerce operations need more than a storefront. AURA-X required an experience that could support selling, order tracking, business analysis, returns, warranty claims, and product operations in one connected system.",
    solution:
      "KoDriftDev collaborated on a highly optimized Order Management System and luxury storefront using Next.js, Tailwind CSS, TypeScript, Supabase, and real-time workflows.",
    features: [
      "Real-time order synchronization through Supabase",
      "Dynamic profit and loss forecasting with what-if analysis",
      "Courier analytics and multi-product manual order entries",
      "Silent abandoned-cart session tracking",
      "Integrated return and warranty claim portal",
      "Luxury e-commerce storefront experience",
    ],
    role: "Full-Stack Collaborator — Next.js, Tailwind CSS, TypeScript, and Supabase backend architecture design and refinement.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Supabase",
    results: [
      "Built as a connected storefront and operations platform",
      "Designed to support data-driven order, return, warranty, and profitability workflows",
    ],
    imagePaths: [
      "/images/projects/aurax/cover.webp",
      "/images/projects/aurax/01.webp",
    ],
    clientName: "AURA-X",
    year: "2024",
    servicesProvided: ["Web Development", "Software Development"],
  },
  {
    title: "Cluck n Moo — Restaurant Ordering & Operations Platform",
    slug: "cluck-n-moo-restaurant-platform",
    category: "Restaurant Technology",
    featured: true,
    liveUrl: "https://cluck-n-moo.vercel.app/",
    summary:
      "A mobile-first restaurant website, ordering experience, and internal operations platform for a fast-casual food business in Kharian, Pakistan.",
    challenge:
      "Cluck n Moo needed a customer-facing ordering experience and a practical internal system to manage menu items, orders, kitchen workflow, staff, riders, promotions, and operating hours.",
    solution:
      "KoDriftDev developed a full-stack, mobile-first restaurant platform that supports the complete customer journey from menu discovery to checkout and order tracking, alongside internal operational tools.",
    features: [
      "Customer-facing food menu and themed categories",
      "Promotions, popular picks, custom deals, modifiers, and add-ons",
      "Cart and checkout for delivery, pickup, and dine-in",
      "Order tracking and live-order flow",
      "Admin Control Center for products and categories",
      "Cloudinary food-image management",
      "Kitchen workflow, staff and rider assignment",
      "Store hours and special-event hours",
      "Role-based access control",
      "Light and dark mode",
    ],
    role: "Product design and full-stack development.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Cloudinary, operational dashboard tooling",
    results: [
      "Created as a mobile-first ordering and restaurant operations experience",
      "Designed to bring customer ordering and internal workflows into one system",
    ],
    imagePaths: [
      "/images/projects/cluck-n-moo/cover.webp",
      "/images/projects/cluck-n-moo/01.webp",
    ],
    clientName: "Cluck n Moo",
    year: "2024",
    servicesProvided: ["Web Development", "App Development"],
  },
  {
    title: "KoDrift Pharmacy SaaS",
    slug: "kodrift-pharmacy-saas",
    category: "Business Software",
    featured: true,
    liveUrl: "https://kodrift-pharmacy-saas.vercel.app/",
    summary:
      "An all-in-one pharmacy management system designed for high-performance retail operations.",
    challenge:
      "Pharmacies need accurate, fast operational systems for inventory, sales, suppliers, staff, and financial records.",
    solution:
      "A pharmacy SaaS platform designed to centralize retail operations, reduce manual errors, and give teams faster access to the information they need.",
    features: [
      "End-to-end inventory tracking",
      "Real-time financial reporting",
      "Barcode integration",
      "Staff management",
      "Automated supplier ledger tracking",
      "Built for speed, precision, and scalability",
    ],
    role: "Product concept, interface design, and software development.",
    techStack: "Next.js, TypeScript, Tailwind CSS, dashboard architecture",
    results: [
      "Designed to centralize core pharmacy operations",
      "Built around faster retail workflows and improved record visibility",
    ],
    imagePaths: [
      "/images/projects/pharmacy-saas/cover.webp",
      "/images/projects/pharmacy-saas/01.webp",
    ],
    clientName: "KoDrift Systems",
    year: "2024",
    servicesProvided: ["Software Development"],
  },
  {
    title: "MediBook Clinic Booking Platform",
    slug: "medibook-clinic-booking-platform",
    category: "Healthcare Technology",
    featured: false,
    liveUrl: "https://clinic-medibook.vercel.app/",
    summary:
      "A clinic booking portal designed to make appointment scheduling easier for patients and front-desk teams.",
    challenge:
      "Manual appointment registers and phone-based booking can create double bookings, missed information, and unnecessary front-desk pressure.",
    solution:
      "KoDriftDev created a clean online booking portal designed to give patients a direct scheduling path while supporting organized clinic availability.",
    features: [
      "Online appointment scheduling",
      "Patient-facing booking flow",
      "Availability-focused portal structure",
      "Designed to reduce overlapping appointments",
    ],
    role: "Product design and web application development.",
    techStack: "Next.js, TypeScript, Tailwind CSS",
    results: [
      "Designed to simplify booking workflows",
      "Built to support direct patient booking and organized schedules",
    ],
    imagePaths: [
      "/images/projects/medibook/cover.webp",
      "/images/projects/medibook/01.webp",
    ],
    clientName: "MediBook",
    year: "2024",
    servicesProvided: ["Web Development", "App Development"],
  },
  {
    title: "Prime Energy UK — Heat Pump Profitability & Job Management System",
    slug: "prime-energy-uk-profitability-system",
    category: "Business Software",
    featured: true,
    liveUrl: "https://prime-energy-uk-profitability-syste.vercel.app/",
    summary:
      "A full-stack system for managing domestic air-source heat-pump jobs, technical workflows, quotations, grants, profitability, and compliance documentation.",
    challenge:
      "Domestic ASHP work involves technical assessments, surveys, product selection, costing, grants, quotations, compliance records, and commercial profitability. Managing this through disconnected files creates risk and slows decisions.",
    solution:
      "KoDriftDev developed a full-stack web application to guide jobs from initial lead and pre-survey assessment through design, costing, quotations, submission tracking, and profitability review.",
    features: [
      "Mode A pre-survey heat-demand and ASHP/cylinder recommendations",
      "Mode B survey and design workflow",
      "ASHP, cylinder, and radiator catalogues with pricing",
      "GOV.UK EPC API integration for postcode and property lookup",
      "BUS grant, customer contribution, profit, and margin calculations",
      "Commercial cost configuration",
      "Automated quotation and PDF generation",
      "Submission and compliance tracking with documents, evidence, statuses, and dates",
      "User and admin authentication with role-based access",
      "Vercel and Turso production deployment",
    ],
    role: "Full-stack application development and product workflow implementation.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Turso, Vercel, GOV.UK EPC API",
    results: [
      "Designed to connect technical, commercial, and compliance workflows in one system",
      "Built for end-to-end visibility across ASHP job management",
    ],
    imagePaths: [
      "/images/projects/prime-energy/cover.webp",
      "/images/projects/prime-energy/01.webp",
    ],
    clientName: "Prime Energy UK",
    year: "2024",
    servicesProvided: ["Software Development", "Web Development"],
  },
  {
    title: "Developer Portfolio Website",
    slug: "developer-portfolio-website",
    category: "Portfolio Website",
    featured: false,
    liveUrl: "https://tahseen-portfolio.vercel.app/",
    summary:
      "A focused, responsive portfolio website created to help a junior developer present projects, skills, and experience professionally.",
    challenge:
      "Strong development work can be overlooked when it is not presented clearly to recruiters and potential employers.",
    solution:
      "KoDriftDev created a sharp, responsive portfolio structure that puts projects, technical skills, and professional positioning first.",
    features: [
      "Clear presentation of projects and technical skills",
      "Responsive layout optimized for recruiter review",
      "Direct contact and resume access pathways",
    ],
    role: "Portfolio strategy, design, and front-end development.",
    techStack: "Next.js, TypeScript, Tailwind CSS",
    testimonialReference: "Tahseen — CS Graduate & Junior Developer",
    results: [
      "Built to improve professional presentation of development work",
      "Client reported receiving interview responses after updating their CV and portfolio",
    ],
    imagePaths: [
      "/images/projects/developer-portfolio/cover.webp",
      "/images/projects/developer-portfolio/01.webp",
    ],
    clientName: "Tahseen",
    year: "2024",
    servicesProvided: ["Web Development"],
  },
  {
    title: "SoundMind AI",
    slug: "soundmind-ai",
    category: "Mobile App",
    featured: false,
    liveUrl: null,
    summary:
      "Flutter mobile application project. Add verified case-study details, screenshots, and feature list before public launch.",
    challenge: "Case study documentation in progress.",
    solution: "Flutter mobile application currently undergoing case study preparation.",
    features: [],
    role: "Mobile app development",
    techStack: "Flutter, Dart, Mobile Architecture",
    results: [
      "Case study details currently in preparation",
    ],
    status: "Coming soon",
    imagePaths: [],
    clientName: null,
    year: "2024",
    servicesProvided: ["App Development"],
  },
  {
    title: "Aether Diary",
    slug: "aether-diary",
    category: "Mobile App",
    featured: false,
    liveUrl: null,
    summary:
      "Flutter mobile application project. Add verified case-study details, screenshots, and feature list before public launch.",
    challenge: "Case study documentation in progress.",
    solution: "Flutter mobile application currently undergoing case study preparation.",
    features: [],
    role: "Mobile app development",
    techStack: "Flutter, Dart, Mobile Architecture",
    results: [
      "Case study details currently in preparation",
    ],
    status: "Coming soon",
    imagePaths: [],
    clientName: null,
    year: "2024",
    servicesProvided: ["App Development"],
  },
];
