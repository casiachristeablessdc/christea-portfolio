function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-meta">
            <p className="eyebrow">POSITION — P1</p>
            <span className="hero-role">FULL-STACK ENGINEER</span>
          </div>

          <h1>
            <span className="hero-name-light">Christea</span>
            <span className="hero-name-accent">Casia</span>
          </h1>

          <p className="hero-description">
            I build responsive digital experiences and modern web systems with
            a focus on speed, clarity, and strong product intuition.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="/Christea-Resume.txt" download>
              Download Resume
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <p className="eyebrow">PERFORMANCE METRICS</p>

          <div className="stats-grid">
            <div className="stat-item">
              <strong>12+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-item">
              <strong>₱2.5M</strong>
              <span>Impact</span>
            </div>

            <div className="stat-item">
              <strong>3</strong>
              <span>Systems</span>
            </div>
          </div>

          <ul>
            <li>React and Vite web applications</li>
            <li>AI-powered product experiences</li>
            <li>IT solutions and project coordination</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;