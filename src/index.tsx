import React from "react";
import ReactDOM from "react-dom";
import Container from "./container/Container";

const Index = () => {
  return (
    <>
      <Container />
    </>
  );
};

let root = document.getElementById("app");
ReactDOM.render(<Index />, root);
