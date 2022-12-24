import { string } from 'yup'

interface FlagProps {
   code?: string
   width?: string
   height?: string
}

export const Flag = ({
   code = 'FR',
   width = '20',
   height = '20',
}: FlagProps) => {
   return (
      <img
         height={height}
         loading="lazy"
         width={width}
         src={`https://flagcdn.com/w20/${code?.toLowerCase()}.png`}
         srcSet={`https://flagcdn.com/w40/${code?.toLowerCase()}.png 2x`}
         alt=""
      />
   )
}
