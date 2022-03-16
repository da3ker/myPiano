import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
  const [recording, setRecording] = useState("");
  return (
    <Context.Provider value={[recording, setRecording]}>
      {children}
    </Context.Provider>
  );
};

export default Store;
