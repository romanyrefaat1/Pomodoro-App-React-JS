import React, { useContext, useEffect, useRef, useState } from "react";
import { TimerValueContext } from "../../context/TimerValueContext";

const StartButton = () => {
  const { timerObj, setTimerObj, setIsCountin, isCountin } =
    useContext(TimerValueContext);
  const countinRef = useRef(null);

  const andleStartButton = () => {
    if (!isCountin) {
      setIsCountin(true);
    }
  };

  useEffect(() => {
    if (!isCountin) return;

    countinRef.current = setInterval(() => {
      setTimerObj((prev) => ({
        ...prev,
        timerValueOne:
          Number(prev.timerValueTwo) === 0
            ? prev.timerValueOne - 1
            : prev.timerValueOne,
        timerValueTwo:
          Number(prev.timerValueTwo) > 0
            ? `${
                Number(prev.timerValueTwo) > 10
                  ? prev.timerValueTwo - 1
                  : `0${prev.timerValueTwo - 1}`
              }`
            : `59`,
      }));
    }, 1000);

    return () => clearInterval(countinRef.current)
  }, [isCountin]);

  const andleStopButton = () => {
    setIsCountin(false)
    clearInterval(countinRef.current);
  };

  return !isCountin ? (
    <button onClick={andleStartButton}>Start</button>
  ) : (
    <button onClick={andleStopButton}>Stop</button>
  );
};

export default StartButton;
