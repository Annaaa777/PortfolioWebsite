import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 py-4 text-center text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      © {new Date().getFullYear()} Anoushka Das | Built with React & Tailwind CSS
    </motion.footer>
  );
};

export default Footer;
