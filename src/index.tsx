import React from "react";
import { createRoot } from "react-dom/client";
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

const container = document.getElementById("app");

const root = createRoot(container as HTMLElement);
root.render(<Index />);
