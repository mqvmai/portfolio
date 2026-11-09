"use client";
import Link from "next/link";

const labels = ["Minimal","Code","Newsprint","Dashboard","Glass","Neon","Luxury","Electric","Editorial","DotGrid"];

export default function ShowcaseNav({ current }: { current: number }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-2.5 backdrop-blur-md">
      <Link href="/" className="font-mono text-xs text-white/40 transition-colors hover:text-white">
        ← back
      </Link>
      <div className="flex gap-1">
        {labels.map((label, i) => (
          <Link
            key={i}
            href={`/showcase/${i + 1}`}
            title={label}
            className={`flex h-7 w-7 items-center justify-center rounded text-xs font-semibold transition-colors ${
              current === i + 1
                ? "bg-white text-black"
                : "text-white/50 hover:bg-white/10 hover:text-white"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
