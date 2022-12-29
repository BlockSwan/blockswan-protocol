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
import { useUsersContext } from '../../../hooks/useUsersContext'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import GigService from '../../../services/GigService'
import { PackageProps } from '../../../types/types'

const NewGigPublish = () => {
   const { goToNewGigGallery, goToUser } =
      useAppNavigation()
   const { calcEarningWithTrial, calcEarningNoTrial } =
      useProtocolContext()
   const { user, setUser } = useUsersContext()
   const { gig, isEditing } = useGigsContext()
   const { evmAddress } = useWeb3Context()
   const [checked, setChecked] = useState<boolean>(false)
   const handleChecked = () => setChecked((check) => !check)

   const onCreateGig = () => {
      if (user) {
         GigService.create(gig, evmAddress).then((data) => {
            setUser(data)
            goToUser(user.evmAddress)
         })
      }
   }

   return (
      <NewGigLayout
         step={5}
         setStep={() => {}}
         onNext={() => onCreateGig()}
         isNextDisabled={!checked}
         buttonNextText={
            isEditing ? 'Edit this gig!' : 'Create this gig'
         }
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
                           avatarSrc={
                              user?.defaultProfileImg
                           }
                           title={gig?.title}
                           username={user?.username}
                           imgSrc={
                              typeof gig?.imgs[0] ===
                              'string'
                                 ? gig?.imgs[0]
                                 : URL.createObjectURL(
                                      gig?.imgs[0]
                                   )
                           }
                        />
                     </Paper>
                  </Grid>
               </Grid>
            </>
         }
      />
   )
}

export default NewGigPublish
