# TallyApp Feature Specification

## URL Shortener

## Goal

Allow authenticated users to create short URLs that redirect to longer
links inside TallyApp. The primary use case is generating short links
for surveys so they can be shared easily in emails, presentations, or
printed materials.

Example:

Long URL:
https://tallyapp.example.com/surveys/8e5a4c39-2f4d-4b9e-bbfa-2c10a96d21fd/take/

Short URL: https://tallyapp.example.com/s/abc123

## Non-Goals

To keep the first version of this feature small and manageable, the
following capabilities are explicitly excluded:

-   No analytics tracking (e.g., click counts or visitor data)
-   No expiration dates for links
-   No custom aliases for short codes
-   Only authenticated users can create short links

## User Stories

-   As a logged-in user, I can create a short link for a survey URL.
-   As a logged-in user, I can view a list of the short links I created.
-   As any visitor, I can visit a short URL and be redirected to the
    target page.

## Acceptance Criteria

-   When a valid URL is submitted, a short code is generated.
-   The short code must be unique.
-   Visiting `/s/<code>` redirects to the stored target URL.
-   A user can only see short links they created.
-   If a short code does not exist, the system returns a **404 Not
    Found** response.

## Data Model

### ShortLink

  Field        Type               Description
  ------------ ------------------ -------------------------------------
  id           Primary Key        Internal identifier
  owner        ForeignKey(User)   Creator of the short link
  target_url   URLField           The original destination URL
  code         CharField(10)      Unique short identifier
  created_at   DateTimeField      Timestamp when the link was created

### Constraints

-   `code` must be unique.
-   Codes should be randomly generated using alphanumeric characters.
-   Links are deleted if the owning user is deleted.

## URL Structure

Short URLs follow this format:

/s/`<code>`{=html}

Example:

/s/abc123

The route should resolve the short code and redirect to the stored
target URL.

## Error Handling and Edge Cases

-   If a short code does not exist, return HTTP 404.
-   If the target URL is invalid during creation, display form
    validation errors.
-   Only authenticated users may create short links.
-   Users cannot view or manage short links created by other users.

## Verification Steps

The feature can be verified using the following methods:

1.  Run automated unit tests.
2.  Create a short link through the web interface.
3.  Visit the generated short URL and confirm it redirects correctly.
4.  Attempt to visit a non-existent code and confirm a 404 response is
    returned.

## Implementation Outline

1.  Create a Django app named `shortlinks`.
2.  Define the `ShortLink` model.
3.  Generate and apply migrations.
4.  Create views for:
    -   Creating short links
    -   Redirecting short links
5.  Add URL routes for `/s/<code>`.
6.  Create a simple form to generate short links.
7.  Write unit tests verifying redirect behavior and permissions.
