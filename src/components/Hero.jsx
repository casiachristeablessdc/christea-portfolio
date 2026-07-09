function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Computer Engineering Student</p>
          <h1>Christea Bless DC. Casia</h1>
          <p className="hero-subtitle">
            Computer Engineering Student | Web Developer | IT Solutions Professional
          </p>
          <p className="hero-copy">
            I build thoughtful digital experiences at the intersection of engineering,
            software development, and practical business solutions.
          </p>

          <div className="button-group">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="/Christea-Resume.txt" download>
              Download Resume
            </a>
            <a className="btn btn-ghost" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="eyebrow">Currently focused on</p>
          <ul>
            <li>React and Vite web applications</li>
            <li>AI-powered product experiences</li>
            <li>IT solutions and project coordination</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;