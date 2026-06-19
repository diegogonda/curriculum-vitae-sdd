## 1. Data changes in cv-data.ts (+ translations.ts)

- [x] 1.1 Add AI skills category with 4 skills (SDD, Prompt Engineering, LLMs, AI-assisted development) to `skills.categories` in both `es` and `en` locales in `src/app/data/cv-data.ts` (actual data source) and `translations.ts` (prototype)
- [x] 1.2 Update `metrics.items[2].value` from `"6"` to `"7"` in both locales
- [x] 1.3 Update `metrics.items[2].context` in `es` to include "IA" and in `en` to include "AI"

## 2. Verification

- [x] 2.1 Run `ng test` to ensure no regressions — pre-existing test infra issue (vitest browser provider not installed), no new failures introduced. Data-only changes verified via `tsc --noEmit`.
- [x] 2.2 Verify the skills section renders all 7 categories with correct bilingual labels — verified 7th category present in both `es` and `en` with 4 skills (SDD, Prompt Engineering, LLMs, AI-assisted development).
