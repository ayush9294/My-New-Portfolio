import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import DynamicProjects from "./components/DynamicProjects";
import Contact from "./components/Contact";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Enable dark mode class
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Skills data
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Java & DSA", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Problem Solving", level: 85 },
  ];

  // Static projects
  const staticProjects = [
    { name: "Blog Website", desc: "A simple blog platform built using HTML, CSS, and JavaScript.", link: "#" },
    { name: "Portfolio Website", desc: "A responsive portfolio showcasing my skills and projects.", link: "#" },
    { name: "AR Space Designer", desc: "AI & AR-powered interactive interior design tool for modern spaces.", link: "http://localhost:4028/" },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">Aayush Portfolio</h1>
          <ul className="flex space-x-6 font-medium items-center">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1 border rounded text-sm dark:text-white"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

     {/* Hero Section */}
<header
  id="hero"
  className="h-screen flex flex-col justify-center items-center text-center px-6"
>
  {/* Profile Photo */}
  <div className="relative">
  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-3xl animate-pulse"></div>
  <img
    src="profile.jpg" 
    alt="Aayush Chaturvedi"
    className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl object-cover mb-6 
               border-4 border-blue-500 dark:border-blue-400 hover:scale-105 transition"
  />
</div>


  {/* Name */}
  <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up">
    Hi, I’m <span className="text-blue-600 dark:text-blue-400">Aayush</span>
  </h1>

  {/* Tagline */}
  <p className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300 fade-in-up delay-200">
    Aspiring Software Developer | React, Java, DSA Enthusiast
  </p>

  {/* Call to Action */}
  <a
    href="#contact"
    className="mt-6 btn btn-primary fade-in-up delay-400"
  >
    Contact Me
  </a>
</header>

      {/* About Section */}
      <section id="about" className="flex flex-col items-center justify-center px-6 text-center bg-white dark:bg-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">About Me</h2>
        <motion.p
          className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-6 fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Aayush Chaturvedi</span>,{" "}
          
          <Typewriter
            words={[
              "an aspiring Software Developer.",
              "currently pursuing B.Tech in Computer Science.",
              "building interactive React & AI applications."
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
          <br /><br />
          I specialize in <strong>React, Java, JavaScript, HTML, CSS, and DSA</strong> and enjoy building modern, interactive web applications.  
          <br /><br />
          <strong>AR Space Designer</strong> is an AI & AR-powered project where users can design and visualize spaces interactively.
        </motion.p>

        <div className="flex gap-4">
          {/* <a href="https://drive.google.com/file/d/1nih1ekERDr2Gys3pVqwvmXPMYaUs72CZ/view?usp=drive_link" download className="btn btn-primary flex items-center gap-2">
            📥 Download Resume
          </a> */}
          <a href="https://docs.google.com/document/d/1JVdhqdGCa2YiMEaVF7GVegkWalosLvjd/edit?usp=sharing&ouid=117341703969123481043&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
            👀 View Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="px-6 mb-12">
  <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
    Skills
  </h2>

  <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
    {skills.map((skill, i) => (
      <div
        key={i}
        className="px-4 py-2 border border-blue-500 rounded-lg
                   text-blue-600 font-medium hover:bg-blue-500
                   hover:text-white transition"
      >
        {skill.name}
      </div>
    ))}
  </div>
</section>


      {/* Static Projects Section */}
      <section id="projects" className="px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {staticProjects.map((proj, i) => (
            <motion.div
              key={i}
              className={`p-6 ${proj.name === "AR Space Designer" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-white dark:bg-gray-800"} shadow-lg rounded-xl hover:shadow-2xl transition relative group`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-xl mb-2">{proj.name}</h3>
              <p className={`mb-3 ${proj.name === "AR Space Designer" ? "" : "text-gray-700 dark:text-gray-300"}`}>{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 rounded-lg font-medium ${proj.name === "AR Space Designer" ? "bg-white text-purple-700 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"} transition`}
              >
                Visit Project
              </a>

              {/* Tooltip for AI suggestion */}
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 w-64 p-2 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                AI Suggestion: Enhance interactivity and personalize user experience.
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI-Powered Dynamic Projects */}
      <DynamicProjects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-4 text-center mt-12">
        <p>© {new Date().getFullYear()} Aayush Chaturvedi. All rights reserved.</p>
      </footer>
    </div>
  );
}
