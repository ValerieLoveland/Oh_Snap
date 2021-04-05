import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchCharacters } from "./ohSnap";

export const App: React.FC = (props) => {
  const [characters, setCharacters] = useState([""]);

  useEffect(() => {
    fetchCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);
  console.log(characters);

  return (
    <>
      <div className="App">
        <header>Snap Generator</header>

        <button className="button" onClick={hey}>
          SNAP
        </button>
        <ul>
          {characters.map((bs) => (
            <li key={bs}>{bs}</li>
          ))}
        </ul>
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
