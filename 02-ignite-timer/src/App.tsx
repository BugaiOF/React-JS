import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defalut'

import { Button } from "./components/button"
import { GlobalStyle } from './styles/Global'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

    <Button/>
    <Button/>
    <Button/>
    <Button/>


    <GlobalStyle/>
    </ThemeProvider>
  )
}

