# klys.dev Portfolio

Personal portfolio website deployed on GitHub Pages.

## Repository Layout

- `website/`: source React app (edit here)
- Root (`index.html`, `assets/`, `projects.json`, etc.): generated static output used by GitHub Pages

Important: root static files are build artifacts. Make code/content changes in `website/`, then sync build output to root.

## Quick Start

```bash
cd website
npm install
npm run dev
```

Local dev server: `http://localhost:5173`

## Build and Publish Files to Root

From repository root:

```bash
./sync-gh-pages.sh
```

This script:
1. Builds the React app from `website/`
2. Syncs `website/dist/` into repository root (replace mode)
3. Preserves `.git/`, `website/`, `CNAME`, `README.md`, and the script itself

## Content Files (JSON)

These files power the site content:

- `website/public/projects.json`
- `website/public/professional-experience.json`
- `website/public/academic-credentials.json`

Resume file:

- `website/public/Junior_Jimenez_Resume.pdf`

## Main Routes

- `/` About
- `/projects` Project portfolio
- `/professional-experience` Professional Experience
- `/academic-credentials` Academic Credentials

## Deployment (GitHub Pages)

1. Update source/content in `website/`
2. Run `./sync-gh-pages.sh`
3. Commit and push root + `website` changes
4. GitHub Pages serves from repository root
