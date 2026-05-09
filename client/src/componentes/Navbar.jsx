import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Rajpal.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button onClick={toggleTheme}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4">
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/skills">Skills</Link><br/>
          <Link to="/projects">Projects</Link><br/>
          <Link to="/contact">Contact</Link><br/>
          <Link to="/resume">Resume</Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;