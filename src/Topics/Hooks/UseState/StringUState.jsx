import { useState } from "react";

const StringUState = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        String Data handaling with UseState
      </h1>
      <h1 style={{ color: color }} className="text-4xl font-bold mb-6">
        Hello
      </h1>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
        onClick={() => setColor(color === "red" ? "black" : "red")}
      >
        Hit me
      </button>
    </div>
  );
};

export default StringUState;
