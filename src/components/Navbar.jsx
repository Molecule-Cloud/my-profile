import { useEffect, useRef, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { BsSun, BsMoon } from 'react-icons/bs';

const links = ['about', 'skills', 'education', 'projects', 'contact'];

function Navbar({ name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    // Build a fresh observer for the current links
    const observer = new IntersectionObserver(
      (entries) => {
        // Track the most-visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {
        // A section counts as "active" when it crosses the
        // middle 20% band of the viewport — feels natural.
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

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
            className={active === link ? 'active' : ''}
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