const projects = [
  {
    title: "LinguaServe",
    description:
      "An AI-powered kiosk that converts spoken English or Tagalog into official barangay documents through speech-to-text, AI interpretation, and document generation.",
    tech: ["ReactJS", "TypeScript", "Laravel"],
    github: "https://github.com/",
    demo: "https://linguaserve-fe.vercel.app/login?fbclid=IwY2xjawS8aWhleHRuA2FlbQIxMABicmlkETFLNlh4T25tdHducnR3YnFDc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHr1XhhdKODpcIljMlThnLLyn8viFLKPB-nbPRt-qL-z6O0KnetgkLNwVnFwl_aem_Wuod-WILZRHMGS7TUZW26w",
  },
  {
    title: "CityBloop",
    description:
      "A creative collaboration and content platform designed for city teams, with live streaming, onboarding, and dashboard tools.",
    tech: ["React", "Next.js", "Design"],
    github: "#",
    demo: "https://citybloop.com/login",
  },
  {
    title: "Student Portal",
    description:
      "A responsive student portal for Bulacan State University with announcements, student access, and a polished interface.",
    tech: ["React", "Vite", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Transportation Analytics",
    description:
      "A transit analytics platform for route monitoring, commuter behavior, and predictive insights.",
    tech: ["React", "Data Viz", "APIs"],
    github: "https://github.com/",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SECTOR 01 — SELECTED WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-labels">
                <span className="project-index">0{index + 1}</span>
                <span className="project-badge">S{index + 1}</span>
              </div>

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

              <div className="project-actions">
                <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noreferrer">
                  Demo
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
