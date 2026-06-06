## 1. Scaffold

- [x] 1.1 Create Angular 21 application with Tailwind CSS v4 (`ng new cv --routing=false --ssr --style=css`, then `ng add tailwindcss`)
- [x] 1.2 Verify scaffold builds cleanly (`ng build`)

## 2. Data Model

- [x] 2.1 Define TypeScript interfaces in `src/app/data/models.ts` (CvData, Header, Contact, Highlights, Snapshot, Metric, AboutMe, ExperienceEntry with Narrative, EducationEntry, SkillCategory, Footer)
- [x] 2.2 Extract bilingual data from `translations.ts` into `src/app/data/cv-data.ts` with semantic structure (narrative objects, `roleType` discriminator, unified experience array)
- [x] 2.3 Reorganize experience: merge `items` + `otherItems` into single array, convert featured boolean to `roleType`, split descriptions into `{challenge, action, impact}`
- [x] 2.4 Create `src/app/data/index.ts` barrel export

## 3. Internationalization

- [x] 3.1 Create `LocaleService` in `src/app/services/locale.service.ts` with writable `signal<'es'|'en'>` defaulting to `'es'`, computed translation selector, and `toggle()` method
- [x] 3.2 Create `LocaleToggleComponent` with two-button UI that calls `LocaleService.toggle()` and highlights active language

## 4. App Shell & Layout

- [x] 4.1 Update `AppComponent` to inject `LocaleService`, provide the computed data signal, and render all section components in order
- [x] 4.2 Create sticky navigation bar with fragment links (`#hero`, `#about`, `#experience`, `#skills`, `#education`)
- [x] 4.3 Implement `@for` loop over section nav items with active section tracking using `IntersectionObserver` or scroll position
- [x] 4.4 Apply responsive layout rules (single column < 768px, multi-column > 1024px)

## 5. Hero Section

- [x] 5.1 Create `HeaderComponent` displaying name (large), role description, target role label+value, and photo with localized alt text
- [x] 5.2 Create contact row rendering phone, email, portfolio, and LinkedIn as typed links with icons
- [x] 5.3 Create `HighlightsComponent` rendering the four key achievements as a styled list
- [x] 5.4 Create `MetricsComponent` rendering three impact numbers with large values and smaller label/context text
- [x] 5.5 Create `SnapshotComponent` rendering profile summary and keyword tags
- [x] 5.6 Assemble `HeroSection` parent component composing Header, Highlights, Metrics, and Snapshot

## 6. About Me

- [x] 6.1 Create `AboutMeComponent` rendering summary, content paragraph, and four bullet points with translated text

## 7. Experience Narrative

- [x] 7.1 Create `ExperienceEntryComponent` rendering one primary role as a narrative card: company, period, position, role badge, and cascading Challenge → Action → Impact with visual connectors
- [x] 7.2 Create `ExperienceTimelineComponent` iterating primary roles (`roleType: 'primary'`) with `@for` and rendering `ExperienceEntryComponent` for each, ordered most recent first
- [x] 7.3 Create `SupportingRolesComponent` rendering complementary roles (`roleType: 'supporting'`) as a compact list with company, period, position, and description
- [x] 7.4 Assemble `ExperienceSection` parent component composing timeline and supporting roles

## 8. Skills Catalog

- [x] 8.1 Create `SkillsCatalogComponent` iterating skill categories with `@for`, rendering category names as headings and skills as tag elements

## 9. Education History

- [x] 9.1 Create `EducationListComponent` rendering academic degrees with degree, period, institution, and description
- [x] 9.2 Create `CourseListComponent` rendering professional courses with course name, period, institution, and description
- [x] 9.3 Assemble `EducationSection` parent component composing education list and course list under distinct translated headings

## 10. Footer

- [x] 10.1 Create `FooterComponent` rendering translated copyright and attribution text

## 11. Polish & SSG

- [x] 11.1 Add print styles: hide nav and locale toggle, black-on-white text, avoid page breaks inside entries, ensure contacts visible
- [x] 11.2 Add responsive tweaks for tablet breakpoint (768–1024px)
- [x] 11.3 Verify SSG prerender output (`ng build` produces static HTML)
- [x] 11.4 Add profile photo asset and configure `angular.json` to include it in the build
