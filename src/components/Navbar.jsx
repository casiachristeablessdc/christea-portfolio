const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        ">
          <span className="brand-mark">C</span>
          <span>Christea</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {
    </header>
  );
}

export default Navbar;