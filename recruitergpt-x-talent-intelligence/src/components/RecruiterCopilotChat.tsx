import React, { useState, useRef, useEffect } from "react";
import { CandidateEvaluation } from "../types";
import { generateCandidateAIIntelligence } from "../utils/recruiterAIEngine";
import { MessageSquare, Send, Sparkles, BrainCircuit, UserCheck, ShieldAlert, BadgeInfo } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "copilot";
  text: string;
  timestamp: string;
}

interface RecruiterCopilotChatProps {
  evaluations: CandidateEvaluation[];
}

export default function RecruiterCopilotChat({ evaluations }: RecruiterCopilotChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "copilot",
      text: "Aura Recruitment Copilot online. Ask me about match justifications, leadership candidates, specific framework skills, or risk mitigation protocols across our active candidate registry.",
      timestamp: "06:01"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presets = [
    { query: "Why is Sarah ranked first?", label: "Why is Sarah #1?" },
    { query: "Who can become a Tech Lead?", label: "Who is a Tech Lead?" },
    { query: "Show candidates with Kubernetes.", label: "Has Kubernetes?" },
    { query: "Recommend candidates with startup experience.", label: "Has Startup Exp?" }
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");

    // Generate responsive Copilot response
    setTimeout(() => {
      let responseText = "";
      const query = text.toLowerCase();

      if (query.includes("sarah") && (query.includes("first") || query.includes("ranked") || query.includes("why"))) {
        const sarah = evaluations.find(e => e.candidate_name.toLowerCase().includes("sarah"));
        if (sarah) {
          const intel = generateCandidateAIIntelligence("Sarah Jenkins", "Senior Full Stack Engineer", [], 9);
          responseText = `### Placement Telemetry Analysis: Sarah Jenkins (#1)
Sarah is ranked first with an **Elite confidence score of ${sarah.hiring_confidence}%** based on three core structural advantages:
1. **Architectural Seniority**: 9 years of full-stack experience backed by a Stanford Computer Science background.
2. **Proven Scaling Impact**: At NeoSync, she scaled web socket infrastructure to 150k monthly active users while reducing database footprint by 40%.
3. **High Team Compatibility**: Matches 98% with the Backend Team and 92% with the Frontend Team.

*Recruiter Verdict*: "${intel.executiveSummary}"`;
        } else {
          responseText = "Sarah Jenkins is currently not selected in the active evaluation pool. Please select her from the candidate pool registry to analyze her placement metrics.";
        }
      } else if (query.includes("tech lead") || query.includes("leader") || query.includes("lead")) {
        const matching = evaluations.filter(e => {
          const intel = generateCandidateAIIntelligence(e.candidate_name, "Engineer", [], 5);
          return e.isFutureHighPot || intel.dnaScores.Leader > 80;
        });

        if (matching.length > 0) {
          responseText = `### Leadership Potential Audit
Based on career acceleration indices, I have identified the following candidates with high leadership capabilities:

${matching.map(m => {
  const intel = generateCandidateAIIntelligence(m.candidate_name, "Engineer", [], 5);
  return `- **${m.candidate_name}** (Leader Quotient: **${intel.dnaScores.Leader}/100**): Flagged as a future **${intel.careerGrowth[3]?.predictedRole || "Engineering Director"}**. ${intel.recruiterInsights[1]}`;
}).join("\n")}`;
        } else {
          responseText = "No active candidates exhibit leadership scores above the threshold of 80/100 in the current model run.";
        }
      } else if (query.includes("kubernetes") || query.includes("k8s") || query.includes("docker") || query.includes("devops")) {
        const matching = evaluations.filter(e => {
          const name = e.candidate_name.toLowerCase();
          return name.includes("bilal") || name.includes("sarah");
        });

        if (matching.length > 0) {
          responseText = `### Container & Kubernetes Orchestration Matching
The candidate registry has logged high infrastructure competence for:

1. **Bilal Maqsood**: Certified Kubernetes Administrator (CKA). Owns container orchestration designs with a DevOps team chemistry match of **99%**.
2. **Sarah Jenkins**: Highly experienced with Docker containers and AWS serverless migrations (9 years fullstack).

*Recommendation*: Bilal Maqsood is the prime candidate if zero-downtime microservice operations are the primary objective.`;
        } else {
          responseText = "No active candidates cite Kubernetes or direct DevOps certifications in their parsed skill sheets.";
        }
      } else if (query.includes("startup") || query.includes("unconventional") || query.includes("gem") || query.includes("lily")) {
        const lily = evaluations.find(e => e.candidate_name.toLowerCase().includes("lily"));
        const sarah = evaluations.find(e => e.candidate_name.toLowerCase().includes("sarah"));
        
        responseText = `### Startup Agility & Rapid Prototyping Matches
High-growth startups require extreme learning agility and autonomous product ownership:

1. **Lily Chen (Discovered Hidden Gem)**: Author of 'WebSynth' (800+ GitHub stars). Transitioned autonomously from product design; possesses a maximum learning speed index of **98/100**. Perfect for greenfield React prototypes.
2. **Sarah Jenkins (Staff Pedigree)**: Staff engineer experience at high-growth NeoSync. Led complex migration sprints.

*Insight*: Lily provides exceptional UX-engineer design bridge, while Sarah provides enterprise stabilization scaffolding.`;
      } else {
        responseText = `### Recruiter Intel Synthesis
Based on your query: "${text}", I have audited our active candidate database.

Currently evaluated candidates: ${evaluations.map(e => e.candidate_name).join(", ")}.

*General Recommendation*:
- For immediate server scalability, prioritize **Sarah Jenkins** (${evaluations[0]?.candidate_name || "Sarah"}).
- For container infrastructure and zero-trust networking, prioritize **Bilal Maqsood**.
- For creative interactive interfaces and rapid front-end onboarding, prioritize **Lily Chen**.

*Try asking*: "Why is Sarah ranked first?" or "Who can become a Tech Lead?"`;
      }

      const copilotMsg: Message = {
        id: `copilot-${Date.now()}`,
        sender: "copilot",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages(prev => [...prev, copilotMsg]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/80 rounded-3xl overflow-hidden flex flex-col h-[520px] text-left relative shadow-xl">
      <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/5 blur-2xl pointer-events-none rounded-full" />
      
      {/* Header */}
      <div className="bg-slate-900/60 border-b border-slate-850 p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
            <BrainCircuit className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-wider font-display">
              Aura Recruiter Copilot
            </h3>
            <span className="text-[9px] text-indigo-400 font-bold font-mono uppercase bg-indigo-950/40 px-1.5 py-0.5 rounded border border-indigo-900/35">Interactive AI Guide</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>REALTIME_COGNITIVE_READY</span>
        </div>
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {messages.map((msg) => {
          const isCopilot = msg.sender === "copilot";
          return (
            <div
              key={msg.id}
              className={`flex ${isCopilot ? "justify-start" : "justify-end"} items-start gap-2.5`}
            >
              {isCopilot && (
                <div className="w-7 h-7 rounded-lg bg-indigo-600/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0 text-xs font-bold font-mono">
                  AI
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed font-sans shadow-sm border ${
                  isCopilot
                    ? "bg-slate-900/75 border-slate-800 text-slate-300"
                    : "bg-indigo-600 border-indigo-500 text-white"
                }`}
              >
                {/* Formatted Markdown Parser Support */}
                {msg.text.split("\n").map((line, lIdx) => {
                  if (line.startsWith("### ")) {
                    return <h4 key={lIdx} className="font-extrabold text-sm text-white mt-2 mb-1 uppercase tracking-wide">{line.replace("### ", "")}</h4>;
                  }
                  if (line.startsWith("- ") || line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
                    return <p key={lIdx} className="pl-3.5 indent-[-14px] mt-1 text-slate-300 font-medium">{line}</p>;
                  }
                  if (line.startsWith("*Recruiter Verdict*:") || line.startsWith("*Recommendation*:") || line.startsWith("*Insight*:")) {
                    return <p key={lIdx} className="mt-2 text-[11px] italic font-medium text-indigo-300 border-l border-indigo-500/35 pl-2">{line}</p>;
                  }
                  return <p key={lIdx} className="mt-1 font-medium">{line}</p>;
                })}
                <span className={`block text-[8px] font-mono mt-2 text-right ${isCopilot ? "text-slate-500" : "text-indigo-200"}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Presets Grid */}
      <div className="p-3 bg-slate-950/80 border-t border-slate-900 shrink-0">
        <span className="block text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1.5">// RECRUITER COPILOT SUGGESTIONS:</span>
        <div className="flex flex-wrap gap-1.5">
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p.query)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-indigo-950/20 border border-slate-800 hover:border-indigo-500/30 text-[10px] font-bold text-slate-400 hover:text-indigo-400 transition-all cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input controls */}
      <div className="p-4 bg-slate-900/40 border-t border-slate-850 flex gap-2 shrink-0 items-center">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend(inputText);
          }}
          placeholder="Ask Copilot about candidate profiles..."
          className="flex-1 bg-slate-950 text-slate-100 placeholder:text-slate-500 border border-slate-750 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={() => handleSend(inputText)}
          className="p-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white transition-all shadow-md cursor-pointer hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
