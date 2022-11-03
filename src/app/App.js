import React from "react";
import "./App.css";
import "animate.css";
import {Home} from "../home/Home";
import {Wod} from "../wod/Wod";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="crossfit-wod-randomiser/" element={<Home />}/>
      <Route path="crossfit-wod-randomiser/wod" element={<Wod />} />
    </Routes>
  );
}

export default App;
