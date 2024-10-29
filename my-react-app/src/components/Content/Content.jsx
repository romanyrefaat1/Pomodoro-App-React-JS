import React from "react";
import "./Content.css";

import { Routes, Route } from "react-router-dom";
import Study from "../Study/Study";

const Content = () => {
  return (
    <div className="backround main-rad">
      <Routes>
        <Route path="/*" element={<Study />} />
        <Route path="/study" element={<Study />} />

        <Route path="/break" element={<p>break</p>} />
        <Route path="/lon-break" element={<p>lon break</p>} />
        <Route path="/settins" element={<p>settins</p>} />
      </Routes>
    </div>
  );
};

export default Content;
