
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

  html,
  body {
    font-family: "Roboto Condensed", "sans-serif";
    font-size: 14px;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`



export const Flex = styled.div`
  position: relative;
  display: flex;
  width: 600px;
`;

export const SideNavCont = styled.div`  
  height: 220px;
  flex: 1 0 auto;
  max-width: 140px;
`;
