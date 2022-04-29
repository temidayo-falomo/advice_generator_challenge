import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [advise, setAdvise] = useState([]);
  let componentDidMount = true;

  const fetchData = () => {
    return fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((result) => setAdvise(result.slip));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h2>ADVICE #{advise.id}</h2>
        <p>"{advise.advice}"</p>
        <div className="line-row">
          <img src="./pattern-divider-desktop.svg" alt="" />
        </div>
        <button onClick={()=>window.location.reload()}>
          <img src="./icon-dice.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
