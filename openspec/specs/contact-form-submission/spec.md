## Requirements

### Requirement: Server action processes form submission
The system SHALL expose a server action that accepts form data (name, email, phone, country, shopType, area, message), validates it server-side, and sends two emails via Resend. The action SHALL return a typed result indicating success or error with a message.

#### Scenario: Successful submission sends two emails
- **WHEN** a user submits the form with valid data (name, email, message filled)
- **THEN** the system sends a notification email to `info@drovar.pl` with all form fields AND a confirmation email to the sender's email address, and returns a success result

#### Scenario: Server-side validation rejects incomplete data
- **WHEN** the server action receives data with empty name, email, or message
- **THEN** it returns an error result without sending any emails

#### Scenario: Server-side validation rejects invalid email
- **WHEN** the server action receives data with a malformed email address
- **THEN** it returns an error result without sending any emails

### Requirement: Honeypot field blocks bots
The system SHALL include a hidden form field (not visible to users via CSS) that is not expected to be filled. If the honeypot field contains a value on submission, the server action SHALL silently discard the submission (return success to avoid revealing the protection).

#### Scenario: Bot fills honeypot field
- **WHEN** a submission includes a non-empty honeypot field value
- **THEN** the server action returns a success result without sending any emails

#### Scenario: Human leaves honeypot empty
- **WHEN** a submission has an empty honeypot field
- **THEN** the server action processes the submission normally

### Requirement: Rate limiting prevents abuse
The system SHALL limit form submissions to a maximum of 3 per IP address within a 15-minute sliding window. Submissions exceeding the limit SHALL return an error result with a rate-limit message.

#### Scenario: User exceeds rate limit
- **WHEN** the same IP address submits the form more than 3 times within 15 minutes
- **THEN** the server action returns an error result indicating rate limiting

#### Scenario: Rate limit resets after window
- **WHEN** an IP address has 3 submissions and 15 minutes pass
- **THEN** the next submission is processed normally

### Requirement: Notification email to admin
The system SHALL send an email to `info@drovar.pl` containing all submitted form fields (name, email, phone, country, shop type, area, message) formatted in a readable layout. The subject SHALL include the sender's name. The from address SHALL be `noreply@drovar.pl`.

#### Scenario: Admin receives complete form data
- **WHEN** a valid form is submitted by "Jan Kowalski"
- **THEN** `info@drovar.pl` receives an email with subject containing "Jan Kowalski" and body containing all form field values

### Requirement: Confirmation email to sender
The system SHALL send a confirmation email to the sender's email address. The email SHALL be in the locale the form was submitted in. The from address SHALL be `noreply@drovar.pl`.

#### Scenario: Sender receives localized confirmation
- **WHEN** a user submits the form from the Polish locale
- **THEN** the sender receives a confirmation email with Polish text

### Requirement: Form displays submission states
The form SHALL display a loading state while the server action is pending, an error message if the action returns an error, and a success message if the action succeeds. The form SHALL be disabled during submission.

#### Scenario: Loading state during submission
- **WHEN** the user clicks submit and the server action is pending
- **THEN** the submit button shows a loading indicator and the form inputs are disabled

#### Scenario: Error state after failure
- **WHEN** the server action returns an error (e.g., rate limit, server error)
- **THEN** the form displays the error message and remains editable

#### Scenario: Success state after sending
- **WHEN** the server action returns success
- **THEN** the form displays a success confirmation message
