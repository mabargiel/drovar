## MODIFIED Requirements

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

### Requirement: Form submission shows alert
**This requirement is replaced by the `contact-form-submission` capability.** The system SHALL handle form submission via a server action that sends real emails, replacing the browser alert.

#### Scenario: Successful submission sends emails
- **WHEN** the user fills all required fields and submits
- **THEN** two emails are sent (admin notification + sender confirmation) and a success message is displayed

#### Scenario: Form resets after submission
- **WHEN** the submission succeeds
- **THEN** a success confirmation is shown (form fields are no longer visible)
