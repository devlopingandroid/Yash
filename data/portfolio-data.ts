import { getAssetPath } from "@/lib/asset";

function fixAssets<T>(obj: T): T {
  if (!obj) return obj;
  if (typeof obj === "string") {
    if (
      (obj.startsWith("/") || obj.startsWith("./")) &&
      /\.(png|jpe?g|svg|webp|gif|pdf|ico)$/i.test(obj)
    ) {
      return getAssetPath(obj) as unknown as T;
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(fixAssets) as unknown as T;
  }
  if (typeof obj === "object") {
    const res: Record<string, any> = {};
    for (const key of Object.keys(obj)) {
      res[key] = fixAssets((obj as any)[key]);
    }
    return res as T;
  }
  return obj;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  greeting: string;
  tagline: string;
  avatarUrl: string;
  resumeUrl: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    leetcode?: string;
    instagram?: string;
  };
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  iconName: string;
}

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface SkillItem {
  name: string;
  iconKey: string;
  color?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  category?: string;
  logoUrl?: string;
  period: string;
  location: string;
  current?: boolean;
  projectHighlight?: string;
  theme?: "teal" | "blue" | "purple";
  bullets: string[];
  technologies: string[];
  certificateUrl?: string;
}

export const experienceData: ExperienceItem[] = fixAssets([
  {
    id: "exp-infosys",
    role: "Software Development Intern",
    company: "Infosys Springboard",
    category: "Civic Tech",
    logoUrl: "/logos/infosys.jpg",
    period: "Jul 2026 – Sep 2026",
    location: "Remote",
    current: true,
    projectHighlight: "Civic Grievance Management System",
    theme: "teal",
    bullets: [
      "Built a web portal to let citizens report and track issues related to public infrastructure (e.g., roads, streetlights, sanitation) with real-time status updates.",
      "Implemented role-based access control (RBAC) using Spring Security and JWT, segregating citizen, field officer, and municipal admin permissions.",
      "Developed 15+ REST endpoints in Spring Boot with modular service/DAO layers, optimizing MySQL indexes for faster search and status filtering."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "REST APIs", "Angular", "Git"],
    certificateUrl: "/certificates/1-page-00001.jpg",
  },
  {
    id: "exp-drdo",
    role: "Software Intern",
    company: "DRDO SSPL",
    category: "Defense Tech & R&D",
    logoUrl: "/logos/drdo.png",
    period: "Jun 2026 – Aug 2026",
    location: "Delhi, India",
    current: false,
    projectHighlight: "Defense Research Expenditure Platform",
    theme: "blue",
    bullets: [
      "Developed an internal web platform for defense scientists to track research grants, equipment procurements, and divisional expenditure in real time.",
      "Translated complex government administrative procedures into clean Java & Spring Boot backend services with multi-tier approval workflows.",
      "Designed normalized relational database schemas in MySQL with audit logging to replace manual paper trail and spreadsheet reconciliation.",
      "Wrote comprehensive unit test suites using JUnit and Mockito, ensuring reliable data transactions across high-priority defense accounts."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Mockito", "REST APIs", "Git"],
    certificateUrl: "/certificates/drdo-certificate.png",
  },
  {
    id: "exp-iiitd",
    role: "Summer Research Intern",
    company: "IIIT Delhi",
    category: "Biosensor Analytics & Research",
    logoUrl: "/logos/iiitd.jpg",
    period: "Jun 2025 – Aug 2025",
    location: "New Delhi, India",
    current: false,
    projectHighlight: "Wearable Biosensor Analytics",
    theme: "purple",
    bullets: [
      "Worked with researchers at the Mobile Computing lab to process raw physiological signals (PPG and accelerometer) from wearable health devices.",
      "Built automated Python data pipelines with NumPy and SciPy to denoise raw time-series feeds and clean motion artifacts across 10,000+ recordings.",
      "Extracted time-domain and spectral biometric features used by the research group to train experimental cardiovascular predictive models.",
      "Standardized data preprocessing benchmarks into modular scripts and documented reproducible workflows in Jupyter notebooks for lab publication."
    ],
    technologies: ["Python", "NumPy", "SciPy", "Pandas", "Signal Processing", "Jupyter", "Data Analysis"],
    certificateUrl: "/certificates/Certificate_Yash Goel_mHelath 2025-page-00001.jpg",
  },
]);

export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  tags: string[];
  overview: {
    description: string;
    techIcons: string[];
    stats: CaseStudyStat[];
    mockupImage: string;
    floatingCards: { title: string; value: string; icon: string }[];
  };
  problem: {
    statement: string;
    targetAudience: string;
    points: string[];
  };
  techStack: {
    category: string;
    technologies: string[];
    details: string;
  }[];
  architecture: {
    summary: string;
    highlights: string[];
  };
  features: {
    title: string;
    description: string;
  }[];
  screenshots: {
    title: string;
    caption: string;
    image: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureScope: string[];
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  fullDescription?: string;
  techBadges: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  logo?: string;
  year: string;
  category: "Internships" | "Hackathons" | "Courses" | "Workshops" | "Others";
  image: string;
  credentialUrl?: string;
}

export interface HackathonItem {
  id: string;
  name: string;
  photo: string;
  result: string;
  year: string;
  projectTitle?: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Publications" | "Certificates" | "Hackathons" | "Campus" | "Events" | "Internship" | "Travel" | "Others" | "Work";
  image: string;
  caption: string;
  spanClass?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  readTime: string;
  slug: string;
  url: string;
  tags?: string[];
}

export interface TraitItem {
  id: string;
  label: string;
  iconName: string;
}

export interface AboutStat {
  id: string;
  number: string;
  label: string;
  isHighlight?: boolean;
  iconName?: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const aboutData = {
  heading: "Building Scalable Systems & Solving Real Problems",
  paragraphs: [
    "I'm a prefinal-year Computer Science undergrad at VIPS Delhi. I’ve always been driven by a curiosity for how systems operate beneath the surface, which led me down the path of backend architecture, full-stack engineering, and distributed systems.",
    "Over the course of my journey, I've had the opportunity to build software in diverse settings—from developing defense research expenditure platforms at DRDO SSPL and processing biosensor data pipelines at IIIT Delhi, to architecting civic grievance systems at Infosys Springboard.",
  ],
  traits: [
    { id: "skill-1", label: "Backend Systems", iconName: "Server" },
    { id: "skill-2", label: "Full-Stack Development", iconName: "Rocket" },
    { id: "skill-3", label: "Data Structures & Algos", iconName: "Terminal" },
    { id: "skill-4", label: "Applied AI & Research", iconName: "Brain" }
  ] as TraitItem[],
  stats: [
    { id: "astat-1", number: "3", label: "Internships Completed" },
    { id: "astat-2", number: "150+", label: "DSA Problems Solved" },
    { id: "astat-3", number: "20+", label: "Hackathons & Events" },
    { id: "astat-4", number: "4", label: "Published Patents", isHighlight: true }
  ] as AboutStat[],
  recruiterHooks: [
    { icon: "Trophy", title: "Qualcomm Multiverse Winner", desc: "Snapdragon AI & IoT Hardware Bot" },
    { icon: "Rocket", title: "Gemini Student Ambassador 2026", desc: "Google Campus AI Face" },
    { icon: "Award", title: "4 Published Technical Patents", desc: "IoT Sensors & Hardware Telemetry" },
    { icon: "Code", title: "150+ LeetCode Solved", desc: "Data Structures & Algorithms" },
  ]
};

export const footerData = {
  taglines: [
    "Building products.",
    "Solving problems.",
    "Growing every day."
  ],
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Achievements", href: "#achievements" },
        { label: "Gallery", href: "#gallery" },
        { label: "Blogs", href: "#blogs" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "GitHub", href: "https://github.com/devlopingandroid" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-goelcs/" },
        { label: "LeetCode", href: "https://leetcode.com/u/yashgoel01/" },
        { label: "Twitter / X", href: "https://x.com/yashbuilds_" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Yash Goel. All rights reserved.",
  builtWith: "Designed & Built with ❤️ by Yash Goel",
};

export const resumeData = fixAssets({
  atsScore: 96,
  statusLabel: "Excellent",
  checklist: [
    { label: "Format & Structure", passed: true, score: "100%" },
    { label: "Content Quality & Impact", passed: true, score: "95%" },
    { label: "Technical Skills Match", passed: true, score: "98%" },
    { label: "Readability & Parsing", passed: true, score: "96%" },
    { label: "Industry Keywords Optimization", passed: true, score: "92%" },
  ],
  downloadUrl: "/Yash_Goel.pdf",
});

export const personalInfo: PersonalInfo = fixAssets({
  name: "Yash Goel",
  firstName: "Yash",
  lastName: "Goel",
  role: "Software Engineer",
  greeting: "Hi, I'm",
  tagline: "",
  avatarUrl: "/professional.jpeg",
  resumeUrl: "/Yash_Goel.pdf",
  email: "yashgoel15119@gmail.com",
  phone: "+91 98765 43210",
  location: "Delhi, India",
  socialLinks: {
    github: "https://github.com/devlopingandroid",
    linkedin: "https://www.linkedin.com/in/yash-goelcs/",
    twitter: "https://x.com/yashbuilds_",
    leetcode: "https://leetcode.com/u/yashgoel01/",
  },
});

export const heroStats: StatItem[] = [
  { id: "stat-1", number: "3", label: "Internships", iconName: "Briefcase" },
  { id: "stat-2", number: "150+", label: "DSA Problems", iconName: "Cpu" },
  { id: "stat-3", number: "4", label: "Patents", iconName: "Award" },
  { id: "stat-4", number: "10+", label: "Projects Built", iconName: "Code" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Gallery", href: "#gallery", sectionId: "gallery" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      { name: "React", iconKey: "SiReact", color: "#61DAFB" },
      { name: "Next.js", iconKey: "SiNextdotjs", color: "#FFFFFF" },
      { name: "Angular", iconKey: "SiAngular", color: "#DD0031" },
      { name: "Tailwind", iconKey: "SiTailwindcss", color: "#06B6D4" },
      { name: "Redux", iconKey: "SiRedux", color: "#764ABC" },
      { name: "JavaScript", iconKey: "SiJavascript", color: "#F7DF1E" },
      { name: "HTML", iconKey: "SiHtml5", color: "#E34F26" },
      { name: "CSS", iconKey: "SiCss3", color: "#1572B6" },
    ],
  },

  {
    id: "backend",
    category: "Backend",
    skills: [
      { name: "Spring Boot", iconKey: "SiSpringboot", color: "#6DB33F" },
      { name: "Node.js", iconKey: "SiNodedotjs", color: "#5FA04E" },
      { name: "Express.js", iconKey: "SiExpress", color: "#E0E0E0" },
      { name: "MongoDB", iconKey: "SiMongodb", color: "#47A248" },
      { name: "Java", iconKey: "FaJava", color: "#5382A1" },
      { name: "Python", iconKey: "SiPython", color: "#3776AB" },
      { name: "REST APIs", iconKey: "TbApi", color: "#14E8C4" },
    ],
  },
  {
    id: "tools",
    category: "Tools & Others",
    skills: [
      { name: "Git", iconKey: "SiGit", color: "#F05032" },
      { name: "Docker", iconKey: "SiDocker", color: "#2496ED" },
      { name: "Linux", iconKey: "SiLinux", color: "#FCC624" },
      { name: "Postman", iconKey: "SiPostman", color: "#FF6C37" },
      { name: "VS Code", iconKey: "SiVisualstudiocode", color: "#007ACC" },
      { name: "Figma", iconKey: "SiFigma", color: "#F24E1E" },
    ],
  },
  {
    id: "aiml",
    category: "AI / ML",
    skills: [
      { name: "Python", iconKey: "SiPython", color: "#3776AB" },
      { name: "TensorFlow", iconKey: "SiTensorflow", color: "#FF6F00" },
      { name: "OpenCV", iconKey: "SiOpencv", color: "#5C3EE8" },
      { name: "YOLO", iconKey: "SiPyTorch", color: "#EE4C2C" },
      { name: "Pandas", iconKey: "SiPandas", color: "#150458" },
      { name: "NumPy", iconKey: "SiNumpy", color: "#013243" },
    ],
  },
  {
    id: "cloud",
    category: "Cloud / DevOps",
    skills: [
      { name: "AWS", iconKey: "SiAmazonaws", color: "#FF9900" },
      { name: "Firebase", iconKey: "SiFirebase", color: "#DD2C00" },
      { name: "Vercel", iconKey: "SiVercel", color: "#FFFFFF" },
      { name: "Render", iconKey: "SiRender", color: "#46E3B7" },
      { name: "CI/CD", iconKey: "SiGithubactions", color: "#2088FF" },
    ],
  },
];

export const currentlyExploringData: string[] = [
  "System Design & Distributed Systems",
  "Kubernetes & Container Orchestration",
  "LangChain & AI Agent Frameworks",
  "Generative AI & LLM Fine-Tuning",
  "WebAssembly & High-Performance Web",
];

export const techILoveData = {
  quote: "Crafting clean abstractions, intuitive interfaces, and scalable infrastructure.",
  description: "Passionate about building scalable backend infrastructure, high-performance web systems, and intelligent AI products with clean architecture and pixel-perfect design.",
};

export const projectsData: Project[] = fixAssets([
  {
    id: "proj-budget-eagle",
    title: "Budget Eagle",
    tag: "Full Stack & AI",
    description: "AI-powered personal finance platform centralizing expense tracking, automated budget analytics, and investment insights.",
    techBadges: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "/projects/budget-eagle.png",
    githubUrl: "https://github.com/budgeteagle/budget_eagle_web",
    liveUrl: "https://budgeteagle.in/",
    featured: true,
    caseStudy: {
      tags: ["Finance", "Full Stack", "AI"],
      overview: {
        description: "Budget Eagle is an intelligent financial management platform designed to eliminate manual expense logging. It uses machine learning models to automatically parse receipt data, categorize daily spending, track monthly budgets in real time, and deliver actionable financial health recommendations.",
        techIcons: ["SiReact", "SiNodedotjs", "SiMongodb", "SiExpress", "SiTailwindcss"],
        stats: [
          { label: "Active Users", value: "100+" },
          { label: "Transactions Processed", value: "10K+" },
          { label: "System Uptime", value: "99.9%" },
          { label: "Core Features", value: "15+" },
        ],
        mockupImage: "/projects/budget-eagle-dashboard.jpg",
        floatingCards: [
          { title: "Monthly Savings", value: "+$1,240", icon: "TrendingUp" },
          { title: "Budget Health", value: "84%", icon: "ShieldCheck" },
        ],
      },
      problem: {
        statement: "Manual expense tracking is tedious, error-prone, and lacks real-time actionable insights for individuals attempting to achieve financial discipline.",
        targetAudience: "Students, freelancers, and professionals seeking effortless personal finance tracking.",
        points: [
          "Time-consuming manual entry of monthly receipts and credit card statements.",
          "Absence of proactive overspending alerts before category limits are breached.",
          "Fragmented visualization across multiple financial accounts."
        ],
      },
      techStack: [
        {
          category: "Frontend Layer",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
          details: "Single page app built with dark mode UI tokens, interactive cash flow charts, and instant filter controls.",
        },
        {
          category: "Backend Microservices",
          technologies: ["Node.js", "Express", "JWT", "REST APIs"],
          details: "Stateless REST API handling transaction ingestion, token encryption, and session auth.",
        },
        {
          category: "Database & Caching",
          technologies: ["MongoDB", "Mongoose", "Redis"],
          details: "Document schema indexing with Redis caching layer reducing database queries by 60%.",
        },
        {
          category: "AI & Categorization",
          technologies: ["Python", "TensorFlow", "Scikit-Learn"],
          details: "Machine learning classifier for automated merchant tagging and receipt text parsing.",
        },
      ],
      architecture: {
        summary: "Event-driven architecture separating authentication, transaction ingestion, and machine learning categorization microservices.",
        highlights: [
          "Stateless Express gateway routing encrypted API payloads.",
          "Asynchronous worker queues for ML model inference.",
          "Redis caching layer providing sub-50ms API response times."
        ],
      },
      features: [
        {
          title: "Automated Expense Categorization",
          description: "Smart ML models parse raw merchant strings and auto-assign spending categories.",
        },
        {
          title: "Real-Time Financial Dashboard",
          description: "Interactive visual breakdown of monthly spending limits, cash flow trends, and budget health.",
        },
        {
          title: "Proactive Overspend Alerts",
          description: "Automated warning triggers when approaching 80% and 100% of custom budget thresholds.",
        },
        {
          title: "PDF & CSV Summary Exports",
          description: "One-click export of monthly financial reports for tax preparation and auditing.",
        },
      ],
      screenshots: [
        {
          title: "Interactive Analytics Dashboard",
          caption: "Main overview showing monthly cash flow and expense distribution.",
          image: "/projects/budget-eagle-screen1.jpg",
        },
        {
          title: "AI Receipt Scanner",
          caption: "Receipt upload interface with automated key-value extraction.",
          image: "/projects/budget-eagle-screen2.jpg",
        },
      ],
      challenges: [
        {
          challenge: "Handling noisy and non-standardized merchant names from bank CSV exports.",
          solution: "Trained a Fuzzy String Matching & Naive Bayes classification model in Python achieving 94% categorization precision.",
        },
        {
          challenge: "Maintaining smooth 60fps chart rendering during fast date range filtering.",
          solution: "Implemented React memoization, memoized selectors, and debounced window event listeners.",
        },
      ],
      futureScope: [
        "Native Mobile application built with React Native.",
        "Multi-currency auto-conversion using live exchange rate APIs.",
        "AI Conversational Financial Coach powered by LLM agents."
      ],
    },
  },
  {
    id: "proj-streamify",
    title: "Streamify",
    tag: "Full Stack Streaming",
    description: "Full-stack media streaming platform with secure JWT auth, adaptive video playback, and responsive UI.",
    techBadges: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/streamify.png",
    githubUrl: "https://github.com/devlopingandroid/Streamiify",
    liveUrl: "https://streamiify-psi.vercel.app/landing",
    featured: true,
  },
  {
    id: "proj-skillforge",
    title: "SkillForge",
    tag: "AI Career Prep",
    description: "AI career prep platform analyzing resumes, identifying skill gaps, and generating targeted DSA drills.",
    techBadges: ["Next.js", "TypeScript", "Tailwind", "Supabase", "AI Pipeline"],
    image: "/projects/skillforge.png",
    githubUrl: "https://github.com/devlopingandroid/SkillForge-AI",
    liveUrl: "https://drive.google.com/file/d/16XBSGHRMePketYUAwlzTM_qGO98CUzCW/view?usp=drive_link",
    featured: true,
  },
]);

export const certificatesData: Certificate[] = fixAssets([
  {
    id: "cert-infosys",
    title: "Infosys Springboard SDE Internship",
    issuer: "Infosys Springboard",
    logo: "/logos/infosys.jpg",
    year: "2026",
    category: "Internships",
    image: "/certificates/1-page-00001.jpg",
    credentialUrl: "/certificates/1-page-00001.jpg",
  },
  {
    id: "cert-drdo",
    title: "DRDO SSPL Training Certificate",
    issuer: "DRDO SSPL (Min. of Defence)",
    logo: "/logos/drdo.png",
    year: "2026",
    category: "Internships",
    image: "/certificates/drdo-certificate.png",
    credentialUrl: "/certificates/drdo-certificate.png",
  },
  {
    id: "cert-iiitd",
    title: "IIIT Delhi Summer Research Internship",
    issuer: "IIIT Delhi",
    logo: "/logos/iiitd.jpg",
    year: "2025",
    category: "Internships",
    image: "/certificates/Certificate_Yash Goel_mHelath 2025-page-00001.jpg",
    credentialUrl: "/certificates/Certificate_Yash Goel_mHelath 2025-page-00001.jpg",
  },
  {
    id: "cert-google-cloud",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    logo: "/logos/google.png",
    year: "2024",
    category: "Courses",
    image: "/certificates/google-cloud.jpg",
    credentialUrl: "https://credential.example.com",
  },
  {
    id: "cert-hackathon-1st",
    title: "Global AI Hackathon Winner",
    issuer: "Major League Hacking",
    logo: "/logos/mlh.png",
    year: "2023",
    category: "Hackathons",
    image: "/certificates/hackathon-winner.jpg",
    credentialUrl: "https://credential.example.com",
  },
  {
    id: "cert-meta-react",
    title: "Meta Front-End Developer Specialization",
    issuer: "Meta",
    logo: "/logos/meta.png",
    year: "2023",
    category: "Courses",
    image: "/certificates/meta-react.jpg",
    credentialUrl: "https://credential.example.com",
  },
  {
    id: "cert-ai-workshop",
    title: "Generative AI & LLM Architecture",
    issuer: "NVIDIA Deep Learning Institute",
    logo: "/logos/nvidia.png",
    year: "2024",
    category: "Workshops",
    image: "/certificates/nvidia-ai.jpg",
    credentialUrl: "https://credential.example.com",
  },
  {
    id: "cert-dsa-leetcode",
    title: "Advanced Data Structures & Algorithms",
    issuer: "LeetCode & Codeforces",
    logo: "/logos/leetcode.png",
    year: "2023",
    category: "Others",
    image: "/certificates/leetcode-dsa.jpg",
    credentialUrl: "https://credential.example.com",
  },
  {
    id: "cert-patent-4",
    title: "Technical Patent Grant #4 (Govt. of India)",
    issuer: "Intellectual Property India",
    year: "2025",
    category: "Others",
    image: "/certificates/patent4.jpg",
    credentialUrl: "/certificates/patent4.jpg",
  },
]);

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  tag: string;
  isHero?: boolean;
  description: string;
}

export const achievementsData: Achievement[] = fixAssets([
  {
    id: "ach-gemini",
    title: "Google Gemini Student Ambassador 2026",
    subtitle: "Google Student Ambassador Program",
    year: "2026",
    image: "/achievements/achieve-10.jpeg",
    tag: "Google Ambassador",
    isHero: true,
    description: "Selected as Google Gemini Campus Ambassador 2026; leading generative AI workshops and student developer initiatives.",
  },
  {
    id: "ach-qualcomm-win",
    title: "Qualcomm Multiverse Hackathon Winner",
    subtitle: "Snapdragon AI & Hardware Bot",
    year: "2026",
    image: "/achievements/achieve-5.jpeg",
    tag: "Hackathon Winner",
    isHero: true,
    description: "Won Qualcomm Multiverse Hackathon by building an autonomous IoT bot powered by Snapdragon Edge AI.",
  },
  {
    id: "ach-iitd-top100",
    title: "IIT Delhi Youth Ideathon Top 100",
    subtitle: "IIT Delhi Entrepreneurship Cell",
    year: "2025",
    image: "/achievements/achieve-3.jpg",
    tag: "Top 100 India",
    isHero: true,
    description: "Top 100 National Finalist & Medalist at IIT Delhi College Youth Ideathon among thousands of participants.",
  },
  {
    id: "ach-qualcomm-hq",
    title: "Qualcomm HQ Presentation",
    subtitle: "Qualcomm Bangalore HQ",
    year: "2026",
    image: "/achievements/achieve-7.jpeg",
    tag: "National Winner",
    description: "Demonstrated real-time edge AI processing to engineering leadership at Qualcomm HQ Bangalore.",
  },
  {
    id: "ach-patents",
    title: "4 Published Technical Patents",
    subtitle: "Intellectual Property India",
    year: "2024 - 2025",
    image: "/certificates/patent4.jpg",
    tag: "Innovation & IP",
    description: "Published 4 technical patents in IoT telemetry, sensor hardware, and embedded AI (Govt. of India).",
  },
  {
    id: "ach-sih-pitch",
    title: "Civic Complaint Management Architecture",
    subtitle: "Smart India Hackathon Presentation",
    year: "2025",
    image: "/achievements/achieve-13.jpeg",
    tag: "System Architecture",
    description: "Pitched full-stack Civic Complaint Management System architecture and automated workflows to SIH jury.",
  },
  {
    id: "ach-st-micro",
    title: "STMicroelectronics Industrial Visit",
    subtitle: "Semiconductor Fabrication Facility",
    year: "2025",
    image: "/achievements/achieve-8.jpeg",
    tag: "Industrial Visit",
    description: "Explored semiconductor fabrication, hardware architecture, and embedded silicon at STMicroelectronics facility.",
  },
  {
    id: "ach-iitd-campus",
    title: "IIT Delhi Campus Honor",
    subtitle: "IIT Delhi Main Campus",
    year: "2025",
    image: "/achievements/achieve-4.jpg",
    tag: "National Honor",
    description: "Honored at IIT Delhi main campus for national top 100 startup innovation.",
  },
  {
    id: "ach-sbi-ideathon",
    title: "SBI Youth Ideathon Showcase",
    subtitle: "Nayi Soch Naya Bharat",
    year: "2025",
    image: "/achievements/achieve-2.jpg",
    tag: "Startup & Ideathon",
    description: "Presented health-tech startup ideation at SBI College Youth Ideathon national showcase.",
  },
  {
    id: "ach-qualcomm-delegation",
    title: "Snapdragon Developer Delegation",
    subtitle: "Qualcomm Developer Conference",
    year: "2026",
    image: "/achievements/achieve-6.jpeg",
    tag: "Tech Conference",
    description: "Selected among top developer teams nationwide building generative AI & IoT edge computing prototypes.",
  },
  {
    id: "ach-pco-sense",
    title: "PCO Sense Wearable Hardware",
    subtitle: "Health Tech & Embedded Systems",
    year: "2025",
    image: "/achievements/achieve-14.jpeg",
    tag: "Medical AI Hardware",
    description: "Built smart health monitoring wearable band and environmental telemetry hardware.",
  },
  {
    id: "ach-sih-2nd",
    title: "Smart India Hackathon (2nd Rank)",
    subtitle: "VIPS SIH Internal Hackathon",
    year: "2025",
    image: "/achievements/achieve-9.jpeg",
    tag: "SIH 2nd Rank",
    description: "Secured 2nd Rank at Smart India Hackathon Internal Round for Civic Complaint Management Platform.",
  },
  {
    id: "ach-conference-pres",
    title: "International Conference Presentation",
    subtitle: "ICASW International Conference",
    year: "2025",
    image: "/achievements/achieve-1.jpg",
    tag: "Research Paper",
    description: "Presented sustainable computing & AI research paper at ICASW International Conference (IIPA & VIPS).",
  },
  {
    id: "ach-paper-cert",
    title: "Conference Research Certificate",
    subtitle: "IIPA & VIPS International Conference",
    year: "2025",
    image: "/achievements/achieve-15.jpeg",
    tag: "Conference Certificate",
    description: "Awarded Certificate of Presentation for Climate Action, AI, and Sustainable Systems paper at ICASW.",
  },
]);

export const hackathonsData: HackathonItem[] = fixAssets([
  {
    id: "hack-qualcomm",
    name: "Qualcomm Hackathon",
    photo: "/hackathons/qualcomm.jpg",
    result: "Winner",
    year: "2024",
    projectTitle: "AI Edge Diagnostic Bot",
    description: "Built on-device diagnostic agent with real-time audio/video anomaly detection on Snapdragon NPU.",
  },
  {
    id: "hack-sih",
    name: "Smart India Hackathon",
    photo: "/hackathons/sih.jpg",
    result: "Finalist",
    year: "2023",
    projectTitle: "Smart Agriculture Telemetry",
    description: "Developed IoT telemetry gateway with cloud analytics for real-time soil health monitoring.",
  },
  {
    id: "hack-iitd",
    name: "IIT Delhi Hackathon",
    photo: "/hackathons/iitd.jpg",
    result: "Top 100",
    year: "2024",
    projectTitle: "Autonomous Drone Pathfinding",
    description: "Implemented real-time spatial mapping and collision avoidance algorithms for autonomous drones.",
  },
  {
    id: "hack-others",
    name: "National Hackathons",
    photo: "/hackathons/others.jpg",
    result: "Multiple",
    year: "2022-24",
    projectTitle: "Various Projects",
    description: "Participated in 20+ national hackathons solving real-world challenges in AI, IoT, and web systems.",
  },
]);

export const galleryData: GalleryItem[] = fixAssets([
  {
    id: "gal-pub-patent1",
    title: "Patent Grant #1 (Govt. of India)",
    category: "Publications",
    image: "/certificates/patentcertificate-page-00001.jpg",
    caption: "Official Published Patent Certificate from the Indian Patent Office (Govt. of India).",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-pub-patent2",
    title: "Patent Grant #2 (Govt. of India)",
    category: "Publications",
    image: "/certificates/patent2-page-00001.jpg",
    caption: "Official Published Patent Certificate for IoT & Smart Embedded Systems.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-pub-patent3",
    title: "Patent Grant #3 (Govt. of India)",
    category: "Publications",
    image: "/certificates/patent3-page-00003.jpg",
    caption: "Official Published Patent Certificate for AI Computer Vision & Cryptographic Verification.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-pub-patent4",
    title: "Patent Grant #4 (Govt. of India)",
    category: "Publications",
    image: "/certificates/patent4.jpg",
    caption: "Official Published Patent Certificate (4th Patent Publication) from the Indian Patent Office (Govt. of India).",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-intern-drdo",
    title: "DRDO SSPL Software Training Certificate",
    category: "Internship",
    image: "/certificates/drdo-certificate.png",
    caption: "Official Training Certificate from Solid State Physics Laboratory (SSPL), DRDO (Min. of Defence). Designed & Developed Financial Management Software.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-intern-infosys",
    title: "Infosys Springboard SDE Internship",
    category: "Internship",
    image: "/certificates/1-page-00001.jpg",
    caption: "Full Stack Software Development Internship Certificate at Infosys Springboard - Civic Grievance Management System.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-intern-iiitd-mhealth",
    title: "IIIT Delhi Research Internship (mHealth)",
    category: "Internship",
    image: "/certificates/Certificate_Yash Goel_mHelath 2025-page-00001.jpg",
    caption: "Summer Research Internship Certificate at IIIT Delhi - Mobile Health (mHealth) & Sensor Signal Analytics.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-sih",
    title: "Smart India Hackathon (SIH)",
    category: "Certificates",
    image: "/certificates/sih.jpg",
    caption: "Smart India Hackathon National Level Finalist & Recognition.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-cert-hack2skill",
    title: "Hack2Skill Hackathon",
    category: "Certificates",
    image: "/certificates/Hack2skill-Certificate.png",
    caption: "Hack2Skill National Level Hackathon Recognition Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-codeforbharat",
    title: "Code For Bharat Hackathon",
    category: "Certificates",
    image: "/certificates/Codeforbharat-page-00001.jpg",
    caption: "Code For Bharat National Development Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-hackground",
    title: "Hackground 2025 Innovation",
    category: "Certificates",
    image: "/certificates/hackground.png",
    caption: "Hackground 2025 Technical Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-codeslayer",
    title: "CodeSlayer Hackathon",
    category: "Certificates",
    image: "/certificates/CodeSlayer-page-00001.jpg",
    caption: "CodeSlayer Competitive Coding Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-aurathon",
    title: "Aurathon 24-Hour Hackathon",
    category: "Certificates",
    image: "/certificates/aurathon-page-00001.jpg",
    caption: "Aurathon AI & Web3 Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-codex",
    title: "CodeX Developer Sprint",
    category: "Certificates",
    image: "/certificates/codex-page-00001.jpg",
    caption: "CodeX Developer Sprint & Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-conquest",
    title: "Conquest Product Hackathon",
    category: "Certificates",
    image: "/certificates/conquest-page-00001.jpg",
    caption: "Conquest Tech & Product Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-ctrlspace",
    title: "Ctrl+Space 36-Hr Hackathon",
    category: "Certificates",
    image: "/certificates/Ctrl+SPace-page-00001.jpg",
    caption: "Ctrl+Space 36-Hour Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-hackwave",
    title: "HackWave Coding Challenge",
    category: "Certificates",
    image: "/certificates/HackWave-page-00001.jpg",
    caption: "HackWave Innovation & Coding Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-hackhatch",
    title: "HackHatch Developer Sprint",
    category: "Certificates",
    image: "/certificates/HackHatch-page-00001.jpg",
    caption: "HackHatch Developer Sprint Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-iiitd",
    title: "IIIT Delhi Technical Challenge",
    category: "Certificates",
    image: "/certificates/IIITD-page-00001.jpg",
    caption: "IIIT Delhi Technical Ideathon & Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-nitdelhi",
    title: "NIT Delhi Hackathon",
    category: "Certificates",
    image: "/certificates/NIT_DElhi-page-00001.jpg",
    caption: "NIT Delhi National Technical Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-gniot",
    title: "GNIOT Tech Hackathon",
    category: "Certificates",
    image: "/certificates/gniot-page-00001.jpg",
    caption: "GNIOT Technical Hackathon Achievement Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-dtu",
    title: "DTU Enactus Social Innovation",
    category: "Certificates",
    image: "/certificates/dtu.enactus.jpg",
    caption: "Delhi Technological University Enactus Innovation Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-herocampus",
    title: "Hero Campus Challenge",
    category: "Certificates",
    image: "/certificates/heroCampus-page-00001.jpg",
    caption: "Hero Campus Challenge Technical Solutions Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-nationbuild",
    title: "Nation Building Hackathon",
    category: "Certificates",
    image: "/certificates/nationbuild-page-00001.jpg",
    caption: "National Development & Smart Governance Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-techfrontier",
    title: "Tech Frontier Challenge",
    category: "Certificates",
    image: "/certificates/techFrontier-page-00001.jpg",
    caption: "Tech Frontier Technical Competition Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-soch",
    title: "SOCH Innovation Ideathon",
    category: "Certificates",
    image: "/certificates/soch-page-00001.jpg",
    caption: "SOCH Innovation & Entrepreneurship Ideathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-webdev",
    title: "WebDev Hackathon Showcase",
    category: "Certificates",
    image: "/certificates/WEbDev-page-00001.jpg",
    caption: "Full-Stack Web Development Hackathon Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-matlab",
    title: "MATLAB Computational Challenge",
    category: "Certificates",
    image: "/certificates/matlab-page-00001.jpg",
    caption: "MathWorks MATLAB & Computational Analytics Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-encryption",
    title: "Cryptography & Security Systems",
    category: "Certificates",
    image: "/certificates/encryption_certificate-page-00001.jpg",
    caption: "Applied Cryptography & Security Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-1",
    title: "National Hackathon Merit",
    category: "Certificates",
    image: "/certificates/1-page-00001.jpg",
    caption: "National Level Hackathon Achievement Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-drdo-sspl",
    title: "DRDO SSPL Training Certificate",
    category: "Certificates",
    image: "/certificates/drdo-certificate.png",
    caption: "Solid State Physics Laboratory (SSPL), DRDO (Min. of Defence) Training Certificate in Financial Management Software Development.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-wa07",
    title: "Hackathon Stage Presentation",
    category: "Certificates",
    image: "/certificates/IMG-20250511-WA0007.jpg",
    caption: "Stage Presentation & Hackathon Award Recognition.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-wa17",
    title: "Team Award Felicitation",
    category: "Certificates",
    image: "/certificates/IMG-20250511-WA0017.jpg",
    caption: "Hackathon Team Felicitation on Stage.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-cert-wa21",
    title: "Hackathon Podium Award Trophy",
    category: "Certificates",
    image: "/certificates/IMG-20250511-WA0021.jpg",
    caption: "Receiving Hackathon Award Trophy & Certificate.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-1",
    title: "SBI Youth Ideathon - IIT Delhi",
    category: "Events",
    image: "/events/event-1.jpg",
    caption: "Representing our startup innovation at the SBI College Youth Ideathon Finals held at IIT Delhi.",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-event-2",
    title: "Top 100 Innovator Medal - IIT Delhi",
    category: "Events",
    image: "/events/event-2.jpg",
    caption: "Awarded Top 100 Innovator Medal at the Indian Institute of Technology (IIT Delhi) Youth Ideathon.",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-event-3",
    title: "DTU Enactus Social Innovation Event",
    category: "Events",
    image: "/events/event-3.jpeg",
    caption: "Attending the social innovation and entrepreneurship conclave organized by Enactus DTU at Delhi Technological University.",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-event-4",
    title: "Snapdragon Multiverse Hackathon Cohort",
    category: "Events",
    image: "/events/event-4.jpeg",
    caption: "Full participant cohort and finalists gathered at Qualcomm Snapdragon Multiverse Hackathon.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-event-5",
    title: "Qualcomm Office Felicitation Ceremony",
    category: "Events",
    image: "/events/event-5.jpeg",
    caption: "Felicitated by Qualcomm leadership at the Snapdragon Multiverse Hackathon prize distribution.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-event-6",
    title: "Industrial Visit to STMicroelectronics",
    category: "Events",
    image: "/events/event-6.jpeg",
    caption: "Exploring semiconductor technologies, embedded systems, and enterprise silicon innovations during industrial visit to STMicroelectronics.",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-event-7",
    title: "Smart India Hackathon (SIH) Internal Winner",
    category: "Events",
    image: "/events/event-7.jpeg",
    caption: "Winners at the internal screening hackathon round for Smart India Hackathon (SIH).",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-8",
    title: "On-Site Product Iteration",
    category: "Events",
    image: "/events/event-8.jpeg",
    caption: "Iterating on code and system architecture during live hackathon rounds.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-9",
    title: "IIIT Delhi Research Internship - Day 1",
    category: "Events",
    image: "/events/event-9.jpeg",
    caption: "First day joining the Summer Research Internship at IIIT Delhi working on mHealth & sensor analytics.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-event-10",
    title: "Collaborative Engineering Session",
    category: "Events",
    image: "/events/event-10.jpeg",
    caption: "Pair-programming and debugging prototypes alongside talented developers.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-11",
    title: "Live Prototype Demo & Pitch",
    category: "Events",
    image: "/events/event-11.jpeg",
    caption: "Pitching our hardware-software solution and answering technical inquiries from the jury.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-event-12",
    title: "Top 100 CYI Presentation Day",
    category: "Events",
    image: "/events/event-12.jpeg",
    caption: "Pitching and presenting our startup project to jury panels on College Youth Ideathon (CYI) Top 100 Presentation Day.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-13",
    title: "Conference Research Paper Presentation",
    category: "Events",
    image: "/events/event-13.jpeg",
    caption: "Presenting peer-reviewed research findings and technical paper before scholars at the academic conference.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-14",
    title: "CYI Top 100 Award Ceremony",
    category: "Events",
    image: "/events/event-14.jpeg",
    caption: "Celebrating and receiving accolades at the official College Youth Ideathon (CYI) Top 100 award felicitation ceremony.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-event-15",
    title: "Defense NFC Smart Card & IoT System",
    category: "Events",
    image: "/events/event-15.jpeg",
    caption: "Live testing of NFC hardware reader (RC522) with mobile app for soldier medical identity & balance sync.",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-event-16",
    title: "Developers Meetup - Thoughtworks Gurugram",
    category: "Events",
    image: "/events/event-16.jpeg",
    caption: "Connecting and collaborating with senior engineers and tech leaders at Thoughtworks Gurugram developers meetup.",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-event-17",
    title: "STMicroelectronics (ST in India)",
    category: "Events",
    image: "/events/event-17.jpeg",
    caption: "Innovation delegates at the STMicroelectronics India campus.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "gal-event-18",
    title: "GYNOVA (PCO Sense) Exhibition Booth",
    category: "Events",
    image: "/events/event-18.jpeg",
    caption: "Presenting the PCO Sense smart wearable health band booth at the College Youth Ideathon.",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-event-19",
    title: "First Hackathon - Amity University Noida",
    category: "Events",
    image: "/events/event-19.jpeg",
    caption: "Participating in my very first technical hackathon with team at Amity University Noida campus.",
    spanClass: "md:col-span-2 md:row-span-1",
  },
]);

export const blogsData: BlogPost[] = fixAssets([
  {
    id: "blog-budget-eagle",
    title: "How I Built Budget Eagle: An AI Finance Platform",
    excerpt: "Architecting a full-stack financial application with automated ML expense categorization, Express REST gateways, and Redis caching.",
    coverImage: "/blogs/budget-eagle-cover.jpg",
    date: "August 2024",
    readTime: "6 min read",
    slug: "how-i-built-budget-eagle",
    url: "https://budgeteagle.in/",
    tags: ["Full Stack", "AI", "Node.js"],
  },
  {
    id: "blog-mern-practices",
    title: "MERN Stack Best Practices for Scalable Web Apps",
    excerpt: "Proven architecture patterns for organizing Express backend routes, MongoDB Mongoose models, and React state management cleanly.",
    coverImage: "/blogs/mern-practices.jpg",
    date: "July 2024",
    readTime: "8 min read",
    slug: "mern-stack-best-practices",
    url: "https://dev.to",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    id: "blog-derq-stack",
    title: "DERQ Stack: Building Next-Gen Distributed Architectures",
    excerpt: "Exploring modern full-stack web foundations blending Docker, Express, React, and GraphQL for enterprise software scalability.",
    coverImage: "/blogs/derq-stack.jpg",
    date: "June 2024",
    readTime: "7 min read",
    slug: "derq-stack-best-foundation",
    url: "https://hashnode.com",
    tags: ["Architecture", "Docker", "React"],
  },
  {
    id: "blog-dsa-roadmap",
    title: "DSA Roadmap for Cracking Top Engineering Internships",
    excerpt: "A comprehensive step-by-step preparation guide covering essential patterns in graphs, dynamic programming, and binary search trees.",
    coverImage: "/blogs/dsa-roadmap.jpg",
    date: "May 2024",
    readTime: "10 min read",
    slug: "dsa-roadmap-for-internships",
    url: "https://medium.com",
    tags: ["Algorithms", "Career", "DSA"],
  },
]);
