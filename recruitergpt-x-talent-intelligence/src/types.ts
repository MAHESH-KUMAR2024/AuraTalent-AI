export interface CandidateInput {
  id: string;
  name: string;
  role: string;
  skills: string[];
  experienceYears: number;
  location: string;
  workPreference: string; // 'remote' | 'hybrid' | 'onsite'
  resumeText: string;
  avatarSeed?: string;
}

export interface CandidateEvaluation {
  candidate_name: string;
  rank: number;
  hiring_confidence: number;
  skill_fit: number;
  experience_fit: number;
  learning_agility: number;
  growth_potential: number;
  behavioral_score: number;
  risk_score: number; // Stability indicator (higher score is higher risk)
  selection_reason: string;
  hidden_strengths: string;
  weaknesses: string;
  recruiter_verdict: string;
  
  // Flags used in leaderboard
  isHiddenGem?: boolean;
  isFutureHighPot?: boolean;
  isShortTrainingReady?: boolean;
  isFlightRisk?: boolean;
}

export interface JobDescription {
  id: string;
  title: string;
  department: string;
  summary: string;
  keywords: string[];
}
