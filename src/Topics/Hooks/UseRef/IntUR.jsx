import { useEffect, useRef, useState } from "react";

const IntUR = () => {
  const currenRef = useRef(0);
  const [count, setcount] = useState(0);

  useEffect(() => {
    currenRef.current++;
    console.log("re-rendering count");
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Count: {count}</h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setcount((prev) => prev + 1)}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Increase
        </button>
        <button
          onClick={() => setcount((prev) => prev - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Decrease
        </button>
        <button
          onClick={() => setcount(0)}
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Reset
        </button>
      </div>

      <h3 className="text-lg text-gray-700 font-medium">
        🔄 Rendering Count:{" "}
        <span className="font-bold">{currenRef.current}</span>
      </h3>
    </div>
  );
};

export default IntUR;
