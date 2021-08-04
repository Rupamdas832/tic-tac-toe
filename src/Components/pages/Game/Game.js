import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./Game.css";
import { ImageBox } from "../../imageBox/ImageBox";
import { Button } from "../../buttons/Button";

export const Game = () => {
  const { state } = useLocation();
  const [array, setArray] = useState(new Array(9).fill("empty"));
  const [isCross, setIsCross] = useState(state.side === "X" ? true : false);
  const [winMessage, setWinMessage] = useState("");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const navigate = useNavigate();

  const checkWinner = () => {
    if (
      array[0] !== "empty" &&
      array[0] === array[1] &&
      array[1] === array[2]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[3] !== "empty" &&
      array[3] === array[4] &&
      array[4] === array[5]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[6] !== "empty" &&
      array[6] === array[7] &&
      array[7] === array[8]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[0] !== "empty" &&
      array[0] === array[3] &&
      array[3] === array[6]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[1] !== "empty" &&
      array[1] === array[4] &&
      array[4] === array[7]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[2] !== "empty" &&
      array[2] === array[5] &&
      array[5] === array[8]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[0] !== "empty" &&
      array[0] === array[4] &&
      array[4] === array[8]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (
      array[2] !== "empty" &&
      array[2] === array[4] &&
      array[4] === array[6]
    ) {
      setWinMessage(isCross ? `${state.player2} won` : `${state.player1} won`);
      isCross
        ? setPlayer2Score(player2Score + 1)
        : setPlayer1Score(player1Score + 1);
    } else if (array.every((item) => item !== "empty")) {
      setWinMessage("Tie");
    } else {
      return null;
    }
  };

  const reloadGame = () => {
    setArray(new Array(9).fill("empty"));
    setIsCross(state.side === "X" ? true : false);
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

  if (state.side === undefined) {
    return navigate("/");
  }
  return (
    <div className="game">
      <div className="player-score">
        <p>{state.player1}</p>
        <div className="score">
          {player1Score}-{player2Score}
        </div>
        <p>{state.player2}</p>
      </div>
      <div className="nav-div">
        {winMessage === "" ? (
          isCross ? (
            <p>
              <span className="turn">{state.player1}'s </span>turn
            </p>
          ) : (
            <p>
              <span className="turn">{state.player2}'s </span> turn
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
