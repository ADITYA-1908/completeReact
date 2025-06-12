// src/Components/Products.jsx
import axios from "axios";
import { useEffect, useState } from "react";

const ApiFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.error("Fetch api", e);
      });
  }, [products]);

  return (
    <div>
      <h1>Prodct List</h1>
      {products.length === 0 ? (
        <p>Loading..</p>
      ) : (
        <div>
          {products.map((val) => (
            <div key={val.id}>
              <h1>{val.title}</h1>;
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiFetch;
