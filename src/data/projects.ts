import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "geo-metallurgical-model",
    title: "Geo-Metallurgical Predictive Model",
    description: "Created a predictive model to assist mine planning by analyzing key geo-metallurgical factors for resource allocation.",
    // Original icon: "/skills/python.svg"
    icon: "/skills/mongodb.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/username/geo-metallurgical-model",
    url: "https://example.com/geo-metallurgical-model",
    tags: ["Python", "Scikit-learn", "Data Analytics"],
  },
  {
    id: "email-categorization",
    title: "Automated Email Categorization",
    description: "Built a Python-based machine learning solution to automate email data extraction and categorization, increasing operational efficiency by 25%.",
    // Original icon: "/skills/python.svg"
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/username/email-categorization",
    url: "https://example.com/email-categorization",
    tags: ["Python", "Flask", "NLP", "Azure"],
  },
  {
    id: "reporting-system",
    title: "Reporting System for Decision Support",
    description: "Designed and implemented a reporting system using Power BI and SQL to support data-driven decision-making processes.",
    // Original icon: "/skills/powerbi.svg"
    icon: "/skills/html.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/username/reporting-system",
    url: "https://example.com/reporting-system",
    tags: ["Power BI", "SQL", "Data Visualization"],
  },
  {
    id: "ai-sales-agent",
    title: "AI Smart Sales Agent",
    description: "The agent assists customers with product inquiries, order placement, order tracking, and personalized recommendations.",
    // Original icon: "/skills/ai.svg"
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    githubUrl: "https://github.com/username/ai-sales-agent",
    url: "https://example.com/ai-sales-agent",
    tags: ["LLMs", "LangChain", "AI Agents"],
  },
];
export default projects;
