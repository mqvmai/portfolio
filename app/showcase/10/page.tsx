// 10 — Dot Grid Dark: deep dark background with dot grid pattern, clean floating cards
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

export default function S10() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "#0d0d0d",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <ShowcaseNav current={10} />

      <div className="mx-auto max-w-5xl px-8 py-20">
        {/* Nav */}
        <nav className="mb-16 flex justify-end gap-6">
          {["GitHub", "LinkedIn", "Resume"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Hero */}
        <header className="mb-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            Available for hire
          </div>
          <h1
            className="mb-6 font-black leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(56px, 11vw, 120px)" }}
          >
            Mike Mai
          </h1>
          <p className="text-base text-zinc-500">
            Senior Software Engineer &nbsp;·&nbsp; 10 years &nbsp;·&nbsp;
            Publishing · Healthcare · Fintech
          </p>
        </header>

        {/* Projects */}
        <section>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Projects
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Thin color accent bar */}
                <div
                  className={`mb-5 h-0.5 w-8 rounded-full bg-gradient-to-r ${p.gradFrom} ${p.gradTo} transition-all group-hover:w-16`}
                />

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="rounded-md border border-zinc-700 px-2 py-0.5 text-xs text-zinc-500">
                    WIP
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-800 bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-zinc-800/50 pt-8 text-center text-xs text-zinc-700">
          Mike Mai &mdash; 2026
        </footer>
      </div>
    </div>
  );
}
