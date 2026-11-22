import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, SourceCodeIcon } from "@hugeicons/core-free-icons";
import type { Project } from "../data/projects";

type ProjectCardProps = Project & {
  showDesc?: boolean;
};

export function ProjectCard({
  name,
  desc,
  link,
  repo,
  image,
  showDesc = false,
}: ProjectCardProps) {
  return (
    <article className="space-y-2 rounded-md bg-bone-200/50 p-2">
      <div className="flex items-center justify-between">
        <h3 className="font-franc text-sm font-medium text-teal-900 sm:text-base">
          {name}
        </h3>
        <div className="flex items-center gap-2 text-teal-900">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} source code`}
            >
              <HugeiconsIcon icon={SourceCodeIcon} size={18} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${name}`}
            >
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
            </a>
          )}
        </div>
      </div>

      <div
        tabIndex={0}
        role="region"
        aria-label={`${name} preview, scrollable`}
        className="aspect-4/2 overflow-y-auto overscroll-contain rounded-md bg-bone-200 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        <img src={image} alt={name} className="block w-full h-auto" />
      </div>

      {showDesc && desc && (
        <p className="line-clamp-3 text-sm text-teal-700">{desc}</p>
      )}
    </article>
  );
}
