import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://lilyprotocol.dev");
vi.stubEnv("NEXT_PUBLIC_API_BASE_URL", "https://api.lilyprotocol.dev");
