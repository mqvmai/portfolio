import DesignNav from "../_components/DesignNav";
import { projects } from "../_data/projects";

export default function TerminalDesign() {
  return (
    <div className="min-h-screen bg-black font-mono text-green-400">
      <DesignNav current={1} />

      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* Terminal hero */}
        <div className="mb-16 space-y-1.5 text-sm">
          <p className="text-green-800">Last login: Sat Nov 8 09:12:03 on ttys001</p>
          <p>
            <span className="text-green-700">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>{" "}
            <span className="text-green-300">whoami</span>
          </p>
          <p className="text-2xl font-bold py-1 text-green-300">Mike Mai</p>

          <p>
            <span className="text-green-700">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>{" "}
            <span className="text-green-300">cat .profile</span>
          </p>
          <p className="text-green-400">Senior Software Engineer</p>
          <p className="max-w-xl text-green-400/60">
            Building reliable systems at scale. Interested in distributed
            systems, compilers, and developer tooling. Currently available.
          </p>

          <p className="pt-4">
            <span className="text-green-700">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>{" "}
            <span className="text-green-300">ls -la ./projects/</span>
          </p>
        </div>

        {/* Project cards styled as terminal windows */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-sm border border-green-900/70"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-green-900/70 bg-zinc-900 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-green-700">
                  ~/projects/{p.title.toLowerCase().replace(/\s+/g, "-")}/README.md
                </span>
                {p.status && (
                  <span className="ml-auto border border-green-900/70 px-1.5 text-xs text-green-700">
                    {p.status}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="mb-1 text-xs text-green-800">$ cat README.md</p>
                <p className="mb-2 flex items-center gap-2 text-lg font-bold">
                  <span>{p.icon}</span> {p.title}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-green-400/60">
                  {p.description}
                </p>

                <p className="mb-2 text-xs text-green-800">
                  $ grep &quot;dependencies&quot; package.json
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-green-900 px-2 py-0.5 text-xs text-green-600"
                    >
                      [{t}]
                    </span>
                  ))}
                </div>

                <a
                  href={p.href}
                  className="text-xs text-green-500 transition-colors hover:text-green-300"
                >
                  $ open --new-window ./{" "}
                  <span className="inline-block h-3.5 w-2 animate-pulse bg-green-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer prompt */}
        <div className="mt-16 space-y-1 text-sm">
          <p>
            <span className="text-green-700">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>{" "}
            <span className="text-green-300">echo $CONTACT</span>
          </p>
          <p className="text-green-400/60">
            github.com/yourhandle &nbsp;·&nbsp; linkedin.com/in/yourname
            &nbsp;·&nbsp; you@email.com
          </p>
          <p className="flex items-center gap-1">
            <span className="text-green-700">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>
            <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-green-400" />
          </p>
        </div>
      </div>
    </div>
  );
}
