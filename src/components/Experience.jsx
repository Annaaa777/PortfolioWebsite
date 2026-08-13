import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Organic Valley",
    duration: "June 2026 – August 2026",
    location: "Cashton, WI",
    description:
      "Worked across workforce analytics, automation, geospatial data, and internal AI projects supporting HR and Total Rewards.",
    points: [
      "Built automated workforce analytics workflows in Python and Power BI to clean and analyze 800+ employee records and track turnover, retention, headcount, and workforce trends for HR leadership.",
      "Engineered a geospatial eligibility workflow using Azure Maps APIs, address matching, and business-rule evaluation to automate remote-work policy audits and reduce manual review.",
      "Designed an AI-powered employee support agent using Microsoft Copilot Studio, Power Automate, and SharePoint to improve benefits and Total Rewards knowledge retrieval.",
    ],
  },
  {
    role: "Software Developer / Research Assistant",
    company: "Schloss Visual Reasoning Lab · UW–Madison",
    duration: "August 2024 – June 2025",
    location: "Madison, WI",
    description:
      "Built software and computational tools for research at the intersection of visualization, perception, and artificial intelligence.",
    points: [
      "Built a full-stack research application using Flask, Vue.js, and REST APIs to automate color palette generation and evaluation for visualization research.",
      "Developed optimization algorithms, backend validation pipelines, and interactive visualizations to improve the accuracy and usability of researcher workflows.",
      "Containerized and deployed the application using Docker and Firebase, enabling reliable access and collaboration across the research team.",
    ],
  },
  {
    role: "Machine Learning Research Fellow",
    company: "Informatics Skunkworks · UW–Madison",
    duration: "Summer 2024",
    location: "Madison, WI",
    description:
      "Applied machine learning techniques to semiconductor property prediction and model evaluation.",
    points: [
      "Developed machine learning workflows using Python, scikit-learn, and MAST-ML, including feature engineering, scaling, and model evaluation.",
      "Compared regression, random forest, LASSO, and neural network models using K-fold cross-validation, grid search, and hyperparameter optimization.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Diyar United Company",
    duration: "June 2024 – August 2024",
    location: "Kuwait City, Kuwait",
    description:
      "Used analytics and visualization to turn large business datasets into actionable insights across multiple markets.",
    points: [
      "Integrated and analyzed 500K+ records from SQL, Excel, and cloud sources to build 10+ Power BI dashboards across sales and business performance, reducing reporting effort by 30%.",
      "Performed analysis across 20+ markets to identify revenue drivers and trends associated with a 10% improvement in quarterly revenue.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-3">
            Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Where I've learned by doing.
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl leading-7">
            My work has taken me across analytics, software development,
            machine learning, automation, and applied AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="border-l border-white/10 ml-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-10 pb-14 last:pb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-indigo-400 ring-4 ring-zinc-950" />

              {/* Job Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium">
                    {experience.role}
                  </h3>

                  <p className="text-indigo-300 mt-1">
                    {experience.company}
                  </p>
                </div>

                <div className="md:text-right shrink-0">
                  <p className="text-sm text-zinc-400">
                    {experience.duration}
                  </p>

                  <p className="text-sm text-zinc-600 mt-1">
                    {experience.location}
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-zinc-400 leading-7 mt-5 max-w-4xl">
                {experience.description}
              </p>

              {/* Bullets */}
              <ul className="mt-5 space-y-3 max-w-5xl">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm md:text-base text-zinc-400 leading-7"
                  >
                    <span className="text-zinc-600 mt-[1px]">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;