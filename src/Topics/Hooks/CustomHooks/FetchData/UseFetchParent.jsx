import useFetch from "./useFetch.jsx";

const UseFetchParent = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const { data: data1, loading: loading1 } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          🛒 Fake Store API Data
        </h1>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">TITLE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-6">{item.id}</td>
                    <td className="py-2 px-6">{item.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          👤 Fake User Data
        </h1>
        {loading1 ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Username</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-6">{item.id}</td>
                    <td className="py-2 px-6">{item.name}</td>
                    <td className="py-2 px-6">{item.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseFetchParent;
