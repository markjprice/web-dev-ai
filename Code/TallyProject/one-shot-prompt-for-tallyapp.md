I am building a Django 6 web application called TallyApp.

The project-brief.md file in the current directory contains the full project brief. The design.md file defines layout, styling, and interaction rules. Follow both.

Before generating any code:

1. Restate the project requirements in your own words.
2. Identify any ambiguities or design decisions that need clarification.
3. List assumptions you will make.
4. Highlight potential complexity risks.

Then:

5. Break the implementation into logical development phases.
6. Propose a Django app structure.
7. Design the data models with fields and relationships.
8. Suggest URL patterns.
9. Outline views and their responsibilities.
10. Define permission rules and enforcement strategy.
11. Explain how surveys become immutable after publishing.
12. Explain aggregation logic for multi-select answers.

Only after completing the above analysis, generate beginner-friendly scaffolding code for:

- models.py
- basic forms
- views
- urls.py
- minimal templates
- static files including CSS and SVG
- basic unit tests
- E2E tests using Playwright

Keep the implementation simple.
Avoid advanced patterns unless clearly justified.
Explain why you choose particular modeling decisions, especially for multiple-choice answers and text responses.
