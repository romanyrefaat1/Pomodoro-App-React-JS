import React, { useContext } from "react";
import { TemeContext } from "../../context/TemeContext";

const TemeButton = ({classList}) => {
  const { setIsLiteMode } = useContext(TemeContext);
  return <button className={`teme-button ${classList}`} onClick={() => setIsLiteMode((prev) => !prev)}>Theme</button>;
};

export default TemeButton;
