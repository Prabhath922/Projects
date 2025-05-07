import { useState } from 'react';
import { db } from '../Backend/firebase';
import { collection, addDoc } from "firebase/firestore";
import Nav from './Navigation'


function AddSponsor() {
  const [sponsors, setSponsor] = useState({
    sponsorName: "",
    email: "",
    location: "",
    playersAffiliated: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "sponsors"), {
        sponsors,
        playersAffiliated: sponsors.playersAffiliated.split(',').map(p => p.trim()) // Convert to array
      });
      alert("Team added successfully!");
      setSponsor({ sponsorName: "", email: "", location:"",playersAffiliated:"" });
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
        placeholder="Sponsor Name"
        value={sponsors.sponsorName}
        onChange={(e) => setSponsor({ ...sponsors, sponsorName: e.target.value })}
        required
      /><br></br>
      <input
        type="text"
        placeholder="Email"
        value={sponsors.email}
        onChange={(e) => setSponsor({ ...sponsors, email: e.target.value })}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Location"
        value={sponsors.location}
        onChange={(e) => setSponsor({ ...sponsors, location: e.target.value })}
      /> 
      <br />
      <input
        type="text"
        placeholder="Players Affliated"
        value={sponsors.playersAffiliated}
        onChange={(e) => setSponsor({ ...sponsors, playersAffiliated: e.target.value })}
      />
      <br />
      <button type="submit">Add Sponsor</button>
    </form>
    </>
  );
}

export default AddSponsor;