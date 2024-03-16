import React from "react";

export const uiContextStateInitial = {
  isBackgroundShadowActive: false,
  setIsBackgroundShadowActive: (value: boolean) => {},
};
export const uiContext = React.createContext(uiContextStateInitial);

