import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Sidebar from "../../../../Sidebar";
import Sidesetting from "../Sidesetting";
import "./Theme.scss";
import React, { useContext } from "react";
import { iThemeContext, iThemeMode } from "./Type";
import { ThemeContext, ThemeContextProvider } from "./indexTheme";

const Theme: React.FunctionComponent = () => {
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as iThemeContext;

  const handleSwitchTheme = (mode: iThemeMode) => {
    switchThemeMode(mode);
  };

  return (
    <div className="sideTheme">
      <Sidebar />
      <div className="settingList">
        <Sidesetting />
      </div>
      <div className="themeContent">
        <div className="themeMode">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              theme
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
                onClick={() => {
                  handleSwitchTheme(iThemeMode.LIGHT);
                }}
                checked={themeMode === iThemeMode.LIGHT}
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="dark"
                onClick={() => {
                  handleSwitchTheme(iThemeMode.DARK);
                }}
                checked={themeMode === iThemeMode.DARK}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default Theme;
