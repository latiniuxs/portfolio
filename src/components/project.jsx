import projects from '../Data/projectsData'
import "./Project.css";

const Project = () => {
  return (
    <section className="project section" id="projects-section">
      <h2 className="section__title">Projects</h2>
      <div className="home__container container grid">
        <div className="project-section">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.preview} 
                alt={project.title}
                className="project-preview"
              />
              <h3>{project.title}</h3>
              <p className= "description"> {project.description}</p>
              <div className="technologies">
                <p>Technologies Used:</p>
                <ul>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--flex"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
