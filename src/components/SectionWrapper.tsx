import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  id?: string;
  count?: number;
  children: ReactNode;
};

export function Section({ title, id, count, children }: SectionProps) {
  return (
    <section id={id} className="w-full space-y-4">
      <h2 className="text-teal-600 text-2xl font-medium flex items-center gap-1">
        {title}{" "}
        <span className="text-xs font-light text-teal-400">{count}</span>
      </h2>
      {children}
    </section>
  );
}
