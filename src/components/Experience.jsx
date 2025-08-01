import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Research Assistant",
    company: "Schloss Visual Reasoning Lab, University of Wisconsin–Madison",
    duration: "Starting September 2025",
    location: "Madison, WI",
    points: [],
  },
  {
    role: "Data Analyst",
    company: "Diyar United Company",
    duration: "June 2024 – August 2024",
    location: "Kuwait City, Kuwait",
    points: [
      "Implemented Microsoft Power BI to streamline reporting processes, reducing manual reporting time by 30% and enabling quicker decision-making for the sales team.",
      "Connected Power BI to various data sources, including Excel, SQL databases, and cloud services, integrating over 500,000 rows of data to provide a unified view of sales performance across regions.",
      "Developed and maintained over 10 interactive dashboards, visualizing key metrics such as revenue growth, customer acquisition rates, and inventory turnover, leading to a 15% increase in data-driven insights for the marketing team.",
      "Analyzed sales data from 20+ markets, identifying trends, outliers, and actionable insights that contributed to a 10% improvement in quarterly revenue by guiding targeted marketing strategies."
    ]
  },
  {
    role: "Environmental Research Intern",
    company: "Green Tech Environmental Engineer and Consultants",
    duration: "July 2022 – August 2022",
    location: "Assam, India",
    points: [
      "Collected and analyzed environmental data as part of field sampling projects.",
      "Organized and digitized technical records, improving accessibility for internal research.",
      "Conducted background research to support environmental assessments and reports."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 text-white">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="space-y-10 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-300">{exp.company}</p>
            </div>
            <p className="text-gray-400 mb-4">{exp.duration} | {exp.location}</p>
            {exp.points.length > 0 && (
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
