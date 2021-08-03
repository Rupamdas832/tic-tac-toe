import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Game.css";
import { ImageBox } from "../../imageBox/ImageBox";
import { Button } from "../../buttons/Button";

export const Game = () => {
  const { side } = useParams();
  const [array, setArray] = useState(new Array(9).fill("empty"));
  const [isCross, setIsCross] = useState(side === "X" ? true : false);
  const [winMessage, setWinMessage] = useState("");

  const checkWinner = () => {
    if (
      array[0] !== "empty" &&
      array[0] === array[1] &&
      array[1] === array[2]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[3] !== "empty" &&
      array[3] === array[4] &&
      array[4] === array[5]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[6] !== "empty" &&
      array[6] === array[7] &&
      array[7] === array[8]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[0] !== "empty" &&
      array[0] === array[3] &&
      array[3] === array[6]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[1] !== "empty" &&
      array[1] === array[4] &&
      array[4] === array[7]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[2] !== "empty" &&
      array[2] === array[5] &&
      array[5] === array[8]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[0] !== "empty" &&
      array[0] === array[4] &&
      array[4] === array[8]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (
      array[2] !== "empty" &&
      array[2] === array[4] &&
      array[4] === array[6]
    ) {
      setWinMessage(isCross ? "Circle Wins" : "Cross Wins");
    } else if (array.every((item) => item !== "empty")) {
      setWinMessage("Tie");
    } else {
      return null;
    }
  };

  const reloadGame = () => {
    setArray(new Array(9).fill("empty"));
    setIsCross(side === "X" ? true : false);
    setWinMessage("");
  };

  const changeItem = (itemNumber) => {
    if (array[itemNumber] === "empty") {
      array[itemNumber] = isCross ? "X" : "O";
      setIsCross(!isCross);
    } else {
      alert("Already filled");
    }
  };

  useEffect(() => {
    checkWinner();
  }, [isCross]);

  return (
    <div className="game">
      <div className="nav-div">
        {winMessage === "" ? (
          isCross ? (
            <p>
              <span className="turn">Cross's </span>turn
            </p>
          ) : (
            <p>
              <span className="turn">Circle's</span> turn
            </p>
          )
        ) : (
          ""
        )}
        {winMessage && (
          <div className="nav-btns">
            <button onClick={reloadGame} className="btn">
              Reload
            </button>
          </div>
        )}
        {winMessage && (
          <>
            {winMessage === "Tie" ? (
              <p className="tie-message">{winMessage}</p>
            ) : (
              <p
                className={isCross ? "win-message-circle" : "win-message-cross"}
              >
                {winMessage}
              </p>
            )}
          </>
        )}
      </div>
      <div className="matrix-box">
        {winMessage === "" ? (
          <>
            {array.map((item, idx) => {
              return (
                <div
                  className="square"
                  key={idx}
                  onClick={() => changeItem(idx)}
                >
                  <ImageBox type={item} />
                </div>
              );
            })}
          </>
        ) : (
          <>
            {array.map((item, idx) => {
              return (
                <div className="square" key={idx}>
                  <ImageBox type={item} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <Link to="/">
        <Button text="⚙️" />
      </Link>
    </div>
  );
};
