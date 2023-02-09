import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
