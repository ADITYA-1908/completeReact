// PropsDrillingChild3.jsx
const PropsDrillingChild3 = ({ name }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-6">
      <h1 className="text-3xl font-bold underline text-cyan-700">
        Props Drilling
      </h1>
      <h2>Name: {name}</h2>
    </div>
  );
};

export default PropsDrillingChild3;
