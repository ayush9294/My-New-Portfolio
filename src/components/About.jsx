import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
      <motion.p className="max-w-2xl text-lg text-gray-600 mb-6 fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="font-semibold text-blue-600">Aayush Chaturvedi</span>, 
        an aspiring <strong>Software Developer</strong> currently pursuing my 
        <strong> B.Tech in Computer Science</strong>.
        <br /><br />
        I specialize in <strong>React, Java, JavaScript, HTML, CSS, and DSA</strong>, 
        building engaging web applications.
        <br /><br />
        <strong>AR Space Designer</strong> is an AI & AR-powered project where users can design and visualize spaces interactively.
      </motion.p>

      <div className="flex gap-4">
        <a href="/resume.pdf" download className="btn btn-primary flex items-center gap-2">
          📥 Download Resume
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
          👀 View Resume
        </a>
      </div>
    </section>
  );
}
