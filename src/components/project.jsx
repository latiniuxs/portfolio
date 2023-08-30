import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Project 1",
    description: "This is the first project description.",
  },
  {
    title: "Project 2",
    description: "This is the second project description.",
  },
  {
    title: "Project 3",
    description: "This is the third project description.",
  },
  {
    title: "Project 4",
    description: "This is the fourth project description.",
  },
];

const Project = () => {
  return (
    <section className="project section" id="projects-section">
        <h2 className="section__title"> Projects</h2>
      <div className="home__container container grid">
        <div className="project-section">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
