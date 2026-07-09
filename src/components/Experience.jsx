function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Professional experience in IT solutions and client engagement</h2>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <p className="eyebrow">Internship</p>
              <h3>IT Sales Intern</h3>
              <p className="muted">iCube Digital Solutions Inc. • Makati City</p>
            </div>
            <span className="pill">2024</span>
          </div>

          <ul className="experience-list">
            <li>Assisted in client engagement and technology solution presentations.</li>
            <li>Supported project coordination and customer requirement discussions.</li>
            <li>Contributed to the successful completion of 12 company projects.</li>
            <li>Contributed to projects generating approximately ₱2.5 million in revenue.</li>
            <li>Developed experience in IT sales, solution consulting, CRM, and business development.</li>
          </ul>

          <div className="highlights-grid">
            <div className="highlight-card">
              <strong>12</strong>
              <span>successful projects</span>
            </div>
            <div className="highlight-card">
              <strong>₱2.5M</strong>
              <span>revenue contribution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;