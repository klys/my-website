# Website App (React + Vite)

This folder contains the source code for the portfolio site.

## Stack

- React 19
- React Router 7 (`createHashRouter`)
- Vite
- Tailwind CSS

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Development Workflow

1. Implement UI/routes/components in `app/`
2. Update content in `public/*.json`
3. Build locally with `npm run build`
4. From repo root, run `../sync-gh-pages.sh` to publish build output to GitHub Pages root

## App Structure

- `app/routes.jsx`: route registration
- `app/layout.jsx`: top-level navigation/header
- `app/about/`: about page
- `app/projects/`: projects page and filters
- `app/professional-experience/`: professional experience page
- `app/academic-credentials/`: academic credentials page
- `app/routes/`: route wrapper components (meta + page mounting)

## Data-Driven Content

Public JSON files are fetched at runtime by page components:

- `/projects.json`
- `/professional-experience.json`
- `/academic-credentials.json`

Keep object shapes consistent with current components:

- Projects expect: `id`, `title`, `image`, `href`, `description`, `date`, `datetime`, `categories[]`, `author`
- Experience expects: `id`, `title`, `href`, `description`, `date`, `datetime`, `categories[]`, `company`
- Credentials expect: `id`, `title`, `description`, `date`, `datetime`, `categories[]`, `institution`

## Notes

- Resume navigation points to `/Junior_Jimenez_Resume.pdf`.
- If UI behaves inconsistently when filtering lists, ensure item IDs are unique in JSON data.
