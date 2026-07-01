import React, { useState } from "react";
import { CandidateEvaluation } from "../types";
import { generateCandidateAIIntelligence } from "../utils/recruiterAIEngine";
import { GitCompare, Trophy, AlertTriangle, ShieldCheck, TrendingUp, Cpu, Award } from "lucide-react";

interface CandidateComparisonArenaProps {
  evaluations: CandidateEvaluation[];
}

export default function CandidateComparisonArena({ evaluations }: CandidateComparisonArenaProps) {
  const [cand1, setCand1] = useState<string>(evaluations[0]?.candidate_name || "");
  const [cand2, setCand2] = useState<string>(evaluations[1]?.candidate_name || "");

  if (evaluations.length < 2) {
    return (
      <div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/80 p-8 rounded-3xl text-center text-xs text-slate-500">
        <GitCompare className="w-8 h-8 text-slate-600 mx-auto mb-2" />
        At least two active evaluations are required to run the comparison arena. Please include more candidates in the pool and run the Talent Engine.
      </div>
    );
  }

  // Get active candidate objects
  const active1 = evaluations.find(e => e.candidate_name === cand1) || evaluations[0];
  const active2 = evaluations.find(e => e.candidate_name === cand2) || evaluations[1];

  // Generate detailed metrics
  const intel1 = generateCandidateAIIntelligence(active1.candidate_name, "Engineer", [], 5);
  const intel2 = generateCandidateAIIntelligence(active2.candidate_name, "Engineer", [], 5);

  // Compare categories
  const dimensions = [
    { key: "Technical Skills", label: "Skills Mastery", score1: intel1.scoreBreakdown.find(d => d.dimension === "Technical Skills")?.score || 80, score2: intel2.scoreBreakdown.find(d => d.dimension === "Technical Skills")?.score || 80, desc: "Alignment of technical skill tags and core framework knowledge with role requirements." },
    { key: "Experience", label: "Experience Pedigree", score1: intel1.scoreBreakdown.find(d => d.dimension === "Experience")?.score || 80, score2: intel2.scoreBreakdown.find(d => d.dimension === "Experience")?.score || 80, desc: "Depth of professional history, corporate tenure, and technical execution history." },
    { key: "Projects", label: "Portfolio Impact", score1: intel1.scoreBreakdown.find(d => d.dimension === "Projects")?.score || 80, score2: intel2.scoreBreakdown.find(d => d.dimension === "Projects")?.score || 80, desc: "Complexity and success rate of open source projects, microservices, and past architectural deliveries." },
    { key: "Leadership", label: "Mentorship & Lead", score1: intel1.scoreBreakdown.find(d => d.dimension === "Leadership")?.score || 80, score2: intel2.scoreBreakdown.find(d => d.dimension === "Leadership")?.score || 80, desc: "Mentor values, strategic meeting leadership, and ownership of engineering path decisions." },
    { key: "Risk", label: "Stability Factor", score1: 100 - active1.risk_score, score2: 100 - active2.risk_score, desc: "Candidate tenure retention security. Higher score represents lower historical flight risk." },
    { key: "Growth", label: "Promotability Quotient", score1: active1.growth_potential, score2: active2.growth_potential, desc: "Agility index of career growth, multi-discipline adaptations, and professional drive." },
    { key: "Communication", label: "Technical Clarity", score1: intel1.scoreBreakdown.find(d => d.dimension === "Communication")?.score || 80, score2: intel2.scoreBreakdown.find(d => d.dimension === "Communication")?.score || 80, desc: "Articulate communication, cross-functional collaboration potential, and clear schema presentation." },
    { key: "Culture", label: "Culture & Team Fit", score1: intel1.scoreBreakdown.find(d => d.dimension === "Culture Fit")?.score || 80, score2: intel2.scoreBreakdown.find(d => d.dimension === "Culture Fit")?.score || 80, desc: "Synergy with teams, zero-trust mindset, and collaborative developer alignment." }
  ];

  // Determine overall winner
  const avg1 = Math.round(dimensions.reduce((acc, cur) => acc + cur.score1, 0) / dimensions.length);
  const avg2 = Math.round(dimensions.reduce((acc, cur) => acc + cur.score2, 0) / dimensions.length);
  const overallWinner = avg1 >= avg2 ? active1 : active2;
  const overallLoser = avg1 < avg2 ? active1 : active2;
  const winnerIntel = overallWinner === active1 ? intel1 : intel2;
  const loserIntel = overallWinner === active1 ? intel2 : intel1;

  return (
    <div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/80 p-6 rounded-3xl space-y-6 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-900 pb-4">
        <div>
          <span className="text-[8px] font-black font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/50 border border-emerald-900/30 px-2.5 py-0.5 rounded-full">
            Tactical Analysis Cockpit
          </span>
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-display flex items-center gap-2 mt-1">
            <GitCompare className="text-emerald-400 w-5 h-5" />
            AI Candidate Comparison Arena
          </h3>
          <p className="text-[10px] text-slate-500 font-medium">Map candidate cognitive matrices and determine placement winners side-by-side</p>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-2">
          <select
            value={cand1}
            onChange={(e) => {
              setCand1(e.target.value);
              if (e.target.value === cand2) {
                const other = evaluations.find(ev => ev.candidate_name !== e.target.value);
                if (other) setCand2(other.candidate_name);
              }
            }}
            className="text-[11px] p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-semibold cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            {evaluations.map(e => (
              <option key={e.candidate_name} value={e.candidate_name}>
                {e.candidate_name}
              </option>
            ))}
          </select>
          <span className="text-slate-500 font-mono text-xs">vs</span>
          <select
            value={cand2}
            onChange={(e) => {
              setCand2(e.target.value);
              if (e.target.value === cand1) {
                const other = evaluations.find(ev => ev.candidate_name !== e.target.value);
                if (other) setCand1(other.candidate_name);
              }
            }}
            className="text-[11px] p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-semibold cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            {evaluations.map(e => (
              <option key={e.candidate_name} value={e.candidate_name}>
                {e.candidate_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Candidate 1 Mini-Dossier */}
        <div className={`p-4 rounded-2xl border transition-all ${overallWinner === active1 ? 'bg-emerald-950/5 border-emerald-500/20' : 'bg-slate-900/40 border-slate-800'}`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Candidate Alpha</span>
              <h4 className="text-sm font-extrabold text-white mt-0.5">{active1.candidate_name}</h4>
              <span className="text-[10px] text-slate-400 font-mono">Hiring Rank: #{active1.rank}</span>
            </div>
            <div className="text-right">
              <span className="block text-xs font-black text-emerald-400 font-mono">{active1.hiring_confidence}% Match</span>
              {overallWinner === active1 && (
                <span className="inline-flex items-center gap-1 text-[8px] font-black text-amber-400 uppercase tracking-wider bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-900/30">
                  <Trophy className="w-2.5 h-2.5" /> WINNER
                </span>
              )}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 italic mt-3 leading-relaxed border-t border-slate-900 pt-2.5">
            &ldquo;{active1.recruiter_verdict}&rdquo;
          </p>
        </div>

        {/* Candidate 2 Mini-Dossier */}
        <div className={`p-4 rounded-2xl border transition-all ${overallWinner === active2 ? 'bg-emerald-950/5 border-emerald-500/20' : 'bg-slate-900/40 border-slate-800'}`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Candidate Beta</span>
              <h4 className="text-sm font-extrabold text-white mt-0.5">{active2.candidate_name}</h4>
              <span className="text-[10px] text-slate-400 font-mono">Hiring Rank: #{active2.rank}</span>
            </div>
            <div className="text-right">
              <span className="block text-xs font-black text-emerald-400 font-mono">{active2.hiring_confidence}% Match</span>
              {overallWinner === active2 && (
                <span className="inline-flex items-center gap-1 text-[8px] font-black text-amber-400 uppercase tracking-wider bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-900/30">
                  <Trophy className="w-2.5 h-2.5" /> WINNER
                </span>
              )}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 italic mt-3 leading-relaxed border-t border-slate-900 pt-2.5">
            &ldquo;{active2.recruiter_verdict}&rdquo;
          </p>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="border border-slate-900 rounded-2xl overflow-hidden bg-slate-950/70">
        <div className="grid grid-cols-12 bg-slate-900/60 p-3 text-[10px] font-bold text-slate-450 uppercase font-mono tracking-widest border-b border-slate-900">
          <div className="col-span-5 sm:col-span-4">Cognitive Dimension</div>
          <div className="col-span-3 sm:col-span-3 text-center">{active1.candidate_name.split(" ")[0]}</div>
          <div className="col-span-1 hidden sm:block text-center">Delta</div>
          <div className="col-span-3 sm:col-span-3 text-center">{active2.candidate_name.split(" ")[0]}</div>
          <div className="col-span-1 sm:col-span-1 text-right">Edge</div>
        </div>

        <div className="divide-y divide-slate-900">
          {dimensions.map((dim, idx) => {
            const diff = Math.abs(dim.score1 - dim.score2);
            const winnerNode = dim.score1 > dim.score2 ? "left" : dim.score1 < dim.score2 ? "right" : "tie";
            
            return (
              <div key={idx} className="grid grid-cols-12 p-3.5 text-xs items-center hover:bg-slate-900/20 transition-colors">
                {/* label */}
                <div className="col-span-5 sm:col-span-4 pr-2">
                  <span className="block font-bold text-slate-200">{dim.label}</span>
                  <span className="block text-[9px] text-slate-500 font-medium leading-tight mt-0.5">{dim.desc}</span>
                </div>

                {/* Score 1 */}
                <div className="col-span-3 sm:col-span-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className={`font-mono font-bold ${winnerNode === "left" ? "text-emerald-400" : "text-slate-400"}`}>
                      {dim.score1}
                    </span>
                    <div className="w-12 bg-slate-900 rounded-full h-1 hidden sm:block overflow-hidden">
                      <div className={`h-full ${winnerNode === "left" ? "bg-emerald-500" : "bg-slate-700"}`} style={{ width: `${dim.score1}%` }} />
                    </div>
                  </div>
                </div>

                {/* Delta */}
                <div className="col-span-1 hidden sm:block text-center font-mono text-[10px] text-slate-500">
                  {diff === 0 ? "=" : `±${diff}`}
                </div>

                {/* Score 2 */}
                <div className="col-span-3 sm:col-span-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-12 bg-slate-900 rounded-full h-1 hidden sm:block overflow-hidden">
                      <div className={`h-full ${winnerNode === "right" ? "bg-emerald-500" : "bg-slate-700"}`} style={{ width: `${dim.score2}%` }} />
                    </div>
                    <span className={`font-mono font-bold ${winnerNode === "right" ? "text-emerald-400" : "text-slate-400"}`}>
                      {dim.score2}
                    </span>
                  </div>
                </div>

                {/* Winner indication */}
                <div className="col-span-4 sm:col-span-1 text-right">
                  {winnerNode === "left" ? (
                    <span className="text-[9px] font-black text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">L_EDGE</span>
                  ) : winnerNode === "right" ? (
                    <span className="text-[9px] font-black text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">R_EDGE</span>
                  ) : (
                    <span className="text-[9px] font-black text-slate-500 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">TIE</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Executive Summary Compare Card */}
      <div className="p-4 bg-gradient-to-tr from-slate-950 to-emerald-950/20 rounded-2xl border border-emerald-900/30 relative">
        <span className="absolute top-2.5 right-3 text-[8px] font-mono font-bold text-amber-400 tracking-wider bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-900/25 flex items-center gap-1 animate-pulse">
          <Award className="w-3 h-3" /> ARENA VERDICT
        </span>
        <h4 className="font-bold text-slate-100 text-xs mb-1.5 flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-amber-400" />
          Overall Placement Alignment Winner: <span className="text-emerald-400">{overallWinner.candidate_name}</span>
        </h4>
        <p className="text-slate-350 text-xs leading-relaxed font-sans font-medium">
          {overallWinner.candidate_name} exhibits a higher composite alignment index of <strong className="text-emerald-400 font-mono">{avg1}%</strong> versus {overallLoser.candidate_name}'s <strong className="text-slate-400 font-mono">{avg2}%</strong>. {winnerIntel.executiveSummary} In contrast, {overallLoser.candidate_name} is best positioned as a dedicated contributor with emphasis on: <span className="text-slate-400 italic">{loserIntel.dominantPersonality}</span>.
        </p>
      </div>
    </div>
  );
}
