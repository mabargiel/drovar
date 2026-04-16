## MODIFIED Requirements

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
