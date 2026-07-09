const projects = [
  {
    title: "LinguaServe",
    description:
      "An AI-powered information kiosk that converts spoken English or Tagalog into official barangay documents using speech-to-text, AI interpretation, and document generation.",
    tech: ["ReactJS", "TypeScript", "Tailwind CSS", "Laravel"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Student Portal",
    description:
      "A responsive student portal for the Bulacan State University College of Engineering with student information access, announcements, and a modern UI.",
    tech: ["React", "Vite", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Public Transportation Analytics Platform",
    description:
      "A smart transportation analytics platform with route analysis, commuter monitoring, predictive analytics, and data visualization.",
    tech: ["React", "Analytics", "Data Viz"],
    github: "https://github.com/",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work that blends technology, design, and impact</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-top">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="button-group project-actions">
                <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btn-secondary" href={project.demo}>
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;