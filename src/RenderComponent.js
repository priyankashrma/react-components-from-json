import React from "react";
import BoxComponent from "./components/BoxComponent";
import ButtonComponent from "./components/ButtonComponent";
import H1Component from "./components/H1Component";
import H2Component from "./components/H2Component";
import LinkComponent from "./components/LinkComponent";
import ListComponent from "./components/ListComponent";
import ParagraphComponent from "./components/ParagraphComponent";

const ComponentKeys = {
  BoxComponent,
  ButtonComponent,
  H1Component,
  H2Component,
  LinkComponent,
  ListComponent,
  ParagraphComponent,
};

function renderer(config) {
  if (ComponentKeys[config.type] !== undefined) {
    return React.createElement("h1", {}, "My First React Code");
    // return React.createElement(
    //   ComponentKeys[config.type],
    //   config.props && { ...config.props },
    //   config.Children && config.map((c) => renderer(c))
    // );
  }
}

export default renderer;
