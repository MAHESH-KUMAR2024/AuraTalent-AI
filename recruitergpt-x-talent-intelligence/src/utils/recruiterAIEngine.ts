export interface RecruiterAIIntelligence {
  // 1. AI Hiring Confidence Engine
  confidenceScore: number;
  confidenceLevel: "Low" | "Medium" | "High" | "Elite";
  confidenceReason: string;
  confidenceTrend: number[]; // Trend animation sequence
  confidenceTrendVal: string; // e.g. "+5.4%"

  // 2. Hidden Talent Discovery
  hiddenGemScore: number;
  hiddenGemReason: string;
  futureSuccessPrediction: string;
  estimatedUpskillingTime: string;

  // 3. Career DNA Analysis
  dnaScores: {
    Builder: number;
    Leader: number;
    Innovator: number;
    Architect: number;
    Researcher: number;
    "Problem Solver": number;
    Mentor: number;
    "Execution Specialist": number;
  };
  dominantPersonality: string;

  // 4. AI Recruiter Insights
  recruiterInsights: string[];

  // 5. Team Compatibility Predictor (Team Chemistry)
  teamChemistry: {
    teamName: string;
    score: number;
    reason: string;
  }[];

  // 6. Interview Intelligence Generator
  interviewIntelligence: {
    category: "Technical" | "System Design" | "Behavioral" | "Leadership" | "Follow-up";
    question: string;
    suggestedAnswer: string;
    difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
    duration: string;
  }[];

  // 7. Hiring Risk Dashboard
  hiringRisks: {
    riskType: "Skill Gap" | "Leadership Gap" | "Communication Risk" | "Domain Risk" | "Retention Risk";
    severity: "Negligible" | "Low" | "Moderate" | "Critical";
    explanation: string;
    mitigationStrategy: string;
  }[];

  // 8. AI Career Growth Predictor
  careerGrowth: {
    timeline: "6 Months" | "1 Year" | "3 Years" | "5 Years";
    predictedRole: string;
    milestoneFocus: string;
    successProbability: number;
  }[];

  // 9. Salary Intelligence
  salaryIntelligence: {
    expectedSalary: string;
    marketSalary: string;
    negotiationRange: string;
    confidence: string;
    reasoning: string;
  };

  // 10. Explainable AI Panel
  scoreBreakdown: {
    dimension: "Technical Skills" | "Experience" | "Projects" | "Leadership" | "Learning Ability" | "Communication" | "Culture Fit";
    contributionPercentage: number;
    score: number;
  }[];

  // 11. Recruiter Decision Simulator
  decisionSimulator: {
    recommendation: "Hire Immediately" | "Shortlist" | "Reject";
    why: string;
    suitabilityScore: number;
  }[];

  // 13. AI Resume Heatmap
  resumeHeatmap: {
    strongSections: string[];
    weakSections: string[];
    missingInfo: string[];
    highImpactAchievements: string[];
    readabilityScore: string; // e.g. "A+ Premium"
    atsCompatibility: string; // e.g. "96%"
  };

  // 14. Learning Agility Score
  learningAgilityDetails: {
    adaptability: number;
    curiosity: number;
    technologyAdoption: number;
    learningSpeed: number;
    certificationTrend: string;
    projectDiversity: string;
    prediction: string;
  };

  // 16. Hiring Timeline Prediction
  timelinePrediction: {
    interviewRounds: number;
    offerProbability: number;
    joiningProbability: number;
    expectedJoiningDate: string;
    riskOfDecline: string;
  };

  // 17. Candidate Success Simulator
  successSimulator: {
    thirtyDay: string;
    ninetyDay: string;
    sixMonth: string;
    probabilityOfPromotion: number;
    longTermSuccessScore: number;
  };

  // 18. Executive Summary Card
  executiveSummary: string;

  // 19. AI Decision Audit
  decisionAudit: {
    evidenceUsed: string[];
    missingEvidence: string[];
    auditConfidence: number;
    biasWarning: string;
    alternativeRecommendation: string;
  };

  // 20. Future Workforce Forecast
  workforceForecast: {
    futureSkillGaps: string[];
    recommendedTraining: string[];
    emergingTechnologies: string[];
    careerRoadmap: string;
    probabilityOfSuccess: number;
  };
}

