**Extending Ideas**

# Extended website requirements

A visitor should be able to register with the website and store basic profile information, like a contact email address, demographical details, and a list of the surveys that they have taken. This information should follow good practice in allowing the visitor to update and delete their data at any time.

# Extended question item types

The website could support the following additional question types:
•	Multi-line rich text. (Either provide a toolbar or allow markdown syntax)
•	Multiple choice (one selection). Shows radio buttons or a dropdown list
•	Multiple choice (multiple selection). Shows check boxes or a dropdown list of checkboxes
•	Rating (five stars with half values)
•	Rating (customizable shape and maximum number of values). Choice to show as graphics or slider
•	Matrix of radio buttons
•	Clicking a position on an image
•	Ranking a list of items

Each item type should allow a rich text question for each item and allow arbitrary rich text and images throughout a survey.
SurveyMonkey keeps the cool item types for the paid tiers, as shown in *Figure 13.3*:
![]()
*Figure 13.3: Upgrade SurveyMonkey to unlock most item types*

# Extended survey design requirements

The minimal product stores the surveys and their question items but does not provide an easy way to create or edit them. We could provide a website or an app to enable someone to register an account and manage their own surveys and question items.

This will require authentication and authorization checks. The create and edit functionality could get quite complex because showing a question item is easier than providing an editing experience for one.

> **Prompt**: Explain how Django’s Group and Permission system works internally.
> https://github.com/markjprice/web-dev-ai/blob/main/prompts/ch13-env/ch13-05.md

Either a website or app should provide a friendly survey creation and editing experience that closely matches what the survey taker would experience. In other words, a what-you-see-is-what-you-get editing experience.

For a survey tool that will be sold commercially, the organizations will want to brand their surveys with logos, images, colors, and so on.

> **Prompt**: How would the TallyApp scope change if it were a paid SaaS product?
> https://github.com/markjprice/web-dev-ai/blob/main/prompts/ch13-env/ch13-06.md

# Extended data storage requirements
Even with a minimal product, the data storage requirements need to be flexible enough to store multiple different item types, a flexible number of items per survey, and the responses when someone takes a survey.

The main extended addition might be storing pre-created analysis data to improve performance, especially in a NoSQL cloud data storage example where each survey response is stored as a separate document.

# Extended analysis app requirements

If you have data science skills, then you could integrate the machine learning (ML) libraries to add ML algorithms to process survey results to reveal interesting insights that humans might overlook.

> **Prompt**: What are common signs of feature creep in small web projects, and how can I prevent them? Please give me some real-world examples of MVP vs V1 vs V2 scope in SaaS products.
> https://github.com/markjprice/web-dev-ai/blob/main/prompts/ch13-env/ch13-07.md
