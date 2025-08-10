import axios from "axios";
import { useEffect, useState } from "react";

const FetchAPIUE = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProduct(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [product]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {product.length === 0 ? (
        <p>Loading.....</p>
      ) : (
        <table className="table-auto border-collapse w-full border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Price</th>
              <th className="border border-gray-400 px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-400 px-4 py-2">{item.id}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ${item.price}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchAPIUE;
