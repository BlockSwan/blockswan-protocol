import { Box, Grid } from '@mui/material'

export const Footer = () => {
   return (
      <Box
         sx={{ pt: 2 }}
         width="100%"
         bgcolor="primary.main"
         color="secondary.main"
      >
         <Grid container spacing={3} columns={12}>
            <Grid xs={12} sm>
               <Box padding={1} textAlign="center">
                  Helloo
               </Box>
            </Grid>
            <Grid xs={12} sm={6}>
               <Box padding={1} textAlign="center">
                  Helloo
               </Box>{' '}
            </Grid>
            <Grid xs={12} sm>
               <Box padding={1} textAlign="center">
                  Helloo
               </Box>{' '}
            </Grid>
         </Grid>
      </Box>
   )
}
