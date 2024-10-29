import React, { useContext, useState } from "react";
import { IsFullScreenContext } from "../../context/isFullScreenMode";
import { TemeContext } from "../../context/TemeContext";

const FullScreenButton = ({ classList, elemToFullScreen }) => {
  const { setIsFullScreen, isFullScreen } = useContext(IsFullScreenContext);
  const { setIsLiteMode } = useContext(TemeContext);
  // const [isFullScreen, setIsFullScreen] = useState(false);

  const andleFullScreenMode = () => {
    setIsFullScreen((prev) => ({
      ...prev,
      isStudyFullScreen: !prev.isStudyFullScreen,
    }));

  if (isFullScreen.isStudyFullScreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    
    // setIsFullScreen((prev) => ({
    //   ...prev,
    //   isStudyFullScreen: false,
    // }));
  }

    if (elemToFullScreen.requestFullscreen) {
      elemToFullScreen.requestFullscreen();
    } else if (elemToFullScreen.webkitRequestFullscreen) {
      /* Safari */
      elemToFullScreen.webkitRequestFullscreen();
    } else if (elemToFullScreen.msRequestFullscreen) {
      /* IE11 */
      elemToFullScreen.msRequestFullscreen();
    }

    setIsLiteMode((prev) => !prev);
    // setIsFullScreen((prev) => ({
    //   ...prev,
    //   isStudyFullScreen: true,
    // }));
  };
  return (
    <button
      onClick={andleFullScreenMode}
      className={`full-screen-button ${classList}`}
    >
      big
    </button>
  );
};

export default FullScreenButton;
