import { useRef } from "react";

const InputUR = () => {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    alert(`Your name: ${inputVal}`);
    inputRef.current.value = "";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Input Form using useRef
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            ref={inputRef}
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputUR;
