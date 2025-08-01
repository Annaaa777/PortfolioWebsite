import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-center text-white">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let’s connect! Feel free to reach out.
      </motion.p>
      <motion.div
        className="flex justify-center gap-6 mb-8 text-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <a href="mailto:das57@wisc.edu" className="hover:text-blue-400 transition-colors">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/anoushkadas7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Annaaa777" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <FaGithub />
        </a>
      </motion.div>
      <motion.a
        href={`${process.env.PUBLIC_URL}/AnoushkaResume.pdf`}
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Contact;
