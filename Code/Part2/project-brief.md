# TallyApp – Project Brief

## 1. Overview

### Project Goal

TallyApp is a web application that allows approved users to create surveys and publish them publicly. Members of the public can take surveys without registering. Survey creators can view both individual responses and aggregated results.

### Problem It Solves

TallyApp allows individuals or organizations to quickly gather structured feedback using multiple types of survey questions without building custom software.

---

## 2. Target Users

### Survey Creators
- Must register for an account.
- Must be approved by an administrator before creating surveys.
- Can create, publish, clone, and end surveys.
- Can view results (individual and aggregated).

### Survey Respondents
- Do not need to register.
- Can submit responses anonymously.
- May optionally provide an email identifier.

---

## 3. Core Features (Version 1 Scope)

### Authentication & Authorization
- User registration.
- Admin approval required before users can create surveys.
- Login and logout.
- Only approved users can create surveys.

### Survey Creation
- Create a survey with:
  - Title
  - Description
  - Start date
  - Optional end date
  - Publish/unpublish status
  - “Show on homepage” flag (default: true)

- Surveys cannot be edited after publishing.
- Surveys can be cloned to create a new draft.
- Surveys can be ended early.
- Surveys may be open-ended (no end date).
- Surveys consist of zero, one or more question items that can be added, edited, or removed via the survey edit page.

### Question Types
Each survey can contain multiple questions of the following types:

1. Multiple choice – single answer
2. Multiple choice – multiple answers
3. Text input (free-form)

### Public Survey Access
- Public homepage lists published surveys (if “Show on homepage” is true) with a public URL to take the survey.
- Surveys support pagination on list views.
- Public users can submit responses.
- Surveys may display results “to date.”
 
### Results
Survey creators can:
- View aggregated results.
- View individual responses.
- View responses even while survey is still open.
- View pie and bar charts for suitable results.

### User Interface Styling
- SVG assets for a logo and a survey sketch illustration used on editing pages.
- The UI uses Pico.css as a baseline, plus a small override file to give TallyApp a subtle brand: gradient header or navbar, colorful logo SVG, light tinted background sections.

### Data Storage
- SQLite database.
- Relational model with clear foreign key relationships.

### Testing
- Basic unit tests for:
  - Model behavior
  - Permissions
  - Publishing rules
  - Survey response submission

---

## 4. Non-Goals (Out of Scope)

- No payments.
- No social authentication.
- No real-time updates (no WebSockets).
- No advanced analytics.
- No export to CSV.
- No REST API.
- No role system beyond admin approval and standard user.


---

## 5. User Stories

- As a user, I want to register so that I can create surveys.
- As an admin, I want to approve users before they create surveys.
- As an approved user, I want to create and publish a survey.
- As a survey creator, I want to clone an existing survey.
- As a survey creator, I want to end a survey early.
- As a public visitor, I want to complete a survey without registering.
- As a survey creator, I want to see both aggregated results and individual responses.

---

## 6. Data Model (High-Level)

### User
- Uses Django’s built-in User model.
- Has an additional flag indicating approval status.

### Survey
- Creator (ForeignKey to User)
- Title
- Description
- Start date
- Optional end date
- Published flag
- Show on homepage flag
- Created timestamp
- Ended early flag (optional)

### Question
- Survey (ForeignKey)
- Text
- Question type (single choice, multiple choice, text)
- Order field

### Choice
- Question (ForeignKey)
- Text
- Order field

### Response
- Survey (ForeignKey)
- Optional email identifier
- Submitted timestamp

### Answer
- Response (ForeignKey)
- Question (ForeignKey)
- Selected choice(s) (ManyToMany or intermediate model as appropriate)
- Text answer (for text questions)

---

## 7. Technical Constraints

- Python 3.14
- Django 6.x
- SQLite database
- Clean, modern, responsive UI
- Server-rendered templates
- No JavaScript frameworks required

---

## 8. Security & Permissions

- Only approved users can create surveys.
- Only survey creators can view their own results.
- Public users can submit responses.
- Surveys cannot be modified after publishing.
- Only admins can approve users.

---

## 9. Definition of Done

- Users can register and log in.
- Admin can approve users.
- Approved users can create and publish surveys.
- Public users can submit responses.
- Survey creators can view results.
- Pagination works.
- Basic unit tests pass.
- Application runs locally using SQLite without errors.

---

## 10. Future Enhancements (Not Version 1)

- CSV export
- More advanced visual analytics
- Survey scheduling automation
- Email invitations
- API endpoints
- Role-based permissions beyond basic approval

