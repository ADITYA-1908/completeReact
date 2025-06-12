import { useState } from "react";
import useInterval from "./useInterval.jsx";

function UseIntervalParent() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  useInterval(() => {
    setAdd((c) => (c < 100 ? c + 1 : 0));
    setMinus((d) => (d > 0 ? d - 1 : 0));
  }, 1000);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-2xl font-bold">
      <h1 className="text-green-600">Count Up: {add}</h1>
      <h1 className="text-red-600 mt-4">Count Down: {minus}</h1>
    </div>
  );
}

export default UseIntervalParent;
