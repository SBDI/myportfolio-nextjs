import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "geo-metallurgical-model",
    title: "Geo-Metallurgical Predictive Model",
    description: "Created a predictive model to assist mine planning by analyzing key geo-metallurgical factors for resource allocation.",
    icon: "/skills/python.svg",
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
    icon: "/skills/python.svg",
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
    icon: "/skills/powerbi.svg",
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
    icon: "/skills/ai.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    githubUrl: "https://github.com/username/ai-sales-agent",
    url: "https://example.com/ai-sales-agent",
    tags: ["LLMs", "LangChain", "AI Agents"],
  },
  {
    id: "rag-system",
    title: "RAG System for Document Q&A",
    description: "Developed a Retrieval-Augmented Generation (RAG) system for document Q&A using LangChain and Hugging Face LLMs, integrating prompt orchestration for enhanced precision.",
    icon: "/skills/ai.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mohamedbouabidi/rag-system-demo", // Placeholder
    url: "https://mohamedbouabidi.com/rag-system-demo", // Placeholder
    tags: ["RAG", "LangChain", "Hugging Face LLMs", "Prompt Engineering", "NLP"],
  },
  {
    id: "intelligent-retail-assistant",
    title: "Intelligent Retail Assistant",
    description: "Developed a retail assistant solution with LangGraph and Llama 3 to help customers navigate products, manage orders, and receive personalized recommendations with human oversight.",
    icon: "/skills/ai.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mohamedbouabidi/intelligent-retail-assistant-llm", // Placeholder
    url: "https://mohamedbouabidi.com/retail-assistant-demo", // Placeholder
    tags: ["LangGraph", "Llama 3", "AI Agents", "Conversational AI", "Retail Tech"],
  },
  {
    id: "insurance-claims-workflow",
    title: "Automated Insurance Claims Workflow",
    description: "Implemented an automated workflow for auto insurance claims using LangChain, Groq LLM, and ChromaDB for policy retrieval, claim parsing, and coverage recommendations.",
    icon: "/skills/ai.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mohamedbouabidi/insurance-claims-workflow-demo", // Placeholder
    url: "https://mohamedbouabidi.com/insurance-claims-workflow-demo", // Placeholder
    tags: ["LangChain", "Groq LLM", "ChromaDB", "Workflow Automation", "NLP"],
  }
];
export default projects;
