## ADDED Requirements

### Requirement: About me section
The system SHALL render the "About Me" section with a summary sentence, a descriptive paragraph, and four bullet points.

#### Scenario: About me content displayed
- **WHEN** the about me section is visible
- **THEN** the translated summary, content, and all four points SHALL be displayed

### Requirement: Experience timeline
The system SHALL render primary professional experience as a vertical timeline ordered by date (most recent first).

#### Scenario: Timeline ordered by recency
- **WHEN** the experience section loads
- **THEN** the most recent role (Recalvi Parts, 2022–present) SHALL appear first
- **THEN** the oldest role (Spetel Galicia, 2009) SHALL appear last

### Requirement: Narrative display per role
Each primary experience entry SHALL display the company, period, position, and the Challenge/Action/Impact as a cascading visual sequence.

#### Scenario: Narrative rendered as three phases
- **WHEN** a primary experience entry is displayed
- **THEN** the Challenge text SHALL be displayed first in the narrative block
- **THEN** the Action text SHALL be displayed below the Challenge
- **THEN** the Impact text SHALL be displayed below the Action
- **THEN** there SHALL be a visual connector (line or arrow) between phases

### Requirement: Primary vs supporting visual distinction
Primary roles SHALL receive the full narrative treatment. Supporting roles SHALL be rendered as a compact list below the timeline.

#### Scenario: Supporting roles are compact
- **WHEN** the experience section loads
- **THEN** entries with `roleType: 'supporting'` SHALL appear in a separate compact list
- **THEN** supporting roles SHALL display company, period, position, and description
- **THEN** supporting roles SHALL NOT display the Challenge/Action/Impact cascade

### Requirement: Role badges
Each entry SHALL display a visual badge indicating whether it is a primary or supporting role.

#### Scenario: Role type indicated
- **WHEN** an entry has `roleType: 'primary'`
- **THEN** it SHALL display the translated "Primary Role" label
- **WHEN** an entry has `roleType: 'supporting'`
- **THEN** it SHALL display the translated "Supporting Role" label
