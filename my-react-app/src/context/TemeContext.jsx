import { createContext, useState } from "react";

const TemeContext = createContext();

const TemeProvider = ({ children }) => {
  const [isLiteMode, setIsLiteMode] = useState(false);

  return (
    <TemeContext.Provider value={{ isLiteMode, setIsLiteMode }}>
      {children}
    </TemeContext.Provider>
  );
};

export { TemeContext, TemeProvider };
export default TemeProvider;
