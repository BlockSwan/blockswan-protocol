import { Box, Tabs as MuiTabs, TabsProps } from '@mui/material'

export interface TabPanelProps {
   children?: React.ReactNode
   index: number
   value: number
}

export const a11yProps = (index: number) => {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export const TabPanel = (props: TabPanelProps) => {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={false}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         <Box height={'fit-content'} overflow="scroll" padding={2}>
            {value === index && children}
         </Box>
      </div>
   )
}

export const Tabs = (props: TabsProps) => {
   return (
      <MuiTabs
         variant="scrollable"
         scrollButtons="auto"
         sx={{
            '& .MuiTabs-indicator': {
               backgroundImage: (theme) => theme.blockswan.rainbows,
            },
            '& .MuiTabs-flexContainer': {
               height: '100%',
            },
            height: '100%',
            width: '100%',
         }}
         {...props}
      >
         {props?.children}
      </MuiTabs>
   )
}
