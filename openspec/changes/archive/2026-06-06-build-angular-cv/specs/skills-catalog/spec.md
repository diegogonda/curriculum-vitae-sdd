## ADDED Requirements

### Requirement: Skills grouped by category
The system SHALL display skills organized into their defined categories, each with a category heading and a collection of skill tags.

#### Scenario: Six categories displayed
- **WHEN** the skills section loads
- **THEN** all six categories (Architecture, Frontend, DevOps, Leadership, Systems, CMS) SHALL be displayed
- **THEN** each category SHALL show its name as a heading
- **THEN** each category SHALL show its skills as individual tag elements

### Requirement: Skill tags
Individual skills SHALL be rendered as visually distinct tag or badge elements within their category group.

#### Scenario: Skills render as tags
- **WHEN** a skill category is displayed
- **THEN** each skill (e.g., "PHP 8+", "Docker", "Angular") SHALL render as a tag with a consistent visual style
- **THEN** tags SHALL flow horizontally within the category container
