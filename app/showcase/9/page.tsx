// 9 — Asymmetric Editorial: white bg, tall left hero column, right project stack
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

export default function S9() {
  return (
    <div className="min-h-screen bg-white text-black">
      <ShowcaseNav current={9} />

      <div className="mx-auto max-w-6xl px-8">
        <div className="flex min-h-[calc(100vh-45px)] flex-col md:flex-row">

          {/* LEFT — sticky tall hero */}
          <aside className="flex flex-col justify-between border-r border-gray-100 py-16 pr-12 md:sticky md:top-[45px] md:h-[calc(100vh-45px)] md:w-80 md:shrink-0">
            <div>
              {/* Nav links */}
              <nav className="mb-16 flex flex-col gap-2">
                {["GitHub ↗", "LinkedIn ↗", "Resume ↗"].map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-xs font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-black"
                  >
                    {l}
                  </a>
                ))}
              </nav>

              {/* Name — rotated or stacked */}
              <h1
                className="mb-6 font-black leading-none tracking-tight text-black"
                style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
              >
                Mike
                <br />
                Mai
              </h1>

              <div className="mb-6 h-px w-12 bg-black" />

              <p className="mb-2 text-sm font-semibold text-black">
                Senior Software Engineer
              </p>
              <p className="text-xs leading-loose text-gray-400">
                10 years
                <br />
                Publishing
                <br />
                Healthcare
                <br />
                Fintech
              </p>
            </div>

            {/* Bottom tag */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 ring-1 ring-green-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                Available
              </span>
            </div>
          </aside>

          {/* RIGHT — project cards stack */}
          <main className="flex-1 py-16 md:pl-12">
            <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Projects &mdash; {projects.length} total
            </p>

            <div className="space-y-5">
              {projects.map((p, i) => (
                <a
                  key={p.title}
                  href={p.href}
                  className="group flex gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:-translate-x-1 hover:bg-white hover:shadow-md hover:shadow-gray-100"
                >
                  {/* Number + icon */}
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="text-xs font-mono text-gray-300">{p.num}</span>
                    <span className="text-3xl">{p.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-1.5 text-lg font-bold text-black transition-colors group-hover:text-blue-600">
                      {p.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="shrink-0 self-center text-gray-200 transition-all group-hover:translate-x-1 group-hover:text-gray-900">
                    →
                  </span>
                </a>
              ))}
            </div>

            <footer className="mt-16 text-xs text-gray-300">
              Mike Mai · 2026
            </footer>
          </main>

        </div>
      </div>
    </div>
  );
}
