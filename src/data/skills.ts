import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Machine Learning",
    items: [
      {
        title: "TensorFlow",
        level: SkillLevel.Expert,
        icon: "/skills/tensorflow.svg",
      },
      {
        title: "PyTorch",
        level: SkillLevel.Expert,
        icon: "/skills/pytorch.svg",
      },
      {
        title: "Scikit-learn",
        level: SkillLevel.Expert,
        icon: "/skills/scikit-learn.svg",
      },
      {
        title: "Deep Learning",
        level: SkillLevel.Intermediate,
        icon: "/skills/deep-learning.svg",
      },
    ],
  },
  {
    title: "Data Analysis",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
      {
        title: "R",
        level: SkillLevel.Intermediate,
        icon: "/skills/r.svg",
      },
      {
        title: "SQL",
        level: SkillLevel.Expert,
        icon: "/skills/sql.svg",
      },
      {
        title: "Pandas",
        level: SkillLevel.Expert,
        icon: "/skills/pandas.svg",
      },
      {
        title: "NumPy",
        level: SkillLevel.Expert,
        icon: "/skills/numpy.svg",
      },
    ],
  },
  {
    title: "Visualization",
    items: [
      {
        title: "Tableau",
        level: SkillLevel.Intermediate,
        icon: "/skills/tableau.svg",
      },
      {
        title: "Power BI",
        level: SkillLevel.Intermediate,
        icon: "/skills/powerbi.svg",
      },
      {
        title: "Matplotlib",
        level: SkillLevel.Expert,
        icon: "/skills/matplotlib.svg",
      },
      {
        title: "Seaborn",
        level: SkillLevel.Intermediate,
        icon: "/skills/seaborn.svg",
      },
    ],
  },
  {
    title: "Cloud & Big Data",
    items: [
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Google Cloud",
        level: SkillLevel.Intermediate,
        icon: "/skills/google-cloud.svg",
      },
      {
        title: "Hadoop",
        level: SkillLevel.Beginner,
        icon: "/skills/hadoop.svg",
      },
      {
        title: "Spark",
        level: SkillLevel.Intermediate,
        icon: "/skills/spark.svg",
      },
    ],
  },
];

export default skills;
