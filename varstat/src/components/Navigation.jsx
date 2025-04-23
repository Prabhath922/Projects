import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="Home.jsx">SYMBOL</a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="Athletes.jsx">Athletes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Team.jsx">Teams</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Sponsors.jsx">Sponsors</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
