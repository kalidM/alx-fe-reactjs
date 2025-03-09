import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{' '}
                <Link to="/blog/1">Blog Post 1</Link> | <Link to="/blog/2">Blog Post 2</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<ProtectedRoute />}>
                    <Route index element={<Profile />} />
                </Route>
                <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
