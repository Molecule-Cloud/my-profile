function About({ profile }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title"> About Me </h2>
      <p className="about-text">{profile.about}</p>
      <ul className="about-info">
        <li><strong>Location: </strong>{profile.location}</li>
        <li><strong>Email: </strong>{profile.email}</li>
        <li><strong>Phone: </strong>{profile.phone}</li>
      </ul>
    </section>
  );
}

export default About;

