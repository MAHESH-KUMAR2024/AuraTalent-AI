import React, { useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { CandidateEvaluation } from "../types";

interface RadarChartComparisonProps {
  candidates: CandidateEvaluation[];
}

export const RadarChartComparison: React.FC<RadarChartComparisonProps> = ({
  candidates,
}) => {
  const chartData = useMemo(() => {
    if (candidates.length === 0) return [];

    const keys = [
      { key: "skill_fit", label: "Skill Fit" },
      { key: "experience_fit", label: "Exp Fit" },
      { key: "learning_agility", label: "Learning Agility" },
      { key: "growth_potential", label: "Growth Pot" },
      { key: "behavioral_score", label: "Behavioral" },
      { key: "risk_score", label: "Risk Scale" },
    ];

    return keys.map(({ key, label }) => {
      const row: any = { subject: label };
      candidates.forEach((cand) => {
        row[cand.candidate_name] = (cand as any)[key];
      });
      return row;
    });
  }, [candidates]);

  if (candidates.length === 0) {
    return (
      <div className="bg-slate-950/40 border border-slate-800 p-6 rounded-2xl h-[420px] flex items-center justify-center text-xs text-slate-500">
        Pin at least one candidate from the rankings to load radar analysis overlays.
      </div>
    );
  }

  // Predefined beautiful semantic colors for up to 3 candidates
  const palette = [
    { stroke: "#10b981", fill: "#10b981", fillOpacity: 0.15 }, // Emerald
    { stroke: "#3b82f6", fill: "#3b82f6", fillOpacity: 0.15 }, // Blue
    { stroke: "#8b5cf6", fill: "#8b5cf6", fillOpacity: 0.15 }, // Purple
  ];

  return (
    <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl flex flex-col h-[420px]">
      <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest text-left mb-2.5">
        Dimension Radar Graph overlays
      </h3>
      
      <div className="flex-1 min-h-0 relative select-none">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: "600" }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#475569", fontSize: 9 }}
              stroke="#334155"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                borderColor: "#334155",
                borderRadius: "8px",
                fontSize: "11px",
                color: "#f1f5f9",
              }}
            />
            {candidates.map((cand, idx) => {
              const color = palette[idx % palette.length];
              return (
                <Radar
                  key={cand.candidate_name}
                  name={cand.candidate_name}
                  dataKey={cand.candidate_name}
                  stroke={color.stroke}
                  fill={color.fill}
                  fillOpacity={color.fillOpacity}
                  strokeWidth={2}
                />
              );
            })}
            <Legend
              wrapperStyle={{
                fontSize: "11px",
                paddingTop: "10px",
                color: "#94a3b8",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
