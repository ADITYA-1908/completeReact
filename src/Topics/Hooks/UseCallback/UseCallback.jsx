import { useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100 px-4 text-center">
      <h1 className="text-3xl font-bold underline text-blue-700">
        useCallback Hook
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-xl">
        <p className="text-xl text-gray-700">
          * It is a hook that lets you cache a function definition between
          re-renders.
        </p>
        <p className="text-xl text-gray-700">
          * The React <code>useCallback</code> Hook returns a memoized callback
          function.
        </p>

        <p className="text-xl font-medium">Count: {count}</p>

        <button
          onClick={increment}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Click Here
        </button>
      </div>
    </div>
  );
}

export default UseCallback;
