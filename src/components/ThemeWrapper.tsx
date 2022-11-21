import { COLORS } from "../constants/style-constants";
import { useState, createContext } from "react";

type themeProps = {
  foreground: string;
  background: string;
  accent: string;
  mode: string;
};

const ToggleThemeContext = {
  theme: {} as themeProps,
  handleTheme: (f: unknown) => f,
};

export const ToggleTheme = createContext(ToggleThemeContext);

function ThemeWrapper({ children }: any) {
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
