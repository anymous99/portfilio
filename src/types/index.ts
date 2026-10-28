export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}