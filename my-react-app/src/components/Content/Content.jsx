import React, { useState } from "react";
import "./Content.css";

import { Routes, Route } from "react-router-dom";
import Study from "../Study/Study";
import TasksSection from "../TasksSection/TasksSection";

const Content = () => {
  const [sowTasksSection, setSowTasksSection] = useState(true)
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<Study sowTasksSection={sowTasksSection} setSowTasksSection={setSowTasksSection}/>} />
        <Route path="/study" element={<Study />} setSowTasksSection={setSowTasksSection}/>

        <Route path="/break" element={<p>break</p>} />
        <Route path="/lon-break" element={<p>lon break</p>} />
        <Route path="/settins" element={<p>settins</p>} />
      </Routes>
      {sowTasksSection && <TasksSection />}
    </div>
  );
};

export default Content;
