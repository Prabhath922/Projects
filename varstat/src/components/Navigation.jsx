import React from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth0 } from '@auth0/auth0-react';  // Import the useAuth0 hook
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0(); // Get login, logout, and isAuthenticated from Auth0

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">SYMBOL</Link> 

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/sign-up">Sign-Up</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/athletes">Athletes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teams">Teams</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sponsors">Sponsors</Link>
          </li>
          {/* Login/Logout button based on authentication state */}
          <li className="nav-item">
            {isAuthenticated ? (
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            ) : (
              <button
                className="btn btn-outline-light ms-2"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
