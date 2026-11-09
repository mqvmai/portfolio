// 7 — Obsidian Gold: near-black background, gold accents, premium luxury aesthetic
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

const GOLD = "#c9a84c";
const GOLD_DIM = "#c9a84c60";

export default function S7() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#0a0a0a" }}>
      <ShowcaseNav current={7} />

      <div className="mx-auto max-w-4xl px-10 py-24">
        {/* Nav */}
        <nav className="mb-24 flex justify-end gap-10">
          {["GitHub", "LinkedIn", "Resume"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs uppercase tracking-[0.3em] transition-colors hover:text-white"
              style={{ color: GOLD_DIM }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Hero */}
        <header className="mb-28">
          <div
            className="mb-8 h-px w-24"
            style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
          />
          <h1
            className="mb-6 font-bold uppercase leading-none tracking-[0.08em]"
            style={{ fontSize: "clamp(56px, 10vw, 110px)", color: "white" }}
          >
            Mike Mai
          </h1>
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.4em]"
            style={{ color: GOLD }}
          >
            Senior Software Engineer
          </p>
          <p className="text-sm tracking-wider text-white/30">
            10 Years &nbsp;&nbsp;·&nbsp;&nbsp; Publishing &nbsp;&nbsp;·&nbsp;&nbsp;
            Healthcare &nbsp;&nbsp;·&nbsp;&nbsp; Fintech
          </p>
          <div
            className="mt-10 h-px"
            style={{ background: `linear-gradient(90deg, ${GOLD_DIM}, transparent)` }}
          />
        </header>

        {/* Projects */}
        <section>
          <p
            className="mb-10 text-xs uppercase tracking-[0.5em]"
            style={{ color: GOLD_DIM }}
          >
            Selected Projects
          </p>

          <div className="space-y-0">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.href}
                className="group flex items-start gap-8 py-10 transition-colors"
                style={{
                  borderTop: `1px solid ${GOLD_DIM}`,
                }}
              >
                {/* Number */}
                <span
                  className="shrink-0 font-mono text-4xl font-thin"
                  style={{ color: `${GOLD}30`, lineHeight: 1 }}
                >
                  {p.num}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="text-2xl">{p.icon}</span>
                    <h3
                      className="text-xl font-semibold tracking-wide transition-colors group-hover:text-white"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p className="mb-4 max-w-lg text-sm leading-loose text-white/40">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded px-2 py-0.5 text-xs tracking-wide"
                        style={{
                          color: GOLD_DIM,
                          border: `1px solid ${GOLD}20`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span
                  className="shrink-0 self-center text-xl transition-all group-hover:translate-x-1"
                  style={{ color: `${GOLD}40` }}
                >
                  →
                </span>
              </a>
            ))}
            <div style={{ borderTop: `1px solid ${GOLD_DIM}` }} />
          </div>
        </section>

        <footer
          className="mt-20 text-xs uppercase tracking-[0.4em]"
          style={{ color: `${GOLD}30` }}
        >
          Mike Mai &mdash; 2026
        </footer>
      </div>
    </div>
  );
}
