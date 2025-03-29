import { useState } from 'react';
import { searchUsers } from './services/githubService';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
}

export default App;