import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { NickContext } from "./Context/store";
import End from "./pages/End";

function App() {
  const [nick, setNick] = React.useState("");
  const [selectedWords, setSelectedWords] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const good = [];

  return (
    <div className="App">
      <NickContext.Provider
        value={{
          nick,
          setNick,
          selectedWords,
          setSelectedWords,
          isGameOver,
          setIsGameOver,
          score,
          setScore,
          good,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/end" element={<End />}></Route>
        </Routes>
      </NickContext.Provider>
    </div>
  );
}

export default App;
