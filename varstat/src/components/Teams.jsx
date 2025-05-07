import { useState } from 'react';
import { db } from '../Backend/firebase';
import { collection, addDoc } from "firebase/firestore";
import Nav from './Navigation'

function AddTeam() {
  const [team, setTeam] = useState({
    teamName: "",
    sport: "",
    coach: "",
    players: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "teams"), {
        team,
        players: team.players.split(',').map(p => p.trim()) // Convert to array
      });
      alert("Team added successfully!");
      setTeam({ name: "", sport: "", coach: "", players: "" });
    } catch (error) {
      alert("Error adding team: " + error.message);
    }
  };

  return (
    <>
    <Nav/>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Team Name"
        value={team.name}
        onChange={(e) => setTeam({ ...team, name: e.target.value })}
        required
      /><br></br>
      <input
        type="text"
        placeholder="Sport"
        value={team.sport}
        onChange={(e) => setTeam({ ...team, sport: e.target.value })}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Coach"
        value={team.coach}
        onChange={(e) => setTeam({ ...team, coach: e.target.value })}
      /> 
      <br />
      <input
        type="text"
        placeholder="Players (comma-separated)"
        value={team.players}
        onChange={(e) => setTeam({ ...team, players: e.target.value })}
      />
      <br />
      <button type="submit">Add Team</button>
    </form>
    </>
  );
}

export default AddTeam;