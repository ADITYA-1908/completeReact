import { useMemo, useState } from "react";

function UseMemo() {
  const [minus, setMinus] = useState(100);
  const [add, setAdd] = useState(0);

  function cube(num) {
    console.log("cube");
    return num + 2;
  }

  const result = useMemo(() => {
    return cube(add);
  }, [add]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-6">
      <h1 className="text-3xl font-bold underline text-cyan-700">
        4. useMemo Hook
      </h1>

      <div className="space-y-2">
        <p className="text-xl text-gray-700">* It returns a memoized value.</p>
        <p className="text-xl text-gray-700">
          * It only runs when one of its dependencies is updated.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <p className="text-xl text-gray-800">Minus: {minus}</p>
        <button
          onClick={() => setMinus(minus - 1)}
          className="bg-cyan-600 text-white px-4 py-2 rounded shadow hover:bg-cyan-700 transition"
        >
          Decrease Minus
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <p className="text-xl text-gray-800">Add: {add}</p>
        <button
          onClick={() => setAdd(add + 1)}
          className="bg-cyan-600 text-white px-4 py-2 rounded shadow hover:bg-cyan-700 transition"
        >
          Increase Add
        </button>
      </div>

      <p className="text-xl text-blue-600 font-semibold">
        Cube of Add: {result}
      </p>
    </div>
  );
}

export default UseMemo;
