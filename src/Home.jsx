import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">
        <h1>Find Your Team, Build Your Skills</h1>
        <p>Connect with 1337 students, create or join teams, and collaborate on projects.</p>
        <div className="hero-buttons">
          <Link to="/join-team" className="primary-btn">Join a Team</Link>
          <Link to="/create-team" className="secondary-btn">Create a Team</Link>
        </div>
      </section>
      <section className="features-section">
        <h2>Main Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Find Team Members</h3>
            <p>Search by skills, interests, or experience.</p>
          </div>
          <div className="feature-card">
            <h3>Create Your Team</h3>
            <p>Start a new team for a project.</p>
          </div>
          <div className="feature-card">
            <h3>Track Projects</h3>
            <p>Manage your tasks and team progress.</p>
          </div>
          <div className="feature-card">
            <h3>Share Skills & Resources</h3>
            <p>Upload or browse resources.</p>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>2. Join or Create Teams</h3>
          </div>
          <div className="step">
            <h3>3. Collaborate & Track Projects</h3>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="#">Contact</Link>
          <Link to="#">GitHub</Link>
          <Link to="#">Terms</Link>
        </div>
        <p>&copy; 2025 1337 Team Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
