// 1 — Ultra Minimal: pure white, enormous thin name, no decorations, project list
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

export default function S1() {
  return (
    <div className="min-h-screen bg-white text-black">
      <ShowcaseNav current={1} />
      <div className="mx-auto max-w-5xl px-10">
        <nav className="flex justify-end gap-10 py-8">
          {["GitHub", "LinkedIn", "Resume"].map((l) => (
            <a key={l} href="#" className="text-[11px] uppercase tracking-[0.3em] text-gray-300 transition-colors hover:text-gray-900">
              {l}
            </a>
          ))}
        </nav>

        <header className="pb-20 pt-10 md:pt-20">
          <h1
            className="mb-10 leading-[0.88] tracking-tight text-black"
            style={{ fontSize: "clamp(72px, 13vw, 160px)", fontWeight: 100 }}
          >
            Mike
            <br />
            Mai
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.35em] text-gray-300">
              Senior Software Engineer
            </span>
            <span className="h-px w-8 bg-gray-100" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gray-300">
              10 years
            </span>
            <span className="h-px w-8 bg-gray-100" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gray-300">
              Publishing · Healthcare · Fintech
            </span>
          </div>
        </header>

        <section className="pb-20">
          <div className="mb-6 text-[11px] uppercase tracking-[0.35em] text-gray-300">
            Projects
          </div>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group flex items-center gap-6 border-t border-gray-100 py-6 transition-all hover:pl-1"
            >
              <span className="w-6 shrink-0 text-[11px] text-gray-200">{p.num}</span>
              <span className="shrink-0 text-2xl">{p.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-sm font-medium group-hover:underline underline-offset-4">
                  {p.title}
                </div>
                <div className="truncate text-xs leading-relaxed text-gray-400">
                  {p.description}
                </div>
              </div>
              <div className="hidden shrink-0 gap-4 md:flex">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-[11px] text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <span className="shrink-0 text-gray-200 transition-colors group-hover:text-black">
                →
              </span>
            </a>
          ))}
          <div className="border-t border-gray-100" />
        </section>

        <footer className="flex justify-between pb-8 text-[11px] text-gray-300">
          <span>Mike Mai · 2026</span>
          <span>mqmai.dev@gmail.com</span>
        </footer>
      </div>
    </div>
  );
}
