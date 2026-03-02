# TallyApp – Project Brief

## 1. Overview

### Project Goal

TallyApp is a web application that allows approved users to create surveys and publish them publicly. Members of the public can take surveys without registering. Survey creators can view both individual responses and aggregated results.

### Problem It Solves

TallyApp allows individuals or organizations to quickly gather structured feedback using multiple types of survey questions without building custom software.

---

## 2. Target Users

### Survey Creators
- Must register for an account with a valid email address.
- Must be approved by an administrator before creating surveys.
- Can create, publish, and end surveys.
- Can view results (individual and aggregated).

### Survey Respondents
- Do not need to register.
- Can submit responses anonymously.

### Home Page for Target Users
- Describes functionality of website.
- Two large buttons to:
    1. Create a Survey (Register or Log In)
    2. Take a Survey

---

## 3. Core Features (Version 1 Scope)

### Authentication & Authorization
- Define a custom group named SurveyCreator whose membership authorizes survey creation functionality.
- Survey Creator registration.
- Admin approval required before users can create surveys; users are added to SurveyCreator group when approved.
- Login and logout.
- Only members of SurveyCreator group can create surveys.

### Survey Creation
- Create or edit a survey with:
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
4. Matrix ratings with range of ratings e.g. 1 to 5 for one or more items

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
- View report of any duplicate submissions per email/IP/session.

### Graphics, styling and branding
- SVG assets for a logo and a survey sketch illustration used on editing pages.
- The UI uses CSS and SVG files to give TallyApp a subtle brand: gradient header or navbar, colorful logo SVG, light tinted background sections.

### Data Storage
- SQLite database.
- Relational model with clear foreign key relationships.

### Testing
- Basic unit tests for:
  - Model behavior
  - Permissions
  - Publishing rules
  - Survey response submission
- End-to-end tests using Playwright for:
  - Each user story.

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

1. As a user, I want to register so that I can create surveys.
2. As an admin, I want to approve users before they create surveys.
3. As an approved user, I want to create and publish a survey.
4. As a survey creator, I want to end a survey early.
5. As a public visitor, I want to complete a survey without registering.
6. As a survey creator, I want to see both aggregated results and individual responses.

---

## 6. Data Model (High-Level)

### User
- Extends Django’s built-in User model.
- Has a custom group named SurveyCreators whose membership gives access to create, edit and delete survey features.

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
- Only survey creators (and administrators) can view the results of their own surveys.
- Public users can submit responses.
- Surveys cannot be modified after publishing.
- Only admins can approve users to create surveys.

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

