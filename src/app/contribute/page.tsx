import type { Metadata } from "next";

import { ContributePage } from "@/features/contribute/components/contribute-page";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Contributor workflow, quality gates, and collaboration guidance for the Lily Protocol frontend.",
};

export default function Contribute() {
  return <ContributePage />;
}
