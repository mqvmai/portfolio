// 3 — Newsprint: broadsheet newspaper layout with serif typography
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

export default function S3() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] font-serif text-black">
      <ShowcaseNav current={3} />

      <div className="mx-auto max-w-5xl px-6 py-6">
        {/* Masthead */}
        <header className="border-b-4 border-black pb-3">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-500">
            <span>Vol. X, No. 1</span>
            <span>California, United States</span>
            <span>Est. 2026</span>
          </div>
          <h1 className="text-center text-[clamp(48px,10vw,96px)] font-black uppercase leading-none tracking-tight">
            Mike Mai
          </h1>
          <div className="mt-2 border-t border-b border-black py-1.5 text-center text-sm font-bold uppercase tracking-[0.2em]">
            Senior Software Engineer · 10 Years · Publishing · Healthcare · Fintech
          </div>
        </header>

        {/* Subhead / byline row */}
        <div className="mt-3 flex items-center justify-between border-b border-gray-400 pb-3">
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="font-bold uppercase tracking-wider hover:underline">GitHub ↗</a>
            <a href="#" className="font-bold uppercase tracking-wider hover:underline">LinkedIn ↗</a>
            <a href="#" className="font-bold uppercase tracking-wider hover:underline">Resume ↗</a>
          </div>
          <span className="text-xs italic text-gray-500">
            &ldquo;Available for new opportunities.&rdquo;
          </span>
        </div>

        {/* Section label */}
        <div className="mt-5 mb-4 border-b-2 border-black pb-1 text-xs font-bold uppercase tracking-widest text-black">
          Featured Projects
        </div>

        {/* Projects as newspaper articles — 2-col grid */}
        <div className="grid gap-0 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className={`group block p-5 transition-colors hover:bg-[#ece8dc] ${
                i % 2 === 0 ? "md:border-r border-gray-300" : ""
              } ${i < 2 ? "border-b border-gray-300" : ""}`}
            >
              {/* Article kicker */}
              <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {p.tags[0]} · {p.tags[1]}
              </div>
              {/* Headline */}
              <h2 className="mb-2 text-2xl font-black leading-tight group-hover:underline">
                {p.icon} {p.title}
              </h2>
              {/* Deck */}
              <p className="mb-3 text-sm font-bold italic leading-snug text-gray-700">
                {p.description}
              </p>
              {/* Body copy */}
              <div className="mb-3 h-px bg-gray-300" />
              {/* Tech stack as "tags" */}
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wide text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-6 border-t-2 border-black pt-3 text-center text-[11px] uppercase tracking-widest text-gray-500">
          mqmai.dev@gmail.com &nbsp;·&nbsp; California, United States &nbsp;·&nbsp; 2026
        </footer>
      </div>
    </div>
  );
}
