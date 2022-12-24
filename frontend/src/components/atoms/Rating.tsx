import {
   Rating as MuiRating,
   RatingProps as MuiRatingProps,
   Stack,
   Typography,
} from '@mui/material'

type RatingProps = MuiRatingProps & {
   withGrade?: boolean
   amount?: number
}

export const Rating = (props: RatingProps) => {
   return (
      <>
         <Stack
            display={'flex'}
            direction="row"
            spacing={1}
            alignItems="center"
         >
            <MuiRating {...props} />
            {props.withGrade && (
               <Typography
                  color="#faaf00"
                  fontWeight={'bold'}
               >
                  {props.value}
               </Typography>
            )}
            {props.amount && (
               <Typography>({props.amount})</Typography>
            )}
         </Stack>
      </>
   )
}
