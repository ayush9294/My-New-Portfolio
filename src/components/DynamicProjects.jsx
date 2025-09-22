import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Example AI-generated projects
const AI_PROJECTS = [
  {
    name: "AR Space Designer",
    link: "http://localhost:4028/",
    description:
      "Leverages AI & AR to let users visualize interior spaces in real-time, automatically suggesting optimal layouts and color schemes.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Smart Blog AI",
    link: "#",
    description:
      "A blog platform enhanced with AI content recommendations, improving engagement and readability dynamically.",
    color: "from-green-400 to-blue-500",
  },
  {
    name: "Portfolio Assistant",
    link: "#",
    description:
      "AI-powered portfolio helper that analyzes your skills and generates tailored project suggestions.",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function DynamicProjects() {
  const [projects, setProjects] = useState([]);

  // Simulate AI fetching
  useEffect(() => {
    setTimeout(() => setProjects(AI_PROJECTS), 500); // delay for animation effect
  }, []);

  return (
    <section id="ai-projects" className="px-6 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        AI-Powered Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
  key={i}
  className={`p-6 bg-gradient-to-r ${proj.color} text-white shadow-lg rounded-xl hover:shadow-2xl transition relative group`}
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.2 }}
>
  <h3 className="font-bold text-xl mb-2">{proj.name}</h3>
  <p className="mb-3">{proj.description}</p>
  <a
    href={proj.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
  >
    Visit Project
  </a>

  {/* Tooltip */}
  <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 w-64 p-2 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
    AI Suggestion: Add more interactivity and user personalization for better engagement.
  </span>
</motion.div>

        ))}
      </div>
    </section>
  );
}
