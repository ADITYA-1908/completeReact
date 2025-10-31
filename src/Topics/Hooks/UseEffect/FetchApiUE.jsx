import axios from "axios";
import lodash from "lodash";
import { useEffect, useState } from "react";

export default function FetchApiUE() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
      setSort(res.data);
      const uniqueCategory = [
        ...new Set(res.data.map((item) => item.category)),
      ];
      setCategory(uniqueCategory);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchData = sort.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "" || item.category === selectedCategory)
  );

  function handleSort(order) {
    const sortData = lodash.orderBy(sort, ["price"], [order]);
    setSort(sortData);
  }

  return (
    <>
      <div>
        {/* Search box */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />

        {/* Category dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Sort buttons */}
        <button type="button" onClick={() => handleSort("asc")}>
          Price ↑
        </button>
        <button type="button" onClick={() => handleSort("desc")}>
          Price ↓
        </button>

        {/* Product table */}
        {searchData.length <= 0 ? (
          <h3>Loading...</h3>
        ) : (
          <table
            style={{ borderCollapse: "collapse" }}
            border="1"
            cellPadding="5"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {searchData.map((item, index) => {
                const { id, title, category, price } = item;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>${price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
