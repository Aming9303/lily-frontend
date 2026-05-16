import { architectureLayers } from "@/content/site";

const highlightLayers = new Set([
  "Lily SDK",
  "Lily Orchestrator",
  "Payment Execution Engine",
  "Stellar Network",
]);

export function ArchitectureDiagram() {
  return (
    <div className="shell grid-lines rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {architectureLayers.map((layer) => {
          const isHighlighted = highlightLayers.has(layer);

          return (
            <div
              key={layer}
              className={`rounded-[1.5rem] border p-4 transition-transform duration-200 hover:-translate-y-0.5 ${
                isHighlighted
                  ? "border-[var(--color-accent)] bg-[rgba(239,131,84,0.12)]"
                  : "border-[var(--color-line)] bg-[rgba(255,255,255,0.68)]"
              }`}
            >
              <p className="eyebrow mb-3 text-[var(--color-muted)]">Node</p>
              <p className="text-lg font-medium text-[var(--color-ink)]">
                {layer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
