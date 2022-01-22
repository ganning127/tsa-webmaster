import * as React from 'react'
import { useEffect } from 'react'
import theme from '../styles/theme'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

function ForceLightMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode]);

  return children;
}

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #fffff;
          }
        `}
      />
      {children}
    </>
  )
}

export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <ForceLightMode>
          <Component {...pageProps} />
        </ForceLightMode>
      </GlobalStyle>
    </ChakraProvider>
  )
}