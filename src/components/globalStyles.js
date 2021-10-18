import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
  margin:0;
  background: ${({ theme }) => theme.background};
  color:${({ theme }) => theme.colorText};
  transition:all 0.50s linear;
}

`;
