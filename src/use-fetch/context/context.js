import React, { createContext, useState } from "react";
import { globalConfig } from "./../store/store";

export const GlobalConfig = createContext(globalConfig);

export function UseFetchProvider(props) {
  const { config } = props;
  const [state, setState] = useState({ ...globalConfig, ...config });
  const updateGlobalConfig = (value) => {
    setState(value);
  };

  return (
    <GlobalConfig.Provider value={{ ...state, updateGlobalConfig }}>
      {props.children}
    </GlobalConfig.Provider>
  );
}
