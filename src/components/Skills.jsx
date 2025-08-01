// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaGit,
  FaGithub,
  FaDatabase,
  FaChartBar,
  FaTerminal,
  FaCode,
  FaServer,
  FaEdit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFlask,
  SiIntellijidea,
  SiEclipseide,
  SiR,
  SiGnuemacs,
} from "react-icons/si";

const skills = {
  "Programming & Scripting": [
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "R", icon: <SiR className="text-blue-600" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Bash", icon: <FaTerminal className="text-green-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Assembly", icon: <FaCode className="text-gray-400" /> },
  ],
  "Frameworks & Libraries": [
    { name: "Pandas", icon: <SiPandas className="text-blue-600" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
    { name: "ggplot2", icon: <SiR className="text-purple-500" /> },
    { name: "dplyr", icon: <SiR className="text-purple-400" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ],
  "Tools & Technologies": [
    { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
    { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-500" /> },
    { name: "SQLAlchemy", icon: <FaDatabase className="text-green-500" /> },
    { name: "Git", icon: <FaGit className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "VS Code", icon: <FaEdit className="text-blue-400" /> },
    { name: "REST APIs", icon: <FaServer className="text-green-500" /> },
    { name: "IntelliJ", icon: <SiIntellijidea className="text-red-500" /> },
    { name: "Eclipse", icon: <SiEclipseide className="text-purple-600" /> },
    { name: "Emacs", icon: <SiGnuemacs className="text-purple-500" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.keys(skills).map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {category}
            </h3>
            <ul className="space-y-3 text-gray-300">
              {skills[category].map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;