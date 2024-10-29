import React, { useContext, useEffect, useRef, useState } from "react";
import FullScreenButton from "../Study/FullScreenButton";
import StartButton from "../Study/StartButton";

import "./TabContent.css";
import TemeButton from "../TemeButton/TemeButton";
import { TemeContext } from "../../context/TemeContext";
import { TimerValueContext } from "../../context/TimerValueContext";

const TabContent = ({ timerObj, isCountin, isFullScreen }) => {
  const { isLiteMode } = useContext(TemeContext);
  const { setTimerObj } = useContext(TimerValueContext);
  const elemToFullScreenRef = useRef(null);

  const andleTimerInpCane = (event, oneOrTwo) => {
    let onlyNumbers = event.target.value.replace(/\D/g, "");

    if (onlyNumbers.length > 3) return;

    if (oneOrTwo === `one`) {
      setTimerObj((prev) => ({ ...prev, timerValueOne: onlyNumbers }));
    } else {
      setTimerObj((prev) => ({ ...prev, timerValueTwo: onlyNumbers }));
    }
  };

  const [timerFs, setTimerFs] = useState(140);

  useEffect(() => console.log(timerObj), [timerObj]);
  return (
    <div
      ref={elemToFullScreenRef}
      className={`section ${
        isLiteMode ? `lite-mode` : `dark-mode`
      } ${isFullScreen}`}
    >
      <div className={`section--container`}>
        <TemeButton classList={`not-btn-style`} />
        <span className="timer">
          {isCountin ? (
            <>
              <span style={{ fontSize: `${timerFs}px` }}>
                {localStorage.getItem(`currentTime`) || `25:00`}
              </span>
              {/* <button onClick={() => setTimerFs((prev) => prev + 32)}>+</button> */}
            </>
          ) : (
            <div className="inputs-container">
              <input
                className="mins"
                onChange={(event) => andleTimerInpCane(event, `one`)}
                value={timerObj.timerValueOne}
              />
              :
              <input
                className="secs"
                onChange={(event) => andleTimerInpCane(event, `two`)}
                value={timerObj.timerValueTwo}
              />
            </div>
          )}
        </span>
      </div>
      <StartButton />
      <FullScreenButton
        elemToFullScreen={elemToFullScreenRef.current}
        classList={`not-btn-style`}
      />
      <p contentEditable>note..</p>
    </div>
  );
};

export default TabContent;
