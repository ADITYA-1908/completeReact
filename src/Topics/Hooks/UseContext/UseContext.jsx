import { createContext } from "react";

import UChild1 from "./UChild1";
const Data = createContext();
const Data1 = createContext();
const UseContext = () => {
  const name = "Aditya";
  const age = 21;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <UChild1 />
        </Data1.Provider>
      </Data.Provider>
 
    </>
  );
};

export default UseContext;
export { Data, Data1 };

