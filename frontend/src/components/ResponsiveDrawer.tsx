import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CategoryIcon from '@mui/icons-material/Category'
import LogoutIcon from '@mui/icons-material/Logout'

import Toolbar from '@mui/material/Toolbar'
import { Header } from './Header'
import {
   Avatar,
   Badge,
   Chip,
   Collapse,
   ListSubheader,
   styled,
   Theme,
   Typography,
   useMediaQuery,
} from '@mui/material'
import { CategoryProps } from '../types/types'
import { useAppNavigation } from '../hooks/useAppNavigation'
import { Stack } from '@mui/system'
import { useWeb3Context } from '../hooks/useWeb3Context'

interface Props {
   window?: () => Window
   children?: React.ReactNode
   withSubHeader?: boolean
   categories?: CategoryProps[]
}

const StyledListButton = styled(ListItemButton)(
   ({ theme }) => ({
      '&.Mui-selected': {
         borderRight: '2px solid',
         borderImageSlice: 1,
         borderWidth: '2px',
         borderImageSource:
            theme.blockswan.rainbowsVertical,
      },
   })
)

const listSX = {
   root: {},
}

export const ResponsiveDrawer = (props: Props) => {
   const { goToCategory, goToNewGig } = useAppNavigation()
   const { evmAddress } = useWeb3Context()
   const { window, children, categories } = props
   const [mobileOpen, setMobileOpen] = React.useState(false)
   const [catOpen, setCatOpen] = React.useState(false)
   const { provider } = useWeb3Context()
   const [selected, setSelected] = React.useState<
      string | null
   >('')
   const isSm = useMediaQuery('(max-width:600px)')

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
      console.log('ok')
   }
   let avatarSX = {
      height: 28,
      width: 28,
      bgcolor: 'primary.main',
   }

   const gigsSide = [
      {
         name: 'Manage gigs',
         onClick: () => {},
         selected: 'manage-gigs',
      },
      {
         name: 'Create a gig',
         onClick: () => goToNewGig(evmAddress),
         selected: 'new-gig',
      },
   ]

   const drawer = (
      <div>
         <Toolbar
            sx={{
               justifyContent: 'start',
               pl: 0,
               root: {
                  pl: 1,
               },
            }}
         >
            <Stack direction={'row'}>
               <img
                  style={{
                     width: '150px',
                     marginLeft: -10,
                  }}
                  src="svg/logo.svg"
                  alt="blockswan"
               />

               <Chip
                  sx={{ ml: 1 }}
                  label="TESTNET"
                  size="small"
               />
            </Stack>
         </Toolbar>
         <Divider />
         <List
            sx={{ pt: 2 }}
            disablePadding
            component={'div'}
         >
            <ListItem disablePadding>
               <ListItemButton sx={listSX}>
                  <ListItemIcon>
                     <Badge badgeContent={18} color="error">
                        <Avatar sx={avatarSX}>
                           <MailIcon fontSize="small" />
                        </Avatar>
                     </Badge>
                  </ListItemIcon>
                  <ListItemText primary={'Inbox'} />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton sx={listSX}>
                  <ListItemIcon>
                     <Avatar sx={avatarSX}>
                        <FavoriteIcon fontSize="small" />
                     </Avatar>
                  </ListItemIcon>
                  <ListItemText primary={'List'} />
               </ListItemButton>
            </ListItem>
         </List>
         <ListItemButton
            sx={listSX}
            onClick={() => setCatOpen(!catOpen)}
         >
            <ListItemIcon>
               <Avatar sx={avatarSX}>
                  <CategoryIcon fontSize="small" />
               </Avatar>
            </ListItemIcon>
            <ListItemText
               sx={{ ml: 0 }}
               primary="Categories"
            />
            {catOpen ? <ExpandLess /> : <ExpandMore />}
         </ListItemButton>
         <Collapse
            sx={{
               '&::-webkit-scrollbar': {
                  width: 0,
                  display: 'none',
               },
            }}
            in={catOpen}
            timeout="auto"
            unmountOnExit
         >
            <List disablePadding component={'div'}>
               {categories?.map((c, index) => (
                  <ListItem
                     onClick={() => {
                        c?.url && goToCategory(c?.url)
                        isSm && handleDrawerToggle()
                     }}
                     key={c?.name}
                     disablePadding
                  >
                     <ListItemButton sx={listSX}>
                        <ListItemIcon>
                           <Avatar
                              sx={{
                                 height: 28,
                                 width: 28,
                                 bgcolor: 'secondary.light',
                              }}
                           >
                              <Typography variant="h6">
                                 {c?.emoji}
                              </Typography>
                           </Avatar>
                        </ListItemIcon>
                        <ListItemText primary={c?.name} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Collapse>
         <Divider sx={{ pt: 2 }} />
         <List
            subheader={
               <ListSubheader
                  component="div"
                  id="nested-list-subheader"
               >
                  Selling
               </ListSubheader>
            }
         >
            {gigsSide.map((el, index) => (
               <ListItem key={el?.name} disablePadding>
                  <StyledListButton
                     onClick={() => {
                        setSelected(el?.selected)
                        el?.onClick()
                     }}
                     selected={index % 2 !== 0}
                  >
                     <ListItemText primary={el?.name} />
                  </StyledListButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List
            subheader={
               <ListSubheader
                  component="div"
                  id="nested-list-subheader"
               >
                  Buying
               </ListSubheader>
            }
         >
            {['Manage orders', 'Create an order'].map(
               (text, index) => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton
                        sx={{ pl: 2, ...listSX }}
                     >
                        <ListItemText primary={text} />
                     </ListItemButton>
                  </ListItem>
               )
            )}
         </List>{' '}
         <Divider />
         <ListItem disablePadding>
            <ListItemButton sx={listSX}>
               <ListItemIcon>
                  <Avatar
                     sx={{
                        ...avatarSX,
                        bgcolor: 'error.main',
                     }}
                  >
                     <LogoutIcon />
                  </Avatar>
               </ListItemIcon>
               <ListItemText primary={'Disconnect'} />
            </ListItemButton>
         </ListItem>
      </div>
   )

   const container =
      window !== undefined
         ? () => window().document.body
         : undefined

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <Header
            // drawerWidth={drawerWidth}
            onButtonClick={handleDrawerToggle}
            isAuthenticated={provider !== null}
         />
         <Box
            component="div"
            sx={{
               width: {
                  md: '270px',
               },
               flexShrink: { sm: 0 },
            }}
            aria-label="mailbox folders"
         >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: {
                     xs: 'block',
                     md: 'none',
                  },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: '270px',
                  },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: {
                     xs: 'none',
                     md: 'block',
                  },

                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: '270px',
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>

         <Box
            component="main"
            bgcolor={'secondary.light'}
            sx={{
               flexGrow: 1,
               p: 0,
               width: {
                  md: `calc(100% - 270px)`,
               },

               overflow: 'hidden',
            }}
         >
            {children}
         </Box>
      </Box>
   )
}
