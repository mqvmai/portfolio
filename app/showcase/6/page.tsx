// 6 — Neon Noir: pure black + neon cyan/magenta glow effects
"use client";
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

const CYAN = "#00fff5";
const PINK = "#ff00aa";

export default function S6() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <ShowcaseNav current={6} />

      <div className="mx-auto max-w-5xl px-8 py-20">
        {/* Nav */}
        <nav className="mb-16 flex justify-end gap-8">
          {["GitHub", "LinkedIn", "Resume"].map((l, i) => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium transition-colors"
              style={{ color: i % 2 === 0 ? `${CYAN}99` : `${PINK}99` }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = i % 2 === 0 ? CYAN : PINK)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = i % 2 === 0 ? `${CYAN}99` : `${PINK}99`)
              }
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Hero */}
        <header className="mb-24">
          <p
            className="mb-4 font-mono text-xs tracking-[0.4em] uppercase"
            style={{ color: CYAN, textShadow: `0 0 20px ${CYAN}` }}
          >
            available_for_hire
          </p>
          <h1
            className="mb-6 font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(60px, 12vw, 130px)",
              textShadow: `0 0 40px rgba(255,255,255,0.3)`,
            }}
          >
            Mike Mai
          </h1>
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{ background: `linear-gradient(90deg, ${PINK}, transparent)` }}
            />
            <p className="text-sm text-white/50">
              Senior Software Engineer &nbsp;·&nbsp; 10 years &nbsp;·&nbsp;
              Publishing · Healthcare · Fintech
            </p>
          </div>
        </header>

        {/* Projects */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const color = i % 2 === 0 ? CYAN : PINK;
            return (
              <a
                key={p.title}
                href={p.href}
                className="group relative block overflow-hidden rounded-xl bg-zinc-950 p-6 transition-all"
                style={{
                  border: `1px solid ${color}30`,
                  boxShadow: `0 0 0 1px ${color}10`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 30px ${color}25, 0 0 0 1px ${color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 0 1px ${color}10`;
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute right-0 top-0 h-16 w-16 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${color}, transparent)`,
                  }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl">{p.icon}</span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: `${color}80` }}
                    >
                      [{p.num}]
                    </span>
                  </div>

                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: "white", transition: "color 0.2s" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = color)
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "white")
                    }
                  >
                    {p.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/40">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded px-2 py-0.5 font-mono text-xs"
                        style={{
                          color: `${color}80`,
                          border: `1px solid ${color}20`,
                          background: `${color}08`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <footer
          className="mt-20 border-t pt-8 text-center font-mono text-xs"
          style={{ borderColor: `${CYAN}20`, color: `${CYAN}40` }}
        >
          $ exit &mdash; mike mai 2026
        </footer>
      </div>
    </div>
  );
}
