import React from "react";

import "./TasksSection.css";
import TasksTopEader from "./TasksTopEader/TasksTopEader";
import TasksContainer from "./TasksContainer/TasksContainer";

const TasksSection = () => {
  console.log(`tasksSection tolle from section`);
  return (
    <div className="tasks-section--container">
      <TasksTopEader />
      <TasksContainer />
    </div>
  );
};

export default TasksSection;
