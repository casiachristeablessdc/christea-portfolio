const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">44</span>
          <span className="brand-name">Christea</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="progress-bar" aria-hidden="true">
        <span className="progress-segment progress-green" />
        <span className="progress-segment progress-yellow" />
        <span className="progress-segment progress-violet" />
      </div>
    </header>
  );
}

export default Navbar;