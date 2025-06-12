import { useCallback, useState } from "react";
import ChildCallBack from "./ChildCallBack";
const ParentCallBack = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learnig = useCallback(() => {
    return "Aditya";
  }, [count]);
  return (
    <div>
      <ChildCallBack Learnig={Learnig} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <br />
      <br />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Addition + 2</button>
    </div>
  );
};

export default ParentCallBack;
