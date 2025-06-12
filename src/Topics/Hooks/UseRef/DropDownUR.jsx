import { useRef } from "react";

const DropDownUR = () => {
  const ddRef = useRef();
  const city = [
    "Select",
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
  function dropDownHandle(e) {
    e.preventDefault();
    const selectedValue = ddRef.current.value;
    console.log("Selected city:", selectedValue);
    alert(`You selected: ${selectedValue}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Drop Down handle using useRef
        </h2>
        <form onSubmit={dropDownHandle} className="space-y-4">
          <select
            name="city"
            ref={ddRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {city.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
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

export default DropDownUR;
