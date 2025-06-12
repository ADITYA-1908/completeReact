import PropsDrillingChild1 from "./PropsDrillingChild1";

const PropsDrillingparent = () => {
  const Username = "aditya";
  return (
    <>
      <PropsDrillingChild1 name={Username} />
    </>
  );
};

export default PropsDrillingparent;
