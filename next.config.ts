import type { NextConfig } from "next";

export const legacyRedirects = [
  {
    source: "/dash",
    destination: "/app",
    permanent: true,
  },
  {
    source: "/sign-up",
    destination: "/signup",
    permanent: true,
  },
] as const;

const nextConfig: NextConfig = {
  typedRoutes: true,
  redirects: async () => [...legacyRedirects],
};

export default nextConfig;
