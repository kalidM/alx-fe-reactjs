import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    
    const { data, error } = await fetchUserData(username);
    
    setLoading(false);
    if (error) {
      setError(error);
      setUser(null);
    } else {
      setUser(data);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserProfile user={user} loading={loading} error={error} />
    </div>
  );
}

export default App;
