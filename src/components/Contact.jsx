import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-5">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.035em]">
          Have an interesting idea?
          <span className="block text-zinc-500 mt-2">I'd love to hear it.</span>
        </h2>

        <p className="text-zinc-400 text-lg leading-8 max-w-2xl mx-auto mt-7">
          I'm always happy to connect about technology, product, data, research,
          or new opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <a
            href="mailto:das57@wisc.edu"
            className="group inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-3 rounded-xl font-medium hover:bg-zinc-200 transition"
          >
            Say hello
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/AnoushkaResume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-xl border border-white/15 text-zinc-300 hover:bg-white/5 transition"
          >
            View Resume
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mt-10 text-xl text-zinc-500">
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
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;