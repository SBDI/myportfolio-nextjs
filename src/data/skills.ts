import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Machine Learning",
    items: [
      {
        title: "TensorFlow",
        level: SkillLevel.Expert,
        // icon: "/skills/tensorflow.svg",
        icon: "/skills/nodejs.svg",
      },
      {
        title: "PyTorch",
        level: SkillLevel.Expert,
        // icon: "/skills/pytorch.svg",
        icon: "/skills/react.svg",
      },
      {
        title: "Scikit-learn",
        level: SkillLevel.Expert,
        // icon: "/skills/scikit-learn.svg",
        icon: "/skills/javascript.svg",
      },
      {
        title: "Deep Learning",
        level: SkillLevel.Intermediate,
        // icon: "/skills/deep-learning.svg",
        icon: "/skills/typescript.svg",
      },
    ],
  },
  {
    title: "Data Analysis",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        // icon: "/skills/python.svg",
        icon: "/skills/mongodb.svg",
      },
      {
        title: "R",
        level: SkillLevel.Intermediate,
        // icon: "/skills/r.svg",
        icon: "/skills/aws.svg",
      },
      {
        title: "SQL",
        level: SkillLevel.Expert,
        // icon: "/skills/sql.svg",
        icon: "/skills/mysql.svg",
      },
      {
        title: "Pandas",
        level: SkillLevel.Expert,
        // icon: "/skills/pandas.svg",
        icon: "/skills/git.svg",
      },
      {
        title: "NumPy",
        level: SkillLevel.Expert,
        // icon: "/skills/numpy.svg",
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Visualization",
    items: [
      {
        title: "Tableau",
        level: SkillLevel.Intermediate,
        // icon: "/skills/tableau.svg",
        icon: "/skills/css.svg",
      },
      {
        title: "Power BI",
        level: SkillLevel.Intermediate,
        // icon: "/skills/powerbi.svg",
        icon: "/skills/html.svg",
      },
      {
        title: "Matplotlib",
        level: SkillLevel.Expert,
        // icon: "/skills/matplotlib.svg",
        icon: "/skills/dart.svg",
      },
      {
        title: "Seaborn",
        level: SkillLevel.Intermediate,
        // icon: "/skills/seaborn.svg",
        icon: "/skills/sass.svg",
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
        // icon: "/skills/google-cloud.svg",
        icon: "/skills/firebase.svg",
      },
      {
        title: "Hadoop",
        level: SkillLevel.Beginner,
        // icon: "/skills/hadoop.svg",
        icon: "/skills/redis.svg",
      },
      {
        title: "Spark",
        level: SkillLevel.Intermediate,
        // icon: "/skills/spark.svg",
        icon: "/skills/docker.svg",
      },
    ],
  },
];

export default skills;
