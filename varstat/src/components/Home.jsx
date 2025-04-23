import React from 'react';
import Nav from '../components/Navigation'
import '../Styles/Home.css';

function HomePage({ onSelectRole }) {
  return (
    <div>
        <Nav></Nav>
    <div className="homepage">
      <div className="section athlete" onClick={() => onSelectRole('/Athelete.jsx')}>
        <div className="label">Athlete</div>
      </div>
      <div className="section team" onClick={() => onSelectRole('team')}>
        <div className="label">Team</div>
      </div>
      <div className="section sponsor" onClick={() => onSelectRole('sponsor')}>
        <div className="label">Sponsor</div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
