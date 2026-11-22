import { Section } from "./SectionWrapper";
import { Reveal } from "./Reveal";

type Job = {
  company: string;
  image: string;
  link: string;
  role: string;
  dates: string;
};

const prevJobs: Job[] = [
  {
    company: "EBIS",
    image: "/EBIS.png",
    link: "https://www.linkedin.com/company/enterprise-business-info-systems-ebis/",
    role: "Software developer",
    dates: "Jun 2026 - Oct 2026",
  },
  {
    company: "TTS",
    image: "/TTS.png",
    link: "https://www.linkedin.com/company/trailblazing-technology-solutions/",
    role: "Frontend developer",
    dates: "Jan 2026 - Oct 2026",
  },
];

export function WorkExperiences() {
  return (
    <Section title="Work experiences" id="experiences" count={prevJobs.length}>
      <ul>
        {prevJobs.map((pj, i) => (
          <Reveal key={pj.company} delay={(i % 2) * 80}>
            <li
              key={pj.company}
              className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-0.5 border-b border-bone-300 py-3
                 sm:grid-cols-[1fr_1.5fr_auto]"
            >
              <div className="flex items-center gap-2">
                <div className="p-0.5 bg-bone-300 rounded-md h-10 w-10">
                  <img
                    src={pj.image}
                    alt={pj.company}
                    className="h-full w-full rounded-md"
                  />
                </div>
                <a
                  href={pj.link}
                  target="_blank"
                  className="font-medium text-teal-900"
                >
                  {pj.company}
                </a>
              </div>

              <span className="order-3 col-span-2 text-sm text-teal-700 sm:order-0 sm:col-span-1">
                {pj.role}
              </span>
              <span className="text-sm text-teal-700">{pj.dates}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
