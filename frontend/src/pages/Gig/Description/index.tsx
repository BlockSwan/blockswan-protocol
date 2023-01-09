import {
   Box,
   Divider,
   Grid,
   List,
   ListItemText,
   ListItem,
   Stack,
   Typography,
} from '@mui/material'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { GigProps } from '../../../types/types'

function displayMetadata(
   selectableDeliverables: GigProps['selectableDeliverables']
) {
   return (
      <>
         {selectableDeliverables?.map((_del, delIndex: number) => (
            <Grid item xs={6} sm={6} md={4} key={`grid-data-${delIndex}`}>
               <List>
                  <ListItem disableGutters disablePadding>
                     <ListItemText
                        primary={_del?.name}
                        primaryTypographyProps={{
                           fontWeight: 'bold',
                           textTransform: 'uppercase',
                        }}
                     />
                  </ListItem>
                  {_del?.data?.map((el: any, index: number) => (
                     <ListItem
                        disableGutters
                        disablePadding
                        key={`metadata-${index}-${el}`}
                     >
                        <ListItemText primary={el} />
                     </ListItem>
                  ))}
               </List>
            </Grid>
         ))}
      </>
   )
}

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
            <Divider />
            <Grid container spacing={{ xs: 2, md: 2 }}>
               {displayMetadata(gig?.selectableDeliverables)}
            </Grid>
         </Stack>
      </>
   )
}

export default GigDescription
