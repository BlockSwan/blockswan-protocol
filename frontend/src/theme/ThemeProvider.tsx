import { ReactNode } from 'react'
import {
   CssBaseline,
   Theme,
   ThemeProvider as MuiThemeProvider,
} from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { AppStyles } from './AppStyles'

interface ThemeProviderProps {
   children: ReactNode
   theme: Theme
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
   return (
      <MuiThemeProvider theme={theme}>
         <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <AppStyles />
            {children}
         </StyledThemeProvider>
      </MuiThemeProvider>
   )
}
