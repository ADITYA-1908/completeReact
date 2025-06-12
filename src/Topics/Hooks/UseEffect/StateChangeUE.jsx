import { useEffect, useState } from "react";

const StateChangeUE = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count: ", { count });
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className=" shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Count: {count}
        </h1>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default StateChangeUE;
