import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Task Tracker Application",
    description: "A simple task tracker application for managing to-do items.",
    features: [
      "Add, update, and delete tasks.",
      "Mark tasks as complete or incomplete.",
      "User-friendly interface with React state management.",
    ],
    skills: [
      "React components",
      "State management",
      "Component lifecycle",
      "Handling forms",
    ],
    github: "https://github.com/mightyelf1233/CODSOFT/tree/main/Task%20Tracker",
    demo: "https://your-demo-link.com/task-tracker",
  },
  {
    name: "Product Catalog",
    description: "A product catalog for an e-commerce website.",
    features: [
      "Display product listings including images, names, and prices.",
      "Shopping cart component to add and remove products.",
      "Track cart items and calculate totals.",
    ],
    skills: [
      "React components",
      "State management",
      "Basic e-commerce functionality",
    ],
    github:
      "https://github.com/mightyelf1233/CODSOFT/tree/main/Product%20Catalog",
    demo: "https://your-demo-link.com/product-catalog",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase your skills and projects.",
    features: [
      "Home page with introduction.",
      "Project showcase section.",
      "About me section.",
      "Contact form.",
    ],
    skills: ["React components", "Responsive design", "CSS styling"],
    github: "https://github.com/yourusername/portfolio-website",
    demo: "https://your-demo-link.com/portfolio-website",
  },
];

function Projects() {
  return (
    <div className="section projects">
      <h2>Project Showcase</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>
          <p>
            <strong>Description:</strong> {project.description}
          </p>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p>
            <strong>Skills Demonstrated:</strong>
          </p>
          <ul>
            {project.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>{" "}
            |
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              {" "}
              Live Demo
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
