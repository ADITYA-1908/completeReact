import axios from "axios";
import { useEffect, useState } from "react";

const InputSearch = () => {
  const [products, setProducts] = useState([]);
  const [person, setPerson] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Fetch api", e);
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    setPerson(e.target.value);
  };

  const filterUser = () => {
    return products.filter((user) =>
      user.name.toLowerCase().includes(person.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 py-10 gap-6">
      <h1 className="text-3xl font-bold underline text-cyan-700 mt-20">
        API Input Search
      </h1>

      <input
        type="search"
        placeholder="Search person"
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        onChange={handleInput}
        value={person}
      />

      {loading ? (
        <p className="mt-4 font-semibold text-lg">Loading...</p>
      ) : (
        <div className="w-50% overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead className="bg-cyan-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Nick Name</th>
                <th className="py-3 px-4 text-left">City</th>
              </tr>
            </thead>
            <tbody>
              {filterUser().map((user) => (
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InputSearch;
