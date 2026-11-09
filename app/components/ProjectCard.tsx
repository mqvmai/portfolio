"use client";

import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  icon: string;
  href: string;
  status?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
    >
      {/* Gradient header */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} p-6`}>
        <span className="text-5xl">{project.icon}</span>
        {project.status && (
          <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white">
            {project.status}
          </span>
        )}
        {/* Shine overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/0" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-white/60">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className={`mt-2 flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2 ${project.accentColor}`}>
          View Project
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
