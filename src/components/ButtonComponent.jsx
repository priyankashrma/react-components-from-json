import React from "react";

const ButtonComponent = (props) => {
  const printMessage = () => {
    console.log("print message");
  };
  return <button onClick={printMessage}>{props.text}</button>;
};

export default ButtonComponent;
