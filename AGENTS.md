# Repository Guidelines

## Project Structure & Module Organization

- Source: `app/` (App Router). Root layout in `app/layout.tsx`, main entry in `app/page.tsx`.
- Styles: `app/globals.css` (Tailwind v4 via `@tailwindcss/postcss`).
- Public assets: `public/` (served from `/`).
- Build artifacts: `.next/` (ignored). TypeScript config in `tsconfig.json` with path alias `@/*`.

## Build, Test, and Development Commands

- `npm run dev`: Start local dev server with Turbopack at `http://localhost:3000`.
- `npm run build`: Production build (Turbopack).
- `npm start`: Run the built app.
- `npm run lint`: Lint with ESLint (Next.js + TypeScript rules).

## Coding Style & Naming Conventions

- Language: TypeScript (`strict: true`). Prefer `.tsx` for React components.
- Indentation: 2 spaces; keep imports ordered and unused code removed.
- Components: PascalCase (`ExampleCard.tsx`), hooks camelCase (`useThing.ts`).
- CSS/Classes: Tailwind utility-first; avoid inline styles when a utility exists.
- Linting: ESLint flat config extends `next/core-web-vitals` and `next/typescript`.

## Testing Guidelines

- No test harness is configured yet. If adding tests, prefer:
  - Unit: Jest + React Testing Library (e.g., `__tests__/component.test.tsx`).
  - E2E: Playwright in `e2e/`.
- Target: key rendering paths and critical utilities; keep tests fast and deterministic.

## Commit & Pull Request Guidelines

- Commits: Imperative mood, concise scope first line (e.g., "Add hero section"), detail in body if needed.
- PRs: Small, focused, with clear description, screenshots/GIFs for UI changes, and steps to verify.
- Link related issues and note any config/env changes. Ensure `npm run lint` passes.

## Security & Configuration Tips

- Secrets: Never commit secrets. Use `.env.local` for sensitive values; for client exposure, prefix with `NEXT_PUBLIC_`.
- Dependencies: Keep to minimal surface area; prefer framework primitives before adding libraries.
- Accessibility: Follow Next.js and WCAG basics (semantic HTML, alt text, focus states).

Example workflow:

```
npm run dev
# edit in app/ (e.g., app/page.tsx)
npm run lint && npm run build && npm start
```
