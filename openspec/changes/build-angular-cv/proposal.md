## Why

Build a personal curriculum vitae website that presents Diego Gonda's professional trajectory as a narrative, not a dry list of roles. The existing `translations.ts` contains bilingual content (es/en) but lacks semantic structure—Challenge/Action/Impact stories are buried in flat strings—and there is no rendering layer at all.

## What Changes

- Extract a semantic data model from `translations.ts` (structured `narrative {challenge, action, impact}` instead of flat strings, unified experience arrays with `roleType`)
- Scaffold an Angular 21 application with Tailwind CSS v4 and SSG prerendering
- Implement runtime i18n via Angular signals for instant language switching (es/en)
- Build a narrative-first layout: hero with metrics → experience timeline → skills catalog
- Render each experience entry as a cascading Challenge → Action → Impact visual sequence
- Apply a responsive, print-friendly design

## Capabilities

### New Capabilities

- `cv-data-model`: Semantic TypeScript interfaces and bilingual content data extracted from the existing translations
- `internationalization`: Runtime language switch (es/en) using Angular signals, single build with no runtime reload
- `cv-layout`: Application shell with responsive navigation, header/footer, and print styles
- `hero-section`: Name, photo, contacts, target role, key highlights, executive snapshot, and impact metrics
- `experience-narrative`: Timeline of professional roles with Challenge/Action/Impact cascading layout
- `skills-catalog`: Skills grouped by category (Architecture, Frontend, DevOps, Leadership, Systems, CMS)
- `education-history`: Academic degrees, professional courses, and certifications

### Modified Capabilities

<!-- None -- this is a new project -->

## Impact

- New Angular project at repository root (ng new)
- Existing `translations.ts` refactored into the semantic data model under `src/app/data/`
- No backend — fully static, deployed as SSG prerendered output
- Dependencies: Angular 21+, Tailwind CSS v4, Angular CLI
