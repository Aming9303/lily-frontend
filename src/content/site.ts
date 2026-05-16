import type { ContentCard, NavigationItem, RepositoryCard } from "@/types/site";

export const siteNavigation = [
  { href: "#architecture", label: "Architecture" },
  { href: "#repositories", label: "Repos" },
  { href: "#contributors", label: "Contributors" },
] as const satisfies readonly NavigationItem[];

export const protocolPillars = [
  {
    title: "Wallet-native agents",
    description:
      "Provision AgentLily instances with Stellar wallets that can receive, hold, and route programmable balances.",
  },
  {
    title: "Autonomous USDC settlement",
    description:
      "Allow agents to execute payments for APIs, tools, and machine-to-machine workflows without manual billing loops.",
  },
  {
    title: "Identity and orchestration",
    description:
      "Coordinate wallet provisioning, payment execution, and agent identity across the full lifecycle.",
  },
] as const satisfies readonly ContentCard[];

export const problemPoints = [
  "Credit-card-first infrastructure is too manual for autonomous software.",
  "AI agents still cannot natively own wallets or settle value on-chain.",
  "Global micro-payments and API purchasing remain awkward to automate.",
  "Delayed settlement adds friction to machine-to-machine commerce.",
] as const;

export const architectureLayers = [
  "Developer Application",
  "Lily SDK",
  "Lily Orchestrator",
  "Wallet Provisioning Service",
  "Payment Execution Engine",
  "AgentLily Identity Layer",
  "Soroban Smart Contract",
  "Stellar Network",
  "Horizon Listener",
  "PostgreSQL Database",
  "API Marketplace",
  "External Tool Providers",
  "AI Model Layer",
  "OpenAI / Claude / Gemini",
] as const;

export const repositories = [
  {
    name: "lily-frontend",
    description: "Dashboard and developer-facing web application",
    status: "This repository",
  },
  {
    name: "lily-backend",
    description: "Agent orchestration, wallet management, and payment services",
    status: "Planned integration surface",
  },
  {
    name: "lily-contracts",
    description: "Soroban smart contracts for settlement and wallet infrastructure",
    status: "Protocol layer",
  },
  {
    name: "lily-sdk",
    description: "SDK for autonomous payment integration in AI applications",
    status: "Developer entrypoint",
  },
  {
    name: "agentlily-runtime",
    description: "Runtime where AgentLily instances execute autonomous actions",
    status: "Execution layer",
  },
] as const satisfies readonly RepositoryCard[];

export const contributionTracks = [
  {
    title: "UI systems",
    description:
      "Build dashboard primitives, states, and responsive layouts contributors can extend without heavy rewrites.",
  },
  {
    title: "Developer onboarding",
    description:
      "Improve setup, docs, examples, and SDK integration pathways so new contributors can ship quickly.",
  },
  {
    title: "Protocol visibility",
    description:
      "Add views for wallets, balances, payments, and settlement traces that connect frontend work to the protocol story.",
  },
] as const satisfies readonly ContentCard[];
