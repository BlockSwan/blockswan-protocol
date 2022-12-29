import {
   Box,
   Grid,
   Pagination,
   Stack,
   Zoom,
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import Filter from '../../../components/molecules/Filter'
import GigCard from '../../../components/molecules/GigCard'
import { useBannerContext } from '../../../hooks/useBannerContext'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import DeleteIcon from '@mui/icons-material/Delete'
import PauseIcon from '@mui/icons-material/Pause'
import { GigProps, UserProps } from '../../../types/types'
import { useUsersContext } from '../../../hooks/useUsersContext'
import GigService from '../../../services/GigService'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { defaultGig } from '../../../constants/default'

const filterList = [
   {
      icon: <PlayArrowIcon />,
      text: 'Active gigs',
      value: 'active',
   },
   {
      icon: <PauseIcon />,
      text: 'Paused gigs',
      value: 'pause',
   },
]

const Gigs = () => {
   const { state, setBanner, hideBanner } =
      useBannerContext()
   const { userData, evmAddress } = useWeb3Context()
   const { goToEditGig } = useAppNavigation()
   const [page, setPage] = useState(1)
   const { user, setUser } = useUsersContext()

   const MAX_PER_PAGE = 6
   const handlePage = (_page: number) => setPage(_page)
   const start = (page - 1) * 6
   const end = start + 6

   const [filter, setFilter] = useState<
      'active' | 'pause' | string
   >('active')

   const gigs = useMemo(() => {
      if (filter === 'active') {
         return [
            defaultGig,
            ...(user?.gigs?.filter(
               (e) => e?.isPaused === false
            ) || []),
         ]
      } else
         return [
            defaultGig,
            ...(user?.gigs?.filter(
               (e) => e?.isPaused === true
            ) || []),
         ]
   }, [filter, user?.gigs])

   const toggleDeleteBanner = (_gigId: string) => {
      setBanner({
         ...state,

         variant: 'filled',
         severity: 'error',
         title: 'Deleting a gig',
         description:
            'You are trying to delete a gig. This action is irreversible. Are you sure?',
         actions: [
            {
               name: 'Cancel',
               props: {
                  variant: 'text',
                  color: 'secondary',
                  onClick: () => hideBanner(),
               },
            },
            {
               props: {
                  color: 'secondary',
                  variant: 'contained',
                  endIcon: <DeleteIcon />,
                  onClick: () => {
                     if (user) {
                        GigService.delete(
                           user.evmAddress,
                           _gigId,
                           true
                        )
                           .then((data: UserProps) => {
                              console.log(data)
                              setUser(data)
                              hideBanner()
                           })
                           .catch((err) =>
                              console.error(err)
                           )
                     }
                  },
               },
               name: 'DELETE',
            },
         ],
      })
   }

   const togglePauseBanner = (
      _gigId: string,
      isPaused: boolean
   ) => {
      setBanner({
         ...state,
         variant: 'filled',
         severity: 'info',

         title: isPaused ? 'Pause a gig' : 'Activate a gig',
         description: `You are trying to ${
            !isPaused ? 'activate' : 'pause'
         } a gig. Are you sure?`,
         actions: [
            {
               name: 'Cancel',
               props: {
                  variant: 'text',
                  color: 'secondary',
                  onClick: () => hideBanner(),
               },
            },
            {
               props: {
                  color: 'secondary',
                  variant: 'contained',
                  endIcon: !isPaused ? (
                     <PlayArrowIcon />
                  ) : (
                     <PauseIcon />
                  ),
                  onClick: () => {
                     if (user) {
                        GigService.pause(
                           user.evmAddress,
                           _gigId,
                           isPaused
                        )
                           .then((data: UserProps) => {
                              console.log(data)
                              setUser(data)
                              hideBanner()
                           })
                           .catch((err: any) =>
                              console.error(err)
                           )
                     }
                  },
               },
               name: !isPaused ? 'ACTIVATE' : 'PAUSE',
            },
         ],
      })
   }

   return (
      <>
         <Stack
            direction="row"
            alignItems={'center'}
            width="100%"
         >
            <Pagination shape="rounded" />
            <Box flexGrow={1} />
            <Filter
               selected={filter}
               onMenuClick={(data: string) =>
                  setFilter(data)
               }
               list={filterList}
            />
         </Stack>
         {gigs?.map((gig: GigProps, index: number) => (
            <Zoom
               style={{
                  transitionDelay: `${index * 100}ms`,
               }}
               in={true}
               key={gig?._id}
            >
               <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  display="flex"
               >
                  {' '}
                  <GigCard
                     isUser={true}
                     isNew={index === 0}
                     avatarSrc={userData?.defaultProfileImg}
                     imgSrc={
                        gig?.imgs &&
                        typeof gig?.imgs[0] === 'string'
                           ? gig?.imgs[0]
                           : undefined
                     }
                     onDelete={() =>
                        toggleDeleteBanner(gig?._id)
                     }
                     onActivate={() =>
                        togglePauseBanner(
                           gig?._id,
                           !gig?.isPaused
                        )
                     }
                     onEdit={() => {
                        if (
                           evmAddress &&
                           gig?.metadataHash
                        ) {
                           goToEditGig(evmAddress, gig)
                           console.log(gig)
                        }
                     }}
                     onPause={() =>
                        togglePauseBanner(
                           gig?._id,
                           !gig?.isPaused
                        )
                     }
                     isPaused={gig?.isPaused}
                     title={gig?.title}
                     username={userData?.username}
                     date={gig?._createdAt}
                     price={gig?.packages[0]?.price}
                  />{' '}
               </Grid>
            </Zoom>
         ))}
      </>
   )
}

export default Gigs
