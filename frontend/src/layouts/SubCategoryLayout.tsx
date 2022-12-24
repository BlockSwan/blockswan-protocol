import {
   Box,
   Stack,
   Toolbar,
   Typography,
   useMediaQuery,
   Grid,
   Container,
   Paper,
} from '@mui/material'
import { Select } from '../components/atoms/Select'
import { AnimatedBanner } from '../components/molecules/AnimatedBanner'
import GigCard from '../components/molecules/GigCard'
import PriceSlider from '../components/molecules/PriceSlider'

export const SubCategoryLayout = () => {
   const isSm = useMediaQuery('(max-width:600px)')
   return (
      <>
         <Container>
            <Toolbar />

            <Box height={'auto'} bgcolor="primary.main">
               <AnimatedBanner
                  height={isSm ? '24rem' : '12rem'}
               >
                  <Stack
                     direction="column"
                     spacing={2}
                     justifyContent="center"
                     alignItems={'center'}
                     display={'flex'}
                  >
                     <Typography
                        sx={{ mb: 0 }}
                        textAlign="center"
                        fontWeight={'bold'}
                        variant="h4"
                        textTransform={'uppercase'}
                        gutterBottom
                     >
                        Smart contract develepement
                     </Typography>
                     <Typography
                        fontWeight={900}
                        variant="h6"
                        gutterBottom
                     >
                        Share your words across-in any forms
                     </Typography>
                  </Stack>
               </AnimatedBanner>
            </Box>

            <Box padding={2}>
               <Box display={'flex'}>
                  <Paper style={{ width: '100%' }}>
                     <Stack direction="row" width={'100%'}>
                        <PriceSlider />
                        <Box flexGrow={1} width="100%" />
                        <Select />
                     </Stack>
                  </Paper>
               </Box>
               <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={2}
               >
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                     (gig) => (
                        <Grid item xs={12} md={3}>
                           {' '}
                           <GigCard />{' '}
                        </Grid>
                     )
                  )}
               </Grid>
            </Box>
         </Container>
      </>
   )
}
