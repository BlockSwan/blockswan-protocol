import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { PackageProps } from '../../../types/types'
import { c2 } from '../../../utils/formatters'
import {
   Button,
   Card,
   Divider,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Stack,
   styled,
} from '@mui/material'
import { Icon, IconProps } from '../../../components/atoms/Icon'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function tabTitle(index: number) {
   switch (index) {
      case 0:
         return 'Basic'
      case 1:
         return 'Standard'
      case 2:
         return 'Premium'
      default:
         return 'Basic'
   }
}

interface TabPanelProps {
   children?: React.ReactNode
   index: number
   value: number
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

interface ItemProps {
   label: string
   iconProps?: IconProps
}

const Item = ({ label, iconProps }: ItemProps) => (
   <ListItem disableGutters>
      <ListItemIcon>
         <Icon
            name={iconProps?.name || 'check'}
            sizing={iconProps?.sizing || 'small'}
            iconColor={iconProps?.iconColor || 'primary.light'}
         />
      </ListItemIcon>
      <ListItemText primary={label} />
   </ListItem>
)

Item.defaultProps = {
   label: '',
   iconProps: {
      name: 'time',
      sizing: 'small',
      iconColor: 'primary.light',
   },
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}
const StickyCard = styled(Box)(({ theme }) => ({
   alignSelf: 'start',
   borderRadius: 0,
   position: 'sticky',
   width: '100%',
   top: '64px',
   right: 0,
}))

export default function GigSide() {
   const [value, setValue] = React.useState(0)
   const { gig } = useGigsContext()
   const { packages } = gig

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
   }

   return (
      <StickyCard>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
               variant="fullWidth"
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
               sx={{
                  minHeight: '64px',
                  '& .MuiTabs-indicator': {
                     height: '100%',
                     color: 'white',
                     backgroundImage: (theme) => theme.palette.primary.main,
                     borderRadius: '8px',
                     zIndex: 0,
                  },
                  '& .MuiTabs-flexContainer': {
                     height: '100%',
                  },

                  '& .MuiTab-root.Mui-selected': {
                     transition: '0.2s ease-in-out',
                     color: 'white',
                     zIndex: 1,
                  },

                  height: '100%',
               }}
            >
               {packages?.map((pack: PackageProps, index: number) => (
                  <Tab
                     sx={{ zIndex: 1 }}
                     key={`tab-${index}`}
                     label={tabTitle(index)}
                     {...a11yProps(index)}
                  />
               ))}
            </Tabs>
         </Box>
         {packages?.map((pack: PackageProps, index: number) => (
            <TabPanel value={value} index={index} key={`tab-panel-${index}`}>
               <Typography variant="h4" fontWeight="bold">
                  {c2.format(pack?.price)}
               </Typography>
               <Typography variant="overline">{pack?.name}</Typography>
               <Typography variant="body1">{pack?.deliverable}</Typography>
               <Stack direction="row">
                  <Item label={`${pack?.delivery} day(s)`} />
                  <Item
                     label={`${pack?.revision} revision(s)`}
                     iconProps={{ name: 'retry' }}
                  />
               </Stack>
               <List>
                  {pack?.includes?.map((inc, indexInc: number) => (
                     <Item
                        iconProps={{ name: 'check', iconColor: 'success.main' }}
                        key={`includes-${index}-${indexInc}`}
                        label={inc?.name || ''}
                     />
                  ))}
               </List>
               <Button
                  fullWidth
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
               >
                  CONTINUE
               </Button>
               <Button fullWidth variant="text">
                  SEE PACKAGES
               </Button>
               <Divider />
            </TabPanel>
         ))}
         <Box flexGrow={1} flexDirection="column" display="flex" />
      </StickyCard>
   )
}
