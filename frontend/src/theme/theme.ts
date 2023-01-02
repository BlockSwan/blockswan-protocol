import { createTheme } from '@mui/material/styles'
import { colors } from './colors'
import { radius, drawerWidth } from './dimensions'
import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
   typography: {
      fontFamily: ['Saira', 'Roboto'].join(','),
   },
   components: {
      // Name of the component
      MuiAppBar: {
         styleOverrides: {
            // Name of the slot
            root: {
               background: colors.white,
               boxShadow: 'none',
               borderBottom: '1px solid',
               borderColor: colors.divider,
               borderRadius: 2,
            },
         },
      },
      MuiDrawer: {
         styleOverrides: {
            // Name of the slot
            root: {
               margin: 10,
               borderRadius: 2,
            },
         },
      },
      MuiToolbar: {
         styleOverrides: {
            root: {
               borderRadius: 2,
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            // Name of the slot
            root: {
               borderRadius: radius,
               fontWeight: 'bold',
               fontStyle: 'italic',
            },
         },
      },
      MuiIconButton: {
         styleOverrides: {
            root: {
               borderRadius: radius,
               border: '1px solid',
               borderColor: colors.divider,
            },
         },
      },
      MuiAvatar: {
         styleOverrides: {
            root: {
               borderRadius: radius,
            },
         },
      },
      MuiCard: {
         styleOverrides: {
            root: {
               border: 'none',
               borderRadius: radius,
            },
         },
      },

      MuiListItemButton: {
         styleOverrides: {},
      },

      MuiAccordion: {
         styleOverrides: {
            root: {
               borderRadius: radius,
               background: 'transparent',
               border: 'none',
               boxShadow: 'none',
            },
         },
      },
      MuiAccordionDetails: {
         styleOverrides: {
            root: {},
         },
      },

      MuiPaper: {
         styleOverrides: {
            root: {
               borderRadius: radius,
            },
         },
      },
      MuiCheckbox: {
         styleOverrides: {
            root: {
               borderRadius: radius,
            },
         },
      },
      MuiStepIcon: {
         styleOverrides: {
            root: {},
            completed: {},
         },
      },
      MuiChip: {
         styleOverrides: {
            root: {
               borderRadius: radius,
               fontWeight: 'bold',
               fontStyle: 'italic',
               transition: '0.5s ease-in-out',
               '&:hover': {
                  backgroundColor: colors.darkKnight,
                  color: colors.white,
                  '& .MuiChip-deleteIcon': {
                     transition: '0.5s ease-in-out',
                     color: colors.white,
                  },
               },
            },
         },
      },
   },
   shape: {
      borderRadius: 8,
   },
   palette: {
      primary: {
         main: colors.darkKnight,
         light: colors.darkKnight50,
      },
      secondary: {
         main: colors.white,
         light: colors.lightGray,
         dark: colors.greyGoose,
      },
      success: {
         main: colors.superGreen,
         light: colors.superGreen25,
         dark: colors.superGreen50,
      },
      warning: {
         main: colors.yellowSubmarine75,
         light: colors.yellowSubmarine75,
         dark: colors.yellowSubmarine75,
      },
      divider: colors.divider,
   },
   //custom theme variables
   bg: {
      main: '#fff',
      light: '#ffffff',
   },
   text: {
      main: '#141E1E',
      light: '#ffffff',
   },
   blockswan: colors,
   drawerWidth: drawerWidth,
})

export default theme
