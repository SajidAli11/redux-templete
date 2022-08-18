import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/Sidebar/sidebar";

const Index = () => {
  return (
    <>
      <h1>Hello React</h1>
      <SideBar />
    </>
  );
};

let root = document.getElementById("app");
ReactDOM.render(<Index />, root);
