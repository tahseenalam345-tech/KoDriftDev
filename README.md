# KoDriftDev — Agency Portfolio Website (Phase 1 Foundation)

A clean, maintainable, production-ready website foundation for **KoDriftDev**, a Pakistan-based digital team creating high-performance websites, software systems, web & mobile applications, and AI-enabled workflows for local SMBs and international businesses.

---

## 1. Project Purpose & Positioning

KoDriftDev builds digital products and systems that help businesses move faster. This codebase represents the architectural foundation (Phase 1), establishing strict TypeScript schemas, static data files, route scaffolding, design tokens, and modular components to enable rapid content updates.

---

## 2. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15+ (App Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation Ready**: [Framer Motion](https://www.framer.com/motion/) (configured for future phases)
- **Fonts**: Manrope, DM Sans, and JetBrains Mono via `next/font/google`
- **Architecture**: Content-first TypeScript data files designed for future MDX or headless CMS migration

---

## 3. Setup Commands

Run the following commands in the project root:

```bash
# Install dependencies
npm install

# Start development server at http://localhost:3000
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle
npm run build
```

---

## 4. Asset Replacement Directory Guide

When assets are ready, place them in the following public directories without altering file schemas:

| Asset Type | File Path / Directory | Notes |
|------------|-----------------------|-------|
| **Logo** | `/public/images/logo/kodriftdev-logo.svg` | Replaces the Header/Footer wordmark fallback. |
| **Team Photos** | `/public/images/team/[name].jpg` | e.g. `tahseen.jpg`, `bisma.jpg`, `areeba.jpg` (1:1 ratio recommended). |
| **Project Screenshots** | `/public/images/projects/[project-slug]/cover.jpg` | Additional views at `01.jpg`, `02.jpg`, etc. |
| **AI Product Photography** | `/public/images/ai-product-photography/` | High-res before/after product and lifestyle scenes. |
| **Testimonial Verification**| `/public/images/testimonials/[client-slug].jpg` | Client review screenshots or verification proofs. |
| **OpenGraph Cards** | `/public/images/og/og-image.jpg` | Social preview card for link sharing. |

---

## 5. Content Management Guides

### How to Add a Team Member
Edit `src/content/team.ts` and append a new object to the `teamMembers` array:

```typescript
{
  name: "New Member Name",
  role: "Role Title",
  shortBio: "Brief description of their responsibilities and expertise.",
  image: "/images/team/new-member.jpg",
  linkedin: null, // or "https://linkedin.com/in/username"
  github: null,   // or "https://github.com/username"
}
```
The `/about` page updates dynamically without modifying any markup.

### How to Add a Project / Case Study
Edit `src/content/projects.ts` and add a new item conforming to the `Project` interface:

```typescript
{
  title: "Client System Name",
  slug: "client-system-name",
  category: "Business Software",
  featured: true,
  liveUrl: "https://example.com", // or null
  summary: "Brief overview of the project.",
  challenge: "Detailed operational obstacle.",
  solution: "Engineering and workflow implementation.",
  features: ["Feature one", "Feature two"],
  role: "Full-stack development and UI design",
  techStack: "Next.js, TypeScript, Supabase",
  results: ["Operational achievement verified by client"],
  imagePaths: ["/images/projects/client-system/cover.jpg"],
  servicesProvided: ["Web Development", "Software Development"],
  status: "Live", // or "Coming soon"
}
```
Dynamic routes `/work/[slug]` and previews on `/work` and `/` generate automatically.

### How to Update Pricing Packages
Edit `src/content/pricing.ts` to adjust package descriptions, inclusions, and best-for target criteria. Note: Pricing remains flexible/guidance-based without hardcoded fixed rates.

---

## 6. Phase 3 — Asset Workflow

### 1. Where Assets Are Stored
Assets are organized in the `public/images/` directory:
- **Logo**: `public/images/logo/` (`kodriftdev-logo.svg`)
- **Team**: `public/images/team/` (`tahseen.webp`, `bisma.webp`, `areeba.webp`)
- **Projects**: `public/images/projects/[project-slug]/` (`cover.webp`, `01.webp`, etc.)
- **AI Product Photography**: `public/images/ai-product-photography/`
- **OpenGraph**: `public/images/og/` (`og-image.webp`)

