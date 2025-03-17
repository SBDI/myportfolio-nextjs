import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Gen AI Data Scientist",
    company: "Freelance",
    startDate: "June 2024",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Developing AI-powered solutions for clients",
      "Specializing in generative AI applications",
    ],
  },
  {
    designation: "Consultant Data Scientist",
    company: "Berexia Consulting",
    startDate: "Dec 2023",
    endDate: "May 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Provided data science consulting services",
      "Implemented machine learning solutions",
    ],
  },
  {
    designation: "Data Scientist",
    company: "Groupe Managem",
    startDate: "Oct 2021",
    endDate: "Dec 2023",
    isCurrentJob: false,
    location: "Morocco",
    description: [
      "Created predictive models for mining operations",
      "Developed data-driven decision support systems",
    ],
  },
];

export default experiences;
