import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "I built a responsive portfolio website using React.js to showcase my skills, projects, and experience. It features a modern UI, smooth animations, a projects section, and a contact form. The site is fully responsive and optimized for performance.",
      link: "https://portfolio-website-in-react-eight.vercel.app/",
    },
    {
      id: 2,
      name: "Weather App",
      description:
        "I developed a Weather App using React.js that provides real-time weather updates based on user input. The app fetches data from a weather API and displays temperature, humidity, wind speed, and weather conditions in a clean and responsive UI.",
      link: "https://weather-appin-react.vercel.app/",
    },
    {
      id: 3,
      name: "Todo List",
      description:
        "I built a Todo List App using React.js to help users manage tasks efficiently. The app allows users to add, edit, delete, and mark tasks as completed with a simple and intuitive UI.",
      link: "https://todo-list-appin-react.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
