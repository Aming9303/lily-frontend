# Lily Frontend

Frontend for Lily Protocol, the developer-facing web experience for autonomous agent finance infrastructure on Stellar.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-20232A?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Tested-6E9F18?logo=vitest&logoColor=white)
[![CI](https://github.com/lily-protocol/lily-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/lily-protocol/lily-frontend/actions/workflows/ci.yml)
![Docker](https://img.shields.io/badge/Docker-Planned-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-Private-5B5B5B)

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Vitest + Testing Library
- GitHub Actions CI

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Use Node.js `22+`. The repo declares this in `package.json` so local and CI environments stay aligned.

Docker is not configured in this repository yet. The badge above marks it as planned rather than available today.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
npm run check
```

`npm run check` mirrors CI and is the fastest way to validate a contribution before opening a PR.

## Project structure

```text
src/
  app/            App Router routes, metadata, and global styles
  components/     Shared UI primitives
  config/         Site-wide typed configuration and metadata helpers
  content/        Typed site content and project data
  features/       Feature-level page composition and modules
  test/           Shared test setup
.github/
  workflows/      CI automation
  ISSUE_TEMPLATE/ GitHub issue templates
```

## Contributor workflow

1. Pick up a scoped issue or create one using the contributor task template.
2. Keep route files in `src/app` thin and move reusable logic into `src/features`, `src/components`, or `src/config`.
3. Prefer server components by default and only opt into client components when interactivity requires it.
4. Run `npm run check` before opening a pull request.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for workflow expectations, issue triage, and PR guidance.

## Roadmap direction

- Developer dashboard for AgentLily wallet lifecycle
- Payment activity, balances, and settlement monitoring
- SDK onboarding and API marketplace workflows
- Contributor-friendly primitives for future feature work

## CI

GitHub Actions runs linting, type-checking, tests with coverage, and production builds on pushes and pull requests. Each check runs as its own job with `fail-fast` disabled, so you can immediately see exactly what failed without losing the rest of the signal. The workflow also persists `.next/cache` to speed up repeat builds in line with the current Next.js CI caching guidance.

## Notes

This repo uses the `src/` directory convention supported by Next.js 16. Keep App Router routes under `src/app`, central project metadata in `src/config`, and feature-specific composition under `src/features`.
