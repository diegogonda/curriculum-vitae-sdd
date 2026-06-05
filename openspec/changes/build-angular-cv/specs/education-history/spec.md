## ADDED Requirements

### Requirement: Education list
The system SHALL display academic degrees with degree name, period, institution, and description.

#### Scenario: Degrees displayed
- **WHEN** the education section loads
- **THEN** both degrees (Telecommunications Engineering and Professional Training) SHALL be displayed
- **THEN** each SHALL show degree, period, institution, and description

### Requirement: Course list
The system SHALL display professional courses and certifications with course name, period, institution, and description.

#### Scenario: Courses displayed
- **WHEN** the courses section loads
- **THEN** all four recent courses SHALL be displayed
- **THEN** each SHALL show course name, period, institution, and description

### Requirement: Visual distinction between education and courses
Academic degrees and professional courses SHALL be displayed in visually separate sections with distinct titles.

#### Scenario: Education and courses are separate
- **WHEN** the education history section loads
- **THEN** the translated "Education" title SHALL head the academic section
- **THEN** the translated "Courses" title SHALL head the courses section
