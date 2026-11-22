import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/SectionWrapper";
import { Reveal } from "../components/Reveal";
import { AllProjects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export const Route = createFileRoute("/projects")({
  component: () => (
    <div className="w-full max-w-6xl mt-12 mx-auto space-y-10">
      <Section title="Projects" id="projects">
        <p className="max-w-prose text-sm text-teal-700">
          Mostly static UIs so far, but a project is a project.
        </p>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {AllProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 70}>
              <ProjectCard key={p.name} {...p} showDesc />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  ),
});
