import React, { Fragment } from "react";

const ParagraphComponent = (props) => (
  <p>
    <Fragment>{props.text}</Fragment>
  </p>
);

export default ParagraphComponent;
