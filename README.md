# nextjs_prac
RSC : React server components introduced by the react in 18 version

- Server components
- Client Components


-Server Compontents

- In nextjs all components are server components by default
- They have the ability to run the task like reading files or fetching data from a database.
- However they don't have the ability to use hooks or handle user interactions

client Components:

- To create to add "use client" at the top of the page
- perform task such that interactions and hooks

Routing:

File system based riuting mechanism
URL paths that user can access in the browser are defined by files and folders in the codebase.


Routing Conventions:

1. All Routes must be place inside the app folder
2. Every file that corresponds to a route must be names page.js or page.tsx
3. Every folder corresponds to a path segment in the browser URL


Dynamic Routes

Catch All Segments


Private Folders:---

A private folder indicates that it is a private implementation detail and should not be considered by the routing system

The folder and all its subordinate are excluded from routing

Prefix the folder name with an underscore

Benefits :
- For seperating the UI logic from the routing logic
- For xonsistently organizing internal files across a project
- For sorting and grouping files in the code editors
- Avoiding potential naming conflicts with future Next.js file conventions


Routes Group:--

Allows us to logically group our routes and project files without affecting the URL path structure


Layout :
A page is UI that is unique to a route
A layout is UI that is shared between multiple pages in the app

How to create Layouts 

1. layout.tsx, layout.js
2. That component should accept a children prop that will be populated withh a child page during rendering











