import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Section } from "../components/SectionWrapper";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "@tanstack/react-router";
import { WorkExperiences } from "../components/Experiences";
import { Reveal } from "../components/Reveal";
import { Skills } from "../components/Skills";
import { GitHubCalendar } from "react-github-calendar";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="w-full max-w-6xl mt-12 mx-auto space-y-10">
      <Hero />
      <Skills />
      <Section title="Projects" id="projects">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <ProjectCard key={p.name} {...p} />
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="py-2 rounded-md px-3 text-sm text-bone-300 hover:bg-teal-700 bg-teal-600 hover:text-bone-300 transition-colors duration-75 active:scale-105"
          >
            All projects
          </Link>
        </div>
      </Section>
      <WorkExperiences />

      <GitHubCalendar
        username="romeoxii"
        colorScheme="light"
        theme={{
          light: ["#f2e1bf", "#a7cdc4", "#438c7d", "#0f5649", "#012a23"],
        }}
        blockSize={11}
      />
    </div>
  ),
});
