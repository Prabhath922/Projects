import { useEffect, useState } from 'react';
import { db } from '../Backend/firebase';
import { collection, addDoc, getDocs} from "firebase/firestore";
import Nav from './Navigation'
import { auth } from '../Backend/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '../Styles/Athlete.css'

function Addathlete() {
  const [athlete, setAthlete] = useState({
    athleteName: "",
    sport: "",
    teamName: "",
    playerStats: ""
  });

  const[user,setUser]=useState(null);
  const [athletes, setAthletes] = useState([]);

  useEffect(()=>{
    const unsub =onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
    return ()=> unsub();
  },[]);

useEffect(()=>{
  const fetchAthletes = async()=>{
    const snapshot= await getDocs(collection(db,'athletes'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
    setAthletes(data);
  };
  fetchAthletes();
},[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user){
      alert("Please login before adding an athlete");
      return;
    }
    try {
      await addDoc(collection(db, "athletes"), {
        athleteName:athlete.athleteName,
        sport:athlete.sport,
        teamName:athlete.teamName,
        playerStats: athlete.playerStats.split(',').map(p => p.trim()) // 
      });
      alert("athlete added successfully!");
      setAthlete({ athleteName: "", sport: "", teamName: "", playerStats: "" });
    } catch (error) {
      alert("Error adding athlete: " + error.message);
    }
  };

  return (
    <>
    <Nav/>
    <div className='AthleteList'>
        <h3 >Athletes List</h3>
        <ul>
          {athletes.length > 0 ? (
            athletes.map((athlete) => (
              <li key={athlete.id}>
                <strong>Name: </strong>{athlete.athleteName}<br />
                <strong>Sport: </strong>{athlete.sport}<br />
                <strong>Team: </strong>{athlete.teamName}<br />
                <strong>Stats: </strong>{athlete.playerStats && athlete.playerStats.join(', ')}
              </li>
            ))
          ) : (
            <li>No athletes found</li>
          )}
        </ul>
      </div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="athlete Name"
        value={athlete.athleteName}
        onChange={(e) => setAthlete({ ...athlete, athleteName: e.target.value })}
        required
      /><br></br>
      <input
        type="text"
        placeholder="Sport"
        value={athlete.sport}
        onChange={(e) => setAthlete({ ...athlete, sport: e.target.value })}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Team Name"
        value={athlete.teamName}
        onChange={(e) => setAthlete({ ...athlete, teamName: e.target.value })}
      /> 
      <br />
      <input
        type="text"
        placeholder="Players Stats"
        value={athlete.playerStats}
        onChange={(e) => setAthlete({ ...athlete, playerStats: e.target.value })}
      />
      <br />
      <button type="Submit">Add athlete</button>
    </form>
    </>
  );
}

export default Addathlete;