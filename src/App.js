import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Ktwo from "./k2/Ktwo";
function App() {
  return (
    <div>
      <h1 style={{marginLeft:"3%",color:"blue"}}>K2</h1>
      <div style={{ display: "grid", justifyContent: "center" }}>
        {" "}
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <img
            src={logo}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "30%"
            }}
          />
          <span style={{ display: "grid", justifyContent: "center" }}>
            Presidential Initiative
          </span>
          <span>for Artificial Inteligence and Computing</span>
          <button
            style={{
              marginTop: "2%",
              borderRadius: "5px",
              backgroundColor: "blue",
              height: "40px",
              width: "100%",
              border: "0px",
              color: "white"
            }}
          >
            Lets Get Started
          </button>
          <span style={{ fontSize: "40px", color: "rgb(140,140,140)" }}>
            Online Quiz System
          </span>
        </div>
      </div>
      <Ktwo />
    </div>
  );
}

export default App;
