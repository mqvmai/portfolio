const projects = [
  {
    title: "TourSpot",
    slug: "tourspot",
    description:
      "Search any city, get POIs ranked by real review volume — not paid placement. GraphQL API backed by Google Places, Redis-cached for speed.",
    tags: ["Next.js", "TypeScript", "Node.js", "NestJS", "GraphQL", "PostgreSQL", "Redis", "Google Places API"],
    icon: "🗺️",
    href: "#",
  },
  {
    title: "AutoAlt",
    slug: "autoalt",
    description:
      "Upload an image, get production-ready alt text in seconds. Runs OpenAI Vision and Amazon Rekognition in parallel and returns the best result.",
    tags: ["React", "TypeScript", "Node.js", "NestJS", "OpenAI Vision", "Amazon Rekognition", "AWS S3", "Docker"],
    icon: "🤖",
    href: "#",
  },
  {
    title: "DocuChat",
    slug: "docuchat",
    description:
      "Upload any PDF, ask questions in plain English, get cited answers. Chunks and embeds the document on upload, retrieves relevant passages at query time.",
    tags: ["Python", "FastAPI", "pgvector", "OpenAI", "React", "Docker"],
    icon: "💬",
    href: "#",
  },
  {
    title: "ScoreLine",
    slug: "scoreline",
    description:
      "Live NBA and NFL scores alongside real-time betting lines from multiple sportsbooks. Line movements flagged as they shift — all pushed over WebSocket.",
    tags: ["Vue 3", "TypeScript", "Node.js", "NestJS", "Socket.io", "Redis", "MongoDB", "Docker"],
    icon: "🏆",
    href: "#",
  },
];

const links = [
  { label: "GitHub",   href: "https://github.com/mqvmai" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mikemaiswe" },
  { label: "Resume",   href: "/resume.pdf" },
];

const stack = [
  "TypeScript", "JavaScript", "Node.js", "React", "Vue 3",
  "NestJS", "Python", "PostgreSQL", "Redis", "MongoDB",
  "Docker", "AWS", "OpenAI",
];

const industries = ["Publishing", "Healthcare", "Fintech"];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">

      {/* ── Mobile header (shown below md) ──────────────────── */}
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

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className="hidden w-72 shrink-0 flex-col border-r border-gray-100 bg-white px-7 py-10 md:flex">

        {/* Avatar + name */}
        <div className="mb-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 text-2xl font-black text-white shadow-sm">
            MM
          </div>
          <h1 className="text-lg font-bold leading-tight text-gray-900">Mike Mai</h1>
          <p className="mt-0.5 text-sm text-gray-500">Senior Software Engineer</p>
          <p className="mt-0.5 text-xs text-gray-400">10+ years experience</p>
        </div>

        {/* Open to work */}
        <span className="mb-8 inline-flex items-center gap-1.5 self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Open to work
        </span>

        <div className="mb-7 h-px bg-gray-100" />

        {/* Industries */}
        <div className="mb-7">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Industries
          </p>
          {industries.map((ind) => (
            <div key={ind} className="flex items-center gap-2.5 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span className="text-sm text-gray-600">{ind}</span>
            </div>
          ))}
        </div>

        <div className="mb-7 h-px bg-gray-100" />

        {/* Core stack */}
        <div className="mb-7">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-[11px] text-gray-500"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Links — pinned to bottom */}
        <div className="mt-auto space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              {l.label}
              <span className="text-gray-300">↗</span>
            </a>
          ))}
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────────── */}
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
              {/* Terminal title bar */}
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

              {/* Card body */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
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
