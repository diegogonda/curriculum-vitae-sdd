## ADDED Requirements

### Requirement: Semantic data model
The system SHALL define TypeScript interfaces that represent the CV data as pure, presentation-independent structures.

#### Scenario: Data model covers all sections
- **WHEN** the CvData interface is inspected
- **THEN** it SHALL contain typed fields for header, highlights, snapshot, metrics, aboutMe, experience, education, courses, skills, and footer

### Requirement: Bilingual static data
The system SHALL export bilingual CV content as a `Record<'es'|'en', CvData>` constant.

#### Scenario: Both languages available
- **WHEN** the translations constant is accessed
- **THEN** both `translations.es` and `translations.en` SHALL be defined and structurally identical
- **THEN** all string fields SHALL have values in both languages

### Requirement: Narrative structure
Each experience entry SHALL use a `Narrative` object with `challenge`, `action`, and `impact` string fields instead of a single flat description string.

#### Scenario: Narrative fields are structured
- **WHEN** an experience entry is inspected
- **THEN** its narrative SHALL contain separate `challenge`, `action`, and `impact` fields

### Requirement: Unified experience roles
All professional experience entries SHALL live in a single array with a `roleType` discriminator of `'primary'` or `'supporting'`.

#### Scenario: Primary and supporting roles in one collection
- **WHEN** the experience array is iterated
- **THEN** entries with `roleType: 'primary'` SHALL represent main career roles
- **THEN** entries with `roleType: 'supporting'` SHALL represent complementary experience

### Requirement: Shared entry interfaces
Education and course entries SHALL share a common structure: `degree`, `period`, `institution`, and `description`.

#### Scenario: Education and courses use common fields
- **WHEN** an education entry or course entry is inspected
- **THEN** both SHALL have `degree`, `period`, `institution`, and `description` fields

### Requirement: Skills by category
Skills SHALL be organized as an array of categories, each containing a `name` string and a `skills` string array.

#### Scenario: Skills grouped by category
- **WHEN** the skills data is iterated
- **THEN** each category SHALL have a `name` and a `skills` array of technology names
