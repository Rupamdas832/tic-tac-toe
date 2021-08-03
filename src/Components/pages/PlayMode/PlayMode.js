import React from "react";
import { Button } from "../../buttons/Button";
import Image1 from "../../assets/xo.jpeg";
import "./PlayMode.css";
import { Link } from "react-router-dom";

export const PlayMode = () => {
  return (
    <div className="play-mode">
      <img src={Image1} />
      <h3>Ticky Tocky</h3>
      <Link to="/mode">
        <Button text="Play" />
      </Link>
    </div>
  );
};
