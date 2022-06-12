import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Game.module.css";
import { dummyData } from "../dummy_data";
import { NickContext } from "../Context/store";

const Game = () => {
  const {
    selectedWords,
    setSelectedWords,
    randomNumber,
    isGameOver,
    setIsGameOver,
    setScore,
    good,
  } = React.useContext(NickContext);
  let diff = [];

  const memoizedData = React.useMemo(() => {
    return dummyData[randomNumber(0, 2)];
  }, []);

  const handleSelect = (word) => {
    selectedWords.includes(word)
      ? setSelectedWords(selectedWords.filter((xWord) => xWord !== word))
      : setSelectedWords([...selectedWords, word]);
  };

  const handleSetGoodWords = () => {
    selectedWords.map(
      (selectedWord) =>
        memoizedData.good_words.includes(selectedWord) &&
        good.push(selectedWord)
    );
  };

  const handleEndGame = () => {
    setIsGameOver((prev) => !prev);
  };
  const handleCountDiff = () => {
    diff = [...memoizedData.good_words].filter((word) => !good.includes(word));
  };

  const handleSetScore = () => {
    setScore(
      good.length * 2 - (selectedWords.length - good.length + diff.length)
    );
  };

  return (
    <div className={styles.wrapper}>
      <h2>{memoizedData.question}</h2>
      <div className={styles.game}>
        {memoizedData.all_words.map((word) => (
          <h5
            className={`${styles.word}
              ${selectedWords.includes(word) && styles.selected}
              ${
                isGameOver
                  ? selectedWords.includes(word)
                    ? memoizedData.good_words.includes(word)
                      ? styles.goodWord
                      : styles.badWord
                    : null
                  : null
              }
            `}
            key={word}
            onClick={() => {
              handleSelect(word);
              handleCountDiff();
            }}
          >
            {word}
          </h5>
        ))}
      </div>
      {isGameOver ? (
        <Link to="/end">
          <button className={styles.checkAnswer}>Finish game</button>
        </Link>
      ) : (
        <button
          className={styles.checkAnswer}
          onClick={() => {
            handleSetGoodWords(selectedWords);
            handleEndGame();
            handleCountDiff();
            handleSetScore();
          }}
        >
          Check answer
        </button>
      )}
      {/* <button
        className={styles.checkAnswer}
        onClick={() => {
          handleSetGoodWords(selectedWords);
          handleEndGame();
          handleCountDiff();
          handleSetScore();
        }}
      >
        Check answer
      </button> */}
    </div>
  );
};

export default Game;
