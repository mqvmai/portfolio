// 5 — Deep Space Glass: dark gradient background + frosted glass cards
import ShowcaseNav from "../_components/ShowcaseNav";
import { projects } from "../_data/projects";

export default function S5() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(135deg, #0d0221 0%, #1b0a3f 25%, #0d1b4b 55%, #0a3845 80%, #0d0221 100%)",
      }}
    >
      <ShowcaseNav current={5} />

      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/4 h-96 w-96 rounded-full blur-[120px]"
          style={{ background: "rgba(120, 40, 200, 0.25)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-[100px]"
          style={{ background: "rgba(0, 150, 200, 0.2)" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-8 py-20">
        {/* Nav */}
        <nav className="mb-16 flex justify-end gap-6">
          {["GitHub", "LinkedIn", "Resume"].map((l) => (
            <a
              key={l}
              href="#"
              className="border-b border-white/20 pb-0.5 text-sm text-white/50 transition-colors hover:border-white/60 hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Hero */}
        <header className="mb-24">
          <p className="mb-4 text-sm font-medium tracking-widest text-white/40 uppercase">
            Available for hire
          </p>
          <h1
            className="mb-6 font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(56px, 11vw, 120px)",
              background: "linear-gradient(135deg, #fff 0%, #a78bfa 50%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mike Mai
          </h1>
          <p className="text-lg text-white/50">
            Senior Software Engineer &nbsp;·&nbsp; 10 years &nbsp;·&nbsp;
            Publishing · Healthcare · Fintech
          </p>
        </header>

        {/* Projects grid — glass cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {/* Inner glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${p.accent}22, transparent 60%)`,
                }}
              />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{p.icon}</span>
                  <span
                    className="rounded-full border px-3 py-0.5 text-xs"
                    style={{
                      borderColor: `${p.accent}50`,
                      color: p.accent,
                      background: `${p.accent}15`,
                    }}
                  >
                    WIP
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/50">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-white/40"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/20">
          Mike Mai · 2026
        </footer>
      </div>
    </div>
  );
}
