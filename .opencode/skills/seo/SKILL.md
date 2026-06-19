---
name: seo
description: "Trigger: SEO, Search Engine Optimization, mejorar SEO, optimizar SEO. Analyzes the page for SEO improvements: meta tags, semantic HTML structure, heading hierarchy, structured data, performance, and accessibility factors that impact search ranking."
license: Apache-2.0
metadata:
  author: "diego"
  version: "1.0"
---

Activation Contract
-------------------
Trigger when an agent or user asks for SEO analysis or optimization for a single-page Angular CV/resume application. The skill should analyze one page at a time and produce actionable, prioritized recommendations covering on-page technical and content factors.

Hard Rules
----------
- Work at the page level (index.html / server-rendered HTML snapshot) — do not attempt site-wide crawling.
- Prefer concrete, copy-pasteable recommendations (meta tag snippets, JSON-LD, Angular-specific guidance) over vague advice.
- Keep recommendations compatible with Angular SPA constraints (client-side rendering, prerender/SSR options, canonicalization).
- Do not modify repository files; return suggested patches and exact file locations where edits belong.

Decision Gates
--------------
- If the app uses SSR or prerendering, include server-side insertion points for meta tags and JSON-LD.
- If no structured data is present, recommend a minimal Person/Resume JSON-LD and where to insert it safely in an Angular app.
- If Lighthouse or Core Web Vitals fail critical thresholds, escalate performance fixes with ordering (critical -> high -> medium).

Execution Steps
---------------
1. Collect inputs: page URL or HTML snapshot, build output path (e.g., dist/ or src/index.html), and whether SSR/prerender is enabled.
2. Analyze the HTML snapshot for:
   - Document title and meta description presence and length
   - Open Graph and Twitter Card tags
   - Canonical link and robots meta
   - Heading hierarchy (H1..H6) and semantic landmarks (header, main, footer, nav)
   - Image alt text and meaningful filenames
   - Structured data (application/ld+json) for Person/Resume
   - Use of rel=prev/next or pagination (not typical for a CV)
3. Run lightweight performance checks (suggest Lighthouse or run advised checks): critical render path, large JS bundles, unused CSS, image sizes, Largest Contentful Paint contributors.
4. Run accessibility checks relevant to SEO: semantic headings, ARIA usage, link text clarity, and mobile viewport meta.
5. Produce output: prioritized findings, recommended code snippets, suggested build-time insertion points (Angular meta service, index.html, server templates), and verification steps.

Output Contract
---------------
Return a structured report containing:
- summary: short executive summary and priority (High/Medium/Low) for each finding
- findings: array of { id, area, description, impact, severity, evidence }
- recommendations: array of { id, patch_snippet, target_file, insertion_point, rationale }
- JSON-LD examples: ready-to-insert Person/Resume snippet tailored to a CV page
- verification: Lighthouse/audits to run, exact commands or URLs to check, and expected passing thresholds

References
----------
- Local: suggest inserting recommendations into src/index.html or Angular platform-server files when SSR/prerender is used. For project conventions, consult .opencode/ or existing build scripts.
- External references (for human reviewers): schema.org/Person, Google SEO starter guide, Lighthouse docs.
