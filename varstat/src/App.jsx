import { Routes, Route } from 'react-router-dom'; 
import HomePage from './components/Home';
import SignUp from './components/Sign-Up';
import Athletes from './components/Athletes';
import Sponsors from './components/Sponsors';
import Teams from './components/Teams';
import Login from './components/Login';
import SingOut from './components/Sign-Out';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sign-out" element={<SingOut/>}/>
      </Routes>
  );
}

export default App;
