import { JobDescription, CandidateInput } from "../types";

export const DEFAULT_JOB_DESCRIPTIONS: JobDescription[] = [
  {
    id: "fullstack_architect",
    title: "Lead Fullstack Architect",
    department: "Engineering Group",
    summary: "Seeking a senior technical leader proficient with Node.js, React, TypeScript, distributed caching, and microservices architecture. Responsible for engineering reliable, high-performance distributed systems, leading schema development, and supervising junior developers.",
    keywords: ["React", "TypeScript", "Node.js", "System Design", "Distributed Systems", "SQL", "Cloud Architecture"]
  },
  {
    id: "product_manager",
    title: "Senior Technical Product Manager",
    department: "Product & Growth",
    summary: "Seeking a Technical PM with strong user research backgrounds, proficient with product analytics, data science, agile backlogs, and stakeholder communication. Needs to bridge complex backend capabilities with customer-centric user interfaces.",
    keywords: ["Product Strategy", "User Research", "Agile", "SQL", "Product Analytics", "Roadmapping", "System Architecture"]
  },
  {
    id: "ai_engineer",
    title: "Generative AI Research Engineer",
    department: "Applied AI Research",
    summary: "Seeking an engineer to develop next-generation AI integrations using the latest LLMs (Gemini, Claude, GPT), vector databases, retrieval-augmented generation (RAG), and custom agents. Requires custom orchestration pipeline design.",
    keywords: ["Generative AI", "LLMs", "RAG", "Python", "Vector Databases", "Prompt Engineering", "Fine-Tuning"]
  }
];

export const INITIAL_CANDIDATES: CandidateInput[] = [
  {
    id: "Sarah",
    name: "Sarah Jenkins",
    role: "Senior Full Stack Engineer",
    experienceYears: 9,
    location: "San Francisco, CA",
    workPreference: "Hybrid",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "System Design", "Redis"],
    resumeText: "SUMMARY:\nExperienced Lead Full Stack Engineer with 9 years of expertise building highly scalable modern web integrations. Champion of technical execution, agile architectures, and clean code principles.\n\nEXPERIENCE:\n- Staff Engineer at NeoSync: Architected serverless real-time web socket dashboard scaling to 150k monthly active users. Reduced database footprint by 40% using optimized indices.\n- Senior Frontend Dev at CloudCrafter: Led migrations from legacy monoliths to component-based Vite + React apps.\n\nEDUCATION:\nB.S. in Computer Science, Stanford University."
  },
  {
    id: "Bilal",
    name: "Bilal Maqsood",
    role: "DevOps & Security Specialist",
    experienceYears: 6,
    location: "Austin, TX",
    workPreference: "Remote",
    skills: ["AWS", "Kubernetes", "TypeScript", "Docker", "Go", "Terraform", "CI/CD", "Node.js", "SQL"],
    resumeText: "SUMMARY:\nDevOps and Infrastructure Security Engineer focusing on zero-trust architectures, infrastructure as code, and fast delivery pipelines. Experienced with TypeScript serverless setups and AWS architecture.\n\nWORK HISTORY:\n- DevOps Architect at Securify (4 years): Designed and automated CI/CD security audits. Decreased average deploy downtime to sub-second level.\n- Cloud Operations Engineer at DevFlow: Integrated automated Docker builds with customized Kubernetes ingress setups.\n\nCERTIFICATIONS:\nAWS Certified Solutions Architect (Professional), Certified Kubernetes Administrator."
  },
  {
    id: "Lily",
    name: "Lily Chen",
    role: "Self-Taught Engineering Innovator",
    experienceYears: 2,
    location: "Seattle, WA",
    workPreference: "Remote",
    skills: ["React", "TypeScript", "CSS", "Tailwind CSS", "Next.js", "Git", "Figma", "UI Design"],
    resumeText: "SUMMARY:\nUnconventional, passionate developer transitioning from classical product design. High continuous learning drive, creator of beautiful interactive open-source audio editors and reactive canvas apps. High ceiling, looking to leverage advanced UI design skills.\n\nEXPERIENCE:\n- Independent Creator & Open Source Developer (2 years): Authored 'WebSynth' with over 800 stars on GitHub—a client-side React audio editor.\n- Freelance Web Craftsman: Delivered customized responsive digital platforms with React and styled interactive elements.\n\nHIDDEN QUALITIES:\nFast learning agility, steep cognitive evolution trajectory, exceptional design empathy."
  },
  {
    id: "Marcus",
    name: "Marcus Vance",
    role: "Legacy Backend Developer",
    experienceYears: 12,
    location: "New York, NY",
    workPreference: "In-office",
    skills: ["Java", "SQL", "Spring Boot", "Oracle", "C#", "SOAP APIs", "Linux", "Node.js"],
    resumeText: "SUMMARY:\nReliable and deeply experienced veteran developer specializing in high-security enterprise accounting setups, transactional consistency, and legacy databases.\n\nPROFESSIONAL HISTORY:\n- Senior Backend Architect at GlobalBank (8 years): Maintained and reinforced core spring-boot microservices running inside virtual machines. High loyalty, zero service violations.\n- Software Developer at LegacyTrade Corp: Engineered transactional consistency patterns across heterogeneous distributed SQL setups.\n\nGAPS / TRAITS:\nStrong technical foundation, prefers structured stable workspaces over dynamic startup codebases."
  }
];
