import React from 'react';
import Nav from '../components/Navigation'
import Athletes from './Athletes'
import Sponsors from './Sponsors'
import Teams from './Teams'
import Home from './Home'
import '../Styles/Home.css';

function HomePage({ onSelectRole }) {
  return (
    <div>
        <Nav></Nav>
    <div className="homepage">
      <div className="section athlete" onClick={() => onSelectRole('<Athletes/>')}>
        <div className="label">Athlete</div>
      </div>
      <div className="section team" onClick={() => onSelectRole('<Teams/>')}>
        <div className="label">Team</div>
      </div>
      <div className="section sponsor" onClick={() => onSelectRole('<Sponsors/>')}>
        <div className="label">Sponsor</div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
