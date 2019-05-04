
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

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
    height: 100vh;
    overflow: auto;
  }

  * {
    box-sizing: border-box;
  }
`

export const InnerCont = styled.div`
  padding: 4px 8px;
  width: 100%;
  height: 100%;
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SideNavCont = styled.div`
  height: 260px;
  padding: 8px;
  width: 140px;
`;

export const TextContent = styled.div`

`

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0;
  background: #FEFEFE;
  overflow: auto;

`
