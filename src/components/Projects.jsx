function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;