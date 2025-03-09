import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
    // Simulate authentication check
    return localStorage.getItem('isAuthenticated') === 'true';
};

const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;