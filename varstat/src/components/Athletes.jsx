import { useState } from 'react';
import { db } from '../Backend/firebase';
import { collection, addDoc } from "firebase/firestore";

function Addathlete() {
  const [athlete, setathlete] = useState({
    athleteName: "",
    sport: "",
    teamName: "",
    playerStats: [""]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "athletes"), {
        athlete,
        playerStats: athlete.playerStats.split(',').map(p => p.trim()) 
      });
      alert("athlete added successfully!");
      setathlete({ athleteName: "", sport: "", teamName: "", playerStats: "" });
    } catch (error) {
      alert("Error adding athlete: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="athlete Name"
        value={athlete.athleteName}
        onChange={(e) => setathlete({ ...athlete, athleteName: e.target.value })}
        required
      /><br></br>
      <input
        type="text"
        placeholder="Sport"
        value={athlete.sport}
        onChange={(e) => setathlete({ ...athlete, sport: e.target.value })}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Team Name"
        value={athlete.teamName}
        onChange={(e) => setathlete({ ...athlete, teamName: e.target.value })}
      /> 
      <br />
      <input
        type="text"
        placeholder="Players Stats"
        value={athlete.playerStats}
        onChange={(e) => setathlete({ ...athlete, playerStats: e.target.value })}
      />
      <br />
      <button type="Submit">Add athlete</button>
    </form>
  );
}

export default Addathlete;