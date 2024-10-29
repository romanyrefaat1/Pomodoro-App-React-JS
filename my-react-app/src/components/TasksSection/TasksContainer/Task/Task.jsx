import StartButton from "../../../Study/StartButton";
import "./Task.css";
import React from "react";

const Task = () => {
    const taskTime = 75
  return (
    <div className="task--container">
      <h3>Work for 3h</h3>
      <div className="flex badje">
        <span>0/3</span>
        <span className="time-per-session sort">{taskTime}min</span>
      </div>
      <div className="flex">
        <p contentEditable={false}>note...</p>
        <StartButton time={taskTime}/>
      </div>
    </div>
  );
};

export default Task;
