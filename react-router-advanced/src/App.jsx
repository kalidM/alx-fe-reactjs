import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Dummy authentication check
const isAuthenticated = false;

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Home component
const Home = () => {
  return <h2>Home Page</h2>;
};

// BlogPost component for dynamic routing
const BlogPost = () => {
  const { id } = useParams(); // Extract the post ID from the URL
  return <h3>Blog Post {id}</h3>;
};

// Login page (for testing protected route)
const Login = () => {
  return <h2>Please log in</h2>;
};

// Profile component with nested routes
const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

// Profile Details component
const ProfileDetails = () => {
  return <h3>Profile Details</h3>;
};

// Profile Settings component
const ProfileSettings = () => {
  return <h3>Profile Settings</h3>;
};

// Not Found page
const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/blog/1">Blog Post 1</Link></li>
            <li><Link to="/blog/2">Blog Post 2</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          {/* Protected Route for Profile */}
          <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route for Blog Post */}
          <Route path="blog/:id" element={<BlogPost />} />

          {/* Catch-all for Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
