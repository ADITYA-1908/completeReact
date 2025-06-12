import { useRef } from "react";

const CheckBoxUR = () => {
  const city = [
    "Bhubaneswar",
    "Cuttack",
    "Berhampur",
    "Rourkela",
    "Sambalpur",
    "Puri",
    "Balasore",
    "Baripada",
    "Angul",
    "Jharsuguda",
  ];

  const checkboxRefs = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCities = checkboxRefs.current
      .filter((checkbox) => checkbox?.checked)
      .map((checkbox) => checkbox.value);

    alert("Selected cities: " + selectedCities.join(", "));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Multiple Checkbox Handle using useRef
        </h2>

        {city.map((val, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              value={val}
              ref={(el) => (checkboxRefs.current[index] = el)}
              className="mr-2"
            />
            {val}
          </label>
        ))}

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckBoxUR;
