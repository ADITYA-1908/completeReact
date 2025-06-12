import { useEffect, useState } from "react";

const ConditionalUE = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("count: ", { count });
  }, [count]);

  useEffect(() => {
    if (count > 3) {
      setShow(true);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Count: {count}
        </h1>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 mb-4"
        >
          Increment
        </button>
        {show && (
          <p className="text-green-700 font-semibold text-lg animate-bounce">
            ✅ Task Complete!
          </p>
        )}
      </div>
    </div>
  );
};

export default ConditionalUE;
