import { Avatar, IconButton, IconButtonProps } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import NotesIcon from '@mui/icons-material/Notes'
import AbcIcon from '@mui/icons-material/Abc'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FilterListIcon from '@mui/icons-material/FilterList'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckIcon from '@mui/icons-material/Check'
import CachedIcon from '@mui/icons-material/Cached'
import RemoveIcon from '@mui/icons-material/Remove'
import Inventory2Icon from '@mui/icons-material/Inventory2'

import { MouseEventHandler, ReactNode } from 'react'

export type IconProps = IconButtonProps & {
   name: string
   bgColor?: string
   label?: string
   onClick?: MouseEventHandler<HTMLButtonElement>
   iconButtonChildren?: ReactNode
   sizing?: 'small' | 'medium' | 'default' | undefined
   iconColor?: string
}

function getIconSize(size: string | undefined) {
   switch (size) {
      case 'small':
         return {
            fontSize: '1.4rem',
         }
      case 'medium':
         return {
            fontSize: '1.7rem',
         }
      default:
         return {
            fontSize: '1.7rem',
         }
   }
}

function getAvatarSize(size: string | undefined) {
   switch (size) {
      case 'small':
         return {
            height: '28px',
            width: '28px',
         }
      case 'medium':
         return {
            height: '40px',
            width: '40px',
         }
      default:
         return {
            height: '40px',
            width: '40px',
         }
   }
}

function getIcon(name: string, sx: any): any {
   switch (name) {
      case 'delete':
         return {
            icon: <DeleteIcon />,
            color: 'error.main',
         }
      case 'done':
         return {
            icon: <DoneIcon />,
            color: 'success.main',
         }
      case 'cancel':
         return {
            icon: <CancelIcon />,
            color: 'primary.light',
         }
      case 'edit':
         return {
            icon: <EditIcon />,
            color: 'primary.light',
         }
      case 'add':
         return {
            icon: <AddIcon />,
            color: 'primary.light',
         }
      case 'remove':
         return {
            icon: <RemoveIcon />,
            color: 'primary.light',
         }
      case 'free-text':
         return {
            icon: <NotesIcon />,
            color: 'secondary.light',
         }
      case 'multiple-choice':
         return {
            icon: <AbcIcon />,
            color: 'secondary.light',
         }
      case 'file-attachment':
         return {
            icon: <AttachFileIcon />,
            color: 'secondary.light',
         }
      case 'menu-horizon':
         return {
            icon: <MoreHorizIcon />,
            color: 'secondary.light',
         }
      case 'back':
         return {
            icon: <ArrowBackIosNewIcon />,
            color: 'secondary.light',
         }
      case 'filter':
         return {
            icon: <FilterListIcon />,
            color: 'primary.main',
         }

      case 'time':
         return {
            icon: <AccessTimeIcon />,
            color: 'secondary.light',
         }
      case 'package':
         return {
            icon: <Inventory2Icon />,
            color: 'secondary.light',
         }
      case 'check':
         return {
            icon: <CheckIcon />,
            color: 'secondary.light',
         }
      case 'retry':
         return {
            icon: <CachedIcon />,
            color: 'secondary.light',
         }

      default:
         return {
            icon: 'O',
            color: 'error.main',
         }
   }
}

export const Icon = ({
   bgColor,
   name,
   onClick,
   iconButtonChildren,
   sizing = 'default',
   iconColor = '',
   ...iconButtonProps
}: IconProps) => {
   let fontSize: any = getIconSize(sizing)
   let avatarSx = getAvatarSize(sizing)
   let data = getIcon(name, fontSize)

   return (
      <IconButton
         sx={{
            borderColor: 'transparent',
            p: 0,
            ...avatarSx,
         }}
         onClick={onClick}
         {...iconButtonProps}
      >
         {iconButtonChildren}
         <Avatar
            sx={{
               bgcolor: bgColor ? bgColor : data.color,
               color: iconColor,
               ...avatarSx,
            }}
         >
            {data.icon}
         </Avatar>
      </IconButton>
   )
}
