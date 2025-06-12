import { useNavigate } from "react-router-dom";

const UseNavigation = () => {
  const navigate = useNavigate();

  const handleMoveHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">🚀 UseNavigation Example</h1>
      <button
        onClick={handleMoveHome}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Move to Home
      </button>
    </div>
  );
};

export default UseNavigation;