### 2. Supported Upload Formats & Automated Optimization
Team members can drop images in any standard format (`.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.svg`). Manual resizing or external compression is not required. KoDriftDev's asset workflow automatically inspects, resizes, and converts images into modern WebP format for optimal Core Web Vitals and zero layout shift.

### 3. How Assets Are Connected
Asset files placed in `public/images/` are mapped directly in TypeScript content files (`src/content/projects.ts`, `src/content/team.ts`, `src/content/aiProductPhotography.ts`). Components leverage Next.js `<Image />` with automatic layout sizing, responsive `sizes`, and lazy loading.

### 4. How to Add a New Screenshot to an Existing Project
1. Place the new image file in `public/images/projects/<project-slug>/` (e.g. `02.webp` or `02.png`).
2. Open `src/content/projects.ts`, find the matching project entry, and add the path to its `imagePaths` array:
   ```typescript
   imagePaths: [
     "/images/projects/aurax/cover.webp",
     "/images/projects/aurax/01.webp",
     "/images/projects/aurax/02.webp",
   ],
   ```
3. The project case study gallery (`/work/[slug]`) automatically renders the new view.

### 5. How to Enable a Real AI Product Photography Before/After Comparison
1. Upload the before and after image files into `public/images/ai-product-photography/` (e.g., `watch-before.webp` and `watch-after.webp`).
2. In `src/content/aiProductPhotography.ts`, locate or create the corresponding example item:
   ```typescript
   {
     id: "watch-product",
     title: "Watch product image",
     category: "Luxury Goods & Accessories",
     beforeImage: "/images/ai-product-photography/watch-before.webp",
     afterImage: "/images/ai-product-photography/watch-after.webp",
     altBefore: "Raw unedited studio product photo",
     altAfter: "AI-enhanced commercial campaign shot with dynamic reflections",
     status: "ready", // change from "placeholder" to "ready"
   }
   ```
3. Setting `status: "ready"` automatically activates the touch/keyboard-friendly interactive before/after comparison slider.

### 6. Unmatched Assets & Asset Review
Any files that cannot be confidently matched or that require sensitive review are documented in `ASSET_REVIEW.md`. When uncertain, graceful category-specific wireframe placeholders are preserved rather than guessing.

### 7. Client Privacy & Sensitive Data Protection
Website content must never display unauthorized client material, private WhatsApp conversation threads, personal phone numbers, or unverified contact data. Testimonials remain text-first with typographic avatars unless sanitized, public-ready proof assets are explicitly approved.

---

## 7. Implementation Roadmap & Notes

### Phase 1 (Completed):
- Full semantic route structure (`/`, `/services`, `/services/[slug]`, `/work`, `/work/[slug]`, `/about`, `/process`, `/pricing`, `/contact`, `/privacy`, `/terms`, 404).
- 8-px spacing system, design tokens, and typography foundations.
- Elegant accessible image and media placeholders.
- Typed data files for all 10 services, projects, team, testimonials, packages, and process steps.

### Phase 2 (Completed):
- Warm Slate visual design system, typography clamp scales, and editorial studio layouts.
- Original typographic branding and dark signature stages.
- Category-specific architectural wireframe motifs for placeholders.

### Phase 3 (Completed):
- Corrected studio visual direction, clean editorial typography, and exact human-centered copy.
- Full asset optimization and connection for brand logo, team portraits, and deployed project case studies.
- Interactive before/after comparison slider architecture in `AiPhotoPreview.tsx` (retained as placeholder until assets are uploaded).
- Restrained, accessible interactions (header scroll, button lifts, service item hover, process step reveals).

### Future Phases (To Be Implemented):
- **Phase 4**: Production form integrations (Formspree or Resend) and live n8n webhook connection for the AI assistant demo.
- **Phase 5**: Full SEO schema generation, performance auditing, and production deployment on Vercel.
- **Phase 6**: Final client handoff and ongoing maintenance documentation.

---

## 8. Future Environment Variables

When deploying in subsequent phases, create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_URL=https://kodriftdev.com
FORMSPREE_ENDPOINT=
RESEND_API_KEY=
N8N_CHAT_WEBHOOK_URL=
```

*(Note: Do not commit actual API keys or secrets to version control).*
