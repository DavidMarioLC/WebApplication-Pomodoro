import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme";
import { GlobalStyles } from "./components/globalStyles";
import { Wrapper } from "./components/common/wrapper";
import Card from "./components/Card";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Wrapper>
        <Card theme={theme} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
