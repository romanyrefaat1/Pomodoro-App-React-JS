import "./Tabs.css";
import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="tabs backround main-rad">
      <Link to={`/study`}>Study</Link>
      <Link to={`/break`}>Break</Link>
      <Link to={`/lon-break`}>Long Break</Link>
      {/* <Link to={`/settins`}>Settings</Link> */}
    </div>
  );
};

export default Tabs;
