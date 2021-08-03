import React, { useState } from "react";
import "./PlaySide.css";
import Image2 from "../../assets/x.jpeg";
import Image3 from "../../assets/o.jpeg";
import { Button } from "../../buttons/Button";
import { Link } from "react-router-dom";

export const PlaySide = () => {
  const [side, setSide] = useState("");

  console.log(side);
  return (
    <div className="play-side">
      <h3>Pick your side</h3>
      <div className="play-side-choose-div">
        <li onClick={() => setSide("X")}>
          <div className="choose-side">
            <img src={Image2} className="image" />
            <input name="side" type="radio" checked={side && side === "X"} />
          </div>
        </li>
        <li onClick={() => setSide("O")}>
          <div className="choose-side">
            <img src={Image3} />
            <input name="side" type="radio" checked={side && side === "O"} />
          </div>
        </li>
      </div>
      {side === "" ? (
        <Button text="Continue" />
      ) : (
        <Link
          to={{
            pathname: `/game/${side}`,
          }}
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
