import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "SoundScape",
    subtitle: "AI-Powered Navigation + Adaptive Music",
    description:
      "A cross-platform mobile app that combines Spotify, weather, traffic, navigation, and AI to generate context-aware playlists that adapt to a user's trip and preferences.",
    tech: [
      "React Native",
      "GPT-4o-mini",
      "Spotify API",
      "Mapbox",
      "REST APIs",
    ],
  },
  {
    title: "RAG Evaluation Harness",
    subtitle: "Retrieval-Augmented Generation + Evaluation",
    description:
      "Built a retrieval-augmented generation pipeline for document question answering and an automated evaluation framework to compare retrieval quality across embedding models and chunking strategies.",
    tech: ["Python", "LangChain", "FAISS", "OpenAI API", "Flask"],
  },
  {
    title: "Mini Container Runtime",
    subtitle: "Linux Systems + Process Isolation",
    description:
      "Built a lightweight Linux container runtime in C using namespaces, chroot, seccomp, and cgroups to create isolated execution environments with filesystem virtualization and syscall filtering.",
    tech: ["C", "Linux", "Docker", "Namespaces", "seccomp"],
  },
  {
    title: "Smart Meal Planner",
    subtitle: "Full-Stack Recipe + Nutrition App",
    description:
      "A full-stack web application that recommends recipes and generates personalized meal ideas based on available ingredients, nutrition data, and user preferences.",
    tech: ["React", "Flask", "Python", "SQLite", "Tailwind CSS"],
    github: "https://github.com/Annaaa777/SmartMealPlanner",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-zinc-900/40 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-3">
            Selected Work
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Things I've built & explored.
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl leading-7">
            A mix of software, AI, data, and systems projects — from
            context-aware music recommendations to retrieval pipelines and
            low-level Linux containers.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative border border-white/10 rounded-2xl p-7 bg-zinc-950/60 hover:border-white/20 hover:bg-zinc-950 transition-all duration-300"
            >
              <div className="flex justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-indigo-400 mb-2">
                    {project.subtitle}
                  </p>

                  <h3 className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-zinc-500 hover:text-white transition text-xl"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              <p className="text-zinc-400 leading-7 mb-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 bg-white/[0.02]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-8">
          <a
            href="https://github.com/Annaaa777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
          >
            More on GitHub
            <FiExternalLink className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;