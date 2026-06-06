## ADDED Requirements

### Requirement: Name and role display
The system SHALL display the person's full name, professional role description, and target role with its label.

#### Scenario: Header shows identity
- **WHEN** the page loads
- **THEN** the name "Diego Gonda" SHALL be prominently displayed
- **THEN** the role description SHALL be visible below the name
- **THEN** the target role label and value SHALL be displayed

### Requirement: Profile photo
The system SHALL display a profile photo with accessible alt text.

#### Scenario: Photo with alt text
- **WHEN** the hero section renders
- **THEN** a profile photo SHALL be displayed
- **THEN** the photo SHALL have an `alt` attribute matching the current locale's `photoAlt` text

### Requirement: Contact links
The system SHALL render contact information as clickable links differentiated by type (phone, email, portfolio, LinkedIn).

#### Scenario: Contacts are interactive
- **WHEN** the user clicks a phone contact
- **THEN** the browser SHALL initiate a tel: link
- **WHEN** the user clicks the email contact
- **THEN** the browser SHALL initiate a mailto: link
- **WHEN** the user clicks the portfolio or LinkedIn contact
- **THEN** the link SHALL open in a new tab

### Requirement: Key highlights
The system SHALL display the four key achievement highlights as a visually distinct block.

#### Scenario: Highlights rendered
- **WHEN** the hero section loads
- **THEN** all four highlight items SHALL be displayed with the translated title

### Requirement: Executive snapshot
The system SHALL display the profile summary and keyword tags.

#### Scenario: Snapshot with keywords
- **WHEN** the hero section loads
- **THEN** the profile label and value SHALL be displayed
- **THEN** all eight keywords SHALL be rendered as visual tags

### Requirement: Impact metrics
The system SHALL display the three impact metrics (years, roles, domains), each with a prominent numeric value, a label, and supporting context text.

#### Scenario: Metrics displayed
- **WHEN** the hero section loads
- **THEN** each metric's `value` SHALL be displayed in a large, prominent style
- **THEN** each metric's `label` and `context` SHALL be displayed in a smaller supporting style
