import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme";
import { GlobalStyles } from "./components/globalStyles";
function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
