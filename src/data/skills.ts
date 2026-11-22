export type Group = "Frontend" | "Backend" | "Tools" | "Database";

export const groups: Group[] = ["Frontend", "Backend", "Tools", "Database"];

export const groupStyles: Record<Group, { pill: string; dot: string }> = {
  Frontend: {
    pill: "bg-teal-100 text-teal-800 border-teal-200",
    dot: "bg-teal-500",
  },
  Backend: {
    pill: "bg-magenta-100 text-magenta-800 border-magenta-200",
    dot: "bg-magenta-600",
  },
  Tools: {
    pill: "bg-bone-200 text-bone-800 border-bone-300",
    dot: "bg-bone-500",
  },
  Database: {
    pill: "bg-neutral-200 text-neutral-800 border-neutral-300",
    dot: "bg-neutral-500",
  },
};

const raw: { name: string; group: Group }[] = [
  { name: "Git", group: "Tools" },
  { name: "Tanstack", group: "Frontend" },
  { name: "Python", group: "Backend" },
  { name: "FastAPI", group: "Backend" },
  { name: "Laravel", group: "Backend" },
  { name: "React", group: "Frontend" },
  { name: "Vue", group: "Frontend" },
  { name: "Nuxt", group: "Frontend" },
  { name: "Supabase", group: "Backend" },
  { name: "PostgreSQL", group: "Database" },
  { name: "Tailwind CSS", group: "Frontend" },
];

// sorted by group order, so same-colored pills always sit together
export const skills = [...raw].sort(
  (a, b) => groups.indexOf(a.group) - groups.indexOf(b.group),
);
