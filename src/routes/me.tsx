import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { faves } from "../data/faves";

export const Route = createFileRoute("/me")({
  component: Me,
});

function Me() {
  return (
    <div className="mx-auto mt-16 w-full max-w-6xl space-y-12 px-4">
      <Reveal>
        <h2 className="text-teal-600 text-2xl mb-5">A Little about myself.</h2>
        <div className="grid gap-6 md:grid-cols-[11rem_1fr] md:items-end">
          <img
            src="/romeo.png"
            alt="Romeo Alamele"
            width={400}
            height={500}
            className="order-first aspect-4/5 w-full max-w-44 rounded-md bg-bone-300 object-cover md:order-0 md:col-start-1 md:row-start-1"
          />

          <div className="space-y-4 text-base leading-relaxed text-teal-900 md:col-start-2 md:row-start-1">
            <div className="space-y-4 text-base leading-relaxed text-teal-900 md:order-0">
              <p>
                Software developer who likes small, sharp tools over big
                frameworks. An introvert by nature and a software developer by
                passion, eager to build things that speak louder than I do.
              </p>
              <p>
                My go-to stack is Vue.js / Nuxt.js, Tailwind CSS and Supabase.
                For backend, I'm learning Python (FastAPI) and PHP (Laravel). I
                don't have a fixed stack yet, picking up Golang soon also.
              </p>
              <p>
                I love clean design, smooth flows, and websites that don't need
                instructions. My happy place is a quiet dark room and a UI that
                just feels right.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <section className="max-w-prose space-y-2">
          <h2 className="font-mono text-sm text-magenta-600">On repeat</h2>
          <iframe
            title="On repeat: Spotify playlist"
            src="https://open.spotify.com/embed/playlist/41We9Vc0zcd5hDKy7XPfV3?theme=0"
            width="100%"
            height="152"
            loading="lazy"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-xl border-0"
          />
        </section>
      </Reveal>
      <Reveal delay={80}>
        <div className="grid gap-10 md:grid-cols-2">
          {faves.map((f, idx) => (
            <Reveal key={f.label} delay={idx * 60}>
              <section key={f.label} className="space-y-2">
                <h2 className="font-mono text-sm text-magenta-600">
                  {f.label}
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {f.items.map((i) => (
                    <li key={i.title} className="w-24">
                      <a
                        href={i.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                      >
                        <img
                          src={i.cover}
                          alt=""
                          loading="lazy"
                          width={96}
                          height={144}
                          className="aspect-2/3 w-full rounded-md bg-bone-300 object-cover transition-transform duration-200 group-hover:-translate-y-0.5"
                        />
                        <span className="mt-1 block text-xs text-teal-900 group-hover:text-magenta-600">
                          {i.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="flex flex-wrap items-center gap-3 border-t border-bone-300 pt-6">
          <p className="text-sm text-teal-900">
            Have something in mind? Work or Talk, say Hi.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="mailto:alameleromeo1@gmail.com"
              className="rounded-md bg-magenta-600 px-3 py-2 text-sm text-bone-50 transition-colors hover:bg-magenta-700"
            >
              Email me
            </a>
            <a
              href="https://drive.google.com/file/d/11e38c1XrY2d5yxO2GGVuRIG83KPI9aP7/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-teal-600 px-3 py-2 text-sm text-bone-300 transition-colors hover:bg-teal-700"
            >
              Resume
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
