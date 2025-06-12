import { useState } from "react";

const IntUState = () => {
  const [count, setCount] = useState(0);

  function decrement() {
    if (count == 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Integer Data handaling with UseState
      </h1>
      <h1>count: {count}</h1>
      <div>
        <button
          className="bg-blue-500 mt-5 text-white px-4 py-2 rounded mr-2"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default IntUState;
