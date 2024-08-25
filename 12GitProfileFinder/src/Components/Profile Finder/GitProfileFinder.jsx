/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function GitProfileFinder() {
  const [userName, setuserName] = useState("waqas-rai");
  const [userData, setuseData] = useState("");
  const [loading, setloading] = useState(false);

  function handleSubmit() {
    fetchGitHubUserData();
  }

  async function fetchGitHubUserData() {
    try {
      setloading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setuseData(data);
        setloading(false);
        setuserName("");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading Data! Please Wait.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="mt-10 w-full max-w-lg">
        <div className="flex space-x-4">
          <input
            type="text"
            name="GitHub"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            placeholder="Search GitHub Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
        {userData !== null ? (
          <UserCard user={userData} />
        ) : (
          <p className="text-gray-500 text-center mt-4">No user data found.</p>
        )}
      </div>
    </div>
  );
}

export default GitProfileFinder;
