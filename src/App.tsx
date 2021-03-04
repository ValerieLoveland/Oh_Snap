import React from "react";
import "./App.css";
import { apiStuff } from "./ohSnap";

export const App: React.FC = (props) => {
  apiStuff();
  //const { heroes } = props;
  return (
    <>
      <div className="App">
        <header>Snap Generator</header>

        <button className="button" onClick={hey}>
          SNAP
        </button>
        <div>{apiStuff()}</div>
        <div className="row">
          <h1 className="column">still here</h1>
          <h1 className="column">gone</h1>
        </div>
      </div>
    </>
  );
};

function hey() {
  alert("tedious biz");
}

export default App;
