import React, { useState } from "react";
import "./PlaySide.css";
import Image2 from "../../assets/x.jpeg";
import Image3 from "../../assets/o.jpeg";
import { Button } from "../../buttons/Button";
import { Link, useLocation } from "react-router-dom";

export const PlaySide = () => {
  const [side, setSide] = useState("");
  const { state } = useLocation();

  return (
    <div className="play-side">
      <h3>Pick your side</h3>
      <div className="play-side-choose-div">
        <li onClick={() => setSide("X")}>
          <div className="choose-side">
            <img src={Image2} alt="X" />
            <input
              name="side"
              type="radio"
              checked={side && side === "X"}
              onChange={() => setSide("X")}
            />
          </div>
        </li>
        <li onClick={() => setSide("O")}>
          <div className="choose-side">
            <img src={Image3} alt="O" />
            <input
              name="side"
              type="radio"
              checked={side && side === "O"}
              onChange={() => setSide("O")}
            />
          </div>
        </li>
      </div>
      {side === "" ? (
        <Button text="Continue" />
      ) : (
        <Link
          to="/game"
          state={{ side: side, player1: state.player1, player2: state.player2 }}
        >
          <Button text="Continue" />
        </Link>
      )}
      <Link to="/">
        <Button text="⚙️" />
      </Link>
    </div>
  );
};
