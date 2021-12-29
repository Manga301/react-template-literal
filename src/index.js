import React from "react";
import ReactDOM from "react-dom";

const name = "Mangaliso";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Lucky number {number}</p>
  </div>,
  document.getElementById("root")
);
