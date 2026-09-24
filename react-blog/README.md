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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

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
