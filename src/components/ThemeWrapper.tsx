import { COLORS } from "../constants/style-constants";
import { themeProps } from "../Pages/Home";

import { useState, createContext } from "react";

const obj = {
  theme: {} as themeProps,
  handleTheme: (f: any) => f,
};

export const ToggleTheme = createContext(obj);

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
