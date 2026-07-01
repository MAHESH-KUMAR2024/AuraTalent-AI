import React from "react";
import { MapPin, Briefcase, Calendar, Check, Sparkles } from "lucide-react";
import { CandidateInput } from "../types";

interface CandidateCardProps {
  candidate: CandidateInput;
  isSelected: boolean;
  onToggle: () => void;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  isSelected,
  onToggle,
}) => {
  // Simple initials builder
  const initials = candidate.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      onClick={onToggle}
      className={`p-4 mb-3 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden select-none group ${
        isSelected
          ? "bg-slate-900/90 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.08)] scale-[1.01]"
          : "bg-slate-950/40 border-slate-800/80 hover:border-slate-750 hover:bg-slate-900/60 hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
      }`}
    >
      {/* Decorative vertical gradient bar on active state */}
      <div
        className={`absolute top-0 left-0 bottom-0 w-[4px] transition-all duration-300 ${
          isSelected ? "bg-gradient-to-b from-emerald-400 to-teal-500" : "bg-transparent"
        }`}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Initials Avatar Badge */}
          <div
            className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center font-bold font-mono text-xs transition-all duration-300 ${
              isSelected
                ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-slate-900 text-slate-400 border border-slate-800/80 group-hover:bg-slate-850 group-hover:text-slate-300"
            }`}
          >
            {initials}
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-extrabold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-wider font-sans">
              {candidate.name}
            </h4>
            <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5 tracking-tight font-sans">
              {candidate.role}
            </p>
          </div>
        </div>

        {/* Custom Premium Checkbox Toggle */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={`w-5 h-5 rounded-lg border transition-all duration-200 flex items-center justify-center cursor-pointer shrink-0 ${
            isSelected
              ? "bg-emerald-500 border-emerald-400 text-slate-950 scale-110 shadow-sm"
              : "border-slate-700 bg-slate-950 hover:border-slate-500"
          }`}
        >
          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
        </div>
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-1 text-[10px] font-mono font-bold text-slate-400 border-t border-slate-900 pt-2.5 shrink-0">
        <span className="flex items-center gap-1.5 truncate">
          <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          {candidate.experienceYears} Yrs Exp
        </span>
        <span className="flex items-center gap-1.5 truncate">
          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          {candidate.location}
        </span>
        <span className="flex items-center gap-1.5 justify-end truncate">
          <Briefcase className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          {candidate.workPreference}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1 shrink-0">
        {candidate.skills.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className={`text-[9px] font-bold px-2 py-0.5 rounded-md border font-sans uppercase tracking-wider transition-colors duration-200 ${
              isSelected
                ? "bg-emerald-950/40 border-emerald-800/40 text-emerald-400"
                : "bg-slate-950 border-slate-900 text-slate-500"
            }`}
          >
            {skill}
          </span>
        ))}
        {candidate.skills.length > 4 && (
          <span className="text-[9px] font-mono text-slate-500 bg-slate-950/20 px-1.5 py-0.5 rounded-md border border-slate-900">
            +{candidate.skills.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
};
