import React from "react";
import Image2 from "../assets/x.jpeg";
import empty from "../assets/empty.jpeg";
import Image3 from "../assets/o.jpeg";

export const ImageBox = ({ type }) => {
  if (type === "empty") {
    return <img src={empty} alt="empty" />;
  } else if (type === "O") {
    return <img src={Image3} alt="O" />;
  } else {
    return <img src={Image2} alt="X" />;
  }
};
