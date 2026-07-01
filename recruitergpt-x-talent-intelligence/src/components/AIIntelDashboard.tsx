import React, { useState, useEffect } from "react";
import { CandidateEvaluation } from "../types";
import { generateCandidateAIIntelligence, RecruiterAIIntelligence } from "../utils/recruiterAIEngine";
import {
  Sparkles,
  Shield,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  Award,
  CircleAlert,
  Search,
  CheckCircle2,
  BrainCircuit,
  MessageSquare,
  Network,
  Database,
  Cpu,
  Coins,
  Compass,
  GitFork,
  BookOpen,
  Calendar,
  Activity,
  ThumbsUp,
  UserCheck,
  ChevronRight,
  Gauge
} from "lucide-react";

interface AIIntelDashboardProps {
  evaluation: CandidateEvaluation;
  candidateRole?: string;
  candidateSkills?: string[];
  candidateExp?: number;
}

export default function AIIntelDashboard({
  evaluation,
  candidateRole = "Software Architect",
  candidateSkills = [],
  candidateExp = 5
}: AIIntelDashboardProps) {
  const [activeSubTab, setActiveSubTab] = useState<"confidence" | "dna" | "risks" | "career" | "finance" | "onboarding" | "audit">("confidence");
  const [simulationChoice, setSimulationChoice] = useState<"Hire" | "Shortlist" | "Reject" | null>(null);
  const [animateConfidence, setAnimateConfidence] = useState(0);

  const intel = generateCandidateAIIntelligence(
    evaluation.candidate_name,
    candidateRole,
    candidateSkills,
    candidateExp
  );

  // Animate confidence meter on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateConfidence(intel.confidenceScore);
    }, 150);
    return () => clearTimeout(timer);
  }, [intel.confidenceScore, evaluation.candidate_name]);

  return (
    <div className="space-y-6 text-left">
      {/* 18. Executive Summary Card */}
      <div className="p-5 bg-gradient-to-r from-indigo-950/30 to-slate-950/90 border border-indigo-500/10 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[8px] font-black font-mono tracking-widest text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-900/30 px-2.5 py-0.5 rounded-full">
              Executive Intel Summary
            </span>
            <p className="text-slate-300 text-xs italic font-medium leading-relaxed mt-2">
              &ldquo;{intel.executiveSummary}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Sub-Tab Navigation inside dossier */}
      <div className="flex border-b border-slate-900/80 overflow-x-auto gap-1 pb-1 scrollbar-none">
        {[
          { id: "confidence", label: "Confidence Engine", icon: Gauge },
          { id: "dna", label: "Career DNA Helix", icon: BrainCircuit },
          { id: "risks", label: "Risk Shield", icon: AlertTriangle },
          { id: "career", label: "Growth Path", icon: TrendingUp },
          { id: "finance", label: "Salary telemetry", icon: Coins },
          { id: "onboarding", label: "Success Simulation", icon: Compass },
          { id: "audit", label: "AI Decision Audit", icon: Shield }
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id as any);
                setSimulationChoice(null);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                isSelected
                  ? "bg-slate-900 text-emerald-400 border border-slate-800"
                  : "text-slate-500 hover:text-slate-350"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Sub-Tab Content */}
      <div className="min-h-[420px] transition-all">
        
        {/* SUB-TAB 1: AI CONFIDENCE ENGINE & RECRUITER INSIGHTS */}
        {activeSubTab === "confidence" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. AI Hiring Confidence Engine Panel */}
              <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 blur-2xl pointer-events-none rounded-full" />
                <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">AI Placement Confidence Engine</span>
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Real-Time Match Analytics</h4>
                
                {/* Meter animation */}
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* SVG Progress Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        className="stroke-slate-900"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        className="stroke-emerald-500 transition-all duration-1000 ease-out"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 48}
                        strokeDashoffset={2 * Math.PI * 48 * (1 - animateConfidence / 100)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-black text-white font-mono">{animateConfidence}%</span>
                      <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">{intel.confidenceLevel} Match</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="text-[10px] font-bold font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-full">
                      Trend: {intel.confidenceTrendVal}
                    </span>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-2.5">
                      {intel.confidenceReason}
                    </p>
                  </div>
                </div>
              </div>

              {/* 10. Explainable AI Panel */}
              <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl">
                <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Explainable AI Scoring Breakdown</span>
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Placement Weight Allocation</h4>
                
                <div className="space-y-3.5 pt-4">
                  {intel.scoreBreakdown.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-semibold">
                        <span className="text-slate-400">{item.dimension}</span>
                        <span className="text-slate-300 font-mono font-bold">
                          {item.score}/100 <span className="text-slate-500 text-[10px] font-normal">({item.contributionPercentage}% weight)</span>
                        </span>
                      </div>
                      <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${item.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 4. AI Recruiter Insights */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl text-left">
              <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-widest block">// SYNTHESIZED RECRUITER INSIGHTS:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                {intel.recruiterInsights.map((insight, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/40 border border-slate-800/60 rounded-xl flex items-start gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-300 leading-normal">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: CAREER DNA HELIX & COMPATIBILITY */}
        {activeSubTab === "dna" && (
          <div className="space-y-6">
            
            {/* 3. Career DNA Profile */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/5 blur-2xl pointer-events-none rounded-full" />
              <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                <div>
                  <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Role Personality Index</span>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Career DNA Archetype Matrix</h4>
                </div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider bg-amber-950/40 border border-amber-900/30 px-2.5 py-1 rounded-lg">
                  {intel.dominantPersonality}
                </span>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {Object.entries(intel.dnaScores).map(([trait, val]) => (
                  <div key={trait} className="p-3.5 bg-slate-900/30 border border-slate-850 rounded-2xl text-center">
                    <span className="block text-[10px] font-bold text-slate-400 truncate">{trait}</span>
                    <span className="block text-lg font-black text-indigo-400 font-mono mt-1">{val}%</span>
                    <div className="w-full bg-slate-900 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Team Compatibility Predictor */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Departmental Matching Telemetry</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Team Chemistry Compatibility</h4>
              
              <div className="space-y-3.5 pt-4">
                {intel.teamChemistry.map((team, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-3.5 items-center p-3 bg-slate-900/20 border border-slate-850/60 rounded-2xl hover:bg-slate-900/40 transition-colors">
                    <div className="col-span-4 pr-1">
                      <span className="block text-xs font-bold text-slate-200">{team.teamName}</span>
                    </div>
                    <div className="col-span-5">
                      <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${team.score}%` }} />
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <span className="font-mono text-xs font-bold text-emerald-400">{team.score}%</span>
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="text-[9px] text-slate-500 font-medium italic truncate block" title={team.reason}>{team.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* SUB-TAB 3: RISK SHIELD & HIDDEN TALENT DETECTOR */}
        {activeSubTab === "risks" && (
          <div className="space-y-6">
            
            {/* 7. Hiring Risk Dashboard */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl text-left">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Proactive Stability Audit</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Hiring Risk Shield &amp; Mitigations</h4>
              
              <div className="space-y-3.5 pt-4">
                {intel.hiringRisks.map((risk, idx) => {
                  const isNegligible = risk.severity === "Negligible";
                  const isLow = risk.severity === "Low";
                  const isMod = risk.severity === "Moderate";
                  const color = isNegligible ? "text-slate-500 border-slate-800 bg-slate-950/20" : isLow ? "text-emerald-400 border-emerald-950/50 bg-emerald-950/5" : isMod ? "text-amber-400 border-amber-950/50 bg-amber-950/5" : "text-red-400 border-red-950/50 bg-red-950/5";
                  
                  return (
                    <div key={idx} className={`p-4 rounded-2xl border ${color} space-y-2`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs flex items-center gap-1.5 text-slate-250">
                          <CircleAlert className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                          {risk.riskType} Severity
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-wider bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded-md">
                          {risk.severity}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        <strong>Explanation:</strong> {risk.explanation}
                      </p>
                      {risk.mitigationStrategy !== "N/A" && (
                        <p className="text-emerald-400/90 text-xs leading-relaxed font-semibold">
                          <strong>AI Actionable Mitigation:</strong> {risk.mitigationStrategy}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Hidden Talent Discovery */}
            <div className="p-5 bg-gradient-to-tr from-slate-950 to-purple-950/10 border border-purple-900/30 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/5 blur-3xl pointer-events-none rounded-full" />
              <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                <div>
                  <span className="text-[8px] font-mono font-bold text-purple-400 uppercase tracking-widest block">Predictive Placement Discoveries</span>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Hidden Talent Discovery</h4>
                </div>
                <div className="text-center">
                  <span className="block text-[8px] font-black uppercase text-slate-500">Gem Score</span>
                  <span className="block text-lg font-mono font-black text-purple-400">{intel.hiddenGemScore}/100</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="space-y-2">
                  <span className="font-bold text-slate-350 block">// Transferable Qualities Summary:</span>
                  <p className="text-slate-400 leading-relaxed font-medium">{intel.hiddenGemReason}</p>
                </div>
                <div className="space-y-3 p-3.5 bg-purple-950/10 border border-purple-900/20 rounded-2xl">
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wide">Future Success Prediction</span>
                    <span className="text-purple-300 font-extrabold mt-0.5 block">{intel.futureSuccessPrediction}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wide">Estimated Upskilling Time</span>
                    <span className="text-emerald-400 font-black mt-0.5 block">{intel.estimatedUpskillingTime}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* SUB-TAB 4: AI CAREER PATH PREDICTOR & LEARNING AGILITY */}
        {activeSubTab === "career" && (
          <div className="space-y-6">
            
            {/* 8. AI Career Growth Predictor */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl relative">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Long-Term Placement Roadmap</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">AI Career Growth &amp; Promotion Predictor</h4>
              
              {/* Stepper roadmap */}
              <div className="relative border-l border-indigo-900/50 ml-3.5 pl-6 mt-6 space-y-6">
                {intel.careerGrowth.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle dot marker */}
                    <div className="absolute -left-[31px] top-0 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-md">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                    </div>
                    
                    <div className="p-4 bg-slate-900/40 border border-slate-850/60 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[9px] font-mono font-extrabold text-indigo-400 bg-indigo-950/40 border border-indigo-900/20 px-2 py-0.5 rounded-md uppercase">
                          {milestone.timeline} Milestone
                        </span>
                        <h5 className="font-extrabold text-white text-xs mt-1.5">{milestone.predictedRole}</h5>
                        <p className="text-[11px] text-slate-450 mt-1 font-medium">{milestone.milestoneFocus}</p>
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <span className="block text-[8px] font-black uppercase text-slate-500">Success Probability</span>
                        <span className="block text-sm font-mono font-black text-emerald-400">{milestone.successProbability}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 14. Learning Agility Score */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Continuous Adaptability Audit</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Learning Agility Metrics</h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { label: "Adaptability Index", val: intel.learningAgilityDetails.adaptability },
                  { label: "Curiosity quotient", val: intel.learningAgilityDetails.curiosity },
                  { label: "Tech Adoption Speed", val: intel.learningAgilityDetails.technologyAdoption },
                  { label: "Learning Agility", val: intel.learningAgilityDetails.learningSpeed }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/30 border border-slate-850 rounded-2xl text-center">
                    <span className="text-[9px] text-slate-400 font-bold block truncate">{item.label}</span>
                    <span className="text-lg font-mono font-black text-emerald-400 block mt-1">{item.val}%</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-slate-900/30 border border-slate-850 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs">
                <div>
                  <span className="font-bold text-slate-400 block text-[10px] uppercase">Certification Progression Trend:</span>
                  <span className="text-slate-200 mt-1 block font-mono font-bold">{intel.learningAgilityDetails.certificationTrend}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-400 block text-[10px] uppercase">Project Diversity Index:</span>
                  <span className="text-slate-200 mt-1 block font-mono font-bold">{intel.learningAgilityDetails.projectDiversity}</span>
                </div>
              </div>
              <p className="p-3.5 bg-emerald-950/10 border border-emerald-900/25 text-emerald-400 font-semibold rounded-2xl text-xs mt-4">
                <strong>Future Learning Forecast:</strong> {intel.learningAgilityDetails.prediction}
              </p>
            </div>

          </div>
        )}

        {/* SUB-TAB 5: FINANCIAL INTEL & RESUME HEATMAP */}
        {activeSubTab === "finance" && (
          <div className="space-y-6">
            
            {/* 9. Salary Intelligence */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl text-left relative overflow-hidden">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Enterprise Market Aligned Intelligence</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Salary Intelligence Telemetry</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
                  <span className="block text-[8px] font-black uppercase text-slate-500">Predicted Expected Salary</span>
                  <span className="block text-lg font-mono font-black text-emerald-400 mt-1">{intel.salaryIntelligence.expectedSalary}</span>
                </div>
                <div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
                  <span className="block text-[8px] font-black uppercase text-slate-500">External Market Standard</span>
                  <span className="block text-lg font-mono font-black text-slate-200 mt-1">{intel.salaryIntelligence.marketSalary}</span>
                </div>
                <div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl text-center">
                  <span className="block text-[8px] font-black uppercase text-slate-500">Negotiation confidence</span>
                  <span className="block text-xs font-black text-amber-400 mt-2 block">{intel.salaryIntelligence.confidence}</span>
                </div>
              </div>

              {/* Slider Representation */}
              <div className="p-4 bg-slate-900/20 border border-slate-850 rounded-2xl space-y-2 mt-4">
                <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wide">Optimum Negotiation Band</span>
                <div className="h-2 w-full bg-slate-950 rounded-full relative overflow-hidden">
                  <div className="absolute left-[20%] right-[15%] h-full bg-emerald-500/80 rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500">
                  <span>$120k min</span>
                  <span className="text-emerald-400 font-extrabold">{intel.salaryIntelligence.negotiationRange} Recommended Range</span>
                  <span>$220k max</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-4">
                <strong>Model Reasoning:</strong> {intel.salaryIntelligence.reasoning}
              </p>
            </div>

            {/* 13. AI Resume Heatmap */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl text-left">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Structural Parser Analysis</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">AI Resume Heatmap &amp; ATS Audit</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="space-y-3.5">
                  <div className="p-3.5 bg-emerald-950/5 border border-emerald-900/20 rounded-2xl">
                    <span className="font-extrabold text-emerald-400 block text-[10px] uppercase mb-1">Strongest High-Impact Sections</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300 font-medium">
                      {intel.resumeHeatmap.strongSections.map((sec, idx) => (
                        <li key={idx}>{sec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-amber-950/5 border border-amber-900/20 rounded-2xl">
                    <span className="font-extrabold text-amber-500 block text-[10px] uppercase mb-1">Weak Sections &amp; Gaps</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300 font-medium">
                      {intel.resumeHeatmap.weakSections.map((sec, idx) => (
                        <li key={idx}>{sec}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 bg-slate-900/40 border border-slate-850 rounded-2xl">
                    <span className="font-extrabold text-slate-400 block text-[10px] uppercase mb-1">Missing Parameters</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300 font-medium">
                      {intel.resumeHeatmap.missingInfo.map((sec, idx) => (
                        <li key={idx}>{sec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-indigo-950/10 border border-indigo-900/20 rounded-2xl grid grid-cols-2 gap-2 text-center">
                    <div>
                      <span className="text-[8px] font-black uppercase text-slate-500 block">Readability index</span>
                      <span className="text-sm font-mono font-black text-indigo-400 mt-1 block">{intel.resumeHeatmap.readabilityScore}</span>
                    </div>
                    <div>
                      <span className="text-[8px] font-black uppercase text-slate-500 block">ATS Score</span>
                      <span className="text-sm font-mono font-black text-emerald-400 mt-1 block">{intel.resumeHeatmap.atsCompatibility} Match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* SUB-TAB 6: ONBOARDING SIMULATION & PIPELINE */}
        {activeSubTab === "onboarding" && (
          <div className="space-y-6">
            
            {/* 17. Candidate Success Simulator */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl text-left">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Simulated Integration Chronicles</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Candidate Success Simulator</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                <div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="text-[9px] font-extrabold text-indigo-400 block uppercase mb-1">Day 30 Review</span>
                  <p className="text-slate-350 leading-relaxed font-medium">{intel.successSimulator.thirtyDay}</p>
                </div>
                <div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="text-[9px] font-extrabold text-indigo-400 block uppercase mb-1">Day 90 Review</span>
                  <p className="text-slate-350 leading-relaxed font-medium">{intel.successSimulator.ninetyDay}</p>
                </div>
                <div className="p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="text-[9px] font-extrabold text-indigo-400 block uppercase mb-1">Month 6 Review</span>
                  <p className="text-slate-350 leading-relaxed font-medium">{intel.successSimulator.sixMonth}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/20 border border-slate-850 rounded-2xl grid grid-cols-2 gap-4 mt-4 text-center">
                <div>
                  <span className="text-[8px] font-black uppercase text-slate-500 block">Promotion Probability (12mo)</span>
                  <span className="text-lg font-mono font-black text-emerald-400 mt-1 block">{intel.successSimulator.probabilityOfPromotion}%</span>
                </div>
                <div>
                  <span className="text-[8px] font-black uppercase text-slate-500 block">Long-Term Placement Grade</span>
                  <span className="text-lg font-mono font-black text-white mt-1 block">{intel.successSimulator.longTermSuccessScore}/100</span>
                </div>
              </div>
            </div>

            {/* 16. Hiring Timeline Prediction */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Pipeline Progression Estimates</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Hiring Pipeline &amp; Timeline Prediction</h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center text-xs">
                <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="block text-[8px] font-black uppercase text-slate-500">Interview Rounds</span>
                  <span className="block text-md font-mono font-black text-white mt-1">{intel.timelinePrediction.interviewRounds} Stages</span>
                </div>
                <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="block text-[8px] font-black uppercase text-slate-500">Offer Probability</span>
                  <span className="block text-md font-mono font-black text-emerald-400 mt-1">{intel.timelinePrediction.offerProbability}%</span>
                </div>
                <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="block text-[8px] font-black uppercase text-slate-500">Signing Probability</span>
                  <span className="block text-md font-mono font-black text-indigo-400 mt-1">{intel.timelinePrediction.joiningProbability}%</span>
                </div>
                <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
                  <span className="block text-[8px] font-black uppercase text-slate-500">decline flight risk</span>
                  <span className="block text-md font-mono font-black text-amber-500 mt-1">{intel.timelinePrediction.riskOfDecline}</span>
                </div>
              </div>
              <p className="p-3.5 bg-slate-900/20 border border-slate-850 rounded-2xl text-xs text-slate-400 font-medium text-center mt-4">
                Estimated Onboarding Launch Date: <strong className="text-slate-100 font-mono font-extrabold">{intel.timelinePrediction.expectedJoiningDate}</strong>
              </p>
            </div>

          </div>
        )}

        {/* SUB-TAB 7: AI DECISION AUDIT & FUTURE WORKFORCE FORECAST */}
        {activeSubTab === "audit" && (
          <div className="space-y-6">
            
            {/* 19. AI Decision Audit */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl text-left">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Verifiable Audit Trail Logs</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">AI Decision Audit &amp; Bias Mitigation</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="p-3.5 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-1.5">
                  <span className="font-extrabold text-slate-300 block text-[9px] uppercase">Telemetry Evidence Utilized:</span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400 font-medium">
                    {intel.decisionAudit.evidenceUsed.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3.5 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-1.5">
                  <span className="font-extrabold text-slate-300 block text-[9px] uppercase">Gaps / Unverified parameters:</span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400 font-medium">
                    {intel.decisionAudit.missingEvidence.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3.5 bg-red-950/10 border border-red-900/25 text-red-300/90 rounded-2xl text-xs mt-4">
                <strong>System Bias Warning Filter:</strong> {intel.decisionAudit.biasWarning}
              </div>
              <p className="p-3.5 bg-slate-900/20 border border-slate-850 text-slate-400 font-medium rounded-2xl text-xs mt-3 text-center">
                Alternative Pipeline recommendation: <strong className="text-indigo-400 font-semibold">{intel.decisionAudit.alternativeRecommendation}</strong>
              </p>
            </div>

            {/* 20. Future Workforce Forecast */}
            <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl">
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Next-Generation Talent Forecast</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Future Workforce Forecast</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="p-3.5 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-2">
                  <span className="font-extrabold text-slate-350 block text-[9px] uppercase">Skill Gap Horizon (Year 2+)</span>
                  <div className="flex flex-wrap gap-1.5">
                    {intel.workforceForecast.futureSkillGaps.map((gap, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-850 text-slate-400 font-mono font-bold rounded-md">
                        {gap}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3.5 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-2">
                  <span className="font-extrabold text-slate-350 block text-[9px] uppercase">Emerging Tech Requirement</span>
                  <div className="flex flex-wrap gap-1.5">
                    {intel.workforceForecast.emergingTechnologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-emerald-950/40 border border-emerald-900/35 text-emerald-400 font-mono font-bold rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/40 border border-slate-850 rounded-2xl mt-4 text-xs space-y-1.5">
                <span className="font-bold text-slate-450 block uppercase text-[10px]">Recommended Training Blueprints:</span>
                <div className="flex flex-wrap gap-2">
                  {intel.workforceForecast.recommendedTraining.map((train, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-indigo-950/20 border border-indigo-900/30 text-indigo-300 font-bold rounded-xl">
                      {train}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 11. Recruiter Decision Simulator Panel */}
      <div className="p-5 bg-slate-950/40 border border-slate-850 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />
        <span className="text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-widest block">// ACTION SIMULATOR:</span>
        <h4 className="text-xs font-black text-white uppercase tracking-wider font-display mt-0.5">Recruiter Decision Simulator</h4>
        
        <p className="text-xs text-slate-450 leading-relaxed font-sans font-medium mt-1.5">
          Simulate a hiring decision outcome. AuraTalent will immediately model the organizational impact of your selection below:
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2.5 pt-4">
          {intel.decisionSimulator.map((sim, idx) => {
            const isSelected = simulationChoice === sim.recommendation;
            const isHire = sim.recommendation === "Hire Immediately";
            const isShortlist = sim.recommendation === "Shortlist";
            const isReject = sim.recommendation === "Reject";
            
            const btnColor = isHire ? "hover:border-emerald-500/60 hover:text-emerald-400" : isShortlist ? "hover:border-indigo-500/60 hover:text-indigo-400" : "hover:border-red-500/60 hover:text-red-400";
            const selColor = isHire ? "bg-emerald-950/30 border-emerald-500 text-emerald-400" : isShortlist ? "bg-indigo-950/30 border-indigo-500 text-indigo-400" : "bg-red-950/30 border-red-500 text-red-400";
            
            return (
              <button
                key={idx}
                onClick={() => setSimulationChoice(sim.recommendation)}
                className={`p-3 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected ? selColor : `bg-slate-900 border-slate-800 text-slate-400 ${btnColor}`
                }`}
              >
                {sim.recommendation}
              </button>
            );
          })}
        </div>

        {/* Simulated result box */}
        {simulationChoice && (
          <div className="p-4 bg-slate-900/60 border border-slate-850 rounded-2xl text-xs mt-4 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-250 flex items-center gap-1.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                Simulated {simulationChoice} Verdict
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400">
                Placement Suitability: {intel.decisionSimulator.find(s => s.recommendation === simulationChoice)?.suitabilityScore}%
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              {intel.decisionSimulator.find(s => s.recommendation === simulationChoice)?.why}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
