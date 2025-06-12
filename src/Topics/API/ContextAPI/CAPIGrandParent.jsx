import { createContext } from "react";
import CAPIChild1 from "./CAPIChild1";

const Data = createContext();
const Data1 = createContext();

const CAPIGrandParent = () => {
  const name = "Aditya";
  const age = 21;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <CAPIChild1 />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default CAPIGrandParent;
export { Data, Data1 };
