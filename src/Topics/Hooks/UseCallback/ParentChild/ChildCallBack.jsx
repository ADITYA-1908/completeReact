import { memo } from "react";

const ChildCallBack = ({ Learnig, Count }) => {
  console.log("child component");
  return (
    <div>
      <h1>pass to child component {Learnig()}</h1>
      <h1>{Count}</h1>
    </div>
  );
};

export default memo(ChildCallBack);
