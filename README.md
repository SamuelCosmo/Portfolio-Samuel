# Portfolio — Samuel Gutierrez

Personal portfolio built with **Next.js 14**, **React 18**, **TypeScript** and **SCSS modules**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Environment variables

The contact form needs these variables (e.g. in `.env.local`):

```
REACT_APP_API_URL=<your-api-base-url>
REACT_APP_API_KEY=<your-api-key>
```

## Structure

- `src/app` — page, layout and section components (`_components/`)
- `src/shared` — reusable components and SCSS utilities
- `src/config` — external services
- `public` — images, icons, fonts and the downloadable resume
