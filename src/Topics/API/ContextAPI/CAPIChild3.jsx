import { Data, Data1 } from "./CAPIGrandParent";

const CAPIChild3 = () => {
  return (
    <Data.Consumer>
      {(name) => (
        <Data1.Consumer>
          {(age) => (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-6">
              <h1 className="text-3xl font-bold underline text-cyan-700">
                Context API
              </h1>
              <h1>
                My name is {name} and age is {age}
              </h1>
            </div>
          )}
        </Data1.Consumer>
      )}
    </Data.Consumer>
  );
};

export default CAPIChild3;
