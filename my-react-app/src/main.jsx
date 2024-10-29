import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TimerValueProvider from "./context/TimerValueContext.jsx";
import IsFullScreenProvider from "./context/isFullScreenMode.jsx";
import TemeProvider from "./context/TemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TemeProvider>
        <TimerValueProvider>
          <IsFullScreenProvider>
            <App />
          </IsFullScreenProvider>
        </TimerValueProvider>
      </TemeProvider>
    </BrowserRouter>
  </StrictMode>
);
