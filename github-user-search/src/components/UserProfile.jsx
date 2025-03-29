const UserProfile = ({ user, loading, error }) => {
    if (loading) return <p className="text-center py-4">Loading...</p>;
    if (error) return <p className="text-center py-4 text-red-500">{error}</p>;
    if (!user) return null;
  
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{user.name || user.login}</h2>
            <p className="text-gray-600">{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Profile
            </a>
          </div>
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Repos: {user.public_repos}</span>
        </div>
      </div>
    );
  };
  
  export default UserProfile;