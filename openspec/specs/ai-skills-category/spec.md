## ADDED Requirements

### Requirement: AI skills category
The system SHALL display a seventh skills category dedicated to AI, with the name "IA / AI" in Spanish and "AI" in English.

#### Scenario: AI category displayed
- **WHEN** the skills section loads
- **THEN** a category with the name "IA / AI" (es) or "AI" (en) SHALL be displayed
- **THEN** it SHALL appear as the last category in the skills section

### Requirement: AI skill tags
The AI category SHALL contain skill tags for SDD, prompting, LLMs, and AI-assisted development.

#### Scenario: AI skills render as tags
- **WHEN** the AI category is displayed
- **THEN** skills "SDD (Spec-Driven Development)", "Prompt Engineering", "LLMs (ChatGPT, Claude)" and "AI-assisted development (Copilot, Cursor, OpenCode)" SHALL render as tag elements
- **THEN** tags SHALL follow the same visual style as other skill tags
