import React from "react";
import Task from "./Task/Task";

const TasksContainer = () => {
  return (
    <div
      className="tasks-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: `3rem`,
      }}
    >
      <span
        className="num-of-sessions"
        style={{
          alignSelf: "flex-end",
          width: `fit-content`,
          marginBottom: `1.5rem`,
        }}
      >
        1/6
      </span>
      <Task />
    </div>
  );
};

export default TasksContainer;
