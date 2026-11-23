import { HugeiconsIcon } from "@hugeicons/react";
import { CopyrightIcon } from "@hugeicons/core-free-icons";

export function Footer() {
  return (
    <footer className="motion-safe:animate-fade-up w-full max-w-6xl mx-auto h-12 border-t border-bone-200 py-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-start sm:items-center sm:justify-between mt-10">
      <p className="flex items-center gap-1 text-sm text-teal-800">
        <HugeiconsIcon size={14} icon={CopyrightIcon} /> 2026 romeoxii
      </p>
      <ul className="flex items-center gap-3">
        <li className="list-none text-sm text-teal-800 hover:text-teal-400 hover:border-dotted hover:border-b hover:border-teal-400">
          <a href="https://github.com/romeoxii" target="_blank">
            Github
          </a>
        </li>
        <li className="list-none text-sm text-teal-800 hover:text-teal-400 hover:border-dotted hover:border-b hover:border-teal-400">
          <a href="mailto:alameleromeo1@gmail.com">Email</a>
        </li>
        <li className="list-none text-sm text-teal-800 hover:text-teal-400 hover:border-dotted hover:border-b hover:border-teal-400">
          <a href="https://x.com/xii_romeo" target="_blank">
            Twitter
          </a>
        </li>
        <li className="list-none text-sm text-teal-800 hover:text-teal-400 hover:border-dotted hover:border-b hover:border-teal-400">
          <a
            href="https://ng.linkedin.com/in/romeo-alamele-243b793a5"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
