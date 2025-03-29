const UserCard = ({ user }) => {
    return (
      <div className="border p-4 rounded-lg shadow-sm mb-4">
        <div className="flex items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserCard;