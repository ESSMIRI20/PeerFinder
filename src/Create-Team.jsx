import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTeam() {
  const navigate = useNavigate();
  
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [isLeader, setIsLeader] = useState(true);
  const [maxMembers, setMaxMembers] = useState("");
  const [skills, setSkills] = useState([]);
  const [visibility, setVisibility] = useState("Public");
  const [error, setError] = useState("");

  const existingTeams = ["Team Alpha", "Team Beta"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!teamName.trim()) {
      setError("Team name cannot be empty.");
      return;
    }
    if (existingTeams.includes(teamName.trim())) {
      setError("Team name must be unique.");
      return;
    }
    const newTeam = {
      name: teamName,
      description: teamDescription,
      leader: isLeader ? "You (Leader)" : "Co-Leader",
      maxMembers: maxMembers || "No limit",
      skills,
      visibility,
    };

    console.log("Team created:", newTeam);
    setError("");
    navigate("/join-team");
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value.split(",").map((s) => s.trim()));
  };

  return (
    <div className="page create-team-page">
      <h1>Create a New Team</h1>
      <form className="create-team-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        <label>
          Team Name:
          <input
            type="text"
            placeholder="Team Alpha"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </label>

        <label>
          Team Description (optional):
          <textarea
            placeholder="Focused on C Piscine projects and algorithms"
            value={teamDescription}
            onChange={(e) => setTeamDescription(e.target.value)}
          ></textarea>
        </label>

        <label>
          Team Leader:
          <select value={isLeader ? "Leader" : "Co-Leader"} onChange={(e) => setIsLeader(e.target.value === "Leader")}>
            <option>Leader</option>
            <option>Co-Leader</option>
          </select>
        </label>

        <label>
          Maximum Members (optional):
          <input
            type="number"
            placeholder="e.g. 5"
            value={maxMembers}
            onChange={(e) => setMaxMembers(e.target.value)}
            min={1}
          />
        </label>

        <label>
          Skills / Focus Area (comma separated):
          <input
            type="text"
            placeholder="C, Python, JavaScript, Web Dev"
            value={skills.join(", ")}
            onChange={handleSkillsChange}
          />
        </label>

        <label>
          Visibility / Status:
          <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option>Public</option>
            <option>Private</option>
          </select>
        </label>

        <button type="submit">Create Team</button>
      </form>
    </div>
  );
}

export default CreateTeam
