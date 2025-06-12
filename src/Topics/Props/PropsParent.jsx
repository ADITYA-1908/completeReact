import React from "react";
import BasicProps from "./BasicProps.jsx";
import Default from "./Default.jsx";
import Destructuring from "./Destructuring.jsx";
import MultipleValue from "./MultipleValue.jsx";

const PropsParent = () => {
  return (
    <React.Fragment>
      <BasicProps name="Aditya" />
      <MultipleValue name="Aditya" age={21} />
      <Destructuring name="Aditya" age={21} role="student" />
      <Default />
    </React.Fragment>
  );
};

export default PropsParent;
