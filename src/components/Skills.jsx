const skillGroups = [
  {
    title: "Programming",
    items: ["JavaScript", "React", "PHP", "Laravel", "HTML", "CSS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "AutoCAD", "Canva", "Microsoft Office"],
  },
  {
    title: "Strengths",
    items: [
      "Web Development",
      "UI/UX",
      "AI Applications",
      "Database Systems",
      "Technical Design",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools and technologies for modern product development</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;