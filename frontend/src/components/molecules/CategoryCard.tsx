import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
   Avatar,
   CardActionArea,
   SxProps,
} from '@mui/material'

const bull = (
   <Box
      component="span"
      sx={{
         display: 'inline-block',
         mx: '2px',
         transform: 'scale(0.8)',
      }}
   >
      •
   </Box>
)

interface CategoryCardProps {
   name?: string
   description?: string
   emoji?: string
   onClick?: React.MouseEventHandler
   cardSx?: SxProps
   isActionButton?: boolean
   elevation?: number
}

export default function CategoryCard({
   name,
   description,
   emoji,
   onClick,
   cardSx,
   isActionButton = true,
   elevation = 1,
}: CategoryCardProps) {
   const isBull = (c: string) => c === '|'

   return (
      <Card
         elevation={elevation}
         onClick={onClick}
         sx={{
            minWidth: 275,
            justifyContent: 'space-between',
            ...cardSx,
         }}
      >
         <CardActionArea
            sx={{
               height: '100%',
               display: 'flex',
               justifyContent: 'space-between',
               flexDirection: 'column',
            }}
         >
            <CardContent sx={{ width: '100%' }}>
               <Typography
                  paddingBottom={2}
                  variant="h5"
                  component="div"
               >
                  {name
                     ?.replace(' & ', '|')
                     .split('')
                     ?.map((l: string) => (
                        <>{isBull(l) ? <>{bull}</> : l}</>
                     ))}
               </Typography>
               <Typography sx={{}} color="text.secondary">
                  {description}
               </Typography>
            </CardContent>
            {isActionButton && (
               <CardActions
                  style={{
                     justifyContent: 'space-between',
                     width: '100%',
                  }}
               >
                  <Button size="small" disabled>
                     Learn More
                  </Button>
                  <Avatar
                     style={{
                        background: 'transparent',
                     }}
                  >
                     {emoji}
                  </Avatar>
               </CardActions>
            )}
         </CardActionArea>
      </Card>
   )
}
