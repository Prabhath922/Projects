
function NotFound() {
    return (
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/Home.jsx" className="home-link">
          Return to Home Page
        </Link>
      </div>
    );
  }