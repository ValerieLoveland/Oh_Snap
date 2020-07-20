import React from "react";
import "./App.css";
//import { apiStuff } from "./ohSnap";

function App() {
  //apiStuff();
  return (
    <>
      <div className="App">
        <header className="App-header">Snap Generator</header>

        <button className="App-header" onClick={hey}>
          SNAP
        </button>
      </div>
      <div className="row">
        <h1 className="column">still here</h1>
        <h1 className="column">gone</h1>
      </div>
    </>
  );
}

function hey() {
  alert("tedious");
}

export default App;
