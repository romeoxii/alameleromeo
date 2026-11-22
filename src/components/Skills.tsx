import { groups, groupStyles, skills } from "../data/skills";

export function Skills() {
  return (
    <div className="space-y-3">
      {/* legend */}
      <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-teal-700">
        {groups.map((g) => (
          <li key={g} className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${groupStyles[g].dot}`}
            />
            {g}
          </li>
        ))}
      </ul>

      {/* pills */}
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li
            key={s.name}
            title={s.group}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium ${groupStyles[s.group].pill}`}
          >
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
