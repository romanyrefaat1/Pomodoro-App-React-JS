import { IsFullScreenContext } from "../../context/isFullScreenMode";
import { TimerValueContext } from "../../context/TimerValueContext";
import TabContent from "../TabContent/TabContent";
import "./Study.css";
import React, { useContext, useEffect } from "react";

const Study = (props) => {
  const { timerObj, isCountin } = useContext(TimerValueContext);
  const { isFullScreen } = useContext(IsFullScreenContext);

  useEffect(
    () => console.log(`tasksSection tolle from study`, props.sowTasksSection),
    [props.sowTasksSection]
  );

  return (
    <div className="study backround main-rad">
      <TabContent
        isFullScreen={`${isFullScreen.isStudyFullScreen ? `full-screen` : ``}`}
        timerObj={timerObj}
        isCountin={isCountin}
      />
      <button
        className="sow-tasks-button"
        onClick={() => props.setSowTasksSection((prev) => !prev)}
      >
        >
      </button>
    </div>
  );
};

export default Study;
