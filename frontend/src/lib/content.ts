export const services = [
  {
    title: "AI Chatbots & Assistants",
    description: "RAG pipelines, NLP, and document intelligence that turn your knowledge base into a conversational interface.",
    tags: ["RAG", "NLP", "Document Intelligence"],
  },
  {
    title: "Generative AI Applications",
    description: "LLM fine-tuning, prompt engineering, and content engines built for production, not demos.",
    tags: ["LLM Fine-tuning", "Prompt Engineering", "Content Engines"],
  },
  {
    title: "Web Development",
    description: "React frontends backed by Python services — fast, typed, and built to scale with your product.",
    tags: ["React", "FastAPI", "TypeScript"],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps built on a shared backend, from prototype to app-store launch.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "UX/UI Design",
    description: "Interfaces designed around how people actually use AI products — clear, fast, and trustworthy.",
    tags: ["Product Design", "Prototyping", "Design Systems"],
  },
  {
    title: "Software Testing",
    description: "Automated test suites and QA processes that catch regressions before your users do.",
    tags: ["Test Automation", "QA", "CI/CD"],
  },
  {
    title: "Reinforcement Learning",
    description: "Custom RL agents and environments for decision-making systems that learn from experience.",
    tags: ["Stable-Baselines3", "Custom Environments", "Gymnasium"],
  },
  {
    title: "NLP Solutions",
    description: "Text classification, named entity recognition, and language understanding built on modern NLP tooling.",
    tags: ["spaCy", "Hugging Face", "Classification"],
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "We dig into the problem, the data, and the constraints before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    description: "Architecture and prompts are prototyped against real inputs, not synthetic demos.",
  },
  {
    step: "03",
    title: "Build",
    description: "Production-grade implementation with typed APIs, evals, and observability from day one.",
  },
  {
    step: "04",
    title: "Ship",
    description: "Deployed, monitored, and handed off with the documentation your team actually needs.",
  },
] as const;

export const stats = [
  { value: 12, suffix: "+", label: "AI products shipped" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 40, suffix: "%", label: "Avg. cost reduction" },
  { value: 8, suffix: "", label: "Core service lines" },
] as const;
