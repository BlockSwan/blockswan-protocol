import {
   Checkbox,
   Divider,
   Grid,
   Paper,
   Stack,
   Typography,
} from '@mui/material'
import { useState } from 'react'
import GigCard from '../../../components/molecules/GigCard'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useProtocolContext } from '../../../hooks/useProtocolContext'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import GigService from '../../../services/GigService'
import { PackageProps } from '../../../types/types'

const NewGigPublish = () => {
   const { goToNewGigGallery } = useAppNavigation()
   const { calcEarningWithTrial, calcEarningNoTrial } =
      useProtocolContext()
   const { gig } = useGigsContext()
   const { evmAddress } = useWeb3Context()
   const [checked, setChecked] = useState<boolean>(false)
   const handleChecked = () => setChecked((check) => !check)

   const onCreateGig = () => {
      GigService.create(gig, evmAddress)
   }

   return (
      <NewGigLayout
         step={5}
         setStep={() => {}}
         onNext={() => onCreateGig()}
         isNextDisabled={!checked}
         onBack={() => goToNewGigGallery(evmAddress)}
         children={
            <>
               <pre>{JSON.stringify(gig, null, 4)}</pre>
               <Grid container spacing={2}>
                  <Grid
                     item
                     sm={12}
                     md={8}
                     gap={2}
                     display="flex"
                     flexDirection={'column'}
                  >
                     <Typography variant="h6">
                        Approve the following to start
                        selling.
                     </Typography>

                     <Typography variant="body1">
                        Let’s make sure you’re fully
                        understanding our pricing system
                     </Typography>
                     {gig?.packages?.map(
                        (
                           p: PackageProps,
                           index: number
                        ) => (
                           <>
                              <Divider />
                              <Stack>
                                 <Typography fontWeight="bold">
                                    {index === 0
                                       ? 'Basic'
                                       : index === 1
                                       ? 'Standard'
                                       : 'Premium'}{' '}
                                    Package:
                                 </Typography>
                                 <Typography>
                                    Your service is listed
                                    at {p.price}$
                                 </Typography>
                                 <Typography>
                                    {'> '} You will
                                    receive&nbsp;
                                    {calcEarningNoTrial(
                                       p.price
                                    )}
                                    $ of this sale if no
                                    conflict is raised.{' '}
                                 </Typography>
                                 <Typography>
                                    {'> '}
                                    You will receive&nbsp;
                                    {calcEarningWithTrial(
                                       p.price
                                    )}
                                    $ if you or the seller
                                    call for a trial
                                 </Typography>
                              </Stack>
                              <Divider
                                 sx={{
                                    display:
                                       index ===
                                       gig?.packages
                                          ?.length -
                                          1
                                          ? 'block'
                                          : 'none',
                                 }}
                              />{' '}
                           </>
                        )
                     )}

                     <Stack
                        direction="row"
                        gap={1}
                        alignItems={'center'}
                     >
                        <Checkbox
                           checked={checked}
                           onChange={handleChecked}
                           color="success"
                        />
                        <Typography>Understood</Typography>
                     </Stack>
                  </Grid>
                  <Grid
                     item
                     sm={12}
                     md={4}
                     display="flex"
                     justifyContent={'end'}
                  >
                     <Paper
                        elevation={0}
                        sx={{
                           p: 2,
                           width: 'fit-content',
                           height: '100%',
                           display: 'flex',
                           alignItem: 'center',
                           justifyContent: 'center',
                           background: (theme) =>
                              theme.palette.secondary.light,
                        }}
                     >
                        <GigCard
                           title={gig?.title}
                           username={'Osc'}
                           imgSrc={URL.createObjectURL(
                              gig?.imgs[0]
                           )}
                        />
                     </Paper>
                  </Grid>
               </Grid>
            </>
         }
         buttonNextText={'Create this gig!'}
      />
   )
}

export default NewGigPublish
