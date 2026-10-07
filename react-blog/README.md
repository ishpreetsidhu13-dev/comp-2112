This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To create the project we ran the command below, then hit Enter to accept all default options.  
To create another next.js project, just replace "react-blog" in the command below with a different project name (no spaces).

```bash
npx create-next-app@latest react-blog -yes
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app locally.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Production site at [https://comp2112-react-blog-f26.onrender.com](https://comp2112-react-blog-f26.onrender.com)

## Creating a New Page in Next.js

1. Create a new subfolder under app using all lowercase, separating multiple words with dashes (e.g. "about-us").
2. Create a file called page.tsx in the new folder
3. Use the following template, then add your own JSX markup to the page

```bash
export default function SomePageName() {
  return (
    // markup goes here
  );
}
```
## Creating a Shared Element on All Pages

1. Create a new component tsx file (NOT called page.tsx) in app/components (we had to create components folder first).
2. Import the new component at the top of layout.tsx
3. Render the component in an html-style tag within the <body> element of layout.tsx

## Lesson 3: Props

We used 2 string "props" to pass values between a parent component (about/page.tsx) and a child component (components/technology.tsx).
This lets us set values in the parent and display them in the child.
This makes the child component re-usable and lets us update the markup in 1 place instead of repeating the work.

## Lesson 4: Effect and Context Hooks

We used the Effect hook to update the page title in the browser when each page loads for SEO.

We used the Pathname hook in the navbar to read the current url so we can set the appropriate link as active.

We used the Context hook as a global variable store so we could set a value on the home page, render it in the footer and have it persist from page to page.

These are all client side Hooks and require ```'use client';``` at the top of the file to work.

## Lesson 5

```npm i react-hook-form``` - form validation & processing

After we ran npm audix fix we created an npm compatibility issue.  Fix by changing this in package.json:

```"eslint": "^8.57.0",``` - downgrade eslint back to original version.  audit updates it to v9, which causes conflicts.


