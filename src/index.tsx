import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./container/Container";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Router>
        <Container />
      </Router>
    </>
  );
};

// let root = document.getElementById("app");
// ReactDOM.render(<Index />, root);

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container as HTMLElement);

// Initial render
root.render(<Index />);
