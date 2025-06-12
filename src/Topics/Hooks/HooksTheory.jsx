import { useState } from "react";

const Theory = () => {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);

  const changeColor = () => {
    setColor((prev) => (prev === "red" ? "green" : "red"));
  };

  const incCount = () => {
    setCount((prev) => prev + 1);
  };

  const decCount = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const clear = () => {
    setCount(0);
  };
  return (
    <>
      {/* React Hooks Rules Section */}
      <div className="flex flex-col items-center text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">React Hooks Rules</h1>
        <ul className="list-disc text-left">
          <li className="mb-2">
            Must be written inside a functional component
          </li>
          <li className="mb-2">Must be imported in the component</li>
          <li className="mb-2">
            Must be called at the top level of the component
          </li>
          <li>Cannot be conditional</li>
        </ul>
      </div>

      {/* useState Color Section */}
      <div className="flex flex-col items-center mt-10 text-center">
        <h1 style={{ color: color }} className="text-2xl font-semibold mb-4">
          useState (Color)
        </h1>
        <button
          onClick={changeColor}
          className="h-10 w-60 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Change to {color === "red" ? "green" : "red"}
        </button>
      </div>

      {/* useState Count Section */}
      <div className="flex flex-col items-center mt-10 text-center">
        <h1 className="text-2xl font-semibold mb-4">useState (Count)</h1>
        <p className="text-xl mb-2">Count: {count}</p>
        <button
          onClick={incCount}
          className="h-10 w-60 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Increment Count
        </button>
        <button
          onClick={decCount}
          className="h-10 w-60 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          decrement Count
        </button>
        <button
          onClick={clear}
          className="h-10 w-60 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Theory;
