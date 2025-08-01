import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Meal Planner",
    description:
      "A web application that generates personalized meal plans using nutrition data and recipe APIs.",
    tech: ["React", "Flask", "Tailwind CSS", "SQLite"],
    github: "https://github.com/your-username/smart-meal-planner",
  },
  {
    title: "Markov Model Text Generator",
    description:
      "A Java-based Markov Model to generate predictive text with customizable window width and optimized performance.",
    tech: ["Java", "JUnit", "Data Structures"],
  },
  {
    title: "Campus Navigation Web App",
    description:
      "A web app that calculates the shortest path between campus locations using Dijkstra's Algorithm and a custom GraphADT.",
    tech: ["Java", "HTML", "CSS"],
  },
  {
    title: "Statistical Visualization of Planetary Data",
    description:
      "Analyzed NASA exoplanet dataset to identify trends in planet discovery methods, mass, and radius using EDA techniques. Created visualizations with ggplot2 and performed efficient data transformation using dplyr.",
    tech: ["R", "ggplot2", "dplyr"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold">{proj.title}</h3>
            <p className="mt-2 text-gray-300">{proj.description}</p>
            <p className="mt-2 text-sm">
              <strong>Tech:</strong> {proj.tech.join(", ")}
            </p>
            {proj.github && (
              <div className="mt-4">
                <a
                  href={proj.github}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
