import ThemeContext from '../contexts/ThemeContext'
import { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../theme'

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
