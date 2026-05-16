import { SectionHeading } from "@/components/ui/section-heading";

import { ArchitectureDiagram } from "./architecture-diagram";

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="shell rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10"
    >
      <SectionHeading
        eyebrow="Architecture"
        title="A frontend that can grow with the protocol stack"
        description="The landing page now reflects the major layers contributors will build around next: orchestration, wallet provisioning, payment execution, and the developer-facing dashboard surfaces that tie them together."
      />
      <div className="mt-8">
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
