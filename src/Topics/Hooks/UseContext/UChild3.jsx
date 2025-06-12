import { useContext } from "react";
import { Data, Data1 } from "./UseContext";
const UChild3 = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  //it is used to access the context API in reactjs 
  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-6">
        <h1 className="text-3xl font-bold underline text-cyan-700">
          Use Context
        </h1>
        <h2>
          Hii {name} your age {age}{" "}
        </h2>
      </div>
    </>
  );
};

export default UChild3;
