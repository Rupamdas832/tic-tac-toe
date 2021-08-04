import React, { useState } from "react";
import { Button } from "../../buttons/Button";
import Image1 from "../../assets/xo.jpeg";
import "./PlayMode.css";
import { Link } from "react-router-dom";

export const PlayMode = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  return (
    <div className="play-mode">
      <img src={Image1} />
      <h3>Ticky Tocky</h3>
      <div className="play-mode-player">
        <label>
          Player 1<span>*</span>
        </label>
        <input
          type="text"
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="Enter Player1 name"
          required
        />
      </div>
      <div className="play-mode-player">
        <label>
          Player 2<span>*</span>
        </label>
        <input
          type="text"
          onChange={(e) => setPlayer2(e.target.value)}
          placeholder="Enter Player2 name"
          required
        />
      </div>
      {player1 === "" || player2 === "" ? (
        <Button text="Play" />
      ) : (
        <Link to="/mode" state={{ player1, player2 }}>
          <Button text="Play" />
        </Link>
      )}
    </div>
  );
};
