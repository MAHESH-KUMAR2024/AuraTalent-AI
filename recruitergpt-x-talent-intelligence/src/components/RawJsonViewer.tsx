import React, { useState } from "react";
import { Copy, Check, Terminal, FileDown } from "lucide-react";
import { CandidateEvaluation } from "../types";

interface RawJsonViewerProps {
  evaluations: CandidateEvaluation[];
}

export const RawJsonViewer: React.FC<RawJsonViewerProps> = ({ evaluations }) => {
  const [copied, setCopied] = useState(false);

  // Filter out custom properties and output exactly the schema requested by the user
  const schemaList = evaluations.map((e) => ({
    candidate_name: e.candidate_name,
    rank: String(e.rank),
    hiring_confidence: String(e.hiring_confidence),
    skill_fit: String(e.skill_fit),
    experience_fit: String(e.experience_fit),
    growth_potential: String(e.growth_potential),
    behavioral_score: String(e.behavioral_score),
    learning_agility: String(e.learning_agility),
    risk_score: String(e.risk_score),
    selection_reason: e.selection_reason,
    hidden_strengths: e.hidden_strengths,
    weaknesses: e.weaknesses,
    recruiter_verdict: e.recruiter_verdict,
  }));

  const jsonString = JSON.stringify(schemaList, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `RecruiterGPT_X_Evaluations_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#1e1e24] text-[#A9B2C3] font-mono p-5 rounded-2xl border border-slate-800 shadow-xl text-left relative flex flex-col h-[560px]">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <Terminal className="w-4.5 h-4.5 text-emerald-500" />
          <span className="text-xs font-bold text-slate-200 tracking-wider">
            RECRUITER_GPT_X_OUTPUT.JSON
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-800"
            title="Download JSON file"
          >
            <FileDown className="w-3.5 h-3.5" />
            Download
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy JSON
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 overflow-auto bg-slate-950/40 rounded-xl p-3 border border-slate-900 scrollbar-thin">
        <pre className="text-xs leading-relaxed text-emerald-400 select-all">
          {jsonString}
        </pre>
      </div>

      {/* Footer Instructions */}
      <div className="mt-3 text-[10px] text-slate-500 border-t border-slate-900 pt-2 shrink-0">
        // Standard compliance token: This JSON strict output translates exact clinical parameters into systems of records.
      </div>
    </div>
  );
};
