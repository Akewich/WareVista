import { createContext, useEffect, useState } from "react";
import { iThemeContext, iThemeMode } from "./Type";
import { Theme, ThemeProvider } from "@mui/material";
import { appDarkTheme, appLightTheme } from "./Theme";

export const ThemeContext = createContext<iThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<iThemeMode>(iThemeMode.LIGHT);

  const [theme, setTheme] = useState<Theme>(appLightTheme);

  useEffect(() => {
    const themeModeFromPref = _getThemeModeToPref();
    setThemeMode(themeModeFromPref);
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case iThemeMode.LIGHT:
        setTheme(appLightTheme);
        break;
      case iThemeMode.DARK:
        setTheme(appDarkTheme);
        break;
      default:
        setTheme(appLightTheme);
        break;
    }
  }, [themeMode]);

  const _getThemeModeToPref = (): iThemeMode => {
    const themeModeFromPref = localStorage.getItem("themeMode") as iThemeMode;
    if (themeModeFromPref) {
      return themeModeFromPref;
    }
    return iThemeMode.LIGHT;
  };

  const _setThemeModeToPref = (mode: iThemeMode) => {
    localStorage.setItem("themeMode", mode);
  };

  const switchThemeMode = (mode: iThemeMode) => {
    setThemeMode(mode);
    _setThemeModeToPref(mode);
  };
  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
