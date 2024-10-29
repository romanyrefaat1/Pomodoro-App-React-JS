import { createContext, useState } from "react";

const IsFullScreenContext = createContext();

const IsFullScreenProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState({
    isStudyFullScreen: false,
    isBreakFullScreen: false,
    isLonBreakFullScreen: false,
  });

  return (
    <IsFullScreenContext.Provider value={{ isFullScreen, setIsFullScreen }}>
      {children}
    </IsFullScreenContext.Provider>
  );
};

export {IsFullScreenProvider, IsFullScreenContext}
export default IsFullScreenProvider