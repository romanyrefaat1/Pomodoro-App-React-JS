import React, { useContext, useEffect, useRef, useState } from "react";
import { TimerValueContext } from "../../context/TimerValueContext";

const StartButton = ({ time }) => {
  const { timerObj, setTimerObj, setIsCountin, isCountin } =
    useContext(TimerValueContext);
  const countinRef = useRef(null);

  const andleStartButton = () => {
    if (!isCountin) {
      setIsCountin(true);
    }
  };

  const updateTime = () => {
    setTimerObj((prev) => {
      let newTimerValueOne = Number(prev.timerValueOne);
      let newTimerValueTwo = Number(prev.timerValueTwo);

      // Update timerValueOne based on timerValueTwo
      if (
        Number(prev.timerValueTwo) === 0 &&
        !Number(prev.timerValueOne) === 0
      ) {
        // if (Number(prev.timerValueOne) === 0) return;

        newTimerValueOne = prev.timerValueOne - 1;
      }

      // if (Number(prev.timerValueOne === 0) && Num)

      // Update timerValueTwo based on its current value
      if (Number(prev.timerValueTwo) > 0) {
        if (Number(prev.timerValueTwo) > 10) {
          newTimerValueTwo = Number(prev.timerValueTwo) - 1; //
        } else {
          newTimerValueTwo = `0${Number(prev.timerValueTwo) - 1}`;
        }
      } else if (newTimerValueOne !== 0 && newTimerValueTwo !== `00`) {
        newTimerValueTwo = `59`; // Reset seconds to 59 when timerValueTwo reaches 0
      } else if (newTimerValueOne === 0) {
        setIsCountin(false);
      }

      return {
        ...prev,
        timerValueOne: newTimerValueOne,
        timerValueTwo: `${newTimerValueTwo}`,
      };
    });
  };

  useEffect(() => {
    if (!isCountin) return;

    countinRef.current = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(countinRef.current);
  }, [isCountin, setTimerObj]);

  const andleStopButton = () => {
    setIsCountin(false);
    clearInterval(countinRef.current);
  };

  return !isCountin ? (
    <button onClick={andleStartButton} className="timer-button start">
      Start
    </button>
  ) : (
    <button onClick={andleStopButton} className="timer-button stop">
      Stop
    </button>
  );
};

export default StartButton;
