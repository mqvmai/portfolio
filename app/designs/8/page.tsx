// Design 8: Mono Cream — elegant monospace on warm cream, minimal borders
import DesignNav from "../_components/DesignNav";
import { projects } from "../_data/projects";

export default function MonoCreamDesign() {
  return (
    <div className="min-h-screen bg-stone-50 font-mono text-stone-800">
      <DesignNav current={8} />

      <div className="mx-auto max-w-4xl px-8 py-20">
        {/* Hero */}
        <header className="mb-24">
          <p className="mb-2 text-xs tracking-widest text-stone-400">
            $ whoami
          </p>
          <h1 className="mb-4 text-7xl font-black tracking-tight text-stone-900">
            Mike Mai
          </h1>
          <div className="mb-6 text-sm text-stone-500">
            <span className="text-stone-300">role</span>
            <span className="mx-3 text-stone-300">→</span>
            <span className="text-emerald-600 font-semibold">
              Senior Software Engineer
            </span>
          </div>
          <p className="mb-10 max-w-lg text-sm leading-loose text-stone-500">
            Building reliable, maintainable systems. Passionate about
            distributed computing, clean APIs, and developer tooling.
            Currently available for new opportunities.
          </p>

          <div className="flex gap-6 text-sm">
            {["github /", "linkedin /", "resume /"].map((l) => (
              <a
                key={l}
                href="#"
                className="border-b border-stone-200 pb-0.5 text-stone-400 transition-colors hover:border-stone-700 hover:text-stone-800"
              >
                {l}
              </a>
            ))}
          </div>
        </header>

        {/* Projects — grid of bordered cells, no shadows */}
        <section>
          <p className="mb-6 text-xs text-stone-400">$ ls -la ~/projects/</p>

          <div className="overflow-hidden rounded-xl border border-stone-200 divide-y divide-stone-200">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group flex gap-6 bg-stone-50 p-7 transition-colors hover:bg-white"
              >
                {/* Number + icon */}
                <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                  <span className="text-xs text-stone-300">{p.number}</span>
                  <span className="text-2xl">{p.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-base font-black text-stone-900 transition-colors group-hover:text-emerald-700">
                      {p.title}
                    </h3>
                    {p.status && (
                      <span className="rounded border border-stone-200 px-2 py-0.5 text-xs text-stone-400">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-sm leading-loose text-stone-500">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-stone-200 bg-stone-100 px-2 py-0.5 text-xs text-stone-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span className="self-center text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-500">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 text-xs text-stone-300">
          $ exit &mdash; mike mai 2026
        </footer>
      </div>
    </div>
  );
}
