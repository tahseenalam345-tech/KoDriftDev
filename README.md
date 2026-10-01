# KoDriftDev — Agency Website

A clean, maintainable, production-ready website for **KoDriftDev**, a Pakistan-based digital team building high-performance websites, software systems, web & mobile applications, and AI-enabled workflows for local SMBs and international businesses.

🌐 **Live:** https://kodriftdev-q1z4c667d-tahseen-alams-projects.vercel.app

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Assets](#assets)
- [Roadmap](#roadmap)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## Tech Stack

| Layer       | Technology                                              |
|-------------|---------------------------------------------------------|
| Framework   | Next.js 16 (App Router)                                 |
| Language    | TypeScript (strict mode)                                |
| Styling     | Tailwind CSS v4 + custom design tokens                  |
| 3D / Canvas | Three.js                                                |
| Animation   | Framer Motion                                           |
| Icons       | Lucide React                                            |
| Fonts       | Manrope, DM Sans, JetBrains Mono via `next/font/google` |

Content-first architecture: typed TypeScript data files in `src/content/`, designed for a future MDX or headless CMS migration.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:3000
npm run dev

# Lint
npm run lint

# Production build
npm run build
```

Requires Node.js 20+.

---

## Project Structure

```
src/
├── app/                 # App Router pages & API routes
│   ├── page.tsx         # Home (/, /about, /services, /work, /pricing, /process, /contact, /privacy, /terms)
│   ├── services/[slug]/ # Dynamic service pages
│   ├── work/[slug]/     # Dynamic case-study pages
│   └── api/chat/        # AI chat API route
├── components/          # Feature components (home, about, canvas, chat, contact)
├── content/             # Typed content data — services, projects, team, pricing, testimonials, process
├── context/ lib/ types/ # Shared utilities & TypeScript types
public/
└── images/              # Logo, team, projects, OG cards (auto-optimized to WebP)
```

---

## Content Management

All site content lives in typed files under `src/content/`. Edit the data — pages update automatically with no markup changes.

**Add a team member** → append to `teamMembers` in `src/content/team.ts`:

```typescript
{
  name: "New Member",
  role: "Role Title",
  shortBio: "Brief description of responsibilities and expertise.",
  image: "/images/team/new-member.webp",
  linkedin: null, // or "https://linkedin.com/in/username"
  github: null,   // or "https://github.com/username"
}
```

The `/about` page updates dynamically.

**Add a project / case study** → add an entry conforming to the `Project` interface in `src/content/projects.ts`:

```typescript
{
  title: "Client System Name",
  slug: "client-system-name",
  category: "Business Software",
  featured: true,
  liveUrl: "https://example.com", // or null
  summary: "Brief overview of the project.",
  challenge: "Operational obstacle.",
  solution: "Engineering and workflow implementation.",
  features: ["Feature one", "Feature two"],
  role: "Full-stack development and UI design",
  techStack: "Next.js, TypeScript, Supabase",
  results: ["Outcome verified by client"],
  imagePaths: ["/images/projects/client-system/cover.webp"],
  servicesProvided: ["Web Development", "Software Development"],
  status: "Live", // or "Coming soon"
}
```

Routes `/work/[slug]` plus previews on `/work` and `/` generate automatically.

**Update pricing** → edit `src/content/pricing.ts` (guidance-based packages, no hardcoded fixed rates).

---

## Assets

Drop images in any standard format (`.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.svg`) — the workflow auto-optimizes to WebP for Core Web Vitals.

| Asset                  | Location                                                |
|------------------------|---------------------------------------------------------|
| Logo                   | `public/images/logo/kodriftdev-logo.svg`                |
| Team photos            | `public/images/team/[name].webp` (1:1 ratio recommended)|
| Project screenshots    | `public/images/projects/[project-slug]/cover.webp`, `01.webp`, … |
| AI product photography | `public/images/ai-product-photography/`                 |
| OpenGraph card         | `public/images/og/og-image.webp`                        |

Assets map to content via `src/content/*.ts`. Components use Next.js `<Image />` with responsive sizing and lazy loading. Files that can't be matched are documented in `ASSET_REVIEW.md`.

> **Privacy:** never publish unauthorized client material, private chat threads, personal phone numbers, or unverified contact data. Testimonials stay text-first unless public-ready proof assets are explicitly approved.

---

## Roadmap

- [x] **Phase 1** — Route scaffolding, 8-px spacing system, design tokens, typed content files (10 services, projects, team, testimonials, pricing, process)
- [x] **Phase 2** — Warm Slate design system, editorial layouts, typographic branding
- [x] **Phase 3** — Asset pipeline & optimization, before/after comparison slider, restrained accessible interactions
- [ ] **Phase 4** — Production forms (Formspree/Resend), live n8n webhook for the AI assistant demo
- [ ] **Phase 5** — SEO schema generation, performance audit, production hardening
- [ ] **Phase 6** — Client handoff and maintenance docs

---

## Environment Variables

For upcoming phases, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://kodriftdev.com
FORMSPREE_ENDPOINT=
RESEND_API_KEY=
N8N_CHAT_WEBHOOK_URL=
```

> Never commit real secrets to version control. Set production values in the Vercel dashboard instead.

---

## Deployment

Connected to Vercel — every push to `main` deploys automatically.

---

Built by [KoDriftDev](https://github.com/tahseenalam345-tech) · Punjab, Pakistan
