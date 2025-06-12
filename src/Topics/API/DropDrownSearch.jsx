import axios from "axios";
import { useEffect, useState } from "react";

const DropDownSearch = () => {
  const [users, setUsers] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error.message);
      });
  }, []);

  // Handle dropdown selection
  const handleSelectChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  // Filter logic
  const filteredUsers = selectedPerson
    ? users.filter((user) => user.name === selectedPerson)
    : users;

  if (loading)
    return <h1 className="text-center text-lg font-bold mt-6">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-600 mt-6">{error}</h1>;

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center mt-27">
      <h1 className="text-3xl font-bold text-cyan-700 mb-6 underline">
        User Details Viewer
      </h1>

      <select
        onChange={handleSelectChange}
        value={selectedPerson}
        className="mb-6 w-64 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="">-- Show All --</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full  rounded shadow text-sm">
          <thead className="bg-cyan-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">S.NO</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">City</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.address.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-red-500 font-medium"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropDownSearch;
