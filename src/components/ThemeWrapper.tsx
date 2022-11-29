import { COLORS } from "../constants/style-constants";
import { useState, createContext } from "react";
import React from "react";

type ThemeProps = {
  foreground: string;
  background: string;
  secondary: string;
  accent: string;
  mode: string;
};

type ThemeContextProps = {
  theme: ThemeProps;
  handleTheme: () => void;
};

export const ToggleTheme = createContext({} as ThemeContextProps);

function ThemeWrapper({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState(COLORS.LIGHT);

  const handleTheme = () => {
    if (theme.mode === "light") {
      setTheme(COLORS.DARK);
    } else {
      setTheme(COLORS.LIGHT);
    }
  };

  return (
    <ToggleTheme.Provider value={{ theme, handleTheme }}>
      {children}
    </ToggleTheme.Provider>
  );
}

export default ThemeWrapper;
