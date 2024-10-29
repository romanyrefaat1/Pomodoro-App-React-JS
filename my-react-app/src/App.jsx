import React, { useContext, useEffect } from "react";
import Tabs from "./components/Tabs/Tabs";
import Content from "./components/Content/Content";

import "./App.css";
import { IsFullScreenContext } from "./context/isFullScreenMode";
import { TemeContext } from "./context/TemeContext";

const App = () => {
  const { isLiteMode } = useContext(TemeContext);

  useEffect(() => {
    console.log(localStorage.getItem(`isCountin`))
  }, [])

  useEffect(() => {
    if (isLiteMode) {
      document.body.classList.add('lite-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.remove('lite-mode');
      document.body.classList.add('dark-mode');
    }
  }, [isLiteMode]);

  return (
    <div className={`app`}>
      {/* {Object.values(isFullScreen).some((value) => value) ? null : <Tabs />} */}
      <Tabs />
      <Content />
    </div>
  );
};

export default App;
