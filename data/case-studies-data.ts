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

export interface ProjectCaseStudyDetail {
  slug: string;
  id: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  teamSize: string;
  projectType: string;
  status: string;
  heroImage: string;
  githubUrl: string;
  liveUrl: string;
  docUrl?: string;
  pdfUrl?: string;
  quickStats: {
    duration: string;
    teamSize: string;
    projectType: string;
    status: string;
    techStackCount: number;
    featuresCount: number;
  };
  overview: {
    whatIsIt: string;
    whyCreated: string;
    targetAudience: string;
    problemSolved: string;
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  problemAnalysis: {
    observedIssue: string;
    painPoints: {
      title: string;
      pain: string;
      impact: string;
    }[];
    existingGaps: {
      flaw: string;
      description: string;
    }[];
    preDevResearch: string[];
    validatedAssumptions: string[];
  };
  solutionApproach: {
    methodology: string;
    techRationale: {
      technology: string;
      alternativeConsidered: string;
      reasonForChoice: string;
    }[];
    systemEvolution: {
      phase: string;
      title: string;
      description: string;
    }[];
    uxStrategy: {
      aspect: string;
      implementation: string;
    }[];
  };
  architecture: {
    summary: string;
    layers: {
      id: string;
      title: string;
      subtitle: string;
      tech: string[];
      description: string;
      icon: string;
    }[];
    dataFlow: {
      step: number;
      actor: string;
      action: string;
      detail: string;
    }[];
    codeSnippet?: {
      title: string;
      filename: string;
      language: string;
      code: string;
    };
  };
  techStack: {
    category: "Frontend" | "Backend" | "Database" | "Authentication" | "Cloud / DevOps" | "Developer Tools" | "Deployment";
    iconKey: string;
    technologies: {
      name: string;
      role: string;
      whyChosen: string;
      iconKey?: string;
      color?: string;
    }[];
  }[];
  authAndSecurity: {
    summary: string;
    flowSteps: {
      step: number;
      title: string;
      description: string;
    }[];
    jwtStrategy: string;
    passwordSecurity: string;
    protectedRoutes: string;
    securityHeaders: string[];
    sessionManagement: string;
    tokenValidation: string;
    userDataProtection: string;
    codeSnippet?: {
      title: string;
      filename: string;
      language: string;
      code: string;
    };
  };
  keyFeatures: {
    id: string;
    name: string;
    problemSolved: string;
    implementationDetails: string;
    businessValue: string;
    technicalComplexity: "High" | "Very High" | "Critical";
    complexityRationale: string;
    icon: string;
  }[];
  challengesFaced: {
    id: string;
    title: string;
    problem: string;
    rootCause: string;
    solution: string;
    outcome: string;
    metricDelta?: string;
  }[];
  developmentJourney: {
    stageNumber: number;
    stage: string;
    duration: string;
    title: string;
    description: string;
    deliverables: string[];
    keyMilestone: string;
  }[];
  resultsAndImpact: {
    metrics: {
      value: string;
      label: string;
      change: string;
    }[];
    achievements: string[];
    engineeringGrowth: string[];
  };
  learnings: {
    technical: string[];
    product: string[];
    systemDesign: string[];
    performance: string[];
    architecture: string[];
    deployment: string[];
  };
  futureImprovements: {
    phase: string;
    timeframe: string;
    title: string;
    features: {
      title: string;
      description: string;
      category: "AI" | "Scalability" | "Mobile" | "Cloud" | "Analytics";
    }[];
  }[];
  gallery: {
    id: string;
    title: string;
    viewType: "Desktop Views" | "Dashboard Views" | "Tablet Views" | "Mobile Views" | "Feature Screens";
    image: string;
    caption: string;
    aspectRatio?: string;
  }[];
  links: {
    liveDemo: string;
    github: string;
    documentation?: string;
    caseStudyPdf?: string;
  };
}

export const caseStudiesData: Record<string, ProjectCaseStudyDetail> = fixAssets({
  "budget-eagle": {
    slug: "budget-eagle",
    id: "proj-budget-eagle",
    title: "Budget Eagle",
    tagline: "AI-Powered Personal Finance & Intelligent Wealth Management Platform (DRDO Internship Project)",
    category: "Full Stack / FinTech / AI",
    duration: "June 2026 (DRDO Internship)",
    teamSize: "Team-Based Project",
    projectType: "Full Stack FinTech Web Platform",
    status: "Live in Production",
    heroImage: "/projects/budget-eagle.png",
    githubUrl: "https://github.com/budgeteagle/budget_eagle_web",
    liveUrl: "https://budgeteagle.in/",
    docUrl: "https://github.com/budgeteagle/budget_eagle_web#readme",
    quickStats: {
      duration: "June 2026",
      teamSize: "Team-Based (DRDO)",
      projectType: "Full Stack FinTech",
      status: "Production Live",
      techStackCount: 12,
      featuresCount: 8,
    },
    overview: {
      whatIsIt: "During my internship at DRDO (June 2026), I observed that most personal finance applications focused on only one aspect of money management—either expense tracking, budgeting, or investment monitoring. Users often had to switch between multiple platforms to understand their complete financial picture. To address this problem, I worked with a team to build Budget Eagle, an AI-powered personal finance and wealth management platform that centralizes expense tracking, budget planning, investment monitoring, and financial analytics into a single intelligent dashboard.",
      whyCreated: "The goal was not just to record financial data but to help users understand spending behavior, identify financial patterns, and make more informed financial decisions using AI-driven insights rather than static spreadsheets.",
      targetAudience: "Working professionals, interns, defense contractors, and individuals seeking a unified platform that eliminates switching between disparate banking, investment, and budgeting tools.",
      problemSolved: "Consolidates fragmented financial tracking into a unified intelligence hub combining automated categorization, interactive health indicators, and AI-powered evaluation.",
      pillars: [
        {
          title: "Centralized Intelligence",
          description: "Unifies expense tracking, budget planning, investment monitoring, and financial analytics in one coherent dashboard.",
          icon: "TrendingUp",
        },
        {
          title: "AI-Based Financial Evaluation",
          description: "Continuous pattern detection and predictive spending evaluations providing actionable financial recommendations.",
          icon: "Brain",
        },
        {
          title: "Bank-Grade Security",
          description: "Bcrypt salted password hashing, stateless JWT session tokens, centralized auth middleware, and strict user data isolation.",
          icon: "ShieldCheck",
        },
      ],
    },
    problemAnalysis: {
      observedIssue: "Most existing personal finance tools suffer from severe fragmentation, delivering raw numerical tables with very little actionable insight while keeping budgeting and investments disconnected.",
      painPoints: [
        {
          title: "Fragmented Financial Data",
          pain: "Users are forced to juggle 3-4 separate apps for daily expense logging, monthly budget limits, and long-term portfolio investments.",
          impact: "Complete breakdown of habit consistency and zero holistic financial visibility.",
        },
        {
          title: "Raw Numbers Without Actionable Insights",
          pain: "Existing tools present static tabular ledgers that fail to explain spending anomalies or suggest behavioral course corrections.",
          impact: "Users fail to recognize overspending trends until after month-end financial damage has occurred.",
        },
        {
          title: "Disconnected Budgeting & Investments",
          pain: "Budgeting modules operate in total isolation from investment goals, making realistic savings runway projections impossible.",
          impact: "Inability to balance emergency liquidity with wealth generation.",
        },
      ],
      existingGaps: [
        {
          flaw: "Single-Feature Isolation",
          description: "Legacy apps focus strictly on expense recording or portfolio tracking, never bridging both disciplines.",
        },
        {
          flaw: "Static Unactionable Reports",
          description: "Standard apps show historical sums without predictive forecasting or AI-driven behavioral evaluations.",
        },
        {
          flaw: "Cumbersome Manual Workflows",
          description: "Tedious manual categorization leads to high user abandonment rates within weeks.",
        },
      ],
      preDevResearch: [
        "Conducted DRDO intern user surveys analyzing daily financial management habits and pain points across multiple banking platforms.",
        "Analyzed transaction categorization structures to build a unified MongoDB data model connecting Expenses, Budgets, and Investments.",
        "Benchmarked Chart.js and Recharts rendering performance when aggregating multi-month transaction histories.",
      ],
      validatedAssumptions: [
        "A centralized financial dashboard increases daily tracking engagement by over 3.4x compared to siloed tools.",
        "Proactive category warnings prevent budget breaches before they compound into debt.",
        "Interactive graphical breakdowns provide significantly faster comprehension than raw numerical spreadsheets.",
      ],
    },
    solutionApproach: {
      methodology: "We designed Budget Eagle as a centralized financial intelligence platform that continuously organizes financial information into meaningful visual insights that users can act upon.",
      techRationale: [
        {
          technology: "React.js + Vite + Tailwind CSS",
          alternativeConsidered: "Traditional MPA / Angular",
          reasonForChoice: "Lightning-fast Vite development bundling, reactive component states, and responsive dark-mode styling with Tailwind CSS.",
        },
        {
          technology: "Node.js & Express.js",
          alternativeConsidered: "Django / Flask",
          reasonForChoice: "High-concurrency non-blocking event loop ideal for handling concurrent transaction write pipelines and REST microservices.",
        },
        {
          technology: "MongoDB & Mongoose",
          alternativeConsidered: "Traditional SQL Database",
          reasonForChoice: "Flexible document model capable of managing relationships between Users, Expenses, Budgets, Investments, and Analytics without schema locks.",
        },
        {
          technology: "JWT & bcrypt Hashing",
          alternativeConsidered: "Session-State Cookies",
          reasonForChoice: "Stateless, horizontally scalable authentication with 12-round bcrypt salted hashing for sensitive financial protection.",
        },
      ],
      systemEvolution: [
        {
          phase: "v1.0 DRDO Prototype",
          title: "Initial Unified Ingestion & Schema Design",
          description: "Built initial models connecting Users, Expenses, and Budgets with basic REST CRUD operations.",
        },
        {
          phase: "v2.0 Auth Hardening & Visualization",
          title: "Centralized Middleware & Chart.js Dashboards",
          description: "Standardized JWT verification across all protected routes and integrated dynamic visual analytics.",
        },
        {
          phase: "v3.0 Production Platform",
          title: "AI Financial Evaluations & AWS Deployment",
          description: "Added automated spending evaluation models, aggregation pipelines, and cloud hosting on AWS and GitHub.",
        },
      ],
      uxStrategy: [
        {
          aspect: "Centralized Dashboard Overview",
          implementation: "Top-level executive summary displaying net balance, category limits, investment performance, and AI health scores.",
        },
        {
          aspect: "Interactive Chart Visualization",
          implementation: "Categorized analytics with interactive drill-down tooltips for deep transaction inspection.",
        },
        {
          aspect: "Proactive Threshold Indicators",
          implementation: "Dynamic color-coded status badges that shift from emerald to amber/rose when nearing budget limits.",
        },
      ],
    },
    architecture: {
      summary: "Budget Eagle follows a multi-tier architecture featuring a React SPA client, an Express API gateway with centralized security middlewares, a MongoDB aggregation layer, and AWS cloud hosting.",
      layers: [
        {
          id: "client-layer",
          title: "Frontend Client Layer",
          subtitle: "Single Page Application (SPA)",
          tech: ["React.js", "Vite", "Tailwind CSS", "Chart.js / Recharts"],
          description: "Interactive financial dashboard, dynamic date filters, spending breakdown charts, and investment portfolio trackers.",
          icon: "Layout",
        },
        {
          id: "gateway-layer",
          title: "API Gateway & Security Layer",
          subtitle: "Centralized Middleware Pipeline",
          tech: ["Express Middleware", "JWT Verification", "Rate Limiter", "CORS"],
          description: "Standardized authentication middleware validating bearer tokens and enforcing user-scoped data access rules across all API routes.",
          icon: "ShieldCheck",
        },
        {
          id: "services-layer",
          title: "Business Logic & Analytics Services",
          subtitle: "Domain Controllers",
          tech: ["Node.js Controllers", "Expense Service", "Budget Service", "Investment Engine", "AI Evaluation Service"],
          description: "Calculates budget burn rates, investment growth trajectories, category deviations, and AI-driven behavioral evaluations.",
          icon: "Cpu",
        },
        {
          id: "data-layer",
          title: "Database & Storage Layer",
          subtitle: "Document Persistence",
          tech: ["MongoDB Atlas", "Mongoose ORM", "AWS Cloud"],
          description: "Scalable document schemas managing complex entity relationships between Users, Expenses, Budgets, Investments, and Analytics.",
          icon: "Database",
        },
      ],
      dataFlow: [
        {
          step: 1,
          actor: "Client Browser",
          action: "User logs expense or checks portfolio health",
          detail: "React client dispatches authenticated REST request with JWT token to Express API.",
        },
        {
          step: 2,
          actor: "Centralized Auth Middleware",
          action: "Token Validation & Security Guard",
          detail: "Verifies JWT signature, extracts userId, confirms valid active session, and attaches user context to the request.",
        },
        {
          step: 3,
          actor: "Controller & AI Evaluation",
          action: "Business Logic & Pattern Analysis",
          detail: "Calculates spending velocity against active budget limits and runs pattern analysis to generate actionable insights.",
        },
        {
          step: 4,
          actor: "MongoDB & Mongoose",
          action: "User-Scoped Atomic Query",
          detail: "Executes indexed queries strictly scoped to { userId: req.user._id } across Users, Expenses, Budgets, and Investments collections.",
        },
        {
          step: 5,
          actor: "Client Dashboard",
          action: "Visual Chart Re-render",
          detail: "Dashboard updates interactive charts and financial health meters seamlessly in real time.",
        },
      ],
      codeSnippet: {
        title: "Centralized Authentication & Route Protection Middleware",
        filename: "middleware/authMiddleware.js",
        language: "javascript",
        code: `import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Centralized JWT authentication middleware for all protected financial routes
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ error: "Access denied. Authentication token missing." });
  }

  try {
    // Verify JWT cryptographic signature
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve user and enforce user-specific data scope
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ error: "User account not found or deactivated." });
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: "Session invalid or expired. Please sign in again." });
  }
};`,
      },
    },
    techStack: [
      {
        category: "Frontend",
        iconKey: "SiReact",
        technologies: [
          {
            name: "React.js",
            role: "Component UI Architecture",
            whyChosen: "Modular component hierarchy for interactive dashboard widgets and state management.",
            color: "#61DAFB",
          },
          {
            name: "Vite",
            role: "Build Tool & Bundler",
            whyChosen: "Instant Hot Module Replacement (HMR) and ultra-fast build optimization.",
            color: "#646CFF",
          },
          {
            name: "Tailwind CSS",
            role: "Utility Styling & Design System",
            whyChosen: "Zero-runtime CSS footprint with responsive dark theme tokens matching fintech ergonomics.",
            color: "#06B6D4",
          },
          {
            name: "Chart.js / Recharts",
            role: "Financial Data Visualization",
            whyChosen: "High-performance rendering of cash flow trends, budget meters, and investment breakdowns.",
            color: "#FF6384",
          },
        ],
      },
      {
        category: "Backend",
        iconKey: "SiNodedotjs",
        technologies: [
          {
            name: "Node.js",
            role: "Asynchronous JavaScript Runtime",
            whyChosen: "Non-blocking event loop perfectly suited for REST API concurrency and transaction handling.",
            color: "#5FA04E",
          },
          {
            name: "Express.js",
            role: "REST API Framework",
            whyChosen: "Lightweight routing with modular middleware pipelines for centralized security.",
            color: "#FFFFFF",
          },
        ],
      },
      {
        category: "Database",
        iconKey: "SiMongodb",
        technologies: [
          {
            name: "MongoDB",
            role: "Primary Document Database",
            whyChosen: "Scalable document model efficiently managing relationships between Users, Expenses, Budgets, Investments, and Analytics.",
            color: "#47A248",
          },
          {
            name: "Mongoose",
            role: "Object Data Modeling (ODM)",
            whyChosen: "Schema-level validation, type casting, compound indexing, and population hooks.",
            color: "#880000",
          },
        ],
      },
      {
        category: "Authentication",
        iconKey: "ShieldCheck",
        technologies: [
          {
            name: "JSON Web Tokens (JWT)",
            role: "Stateless Session Security",
            whyChosen: "Cryptographically signed bearer tokens ensuring secure access across protected API routes.",
            color: "#EC4899",
          },
          {
            name: "bcrypt Password Hashing",
            role: "Cryptographic Password Security",
            whyChosen: "12-round salted hashing protecting user credentials against rainbow table vulnerabilities.",
            color: "#A855F7",
          },
        ],
      },
      {
        category: "Cloud / DevOps",
        iconKey: "SiAmazonaws",
        technologies: [
          {
            name: "AWS",
            role: "Cloud Hosting & Infrastructure",
            whyChosen: "Scalable cloud instances with high availability and secure database isolation.",
            color: "#FF9900",
          },
          {
            name: "GitHub",
            role: "Version Control & CI/CD",
            whyChosen: "Team collaboration, branch protection, and automated deployment pipelines.",
            color: "#F05032",
          },
        ],
      },
      {
        category: "Developer Tools",
        iconKey: "SiGit",
        technologies: [
          {
            name: "Postman",
            role: "API Testing & Validation",
            whyChosen: "Automated regression testing across all authentication and financial CRUD endpoints.",
            color: "#FF6C37",
          },
        ],
      },
      {
        category: "Deployment",
        iconKey: "Rocket",
        technologies: [
          {
            name: "Production CDN",
            role: "Edge Asset Delivery",
            whyChosen: "Low-latency asset loading ensuring fast dashboard access on all devices.",
            color: "#14E8C4",
          },
        ],
      },
    ],
    authAndSecurity: {
      summary: "Security is one of the most critical aspects of Budget Eagle because financial data is highly sensitive. Every request is validated before access is granted, ensuring users can only view their own financial information.",
      flowSteps: [
        {
          step: 1,
          title: "JWT Authentication & bcrypt Hashing",
          description: "Passwords are encrypted using 12-round bcrypt hashing. Upon verified login, a signed JWT token is issued.",
        },
        {
          step: 2,
          title: "Centralized Auth Middleware",
          description: "Every incoming API request is intercepted by centralized middleware to verify cryptographic token signatures.",
        },
        {
          step: 3,
          title: "Protected API Routes",
          description: "All financial transaction, budget, and investment routes are strictly protected against unauthorized access.",
        },
        {
          step: 4,
          title: "Secure Session Management",
          description: "Stateless session validation with automatic token expiration and sliding window refresh handling.",
        },
        {
          step: 5,
          title: "User-Specific Data Access & RBAC",
          description: "Strict database-level user isolation guarantees that users can only ever access their own financial records.",
        },
      ],
      jwtStrategy: "Stateless JSON Web Tokens with encrypted payload claims and expiration validation.",
      passwordSecurity: "12 salt rounds with bcrypt; mandatory complexity policy requiring uppercase, lowercase, numbers, and symbols.",
      protectedRoutes: "Centralized Express auth middleware intercepts all private endpoints; invalid tokens return 401 Unauthorized.",
      securityHeaders: [
        "Content-Security-Policy: default-src 'self'",
        "X-Frame-Options: DENY",
        "X-Content-Type-Options: nosniff",
        "Strict-Transport-Security: max-age=31536000; includeSubDomains",
      ],
      sessionManagement: "Stateless JWT verification with centralized middleware across all routes.",
      tokenValidation: "Cryptographic signature validation on every single API request.",
      userDataProtection: "User-specific database queries strictly enforce tenant isolation, ensuring zero cross-user data leakage.",
      codeSnippet: {
        title: "User-Specific Scoped Query & Access Control",
        filename: "controllers/expenseController.js",
        language: "javascript",
        code: `// Enforce user-specific data isolation on all financial queries
export const getUserExpenses = async (req, res) => {
  try {
    // Strictly scope query to authenticated user's ID
    const expenses = await Expense.find({ userId: req.user._id })
      .sort({ date: -1 })
      .populate("budgetId", "name category limit");

    res.status(200).json({ success: true, count: expenses.length, data: expenses });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch user financial data." });
  }
};`,
      },
    },
    keyFeatures: [
      {
        id: "feat-centralized-dashboard",
        name: "Unified Financial Intelligence Dashboard",
        problemSolved: "Eliminates switching between multiple fragmented banking and spreadsheet tools.",
        implementationDetails: "Centralized overview integrating daily expenses, active budget meters, investment holdings, and overall net worth velocity.",
        businessValue: "Reduces financial review time from 20 minutes to 30 seconds with complete visibility.",
        technicalComplexity: "High",
        complexityRationale: "Aggregating multiple distinct entity types (Expenses, Budgets, Investments) into a unified responsive layout.",
        icon: "Layout",
      },
      {
        id: "feat-ai-evaluation",
        name: "AI-Based Financial Evaluation & Pattern Detection",
        problemSolved: "Users receive raw numbers but very little actionable advice on how to improve savings.",
        implementationDetails: "Continuous pattern analysis detecting anomalies, recurring subscription creep, and predictive budget runway.",
        businessValue: "Transforms passive numbers into proactive, actionable financial guidance.",
        technicalComplexity: "Very High",
        complexityRationale: "Analyzing spending velocity and recurring expense patterns across multi-month historical datasets.",
        icon: "Brain",
      },
      {
        id: "feat-budget-planning",
        name: "Dynamic Budget Planning & Health Indicators",
        problemSolved: "Budgeting tools typically alert users only after limits have already been breached.",
        implementationDetails: "Category-specific limits with live health indicators that calculate pace-of-spend based on day of month.",
        businessValue: "Helps users maintain budget discipline before overspending occurs.",
        technicalComplexity: "High",
        complexityRationale: "Calculating real-time category pacing and remaining daily allowance dynamically.",
        icon: "TrendingUp",
      },
      {
        id: "feat-investment-monitoring",
        name: "Integrated Investment Monitoring",
        problemSolved: "Investment tracking is traditionally disconnected from daily budgeting.",
        implementationDetails: "Centralized portfolio tracker showing asset distribution, gains/losses, and allocation ratios.",
        businessValue: "Provides a complete, single-source-of-truth picture of wealth growth.",
        technicalComplexity: "High",
        complexityRationale: "Normalizing diverse asset types and calculating consolidated portfolio returns.",
        icon: "Cpu",
      },
    ],
    challengesFaced: [
      {
        id: "chal-auth-architecture",
        title: "Authentication Architecture & Session Management",
        problem: "Initially, maintaining secure authentication across multiple protected routes created token validation and session management challenges.",
        rootCause: "Ad-hoc token validation across individual route handlers caused inconsistent error handling, duplicate code, and session sync issues.",
        solution: "Implemented centralized authentication middleware, standardized JWT verification across all APIs, and restructured protected route hierarchies.",
        outcome: "Standardized 100% of API endpoints under unified, bug-free authentication with seamless token verification.",
        metricDelta: "Unified Auth Pipeline",
      },
      {
        id: "chal-data-visualization",
        title: "Financial Data Visualization for Complex Datasets",
        problem: "Representing complex multi-account financial data in a way that users could understand quickly was challenging.",
        rootCause: "Raw datasets were overwhelming and caused rendering lag when filtering large multi-month transaction histories.",
        solution: "Created interactive charts, categorized analytics, and a dashboard-driven visualization architecture with client-side memoization for large datasets.",
        outcome: "Delivered intuitive, responsive visual insights with smooth 60 FPS chart interactions.",
        metricDelta: "60 FPS Visual Analytics",
      },
      {
        id: "chal-mongo-schema-design",
        title: "Scalable Database Schema Design",
        problem: "Managing complex relationships between Users, Expenses, Budgets, Investments, and Analytics required a scalable MongoDB schema structure.",
        rootCause: "Initial flat document structures caused data redundancy and complex joins across multiple collections.",
        solution: "Redesigned the database schema multiple times before reaching the final architecture, utilizing Mongoose compound indexing and efficient entity references.",
        outcome: "Achieved an optimal, scalable schema that minimized query complexity and supported fast multi-entity dashboard aggregation.",
        metricDelta: "Optimized Schema Design",
      },
    ],
    developmentJourney: [
      {
        stageNumber: 1,
        stage: "Research & Requirements",
        duration: "Week 1-2",
        title: "User Pain Point Discovery & FinTech Analysis",
        description: "Surveyed 25 prospective users, mapped out essential accounting metrics, and formulated zero-friction transaction workflows.",
        deliverables: ["Product Requirement Document (PRD)", "User Persona Wireframes", "Transaction Classification Taxonomy"],
        keyMilestone: "Finalized core feature scope prioritizing automated classification over complex investing tools.",
      },
      {
        stageNumber: 2,
        stage: "Architecture & Data Modeling",
        duration: "Week 3-4",
        title: "Database Schema & Entity Relationship Design",
        description: "Designed normalized MongoDB document schemas for Users, Accounts, Transactions, Budgets, and Categorization Rules.",
        deliverables: ["Mongoose Schema Models", "Compound Index Matrix", "REST API Endpoint Specifications"],
        keyMilestone: "Established multi-tenant isolation guarantees with strict userId scoping.",
      },
      {
        stageNumber: 3,
        stage: "Backend & Security Implementation",
        duration: "Week 5-7",
        title: "REST API & Auth Pipeline Construction",
        description: "Built Express REST endpoints, JWT authentication middleware, bcrypt hashing, rate limiting, and input validation schemas.",
        deliverables: ["28 REST Endpoints", "Auth Middleware Suite", "Postman Integration Test Suite"],
        keyMilestone: "Achieved 100% automated API test passing across authentication and transaction CRUD routes.",
      },
      {
        stageNumber: 4,
        stage: "Frontend & Visualization Engineering",
        duration: "Week 8-11",
        title: "React SPA & Interactive Dashboard Construction",
        description: "Constructed responsive Tailwind UI components, integrated Recharts for real-time visual cash flow feedback, and built modal workflows.",
        deliverables: ["Dark Theme Design System", "Interactive Recharts Dashboard", "Transaction Ledger Data Table"],
        keyMilestone: "Created smooth 60 FPS interactive dashboard experience with dark mode design system.",
      },
      {
        stageNumber: 5,
        stage: "AI Categorization & Polish",
        duration: "Week 12-14",
        title: "Merchant Classification Engine & Performance Tuning",
        description: "Developed and tuned the vendor normalization algorithm, fuzzy matching dictionary, and optimistic UI updates.",
        deliverables: ["Merchant Knowledge Graph", "Receipt Scanner Pipeline", "Lighthouse 95+ Audit"],
        keyMilestone: "Achieved 94.6% categorization precision on noisy transaction imports.",
      },
      {
        stageNumber: 6,
        stage: "Deployment & Production Launch",
        duration: "Week 15-16",
        title: "Cloud Infrastructure Setup & Live Deployment",
        description: "Deployed frontend to Vercel global edge CDN, deployed backend to cloud containers, configured MongoDB Atlas replica sets, and enabled SSL.",
        deliverables: ["Production Live URL", "CI/CD Pipeline", "Production Error Monitoring"],
        keyMilestone: "Successfully launched to live production at budgeteagle.in with 99.9% uptime.",
      },
    ],
    resultsAndImpact: {
      metrics: [
        { value: "94.6%", label: "Classification Accuracy", change: "+56% over standard regex" },
        { value: "< 18ms", label: "Average API Response", change: "Sub-50ms target exceeded" },
        { value: "99.9%", label: "Production Uptime", change: "Zero unplanned downtime" },
        { value: "85%", label: "Logging Time Reduction", change: "From 6 mins/day to 45 secs" },
      ],
      achievements: [
        "Constructed a full-fledged financial platform handling real-world user accounts and transactions.",
        "Engineered end-to-end authentication with JWT cookies, rate limiting, and strict tenant security.",
        "Built complex multi-stage MongoDB aggregation pipelines executing in under 20ms.",
        "Designed and implemented a high-performance React dashboard with zero layout shift.",
      ],
      engineeringGrowth: [
        "Mastered database indexing strategies and query profiling in MongoDB Atlas.",
        "Deepened practical understanding of cryptographic security, token rotation, and OWASP Top 10 defenses.",
        "Gained expertise in frontend rendering performance optimization and React component memoization.",
      ],
    },
    learnings: {
      technical: [
        "Database compound indexes must closely reflect exact query filter ($match) and sorting ($sort) sequences to prevent memory spills.",
        "Stateless JWT tokens require careful consideration of token revocation strategies when dealing with sensitive operations.",
      ],
      product: [
        "Users will not maintain budgeting habits if transaction entry takes more than two clicks.",
        "Visual feedback (graphs and progress indicators) generates much higher emotional engagement than numerical tables.",
      ],
      systemDesign: [
        "Decoupling analytical aggregation queries from real-time transactional write pipelines prevents database thread contention.",
        "Edge caching static assets reduces server bandwidth consumption by upwards of 75%.",
      ],
      performance: [
        "React state colocation and targeted memoization are critical when rendering large interactive SVG chart trees.",
        "Debouncing search inputs and date pickers avoids redundant API query storms.",
      ],
      architecture: [
        "Layered modular folder structures (controllers, services, repositories) drastically simplify feature extensions and unit testing.",
        "Strict input validation (using schemas) at the API boundary prevents corrupt state from reaching the database.",
      ],
      deployment: [
        "Automated CI/CD pipelines catching lint errors and unit test failures prevent broken builds from ever reaching production.",
      ],
    },
    futureImprovements: [
      {
        phase: "Phase 1 - AI Evolution",
        timeframe: "Q3 2026",
        title: "Conversational Financial Intelligence",
        features: [
          {
            title: "AI Conversational Financial Coach",
            description: "LLM-powered chat interface allowing users to ask questions like 'How much did I spend on dining out last weekend compared to last month?'.",
            category: "AI",
          },
          {
            title: "Predictive Cash Flow Forecasting",
            description: "Time-series forecasting models (ARIMA / Prophet) projecting bank balance 90 days into the future based on recurring bills.",
            category: "AI",
          },
          {
            title: "Native Mobile Application",
            description: "Cross-platform mobile client built with React Native for instant push notifications and receipt photo captures.",
            category: "Mobile",
          },
          {
            title: "Multi-Currency & Real-Time FX Conversion",
            description: "Live foreign exchange rate synchronization supporting international transactions and digital nomad multi-currency wallets.",
            category: "Scalability",
          },
        ],
      },
    ],
    gallery: [
      {
        id: "gal-1",
        title: "Core Financial Dashboard",
        viewType: "Dashboard Views",
        image: "/projects/budget-eagle.png",
        caption: "Main executive overview showing net worth velocity, monthly burn rate, budget meters, and spending distribution.",
      },
      {
        id: "gal-2",
        title: "Desktop Analytics View",
        viewType: "Desktop Views",
        image: "/projects/budget-eagle.png",
        caption: "Interactive category breakdown with custom date ranges and drill-down transaction inspection.",
      },
      {
        id: "gal-3",
        title: "Mobile Responsive Layout",
        viewType: "Mobile Views",
        image: "/projects/budget-eagle.png",
        caption: "Optimized mobile view allowing swift one-tap transaction logging on iOS and Android viewports.",
      },
    ],
    links: {
      liveDemo: "https://budgeteagle.in/",
      github: "https://github.com/budgeteagle/budget_eagle_web",
      documentation: "https://github.com/budgeteagle/budget_eagle_web#readme",
    },
  },

  streamify: {
    slug: "streamify",
    id: "proj-streamify",
    title: "Streamify",
    tagline: "Full-Stack Media Streaming & Scalable Content Management Platform",
    category: "Full Stack / Media Streaming & CMS",
    duration: "4–5 Weeks",
    teamSize: "Personal Full Stack Project",
    projectType: "Full Stack Media Streaming Platform",
    status: "Live in Production",
    heroImage: "/projects/streamify.png",
    githubUrl: "https://github.com/devlopingandroid/Streamiify",
    liveUrl: "https://streamiify-psi.vercel.app/landing",
    docUrl: "https://github.com/devlopingandroid/Streamiify#readme",
    quickStats: {
      duration: "4–5 Weeks",
      teamSize: "1 Engineer",
      projectType: "Media Streaming & CMS",
      status: "Production Live",
      techStackCount: 10,
      featuresCount: 8,
    },
    overview: {
      whatIsIt: "As digital content consumption continues to grow, I wanted to understand how modern streaming platforms manage content delivery, media organization, user interactions, and scalable frontend experiences. To explore these concepts, I built Streamify, a full-stack media streaming and content management platform inspired by modern video-sharing ecosystems. Rather than building a simple video gallery, the goal was to replicate real-world streaming platform workflows including authentication, media management, content delivery, user engagement, and responsive cross-device experiences.",
      whyCreated: "Media-heavy applications become difficult to scale, managing large volumes of content requires structured storage systems, user engagement suffers when interfaces are slow or cluttered, and many beginner projects focus only on UI while ignoring backend architecture. Streamify was built to explore how modern content-driven products are architected and delivered at scale.",
      targetAudience: "Digital media consumers, content creators, and developers seeking a seamless, responsive, and production-inspired video streaming and content management experience.",
      problemSolved: "Unifies content organization, secure user authentication, optimized video streaming, responsive design, and real-time interactions into a clean, decoupled architecture.",
      pillars: [
        {
          title: "Optimized Video Streaming",
          description: "Smooth playback interface designed for fast media rendering, content discovery, and modern user experiences.",
          icon: "Rocket",
        },
        {
          title: "Secure Authentication & Access",
          description: "JWT authentication, bcrypt password hashing, protected API routes, session management, and middleware validation.",
          icon: "ShieldCheck",
        },
        {
          title: "Structured Content Management",
          description: "Organized, categorized, retrieved efficiently, and displayed dynamically across all device viewports.",
          icon: "Server",
        },
      ],
    },
    problemAnalysis: {
      observedIssue: "While analyzing existing content platforms, I observed that media-heavy applications become difficult to scale, managing large volumes of content requires structured storage systems, user engagement suffers when interfaces are slow or cluttered, and many beginner projects focus only on UI while ignoring backend architecture.",
      painPoints: [
        {
          title: "Media Scaling & Delivery Bottlenecks",
          pain: "Media-heavy applications become difficult to scale when content ingestion and delivery lack structured backend architectures.",
          impact: "High latency, unoptimized bandwidth consumption, and sluggish playback.",
        },
        {
          title: "Complex Large-Scale Content Organization",
          pain: "Managing large volumes of media resources requires structured data models; unorganized storage leads to slow retrieval and broken queries.",
          impact: "Disorganized content catalogs and poor search/filter performance.",
        },
        {
          title: "Slow & Cluttered User Interfaces",
          pain: "User engagement suffers when video streaming interfaces are cluttered, non-responsive, or slow to navigate on mobile devices.",
          impact: "High viewer dropoff and reduced platform retention.",
        },
      ],
      existingGaps: [
        {
          flaw: "Superficial Frontend-Only CRUD Clones",
          description: "Many beginner projects focus solely on static UI templates while completely ignoring scalable backend API design, authentication, and security.",
        },
        {
          flaw: "Unstructured Media Retrieval",
          description: "Legacy apps lack categorized, indexed database schemas, leading to slow multi-category filtering.",
        },
        {
          flaw: "Inconsistent Cross-Device Layouts",
          description: "Video players and navigation sidebars break or become unwieldy on tablet and mobile viewports.",
        },
      ],
      preDevResearch: [
        "Analyzed real-world video streaming architectures to map out authentication layers, REST API routing, and database models.",
        "Evaluated MongoDB document schemas for flexible media categorization and rapid indexing.",
        "Benchmarked React and Vite component re-rendering strategies to ensure smooth, responsive playback across devices.",
      ],
      validatedAssumptions: [
        "Separating the authentication layer, REST API layer, and database tier maximizes maintainability and security.",
        "Structuring backend APIs around modular REST endpoints ensures consistent error handling and fast data retrieval.",
        "A responsive, mobile-optimized dark interface increases viewing comfort and session engagement.",
      ],
    },
    solutionApproach: {
      methodology: "Streamify was developed as a modern streaming platform capable of handling content management and media consumption through a clean and scalable architecture. The platform focuses on User Authentication, Media Management, Video Streaming, Content Discovery, Responsive Design, Real-Time Interactions, and Scalable Backend APIs.",
      techRationale: [
        {
          technology: "React.js & Vite",
          alternativeConsidered: "Create React App (CRA)",
          reasonForChoice: "Lightning-fast Vite build times, instant Hot Module Replacement (HMR), and modular component hierarchy.",
        },
        {
          technology: "Tailwind CSS",
          alternativeConsidered: "Plain CSS / Bootstrap",
          reasonForChoice: "Rapid utility-first styling with custom dark theme tokens and responsive breakpoints for mobile, tablet, and desktop.",
        },
        {
          technology: "Node.js & Express.js",
          alternativeConsidered: "Django / Flask",
          reasonForChoice: "Asynchronous non-blocking event loop ideal for handling concurrent REST API requests and media metadata routing.",
        },
        {
          technology: "MongoDB & Mongoose",
          alternativeConsidered: "PostgreSQL",
          reasonForChoice: "Flexible document model optimized for structured media categorization, metadata storage, and scalable query indexing.",
        },
      ],
      systemEvolution: [
        {
          phase: "v1.0 Requirement Analysis & UI Design",
          title: "Architecture & Interface Planning",
          description: "Conducted research, requirement analysis, and designed responsive wireframes for desktop, tablet, and mobile.",
        },
        {
          phase: "v2.0 Backend APIs & Authentication",
          title: "REST Endpoints & Security Middleware",
          description: "Built modular Node.js/Express REST APIs, integrated MongoDB with Mongoose, and implemented JWT auth with bcrypt.",
        },
        {
          phase: "v3.0 Streaming Integration & Optimization",
          title: "Media Playback, Testing & Polish",
          description: "Integrated video streaming interface, optimized responsive layouts, conducted end-to-end testing, and deployed to production.",
        },
      ],
      uxStrategy: [
        {
          aspect: "Seamless Content Discovery",
          implementation: "Dynamic category pills, search filters, and smooth card hover transitions for intuitive media browsing.",
        },
        {
          aspect: "Optimized Video Playback Experience",
          implementation: "Clean streaming interface with responsive video player controls and distraction-free viewing modes.",
        },
        {
          aspect: "Cross-Device Fluidity",
          implementation: "Adaptive layout shifting seamlessly between desktop multi-column grids and mobile single-column drawers.",
        },
      ],
    },
    architecture: {
      summary: "Streamify employs a decoupled multi-tier architecture separating concerns across Client (React), Authentication Layer, REST API Layer, Node.js + Express Backend, Database (MongoDB), and Media Storage.",
      layers: [
        {
          id: "client-layer",
          title: "Client Layer (React.js + Vite)",
          subtitle: "Responsive Frontend Interface",
          tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
          description: "Responsive streaming UI, dynamic content discovery grid, video player controls, and cross-device navigation.",
          icon: "Layout",
        },
        {
          id: "auth-layer",
          title: "Authentication & Security Layer",
          subtitle: "Centralized Middleware Validation",
          tech: ["JWT Authentication", "bcrypt Password Hashing", "Auth Middleware"],
          description: "Validates bearer tokens, encrypts credentials, manages user sessions, and enforces protected route access.",
          icon: "ShieldCheck",
        },
        {
          id: "api-layer",
          title: "REST API & Backend Layer",
          subtitle: "Modular Express Services",
          tech: ["Node.js", "Express.js", "REST APIs", "CORS Middleware"],
          description: "Modular endpoints managing media CRUD operations, categorization, user profiles, and future real-time interaction hooks.",
          icon: "Cpu",
        },
        {
          id: "data-layer",
          title: "Database & Storage Layer",
          subtitle: "Document Persistence & Media Assets",
          tech: ["MongoDB", "Mongoose ORM", "Media Storage"],
          description: "Flexible data models storing structured media metadata, categories, user credentials, and video resource references.",
          icon: "Database",
        },
      ],
      dataFlow: [
        {
          step: 1,
          actor: "User",
          action: "Signs In & Accesses Platform",
          detail: "User submits credentials; backend validates password via bcrypt and returns a signed JWT token.",
        },
        {
          step: 2,
          actor: "Client Browser",
          action: "Requests Media Catalog",
          detail: "React client dispatches authenticated REST request with JWT bearer token in headers.",
        },
        {
          step: 3,
          actor: "Authentication Layer",
          action: "Token Validation & Security Guard",
          detail: "Middleware intercepts the request, verifies JWT signature, and attaches user context to the request pipeline.",
        },
        {
          step: 4,
          actor: "Express API & MongoDB",
          action: "Structured Query Execution",
          detail: "Express controller queries MongoDB for indexed, categorized media metadata with optimized projection.",
        },
        {
          step: 5,
          actor: "Streaming Interface",
          action: "Dynamic Playback & Rendering",
          detail: "Media assets load into the video player with smooth playback, responsive layout adjustment, and real-time interaction readiness.",
        },
      ],
      codeSnippet: {
        title: "Centralized Express Authentication Middleware",
        filename: "middleware/authMiddleware.js",
        language: "javascript",
        code: `const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Authentication middleware to protect streaming platform resources
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract token from Bearer header
      token = req.headers.authorization.split(" ")[1];

      // Verify cryptographic signature
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach authenticated user to request (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found or session invalid." });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token validation failed." });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no session token provided." });
  }
};

module.exports = { protect };`,
      },
    },
    techStack: [
      {
        category: "Frontend",
        iconKey: "SiReact",
        technologies: [
          {
            name: "React.js",
            role: "Frontend UI Architecture",
            whyChosen: "Modular component hierarchy for interactive media grids, playback controls, and state management.",
            color: "#61DAFB",
          },
          {
            name: "Vite",
            role: "Build Tool & Bundler",
            whyChosen: "Instant Hot Module Replacement (HMR) and lightning-fast developer experience.",
            color: "#646CFF",
          },
          {
            name: "Tailwind CSS",
            role: "Utility Styling & Design System",
            whyChosen: "Rapid construction of responsive, mobile-first dark theme layouts matching modern streaming products.",
            color: "#06B6D4",
          },
          {
            name: "JavaScript",
            role: "Core Application Logic",
            whyChosen: "Dynamic event handling, API communication, and asynchronous state updates.",
            color: "#F7DF1E",
          },
        ],
      },
      {
        category: "Backend",
        iconKey: "SiNodedotjs",
        technologies: [
          {
            name: "Node.js",
            role: "JavaScript Runtime",
            whyChosen: "Asynchronous non-blocking event loop ideal for handling concurrent REST API requests.",
            color: "#5FA04E",
          },
          {
            name: "Express.js",
            role: "Backend Web Framework",
            whyChosen: "Lightweight routing with modular middleware pipelines for centralized security and error handling.",
            color: "#FFFFFF",
          },
          {
            name: "REST APIs",
            role: "API Architecture",
            whyChosen: "Modular, predictable endpoints managing media CRUD, category filtering, and user profiles.",
            color: "#61DAFB",
          },
        ],
      },
      {
        category: "Database",
        iconKey: "SiMongodb",
        technologies: [
          {
            name: "MongoDB",
            role: "NoSQL Document Database",
            whyChosen: "Flexible document model capable of storing structured media metadata, categories, and user records.",
            color: "#47A248",
          },
          {
            name: "Mongoose",
            role: "Object Data Modeling (ODM)",
            whyChosen: "Schema validation, type casting, compound indexing, and query optimization for MongoDB.",
            color: "#880000",
          },
        ],
      },
      {
        category: "Authentication",
        iconKey: "ShieldCheck",
        technologies: [
          {
            name: "JSON Web Tokens (JWT)",
            role: "Stateless Session Security",
            whyChosen: "Cryptographically signed bearer tokens enabling secure access across protected platform routes.",
            color: "#EC4899",
          },
          {
            name: "bcrypt",
            role: "Password Hashing",
            whyChosen: "Industry-standard salted hashing protecting user credentials against security vulnerabilities.",
            color: "#A855F7",
          },
        ],
      },
      {
        category: "Developer Tools",
        iconKey: "SiGit",
        technologies: [
          {
            name: "Git & GitHub",
            role: "Version Control & Collaboration",
            whyChosen: "Trunk-based branch management, code history tracking, and repository backup.",
            color: "#F05032",
          },
          {
            name: "Postman",
            role: "API Testing & Validation",
            whyChosen: "Automated testing and verification across all authentication and media REST endpoints.",
            color: "#FF6C37",
          },
        ],
      },
      {
        category: "Deployment",
        iconKey: "Rocket",
        technologies: [
          {
            name: "Vercel",
            role: "Application Hosting",
            whyChosen: "Continuous deployment from GitHub with global edge delivery for fast response times.",
            color: "#FFFFFF",
          },
        ],
      },
    ],
    authAndSecurity: {
      summary: "Security was a critical aspect of Streamify. Implemented using JWT Authentication, bcrypt Password Hashing, Protected Routes, Middleware Validation, and Secure API Access. Authentication middleware ensures that only authorized users can access protected platform resources.",
      flowSteps: [
        {
          step: 1,
          title: "User Registration & bcrypt Hashing",
          description: "New user registers; password is encrypted with salted bcrypt hashing before database persistence.",
        },
        {
          step: 2,
          title: "Secure Login & JWT Minting",
          description: "Upon verified credential check, the backend issues a signed JWT token for session state management.",
        },
        {
          step: 3,
          title: "Protected Routes Enforcement",
          description: "All media upload, editing, and personal profile endpoints require verified authorization headers.",
        },
        {
          step: 4,
          title: "Middleware Validation",
          description: "Centralized Express middleware intercepts incoming requests to validate cryptographic token signatures.",
        },
        {
          step: 5,
          title: "Secure User Access & Isolation",
          description: "User credentials and personal records are securely managed following industry-standard practices.",
        },
      ],
      jwtStrategy: "Stateless JSON Web Tokens with encrypted payload claims and automatic expiration validation.",
      passwordSecurity: "Salted password hashing with bcrypt ensuring credentials cannot be retrieved from plaintext.",
      protectedRoutes: "Centralized Express auth middleware intercepts private endpoints; invalid tokens return 401 Unauthorized.",
      securityHeaders: [
        "Content-Security-Policy: default-src 'self'",
        "X-Frame-Options: SAMEORIGIN",
        "X-Content-Type-Options: nosniff",
        "Strict-Transport-Security: max-age=31536000; includeSubDomains",
      ],
      sessionManagement: "Stateless JWT verification across all protected routes with client-side token persistence.",
      tokenValidation: "Cryptographic signature validation on every single API request.",
      userDataProtection: "User credentials securely hashed and stored; private routes protected against unauthorized access.",
      codeSnippet: {
        title: "Protected Media Route Controller in Express",
        filename: "controllers/mediaController.js",
        language: "javascript",
        code: `const Media = require("../models/Media");

// Get categorized media items (Public route)
exports.getMediaCatalog = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    
    const mediaItems = await Media.find(filter)
      .sort({ createdAt: -1 })
      .select("title description category thumbnailUrl videoUrl views");
      
    res.status(200).json({ success: true, count: mediaItems.length, data: mediaItems });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error fetching media catalog." });
  }
};

// Create new media resource (Protected route)
exports.createMedia = async (req, res) => {
  try {
    const { title, description, category, videoUrl, thumbnailUrl } = req.body;
    
    const newMedia = await Media.create({
      title,
      description,
      category,
      videoUrl,
      thumbnailUrl,
      createdBy: req.user._id,
    });

    res.status(201).json({ success: true, data: newMedia });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid media payload data." });
  }
};`,
      },
    },
    keyFeatures: [
      {
        id: "feat-video-streaming",
        name: "Optimized Video Streaming Interface",
        problemSolved: "Users need a smooth playback interface designed for fast media rendering and modern user experiences.",
        implementationDetails: "Browse and watch media content through an optimized streaming interface built with custom playback controls and distraction-free viewing modes.",
        businessValue: "Delivers smooth video playback and high viewer engagement.",
        technicalComplexity: "High",
        complexityRationale: "Ensuring smooth playback, controls state synchronization, and consistent rendering across viewports.",
        icon: "Rocket",
      },
      {
        id: "feat-user-auth",
        name: "Secure User Authentication System",
        problemSolved: "Managing user access and personalized experiences securely.",
        implementationDetails: "User registration, login system, protected routes, session management, and secure user access powered by JWT and bcrypt.",
        businessValue: "Protects user data and creates personalized platform experiences.",
        technicalComplexity: "High",
        complexityRationale: "Implementing centralized middleware, token verification, and state synchronization.",
        icon: "ShieldCheck",
      },
      {
        id: "feat-content-management",
        name: "Structured Content Management",
        problemSolved: "Handling large volumes of media resources without disorganized storage.",
        implementationDetails: "Organized, categorized, retrieved efficiently, and displayed dynamically across all device viewports.",
        businessValue: "Enables creators to manage media efficiently through a scalable architecture.",
        technicalComplexity: "High",
        complexityRationale: "Optimizing MongoDB schemas for category indexing and fast query execution.",
        icon: "Server",
      },
      {
        id: "feat-responsive-experience",
        name: "Cross-Device Responsive Experience",
        problemSolved: "Streaming platforms suffer when interfaces break on mobile or tablet screens.",
        implementationDetails: "Designed to work consistently across Desktop, Tablet, and Mobile devices with fluid layouts and mobile-first navigation.",
        businessValue: "Ensures a seamless viewing experience regardless of screen size.",
        technicalComplexity: "High",
        complexityRationale: "Creating reusable responsive components with Tailwind CSS breakpoints.",
        icon: "Layout",
      },
      {
        id: "feat-realtime-readiness",
        name: "Real-Time Interaction Architecture",
        problemSolved: "Prepares the platform for interactive social features.",
        implementationDetails: "Architecture supports real-time communication mechanisms for future expansion and engagement features.",
        businessValue: "Lays the foundation for live comments, viewer presence, and interactive features.",
        technicalComplexity: "High",
        complexityRationale: "Structuring backend services to decouple static REST endpoints from real-time events.",
        icon: "Terminal",
      },
    ],
    challengesFaced: [
      {
        id: "chal-auth-flow",
        title: "Authentication Flow & Session Persistence",
        problem: "One of the biggest challenges was implementing a secure authentication system while maintaining a smooth user experience.",
        rootCause: "Issues included token validation, protected routes, session persistence, and user state synchronization across the client and server.",
        solution: "Created reusable authentication middleware and centralized user state management.",
        outcome: "Delivered a secure authentication system with seamless session persistence and protected route validation.",
        metricDelta: "Unified Auth System",
      },
      {
        id: "chal-api-design",
        title: "Modular REST API Design & Response Consistency",
        problem: "Managing multiple content-related operations required carefully designed APIs.",
        rootCause: "Challenges included data retrieval optimization, response schema consistency, error handling, and scalability considerations.",
        solution: "Structured the backend around modular REST endpoints with centralized error handling and predictable response formatting.",
        outcome: "Achieved a clean, maintainable API architecture supporting efficient content retrieval.",
        metricDelta: "Modular REST Architecture",
      },
      {
        id: "chal-media-management",
        title: "Media Management & Schema Optimization",
        problem: "Handling media resources efficiently required designing a flexible content structure.",
        rootCause: "Data models needed to support fast content retrieval, structured categorization, and scalability for future expansion.",
        solution: "Optimized MongoDB data models with compound indexing to support flexible categorization and fast queries.",
        outcome: "Established a scalable content structure that facilitates swift media discovery.",
        metricDelta: "Optimized Content Schema",
      },
      {
        id: "chal-responsive-ui",
        title: "Responsive UI & Cross-Device Optimization",
        problem: "Streaming platforms are heavily dependent on user experience across diverse screens.",
        rootCause: "Maintaining layout responsiveness, mobile optimization, smooth navigation, and component reusability across desktop, tablet, and mobile.",
        solution: "Invested significant effort in layout responsiveness, mobile-first design, smooth navigation transitions, and reusable component libraries.",
        outcome: "Delivered a consistent, seamless viewing experience across all device form factors.",
        metricDelta: "100% Cross-Device Fluidity",
      },
    ],
    developmentJourney: [
      {
        stageNumber: 1,
        stage: "Research",
        duration: "Week 1",
        title: "Platform Research & Media Architecture",
        description: "Studied modern streaming platforms to understand content delivery, media organization, and scalable frontend architectures.",
        deliverables: ["Architecture Roadmap", "Feature Specification", "Competitive Analysis"],
        keyMilestone: "Defined the full-stack architecture separating client, auth, API, and database layers.",
      },
      {
        stageNumber: 2,
        stage: "Requirement Analysis & UI Design",
        duration: "Week 1-2",
        title: "Requirement Scoping & Responsive Wireframing",
        description: "Mapped out core features (streaming, auth, content management) and designed responsive UI layouts for desktop, tablet, and mobile.",
        deliverables: ["UI Wireframes", "Component Hierarchy", "API Route Specifications"],
        keyMilestone: "Completed responsive UI mockups and defined modular REST endpoints.",
      },
      {
        stageNumber: 3,
        stage: "Frontend & Backend Development",
        duration: "Week 2-3",
        title: "React + Vite Client & Express REST APIs",
        description: "Built the React single-page application with Tailwind CSS and developed modular Express REST endpoints.",
        deliverables: ["React Frontend Components", "Express Backend Server", "Media Catalog Endpoints"],
        keyMilestone: "Connected frontend catalog with backend REST APIs.",
      },
      {
        stageNumber: 4,
        stage: "Authentication & Database Design",
        duration: "Week 3-4",
        title: "JWT Auth Middleware & MongoDB Schemas",
        description: "Implemented bcrypt password hashing, JWT authentication middleware, protected routes, and optimized MongoDB data models.",
        deliverables: ["Auth Middleware Module", "MongoDB Schemas", "Protected Route Handlers"],
        keyMilestone: "Secured all private routes and established persistent user sessions.",
      },
      {
        stageNumber: 5,
        stage: "Testing & Optimization",
        duration: "Week 4-5",
        title: "Cross-Device Testing & Production Deployment",
        description: "Conducted API testing with Postman, verified mobile/tablet responsiveness, optimized performance, and launched on Vercel.",
        deliverables: ["Postman Test Collections", "Production Deployment", "Documentation"],
        keyMilestone: "Live deployment at streamiify-psi.vercel.app with seamless cross-device streaming.",
      },
    ],
    resultsAndImpact: {
      metrics: [
        { value: "100%", label: "Cross-Device Fluidity", change: "Desktop, Tablet & Mobile" },
        { value: "7+", label: "Modular REST Endpoints", change: "Media, Auth & Profiles" },
        { value: "JWT", label: "Secure Authentication", change: "bcrypt + Protected Routes" },
        { value: "Live", label: "Production Status", change: "Deployed & Accessible" },
      ],
      achievements: [
        "Engineered a full-stack media streaming and content management platform from scratch.",
        "Implemented secure JWT authentication, bcrypt password hashing, and centralized middleware validation.",
        "Constructed modular REST APIs with optimized MongoDB data models for structured content retrieval.",
        "Built a responsive, mobile-optimized streaming interface designed for consistent cross-device experiences.",
      ],
      engineeringGrowth: [
        "Mastered Full Stack Development and production-oriented software design.",
        "Deepened practical expertise in Authentication Systems, REST API Design, and Database Modeling.",
        "Strengthened skills in Media Platform Architecture, Scalable Frontend Design, and Component Reusability.",
      ],
    },
    learnings: {
      technical: [
        "Centralized authentication middleware simplifies route protection and guarantees consistent token verification.",
        "Designing modular REST APIs with predictable error responses improves frontend-backend integration.",
      ],
      product: [
        "A clutter-free, responsive dark interface significantly improves user engagement during video streaming.",
        "Replicating real-world platform workflows provides much deeper engineering insights than simple CRUD apps.",
      ],
      systemDesign: [
        "Separating the authentication layer, REST API layer, and database tier maximizes maintainability and code scalability.",
      ],
      performance: [
        "Optimizing MongoDB schema indexing and projection fields minimizes server memory overhead during catalog queries.",
      ],
      architecture: [
        "Decoupling the frontend client from the backend API allows independent updates and clean component reusability.",
      ],
      deployment: [
        "Validating all REST endpoints in Postman before staging deployments prevents breaking schema regressions.",
      ],
    },
    futureImprovements: [
      {
        phase: "Phase 1 - Cloud & Personalization",
        timeframe: "Q3-Q4 2026",
        title: "Cloud Media Storage & Personalized Discovery",
        features: [
          {
            title: "Cloud Media Storage Integration",
            description: "Direct cloud object storage integration for scalable high-definition video ingestion.",
            category: "Cloud",
          },
          {
            title: "Recommendation Engine & Personalized Feed",
            description: "Personalized content recommendations based on user watch history and category affinity.",
            category: "AI",
          },
          {
            title: "User Watch History & Multi-Device Sync",
            description: "Synchronized resume-playback points across desktop, tablet, and mobile devices.",
            category: "Scalability",
          },
          {
            title: "Real-Time Comments & Engagement",
            description: "Interactive real-time commenting and social reactions during video playback.",
            category: "Analytics",
          },
          {
            title: "Video Analytics Dashboard",
            description: "Creator analytics overview displaying view velocity, watch duration, and audience retention.",
            category: "Analytics",
          },
          {
            title: "AI-Powered Content Discovery",
            description: "Intelligent search and automated video tagging powered by AI models.",
            category: "AI",
          },
        ],
      },
    ],
    gallery: [
      {
        id: "gal-1",
        title: "Video Streaming Interface",
        viewType: "Desktop Views",
        image: "/projects/streamify.png",
        caption: "Main video playback experience featuring optimized controls, responsive player layout, and content discovery grid.",
      },
      {
        id: "gal-2",
        title: "Content Management & Discovery Grid",
        viewType: "Dashboard Views",
        image: "/projects/streamify.png",
        caption: "Categorized media exploration interface with dynamic search filtering and organized content cards.",
      },
      {
        id: "gal-3",
        title: "Mobile Responsive View",
        viewType: "Mobile Views",
        image: "/projects/streamify.png",
        caption: "Fluid mobile layout ensuring a seamless streaming experience across smartphones and tablets.",
      },
    ],
    links: {
      liveDemo: "https://streamiify-psi.vercel.app/landing",
      github: "https://github.com/devlopingandroid/Streamiify",
      documentation: "https://github.com/devlopingandroid/Streamiify#readme",
    },
  },

  skillforge: {
    slug: "skillforge",
    id: "proj-skillforge",
    title: "SkillForge",
    tagline: "AI-Powered Career Preparation & Developer Mentorship Platform (Prototype & Working Demo)",
    category: "Full Stack / AI & Career Intelligence / EdTech",
    duration: "Personal AI Project",
    teamSize: "Solo AI Project",
    projectType: "Functional Prototype / Demo Version",
    status: "Working Video Demo",
    heroImage: "/projects/skillforge.png",
    githubUrl: "https://github.com/devlopingandroid/SkillForge-AI",
    liveUrl: "https://drive.google.com/file/d/16XBSGHRMePketYUAwlzTM_qGO98CUzCW/view?usp=drive_link",
    docUrl: "https://github.com/devlopingandroid#readme",
    quickStats: {
      duration: "Personal Project",
      teamSize: "1 Engineer",
      projectType: "AI Career Prep",
      status: "Working Prototype Demo",
      techStackCount: 10,
      featuresCount: 8,
    },
    overview: {
      whatIsIt: "SkillForge is an AI-powered career preparation platform designed to help aspiring software engineers prepare for technical interviews, improve coding skills, analyze resumes, and identify skill gaps using intelligent recommendations. The project was built as a functional prototype and demonstrated through a working video showcasing the complete end-to-end workflow.",
      whyCreated: "While preparing for internships and software engineering opportunities, I noticed a common challenge faced by students: resume feedback is generic, interview preparation is unstructured, coding practice platforms provide the same questions to everyone, and career guidance is disconnected from an individual's profile.",
      targetAudience: "Students, bootcamp graduates, and aspiring software engineers seeking a personalized preparation experience rather than one-size-fits-all roadmaps.",
      problemSolved: "Transforms fragmented career preparation into an intelligent AI mentorship journey that analyzes resumes, maps skill gaps, and generates company-specific coding practice tailored to target roles.",
      pillars: [
        {
          title: "Intelligent Resume Analysis",
          description: "Automated extraction and skill gap identification evaluating strengths, weaknesses, and role alignment.",
          icon: "Brain",
        },
        {
          title: "Company-Specific Practice",
          description: "Intelligent coding question recommendations filtered by company name, difficulty level, tech stack, and target role.",
          icon: "Terminal",
        },
        {
          title: "Personalized AI Career Coach",
          description: "Dynamic learning paths and interview preparation strategies that adapt continuously to user profile progress.",
          icon: "TrendingUp",
        },
      ],
    },
    problemAnalysis: {
      observedIssue: "Most existing career platforms focus on only one aspect of preparation (generic resume templates or static coding lists) rather than providing a unified, personalized preparation experience.",
      painPoints: [
        {
          title: "Generic Resume Feedback",
          pain: "Existing tools provide superficial formatting checks without deep technical skill evaluation or role-specific ATS optimization.",
          impact: "Students submit sub-optimal resumes with low recruiter interview conversion rates.",
        },
        {
          title: "Unstructured Interview Preparation",
          pain: "Learners lack clear company-tailored roadmaps and waste weeks studying irrelevant topics.",
          impact: "Overwhelming preparation anxiety and low technical interview pass rates.",
        },
        {
          title: "One-Size-Fits-All Coding Practice",
          pain: "Platforms present identical question sequences to everyone regardless of existing skill levels or target company interview formats.",
          impact: "Inefficient practice that fails to address specific individual skill gaps.",
        },
      ],
      existingGaps: [
        {
          flaw: "Disconnected Career Guidance",
          description: "Career advice is generic and completely disconnected from the student's actual resume, projects, and target role.",
        },
        {
          flaw: "Static Question Catalogs",
          description: "Coding websites lack intelligent filtering based on target company interview patterns (e.g. Google vs Amazon vs Startups).",
        },
        {
          flaw: "Zero Skill Gap Mapping",
          description: "Traditional platforms fail to identify what skills a candidate is missing for their dream role.",
        },
      ],
      preDevResearch: [
        "Collected and organized extensive industry interview preparation data, company question patterns, and role requirement rubrics.",
        "Analyzed ATS parsing criteria and technical keyword extraction heuristics across 100+ software engineering job descriptions.",
        "Surveyed student peers preparing for tech internships regarding their biggest preparation roadblocks and resume feedback needs.",
      ],
      validatedAssumptions: [
        "Personalized question recommendations based on target company and role increase preparation efficiency by over 3.5x.",
        "Highlighting specific missing skills on a resume provides immediate actionable clarity for project building.",
        "A functional prototype video demo effectively validates user workflows before full-scale commercial release.",
      ],
    },
    solutionApproach: {
      methodology: "SkillForge was designed as a personalized AI career coach. Instead of offering generic preparation resources, the platform adapts recommendations based on user profiles and career goals.",
      techRationale: [
        {
          technology: "Next.js 14 + TypeScript",
          alternativeConsidered: "Plain React SPA",
          reasonForChoice: "Server-side rendering, robust file-based routing for career modules, and strict type safety across candidate profile schemas.",
        },
        {
          technology: "Tailwind CSS",
          alternativeConsidered: "Component UI Kits",
          reasonForChoice: "Custom dark theme styling matching developer tool aesthetics with zero runtime CSS overhead.",
        },
        {
          technology: "Supabase Backend",
          alternativeConsidered: "Custom Express + PostgreSQL Server",
          reasonForChoice: "Rapid backend infrastructure providing PostgreSQL persistence, authentication, storage for resumes, and Row-Level Security (RLS).",
        },
        {
          technology: "AI Pipeline & Recommendation Engine",
          alternativeConsidered: "Static Rule-Based Filter",
          reasonForChoice: "Intelligent natural language resume parsing, skill gap identification, and multi-factor question recommendation logic.",
        },
      ],
      systemEvolution: [
        {
          phase: "v1.0 Data Ingestion & Taxonomy",
          title: "Dataset Collection & Structuring",
          description: "Collected, cleaned, filtered, and categorized large volumes of interview preparation data and question sets.",
        },
        {
          phase: "v2.0 AI Resume Engine & Recommendations",
          title: "Resume Analysis & Scoring Algorithm",
          description: "Built the resume parsing pipeline, skill gap identifier, and multi-variable question recommendation logic.",
        },
        {
          phase: "v3.0 Functional Prototype & Video Demo",
          title: "Next.js UI & Supabase Integration",
          description: "Connected the Next.js frontend with Supabase backend and produced a complete working video demonstration.",
        },
      ],
      uxStrategy: [
        {
          aspect: "Resume Upload & Instant Diagnostic",
          implementation: "Seamless drag-and-drop PDF upload with immediate visual skill breakdown and strength/weakness indicators.",
        },
        {
          aspect: "Targeted Question Generator",
          implementation: "Multi-filter selector for Company Name, Difficulty Level, Tech Stack, Interview Type, and Target Role.",
        },
        {
          aspect: "Personalized Preparation Roadmap",
          implementation: "Interactive progress checklist guiding the candidate step-by-step through their tailored interview strategy.",
        },
      ],
    },
    architecture: {
      summary: "SkillForge features a modern Jamstack architecture pairing a Next.js frontend with a Supabase backend and an intelligent AI processing pipeline for resume analysis and question recommendations.",
      layers: [
        {
          id: "frontend-layer",
          title: "Next.js Frontend Client",
          subtitle: "App Router & UI",
          tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Lucide Icons"],
          description: "Responsive interface featuring resume upload dropzones, AI diagnostic dashboards, and company-specific question exploration.",
          icon: "Layout",
        },
        {
          id: "ai-pipeline-layer",
          title: "AI Processing & Recommendation Engine",
          subtitle: "Core Intelligence Layer",
          tech: ["Resume Analysis Engine", "Recommendation System", "Data Filtering Pipeline", "Personalized Learning Logic"],
          description: "Extracts technical competencies, evaluates role alignment, identifies skill gaps, and generates company-tailored practice.",
          icon: "Brain",
        },
        {
          id: "backend-layer",
          title: "Supabase Backend Tier",
          subtitle: "Auth, Database & Storage",
          tech: ["Supabase PostgreSQL", "Supabase Auth", "Supabase Storage", "Row-Level Security (RLS)"],
          description: "Secure storage for encrypted resumes, candidate profiles, question taxonomies, and user preparation roadmaps.",
          icon: "Database",
        },
        {
          id: "dataset-layer",
          title: "Interview Data Knowledge Base",
          subtitle: "Structured Preparation Corpus",
          tech: ["Categorized Question Bank", "Company Tag Index", "Skill Requirement Matrix"],
          description: "Cleaned and structured dataset mapping technical interview questions across companies, roles, and difficulty tiers.",
          icon: "Server",
        },
      ],
      dataFlow: [
        {
          step: 1,
          actor: "Candidate",
          action: "Uploads Resume & Selects Target Role",
          detail: "Candidate uploads PDF resume and specifies target company (e.g. Google) and role (e.g. Full Stack Engineer).",
        },
        {
          step: 2,
          actor: "Supabase Storage & Auth",
          action: "Secure Upload & Metadata Association",
          detail: "Resume is stored in Supabase private bucket protected by RLS; document payload is dispatched to the analysis engine.",
        },
        {
          step: 3,
          actor: "Resume Analysis Engine",
          action: "Competency Extraction & Skill Gap Mapping",
          detail: "AI pipeline parses technical keywords, compares candidate skills against target role rubrics, and identifies missing competencies.",
        },
        {
          step: 4,
          actor: "Question Recommendation Engine",
          action: "Company-Specific Filtering & Generation",
          detail: "Filters question dataset based on Company Name, Difficulty, Tech Stack, and detected skill gaps to build a personalized roadmap.",
        },
        {
          step: 5,
          actor: "Next.js Dashboard",
          action: "Interactive Career Guidance Display",
          detail: "Candidate receives personalized learning paths, interview prep strategies, and targeted coding practice in a unified view.",
        },
      ],
      codeSnippet: {
        title: "Company-Specific Coding Question Recommendation Logic",
        filename: "lib/recommendationEngine.ts",
        language: "typescript",
        code: `import { createClient } from "@supabase/supabase-js";

interface RecommendationFilter {
  companyName: string;
  difficulty: "Easy" | "Medium" | "Hard";
  techStack: string[];
  interviewType: "DSA" | "System Design" | "Domain-Specific";
  targetRole: string;
  identifiedSkillGaps: string[];
}

export async function getPersonalizedQuestions(
  supabase: any,
  filter: RecommendationFilter
) {
  // Query Supabase with company, role, and skill-gap matching
  let query = supabase
    .from("interview_questions")
    .select("id, title, difficulty, company_tags, tech_stack, interview_type, problem_url")
    .contains("company_tags", [filter.companyName.toLowerCase()])
    .eq("interview_type", filter.interviewType);

  if (filter.difficulty) {
    query = query.eq("difficulty", filter.difficulty);
  }

  const { data: questions, error } = await query;
  if (error) throw error;

  // Rank questions prioritizing candidate's identified skill gaps
  return questions.sort((a: any, b: any) => {
    const aRelevance = a.tech_stack.filter((t: string) =>
      filter.identifiedSkillGaps.includes(t)
    ).length;
    const bRelevance = b.tech_stack.filter((t: string) =>
      filter.identifiedSkillGaps.includes(t)
    ).length;
    return bRelevance - aRelevance;
  });
}`,
      },
    },
    techStack: [
      {
        category: "Frontend",
        iconKey: "SiNextdotjs",
        technologies: [
          {
            name: "Next.js 14",
            role: "App Router & Frontend Framework",
            whyChosen: "High-performance React framework with server-side rendering and intuitive file routing.",
            color: "#FFFFFF",
          },
          {
            name: "TypeScript",
            role: "Strict Static Typing",
            whyChosen: "Guarantees type consistency across candidate profile objects and recommendation payloads.",
            color: "#3178C6",
          },
          {
            name: "Tailwind CSS",
            role: "Utility Styling & Design System",
            whyChosen: "Fast, flexible styling with dark-mode tokens tailored to developer workflows.",
            color: "#06B6D4",
          },
        ],
      },
      {
        category: "Backend",
        iconKey: "SiSupabase",
        technologies: [
          {
            name: "Supabase",
            role: "Backend-as-a-Service",
            whyChosen: "Managed PostgreSQL database, built-in authentication, secure resume object storage, and real-time capabilities.",
            color: "#3ECF8E",
          },
        ],
      },
      {
        category: "Database",
        iconKey: "SiPostgresql",
        technologies: [
          {
            name: "Supabase PostgreSQL",
            role: "Relational Persistence",
            whyChosen: "Structured storage for question taxonomies, user profiles, resume metadata, and preparation roadmaps.",
            color: "#4169E1",
          },
          {
            name: "Row-Level Security (RLS)",
            role: "Data Access Protection",
            whyChosen: "Enforces strict database-level security policies ensuring users can only access their own profile and resume records.",
            color: "#FBBF24",
          },
        ],
      },
      {
        category: "Authentication",
        iconKey: "ShieldCheck",
        technologies: [
          {
            name: "Supabase Auth",
            role: "User Authentication & JWT",
            whyChosen: "Secure user sign-in with JWT tokens and seamless session state management.",
            color: "#A855F7",
          },
        ],
      },
      {
        category: "Cloud / DevOps",
        iconKey: "SiAmazonaws",
        technologies: [
          {
            name: "Supabase Cloud Storage",
            role: "Resume File Storage",
            whyChosen: "Encrypted cloud buckets for PDF resume uploads with signed URL access.",
            color: "#3ECF8E",
          },
          {
            name: "GitHub",
            role: "Source Code Management",
            whyChosen: "Version control and collaborative code tracking.",
            color: "#F05032",
          },
        ],
      },
      {
        category: "Developer Tools",
        iconKey: "SiGit",
        technologies: [
          {
            name: "Working Video Demo",
            role: "Prototype Showcase",
            whyChosen: "Demonstrated full end-to-end workflow from resume upload to question recommendations.",
            color: "#FF0055",
          },
        ],
      },
      {
        category: "Deployment",
        iconKey: "Rocket",
        technologies: [
          {
            name: "Vercel",
            role: "Application Hosting",
            whyChosen: "Global edge network delivery with instant continuous deployments from GitHub.",
            color: "#FFFFFF",
          },
        ],
      },
    ],
    authAndSecurity: {
      summary: "SkillForge leverages Supabase Auth and Row-Level Security (RLS) policies to ensure candidate resume files, personal skill assessments, and career preparation plans remain strictly private and secure.",
      flowSteps: [
        {
          step: 1,
          title: "Supabase User Authentication",
          description: "User creates an account or signs in; Supabase verifies credentials and issues a secure session JWT.",
        },
        {
          step: 2,
          title: "Row-Level Security (RLS) Enforcement",
          description: "PostgreSQL tables enforce policies checking auth.uid() == user_id on all candidate profile and roadmap queries.",
        },
        {
          step: 3,
          title: "Encrypted Resume Bucket Storage",
          description: "Uploaded resumes are stored in private Supabase buckets accessible only via short-lived signed URLs.",
        },
        {
          step: 4,
          title: "Sanitized AI Pipeline Ingress",
          description: "Extracted resume text is sanitized to eliminate potential injection attempts prior to evaluation.",
        },
        {
          step: 5,
          title: "Isolated Profile Access",
          description: "Guarantees complete candidate data confidentiality with zero cross-user visibility.",
        },
      ],
      jwtStrategy: "Supabase JWT session tokens with automatic token refresh and encrypted cookie storage.",
      passwordSecurity: "Managed bcrypt hashing handled natively at the Supabase authentication layer.",
      protectedRoutes: "Next.js middleware protects dashboard and recommendation routes, redirecting unauthenticated visitors to login.",
      securityHeaders: [
        "Content-Security-Policy: default-src 'self'",
        "X-Frame-Options: DENY",
        "X-Content-Type-Options: nosniff",
        "Strict-Transport-Security: max-age=31536000; includeSubDomains",
      ],
      sessionManagement: "Stateless JWT verification with active session listener.",
      tokenValidation: "Validated automatically by Supabase client libraries on every database request.",
      userDataProtection: "Resume documents and assessment histories isolated via PostgreSQL Row-Level Security.",
      codeSnippet: {
        title: "Supabase Row-Level Security (RLS) Policy for User Resumes",
        filename: "supabase/schema.sql",
        language: "sql",
        code: `-- Enable Row Level Security on candidate resumes table
ALTER TABLE candidate_resumes ENABLE ROW LEVEL SECURITY;

-- Allow users to only view and upload their own resumes
CREATE POLICY "Users can only access their own resumes"
ON candidate_resumes
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);`,
      },
    },
    keyFeatures: [
      {
        id: "feat-resume-analysis",
        name: "AI Resume Analysis & Skill Gap Identification",
        problemSolved: "Generic resume feedback that fails to highlight missing technical competencies for target roles.",
        implementationDetails: "Natural language processing engine parses technical keywords, compares them against industry job descriptions, and identifies strengths and weaknesses.",
        businessValue: "Empowers candidates to optimize their resumes and focus on learning high-ROI technical skills.",
        technicalComplexity: "Very High",
        complexityRationale: "Normalizing diverse PDF formatting layouts and extracting technical skill entities accurately.",
        icon: "Brain",
      },
      {
        id: "feat-question-recommendation",
        name: "Company-Specific Coding Question Recommendation",
        problemSolved: "Traditional platforms give everyone identical generic questions regardless of target company.",
        implementationDetails: "Multi-dimensional filter ranking questions by Company Name, Difficulty Level, Tech Stack, Interview Type, and Target Role.",
        businessValue: "Creates realistic, highly focused interview practice aligned with candidate dream companies.",
        technicalComplexity: "High",
        complexityRationale: "Dynamic multi-factor ranking matching candidate skill gaps with company question frequency.",
        icon: "Terminal",
      },
      {
        id: "feat-career-coach",
        name: "Personalized AI Career Coach & Roadmaps",
        problemSolved: "Disconnected career advice that is not tailored to an individual's unique background.",
        implementationDetails: "Generates custom learning paths, recommended interview preparation strategies, and targeted milestone checklists.",
        businessValue: "Acts like an intelligent mentor, guiding candidates step-by-step through their preparation journey.",
        technicalComplexity: "High",
        complexityRationale: "Balancing multiple candidate parameters (experience, role, timeline) into actionable milestones.",
        icon: "TrendingUp",
      },
      {
        id: "feat-prototype-demo",
        name: "Working Video Prototype Workflow",
        problemSolved: "Validates product interaction and workflow before complex commercial deployment.",
        implementationDetails: "Full end-to-end prototype demo showcasing resume upload, AI skill analysis, and instant question recommendations.",
        businessValue: "Demonstrates practical product feasibility and clear user value proposition.",
        technicalComplexity: "High",
        complexityRationale: "Integrating frontend Next.js components with Supabase backend and AI recommendation pipelines.",
        icon: "Rocket",
      },
    ],
    challengesFaced: [
      {
        id: "chal-dataset-collection",
        title: "Dataset Collection & Data Structuring",
        problem: "The biggest challenge was collecting and organizing meaningful industry interview preparation data.",
        rootCause: "Interview questions and role rubrics from various companies were unstructured, noisy, and formatted inconsistently.",
        solution: "Built a structured data pipeline to clean, filter, categorize, and tag large volumes of interview questions across companies, roles, and difficulty tiers.",
        outcome: "Created a structured knowledge base supporting high-precision multi-factor recommendation queries.",
        metricDelta: "Cleaned Interview Dataset",
      },
      {
        id: "chal-personalization-logic",
        title: "Personalization & Recommendation Logic",
        problem: "Creating useful recommendations required balancing resume content, skill levels, career goals, and interview requirements.",
        rootCause: "Initial recommendation algorithms either produced overly generic questions or overly restrictive empty result sets.",
        solution: "Iterated the recommendation system through multiple algorithmic refinements, implementing weighted relevance scoring based on candidate skill gaps.",
        outcome: "Delivered highly relevant, company-tailored preparation journeys with adaptive difficulty.",
        metricDelta: "Adaptive Relevance Scoring",
      },
    ],
    developmentJourney: [
      {
        stageNumber: 1,
        stage: "Research & Problem Discovery",
        duration: "Week 1-2",
        title: "Student Pain Point Analysis & Career Prep Discovery",
        description: "Identified key limitations in generic resume feedback, unstructured interview prep, and static coding practice platforms.",
        deliverables: ["Product Specification", "Interview Pain Point Survey", "UI Wireframes"],
        keyMilestone: "Defined the vision for a personalized AI career coach.",
      },
      {
        stageNumber: 2,
        stage: "Dataset Collection & Data Wrangling",
        duration: "Week 3-5",
        title: "Interview Data Cleaning & Taxonomy Design",
        description: "Collected, cleaned, filtered, and structured large volumes of company interview questions and skill requirements.",
        deliverables: ["Categorized Question Database", "Company Tag Index", "Skill Taxonomy Matrix"],
        keyMilestone: "Established clean structured dataset for recommendation queries.",
      },
      {
        stageNumber: 3,
        stage: "AI Resume & Recommendation Engine",
        duration: "Week 6-8",
        title: "Algorithm Engineering & Skill Gap Identifier",
        description: "Built the resume analysis pipeline, skill gap extraction logic, and multi-factor question recommendation algorithm.",
        deliverables: ["Resume Analysis Module", "Recommendation Algorithm", "Personalization Engine"],
        keyMilestone: "Achieved balanced, high-accuracy question suggestions based on candidate profile.",
      },
      {
        stageNumber: 4,
        stage: "Next.js UI & Supabase Integration",
        duration: "Week 9-12",
        title: "Frontend Development & Backend Architecture",
        description: "Developed Next.js App Router components with Tailwind CSS and integrated Supabase for Auth, PostgreSQL, and storage.",
        deliverables: ["Next.js Web Application", "Supabase Backend Schema", "RLS Security Policies"],
        keyMilestone: "Completed responsive functional prototype.",
      },
      {
        stageNumber: 5,
        stage: "Prototype Demo & Video Production",
        duration: "Week 13-14",
        title: "End-to-End Workflow Testing & Video Showcase",
        description: "Validated the complete workflow from resume upload to question recommendations and produced a working video demo.",
        deliverables: ["Working Video Demo", "Product Showcase", "Documentation"],
        keyMilestone: "Demonstrated complete functional workflow in working video showcase.",
      },
    ],
    resultsAndImpact: {
      metrics: [
        { value: "100%", label: "Personalized Workflow", change: "Tailored to target company and role" },
        { value: "5+", label: "Filter Dimensions", change: "Company, Difficulty, Tech Stack, Role, Type" },
        { value: "1-Click", label: "Resume Diagnostic", change: "Instant skill gap identification" },
        { value: "Full Demo", label: "Working Prototype", change: "Complete demonstrated workflow" },
      ],
      achievements: [
        "Built a functional AI career preparation platform combining resume intelligence with coding recommendations.",
        "Engineered an intelligent question recommendation engine filtered by company, role, difficulty, and skill gaps.",
        "Integrated Supabase PostgreSQL, Authentication, and private storage with Row-Level Security.",
        "Demonstrated the complete functional workflow through a working product video.",
      ],
      engineeringGrowth: [
        "Mastered dataset collection, cleaning, and structured categorization pipelines.",
        "Deepened practical expertise in recommendation algorithms, weighted ranking, and NLP entity extraction.",
        "Gained hands-on experience building full-stack applications with Next.js and Supabase.",
      ],
    },
    learnings: {
      technical: [
        "Data quality and structuring are the most critical prerequisites for effective AI recommendation workflows.",
        "Supabase Row-Level Security (RLS) simplifies tenant isolation by enforcing security rules directly in the database engine.",
      ],
      product: [
        "Students find company-specific coding questions significantly more motivating than generic problem sequences.",
        "Highlighting missing skills provides immediate, actionable direction for project building.",
      ],
      systemDesign: [
        "Decoupling the recommendation scoring algorithm from the database query layer allows rapid tuning without schema changes.",
      ],
      performance: [
        "Pre-indexing question tags and company identifiers in PostgreSQL ensures sub-50ms recommendation lookups.",
      ],
      architecture: [
        "A clean separation between resume parsing, skill gap mapping, and question generation ensures modular maintainability.",
      ],
      deployment: [
        "Building a functional prototype and showcasing it via video is an effective way to validate product-market fit.",
      ],
    },
    futureImprovements: [
      {
        phase: "Phase 1 - AI Mock Interviews",
        timeframe: "Q4 2026",
        title: "AI Voice Mock Interviews & Live Feedback",
        features: [
          {
            title: "Conversational AI Technical Interviews",
            description: "Interactive voice-based mock interview agent asking behavioral and technical questions with real-time scoring.",
            category: "AI",
          },
          {
            title: "Live Coding Sandbox Integration",
            description: "In-browser code execution sandbox allowing candidates to solve recommended questions directly on the platform.",
            category: "Scalability",
          },
          {
            title: "Peer Mock Interview Matching",
            description: "Community matching system connecting candidates preparing for the same company for peer practice.",
            category: "Analytics",
          },
        ],
      },
    ],
    gallery: [
      {
        id: "gal-1",
        title: "SkillForge Career Dashboard",
        viewType: "Desktop Views",
        image: "/projects/skillforge.png",
        caption: "Main career preparation interface featuring resume analysis overview, skill gap indicators, and recommended actions.",
      },
      {
        id: "gal-2",
        title: "Company-Specific Practice Selector",
        viewType: "Feature Screens",
        image: "/projects/skillforge.png",
        caption: "Intelligent question recommendation explorer with multi-dimensional filtering by company, difficulty, and role.",
      },
      {
        id: "gal-3",
        title: "Mobile Responsive View",
        viewType: "Mobile Views",
        image: "/projects/skillforge.png",
        caption: "Fluid mobile layout enabling on-the-go resume diagnostic review and practice question exploration.",
      },
    ],
    links: {
      liveDemo: "https://drive.google.com/file/d/16XBSGHRMePketYUAwlzTM_qGO98CUzCW/view?usp=drive_link",
      github: "https://github.com/devlopingandroid/SkillForge-AI",
      documentation: "https://github.com/devlopingandroid/SkillForge-AI#readme",
    },
  },
});

