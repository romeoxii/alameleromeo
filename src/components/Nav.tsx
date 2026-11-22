import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home02Icon,
  Folder01Icon,
  SmileIcon,
} from "@hugeicons/core-free-icons";

const items = [
  { to: "/", label: "Ụlọ", icon: Home02Icon },
  { to: "/projects", label: "Ọrụ", icon: Folder01Icon },
  { to: "/me", label: "Mụ", icon: SmileIcon },
] as const;

const link =
  "flex h-full items-center gap-2 rounded-md px-3 text-sm text-bone-300 transition-colors duration-75" +
  "hover:bg-teal-700 data-[status=active]:bg-teal-600 data-[status=active]:text-bone-300";

export function Nav() {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 top-3 z-50 mx-auto h-10 w-fit max-w-[calc(100%-2rem)] rounded-md bg-teal-900 p-1 motion-safe:animate-fade-up"
    >
      <ul className="flex h-full items-center gap-1">
        {items.map(({ to, label, icon }) => (
          <li key={to} className="h-full">
            <Link to={to} className={link}>
              <HugeiconsIcon icon={icon} size={15} strokeWidth={2.5} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
