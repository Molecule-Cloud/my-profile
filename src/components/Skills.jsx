import { useEffect, useState } from 'react';

function Skills({ skills }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Wait one frame so the browser paints width:0 first,
    // then flip to the real widths — transition runs smoothly.
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: animate ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;