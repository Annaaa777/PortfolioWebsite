import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 text-center"
    >
      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm Anoushka!
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Computer Science & Data Science student at UW-Madison, passionate about
        data analytics, software development, and creating impactful solutions.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 text-3xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a href="mailto:das57@wisc.edu" className="hover:text-blue-400">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/anoushkadas7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Annaaa777"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Scroll Button */}
      <motion.a
        href="#projects"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        ↓ View My Projects, Skills, and Experience
      </motion.a>
    </section>
  );
};

export default Hero;
