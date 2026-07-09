const contactItems = [
  {
    label: "Email",
    value: "christea.casial@gmail.com",
    href: "mailto:christea.casial@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/casiachristeablessdc",
    href: "https://github.com/casiachristeablessdc",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com",
    href: "https://www.linkedin.com/",
  },
];

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something meaningful together</h2>
        </div>

        <div className="contact-card">
          <p>
            I am open to internship and employment opportunities where I can
            contribute through thoughtful development and collaborative
            problem-solving.
          </p>

          <div className="contact-list">
            {contactItems.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;