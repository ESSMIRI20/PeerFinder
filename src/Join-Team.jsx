function JoinTeam() {
  return (
    <div className="page join-team-page">
      {/* Page Header */}
      <header className="join-team-header">
        <h1>Join a Team</h1>
        <p className="subtitle">Find your peers and collaborate on projects</p>
      </header>

      {/* Main Form Card */}
      <div className="form-card">
        <form>
          <label>
            Full Name:
            <input type="text" placeholder="Enter your full name" />
          </label>

          <label>
            Skills / Programming Languages:
            <input type="text" placeholder="C, Python, JavaScript..." />
          </label>

          <label>
            Select Team:
            <select>
              <option>Team Alpha</option>
              <option>Team Beta</option>
              <option>Team Gamma</option>
            </select>
          </label>

          <label>
            Short Bio / Experience (optional):
            <textarea placeholder="Tell us about yourself..."></textarea>
          </label>

          <button type="submit">Join Team</button>
        </form>
      </div>

      {/* Optional Team Preview */}
      <section className="team-preview">
        <h2>Current Teams & Members</h2>
        <div className="team-cards">
          <div className="team-card">
            <h3>Team Alpha</h3>
            <p>Members: Alice, Bob, Charlie</p>
          </div>
          <div className="team-card">
            <h3>Team Beta</h3>
            <p>Members: Dave, Eve, Frank</p>
          </div>
          <div className="team-card">
            <h3>Team Gamma</h3>
            <p>Members: Grace, Heidi, Ivan</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinTeam