## Context

Greenfield project. An existing `translations.ts` file contains bilingual (es/en) CV content for Diego Gonda as a flat, presentation-coupled data structure. No application code exists. The intended stack is Angular 21 with Tailwind CSS v4, prerendered as static site (SSG). There are no backend services.

## Goals / Non-Goals

**Goals:**
- Extract a semantic, pure-data model from `translations.ts` with structured `narrative {challenge, action, impact}` objects
- Runtime language switching (es/en) without page reload, using Angular signals
- Narrative-driven layout: hero metrics first, experience timeline second, skills and education below
- Each experience entry rendered as a cascading visual: Challenge → Action → Impact
- Responsive design (mobile to desktop) with print-friendly styles
- SSG prerendered output (no runtime server needed)

**Non-Goals:**
- CMS or dynamic content editing — data remains static in TypeScript files
- More than two languages — es/en only
- Contact form or backend API — fully static
- SEO beyond standard meta tags (SSG covers prerendered HTML)
- Dark mode (can be added later as a separate change)

## Decisions

### D1: Runtime i18n via signals (not `@angular/localize`)

**Choice**: A `LocaleService` holds a writable `signal<'es'|'en'>`. A derived `computed` signal selects the active translation object. Components consume the computed signal.

**Alternatives considered**:
- `@angular/localize` + build-time i18n: requires separate builds per locale, no runtime switch without page reload. Overkill for two static languages in a personal CV.
- `ngx-translate`: external dependency, same pattern we can implement natively with signals.

**Rationale**: Signals are built into Angular 21. Two languages at ~20KB total fit in one bundle. Switching is instant. No extra dependencies.

### D2: Single-page layout, no router

**Choice**: One page with all sections stacked vertically. A sticky navigation bar links to sections via fragment scrolling (`#experience`, `#skills`). No Angular Router needed.

**Rationale**: A CV is a single document, not a multi-page app. Fragment navigation is simpler, more print-friendly, and avoids lazy loading complexity for what is inherently one page of content.

### D3: SSG via `@angular/ssr` prerender

**Choice**: Use Angular's built-in prerendering (`ng build --prerender`). All routes (single `/` route at two locales) are prerendered to static HTML.

**Rationale**: The CV has no dynamic data. Static HTML loads instantly, works without JavaScript, and is optimal for SEO. Angular 21's SSG support is mature.

### D4: Tailwind CSS v4 for styling

**Choice**: Tailwind v4 as the sole styling approach. Component-scoped styles only for Tailwind-unfriendly cases (print, complex animations).

**Rationale**: The angular-new-app skill mandates Tailwind. v4 works with Angular's style encapsulation. Print styles via `@media print` utility classes. No separate CSS framework needed.

### D5: Component tree

```
AppComponent
├── LocaleToggle        (es/en switch)
├── HeroSection
│   ├── HeaderComponent (photo, name, contacts, target role)
│   ├── HighlightsComponent (4 key achievements)
│   ├── MetricsComponent (3 impact numbers)
│   └── SnapshotComponent (profile + keywords)
├── AboutMeComponent
├── ExperienceSection
│   ├── ExperienceTimeline
│   │   └── ExperienceEntry[] (primary roles with narrative)
│   └── SupportingRoles (complementary experience)
├── SkillsCatalog
│   └── SkillCategory[]  (category name + skill tags)
├── EducationHistory
│   ├── EducationList
│   └── CourseList
└── FooterComponent
```

**Rationale**: One component per semantic section. Experience is split: primary roles get the narrative timeline treatment; supporting roles get a compact list. This is the natural granularity — neither over-fragmented nor monolithic.

### D6: Data layer architecture

```
src/app/data/
├── cv-data.ts          — CvData interface + bilingual objects
├── models.ts           — Shared interfaces (Contact, Narrative, Metric, ExperienceEntry...)
└── index.ts            — barrel export

src/app/services/
└── locale.service.ts   — LocaleService (providedIn: 'root')
```

**Rationale**: Pure data (no classes, no services) separated from the locale mechanism. Components import data through the locale service's computed signal.

## Risks / Trade-offs

- **Two languages in one bundle** → ~20KB overhead for the unused language. Acceptable for a CV site; the alternative (two builds) adds deployment complexity.
- **No router** → Cannot deep-link to sections with path-based URLs (only fragments). Acceptable for a single-page CV.
- **Print fidelity** → Tailwind's print variants may need supplementation with `@media print` in component styles for precise layout (e.g., hiding the locale toggle, adjusting margins for A4).
- **SSG + runtime i18n** → The prerendered HTML will be in the default language (es). The locale switch happens client-side. Search engines will only index the default language. Acceptable — this is a personal CV, not a multilingual product.

## Open Questions

- **Photo handling**: Embed as base64 vs. external asset? Leaning asset for bundle size.
- **Deployment target**: GitHub Pages? Vercel? Custom domain? (Does not affect implementation.)
- **Analytics**: None planned. Can be added post-launch with a `<script>` tag.
