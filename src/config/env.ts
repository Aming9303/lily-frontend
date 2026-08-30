export type PublicEnvName = "NEXT_PUBLIC_SITE_URL" | "NEXT_PUBLIC_API_BASE_URL";

export interface PublicEnv {
  siteUrl: string;
  apiBaseUrl: string;
}

export function parsePublicEnv(
  source: Record<PublicEnvName, string | undefined>,
): PublicEnv {
  return {
    siteUrl: parseRequiredUrl(
      "NEXT_PUBLIC_SITE_URL",
      source.NEXT_PUBLIC_SITE_URL,
    ),
    apiBaseUrl: parseRequiredUrl(
      "NEXT_PUBLIC_API_BASE_URL",
      source.NEXT_PUBLIC_API_BASE_URL,
    ),
  };
}

function parseRequiredUrl(
  name: PublicEnvName,
  value: string | undefined,
): string {
  if (value === undefined || value.trim() === "") {
    throw new Error(
      `Missing required environment variable ${name}. Copy .env.example to .env.local and set it.`,
    );
  }

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(
      `${name} must be an absolute http(s) URL. Received: ${value}`,
    );
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error(`${name} must use http or https. Received: ${value}`);
  }

  return url.toString().replace(/\/$/, "");
}

export const publicEnv = parsePublicEnv({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
