import { useState } from 'react';

function Projects({ projects }) {
  const [filter, setFilter] = useState('All');

  // Build the list of filter options from the data itself,
  // so we never have to update two arrays when we add a project.
  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tech))];

  // Derived list — recalculated on every render, no state needed.
  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="filter-bar">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={tag === filter ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => (
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

      {visible.length === 0 && (
        <p className="empty-msg">No projects match this filter.</p>
      )}
    </section>
  );
}

export default Projects;