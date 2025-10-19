function Profile() {
  const user = {
    avatar: "https://cdn.intra.42.fr/users/d37481e1f2416b937440d566e01abf36/medium_oessmiri.jpg",
    fullName: "Ossama Essmiri",
    username: "ossama1337",
    rank: "Level 4 / Rank 84",
    skills: ["C", "Python", "JavaScript", "React", "Node.js"],
    teams: [
      { name: "Team Alpha", role: "Leader" },
      { name: "Team Beta", role: "Member" },
    ],
    achievements: ["Hackathon Winner", "Top 10 Piscine Projects"],
    projectsCompleted: 12,
    bio: "Passionate about algorithms, web development, and AI.",
  };

  return (
    <div className="page profile-page">
      <div className="profile-header-card">
        <img src={user.avatar} alt="Profile" className="profile-avatar" />
        <div className="profile-basic">
          <h1>{user.fullName}</h1>
          <p className="username">@{user.username}</p>
          <p className="rank">{user.rank}</p>
        </div>
      </div>
      <section className="profile-section-card">
        <h2>Skills & Languages</h2>
        <div className="skills-list">
          {user.skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>
      <section className="profile-section-card">
        <h2>Teams & Contributions</h2>
        <div className="teams-list">
          {user.teams.map((team, idx) => (
            <div key={idx} className="team-item">
              <span className="team-name">{team.name}</span>
              <span className={`team-role ${team.role.toLowerCase()}`}>{team.role}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="profile-section-card">
        <h2>Achievements & Bio</h2>
        <div className="achievements-list">
          {user.achievements.map((ach, idx) => (
            <span key={idx} className="achievement-badge">{ach}</span>
          ))}
        </div>
        <p>Projects Completed: <strong>{user.projectsCompleted}</strong></p>
        <p>{user.bio}</p>
      </section>
    </div>
  );
}

export default Profile;
