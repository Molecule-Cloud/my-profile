function Footer({ name, socials }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="socials">
        {socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <p>© {year} {name}. Built with React.</p>
    </footer>
  );
}

export default Footer;