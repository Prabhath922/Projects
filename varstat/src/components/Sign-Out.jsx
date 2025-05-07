import { signOut } from "firebase/auth";
import {auth} from '../Backend/firebase';
import { useNavigate } from 'react-router-dom';

function SingOut(){
const Navigate = useNavigate();
const handleLogout = async () => {
  try {
    await signOut(auth);
    Navigate('/login'); 
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
};
return (
    <>
    <button onClick={handleLogout}>Sign-Out</button>
    </>
)
}
export default SingOut;
