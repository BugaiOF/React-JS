import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defalut'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/Global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
