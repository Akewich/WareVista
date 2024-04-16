import {
  Box,
  createTheme,
  IconButton,
  Radio,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import Sidebar from "../../../../Sidebar";
import Sidesetting from "../Sidesetting";
import "./Theme.scss";
import {
  ChangeEvent,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const darkTheme = createContext({ toggleColorMode: () => {} });

function myTheme() {
  const theme = useTheme();
  const colorMode = useContext(darkTheme);

  return (
    <>
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark"}
      </IconButton>
    </>
  );
}

export default function Theme() {
  const [selectedTheme, setSelectedTheme] = useState("a");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.target.value);
  };

  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <darkTheme.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="sideTheme">
          <Sidebar />
          <div className="settingList">
            <Sidesetting />
          </div>
          <div className="themeContent">
            <span>Theme</span>

            <div className="themeMode">
              <div className="light">
                <Radio
                  checked={selectedTheme === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                {theme.palette.mode === "light"}
                Light
              </div>
              <div className="dark">
                <Radio
                  checked={selectedTheme === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                {theme.palette.mode === "dark"}
                Dark
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </darkTheme.Provider>
  );
}
