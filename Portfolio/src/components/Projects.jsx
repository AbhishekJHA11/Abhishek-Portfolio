import React from "react";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A responsive portfolio website using React.js.",
    link: "https://portfolio-website-in-react-eight.vercel.app/",
  },
  {
    id: 2,
    name: "Weather App",
    description: "A React app providing real-time weather updates.",
    link: "https://weather-appin-react.vercel.app/",
  },
  {
    id: 3,
    name: "Todo List",
    description: "A React.js app to manage daily tasks.",
    link: "https://todo-list-appin-react.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
