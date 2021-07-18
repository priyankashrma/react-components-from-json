import React from "react";

const ListComponent = (props) => (
  <ul>
    {props.li.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

export default ListComponent;
