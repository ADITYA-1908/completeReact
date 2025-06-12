import { useRef } from "react";

const RadioUR = () => {
  const radioRef = useRef();

  const frameworks = [
    "ReactJS",
    "NextJS",
    "ThreeJS",
    "VueJS",
    "Angular",
    "Svelte",
  ];

  function handleChange(e) {
    radioRef.current = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (radioRef.current) {
      alert(`You selected: ${radioRef.current}`);
    } else {
      alert("Please select an option.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Radio Input Handle using useRef
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            {frameworks.map((framework, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="framework"
                  value={framework}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span>{framework}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RadioUR;
