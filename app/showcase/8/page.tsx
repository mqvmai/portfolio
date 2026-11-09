// 8 — Electric Blue: vivid saturated blue background, everything white, maximum confidence
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

export default function S8() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0057ff" }}>
      <ShowcaseNav current={8} />

      <div className="mx-auto max-w-5xl px-8 py-20">
        {/* Nav */}
        <nav className="mb-16 flex justify-end gap-6">
          {["GitHub", "LinkedIn", "Resume"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {l} ↗
            </a>
          ))}
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Open to opportunities
          </div>
          <h1
            className="mb-6 font-black leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(60px, 12vw, 130px)" }}
          >
            Mike Mai
          </h1>
          <p className="text-xl font-light text-white/70">
            Senior Software Engineer &nbsp;&mdash;&nbsp; 10 years &nbsp;&mdash;&nbsp;
            Publishing · Healthcare · Fintech
          </p>
        </header>

        {/* Projects */}
        <section>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            Projects
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-0.5 text-xs font-medium text-white/60">
                    WIP
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-white/20 pt-8 text-center text-sm text-white/30">
          Mike Mai &mdash; 2026
        </footer>
      </div>
    </div>
  );
}
