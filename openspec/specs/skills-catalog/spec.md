# skills-catalog

## Purpose

Displays skills organized into six categories (Architecture, Frontend, DevOps, Leadership, Systems, CMS), each rendered as a group with a heading and individual skill tag elements flowing horizontally within the container.

## Requirements

### Requirement: Skills grouped by category
The system SHALL display skills organized into their defined categories, each with a category heading and a collection of skill tags.

#### Scenario: All defined categories displayed
- **WHEN** the skills section loads
- **THEN** all categories defined in the translations data SHALL be displayed
- **THEN** each category SHALL show its name as a heading
- **THEN** each category SHALL show its skills as individual tag elements

### Requirement: Skill tags
Individual skills SHALL be rendered as visually distinct tag or badge elements within their category group.

#### Scenario: Skills render as tags
- **WHEN** a skill category is displayed
- **THEN** each skill (e.g., "PHP 8+", "Docker", "Angular") SHALL render as a tag with a consistent visual style
- **THEN** tags SHALL flow horizontally within the category container
