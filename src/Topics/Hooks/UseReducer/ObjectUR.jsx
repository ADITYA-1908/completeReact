import { useReducer } from "react";

const initialState = {
  name: "",
  framework: "",
  city: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const FormUseReducer = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const languages = ["ReactJS", "NextJS", "VueJS", "Node"];
  const cities = [
    "Select City",
    "Bhubaneswar",
    "Cuttack",
    "Berhampur",
    "Rourkela",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6 transition duration-300"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-800">
          📋 Registration Form (useReducer)
        </h2>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <p className="font-medium text-gray-700 mb-1">Preferred Framework</p>
          <div className="space-y-2">
            {languages.map((fw) => (
              <label key={fw} className="flex items-center gap-3 text-gray-600">
                <input
                  type="radio"
                  name="framework"
                  value={fw}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span>{fw}</span>
              </label>
            ))}
          </div>
        </div>

        {/* City Dropdown */}
        <div>
          <label
            htmlFor="city"
            className="block font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            {cities.map((city, index) => (
              <option key={index} value={index === 0 ? "" : city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200"
        >
          Submit
        </button>
      </form>

      {/* JSON Output */}
      <pre className="mt-8 bg-white p-5 rounded-xl shadow-md w-full max-w-lg text-sm text-gray-700 whitespace-pre-wrap">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
};

export default FormUseReducer;
