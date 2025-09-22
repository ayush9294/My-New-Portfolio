import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Java & DSA", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Problem Solving", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <p className="font-medium mb-1">{skill.name}</p>
            <div className="bg-gray-200 rounded-full h-4">
              <motion.div
                className="bg-blue-600 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
