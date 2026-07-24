---
name: el-websolutions-content
description: Repo-specific conventions for the EL-Websolutions Next.js site (portfolio/agency site for a Dutch freelance web developer). Use when adding or editing a blog post, portfolio project, service ("diensten") page, or local SEO landing page (Bolsward/Friesland/Sneek), or when touching sitemap.xml, contact form email, or JSON-LD FAQ schema on this site. Not a design or code-quality skill — pair with impeccable/react-best-practices for those.
---

# EL-Websolutions content & structure conventions

This is the Next.js 14 (App Router, TypeScript, Tailwind) marketing site for a Dutch freelance
web developer/agency. **All user-facing copy is Dutch** — match the existing tone (direct,
informal "je/jij", benefit-led) when writing new copy; don't switch to English.

## Content models

### Blog posts — `app/blog-list/*.mdx`
Read/write via [lib/server/getBlogs.ts](../../../lib/server/getBlogs.ts). No route wiring needed:
`app/blogs/[slug]/page.tsx` resolves any file in `blog-list` by filename automatically, and
`generateStaticParams` picks it up at build time.

Frontmatter (`BlogFrontmatter`):
```yaml
title: string
description: string       # used as meta description + OG description
date: YYYY-MM-DD
author: string
tags: string[]             # optional, drives BlogTagFilter + FeaturedBlogs matching
links: [{ text, url }]     # optional
thumbnail: /images/blogs/<file>   # served from public/images/blogs
```
Slug = filename without `.mdx`. Body is plain MDX rendered through `next-mdx-remote/rsc`'s
`compileMDX` with no custom components registered — stick to standard Markdown (headings, lists,
links) unless you also register a component in `app/blogs/[slug]/page.tsx`.

### Portfolio projects — `app/project-list/*.mdx`
Same pattern via [lib/server/getProjects.ts](../../../lib/server/getProjects.ts) and
`app/projecten/[slug]/page.tsx`.

Frontmatter (`ProjectFrontmatter`):
```yaml
title: string
description: string
thumbnail: /images/projects/<slug>/<file>
date: DD-MM-YYYY            # note: opposite order from blog frontmatter's date
status: string               # freeform display label, e.g. "Dec 2023" or "Live"
tags: string[]
links: [{ caption, url }]    # note: `caption`, not `text` (differs from blog links!)
gallery: [{ src, alt, caption }]
```
Images go under `public/images/projects/<project-slug>/`.

### Services ("diensten") — `data/services.js` + `app/diensten/<slug>/page.tsx`
Services are **not** file-based content — they're a static array in `data/services.js`
(icon, title, link, description, text, price, tags, image, benefits[], process[], gallery).
Each service also needs a matching page at `app/diensten/<slug>/page.tsx` that:
1. Imports `services` and does `services.find(s => s.link === "/diensten/<slug>")`.
2. Renders `<ServiceHero service={service} />` then `<ServiceDetails service={service} />`.
3. Defines its own local `faqData` array + builds a `FAQPage` JSON-LD `<script>` tag from it
   (see [app/diensten/freelance-developer-agencies/page.tsx](../../../app/diensten/freelance-developer-agencies/page.tsx) for the exact shape).
4. Typically also renders `GoogleReviews`, `USPS` (`components/homepage/usps.tsx`), `FAQ`, and
   `ContactSection` in that order.

Old/consolidated service URLs (e.g. `app/diensten/wordpress`) are kept as thin
`redirect("/diensten/<canonical-slug>")` pages for SEO link equity — don't delete them, and follow
the same pattern if a service page is ever renamed.

### Local SEO landing pages — `app/website-<city>/page.tsx`
One page per target city (currently Bolsward, Friesland, Sneek), each paired with a
`components/Landingspages/Cards<City>.tsx` component. These exist purely for local search intent
(“website laten maken <stad>”) — keep the same section structure across cities when adding a new
one so the pattern stays consistent; copy an existing city page/card as the starting point.

## Cross-cutting conventions

- **Metadata**: most pages export `metadata` inline; a few (e.g. `app/contact`) use a sibling
  `metadata.ts` because the page itself is a client component (`"use client"`) and can't export
  `metadata` directly. Follow whichever pattern the page already uses.
- **JSON-LD**: FAQ schema is inlined per-page as shown above, not centralized — replicate the
  pattern rather than trying to factor it out.
- **Sitemap**: `app/sitemap.xml/route.ts` generates the XML; `app/sitemap/page.tsx` is the
  human-readable HTML sitemap. New static routes should be added to both if they should be
  indexed; MDX-backed routes (blogs/projects) are already enumerated dynamically.
- **Theming**: dark mode is class-based (`next-themes` + Tailwind `darkMode: "class"`). Brand
  accent is `primary` (`#9b87f5`) plus `lightBg`/`darkBg`/`lightText`/`darkText` in
  [tailwind.config.ts](../../../tailwind.config.ts) — reuse these tokens instead of hardcoding hex/gray values.
- **Contact form**: submits to `app/api/send-mail` (Resend). Don't add a second email provider
  or bypass this route for new contact-style forms.
- **Cookie consent**: handled globally by `components/CookieBanner.tsx` (`react-cookie-consent`)
  in the root layout — new pages don't need to re-implement consent.
- **Deployment**: Vercel, with `@vercel/analytics` wired in the root layout. This repo has
  previously needed `force-dynamic` on the home page and RSC-related security patches — when
  changing rendering mode on a page, check recent git history for why before assuming
  static/ISR is safe.
