import React, { createContext, useState } from "react";

export const StateContext = createContext();

// This context provider is passed to any component requiring the context
export const StateProvider = ({ children }) => {
  const [lang, switchLang] = useState('en');

  return (
      <StateContext.Provider
          value={{
            lang,
            switchLang
          }}
      >
        {children}
      </StateContext.Provider>
  );
};