import type { Metadata } from "next";

import { PageScaffold } from "@/components/scaffold/page-scaffold";
import { getRouteScaffold } from "@/config/routes";

export const dynamicParams = false;

export const staticAgentIds = ["agentlily_demo_001"] as const;

export function generateStaticParams() {
  return staticAgentIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const route = getRouteScaffold("agent-detail");

  return {
    title: `${route.title}: ${id}`,
    description: `${route.purpose} Agent identifier: ${id}.`,
  };
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageScaffold
      route={getRouteScaffold("agent-detail")}
      dynamicLabel={`/app/agents/${id}`}
    />
  );
}
