// Design 7: IDE Dark — VS Code-inspired dark developer aesthetic
import DesignNav from "../_components/DesignNav";
import { projects } from "../_data/projects";

export default function IDEDarkDesign() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] font-mono text-[#d4d4d4]">
      <DesignNav current={7} />

      {/* File tab bar */}
      <div className="flex border-b border-[#252526] bg-[#252526]">
        <div className="flex items-center gap-2 border-r border-[#1e1e1e] bg-[#1e1e1e] px-5 py-2.5 text-sm text-[#d4d4d4]">
          <span className="text-blue-400 text-base">⟨/⟩</span>
          <span>portfolio.tsx</span>
          <span className="ml-2 cursor-pointer text-xs text-[#858585] hover:text-white">
            ×
          </span>
        </div>
        <div className="flex cursor-pointer items-center gap-2 px-5 py-2.5 text-sm text-[#858585] hover:text-[#d4d4d4]">
          <span className="text-green-400">▶</span>
          <span>projects.ts</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-8 py-14">
        {/* Hero as a code object */}
        <div className="mb-20 flex gap-8">
          {/* Line numbers */}
          <div className="select-none text-right text-sm leading-6 text-[#4a4a4a]">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Syntax-highlighted hero */}
          <div className="text-sm leading-6">
            <div>
              <span className="text-[#569cd6]">const</span>{" "}
              <span className="text-[#9cdcfe]">engineer</span>{" "}
              <span className="text-[#d4d4d4]">=</span>{" "}
              <span className="text-[#d4d4d4]">{"{"}</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#9cdcfe]">name</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178]">&quot;Mike Mai&quot;</span>
              <span className="text-[#d4d4d4]">,</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#9cdcfe]">role</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178]">
                &quot;Senior Software Engineer&quot;
              </span>
              <span className="text-[#d4d4d4]">,</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#9cdcfe]">status</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178]">&quot;available_for_hire&quot;</span>
              <span className="text-[#d4d4d4]">,</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#9cdcfe]">years</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#b5cea8]">7</span>
              <span className="text-[#d4d4d4]">,</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#9cdcfe]">focus</span>
              <span className="text-[#d4d4d4]">: [</span>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">&quot;distributed systems&quot;</span>
              <span className="text-[#d4d4d4]">,</span>{" "}
              <span className="text-[#ce9178]">&quot;backend&quot;</span>
              <span className="text-[#d4d4d4]">,</span>{" "}
              <span className="text-[#ce9178]">&quot;full-stack&quot;</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#d4d4d4]">],</span>
            </div>
            <div>
              &nbsp;&nbsp;
              <span className="text-[#9cdcfe]">links</span>
              <span className="text-[#d4d4d4]">: {"{"}</span>{" "}
              <span className="text-[#9cdcfe]">gh</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178] underline cursor-pointer">&quot;github.com&quot;</span>
              <span className="text-[#d4d4d4]">, </span>
              <span className="text-[#9cdcfe]">li</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178] underline cursor-pointer">&quot;linkedin.com&quot;</span>{" "}
              <span className="text-[#d4d4d4]">{"}"}</span>
            </div>
            <div>
              <span className="text-[#d4d4d4]">{"}"}</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
            <div className="mt-1 text-[#6a9955]">
              {`// projects below ↓`}
            </div>
          </div>
        </div>

        {/* Projects as file cards */}
        <div className="mb-3 text-sm text-[#858585]">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#9cdcfe]">projects</span>{" "}
          <span className="text-[#d4d4d4]">=</span>{" "}
          <span className="text-[#d4d4d4]">[</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group overflow-hidden rounded-lg border border-[#2d2d2d] bg-[#252526] transition-all hover:border-[#404040]"
            >
              {/* Language color stripe */}
              <div className={`h-0.5 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-sm text-[#9cdcfe]">
                    {p.title.toLowerCase().replace(/\s+/g, "_")}.ts
                  </span>
                  {p.status && (
                    <span className="ml-auto rounded border border-[#404040] px-2 py-0.5 text-xs text-[#858585]">
                      {p.status}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#d4d4d4] transition-colors group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#858585]">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[#2d2d2d] bg-[#1e1e1e] px-2 py-0.5 text-xs text-[#9cdcfe]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-3 text-sm text-[#858585]">];</div>

        {/* Status bar */}
        <div className="mt-16 flex items-center justify-between border-t border-[#2d2d2d] pt-4 text-xs text-[#858585]">
          <span>TypeScript &nbsp;·&nbsp; UTF-8 &nbsp;·&nbsp; 4 spaces</span>
          <span>mike mai — 2026</span>
        </div>
      </div>
    </div>
  );
}
