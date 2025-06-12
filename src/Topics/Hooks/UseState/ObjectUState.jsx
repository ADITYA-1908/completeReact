import { useState } from "react";

const ObjectUState = () => {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Corolla",
    color: "blue",
    year: 2020,
  });

  const changeCarColor = () => {
    if (car.color === "red") {
      setCar({ ...car, color: "green", brand: "BMW" });
    } else {
      setCar({ ...car, color: "red", brand: "Audi" });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Object Data handaling with UseState
      </h1>
      <div className=" p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          My car is a{" "}
          <span className="text-blue-700 font-bold">{car.brand}</span> and{" "}
          <span className="text-blue-500 font-bold">{car.model}</span> which is{" "}
          <span style={{ color: car.color }} className="font-bold">
            {car.color}
          </span>{" "}
          of <span className="text-green-600 font-bold">{car.year}</span>{" "}
          additions.
        </h1>
        <button
          onClick={changeCarColor}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ObjectUState;
