import { ArchitectureSection } from "./architecture-section";
import { ContributorsSection } from "./contributors-section";
import { HomeHero } from "./home-hero";
import { ProblemSection } from "./problem-section";
import { RepositoriesSection } from "./repositories-section";

export function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8">
      <HomeHero />
      <ProblemSection />
      <ArchitectureSection />
      <RepositoriesSection />
      <ContributorsSection />
    </main>
  );
}
