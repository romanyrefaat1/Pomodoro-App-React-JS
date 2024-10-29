import { IsFullScreenContext } from "../../context/isFullScreenMode";
import { TimerValueContext } from "../../context/TimerValueContext";
import TabContent from "../TabContent/TabContent";
import "./Study.css";
import React, { useContext } from "react";

const Study = () => {
  const { timerObj, isCountin } = useContext(TimerValueContext);
  const { isFullScreen } = useContext(IsFullScreenContext);

  return (
    <div>
      <TabContent
        isFullScreen={`${isFullScreen.isStudyFullScreen ? `full-screen` : ``}`}
        timerObj={timerObj}
        isCountin={isCountin}
      />
    </div>
  );
};

export default Study;
