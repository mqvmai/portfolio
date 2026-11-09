import Link from "next/link";

const designs = [
  {
    id: 6,
    name: "Hybrid ★",
    description: "Light bg, clean cards — but each card has a terminal title bar with colored dots",
    palette: ["#f8fafc", "#ffffff", "#2563eb", "#22c55e"],
    highlight: true,
  },
  {
    id: 7,
    name: "IDE Dark ★",
    description: "VS Code-inspired: dark gray bg, syntax-highlighted hero, file-tab project cards",
    palette: ["#1e1e1e", "#252526", "#9cdcfe", "#ce9178"],
    highlight: true,
  },
  {
    id: 8,
    name: "Mono Cream ★",
    description: "Warm cream bg, all monospace, terminal prompts, bordered row-list cards",
    palette: ["#fafaf9", "#f5f5f4", "#059669", "#a8a29e"],
    highlight: true,
  },
  {
    id: 1,
    name: "Terminal",
    description: "Black bg, green monospace text, cards styled as CLI windows",
    palette: ["#000000", "#16a34a", "#15803d", "#14532d"],
  },
  {
    id: 2,
    name: "Clean Light",
    description: "White bg, blue accents, clean cards with shadows",
    palette: ["#f8fafc", "#ffffff", "#2563eb", "#e2e8f0"],
  },
  {
    id: 3,
    name: "Bento Grid",
    description: "Dark bg, asymmetric bento-style grid, gradient tiles",
    palette: ["#09090b", "#18181b", "#7c3aed", "#0891b2"],
  },
  {
    id: 4,
    name: "Brutalist",
    description: "Pure black & white, sharp edges, red accent, numbered list",
    palette: ["#ffffff", "#000000", "#dc2626", "#6b7280"],
  },
  {
    id: 5,
    name: "Cinematic",
    description: "Very dark, editorial layout, giant faded numbers, full-width rows",
    palette: ["#0a0a0a", "#171717", "#404040", "#737373"],
  },
];

export default function DesignsHub() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-8 py-20">
        <Link
          href="/"
          className="mb-10 inline-block font-mono text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← back to main (original design)
        </Link>

        <h1 className="mb-3 text-4xl font-black">Design Options</h1>
        <p className="mb-6 text-zinc-400">
          8 concepts. ★ = new hybrids blending clean + terminal.
        </p>

        <div className="space-y-3">
          {designs.map((d) => (
            <Link
              key={d.id}
              href={`/designs/${d.id}`}
              className={`group flex items-center gap-6 rounded-xl border p-5 transition-all ${"highlight" in d && d.highlight
                  ? "border-zinc-600 bg-zinc-800/60 hover:border-zinc-400 hover:bg-zinc-700"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800"
                }`}
            >
              {/* Number */}
              <span className="w-8 shrink-0 text-center text-2xl font-black text-zinc-600 transition-colors group-hover:text-white">
                {d.id}
              </span>

              {/* Palette swatches */}
              <div className="flex shrink-0 gap-1">
                {d.palette.map((color) => (
                  <div
                    key={color}
                    className="h-8 w-8 rounded-md border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="font-semibold text-white">{d.name}</p>
                <p className="text-sm text-zinc-400">{d.description}</p>
              </div>

              <span className="text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
