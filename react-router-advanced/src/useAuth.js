const useAuth = () => {
    // Simulate authentication check
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated;
};

export default useAuth;
