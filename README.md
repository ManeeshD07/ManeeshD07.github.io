# Lightweight React Portfolio

This project is a minimal-yet-polished React + Vite starter tuned for personal portfolios. Content lives in one file, the layout leans on utility-style CSS, and the structure is intentionally simple so you can paste in paragraphs, links, and photography without wiring up a CMS first.

## Quick start

```bash
cd base-portfolio
npm install
npm run dev
```

Visit the URL shown in the terminal (usually `http://localhost:5173`) to preview changes.

## Where to put your content

- `src/content.js` – update the `profile`, `projects`, `experience`, `resources`, `contact`, and `gallery` objects/arrays with your real data. Each section in the UI pulls directly from these plain objects, so no React knowledge is required to start customizing.
- `src/App.jsx` – contains the layout. Tweak copy, add/remove sections, or drop in custom components. Everything is written with functional components and small helpers so you can rearrange without digging through props.
- `src/App.css` – controls local section styling (hero, cards, grids, buttons). Edit colors, spacing, or add new utility classes here.
- `src/index.css` – global tokens (fonts, background, color variables, resets).
- `public/` – drop any static assets here (portraits, logos, PDFs). Reference them with `/filename.jpg` or import them inside components.

## Adding photos and files

1. Place your images or documents in `public/`.
2. Update the `gallery` array in `src/content.js` with the right filenames:

```js
gallery: [
  { alt: 'Desk setup', url: '/studio.jpg' },
  { alt: 'Workshop snapshot', url: '/workshop.png' },
]
```

3. Swap CTA links (`resources` array) to point to local files such as `/resume.pdf`.

## Build & deploy

```bash
npm run build    # creates the production build in dist/
npm run preview  # optional: serve the production build locally
```

Deploy the `dist/` folder to your host of choice (Netlify, Vercel, GitHub Pages, etc.). Because it is a static React app, no extra server configuration is required.

## MCP server reference

This workspace is already wired to an MCP server so it can be re-used in new sessions without reconfiguration:

- Config file: `.vscode/mcp.json`
- Server name: `shadcn`
- Invocation: `npx shadcn@latest mcp`

Whenever you open a fresh session, use the same config file (or copy this section) so the Codex CLI knows to spin up the `shadcn` MCP server and expose its resources.
