import {
   Button,
   Card,
   CardContent,
   Divider,
   Stack,
   Typography,
} from '@mui/material'
import Avatar from '../../../components/atoms/Avatar'
import { Flag } from '../../../components/atoms/Flag'
import { Rating } from '../../../components/atoms/Rating'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { getTimeSince } from '../../../utils/formatters'

const AboutSeller = () => {
   const { gig } = useGigsContext()
   return (
      <Stack spacing={2}>
         <Divider />
         <Typography variant="h5" fontWeight="bold">
            About the seller
         </Typography>

         <Stack direction="row" alignItems={'center'} gap={2}>
            <Avatar
               offsetColor={'secondary.light'}
               alt={gig?.seller?.username}
               src={gig?.seller?.defaultProfileImg}
               size="lg"
               online={true}
            />
            <Stack gap={1}>
               <Typography variant="h5" fontWeight="bold">
                  {gig?.seller?.username}
               </Typography>
               <Rating readOnly value={4.2} amount={4} />
               <Button variant="outlined">Contact me</Button>
            </Stack>
         </Stack>
         <Card
            sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: 2,
               padding: 2,
            }}
         >
            <Stack
               direction={'row'}
               alignItems="center"
               width="100%"
               justifyContent="space-between"
            >
               <Stack>
                  <Typography fontWeight="bold" textTransform="uppercase">
                     FROM
                  </Typography>
                  <Stack direction={'row'} alignItems="center" gap={2}>
                     <Flag code={gig?.seller?.country?.code} />
                     <Typography>{gig?.seller?.country?.label}</Typography>
                  </Stack>
               </Stack>
               <Stack>
                  <Typography fontWeight="bold" textTransform="uppercase">
                     MEMBER SINCE
                  </Typography>
                  <Stack direction={'row'} alignItems="center" gap={2}>
                     <Typography>
                        {getTimeSince(gig?.seller?.createdAt)}
                     </Typography>
                  </Stack>
               </Stack>
            </Stack>
            <Divider />
            <Typography paragraph>{gig?.seller?.description}</Typography>
         </Card>
      </Stack>
   )
}

export default AboutSeller
