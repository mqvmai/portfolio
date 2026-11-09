import { projects, links, stackRows, industries } from "./_data/projects";

const linkIcons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Resume: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">

      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-3 md:hidden">
        <div>
          <span className="text-sm font-bold text-gray-900">Mike Mai</span>
          <span className="ml-2 text-xs text-gray-400">Senior Software Engineer</span>
        </div>
        <div className="flex gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs text-gray-500 hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="hidden w-72 shrink-0 flex-col border-r border-gray-100 bg-white px-7 py-10 md:flex">
        <div className="mb-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 text-2xl font-black text-white shadow-sm">
            MM
          </div>
          <h1 className="text-lg font-bold leading-tight text-gray-900">Mike Mai</h1>
          <p className="mt-0.5 text-sm text-gray-500">Senior Software Engineer</p>
          <p className="mt-0.5 text-xs text-gray-400">10+ years experience</p>
        </div>

        <span className="mb-8 inline-flex items-center gap-1.5 self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Open to work
        </span>

        <div className="mb-7 h-px bg-gray-100" />

        <div className="mb-7">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Industries
          </p>
          <p className="text-sm text-gray-600">{industries.join(" · ")}</p>
        </div>

        <div className="mb-7 h-px bg-gray-100" />

        <div className="mb-7">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Core Stack
          </p>
          <div className="space-y-1.5">
            {stackRows.map((row) => (
              <p key={row[0]} className="font-mono text-[11px] text-gray-500">
                {row.join(" · ")}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              {linkIcons[l.label]}
              {l.label}
            </a>
          ))}
        </div>
      </aside>

      <main className="flex-1 px-6 pt-20 pb-12 md:px-12 md:pt-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900">Projects</h2>
          <p className="mt-0.5 font-mono text-xs text-gray-400">
            ~/projects $ ls -la &nbsp;·&nbsp; {projects.length} total
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 flex-1 font-mono text-xs text-gray-400">
                  ~/projects/{p.slug}
                </span>
                <span className="rounded bg-gray-200/80 px-2 py-0.5 font-mono text-xs text-gray-400">
                  WIP
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-gray-600">
                    {p.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-gray-100 bg-gray-50 px-2 py-0.5 font-mono text-xs text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-16 font-mono text-xs text-gray-300">
          $ exit &mdash; mike mai 2026
        </footer>
      </main>

    </div>
  );
}
