# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- Next.js 15.5.2 with App Router and Turbopack
- TypeScript with strict mode enabled
- React 19.1.0
- Tailwind CSS v4 with PostCSS
- ESLint with Next.js configuration

## Commands

### Development

```bash
npm run dev      # Start development server with Turbopack
```

### Build & Production

```bash
npm run build    # Build for production with Turbopack
npm run start    # Start production server
```

### Code Quality

```bash
npm run lint     # Run ESLint
npx tsc --noEmit # Type check without emitting files
```

## Architecture

### App Router Structure

- `/app` directory contains the Next.js App Router pages and layouts
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Main page component
- `app/globals.css` - Global styles with Tailwind directives

### TypeScript Configuration

- Path alias `@/*` maps to root directory
- Strict mode enabled for type safety
- Module resolution set to "bundler" for Next.js compatibility

### Styling

- Tailwind CSS v4 configured via PostCSS
- Geist and Geist Mono fonts loaded via next/font/google
