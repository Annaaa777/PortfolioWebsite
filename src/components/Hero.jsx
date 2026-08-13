import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden bg-zinc-950"
    >
      {/* Subtle background glow */}
      <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            UW–Madison · CS + Data Science
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.05]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Hi, I'm Anoushka.
            <span className="block text-zinc-500 mt-2">
              I build with data & technology.
            </span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-8 mt-7"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Computer Science & Data Science student exploring the intersection
            of software, AI, analytics, and product. I enjoy turning messy
            problems into useful, thoughtful solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-9"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-3 rounded-xl font-medium hover:bg-zinc-200 transition"
            >
              See my work
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`${process.env.PUBLIC_URL}/AnoushkaResume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-xl border border-white/15 text-zinc-200 hover:bg-white/5 transition"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-5 mt-9 text-xl text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a
              href="mailto:das57@wisc.edu"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/anoushkadas7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Annaaa777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 rounded-[2rem] rotate-3" />

            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Anoushka Das"
              className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-[2rem] grayscale-[10%]"
            />

            <div className="absolute -bottom-5 -left-7 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Building across
              </p>
              <p className="text-sm text-zinc-200 mt-1">
                Product · Data · Software · AI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;