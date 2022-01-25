import * as React from 'react'
import { useEffect } from 'react'
import theme from '../styles/theme'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { SessionProvider } from "next-auth/react"

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

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <ForceLightMode>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ForceLightMode>
      </GlobalStyle>
    </ChakraProvider>
  )
}