export function generateCandidateAIIntelligence(
  name: string,
  role: string,
  skills: string[],
  experienceYears: number
): RecruiterAIIntelligence {
  const normalizedName = (name || "").toLowerCase();

  // 1. Sarah Jenkins
  if (normalizedName.includes("sarah")) {
    return {
      confidenceScore: 94,
      confidenceLevel: "Elite",
      confidenceReason: "Exceptional system design expertise, strong architectural leadership background from Stanford, and comprehensive Node/React full-stack alignment.",
      confidenceTrend: [88, 90, 92, 94],
      confidenceTrendVal: "+6.8% (Upward Acceleration)",
      
      hiddenGemScore: 78,
      hiddenGemReason: "Possesses strong product strategy sense and open-source metrics capabilities that go beyond standard engineering responsibilities.",
      futureSuccessPrediction: "Highly likely to spearhead Next-Gen architectural shifts. Predicted Top 5% contributor in Year 1.",
      estimatedUpskillingTime: "Under 5 Days (Onboards immediately)",
      
      dnaScores: {
        Builder: 95,
        Leader: 88,
        Innovator: 90,
        Architect: 98,
        Researcher: 82,
        "Problem Solver": 96,
        Mentor: 89,
        "Execution Specialist": 94
      },
      dominantPersonality: "The Catalyst Architect (Architect + Builder)",
      
      recruiterInsights: [
        "Demonstrates exceptional full-stack serverless ownership.",
        "Identified as a high-probability future engineering director.",
        "Outstanding cross-functional alignment and technical clarity.",
        "Exceptional probability of multi-year talent retention."
      ],
      
      teamChemistry: [
        { teamName: "Backend Team", score: 98, reason: "Perfect alignment with Node.js and distributed database caching models." },
        { teamName: "Frontend Team", score: 92, reason: "Vite/React experience ensures cohesive component patterns and interface speed." },
        { teamName: "DevOps", score: 85, reason: "Familiar with Docker and AWS; can collaborate on infrastructure as code." },
        { teamName: "AI Team", score: 82, reason: "Pragmatic developer who can translate model outputs into scalable, durable web features." },
        { teamName: "Product Team", score: 89, reason: "Excellent communication; bridges technical constraints with growth timelines." }
      ],
      
      interviewIntelligence: [
        {
          category: "Technical",
          question: "Explain your process for optimizing high-frequency PostgreSQL queries when scaling to 150k monthly active users.",
          suggestedAnswer: "Assess execution plans with EXPLAIN ANALYZE, establish appropriate composite indexing, implement Redis cache facades for read-heavy routes, and split write/read queries.",
          difficulty: "Hard",
          duration: "15 min"
        },
        {
          category: "System Design",
          question: "How would you design an event-driven notification engine that maintains order consistency across decoupled microservices?",
          suggestedAnswer: "Utilize an event log (Kafka or Amazon Kinesis) with partition keys matching the entity identifier to preserve message sequences, backed by idempotent consumers.",
          difficulty: "Extreme",
          duration: "25 min"
        },
        {
          category: "Behavioral",
          question: "Describe a time you proposed a significant refactoring of a core API and faced pushback from stakeholders. How did you align the team?",
          suggestedAnswer: "Presented clear metrics on database load reduction, designed a gradual rollout (canary) to minimize risk, and conducted paired coding clinics to ease transition.",
          difficulty: "Medium",
          duration: "10 min"
        },
        {
          category: "Leadership",
          question: "How do you mentor junior developers to ensure they adopt strict clean code principles without stifling their feature delivery speed?",
          suggestedAnswer: "Establish clear boilerplate templates, design collaborative code reviews as constructive learning loops, and decouple standard lint rules from manual critiques.",
          difficulty: "Hard",
          duration: "12 min"
        },
        {
          category: "Follow-up",
          question: "You mentioned reducing NeoSync's database footprint by 40%. What specific telemetry tools did you use to verify this change?",
          suggestedAnswer: "Employed AWS CloudWatch, pg_stat_statements, and Datadog tracing to track active memory, CPU cycles, and index cache hit ratios.",
          difficulty: "Medium",
          duration: "8 min"
        }
      ],
      
      hiringRisks: [
        {
          riskType: "Skill Gap",
          severity: "Negligible",
          explanation: "No major skill gaps identified for lead full-stack roles. Already proficient across Node/React ecosystem.",
          mitigationStrategy: "N/A"
        },
        {
          riskType: "Leadership Gap",
          severity: "Low",
          explanation: "Already exhibits high mentorship values, but may require a buffer period to establish trust in a newly consolidated team.",
          mitigationStrategy: "Incorporate into high-level sprint architectural decisions during the first 30 days."
        },
        {
          riskType: "Communication Risk",
          severity: "Negligible",
          explanation: "Highly articulate; communicates complex schemas with supreme clarity.",
          mitigationStrategy: "N/A"
        },
        {
          riskType: "Domain Risk",
          severity: "Low",
          explanation: "Transitioning to custom AI domain requires learning modern vector store indices.",
          mitigationStrategy: "Assign an introductory training module on Pinecone or pgvector schemas during onboarding."
        },
        {
          riskType: "Retention Risk",
          severity: "Low",
          explanation: "A top-tier talent who will receive continuous external inquiries if not sufficiently challenged.",
          mitigationStrategy: "Set a clear 12-month engineering path toward a Staff/Architect promotion with autonomous system design scope."
        }
      ],
      
      careerGrowth: [
        { timeline: "6 Months", predictedRole: "Senior Full Stack Engineer (Team Anchor)", milestoneFocus: "Spearhead serverless API migrations and set UI best practices.", successProbability: 95 },
        { timeline: "1 Year", predictedRole: "Lead Full Stack Architect", milestoneFocus: "Establish core distributed caching systems and optimize database schemas.", successProbability: 92 },
        { timeline: "3 Years", predictedRole: "Principal Systems Engineer / Tech Lead", milestoneFocus: "Own global technical roadmap and lead inter-departmental platforms.", successProbability: 88 },
        { timeline: "5 Years", predictedRole: "Director of Engineering", milestoneFocus: "Manage structural engineering divisions and steer organizational architecture.", successProbability: 82 }
      ],
      
      salaryIntelligence: {
        expectedSalary: "$180,000",
        marketSalary: "$188,000",
        negotiationRange: "$175,000 - $195,000",
        confidence: "96% (High Market Alignment)",
        reasoning: "Aligned with senior Silicon Valley metrics and her 9-year pedigree. Fair compensation for immediate system design contribution."
      },
      
      scoreBreakdown: [
        { dimension: "Technical Skills", contributionPercentage: 30, score: 96 },
        { dimension: "Experience", contributionPercentage: 20, score: 92 },
        { dimension: "Projects", contributionPercentage: 15, score: 95 },
        { dimension: "Leadership", contributionPercentage: 15, score: 90 },
        { dimension: "Learning Ability", contributionPercentage: 10, score: 94 },
        { dimension: "Communication", contributionPercentage: 5, score: 96 },
        { dimension: "Culture Fit", contributionPercentage: 5, score: 92 }
      ],
      
      decisionSimulator: [
        { recommendation: "Hire Immediately", why: "Outstanding technical match who immediately stabilizes system architectures and elevates code quality standards.", suitabilityScore: 98 },
        { recommendation: "Shortlist", why: "Backup approach if final budget approvals are delayed, though high risk of lose to competitor pipelines.", suitabilityScore: 82 },
        { recommendation: "Reject", why: "Only applicable if the team is downscaling to legacy-only maintenance needing zero modernization.", suitabilityScore: 10 }
      ],
      
      resumeHeatmap: {
        strongSections: ["Staff Engineer Tenure", "Stanford CS Background", "High-frequency DB Optimization", "Vite/React Modernizations"],
        weakSections: ["Relatively short freelance tenure early in career"],
        missingInfo: ["No explicit machine learning framework certificates"],
        highImpactAchievements: ["Reduced DB footprint by 40% at NeoSync", "Scaled web sockets to 150k monthly active users"],
        readabilityScore: "A+ Executive Premium",
        atsCompatibility: "98% (Highly Optimized Structure)"
      },
      
      learningAgilityDetails: {
        adaptability: 94,
        curiosity: 92,
        technologyAdoption: 96,
        learningSpeed: 95,
        certificationTrend: "Steady (+12% annually)",
        projectDiversity: "High (Serverless, APIs, Frontend optimization)",
        prediction: "Capable of mastering pgvector systems in under 7 days."
      },
      
      timelinePrediction: {
        interviewRounds: 3,
        offerProbability: 92,
        joiningProbability: 88,
        expectedJoiningDate: "July 18, 2026",
        riskOfDecline: "12% (Low - Has positive brand alignment)"
      },
      
      successSimulator: {
        thirtyDay: "Completes microservices cache integration and ships first core pipeline improvements.",
        ninetyDay: "Deploys real-time dashboard updates and guides the team on modern database indexing.",
        sixMonth: "Establishes a solid developer mentorship program and drives 30% reduction in code review turnaround.",
        probabilityOfPromotion: 82,
        longTermSuccessScore: 97
      },
      
      executiveSummary: "Sarah Jenkins is our most robust technical match. She offers an outstanding Stanford computer science foundation combined with a rich 9-year track record of scaling high-throughput systems, optimizing complex databases, and leading collaborative refactoring. Highly recommended for immediate hiring as a technical cornerstone.",
      
      decisionAudit: {
        evidenceUsed: ["NeoSync staff engineer achievements", "9-year verified Fullstack history", "SQL optimization metrics"],
        missingEvidence: ["No native mobile experience mentioned"],
        auditConfidence: 95,
        biasWarning: "Standardized high-tier pedigree (Stanford) might draw automatic high ratings; model compensated by emphasizing her real-world optimization metrics.",
        alternativeRecommendation: "Consider as a Principal Frontend Modernizer if backend roles are fully occupied."
      },
      
      workforceForecast: {
        futureSkillGaps: ["Advanced vector database designs", "Enterprise compliance schemas"],
        recommendedTraining: ["pgvector optimization tutorials", "SOC2 compliance structures"],
        emergingTechnologies: ["Sub-second Edge rendering", "Autonomous schema versioning"],
        careerRoadmap: "Staff Engineer -> Principal System Lead -> Chief Architect",
        probabilityOfSuccess: 96
      }
    };
  }

  // 2. Bilal Maqsood
  if (normalizedName.includes("bilal")) {
    return {
      confidenceScore: 89,
      confidenceLevel: "High",
      confidenceReason: "Elite container orchestration, AWS networking design, and IaC deployment speed. Exceptional security background.",
      confidenceTrend: [85, 87, 88, 89],
      confidenceTrendVal: "+4.2% (Steady Security Rise)",
      
      hiddenGemScore: 82,
      hiddenGemReason: "Strong developer fundamentals in Go/TypeScript, allowing him to write system scripts and secure tooling rather than just configure third-party software.",
      futureSuccessPrediction: "Will elevate infrastructure security, leading to near-zero service disruptions. Key asset for high-availability setups.",
      estimatedUpskillingTime: "Under 7 Days (AWS certified professional)",
      
      dnaScores: {
        Builder: 88,
        Leader: 72,
        Innovator: 75,
        Architect: 94,
        Researcher: 80,
        "Problem Solver": 91,
        Mentor: 78,
        "Execution Specialist": 96
      },
      dominantPersonality: "The Infrastructure Guardian (Architect + Specialist)",
      
      recruiterInsights: [
        "Unmatched skill in AWS zero-trust configuration.",
        "Crucial anchor for high-scale continuous deployment pipelines.",
        "Ensures zero-downtime microservice migrations.",
        "Highly reliable and structured team player."
      ],
      
      teamChemistry: [
        { teamName: "Backend Team", score: 90, reason: "Bridges deployment bottlenecks and sets up secure Docker/SQL interfaces." },
        { teamName: "Frontend Team", score: 75, reason: "Excellent support for CI/CD, though has lower direct UX engagement." },
        { teamName: "DevOps", score: 99, reason: "Natural habitat. Proficient with Terraform, Kubernetes, and secure pipelines." },
        { teamName: "AI Team", score: 86, reason: "Essential for provisioning high-performance GPUs and secure data nodes." },
        { teamName: "Product Team", score: 80, reason: "Ensures uptime requirements and SLA agreements are strictly met." }
      ],
      
      interviewIntelligence: [
        {
          category: "Technical",
          question: "How would you model a zero-trust multi-region VPC network inside AWS using Terraform?",
          suggestedAnswer: "Establish isolated subnets with strict security groups, route traffic through Transit Gateways with inspect firewalls, and use IAM roles with least-privilege permission sets.",
          difficulty: "Hard",
          duration: "18 min"
        },
        {
          category: "System Design",
          question: "Design a secure, self-healing continuous delivery pipeline for microservices that enforces automated static security analysis.",
          suggestedAnswer: "Git triggers a webhook -> build containers are analyzed via Trivy/Snyk -> successful builds push to private ECR -> Canary deploy on EKS with Prometheus health probes.",
          difficulty: "Hard",
          duration: "20 min"
        },
        {
          category: "Behavioral",
          question: "Give an example of a security vulnerability you discovered in production and how you patched it without disrupting user traffic.",
          suggestedAnswer: "Identified a SQL injection vector in an old route. Wrote a patch, ran it through an automated staging build, deployed a parallel container, and gradually shifted traffic.",
          difficulty: "Medium",
          duration: "10 min"
        },
        {
          category: "Leadership",
          question: "How do you educate software developers to take responsibility for security early in their coding process?",
          suggestedAnswer: "By embedding automated security feedback directly into their local development workflow and pre-commit hooks, preventing blockages in final pipelines.",
          difficulty: "Medium",
          duration: "10 min"
        },
        {
          category: "Follow-up",
          question: "You mentioned reducing deploy downtime to sub-seconds. What deployment strategy did you utilize to achieve this?",
          suggestedAnswer: "Leveraged blue-green deployments on Kubernetes with custom ingress controllers and pre-warmed database cache connection pools.",
          difficulty: "Medium",
          duration: "8 min"
        }
      ],
      
      hiringRisks: [
        {
          riskType: "Skill Gap",
          severity: "Low",
          explanation: "Minimal direct design experience in high-fidelity consumer web layouts.",
          mitigationStrategy: "Focus his tasks purely on system pipelines, infrastructure, security, and backend APIs."
        },
        {
          riskType: "Leadership Gap",
          severity: "Moderate",
          explanation: "Less experienced in leading large strategic engineering growth meetings.",
          mitigationStrategy: "Provide opportunities to lead weekly infrastructure reviews to build public leadership trust."
        },
        {
          riskType: "Communication Risk",
          severity: "Negligible",
          explanation: "Highly structured and clear, presenting metrics-focused security feedback.",
          mitigationStrategy: "N/A"
        },
        {
          riskType: "Domain Risk",
          severity: "Low",
          explanation: "New to core generative AI model parameter setups.",
          mitigationStrategy: "Integrate him with the AI team to focus on secure pipeline deployments of models."
        },
        {
          riskType: "Retention Risk",
          severity: "Low",
          explanation: "Stable and loyal; values mature engineering practices and clean workflows.",
          mitigationStrategy: "Provide robust autonomy over modern infrastructure tooling choices (Terraform updates)."
        }
      ],
      
      careerGrowth: [
        { timeline: "6 Months", predictedRole: "DevOps & Security Specialist", milestoneFocus: "Automate zero-trust VPC configurations and stabilize build speeds.", successProbability: 94 },
        { timeline: "1 Year", predictedRole: "Senior Infrastructure Engineer", milestoneFocus: "Refactor global Kubernetes ingress and reduce AWS costs by 20%.", successProbability: 90 },
        { timeline: "3 Years", predictedRole: "DevOps Architect", milestoneFocus: "Design multi-region disaster recovery systems and head IaC standards.", successProbability: 85 },
        { timeline: "5 Years", predictedRole: "VP of Cloud Infrastructure / Security", milestoneFocus: "Supervise overall cloud budgets, security protocols, and corporate compliance.", successProbability: 75 }
      ],
      
      salaryIntelligence: {
        expectedSalary: "$165,000",
        marketSalary: "$172,000",
        negotiationRange: "$160,000 - $178,000",
        confidence: "95% (High Reliability)",
        reasoning: "Aligned with senior DevOps specialists in major tech hubs. High value due to his AWS and Kubernetes certifications."
      },
      
      scoreBreakdown: [
        { dimension: "Technical Skills", contributionPercentage: 30, score: 94 },
        { dimension: "Experience", contributionPercentage: 20, score: 85 },
        { dimension: "Projects", contributionPercentage: 15, score: 88 },
        { dimension: "Leadership", contributionPercentage: 15, score: 75 },
        { dimension: "Learning Ability", contributionPercentage: 10, score: 88 },
        { dimension: "Communication", contributionPercentage: 5, score: 86 },
        { dimension: "Culture Fit", contributionPercentage: 5, score: 90 }
      ],
      
      decisionSimulator: [
        { recommendation: "Hire Immediately", why: "Essential if the team needs to immediately scale infrastructure, stabilize deployment setups, and pass upcoming SOC2 security audits.", suitabilityScore: 92 },
        { recommendation: "Shortlist", why: "An excellent choice if the hiring focus prioritizes pure database optimization first, but should be hired quickly to secure cloud pipelines.", suitabilityScore: 85 },
        { recommendation: "Reject", why: "Only reasonable if the organization has zero cloud infrastructure and operates entirely on third-party SaaS sites.", suitabilityScore: 5 }
      ],
      
      resumeHeatmap: {
        strongSections: ["DevOps & Security Title", "Certified Kubernetes Administrator (CKA)", "Terraform automation", "CI/CD Downtime Reduction"],
        weakSections: ["Slightly shorter backend web development history"],
        missingInfo: ["No specific frontend state management libraries mentioned"],
        highImpactAchievements: ["Decreased average deploy downtime to sub-seconds", "Designed automated security scans at Securify"],
        readabilityScore: "A Premium Technical",
        atsCompatibility: "96% (Highly Parsable)"
      },
      
      learningAgilityDetails: {
        adaptability: 88,
        curiosity: 86,
        technologyAdoption: 90,
        learningSpeed: 87,
        certificationTrend: "Excellent (AWS Professional + CKA)",
        projectDiversity: "Medium-High (Cloud networks, Docker builds, Go scripting)",
        prediction: "Can configure and secure a fresh Kubernetes namespace in under 3 hours."
      },
      
      timelinePrediction: {
        interviewRounds: 3,
        offerProbability: 88,
        joiningProbability: 92,
        expectedJoiningDate: "July 25, 2026",
        riskOfDecline: "8% (Very Low - Highly aligned with our technical stack)"
      },
      
      successSimulator: {
        thirtyDay: "Secures existing AWS configurations and audits current CI/CD pipeline speeds.",
        ninetyDay: "Implements Terraform infrastructure modularity and reduces build failure rates by 30%.",
        sixMonth: "Spearheads compliance prep, introducing automated container scanning and dependency monitors.",
        probabilityOfPromotion: 75,
        longTermSuccessScore: 92
      },
      
      executiveSummary: "Bilal Maqsood is a stellar Cloud & Security Specialist who brings robust infrastructure credentials. His AWS and CKA certifications, combined with a 6-year history of automating CI/CD pipelines and securing microservice endpoints, make him the ultimate candidate to reinforce corporate deployment stability.",
      
      decisionAudit: {
        evidenceUsed: ["Securify cloud automation", "CKA credentials", "Sub-second downtime records"],
        missingEvidence: ["No database clustering management history"],
        auditConfidence: 93,
        biasWarning: "Certifications can trigger over-scoring; model verified his practical achievements in Securify to validate real-world impact.",
        alternativeRecommendation: "Consider as a Security Compliance Lead if pure DevOps roles are occupied."
      },
      
      workforceForecast: {
        futureSkillGaps: ["Advanced Vector database deployment structures", "Serverless orchestration"],
        recommendedTraining: ["Pinecone cluster security guides", "AWS Lambda networking"],
        emergingTechnologies: ["GitOps automated rollbacks", "Zero-trust edge nodes"],
        careerRoadmap: "Senior DevOps -> Lead Infrastructure Architect -> Director of Security",
        probabilityOfSuccess: 92
      }
    };
  }

  // 3. Lily Chen
  if (normalizedName.includes("lily")) {
    return {
      confidenceScore: 82,
      confidenceLevel: "Medium",
      confidenceReason: "Exceptional UI design sense, high creative ambition, and remarkable learning speed. Creative author of open-source WebSynth.",
      confidenceTrend: [70, 75, 78, 82],
      confidenceTrendVal: "+12.4% (Steepest Growth Slope)",
      
      hiddenGemScore: 96,
      hiddenGemReason: "A self-taught design prodigy who created 'WebSynth' from scratch. Possesses a master-level understanding of interactive UI canvases, CSS, and modern user experiences.",
      futureSuccessPrediction: "Highly likely to create world-class product interfaces. Can act as a product-UX-engineer bridge who speeds up design implementations.",
      estimatedUpskillingTime: "10-14 Days (Extremely agile learner)",
      
      dnaScores: {
        Builder: 90,
        Leader: 65,
        Innovator: 98,
        Architect: 72,
        Researcher: 88,
        "Problem Solver": 84,
        Mentor: 70,
        "Execution Specialist": 85
      },
      dominantPersonality: "The Product Visionary (Innovator + Builder)",
      
      recruiterInsights: [
        "Unparalleled design-to-code execution speeds.",
        "Created WebSynth open source project with 800+ stars.",
        "Brings exceptional UX and motion animation skills.",
        "High continuous curiosity; easily learns complex libraries."
      ],
      
      teamChemistry: [
        { teamName: "Backend Team", score: 68, reason: "Less experienced with backend databases, queries, and server caching systems." },
        { teamName: "Frontend Team", score: 98, reason: "A dream addition. Transforms static Figma ideas into fluid React pages instantly." },
        { teamName: "DevOps", score: 60, reason: "Requires standard pipeline setups; not focused on cloud networking." },
        { teamName: "AI Team", score: 88, reason: "Excellent for designing modern chat UI prompts and visual output interfaces." },
        { teamName: "Product Team", score: 95, reason: "Bridges engineering with visual layout; understands user empathy perfectly." }
      ],
      
      interviewIntelligence: [
        {
          category: "Technical",
          question: "How did you design the state architecture for WebSynth to handle low-latency client-side audio rendering in React?",
          suggestedAnswer: "Separated UI react state from the Web Audio API context. Kept audio node updates inside synchronous custom hooks, avoiding unnecessary re-renders of the component tree.",
          difficulty: "Medium",
          duration: "15 min"
        },
        {
          category: "System Design",
          question: "How would you implement a highly responsive, custom interactive canvas that supports drag-and-drop elements with fluid animations?",
          suggestedAnswer: "Utilize lightweight motion libraries or vanilla HTML5 canvas with a custom requestAnimationFrame loop, storing element coordinates in stable React refs.",
          difficulty: "Medium",
          duration: "15 min"
        },
        {
          category: "Behavioral",
          question: "How did you transition from classical product design to web engineering? What was your learning strategy?",
          suggestedAnswer: "Driven by a desire to build what I designed. Built small, fully functional widgets, examined open-source repos, and focused on mastering core JavaScript and CSS fundamentals.",
          difficulty: "Easy",
          duration: "10 min"
        },
        {
          category: "Leadership",
          question: "When collaborating with back-end engineers, how do you handle differences regarding API structures and response models?",
          suggestedAnswer: "Draft clear mock JSON schemas early in the planning phase, aligning frontend requirements with backend limits to establish solid interfaces.",
          difficulty: "Medium",
          duration: "10 min"
        },
        {
          category: "Follow-up",
          question: "What specific features of Tailwind CSS do you utilize to ensure responsive fluid layout boundaries across mobile and ultra-wide?",
          suggestedAnswer: "Utilize custom screen break points, flexible grid layouts, and dynamic clamp spacing functions directly inside tailwind config files.",
          difficulty: "Easy",
          duration: "8 min"
        }
      ],
      
      hiringRisks: [
        {
          riskType: "Skill Gap",
          severity: "Moderate",
          explanation: "Limited commercial background in complex relational databases (PostgreSQL, SQL indexing).",
          mitigationStrategy: "Pair with a senior backend engineer for initial database schema tasks, allowing her to focus on modern React interfaces."
        },
        {
          riskType: "Leadership Gap",
          severity: "Low",
          explanation: "New to enterprise-level organizational structures and legacy corporate standards.",
          mitigationStrategy: "Assign a dedicated senior mentor to guide her through standard corporate workflows."
        },
        {
          riskType: "Communication Risk",
          severity: "Negligible",
          explanation: "Highly expressive, positive, and collaborative designer-engineer.",
          mitigationStrategy: "N/A"
        },
        {
          riskType: "Domain Risk",
          severity: "Low",
          explanation: "No formal computer science degree; may miss legacy procedural algorithms.",
          mitigationStrategy: "Provide access to algorithmic courses or guide her with clear architectural blueprints."
        },
        {
          riskType: "Retention Risk",
          severity: "Low",
          explanation: "Highly passionate; needs creative freedom and modern projects to stay fully engaged.",
          mitigationStrategy: "Offer direct ownership of the front-end product design lifecycle and motion library choices."
        }
      ],
      
      careerGrowth: [
        { timeline: "6 Months", predictedRole: "UX Engineer (Frontend Innovator)", milestoneFocus: "Upgrade the core app interface and install custom fluid micro-animations.", successProbability: 95 },
        { timeline: "1 Year", predictedRole: "Product Engineer (Frontend Lead)", milestoneFocus: "Lead complex component libraries and collaborate directly on product roadmap specs.", successProbability: 88 },
        { timeline: "3 Years", predictedRole: "Design System Architect", milestoneFocus: "Design unified multi-platform UI components and lead design-to-code automations.", successProbability: 80 },
        { timeline: "5 Years", predictedRole: "Creative Director / Chief Product Officer", milestoneFocus: "Steer entire product designs, user experience philosophies, and frontend engineering units.", successProbability: 70 }
      ],
      
      salaryIntelligence: {
        expectedSalary: "$130,000",
        marketSalary: "$138,000",
        negotiationRange: "$122,000 - $142,000",
        confidence: "94% (Highly Competitive)",
        reasoning: "Exceptional frontend skill set. Although she has 2 years of traditional experience, her open-source project portfolio commands a premium."
      },
      
      scoreBreakdown: [
        { dimension: "Technical Skills", contributionPercentage: 30, score: 85 },
        { dimension: "Experience", contributionPercentage: 20, score: 65 },
        { dimension: "Projects", contributionPercentage: 15, score: 98 },
        { dimension: "Leadership", contributionPercentage: 15, score: 70 },
        { dimension: "Learning Ability", contributionPercentage: 10, score: 98 },
        { dimension: "Communication", contributionPercentage: 5, score: 95 },
        { dimension: "Culture Fit", contributionPercentage: 5, score: 96 }
      ],
      
      decisionSimulator: [
        { recommendation: "Shortlist", why: "An incredible candidate with supreme potential. Strongly recommended if your focus is to create beautiful consumer-facing apps.", suitabilityScore: 94 },
        { recommendation: "Hire Immediately", why: "A high-leverage hire. Her learning agility and unique product-engineering bridge skills will elevate frontend velocity.", suitabilityScore: 89 },
        { recommendation: "Reject", why: "Only if you strictly require a developer who only works on low-level database tuning and legacy network systems.", suitabilityScore: 12 }
      ],
      
      resumeHeatmap: {
        strongSections: ["WebSynth GitHub Open Source", "Figma Design Expertise", "React & Tailwind CSS mastery", "Self-taught transition story"],
        weakSections: ["Short corporate employment history"],
        missingInfo: ["No SQL or server-side databases mentioned"],
        highImpactAchievements: ["Authored 'WebSynth' (800+ stars)", "Delivered beautiful custom interactive canvas applications"],
        readabilityScore: "A Creative Executive",
        atsCompatibility: "90% (Readable, emphasizes projects)"
      },
      
      learningAgilityDetails: {
        adaptability: 98,
        curiosity: 99,
        technologyAdoption: 96,
        learningSpeed: 98,
        certificationTrend: "Upward (Self-guided masterclasses)",
        projectDiversity: "High (Audio synthesizer, Figma frames, React canvas)",
        prediction: "Capable of mastering backend Node API development in under 14 days."
      },
      
      timelinePrediction: {
        interviewRounds: 3,
        offerProbability: 85,
        joiningProbability: 90,
        expectedJoiningDate: "July 12, 2026",
        riskOfDecline: "10% (Low - Loves creative, forward-thinking startups)"
      },
      
      successSimulator: {
        thirtyDay: "Deploys customized component updates and adds smooth transitions to key dashboards.",
        ninetyDay: "Takes full ownership of the front-end design system, accelerating overall sprint velocity.",
        sixMonth: "Launches major interactive analytics features, collaborating closely with backend APIs.",
        probabilityOfPromotion: 88,
        longTermSuccessScore: 95
      },
      
      executiveSummary: "Lily Chen is our premier Hidden Gem. Transitioning from product design, her creation of the popular 'WebSynth' open-source editor proves she possesses spectacular UI engineering talent. Her steep learning agility and design-to-code capabilities make her an exceptional asset to elevate user engagement.",
      
      decisionAudit: {
        evidenceUsed: ["WebSynth open-source repo", "Product design history", "Interactive React apps"],
        missingEvidence: ["No large-scale corporate enterprise experience"],
        auditConfidence: 91,
        biasWarning: "Lack of traditional computer science degree may flag automatic filters; model bypassed this by weighting her stellar open-source output and design systems history.",
        alternativeRecommendation: "Consider as a Product Designer & UX Prototyper if direct software roles require high-frequency SQL experience."
      },
      
      workforceForecast: {
        futureSkillGaps: ["Advanced backend SQL caching patterns", "Cloud network architectures"],
        recommendedTraining: ["Node/Express backend bootcamps", "Database indexing structures"],
        emergingTechnologies: ["Framer Motion physics", "Web Audio API enhancements"],
        careerRoadmap: "UX Engineer -> Lead Product Developer -> CPO",
        probabilityOfSuccess: 94
      }
    };
  }

  // 4. Marcus Vance
  if (normalizedName.includes("marcus")) {
    return {
      confidenceScore: 76,
      confidenceLevel: "Medium",
      confidenceReason: "Deeply experienced in legacy enterprise architectures, Spring Boot, and robust SQL database consistency. High loyalty and structured stability.",
      confidenceTrend: [78, 77, 76, 76],
      confidenceTrendVal: "-2.1% (Clash with ultra-modern frameworks)",
      
      hiddenGemScore: 45,
      hiddenGemReason: "A traditional backend engineer who thrives in mature, highly structured environments rather than rapid startup pivots.",
      futureSuccessPrediction: "Highly reliable for maintaining transaction consistency in high-security backend pipelines. Low friction in legacy setups.",
      estimatedUpskillingTime: "30-40 Days (Needs time to transition to React/TypeScript ecosystems)",
      
      dnaScores: {
        Builder: 82,
        Leader: 70,
        Innovator: 50,
        Architect: 88,
        Researcher: 60,
        "Problem Solver": 85,
        Mentor: 75,
        "Execution Specialist": 90
      },
      dominantPersonality: "The Legacy Guardian (Architect + Execution Specialist)",
      
      recruiterInsights: [
        "Unmatched expertise in Spring Boot and transactional safety.",
        "Deep understanding of traditional SQL relational database design.",
        "Highly loyal and structured team member.",
        "Prefers established requirements and stable workflows."
      ],
      
      teamChemistry: [
        { teamName: "Backend Team", score: 85, reason: "Excellent for writing secure Java APIs, though has lower engagement with modern Node/TypeScript setups." },
        { teamName: "Frontend Team", score: 40, reason: "Minimal direct React, Vite, or UI layout experience." },
        { teamName: "DevOps", score: 70, reason: "Familiar with basic Linux and server setups, but lacks modern IaC (Terraform, Kubernetes)." },
        { teamName: "AI Team", score: 55, reason: "Prefers deterministic enterprise rules over probabilistic AI model pipelines." },
        { teamName: "Product Team", score: 68, reason: "Valuable for calculating database query limits, but less involved in fast feature iterations." }
      ],
      
      interviewIntelligence: [
        {
          category: "Technical",
          question: "How do you ensure strict database transactional consistency across decoupled microservices using Spring Boot?",
          suggestedAnswer: "Utilize the Saga Pattern or two-phase commit protocols, backed by transactional inbox/outbox patterns to prevent database discrepancies during service crashes.",
          difficulty: "Hard",
          duration: "18 min"
        },
        {
          category: "System Design",
          question: "How would you migrate a legacy relational database with millions of rows without causing application downtime?",
          suggestedAnswer: "Establish a write-shadowing process where new data writes to both databases, sync historical rows in chunks, run verification audits, and slowly route reads.",
          difficulty: "Hard",
          duration: "20 min"
        },
        {
          category: "Behavioral",
          question: "How do you handle rapid changes in project requirements? Describe a time you had to adapt to a sudden pivot.",
          suggestedAnswer: "I prefer structured specifications, but adapt by breaking down changes into clear database alterations and backend API adapters.",
          difficulty: "Medium",
          duration: "10 min"
        },
        {
          category: "Leadership",
          question: "Describe your approach to mentoring junior backend developers on database query design and optimization.",
          suggestedAnswer: "I emphasize query plans, indexing best practices, and avoiding N+1 problems by explaining underlying database storage structures.",
          difficulty: "Medium",
          duration: "10 min"
        },
        {
          category: "Follow-up",
          question: "You've worked at GlobalBank for 8 years. What strategies did you use to maintain high-security compliance standards?",
          suggestedAnswer: "Enforced strict security protocols, conducted regular access reviews, and automated verification tests across all microservices.",
          difficulty: "Medium",
          duration: "8 min"
        }
      ],
      
      hiringRisks: [
        {
          riskType: "Skill Gap",
          severity: "Critical",
          explanation: "Substantial gaps in modern full-stack development. Minimal recent React, Vite, or Tailwind CSS experience.",
          mitigationStrategy: "Assign a focused training roadmap on TypeScript and modern web architectures, or position him purely as a senior database developer."
        },
        {
          riskType: "Leadership Gap",
          severity: "Low",
          explanation: "Highly structured and reliable, but prefers following guidelines over driving open-ended startup product choices.",
          mitigationStrategy: "N/A"
        },
        {
          riskType: "Communication Risk",
          severity: "Low",
          explanation: "Clear and professional, though slightly more formal and corporate in style.",
          mitigationStrategy: "N/A"
        },
        {
          riskType: "Domain Risk",
          severity: "Moderate",
          explanation: "Limited engagement with cloud-native deployment loops and generative AI SDKs.",
          mitigationStrategy: "Incorporate him into structured backend database tasks before introducing advanced AI integrations."
        },
        {
          riskType: "Retention Risk",
          severity: "Negligible",
          explanation: "Exceptional loyalty record (8 years at previous role); looking for a long-term corporate anchor.",
          mitigationStrategy: "Provide a stable, highly organized career path with predictable progression."
        }
      ],
      
      careerGrowth: [
        { timeline: "6 Months", predictedRole: "Senior Backend Developer", milestoneFocus: "Migrate legacy database endpoints and establish SQL indexing protocols.", successProbability: 88 },
        { timeline: "1 Year", predictedRole: "Lead Database Engineer", milestoneFocus: "Architect transactional systems and ensure high reliability of data endpoints.", successProbability: 85 },
        { timeline: "3 Years", predictedRole: "Principal Backend Architect", milestoneFocus: "Lead core database structures and security compliance across the backend division.", successProbability: 80 },
        { timeline: "5 Years", predictedRole: "VP of Relational Systems", milestoneFocus: "Manage structural backend microservices and maintain legacy storage integrations.", successProbability: 70 }
      ],
      
      salaryIntelligence: {
        expectedSalary: "$160,000",
        marketSalary: "$165,000",
        negotiationRange: "$152,000 - $168,000",
        confidence: "92% (Market-Aligned)",
        reasoning: "Aligned with senior backend and database specialists. His 12 years of experience command a solid baseline, though limited modern fullstack history bounds the upper cap."
      },
      
      scoreBreakdown: [
        { dimension: "Technical Skills", contributionPercentage: 30, score: 78 },
        { dimension: "Experience", contributionPercentage: 20, score: 94 },
        { dimension: "Projects", contributionPercentage: 15, score: 72 },
        { dimension: "Leadership", contributionPercentage: 15, score: 75 },
        { dimension: "Learning Ability", contributionPercentage: 10, score: 62 },
        { dimension: "Communication", contributionPercentage: 5, score: 80 },
        { dimension: "Culture Fit", contributionPercentage: 5, score: 78 }
      ],
      
      decisionSimulator: [
        { recommendation: "Shortlist", why: "Highly recommended if the core challenge lies in relational database stabilization, security compliance, or legacy system migrations.", suitabilityScore: 80 },
        { recommendation: "Reject", why: "A correct decision if the role strictly requires a rapid-prototyping full-stack engineer who builds custom react animations in 24 hours.", suitabilityScore: 78 },
        { recommendation: "Hire Immediately", why: "Great to secure long-term backend loyalty, but requires setting up an explicit training plan for modern JS web frameworks.", suitabilityScore: 68 }
      ],
      
      resumeHeatmap: {
        strongSections: ["12 Years Backend Experience", "Senior Backend Architect at GlobalBank (8 years)", "Spring Boot & Relational Databases", "Enterprise Security Compliance"],
        weakSections: ["No modern JS frontend libraries (React/Next/Vite)"],
        missingInfo: ["Lacks cloud-native IaC configurations (Terraform/Kubernetes)"],
        highImpactAchievements: ["Zero service violations across 8 years at GlobalBank", "Maintained highly secure microservices in Virtual Machines"],
        readabilityScore: "B+ Formal Corporate",
        atsCompatibility: "94% (Highly structured, standard layout)"
      },
      
      learningAgilityDetails: {
        adaptability: 65,
        curiosity: 62,
        technologyAdoption: 58,
        learningSpeed: 64,
        certificationTrend: "Stable (Prefers mature, established standards)",
        projectDiversity: "Low-Medium (Enterprise finance microservices, database schemas)",
        prediction: "Requires 3-4 weeks to comfortably deploy modern Node.js backend systems."
      },
      
      timelinePrediction: {
        interviewRounds: 4,
        offerProbability: 76,
        joiningProbability: 95,
        expectedJoiningDate: "August 1, 2026",
        riskOfDecline: "5% (Extremely Low - Highly loyal and looks for long-term placement)"
      },
      
      successSimulator: {
        thirtyDay: "Completes initial security audits and aligns with standard backend deployment pathways.",
        ninetyDay: "Spearheads major database normalization, reducing legacy query locktimes by 20%.",
        sixMonth: "Assumes full ownership of database schema migrations and maintains bulletproof transaction safety.",
        probabilityOfPromotion: 65,
        longTermSuccessScore: 88
      },
      
      executiveSummary: "Marcus Vance is a deeply experienced legacy developer who specializes in enterprise database consistency and high-security transactional systems. With 12 years of experience (including an impressive 8-year tenure at GlobalBank), he brings unmatched stability and backend discipline, though his transition to modern full-stack tools requires a clear upskilling pathway.",
      
      decisionAudit: {
        evidenceUsed: ["GlobalBank 8-year longevity", "Spring Boot microservices portfolio", "SQL consistency achievements"],
        missingEvidence: ["No modern cloud configurations or React portfolio"],
        auditConfidence: 94,
        biasWarning: " PEDIGREE BIAS: Relies heavily on traditional banking backgrounds; model adjusted scores by focusing on his gaps in rapid modern web prototyping.",
        alternativeRecommendation: "Consider as a Senior Database Administrator (DBA) or Backend Security Consultant."
      },
      
      workforceForecast: {
        futureSkillGaps: ["Modern React frameworks", "Cloud IaC Terraform setups"],
        recommendedTraining: ["TypeScript basics bootcamp", "Kubernetes essentials course"],
        emergingTechnologies: ["Database shadow-writing", "Distributed microservices orchestration"],
        careerRoadmap: "Senior Backend Developer -> Database Director -> Chief Compliance Architect",
        probabilityOfSuccess: 85
      }
    };
  }

  // 5. Fallback for custom added candidates (dynamic matching based on experience and skills)
  const isHighPot = experienceYears > 5 && skills.length > 6;
  const confidence = Math.min(65 + experienceYears * 2 + skills.length * 2, 97);
  const upskilling = skills.includes("React") && skills.includes("Node.js") ? "Under 3 Days" : "10-14 Days";

  return {
    confidenceScore: confidence,
    confidenceLevel: confidence >= 90 ? "Elite" : confidence >= 80 ? "High" : confidence >= 70 ? "Medium" : "Low",
    confidenceReason: `Custom evaluation for ${name || "Candidate"}. Exhibits strong skill alignments inside the registry. Profile possesses ${experienceYears} years of experience with core skills: ${skills.slice(0, 4).join(", ")}.`,
    confidenceTrend: [confidence - 4, confidence - 2, confidence - 1, confidence],
    confidenceTrendVal: "+3.8% (Continuous Optimization)",
    
    hiddenGemScore: skills.length < 5 ? 88 : 72,
    hiddenGemReason: `Demonstrates localized transfer capacities. Fits general full-stack metrics with skills in ${skills.slice(0, 3).join(", ")}.`,
    futureSuccessPrediction: "Highly consistent contributor. High capability for rapid code deployment.",
    estimatedUpskillingTime: upskilling,
    
    dnaScores: {
      Builder: 80,
      Leader: 65,
      Innovator: 75,
      Architect: 72,
      Researcher: 70,
      "Problem Solver": 82,
      Mentor: 68,
      "Execution Specialist": 85
    },
    dominantPersonality: "The Adaptable Engineer (Builder + Problem Solver)",
    
    recruiterInsights: [
      `Demonstrates strong initial ownership of ${skills.slice(0, 2).join(", ")}.`,
      "Exhibits steady, reliable code contributions.",
      "Clear technical communication during registry intake.",
      "Highly adaptable to diverse team structures."
    ],
    
    teamChemistry: [
      { teamName: "Backend Team", score: skills.includes("Node.js") || skills.includes("SQL") ? 90 : 70, reason: "Matches core server-side standards." },
      { teamName: "Frontend Team", score: skills.includes("React") || skills.includes("TypeScript") ? 92 : 68, reason: "Visual experience based on technology selections." },
      { teamName: "DevOps", score: skills.includes("AWS") || skills.includes("Docker") ? 88 : 65, reason: "Infrastructure alignment depends on system config familiarity." },
      { teamName: "AI Team", score: 70, reason: "General developer who can learn AI parameters." },
      { teamName: "Product Team", score: 80, reason: "Collaborative and structured approach to deliverables." }
    ],
    
    interviewIntelligence: [
      {
        category: "Technical",
        question: `Explain how you implement scalable code structures using ${skills[0] || "TypeScript"} and modern architectures.`,
        suggestedAnswer: "Establish clean separation of concerns, modularized routes, structured type definitions, and thorough unit testing scopes.",
        difficulty: "Medium",
        duration: "15 min"
      },
      {
        category: "System Design",
        question: "Describe your approach to designing a secure, performant REST API that handles rapid spike loads.",
        suggestedAnswer: "Incorporate rate limiting, database query throttling, load-balanced server endpoints, and asynchronous processing for heavy requests.",
        difficulty: "Hard",
        duration: "20 min"
      },
      {
        category: "Behavioral",
        question: "Describe a project experience where you had to quickly master an unfamiliar tool under tight timelines.",
        suggestedAnswer: "Focused on core developer guides, paired with senior experts, and set up rapid testing environments to quickly identify edge cases.",
        difficulty: "Medium",
        duration: "10 min"
      },
      {
        category: "Leadership",
        question: "How do you help your peers maintain high quality standards during rapid feature sprints?",
        suggestedAnswer: "By defining clear code style guides, automating syntax tests, and setting up rapid pair-coding checkpoints.",
        difficulty: "Medium",
        duration: "10 min"
      },
      {
        category: "Follow-up",
        question: "How do you measure and optimize the loading performance of applications you build?",
        suggestedAnswer: "Utilizing Web Vitals, profiling bundle sizes, compressing asset formats, and analyzing server-side response latencies.",
        difficulty: "Medium",
        duration: "8 min"
      }
    ],
    
    hiringRisks: [
      {
        riskType: "Skill Gap",
        severity: "Low",
        explanation: "Minor variations in framework tool selections.",
        mitigationStrategy: "Provide direct documentation maps during initial sprints."
      },
      {
        riskType: "Leadership Gap",
        severity: "Low",
        explanation: "Potential adaptation curve in highly strategic team roles.",
        mitigationStrategy: "Provide progressive autonomy over minor feature releases."
      },
      {
        riskType: "Communication Risk",
        severity: "Negligible",
        explanation: "Demonstrates clear, reliable, and professional communication.",
        mitigationStrategy: "N/A"
      },
      {
        riskType: "Domain Risk",
        severity: "Low",
        explanation: "Standard domain adjustments depend on task focus.",
        mitigationStrategy: "N/A"
      },
      {
        riskType: "Retention Risk",
        severity: "Low",
        explanation: "Stable career aspirations.",
        mitigationStrategy: "Align with clear professional development milestones."
      }
    ],
    
    careerGrowth: [
      { timeline: "6 Months", predictedRole: `${role || "Software Engineer"} (Active Contributor)`, milestoneFocus: "Own key system routes and integrate team standards.", successProbability: 92 },
      { timeline: "1 Year", predictedRole: `Senior ${role || "Engineer"}`, milestoneFocus: "Lead minor feature releases and mentor incoming developers.", successProbability: 88 },
      { timeline: "3 Years", predictedRole: "Engineering Lead", milestoneFocus: "Architect core features and optimize delivery pipelines.", successProbability: 80 },
      { timeline: "5 Years", predictedRole: "Engineering Manager", milestoneFocus: "Manage full sprints, timelines, and technical architecture roadmaps.", successProbability: 70 }
    ],
    
    salaryIntelligence: {
      expectedSalary: "$145,000",
      marketSalary: "$152,000",
      negotiationRange: "$138,000 - $158,000",
      confidence: "92% (Market Align)",
      reasoning: "Reasonable mid-to-senior level market salary, scaled based on their experience pedigree and skills registry."
    },
    
    scoreBreakdown: [
      { dimension: "Technical Skills", contributionPercentage: 30, score: Math.round(confidence - 2) },
      { dimension: "Experience", contributionPercentage: 20, score: Math.min(60 + experienceYears * 4, 98) },
      { dimension: "Projects", contributionPercentage: 15, score: 82 },
      { dimension: "Leadership", contributionPercentage: 15, score: 75 },
      { dimension: "Learning Ability", contributionPercentage: 10, score: 85 },
      { dimension: "Communication", contributionPercentage: 5, score: 88 },
      { dimension: "Culture Fit", contributionPercentage: 5, score: 86 }
    ],
    
    decisionSimulator: [
      { recommendation: "Shortlist", why: "Solid skills with balanced experience. Recommended for secondary interview rounds to review code samples.", suitabilityScore: 90 },
      { recommendation: "Hire Immediately", why: "Highly applicable if immediate development horsepower is required for ongoing sprint timelines.", suitabilityScore: 80 },
      { recommendation: "Reject", why: "Only applicable if the current requirements shift to a highly specialized field not covered in their registry.", suitabilityScore: 15 }
    ],
    
    resumeHeatmap: {
      strongSections: ["Clear employment history", `Proficient with ${skills.slice(0, 3).join(", ")}`, "Strong baseline achievements"],
      weakSections: ["Specific certification listings could be expanded"],
      missingInfo: ["No explicit cloud systems architecture certifications"],
      highImpactAchievements: [`Delivered scalable systems with ${skills[0] || "TypeScript"}`],
      readabilityScore: "A Professional Standard",
      atsCompatibility: "92% (Good parsability)"
    },
    
    learningAgilityDetails: {
      adaptability: 84,
      curiosity: 82,
      technologyAdoption: 85,
      learningSpeed: 86,
      certificationTrend: "Consistent",
      projectDiversity: "Medium (Custom fullstack engineering setups)",
      prediction: "Capable of mastering modern cloud tooling in under 14 days."
    },
    
    timelinePrediction: {
      interviewRounds: 3,
      offerProbability: 80,
      joiningProbability: 88,
      expectedJoiningDate: "July 20, 2026",
      riskOfDecline: "15% (Low-Moderate)"
    },
    
    successSimulator: {
      thirtyDay: "Onboards comfortably, commits clean code and completes first feature sprint.",
      ninetyDay: "Assumes core ownership over minor component systems, reducing bug ratios.",
      sixMonth: "Coordinates with cross-functional teams to deploy reliable services.",
      probabilityOfPromotion: 70,
      longTermSuccessScore: 89
    },
    
    executiveSummary: `${name || "The candidate"} represents a highly capable, versatile ${role || "Engineer"} with ${experienceYears} years of experience. Backed by solid proficiency in ${skills.slice(0, 3).join(", ")}, they exhibit excellent onboarding readiness and long-term potential. Highly recommended for shortlist review.`,
    
    decisionAudit: {
      evidenceUsed: [`Registry skills matching ${skills.slice(0, 3).join(", ")}`, `${experienceYears} years experience validation`],
      missingEvidence: ["No official coding certification transcripts uploaded"],
      auditConfidence: 90,
      biasWarning: "Standard experience calculations may favor longer traditional careers; model balanced by evaluating active registry skills.",
      alternativeRecommendation: "Consider as a specialized developer for backend integrations."
    },
    
    workforceForecast: {
      futureSkillGaps: ["Advanced microservice networking setups"],
      recommendedTraining: ["CI/CD pipeline automation guides"],
      emergingTechnologies: ["Serverless framework modernizations"],
      careerRoadmap: `${role || "Developer"} -> Tech Lead`,
      probabilityOfSuccess: 88
    }
  };
}
