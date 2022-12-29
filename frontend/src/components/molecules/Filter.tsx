import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Icon } from '../atoms/Icon'
import PauseIcon from '@mui/icons-material/Pause'
import {
   ListItemIcon,
   ListItemText,
   MenuList,
   Typography,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface MenuListProps {
   icon: React.ReactNode
   text: string
   value: string
}

interface FilterProps {
   selected: string
   onMenuClick: (value: string) => void
   list: MenuListProps[]
}

Filter.defaultProps = {
   selected: undefined,
   onMenuClick: (data: string) => {},
   list: [
      {
         icon: <PlayArrowIcon />,
         text: 'Active gigs',
         value: 'active',
      },
      {
         icon: <PauseIcon />,
         text: 'Paused gigs',
         value: 'pause',
      },
   ],
}

export default function Filter({
   selected,
   onMenuClick,
   list,
}: FilterProps) {
   const [anchorEl, setAnchorEl] =
      React.useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)

   const handleClick = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <div>
         <Icon
            aria-haspopup="true"
            aria-controls={open ? 'basic-menu' : undefined}
            sizing="small"
            aria-expanded={open ? 'true' : undefined}
            name="filter"
            onClick={handleClick}
         />

         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ mt: 2 }}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuList
               sx={{ minWidth: '230px' }}
               disablePadding
            >
               {list?.map((e: MenuListProps, i: number) => (
                  <MenuItem
                     key={`${e?.value}-${i}`}
                     onClick={() => {
                        handleClose()
                        onMenuClick(e?.value)
                     }}
                  >
                     <ListItemIcon
                        sx={{
                           color:
                              selected === e?.value
                                 ? 'primary.main'
                                 : '',
                        }}
                     >
                        {e?.icon}
                     </ListItemIcon>
                     <ListItemText>
                        <Typography
                           fontWeight={
                              selected === e?.value
                                 ? 'bold'
                                 : ''
                           }
                        >
                           {e?.text}
                        </Typography>
                     </ListItemText>
                  </MenuItem>
               ))}
            </MenuList>
         </Menu>
      </div>
   )
}
