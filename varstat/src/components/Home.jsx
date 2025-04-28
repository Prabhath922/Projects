import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import this!
import Nav from '../components/Navigation';
import '../Styles/Home.css';

function HomePage() {
  const navigate = useNavigate(); // <-- hook to navigate programmatically

  return (
    <div>
      <Nav />
      <div className="homepage">
        <div className="section athlete" onClick={() => navigate('/Athletes')}>
          <div className="label">Athlete</div>
        </div>
        <div className="section team" onClick={() => navigate('/Teams')}>
          <div className="label">Team</div>
        </div>
        <div className="section sponsor" onClick={() => navigate('/Sponsors')}>
          <div className="label">Sponsor</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
