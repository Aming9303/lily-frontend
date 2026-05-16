import type { Metadata } from "next";

import type { SitePage, SiteRoute } from "@/types/site";

export const routes = {
  home: "/",
  contribute: "/contribute",
} as const satisfies Record<string, SiteRoute>;

export const siteConfig = {
  name: "Lily Protocol",
  shortName: "Lily",
  description:
    "Autonomous agent finance infrastructure on Stellar for programmable wallets, real-time USDC payments, and machine-to-machine settlement.",
  tagline: "The financial layer for autonomous software agents on Stellar.",
  url: "https://lilyprotocol.dev",
  keywords: [
    "Stellar",
    "Soroban",
    "USDC",
    "AI agents",
    "autonomous payments",
    "agent finance",
    "web3",
    "open source",
  ],
  pages: [
    { path: routes.home, priority: 1 },
    { path: routes.contribute, priority: 0.8 },
  ] as const satisfies readonly SitePage[],
} as const;

export function createSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.tagline,
      type: "website",
      siteName: siteConfig.name,
      url: siteConfig.url,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.tagline,
    },
  };
}

export function getAbsoluteUrl(path: SiteRoute): string {
  if (path === routes.home) {
    return siteConfig.url;
  }

  return new URL(path, siteConfig.url).toString();
}
