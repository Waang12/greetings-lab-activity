import React from "react";
import Greetings from "./greetings";
import "./App.css";

function App() {
  return (
    <>
      <div className="greetings" >
        <h1 style={{ textAlign: "center",  color: "lightblue", fontSize: "3rem" }}>Greetings</h1>
        <Greetings name="John" />
        <Greetings name="Mary" />
        <Greetings name="Alex" />
        <Greetings name="Sarah" />
      </div>
     
    </>
  );
}

export default App;
