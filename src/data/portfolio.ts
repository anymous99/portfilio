import type {
  SkillGroup,
  Experience,
  Project,
  Certification,
  Education,
} from "../types";

export const personalInfo = {
  name: "N Dheeraj Chowdary",
  title: "Full Stack Developer · MERN Stack",
  tagline:
    "Computer Science graduate building scalable web applications with React, Node.js, Express & MongoDB.",
  location: "Andhra Pradesh, India",
  email: "dheerajnapaa@gmail.com",
  phone: "+91 7780142337",
  github: "https://github.com/anymous99?tab=repositories", 
  linkedin: "https://www.linkedin.com/in/dheeraj-chowdary-991a2124a/", 
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "Python", "Java", "SQL", "Linux"] },
  { category: "Frontend", items: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Responsive Design"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Flask", "RESTful APIs", "JWT"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman"] },
  { category: "Concepts", items: ["API Integration", "Debugging", "Problem Solving", "Agile Methodology"] },
];

export const experience: Experience[] = [
  {
    company: "Thurent",
    role: "Full Stack Developer",
    period: "May 2025 – Jan 2026",
    location: "Remote",
    bullets: [
      "Built an event management and service booking platform from the ground up using React.js, Node.js, and Express.js.",
      "Developed the core booking flow including service selection, event details, checkout, shopping cart, and food catalog features.",
      "Built an admin dashboard with role-based access and CRUD operations for managing users and services (admins, managers, support staff).",
      "Collaborated with the team during planning and development, fixed bugs, and turned initial requirements into working features for product demos.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fitness Tracking Application",
    description:
      "A fitness tracking app with JWT-based authentication, activity logging, and a responsive dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT"],
    githubUrl: "https://github.com/anymous99/project",
    liveUrl: "", 
  },
  {
    title: "Club Management System",
    description:
      "Club management platform with separate roles for admins, coordinators, and club leaders, plus venue booking and event scheduling.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    githubUrl: "https://github.com/anymous99/ubiquitous-octo-engine",
    liveUrl: "",
  },
    {
    title: "Suicidal Ideation Analysis",
    description:
      "An ML-powered text analysis tool that classifies social media posts and text inputs for suicidal ideation using NLP. Trained on labeled datasets with TF-IDF vectorization and multiple classifiers, includes a Flask API backend and an interactive React dashboard for predictions and confidence scores.",
    tech: [
      "Python",
      "Flask",
      "scikit-learn",
      "Pandas",
      "Html/CSS",
      "RESTful APIs",
    ],
    githubUrl: "https://github.com/anymous99/sucidal-analyzer",
    
  },

  {
    title: "Resume Analyzer",
    description:
      "A full-stack resume analysis tool that parses uploaded resumes, extracts key skills, and compares them against a job description. Generates a match score, highlights missing keywords, and suggests improvements. Built with a React + TypeScript frontend, Node.js/Express backend, and MongoDB for storing analysis history.",
    tech: [
      "React.js",
      "TypeScript",
      "Flask",
      "Mysql",
      "RESTful APIs",
    ],
    githubUrl: "https://github.com/anymous99/resume-analyser",
    
  },
];

export const certifications: Certification[] = [
  {
    title: "MERN Full Stack",
    issuer: "ETHNUS",
    details: [
      "Comprehensive training in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Hands-on experience with RESTful API design, JWT authentication, and Git version control.",
    ],
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    issuer: "Google Developers",
    details: [
      "Learned core AI/ML concepts including supervised and unsupervised learning, model evaluation, and feature engineering.",
      "Practical exposure to scikit-learn, Pandas, and TensorFlow.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "VIT-AP University, Amaravati, Andhra Pradesh",
    period: "Aug 2021 – Nov 2025",
    score: "CGPA: 7.94",
  },
  {
    degree: "Intermediate (+12)",
    institution: "Narayana Junior College, Nellore",
    period: "June 2019 – Mar 2021",
    score: "Percentage: 90.3%",
  },
];