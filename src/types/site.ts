export type NavigationItem = {
  readonly href: `#${string}`;
  readonly label: string;
};

export type ContentCard = {
  readonly title: string;
  readonly description: string;
};

export type RepositoryCard = {
  readonly name: string;
  readonly description: string;
  readonly status: string;
};

export type SiteRoute = "/" | "/contribute";

export type SitePage = {
  readonly path: SiteRoute;
  readonly priority: number;
};
