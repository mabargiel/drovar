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
The system SHALL display Drovar's phone number, email address, physical address, and NIP (tax identification number). Phone and email SHALL be clickable (`tel:` and `mailto:` links respectively). NIP SHALL be displayed as a 4th item with an appropriate icon.

#### Scenario: Phone number is clickable
- **WHEN** the user taps the phone number
- **THEN** the device's phone dialer opens with the number pre-filled

#### Scenario: Email is clickable
- **WHEN** the user taps the email address
- **THEN** the device's email client opens with the address pre-filled

#### Scenario: NIP is displayed
- **WHEN** the contact page loads
- **THEN** the NIP (PL6832109118) is visible as the 4th contact info item

#### Scenario: Contact data is accurate
- **WHEN** the contact page loads
- **THEN** the displayed data matches: phone +48 796 694 327, email info@drovar.pl, address Drovar Sp. z o.o. ul. Sebastiana 12 32-020 Wieliczka, NIP PL6832109118

### Requirement: Inquiry form fields
The system SHALL render a form with the following fields: Imie (text, required), Email (email, required), Telefon (tel, optional), Kraj (text, optional), Typ sklepu (select dropdown, optional), Powierzchnia sklepu m2 (number, optional), and Wiadomosc (textarea, required). All field labels SHALL come from translation keys. Each input SHALL have an associated `<label>` element.

#### Scenario: Required fields are validated
- **WHEN** the user submits the form with Imie, Email, or Wiadomosc empty
- **THEN** the form does not submit and validation messages are shown on the empty required fields

#### Scenario: Typ sklepu has predefined options
- **WHEN** the user opens the Typ sklepu dropdown
- **THEN** options include: Convenience, Tytoniowy, Spozywczy, Apteka, Siec handlowa, Inny

### Requirement: Form submission sends emails
The system SHALL handle form submission via a server action that sends real emails, replacing the browser alert. See `contact-form-submission` capability for full specification.

#### Scenario: Successful submission sends emails
- **WHEN** the user fills all required fields and submits
- **THEN** two emails are sent (admin notification + sender confirmation) and a success message is displayed

#### Scenario: Form resets after submission
- **WHEN** the submission succeeds
- **THEN** a success confirmation is shown (form fields are no longer visible)

### Requirement: All form labels use translations
Every form label, placeholder, validation message, and button text SHALL be rendered via `useTranslations()`. No hardcoded strings SHALL appear in the contact form component.

#### Scenario: Form text comes from translations
- **WHEN** the contact form renders
- **THEN** all labels, placeholders, and the submit button text come from `pl.json`
