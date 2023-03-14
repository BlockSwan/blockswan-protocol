import {
   AppBar,
   Box,
   IconButton,
   Toolbar,
   Badge,
   Typography,
   Stack,
   Button,
   Menu,
   Avatar,
   MenuItem,
   useMediaQuery,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { OnlineBadge } from './atoms/Avatar'
import { useState } from 'react'
import { useWeb3Context } from '../hooks/useWeb3Context'
import { useAppNavigation } from '../hooks/useAppNavigation'
import CryptoIcon from './atoms/CryptoIcon'
import ClaimMaticModal from '../elements/modals/ClaimMaticModal'

export interface IHeader {
   onButtonClick: () => void
   isAuthenticated: boolean
}

function renderMenuItem({
   isBorderBottom,
   name,
   onClick,
   emoji,
}: {
   isBorderBottom: boolean
   name: string
   onClick: () => void
   emoji: string | JSX.Element
}) {
   return (
      <MenuItem
         sx={{
            px: 2,
            py: 1,
            borderBottom: isBorderBottom
               ? ''
               : (theme) => `1px solid ${theme.palette.divider}`,
         }}
         key={name}
         onClick={(e) => {
            onClick()
         }}
      >
         {' '}
         <Typography fontWeight={500} textAlign="start">
            {emoji}
         </Typography>
         <Typography
            sx={{
               ml: 2,
            }}
            fontWeight={500}
            textAlign="start"
         >
            {name}
         </Typography>
      </MenuItem>
   )
}

export const Header = ({ onButtonClick, isAuthenticated }: IHeader) => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { login, logout, evmAddress } = useWeb3Context()
   const { goToUser } = useAppNavigation()
   const { userInfo } = useWeb3Context()

   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
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
         name: 'Claim MATIC',
         emoji: <CryptoIcon symbol="MATIC" />,
         onClick: () => {},
      },
      {
         name: 'Mint mUSDC',
         emoji: <CryptoIcon symbol="USDC" />,
         onClick: () => {},
      },
      {
         name: 'Invest in BSWAN',
         emoji: <CryptoIcon symbol="BSWAN" />,
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
               md: (theme) => `calc(100% - ${theme.drawerWidth}px)`,
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
                           <Badge badgeContent={17} color="error">
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
                              <Avatar src={userInfo?.profileImage}>
                                 {userInfo?.name?.charAt(0)}
                              </Avatar>
                           </OnlineBadge>
                           <Typography fontWeight={'bold'}>
                              {userInfo?.name}
                           </Typography>
                        </Stack>
                     </IconButton>
                     <Menu
                        PaperProps={{
                           sx: {
                              border: '1px solid',
                              borderTop: 'none',
                              boxShadow: 'none',
                              borderColor: (theme) => theme.palette.divider,
                           },
                           style: {
                              width: '250px',

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
                        {menus.map((setting, _index) =>
                           setting.name === 'Claim MATIC' ? (
                              <ClaimMaticModal
                                 opener={renderMenuItem({
                                    isBorderBottom:
                                       _index === menus?.length - 1,
                                    name: setting.name,
                                    emoji: setting.emoji,
                                    onClick: () => {
                                       handleCloseUserMenu()
                                       setting.onClick()
                                    },
                                 })}
                              />
                           ) : (
                              renderMenuItem({
                                 isBorderBottom: _index === menus?.length - 1,
                                 name: setting.name,
                                 emoji: setting.emoji,
                                 onClick: () => {
                                    handleCloseUserMenu()
                                    setting.onClick()
                                 },
                              })
                           )
                        )}
                     </Menu>
                  </Box>
               </>
            ) : (
               <Button onClick={async () => await login()} variant="contained">
                  Connect
               </Button>
            )}
         </Toolbar>
      </AppBar>
   )
}
