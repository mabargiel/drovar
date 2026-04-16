## Requirements
### Requirement: Contact page layout
The system SHALL render a page at `/{locale}/contact` with two main areas: contact information (shared details + two locations + their maps) on one side, and the inquiry form on the other. On mobile, contact info SHALL stack above the form. The two locations within the info area SHALL stack vertically in a single column at all viewport sizes.

#### Scenario: Contact page displays info and form
- **WHEN** the contact page loads
- **THEN** contact information (with both locations and maps) and the inquiry form are both visible

#### Scenario: Mobile layout stacks vertically
- **WHEN** viewed on a 375px viewport
- **THEN** contact info appears above the form in a single column, with the two locations also stacked one above the other

#### Scenario: Desktop layout
- **WHEN** viewed on a 1280px viewport
- **THEN** contact info occupies `lg:col-span-2` on the left and the form occupies `lg:col-span-3` on the right; both locations stack within the left column

### Requirement: Contact information display
The system SHALL display Drovar's shared contact details (phone, email, NIP) once at the top of the contact info area, followed by two physical locations stacked vertically. Each location SHALL display a translated role label, the company name, the street, and the city line, followed by a static map image for that location. Phone and email SHALL be clickable (`tel:` and `mailto:` links). NIP SHALL appear with the existing icon. Both locations SHALL share the same phone, email, and NIP.

#### Scenario: Phone number is clickable
- **WHEN** the user taps the phone number
- **THEN** the device's phone dialer opens with the number pre-filled

#### Scenario: Email is clickable
- **WHEN** the user taps the email address
- **THEN** the device's email client opens with the address pre-filled

#### Scenario: NIP is displayed
- **WHEN** the contact page loads
- **THEN** the NIP (PL6832109118) is visible alongside phone and email at the top of the info area

#### Scenario: Headquarters location is displayed
- **WHEN** the contact page loads
- **THEN** the role label (translated, e.g., "Siedziba" in Polish) is visible above the company name "Drovar Sp. z o.o.", street "ul. Sebastiana 12", and city line "32-020 Wieliczka"

#### Scenario: Production location is displayed
- **WHEN** the contact page loads
- **THEN** the role label (translated, e.g., "Biura, magazyn, produkcja" in Polish) is visible above the company name "Drovar Sp. z o.o. (Fabryka Mebli „Ryś" Hala N2)", street "Polanka 287", and city line "32-400 Myślenice, Polska"

#### Scenario: Both locations share contact details
- **WHEN** the contact page loads
- **THEN** the phone, email, and NIP appear exactly once and apply to both locations

#### Scenario: Each location has its own map below it
- **WHEN** the contact page loads
- **THEN** a map image specific to that location is visible directly below each location's address text

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

