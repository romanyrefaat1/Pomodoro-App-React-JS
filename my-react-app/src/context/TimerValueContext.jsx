import { createContext, useEffect, useState } from "react";

const TimerValueContext = createContext();

const TimerValueProvider = ({ children }) => {
  const [isCountin, setIsCountin] = useState(false);
  const [timerObj, setTimerObj] = useState({
    isCountin: isCountin,
    timerValueOne: 25,
    timerValueTwo: `00`,
    fullTimer: `25:00`,
  });
  //  {
  //     timerValueOne: ,
  //     timerValueTwo: ,
  //     fullTimer: ,
  // }

  useEffect(() => {
    // Reset timer only when isCountin changes to false
    if (!isCountin) {
      setTimerObj((prev) => ({
        ...prev,
        timerValueOne: 25,
        timerValueTwo: "00",
        fullTimer: "25:00",
      }));
    }
    localStorage.setItem(`isCountin`, timerObj.isCountin)
  }, [isCountin, timerObj.isCountin]);

  useEffect(() => {
    // Update fullTimer whenever timerValueOne or timerValueTwo changes
    setTimerObj((prev) => ({
      ...prev,
      fullTimer: `${prev.timerValueOne}:${prev.timerValueTwo.padStart(2, "0")}`,
    }));

    document.title = `Study: ${timerObj.timerValueOne}:${timerObj.timerValueTwo.padStart(2, "0")}`

    localStorage.setItem(`currentTime`, `${timerObj.timerValueOne}:${timerObj.timerValueTwo.padStart(2, "0")}`)
  }, [timerObj.timerValueOne, timerObj.timerValueTwo]);

  return (
    <TimerValueContext.Provider
      value={{ timerObj, setTimerObj, isCountin, setIsCountin }}
    >
      {children}
    </TimerValueContext.Provider>
  );
};

export default TimerValueProvider;
export { TimerValueContext };
