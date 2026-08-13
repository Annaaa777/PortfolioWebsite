import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Education",
    text: "Computer Science + Data Science at UW–Madison",
  },
  {
    title: "Interested In",
    text: "Software, AI, data products, analytics & product development",
  },
  {
    title: "Currently",
    text: "Building technical projects, exploring product, and preparing for new-grad opportunities",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-white/5 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-4">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              I like figuring out how technology can solve real problems.
            </h2>
          </div>

          <div>
          <p className="text-lg text-zinc-300 leading-8">
            I'm a Computer Science and Data Science student at the University of
            Wisconsin–Madison. I enjoy working on problems that sit between
            technology, data, and real user needs.
          </p>

          <p className="text-lg text-zinc-400 leading-8 mt-5">
            I like starting with a messy problem, understanding what actually needs
            to be solved, experimenting with different approaches, and turning that
            into something people can use — whether that's a software tool, an
            automated workflow, a dashboard, or an AI-powered product.
          </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
            >
              <p className="text-sm text-zinc-500 mb-2">{item.title}</p>
              <p className="text-zinc-200 leading-6">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;