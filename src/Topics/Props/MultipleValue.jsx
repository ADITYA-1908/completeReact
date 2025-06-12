const MultipleValue = (props) => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-6">
        <h1 className="text-3xl font-bold underline text-cyan-700">
          Multivalue Props
        </h1>
        <h2>Name: {props.name}</h2>
        <h2>Age:{props.age}</h2>
      </div>
    </>
  );
};

export default MultipleValue;
