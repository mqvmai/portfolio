import { projects } from "../_data/projects";
import DesignNav from "../_components/DesignNav";

export default function BentoDesign() {
  const [p1, p2, p3, p4] = projects;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <DesignNav current={3} />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-sm text-zinc-500">portfolio.v1</span>
          <h1 className="mt-1 text-4xl font-bold">Mike Mai</h1>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Featured project — 2 cols wide */}
          <a
            href={p1.href}
            className={`group relative col-span-1 flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-8 md:col-span-2 ${p1.gradient}`}
          >
            <div className="flex items-start justify-between">
              <span className="text-5xl">{p1.icon}</span>
              {p1.status && (
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {p1.status}
                </span>
              )}
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold">{p1.title}</h3>
              <p className="mb-4 line-clamp-2 text-sm text-white/70">
                {p1.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p1.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-white/15 px-2 py-0.5 text-xs backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/5" />
          </a>

          {/* About cell */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                About
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Senior Software Engineer with 7+ years building distributed
                systems. Currently open to new opportunities.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Resume", href: "#" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="group flex items-center justify-between text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <span>{l.label}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Projects 2, 3, 4 — equal 1-col tiles */}
          {[p2, p3, p4].map((p) => (
            <a
              key={p.title}
              href={p.href}
              className={`group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-6 ${p.gradient}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{p.icon}</span>
                {p.status && (
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
                    {p.status}
                  </span>
                )}
              </div>
              <div>
                <h3 className="mb-2 font-bold text-lg">{p.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/15 px-2 py-0.5 text-xs backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 2 && (
                    <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white/60">
                      +{p.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/5" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-zinc-700">
          Built with Next.js &amp; Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
