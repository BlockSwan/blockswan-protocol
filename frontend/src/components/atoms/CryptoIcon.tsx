import { Avatar, AvatarProps } from '@mui/material'

function getIconFromSymbol(symbol: string) {
   switch (symbol) {
      case 'MATIC':
         return 'https://cdn.iconscout.com/icon/free/png-512/polygon-token-4086724-3379854.png?f=avif&w=512'
      case 'USDC':
         return 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=024'
      case 'BSWAN':
         return './svg/contained-glyph.svg'
      default:
         return 'https://cdn.iconscout.com/icon/free/png-512/polygon-token-4086724-3379854.png?f=avif&w=512'
   }
}

export type CryptoIconProps = AvatarProps & {
   symbol: string
   size?: number
}

const CryptoIcon = ({
   symbol = 'MATIC',
   size = 24,
   ...props
}: CryptoIconProps) => {
   const dimensions = {
      height: size,
      width: size,
   }
   return (
      <Avatar
         sx={{
            bgcolor: 'secondary.light',
            ...dimensions,
         }}
         imgProps={{
            sx: {
               ...dimensions,
            },
         }}
         src={getIconFromSymbol(symbol)}
         {...props}
      />
   )
}

export default CryptoIcon
