import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defalut'

import { Button } from "./components/button"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

    <Button/>
    <Button/>
    <Button/>
    <Button/>
    </ThemeProvider>
  )
}

