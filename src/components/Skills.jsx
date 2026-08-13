import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "SQL",
      "R",
      "HTML/CSS",
      "Bash",
    ],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "LangChain",
      "FAISS",
      "Power BI",
      "Machine Learning",
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      "React",
      "React Native",
      "Vue.js",
      "Flask",
      "Tailwind CSS",
      "REST APIs",
      "SQLAlchemy",
      "SQLite",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Azure",
      "Firebase",
      "Linux",
      "Jupyter",
      "Copilot Studio",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-zinc-900/40 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-3">
            Toolkit
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Technologies I work with.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="border border-white/10 bg-zinc-950/50 rounded-2xl p-6"
            >
              <h3 className="font-medium mb-5">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-400 border border-white/10 rounded-lg px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;