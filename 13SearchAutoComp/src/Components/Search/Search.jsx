import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

function Search() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setsearchParam] = useState("");
  const [showDropDown, setshowDropDown] = useState(false);
  const [filterData, setfilterData] = useState([]);

  function handleOnChange(e) {
    const query = e.target.value.toLowerCase();
    setsearchParam(query);
    if (query.length >= 1) {
      const filterData =
        users && users.length
          ? users.filter(
              (filteredItem) => filteredItem.toLowerCase().indexOf(query) > -1
            )
          : [];
      setfilterData(filterData);
      setshowDropDown(true);
    } else {
      setshowDropDown(false);
    }
  }

  function handleOnClick(e) {
    setsearchParam(e.target.innerText);
    setshowDropDown(false);
  }

  async function fetchListOfProductData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchListOfProductData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-medium text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        value={searchParam}
        onChange={handleOnChange}
        name="Search Auto Comp"
        placeholder="Search users..."
        className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {showDropDown && (
        <Suggestions data={filterData} handleOnClick={handleOnClick} />
      )}
    </div>
  );
}

export default Search;
