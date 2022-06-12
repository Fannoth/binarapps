import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NickContext } from "../Context/store";
import styles from "./Home.module.css";

const Home = () => {
  const { setNick } = useContext(NickContext);
  return (
    <div className={styles.wrapper}>
      <h1>Wordcloud game</h1>
      <input
        className={styles.nicknameInput}
        placeholder="Enter your nickname here..."
        onChange={(e) => setNick(e.target.value)}
      />
      <br />
      <Link to="/game">
        <button className={styles.playButton}>play</button>
      </Link>
    </div>
  );
};

export default Home;
