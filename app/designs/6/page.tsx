// Design 6: Hybrid — Clean Light with Terminal window cards
import DesignNav from "../_components/DesignNav";
import { projects } from "../_data/projects";

export default function HybridDesign() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <DesignNav current={6} />

      <div className="mx-auto max-w-5xl px-8 py-20">
        {/* Hero — clean layout, terminal micro-details */}
        <header className="mb-20">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-gray-400">
            <span className="text-green-500">❯</span>
            <span>echo $STATUS</span>
            <span className="rounded border border-green-200 bg-green-50 px-2 py-0.5 text-green-600">
              AVAILABLE_FOR_HIRE
            </span>
          </div>

          <h1 className="mb-3 text-6xl font-bold tracking-tight text-gray-900">
            Mike Mai
          </h1>
          <p className="mb-5 font-mono text-lg font-medium text-blue-600">
            // Senior Software Engineer
          </p>
          <p className="mb-8 max-w-xl leading-relaxed text-gray-500">
            Building reliable systems at scale. Specializing in distributed
            backends, infrastructure, and full-stack development.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              View Resume →
            </a>
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 font-mono text-sm font-semibold text-gray-600 shadow-sm transition-colors hover:bg-gray-50"
            >
              $ github
            </a>
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 font-mono text-sm font-semibold text-gray-600 shadow-sm transition-colors hover:bg-gray-50"
            >
              $ linkedin
            </a>
          </div>
        </header>

        {/* Projects — white cards with terminal title bars */}
        <section>
          <p className="mb-6 font-mono text-xs text-gray-400">
            ~/projects $ ls -la
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Terminal title bar */}
                <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 flex-1 font-mono text-xs text-gray-400">
                    ~/projects/{p.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                  {p.status && (
                    <span className="rounded bg-gray-200/80 px-2 py-0.5 font-mono text-xs text-gray-500">
                      {p.status}
                    </span>
                  )}
                </div>

                {/* Clean body */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 font-mono text-xs text-gray-300">
          $ exit — mike mai 2026
        </footer>
      </div>
    </div>
  );
}
