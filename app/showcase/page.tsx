import Link from "next/link";

const designs = [
  { id: 1,  name: "Ultra Minimal",       vibe: "Pure white · enormous thin name · no decorations · project list" },
  { id: 2,  name: "Full-Page Code",      vibe: "GitHub dark · entire page is a .ts file · syntax-highlighted" },
  { id: 3,  name: "Newsprint",           vibe: "Cream · broadsheet newspaper · serif · masthead layout" },
  { id: 4,  name: "Dashboard",           vibe: "Light · SaaS sidebar layout · stats panel · Notion/Linear feel" },
  { id: 5,  name: "Deep Space Glass",    vibe: "Dark gradient · frosted glass cards · ambient orbs" },
  { id: 6,  name: "Neon Noir",           vibe: "Pure black · cyan + magenta neon glow effects" },
  { id: 7,  name: "Obsidian Gold",       vibe: "Near-black · gold accents · generous whitespace · luxury premium" },
  { id: 8,  name: "Electric Blue",       vibe: "Bold saturated blue background · white everything · very confident" },
  { id: 9,  name: "Asymmetric Editorial","vibe": "White · sticky left column · right project stack · magazine layout" },
  { id: 10, name: "Dot Grid Dark",       vibe: "Dark · subtle dot grid pattern · clean floating zinc cards" },
];

export default function ShowcaseHub() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-3xl px-8 py-20">
        <Link href="/" className="mb-10 inline-block font-mono text-sm text-zinc-500 hover:text-white transition-colors">
          ← back to main
        </Link>
        <h1 className="mb-2 text-4xl font-black">10 New Designs</h1>
        <p className="mb-12 text-zinc-500">Minimal → Extravagant. Click any to preview, use the nav bar to jump between them.</p>
        <div className="space-y-3">
          {designs.map((d) => (
            <Link
              key={d.id}
              href={`/showcase/${d.id}`}
              className="group flex items-center gap-5 rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-600 hover:bg-zinc-800"
            >
              <span className="w-6 shrink-0 text-center text-lg font-black text-zinc-600 transition-colors group-hover:text-white">
                {d.id}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-white">{d.name}</p>
                <p className="text-sm text-zinc-500">{d.vibe}</p>
              </div>
              <span className="text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-white">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
