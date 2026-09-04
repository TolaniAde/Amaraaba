import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="/" className="logo" onClick={handleLinkClick}>
          <img
            src="/images/logo.png"
            alt="Amaraaba Vocational Training Centre"
            className="logo-image"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`nav-menu ${
            isMenuOpen ? "nav-menu-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={link.name === "Home" ? "active" : ""}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Apply Button */}
        <a
          href="#apply"
          className="apply-btn"
          onClick={handleLinkClick}
        >
          Apply Now
          <span>→</span>
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          className={`menu-toggle ${
            isMenuOpen ? "menu-toggle-open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;