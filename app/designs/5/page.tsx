import DesignNav from "../_components/DesignNav";
import { projects } from "../_data/projects";

export default function CinematicDesign() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <DesignNav current={5} />

      <div className="mx-auto max-w-6xl px-8 py-20">
        {/* Hero */}
        <header className="mb-32">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Senior Software Engineer
          </p>
          <h1 className="text-[11vw] font-black leading-none tracking-tighter">
            Mike
            <br />
            <span className="text-neutral-700">Mai.</span>
          </h1>
          <div className="mt-10 flex items-center gap-6">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              scroll to explore
            </span>
          </div>
        </header>

        {/* Projects — cinematic full-width rows */}
        <section>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative block border-t border-neutral-800/60 py-16 transition-colors hover:border-neutral-700"
            >
              {/* Giant faded background number */}
              <span className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none text-neutral-900 transition-colors group-hover:text-neutral-800">
                {p.number}
              </span>

              {/* Content row */}
              <div className="relative grid items-center gap-8 md:grid-cols-5">
                {/* Left: icon + title + description */}
                <div className="md:col-span-3">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="text-3xl">{p.icon}</span>
                    {p.status && (
                      <span className="rounded-full border border-neutral-700 px-3 py-0.5 text-xs text-neutral-500">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-4 text-5xl font-black leading-none tracking-tight transition-colors group-hover:text-neutral-200">
                    {p.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-neutral-500">
                    {p.description}
                  </p>
                </div>

                {/* Right: tags + link */}
                <div className="flex flex-col items-start gap-4 md:col-span-2 md:items-end">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500 transition-colors group-hover:border-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${p.accentColor}`}
                  >
                    View Project <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}

          <div className="border-t border-neutral-800" />
        </section>

        {/* Footer */}
        <footer className="mt-20 flex items-center justify-between text-xs text-neutral-600">
          <span>Mike Mai &mdash; 2026</span>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a
                key={l}
                href="#"
                className="uppercase tracking-widest transition-colors hover:text-neutral-300"
              >
                {l}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
