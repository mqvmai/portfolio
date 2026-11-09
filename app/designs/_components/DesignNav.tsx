"use client";

import Link from "next/link";

const labels = [
  "CLI", "Light", "Bento", "Brutal", "Film",
  "Hybrid", "IDE", "Mono",
];

export default function DesignNav({ current }: { current: number }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-white/10 bg-black/80 px-6 py-3 backdrop-blur-md">
      <Link
        href="/"
        className="font-mono text-xs text-white/40 transition-colors hover:text-white"
      >
        ← back to main
      </Link>
      <div className="flex items-center gap-1">
        {labels.map((label, i) => (
          <Link
            key={i}
            href={`/designs/${i + 1}`}
            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              current === i + 1
                ? "bg-white text-black"
                : "text-white/50 hover:bg-white/10 hover:text-white"
            }`}
          >
            {i + 1}. {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
