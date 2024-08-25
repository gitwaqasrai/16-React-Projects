/* eslint-disable react/prop-types */
export function UserCard({ user }) {
  const {
    avatar_url,
    followers,
    following,
    name,
    login,
    location,
    public_repos,
    bio,
    created_at,
  } = user;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <div className="flex flex-col items-center">
        <img
          src={avatar_url}
          alt={`${login}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <a
          className="mt-4 text-xl font-semibold text-blue-600 hover:underline"
          target="_blank"
          href={`https://github.com/${login}`}
        >
          {name || login}
        </a>
        <p className="text-gray-500 text-sm mt-2">{bio}</p>
      </div>
      <div className="mt-6 text-gray-700">
        <p className="text-sm">
          <strong>Join Date:</strong>{" "}
          {new Date(created_at).toLocaleDateString()}
        </p>
        <p className="text-sm mt-1">
          <strong>Location:</strong> {location || "Not specified"}
        </p>
        <p className="text-sm mt-1">
          <strong>Followers:</strong> {followers}
        </p>
        <p className="text-sm mt-1">
          <strong>Following:</strong> {following}
        </p>
        <p className="text-sm mt-1">
          <strong>Public Repos:</strong> {public_repos}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
