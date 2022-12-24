import {
   AppBar,
   Box,
   IconButton,
   Toolbar,
   Badge,
   Typography,
   Stack,
   Avatar,
   Button,
   Menu,
   MenuItem,
   useMediaQuery,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { OnlineBadge } from './atoms/Avatar'
import { useState } from 'react'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { useAppNavigation } from '../hooks/useAppNavigation'

export interface IHeader {
   onButtonClick: () => void
   isAuthenticated: boolean
}

export const Header = ({
   onButtonClick,
   isAuthenticated,
}: IHeader) => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { login, logout, evmAddress } = useWeb3Context()
   const { goToUser } = useAppNavigation()
   const { userInfo } = useWeb3Context()

   const [anchorElUser, setAnchorElUser] =
      useState<null | HTMLElement>(null)
   const handleOpenUserMenu = (
      event: React.MouseEvent<HTMLElement>
   ) => {
      setAnchorElUser(event.currentTarget)
   }

   const handleCloseUserMenu = () => {
      setAnchorElUser(null)
   }

   const menus = [
      {
         name: 'Profile',
         emoji: '👤',
         onClick: () => goToUser(evmAddress),
      },
      {
         name: 'Dashboard',
         emoji: '💹',
         onClick: () => {},
      },
      {
         name: 'Disconnect',
         emoji: '🔌',
         onClick: logout,
      },
   ]

   return (
      <AppBar
         position="fixed"
         sx={{
            width: {
               md: (theme) =>
                  `calc(100% - ${theme.drawerWidth}px)`,
            },
            ml: {
               md: (theme) => `${theme.drawerWidth}px`,
            },
         }}
      >
         <Toolbar>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               edge="start"
               size="small"
               onClick={() => {
                  onButtonClick()
                  console.log('app')
               }}
               style={{ border: 'none' }}
               sx={{ mr: 2, display: { md: 'none' } }}
            >
               <img
                  style={{ height: '2.5rem' }}
                  src="svg/contained-glyph.svg"
                  alt="blockswan"
               />
            </IconButton>

            {/* <SearchInput
          placeholder="Search for..."
          style={{ width: 'fit-content' }}
        /> */}
            <Box sx={{ flexGrow: 1 }} />
            {isAuthenticated ? (
               <>
                  {' '}
                  <Box sx={{ display: { md: 'flex' } }}>
                     <Stack direction="row" spacing={1}>
                        <IconButton
                           aria-label="show 17 new notifications"
                           color="inherit"
                        >
                           <Badge
                              badgeContent={17}
                              color="error"
                           >
                              <NotificationsIcon color="primary" />
                           </Badge>
                        </IconButton>
                     </Stack>
                  </Box>
                  <Box flexGrow={0}>
                     <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{
                           border: 'none',
                           padding: 'none',
                           ml: (theme) => theme.spacing(1),
                        }}
                     >
                        <Stack
                           alignItems={'center'}
                           direction={'row'}
                           spacing={1}
                        >
                           <OnlineBadge
                              overlap="circular"
                              anchorOrigin={{
                                 vertical: 'bottom',
                                 horizontal: 'right',
                              }}
                              variant="dot"
                           >
                              <Avatar
                                 src={
                                    userInfo?.profileImage
                                 }
                              >
                                 {userInfo?.name?.charAt(0)}
                              </Avatar>
                           </OnlineBadge>
                           <Typography fontWeight={'bold'}>
                              Oscarmac
                           </Typography>
                        </Stack>
                     </IconButton>
                     <Menu
                        PaperProps={{
                           sx: {
                              border: '1px solid',
                              borderTop: 'none',
                              boxShadow: 'none',
                              borderColor: (theme) =>
                                 theme.palette.divider,
                           },
                           style: {
                              width: '200px',

                              borderTopRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderBottomRightRadius: 0,
                           },
                        }}
                        sx={{
                           mt: isSm ? '41px' : '49px',

                           left: '24px',
                        }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'bottom',
                           horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                     >
                        {menus.map((setting, _index) => (
                           <MenuItem
                              sx={{
                                 px: 2,
                                 py: 1,
                                 borderBottom:
                                    _index ===
                                    menus?.length - 1
                                       ? ''
                                       : (theme) =>
                                            `1px solid ${theme.palette.divider}`,
                              }}
                              key={setting.name}
                              onClick={(e) => {
                                 handleCloseUserMenu()
                                 setting.onClick()
                              }}
                           >
                              {' '}
                              <Typography
                                 fontWeight={500}
                                 textAlign="start"
                              >
                                 {setting.emoji}
                              </Typography>
                              <Typography
                                 sx={{
                                    ml: 2,
                                 }}
                                 fontWeight={500}
                                 textAlign="start"
                              >
                                 {setting.name}
                              </Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
               </>
            ) : (
               <Button
                  onClick={async () => await login()}
                  variant="contained"
               >
                  Connect
               </Button>
            )}
         </Toolbar>
      </AppBar>
   )
}
