import { styled, Theme, useTheme } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import {
   Avatar as MuiAvatar,
   AvatarProps as MuiAvatarProps,
} from '@mui/material'

const getSize = (size: string | undefined) => {
   switch (size) {
      case 'sm':
         return '2.2rem'
      case 'lg':
         return '8rem'
      case 'xl':
         return '12.4rem'
      default:
         return '3.9rem'
   }
}

const getBorder = (size: string | undefined, color: any) => {
   switch (size) {
      case 'sm':
         return `0.2rem solid ${color}`
      case 'lg':
         return `0.4rem solid ${color}`
      case 'xl':
         return `0.6rem solid ${color}`
      default:
         return `0.2rem solid ${color}`
   }
}

const getBadgeOffset = (size: string | undefined) => {
   switch (size) {
      case 'sm':
         return '0'
      case 'lg':
         return '-0.4rem'
      case 'xl':
         return '-0.6rem'
      default:
         return '-0.2rem'
   }
}

const getBadgeSize = (size: string | undefined) => {
   switch (size) {
      case 'sm':
         return '0.7rem'
      case 'lg':
         return '2.1rem'
      case 'xl':
         return '3.2rem'
      default:
         return '1rem'
   }
}

const getRadius = (size: string | undefined) => {
   switch (size) {
      case 'sm':
         return '0.5rem'
      case 'lg':
         return '1rem'
      case 'xl':
         return '2rem'
      default:
         return '0.7rem'
   }
}

const getOffsetColor = (offsetColor: string | undefined, theme: Theme) => {
   switch (offsetColor) {
      case 'primary.main':
         return theme?.palette?.primary?.main
      case 'primary.light':
         return theme?.palette?.primary?.light
      case 'secondary.main':
         return theme?.palette?.secondary?.main
      case 'secondary.light':
         return theme?.palette?.secondary?.light
      default:
         return 'white'
   }
}

export const OnlineBadge = styled(Badge)(({ theme }) => ({
   '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

      '&::after': {
         position: 'absolute',
         top: 0,
         right: 0,
         width: '100%',
         height: '100%',
         borderRadius: '50%',
         animation: 'ripple 1.2s infinite ease-in-out',
         border: '1px solid currentColor',
         content: '""',
      },
   },
   '@keyframes ripple': {
      '0%': {
         transform: 'scale(.8)',
         opacity: 1,
      },
      '100%': {
         transform: 'scale(2.4)',
         opacity: 0,
      },
   },
}))

type AvatarProps = MuiAvatarProps & {
   online?: boolean
   size?: 'sm' | 'lg' | 'xl' | undefined
   offsetColor?:
      | 'primary.main'
      | 'primary.light'
      | 'secondary.main'
      | 'secondary.light'
      | undefined
}

const Avatar = (props: AvatarProps) => {
   const { online, size, offsetColor, ...rest } = props
   const theme = useTheme()
   const offClr = getOffsetColor(offsetColor, theme)
   const avatar = (
      <MuiAvatar
         {...rest}
         sx={{
            width: getSize(size),
            height: getSize(size),
            borderRadius: getRadius(size),
         }}
      >
         {rest?.alt?.charAt(0)?.toUpperCase()}
      </MuiAvatar>
   )
   return (
      <OnlineBadge
         overlap="circular"
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
         }}
         sx={{
            width: getSize(size),
            height: getSize(size),
            position: 'relative',
            top: getBadgeOffset(size),
            right: getBadgeOffset(size),

            '.MuiBadge-badge': {
               width: getBadgeSize(size),
               height: getBadgeSize(size),
               borderRadius: '50%',
               boxShadow: `0 0 0 2px  ${offClr}`,
               border: getBorder(size, offClr),
            },
         }}
         variant={online ? 'dot' : undefined}
      >
         {avatar}
      </OnlineBadge>
   )
}

export default Avatar
