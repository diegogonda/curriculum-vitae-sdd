# internationalization

## Purpose

Provides reactive locale management via a root-level LocaleService with a writable signal, computed translation selection, and a UI toggle that switches between Spanish and English without page reload.

## Requirements

### Requirement: Language state via signal
The system SHALL provide a `LocaleService` with a writable `signal<'es'|'en'>` representing the current locale, provided at root level.

#### Scenario: Default locale is Spanish
- **WHEN** the application starts
- **THEN** the locale signal SHALL default to `'es'`

#### Scenario: Locale can be switched
- **WHEN** the locale signal is set to `'en'`
- **THEN** all bound UI SHALL reflect English content
- **WHEN** the locale signal is set back to `'es'`
- **THEN** all bound UI SHALL reflect Spanish content

### Requirement: Computed translation selection
The system SHALL derive the active translation object via a `computed` signal that reads `translations[currentLocale()]`.

#### Scenario: Computed signal updates on locale change
- **WHEN** the locale signal changes from `'es'` to `'en'`
- **THEN** the computed translation signal SHALL return `translations.en` without a page reload

### Requirement: Locale toggle component
The system SHALL provide a UI control that allows the user to switch between Spanish and English.

#### Scenario: Toggle switches language
- **WHEN** the user clicks the locale toggle
- **THEN** the locale signal SHALL toggle between `'es'` and `'en'`
- **THEN** the toggle SHALL visually indicate the active language

### Requirement: No page reload on switch
Changing the locale SHALL NOT trigger a full page reload or navigation.

#### Scenario: Instant language switch
- **WHEN** the user switches locale
- **THEN** the page SHALL NOT reload
- **THEN** visible text SHALL update within the same render frame
