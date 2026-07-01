import React, { useState } from "react";
import { X, User, PlusCircle } from "lucide-react";
import { CandidateInput } from "../types";

interface AddCandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (candidate: Partial<CandidateInput>) => void;
}

export const AddCandidateModal: React.FC<AddCandidateModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experienceYears, setExperienceYears] = useState(5);
  const [location, setLocation] = useState("");
  const [workPreference, setWorkPreference] = useState("Hybrid");
  const [skillsText, setSkillsText] = useState("");
  const [resumeText, setResumeText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role) {
      alert("Candidate Name and Target Role are required!");
      return;
    }

    const skills = skillsText
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    onAdd({
      name,
      role,
      experienceYears: Number(experienceYears) || 0,
      location: location || "Remote",
      workPreference,
      skills: skills.length > 0 ? skills : ["React", "TypeScript", "Node.js"],
      resumeText: resumeText || `${name} is experienced in ${role}. Highly motivated and active searcher.`,
    });

    // Reset fields
    setName("");
    setRole("");
    setExperienceYears(5);
    setLocation("");
    setWorkPreference("Hybrid");
    setSkillsText("");
    setResumeText("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-left flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2 text-emerald-400">
            <User className="w-4.5 h-4.5" />
            <h3 className="text-sm font-black uppercase tracking-wider text-white">
              Configure Candidate Profile
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-850 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[80vh] overflow-y-auto scrollbar-thin">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                Candidate Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Liam Sterling"
                className="w-full text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                Target Role *
              </label>
              <input
                type="text"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Lead Frontend Architect"
                className="w-full text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                min="0"
                max="50"
                value={experienceYears}
                onChange={(e) => setExperienceYears(parseInt(e.target.value) || 0)}
                className="w-full text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                Geo Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Seattle, WA"
                className="w-full text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                Preference
              </label>
              <select
                value={workPreference}
                onChange={(e) => setWorkPreference(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="In-office">In-office</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
              Core Skills & Tools (comma separated)
            </label>
            <input
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              placeholder="React, TypeScript, Redux, Node.js, Next.js, CSS"
              className="w-full text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">
              Candidate Resume / Technical History (pasted)
            </label>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              rows={5}
              placeholder="Paste professional work summaries, bullet points, certifications..."
              className="w-full text-xs p-3 rounded-lg bg-slate-950 border border-slate-850 text-slate-100 font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-y leading-relaxed"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-bold rounded-lg text-slate-350 hover:text-white transition-all text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-lg flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              Register Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
