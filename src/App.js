import React from "react";

import BoxComponent from "./components/BoxComponent";
import ButtonComponent from "./components/ButtonComponent";
import H1Component from "./components/H1Component";
import H2Component from "./components/H2Component";
import LinkComponent from "./components/LinkComponent";
import ListComponent from "./components/ListComponent";
import ParagraphComponent from "./components/ParagraphComponent";
import ModalComponent from "./components/ModalComponent";
import data from "./data/data2.json";
import "./App.css";

const ComponentKeys = {
  BoxComponent,
  ButtonComponent,
  H1Component,
  H2Component,
  LinkComponent,
  ListComponent,
  ParagraphComponent,
  ModalComponent,
};

function App() {
  return (
    <div className="App">
      <div className="card-container">{iterate(data)}</div>
    </div>
  );
}

const iterate = (obj) => {
  if (typeof ComponentKeys[obj.Content.type] !== "undefined") {
    return React.createElement(
      ComponentKeys[obj.Content.type],
      obj.Content.props
        ? {
            ...obj.Content.props,
          }
        : {},
      obj.Children &&
        typeof obj.Children === "object" &&
        Object.keys(obj.Children).map((c) => {
          return iterate(obj.Children[c]);
        })
    );
  }
};

// create state of array
// useeffect call iterate
// in iterate, create array then push element in it
// in function iterate after foreach loop set state to that array
// in jsx if state not empty iterate to render

export default App;
