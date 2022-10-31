import React from "react";
import "./App.css";
import "animate.css";
import {WodMode} from "../wodMode/WodMode";

function App() {
  return (
    <div className="App container">
        <header className="App-header animate__animated animate__bounce">Are you ready to be challenged?</header>
        <WodMode />
    </div>
  );
}

export default App;
