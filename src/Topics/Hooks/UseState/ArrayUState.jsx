import { useState } from "react";

const ArrayUState = () => {
  const [fruit, setFruit] = useState(["apple", "banana", "mango", "orange"]);

  const fruitFunction = () => {
    setFruit([...fruit, "coconuts"]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Array Data handaling with UseState
      </h1>
      <h1 className="text-4xl font-bold text-green-700 mb-4">All Fruits</h1>
      <ul className="list-disc list-inside text-lg text-gray-800 mb-6 space-y-1">
        {fruit.map((item, index) => (
          <li
            key={index}
            className="hover:text-green-500 transition duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={fruitFunction}
        className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition duration-200 shadow-md"
      >
        Add Fruit
      </button>
    </div>
  );
};

export default ArrayUState;
