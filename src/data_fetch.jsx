import React, { useEffect, useState } from "react";

function FortyTwoProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Paste your access token here (temporarily for testing)
  const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN_HERE";

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://api.intra.42.fr/v2/users/oessmiri", {
          headers: {
            Authorization: `Bearer f0a297d489b4c67756aa3300ae13ed380e60573cbe07bdcfda833f40ea2a8e05`,
          },
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Failed to fetch user");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchUser();
  }, []);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!user) return <p>Loading your 42 profile...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{user.login}</h2>
      <img
        src={user.image.link}
        alt={user.displayname}
        style={{ borderRadius: "50%", width: "120px" }}
      />
      <p>
        <strong>Name:</strong> {user.displayname}
      </p>
      <p>
        <strong>Campus:</strong> {user.campus[0]?.name || "N/A"}
      </p>
      <p>
        <strong>Level:</strong>{" "}
        {user.cursus_users?.[0]?.level?.toFixed(2) || "N/A"}
      </p>
    </div>
  );
}

export default FortyTwoProfile;
