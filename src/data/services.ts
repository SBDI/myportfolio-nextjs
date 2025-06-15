import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Data Analytics & Business Intelligence",
    icons: [
      "/skills/python.svg",
      "/skills/sql.svg", // Added SQL as it's fundamental for data
      "/skills/powerbi.svg",
      "/skills/tableau.svg",
      "/skills/excel.svg", // Kept Excel for broad data handling relevance
    ],
    shortDescription: "Transform raw data into actionable insights and strategic decisions.",
    description:
      "Leverage advanced data analytics, robust ETL processes, and professional visualizations to uncover key trends, optimize operations, and empower data-driven decision-making.",
  },
  {
    id: 2,
    title: "AI & Generative AI Solutions", // Emphasizing Generative AI from CV
    icons: [
      "/skills/python.svg",
      "/skills/huggingface.svg",
      "/skills/openai.svg", // Assuming you have an OpenAI icon, if not, use a generic AI icon
      "/skills/langchain.svg", // Assuming you have a LangChain icon
      "/skills/tensorflow.svg", // Representing Deep Learning frameworks
      "/skills/scikit-learn.svg", // Representing traditional ML frameworks
    ],
    shortDescription: "Design and deploy intelligent AI and Machine Learning models.",
    description:
      "Develop and integrate custom AI/ML models, including advanced Generative AI and LLM-powered solutions, to automate processes, enhance user experiences, and solve complex business challenges.",
  },
];

export default services;