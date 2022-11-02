import React from "react";
import "./App.css";
import "animate.css";
import {Home} from "../home/Home";
import {Wod} from "../wod/Wod";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/wod" element={<Wod />} />
    </Routes>
  );
}

export default App;
