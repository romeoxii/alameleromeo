import { Reveal } from "./Reveal";

const copies = [
  {
    id: "who",
    label: "Who am I?",
    text: " A software developer who builds things for the web that mostly work on the first try.",
  },
  {
    id: "this",
    label: "This season",
    text: "Currently improving my knowledge on software development as a whole. Picked up Laravel for backend after learning a bit on FastAPI and building a project with it.",
  },
  {
    id: "prev",
    label: "Previously",
    text: "Worked with an organisation as a volunteer frontend developer for about 6 months, then interned with another company for 3 months as a software developer (loved it!! awesome working condition).",
  },
  {
    id: "next",
    label: "Next episode",
    text: "I was advised to learn Golang by a top dev. I did plan on learning it but I've been occupied with other stuffs (excuse i make for my lack of planning), I'll pick it up once I'm done with Laravel. Laravel is my main focus for now.",
  },
];

export function Hero() {
  return (
    <main className="w-full space-y-5">
      <header className="flex items-center gap-3 motion-safe:animate-fade-up">
        <div className="h-14 w-14 shrink-0 rounded-md bg-bone-300 p-0.5">
          <img
            src="/me-2.JPG"
            alt="Romeo Alamele"
            width={56}
            height={56}
            className="h-full w-full rounded-md object-cover"
          />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h1 className="text-2xl font-medium text-teal-600">
              Romeo Alamele
            </h1>
            <span className="rounded-full border border-bone-300 bg-bone-200 px-2 py-0.5 text-xs font-medium text-teal-700">
              romeoxii
            </span>
          </div>
          <p className="text-sm font-medium text-teal-700">
            Software Developer.
          </p>
        </div>
      </header>
      <dl className="max-w-prose space-y-5">
        {copies.map((c, i) => (
          <Reveal key={c.label} delay={(i % 2) * 80}>
            <div key={c.id}>
              <dt className="inline-block border-b-2 border-dotted border-magenta-600 font-mono text-sm text-magenta-600">
                {c.label}
              </dt>
              <dd className="mt-2 pl-2 text-teal-900 text-sm sm:text-base">
                {c.text}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </main>
  );
}
