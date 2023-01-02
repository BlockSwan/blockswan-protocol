import { Box, Stack, Typography } from '@mui/material'
import { useGigsContext } from '../../../hooks/useGigsContext'

const GigDescription = () => {
   const { gig } = useGigsContext()
   return (
      <>
         <Stack spacing={2}>
            <Typography variant="h5" fontWeight="bold">
               About this gig
            </Typography>
            <Box>
               <div
                  dangerouslySetInnerHTML={{ __html: gig?.description?.html }}
               ></div>
            </Box>
         </Stack>
      </>
   )
}

export default GigDescription
