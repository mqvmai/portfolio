import Link from "next/link";
import { projects } from "../_data/projects";

export default function BrutalistDesign() {
  return (
    <div className="min-h-screen bg-white font-mono text-black">
      {/* Custom nav for white bg */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b-4 border-black bg-white px-6 py-3">
        <span className="text-sm font-black uppercase tracking-widest">
          Portfolio
        </span>
        <div className="flex items-center gap-4">
          {["Terminal", "Light", "Bento", "Brutalist", "Cinematic"].map(
            (label, i) => (
              <Link
                key={i}
                href={`/designs/${i + 1}`}
                className={`text-xs font-bold transition-colors ${
                  i + 1 === 4
                    ? "text-red-600"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {i + 1 === 4 ? `[${i + 1}]` : i + 1}
              </Link>
            )
          )}
          <Link
            href="/"
            className="ml-2 text-xs text-gray-400 hover:text-black"
          >
            ←
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-8 py-16">
        {/* Hero */}
        <header className="mb-20 border-t-8 border-black pt-8">
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-400">
            Senior Software Engineer
          </p>
          <h1 className="mb-6 text-8xl font-black uppercase leading-none tracking-tighter">
            MIKE
            <br />
            MAI
          </h1>
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-black" />
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Available for hire
            </span>
            <span className="h-px w-16 bg-red-600" />
          </div>
          <p className="mt-6 max-w-lg text-sm leading-loose text-gray-600">
            7+ years building distributed systems. I care about correctness,
            performance, and the people who maintain the code after me.
          </p>
        </header>

        {/* Projects as numbered list */}
        <section>
          <h2 className="mb-0 border-t border-gray-200 pb-8 pt-4 text-xs uppercase tracking-widest text-gray-400">
            Projects
          </h2>
          <div className="divide-y divide-gray-200">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group -mx-2 flex items-start gap-8 px-2 py-10 transition-colors hover:bg-gray-50"
              >
                {/* Number */}
                <span className="w-16 shrink-0 text-right text-6xl font-black leading-none text-gray-200 transition-colors group-hover:text-red-100">
                  {p.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight transition-colors group-hover:text-red-600">
                      {p.title}
                    </h3>
                    {p.status && (
                      <span className="border border-black px-2 py-0.5 text-xs font-bold uppercase">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 max-w-xl text-sm leading-loose text-gray-600">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-gray-300 px-2 py-0.5 text-xs font-bold uppercase text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span className="self-center text-2xl font-black opacity-20 transition-all group-hover:text-red-600 group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 flex items-center justify-between border-t-4 border-black pt-8">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            &copy; 2026 Mike Mai
          </span>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-red-600"
              >
                {l}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
