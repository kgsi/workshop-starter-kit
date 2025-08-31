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

## Communication / Output

- 既定の応答言語: 日本語。
- エージェントは、特段の指定がない限り、すべての出力（説明、要約、手順、コメント等）を日本語で返してください。
- 英語や他言語での出力が必要な場合は、明示的な指示があるときのみ切り替えます。

## SmartHR UI Coding Notes (ui-coding scope)

- Scope: All Figma-driven implementation and adjustments must be made only under `app/ui-coding/`. Do not change shared app code outside this directory unless explicitly approved.
- Imports: Use `import { ... } from 'smarthr-ui'`. Global stylesheet `smarthr-ui/smarthr-ui.css` is already imported in `app/layout.tsx`.
- Theming: Wrap pages with `ThemeProvider` and `createTheme()` from `smarthr-ui` when needed. Prefer default theme unless the design specifies custom tokens.
- Component-first: Prefer SmartHR UI components over custom HTML/CSS where equivalents exist (e.g., `AppHeader`, `AppNavi`, `StatusLabel`, `Heading`, `TextLink`, `Button`, form controls). Compose components rather than re‑implementing base patterns.
- Layout styling: Use Tailwind utilities for layout, spacing, and shadows that are not provided via component props. Avoid custom inline styles when a utility exists.
- Semantics & a11y: Use semantic elements (e.g., `nav`, `main`) where appropriate; pass accessible labels/`aria-` props to interactive components. Ensure focus states remain visible.
- Icons: Use SmartHR UI’s provided icon system when available; avoid bringing in new icon libraries. If an icon is missing, prefer placeholder text/emoji or simple SVG in `ui-coding` until replaced.
- Measurements: When reproducing Figma, prefer SmartHR UI spacing/typography defaults; only hardcode widths/heights if necessary (e.g., container width `1184px` in the provided design).
- No new deps: Do not add dependencies to recreate visuals; rely on SmartHR UI + Tailwind v4 already configured.
- File naming: Keep React components in PascalCase, hooks in camelCase; keep code minimal and remove unused imports.

Context source: Component usage and patterns are based on SmartHR UI’s component library (e.g., `AppHeader`, `AppNavi`, `StatusLabel`, `Heading`, `TextLink`) and existing project setup. If deeper architectural guidance from internal docs is required, mirror: component-first composition, central theming via `ThemeProvider`, and consistent tokens/spacing; then refine per official docs when accessible.

### Base and Layout Components

- Base: Use `Base` for card-like content containers to provide consistent inner spacing between border and content. Prefer `Base` over ad-hoc `div` with padding/shadow when the design calls for a white panel. (MCP: `Base`, category: Layout, desc: 境界とコンテンツの間の余白)
- BaseColumn: Pair with `Base` when vertically arranging content inside a base panel. (MCP: `BaseColumn`)
- Layout primitives (all from `smarthr-ui`):
  - Layout: Generic page layout helper. (MCP: `Layout`)
  - Container: Outer container with responsive block padding for narrow screens. (MCP: `Container`)
  - Stack: Vertical spacing between children. (MCP: `Stack`)
  - Cluster: Inline cluster with gaps/wrap. (MCP: `Cluster`)
  - Sidebar: Sidebar/content split with min-width controls. (MCP: `Sidebar`)
  - Center: Centered content with optional min-height. (MCP: `Center`)
  - Reel: Horizontal reel for scrollable items. (MCP: `Reel`)
  - BottomFixedArea / FloatArea: Fixed or floating action areas for primary actions. (MCP: `BottomFixedArea`, `FloatArea`)
- AppHeader vs Header: Use `AppHeader` for app shell headers. `Header` is a generic layout header. (MCP: `AppHeader`, `Header`)

Usage guidance:
- Compose `Base` + `Stack`: For content sections, wrap with `<Base>` and stack inner elements with `<Stack>` for consistent vertical rhythm, rather than manual margins.
- Content width: When Figma specifies a fixed content width (e.g., 1184px), center with Tailwind (`max-w-[1184px] mx-auto`) or use `Container` depending on responsive needs.
- Navigation: Use `AppNavi` for primary nav; pass the `current` state for the active route.
