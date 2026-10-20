import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { BsSun, BsMoon } from 'react-icons/bs';

const links = ['about', 'skills', 'projects', 'contact'];

function Navbar({ name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">{name.charAt(0)}</a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <MdClose /> : <MdMenu />}
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
        <button
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? <BsSun /> : <BsMoon />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;