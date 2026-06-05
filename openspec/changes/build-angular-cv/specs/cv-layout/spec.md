## ADDED Requirements

### Requirement: Single-page vertical layout
The system SHALL render all CV sections in a single scrollable page without client-side routing.

#### Scenario: All sections on one page
- **WHEN** the application loads
- **THEN** all sections (hero, about, experience, skills, education, footer) SHALL be visible in vertical order

### Requirement: Sticky navigation
The system SHALL provide a sticky navigation bar with links to each CV section using fragment identifiers.

#### Scenario: Navigation scrolls to section
- **WHEN** the user clicks a navigation link for "Experience"
- **THEN** the page SHALL smooth-scroll to the experience section

#### Scenario: Active section is highlighted
- **WHEN** the user scrolls past a section heading
- **THEN** the corresponding navigation link SHALL be visually highlighted

### Requirement: Responsive breakpoints
The system SHALL adapt its layout across mobile (< 768px), tablet (768–1024px), and desktop (> 1024px) viewports.

#### Scenario: Mobile layout
- **WHEN** the viewport width is below 768px
- **THEN** sections SHALL render in a single-column layout
- **THEN** the navigation SHALL collapse into a compact form

#### Scenario: Desktop layout
- **WHEN** the viewport width is above 1024px
- **THEN** sections SHALL use multi-column layouts where appropriate
- **THEN** the navigation SHALL display as a horizontal bar

### Requirement: Print styles
The system SHALL apply print-specific styles that produce a clean, A4-optimized layout when printed or saved as PDF.

#### Scenario: Print layout
- **WHEN** the page is printed
- **THEN** the locale toggle and navigation SHALL be hidden
- **THEN** text SHALL use black ink on white background
- **THEN** sections SHALL avoid page breaks in the middle of entries
- **THEN** contact information SHALL be visible

### Requirement: Footer
The system SHALL display a footer with copyright text and a "Designed with" attribution.

#### Scenario: Footer rendered at bottom
- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer SHALL display the translated rights and attribution text
