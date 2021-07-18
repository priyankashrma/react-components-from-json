import React from "react";

const BoxComponent = (props) => {
  return (
    <div style={{ border: `${props.borderSize} solid black` }}>
      {props.children}
    </div>
  );
};

export default BoxComponent;
