## Requirements

### Requirement: Contact page layout
The system SHALL render a page at `/pl/contact` with two main areas: contact information (phone, email, address) on one side, and the inquiry form on the other. On mobile, contact info SHALL stack above the form.

#### Scenario: Contact page displays info and form
- **WHEN** the contact page loads
- **THEN** contact information and the inquiry form are both visible

#### Scenario: Mobile layout stacks vertically
- **WHEN** viewed on a 375px viewport
- **THEN** contact info appears above the form in a single column

### Requirement: Contact information display
The system SHALL display Drovar's phone number, email address, and physical address. Phone and email SHALL be clickable (`tel:` and `mailto:` links respectively).

#### Scenario: Phone number is clickable
- **WHEN** the user taps the phone number
- **THEN** the device's phone dialer opens with the number pre-filled

### Requirement: Inquiry form fields
The system SHALL render a form with the following fields: Imie (text, required), Email (email, required), Telefon (tel, optional), Kraj (text, optional), Typ sklepu (select dropdown, optional), Powierzchnia sklepu m2 (number, optional), and Wiadomosc (textarea, required). All field labels SHALL come from translation keys. Each input SHALL have an associated `<label>` element.

#### Scenario: Required fields are validated
- **WHEN** the user submits the form with Imie, Email, or Wiadomosc empty
- **THEN** the form does not submit and validation messages are shown on the empty required fields

#### Scenario: Typ sklepu has predefined options
- **WHEN** the user opens the Typ sklepu dropdown
- **THEN** options include: Convenience, Tytoniowy, Spozywczy, Apteka, Siec handlowa, Inny

### Requirement: Form submission shows alert
The system SHALL handle form submission client-side only for MVP. On successful validation, it SHALL display the submitted data in a browser alert or styled confirmation message. No API request SHALL be made.

#### Scenario: Successful submission shows data
- **WHEN** the user fills all required fields and submits
- **THEN** an alert or confirmation displays the submitted form data

#### Scenario: Form resets after submission
- **WHEN** the alert/confirmation is dismissed
- **THEN** all form fields are cleared

### Requirement: All form labels use translations
Every form label, placeholder, validation message, and button text SHALL be rendered via `useTranslations()`. No hardcoded strings SHALL appear in the contact form component.

#### Scenario: Form text comes from translations
- **WHEN** the contact form renders
- **THEN** all labels, placeholders, and the submit button text come from `pl.json`
