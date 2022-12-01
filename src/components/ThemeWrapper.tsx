import { COLORS } from "../constants/style-constants";
import { useState, createContext, useEffect } from "react";
import React from "react";
import { ColorProps } from "../constants/style-constants";

export type ThemeProps = {
  foreground: string;
  background: string;
  secondary: string;
  accent: string;
  accent900: string;
  mode: string;
};

type ThemeContextProps = {
  theme: ThemeProps;
  handleTheme: () => void;
};

export const ToggleTheme = createContext({} as ThemeContextProps);

const loadThemeMode = (key: string): string => {
  let themeMode = localStorage.getItem(key);
  return themeMode ? themeMode : "light";
};

//
function ThemeWrapper({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState(COLORS.light);

  const handleTheme = () => {
    if (theme.mode === "light") {
      setTheme(COLORS.dark);
    } else {
      setTheme(COLORS.light);
    }
  };

  return (
    <ToggleTheme.Provider value={{ theme, handleTheme }}>
      {children}
    </ToggleTheme.Provider>
  );
}

export default ThemeWrapper;
