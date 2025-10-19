import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page about-page">
      <header className="about-header">
        <h1>About 1337 Team Finder</h1>
        <p className="subtitle">Helping 1337 students connect and collaborate</p>
      </header>
      <section className="about-description">
        <p>
          1337 Team Finder is a platform designed for students at 1337 Rabat to easily find peers,
          form teams, and collaborate on projects. Discover teammates based on skills, interests,
          and project experience.
        </p>
      </section>
      <section className="about-features">
        <h2>Main Features</h2>
        <div className="features-cards">
          <div className="feature-card">Find team members quickly</div>
          <div className="feature-card">Join or create teams</div>
          <div className="feature-card">Track project progress</div>
          <div className="feature-card">Share skills and resources</div>
        </div>
      </section>
      <section className="about-steps">
        <h2>How It Works</h2>
        <ol>
          <li>Create a profile with your skills</li>
          <li>Browse or join existing teams</li>
          <li>Collaborate and track progress</li>
          <li>Share resources or achievements</li>
        </ol>
      </section>
      <section className="about-team">
        <h2>Meet the Creators</h2>
        <div className="team-cards">
          <div className="team-member">
            <img src="https://cdn.intra.42.fr/users/635d63d9bf74ed8fe4f6161f9b1b72ee/medium_aakherra.jpg" alt="aymane" />
            <p><strong>aymane</strong></p>
            <p>Full-stack Developer</p>
          </div>
          <div className="team-member">
            <img src="https://cdn.intra.42.fr/users/d37481e1f2416b937440d566e01abf36/medium_oessmiri.jpg" alt="Ossama" />
            <p><strong>Ossama</strong></p>
            <p>Backend Developer</p>
          </div>
          <div className="team-member">
            <img src="https://cdn.intra.42.fr/users/9e0f1929d3ba00268ca6041ab0ea30f5/medium_anlibrin.jpg" alt="Anas" />
            <p><strong>Anas</strong></p>
            <p>Front-end Developer</p>
          </div>
          
        </div>
      </section>
      <section className="about-cta">
        <h2>Start building your team today!</h2>
        <Link to="/join-team" className="cta-button">Join a Team</Link>
      </section>
    </div>
  );
}

export default About;
