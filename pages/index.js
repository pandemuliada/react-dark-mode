import { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import useTheme from '../hooks/useTheme'

const Home = () => {
  const { theme, setThemeMode, toggleTheme } = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'center', width: 'inherit' }}>
          <h1>Theme Switcher with Styled Components</h1>
          <button
            onClick={() => {
              toggleTheme()
            }}
          >
            Change Theme
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
