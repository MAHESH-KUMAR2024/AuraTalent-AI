import React from "react";
import { Award, Star, Activity, ArrowUpRight } from "lucide-react";
import { CandidateEvaluation } from "../types";

interface EvaluationPodiumProps {
  topEvaluations: CandidateEvaluation[];
  onSelectCandidate: (name: string) => void;
  selectedName: string;
}

export const EvaluationPodium: React.FC<EvaluationPodiumProps> = ({
  topEvaluations,
  onSelectCandidate,
  selectedName,
}) => {
  const podiumArray = topEvaluations.slice(0, 3);
  if (podiumArray.length < 3) return null;

  // Re-order them: Left = 2nd Place, Center = 1st Place, Right = 3rd Place
  const first = podiumArray.find((e) => e.rank === 1) || podiumArray[0];
  const second = podiumArray.find((e) => e.rank === 2) || podiumArray[1];
  const third = podiumArray.find((e) => e.rank === 3) || podiumArray[2];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const positions = [
    {
      item: second,
      rank: 2,
      height: "h-32 sm:h-36",
      color: "border-slate-800 bg-slate-900/40 hover:border-slate-700",
      avatarBg: "bg-gradient-to-br from-slate-400 to-slate-600 text-slate-100",
      accentBorder: "emerald-400",
      badgeText: "Strong Contender",
      ringGlow: "rgba(148,163,184,0.15)",
    },
    {
      item: first,
      rank: 1,
      height: "h-40 sm:h-44",
      color: "border-amber-500/30 bg-amber-950/5 hover:border-amber-500/65",
      avatarBg: "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] font-black",
      accentBorder: "amber-500",
      badgeText: "Top Candidate Fit",
      ringGlow: "rgba(245,158,11,0.25)",
    },
    {
      item: third,
      rank: 3,
      height: "h-24 sm:h-28",
      color: "border-slate-800 bg-slate-950/40 hover:border-slate-850",
      avatarBg: "bg-gradient-to-br from-amber-700 via-orange-700 to-amber-900 text-amber-100",
      accentBorder: "teal-500",
      badgeText: "Valid Contender",
      ringGlow: "rgba(180,83,9,0.1)",
    },
  ];

  return (
    <div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/80 p-6 rounded-3xl relative overflow-hidden shadow-2xl">
      {/* Absolute decorative color blotch behind podium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 border-b border-slate-900 pb-4 relative z-10">
        <div>
          <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950 border border-emerald-900/30 px-2.5 py-0.5 rounded-full">
            LIVE PREDICTION SUMMARY
          </span>
          <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 mt-1.5 font-display">
            <Award className="w-5 h-5 text-emerald-400 animate-pulse" />
            Top Matching Talents Podium
          </h3>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
          <Activity className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Formulas evaluated on 9 cognitive dimensions</span>
        </div>
      </div>

      <div className="flex items-end justify-center gap-3 sm:gap-6 pt-6 max-w-xl mx-auto relative z-10 select-none">
        {positions.map(({ item, rank, height, color, avatarBg, badgeText, ringGlow, accentBorder }) => {
          if (!item) return null;
          const isSelected = selectedName === item.candidate_name;
          const isGold = rank === 1;

          return (
            <div
              key={item.candidate_name}
              onClick={() => onSelectCandidate(item.candidate_name)}
              className="flex flex-col items-center flex-1 cursor-pointer group"
            >
              {/* Floating Profile Info Card */}
              <div className="text-center mb-3 w-full group/card">
                {/* Micro glowing avatar */}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-2.5 transition-all duration-300 relative ${
                    isSelected
                      ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900 scale-105"
                      : "group-hover:scale-105"
                  } ${avatarBg}`}
                  style={{
                    boxShadow: isSelected ? `0 0 20px ${ringGlow}` : undefined,
                  }}
                >
                  <span className="text-xs tracking-tight uppercase">{getInitials(item.candidate_name)}</span>
                  
                  {/* Position label indicator overlay */}
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-slate-900 border border-slate-750 text-[10px] font-mono font-black text-slate-200 flex items-center justify-center">
                    {rank}
                  </span>
                </div>
                
                {/* Candidate Name */}
                <h4 className="text-xs font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-200 truncate max-w-[105px] sm:max-w-[140px] block mx-auto font-sans uppercase tracking-tight">
                  {item.candidate_name}
                </h4>

                {/* Score */}
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className={`text-[11px] font-mono font-black ${isGold ? "text-amber-400 font-extrabold" : "text-emerald-400"}`}>
                    {item.hiring_confidence}%
                  </span>
                  <span className="text-[8px] text-slate-500 font-medium">match</span>
                </div>
              </div>

              {/* Podium Block element */}
              <div
                className={`w-full ${height} ${color} rounded-2xl border relative flex flex-col items-center justify-center p-3 text-center transition-all duration-300 ${
                  isSelected
                    ? "border-emerald-500 bg-slate-900/90 shadow-[0_4px_25px_rgba(16,185,129,0.08)] scale-[1.02]"
                    : "hover:bg-slate-900 hover:shadow-lg"
                }`}
              >
                {/* Large visual ranking badge inside glass */}
                <span
                  className={`text-2xl sm:text-3xl font-black font-mono transition-opacity duration-300 ${
                    isGold ? "text-amber-500/80" : "text-slate-600/80"
                  } group-hover:opacity-100`}
                >
                  #{rank}
                </span>

                <span className="block text-[8px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">
                  {badgeText}
                </span>

                <span className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
