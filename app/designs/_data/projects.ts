export const projects = [
  {
    title: "DistCache",
    description:
      "Distributed caching layer in Go that reduced API p99 latency by 60% across 50k RPS. Implements consistent hashing, TTL eviction, and hot-standby replication.",
    tags: ["Go", "Redis", "Kubernetes", "gRPC"],
    gradient: "from-violet-600 via-purple-600 to-pink-600",
    accentColor: "text-violet-400",
    icon: "⚡",
    href: "#",
    status: "Open Source",
    number: "01",
  },
  {
    title: "Flux Pipeline",
    description:
      "Real-time data pipeline processing 2M events/day. Built with Python and Apache Kafka, with a React dashboard for monitoring and alerting.",
    tags: ["Python", "Kafka", "React", "PostgreSQL"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    accentColor: "text-cyan-400",
    icon: "🌊",
    href: "#",
    status: "Live",
    number: "02",
  },
  {
    title: "NeuralSearch",
    description:
      "Semantic search engine using fine-tuned embeddings and FAISS. 10x more relevant results than keyword search, deployed as a FastAPI microservice.",
    tags: ["Python", "PyTorch", "FAISS", "FastAPI"],
    gradient: "from-emerald-500 via-teal-600 to-green-700",
    accentColor: "text-emerald-400",
    icon: "🧠",
    href: "#",
    number: "03",
  },
  {
    title: "ScoreLine",
    description:
      "Live NBA and NFL scores alongside real-time betting lines from multiple sportsbooks. Line movements are flagged as they shift — all pushed over WebSocket.",
    tags: ["Vue 3", "TypeScript", "NestJS", "Socket.io", "Redis", "MongoDB", "Docker"],
    gradient: "from-orange-500 via-rose-500 to-red-600",
    accentColor: "text-orange-400",
    icon: "🏆",
    href: "#",
    status: "WIP",
    number: "04",
  },
];
