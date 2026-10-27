# Mario Pure

Omar’s sky-blue-inspired developer portfolio: a personal home for projects, technical interests, and learning by building.

## Stack

Next.js, React, TypeScript, CSS, and Lucide icons. Animation uses CSS and respects the visitor’s reduced-motion setting.

## Run locally

Install Node.js 20 or newer, then run:

```sh
npm install
npm run dev
```

Open the local address printed by Next.js. To check the project and build for production:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Editing content

- **Personal details and social links:** set `contact` in `data/content.ts`. Blank fields are hidden. Once an email is provided, the email and copy buttons become available.
- **Toolbox:** edit the `tools` arrays in `data/content.ts`; add only skills you want to represent as your own.
- **Certificates:** add objects to the `certificates` array in `data/content.ts`. Each accepts a title, issuer, date, optional image path, credential URL, and description. Put image files in `public/` and reference them as `/filename`.
- **Projects:** update descriptions, links, and layout in `app/page.tsx`; Pico feature labels and visit and request counts are in `data/content.ts`. Genuine project screenshots are stored in `public/` and can be replaced as the projects evolve.
- **Colors and styling:** edit semantic color variables at the top of `app/globals.css`. Layout, responsive behavior, and motion are also defined there.

## Deployment

To deploy this Next.js application to a provider that supports Next.js, such as Vercel, import the repository, use the default Next.js build settings, and run `npm run build` before deploying. No environment variables are required.

## Project links

- Pico: https://picompiler.pages.dev/ — source: https://github.com/mztaq/pico
- Dr. Jabr Newton Odyssey: https://amar-abdelhak-ayache.itch.io/newton-saga-drjabr-the-problems-he-faced
