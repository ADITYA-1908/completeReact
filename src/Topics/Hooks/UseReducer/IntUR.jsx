import { useReducer } from "react";

const IntUR = () => {
  const initialState = 0;

  function count(state, action) {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }

  const [val, dispatch] = useReducer(count, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center space-y-6 w-full max-w-sm">
        <h1 className="text-4xl font-bold text-gray-800">{val}</h1>

        <div className="space-x-4">
          <button
            onClick={() => dispatch("increment")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch("decrement")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => dispatch("reset")}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default IntUR;
