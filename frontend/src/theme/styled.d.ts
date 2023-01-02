import 'styled-components'
import { Theme } from '@mui/material/styles'
interface CustomTheme {
   bg: {
      main: string
      light: string
   }
   text: {
      main: string
      light: string
   }
   blockswan: {
      redOctober: string
      redOctober75: string
      redOctober50: string
      redOctober25: string
      orangeClockwork: string
      orangeClockwork75: string
      orangeClockwork50: string
      orangeClockwork25: string
      yellowSubmarine: string
      yellowSubmarine75: string
      yellowSubmarine50: string
      yellowSubmarine25: string
      superGreen: string
      superGreen75: string
      superGreen50: string
      superGreen25: string
      manhattanBlue: string
      manhattanBlue75: string
      manhattanBlue50: string
      manhattanBlue25: string
      purpleRain: string
      purpleRain75: string
      purpleRain50: string
      purpleRain25: string
      rainbows: string
      rainbowsVertical: string
      rainbowsVerticalInverted: string
      economy: string
      education: string
      environment: string
      health: string
      rights: string
      other: string
   }
   drawerWidth: number
}
declare module '@mui/material/styles' {
   interface Theme extends CustomTheme {}
   interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}
