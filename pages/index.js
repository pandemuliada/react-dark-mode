import { useContext, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { ThemeContext } from '../contexts'

const Container = styled('div')`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <button
          onClick={() => {
            if (theme === 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }}
        >
          Change Theme
        </button>
      </main>
    </Container>
  )
}

export default Home
