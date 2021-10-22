import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme";
import { GlobalStyles } from "./components/globalStyles";
import { Wrapper } from "./components/common/wrapper";
import Card from "./components/Card";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  const [theme, setTheme] = useState("dark");

  const setMode = (value) => {
    window.localStorage.setItem("theme", value);
    setTheme(value);
  };

  const changeTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const mode = window.localStorage.getItem("theme");
    setTheme(mode);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <SwitchTheme changeTheme={changeTheme} />
        <Card theme={theme} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
