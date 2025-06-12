import { useReducer } from "react";

const initState = {
  count: 0,
  showCount: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "sub":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "showCount":
      return { ...state, showCount: !state.showCount };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 gap-6 text-center">
      <h1 className="text-3xl font-bold underline text-indigo-700">
        4. useReducer Hook
      </h1>

      <div className="space-y-2 max-w-xl">
        <p className="text-xl text-gray-700">
          * useReducer is a React hook used for managing complex state logic in
          functional components.
        </p>
        <p className="text-xl text-gray-700">
          * It provides an alternative to useState for handling multiple related
          state updates.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {state.showCount && (
          <h2 className="text-2xl font-semibold text-gray-800">
            Count: {state.count}
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => dispatch({ type: "add" })}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Increase
          </button>
          <button
            onClick={() => dispatch({ type: "sub" })}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={() => dispatch({ type: "showCount" })}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Toggle Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
