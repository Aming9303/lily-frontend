export const contributorChecklist = [
  "Use Node.js 22 or newer.",
  "Install dependencies with npm install.",
  "Run npm run dev while building locally.",
  "Run npm run check before opening a pull request.",
] as const;

export const contributorWorkflow = [
  "Create a focused branch for one piece of work.",
  "Keep route files in src/app mostly compositional.",
  "Move reusable content or sections into src/components, src/features, and src/content.",
  "Update docs when contributor workflow or product behavior changes.",
] as const;

export const validationCommands = [
  "npm run lint",
  "npm run typecheck",
  "npm run test:run",
  "npm run build",
  "npm run check",
] as const;
