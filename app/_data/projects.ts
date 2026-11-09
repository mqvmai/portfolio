export const projects = [
  {
    title: "TourSpot",
    slug: "tourspot",
    icon: "🗺️",
    description:
      "Search any city, get POIs ranked by real review volume — not paid placement. GraphQL API backed by Google Places, Redis-cached for speed.",
    tags: ["Next.js", "TypeScript", "Node.js", "NestJS", "GraphQL", "PostgreSQL", "Redis", "Google Places API"],
    href: "#",
  },
  {
    title: "AutoAlt",
    slug: "autoalt",
    icon: "🤖",
    description:
      "Upload an image, get production-ready alt text in seconds. Runs OpenAI Vision and Amazon Rekognition in parallel and returns the best result.",
    tags: ["React", "TypeScript", "Node.js", "NestJS", "OpenAI Vision", "Amazon Rekognition", "AWS S3", "Docker"],
    href: "#",
  },
  {
    title: "DocuChat",
    slug: "docuchat",
    icon: "💬",
    description:
      "Upload any PDF, ask questions in plain English, get cited answers. Chunks and embeds the document on upload, retrieves relevant passages at query time.",
    tags: ["Python", "FastAPI", "pgvector", "OpenAI", "React", "Docker"],
    href: "#",
  },
  {
    title: "ScoreLine",
    slug: "scoreline",
    icon: "🏆",
    description:
      "Live NBA and NFL scores alongside real-time betting lines from multiple sportsbooks. Line movements flagged as they shift — all pushed over WebSocket.",
    tags: ["Vue 3", "TypeScript", "Node.js", "NestJS", "Socket.io", "Redis", "MongoDB", "Docker"],
    href: "#",
  },
];

export const links = [
  { label: "GitHub",   href: "https://github.com/mqvmai" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mm-dev" },
  { label: "Resume",   href: "/resume.pdf" },
];

export const stackRows = [
  ["TypeScript", "Python", "Java"],
  ["React", "Vue 3", "Next.js"],
  ["NestJS", "Spring Boot", "GraphQL"],
  ["PostgreSQL", "MongoDB", "Redis"],
  ["AWS", "Docker", "Kubernetes"],
  ["OpenAI", "Rekognition", "RAG"],
];

export const industries = ["Publishing", "Healthcare", "Fintech"];
