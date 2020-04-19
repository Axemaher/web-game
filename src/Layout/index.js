import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oldenburg', cursive;
  }
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oldenburg', cursive;
  }
`;

const StyledGlobalWrapper = styled.div`
  font-size:62.5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${({ theme }) => theme.colors.globalBackground};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledGlobalWrapper>
        {children}
      </StyledGlobalWrapper>
    </>
  </ThemeProvider>
)

export default Layout