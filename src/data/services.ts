import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Data Analytics & Insights",
    icons: [
      "/skills/python.svg",
      "/skills/powerbi.svg",
      "/skills/tableau.svg",
      "/skills/excel.svg",
      "/skills/r.svg",
    ],
    shortDescription: "Unlock the story in your data with advanced analytics.",
    description:
      "Unlock the story in your data with advanced analytics and professional visualizations. Empower decision-making and drive growth with actionable insights.",
  },
  {
    id: 2,
    title: "AI and Machine Learning Solutions",
    icons: [
      "/skills/tensorflow.svg",
      "/skills/pytorch.svg",
      "/skills/scikit-learn.svg",
      "/skills/python.svg",
      "/skills/huggingface.svg",
    ],
    shortDescription: "Develop and deploy custom AI and machine learning models.",
    description:
      "Develop and deploy custom AI and machine learning models tailored to your business challenges, delivering intelligent solutions with measurable results.",
  },
  {
    id: 3,
    title: "Data Engineering & Automation",
    icons: [
      "/skills/aws.svg",
      "/skills/azure.svg",
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/airflow.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "Streamline your data workflows with scalable pipelines.",
    description:
      "Streamline your data workflows by designing scalable pipelines and integrating cloud-based solutions for enhanced efficiency and reliability.",
  },
];

export default services;
