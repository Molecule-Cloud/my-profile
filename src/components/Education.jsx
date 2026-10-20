function Education({ education }) {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item) => (
          <article key={item.school} className="edu-card">
            <h3>{item.school}</h3>
            <p className="edu-program">{item.program}</p>
            <p className="edu-period">{item.period}</p>
            {item.note && <p className="edu-note">{item.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;