import { projects } from "../_data/projects";
import DesignNav from "../_components/DesignNav";

export default function CleanLightDesign() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <DesignNav current={2} />

      <div className="mx-auto max-w-5xl px-8 py-20">
        {/* Hero */}
        <header className="mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Open to new opportunities
          </div>
          <h1 className="mb-3 text-6xl font-bold tracking-tight text-gray-900">
            Mike Mai
          </h1>
          <p className="mb-4 text-2xl font-medium text-blue-600">
            Senior Software Engineer
          </p>
          <p className="mb-8 max-w-xl leading-relaxed text-gray-500">
            I build reliable systems at scale. 7+ years in distributed systems,
            developer tooling, and full-stack web. I care about clean
            abstractions and software that lasts.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              View Resume →
            </a>
            <a
              href="https://github.com"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Projects */}
        <section>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Projects
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group relative rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {p.status && (
                  <span className="absolute right-5 top-5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                    {p.status}
                  </span>
                )}
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-xl ${p.gradient}`}
                >
                  {p.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {p.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-500">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          Built with Next.js &amp; Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
