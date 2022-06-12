import React from "react";
import { NickContext } from "../Context/store";

const End = () => {
  const { nick, score } = React.useContext(NickContext);
  return (
    <div>
      <h1>Congratulations, {nick}!</h1>
      <h3>Your score is:</h3>
      <h3>{score}</h3>
    </div>
  );
};

export default End;
