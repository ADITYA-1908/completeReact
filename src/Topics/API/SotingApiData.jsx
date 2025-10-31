import axios from "axios";
import { orderBy } from "lodash";
import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowDownZA,
  FaArrowUp,
  FaArrowUpAZ,
} from "react-icons/fa6";

const SotingApiData = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // Reusable sort handler
  const handleSort = (key, order) => {
    const sorted = orderBy(product, [key], [order]);
    setProduct(sorted);
  };

  return (
    <div className="p-4 flex justify-center">
      {product.length === 0 ? (
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      ) : (
        <table className="border border-gray-300 w-full max-w-5xl text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">
                <div className="flex items-center justify-center gap-2">
                  <FaArrowUpAZ
                    className="cursor-pointer text-blue-600"
                    onClick={() => handleSort("title", "asc")}
                  />
                  Title
                  <FaArrowDownZA
                    className="cursor-pointer text-blue-600"
                    onClick={() => handleSort("title", "desc")}
                  />
                </div>
              </th>
              <th className="border px-4 py-2">
                <div className="flex items-center justify-center gap-2">
                  <FaArrowUp
                    className="cursor-pointer text-green-600"
                    onClick={() => handleSort("price", "desc")}
                  />
                  Price
                  <FaArrowDown
                    className="cursor-pointer text-green-600"
                    onClick={() => handleSort("price", "asc")}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id} className="odd:bg-gray-50">
                <td className="border px-4 py-2 text-center">{item.id}</td>
                <td className="border px-4 py-2 text-center">{item.title}</td>
                <td className="border px-4 py-2 text-center">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SotingApiData;
