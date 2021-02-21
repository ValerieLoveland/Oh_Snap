import React from "react";
import "./App.css";
import { apiStuff } from "./ohSnap";

function App() {
  apiStuff();
  return (
    <>
      <div className="App">
        <header>Snap Generator</header>

        <button className="button" onClick={hey}>
          SNAP
        </button>
        <div className="row">
          <h1 className="column">still here</h1>
          <h1 className="column">gone</h1>
        </div>
      </div>
    </>
  );
}

function hey() {
  alert("tedious biz");
}

export default App;
