import { useRef } from "react";

const DomUR = () => {
  const clrRef = useRef();
  const clredRef = useRef();

  function changeColor() {
    clrRef.current.style.color = "red";
  }

  function chnageField() {
    clredRef.current.style.background = "yellow";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 ref={clrRef} className="text-3xl font-bold text-gray-800">
        Access DOM through useRef
      </h1>

      <button
        onClick={changeColor}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Change Color
      </button>

      <input
        type="text"
        ref={clredRef}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type something..."
      />

      <button
        onClick={chnageField}
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Change Background
      </button>
    </div>
  );
};

export default DomUR;
