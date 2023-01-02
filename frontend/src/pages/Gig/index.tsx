import {
   Grid,
   Paper,
   Toolbar,
   Tabs,
   Tab,
   Box,
   Grow,
   Breadcrumbs,
   useMediaQuery,
} from '@mui/material'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import React, { useEffect } from 'react'
import { UpAndDown, LeftAndRight } from '../../anim/Transitions'
import { useParams } from 'react-router-dom'
import GigSide from './Side'
import Gigs from '../User/Main/Gigs'
import Reviews from '../User/Main/Reviews'
import { useAppNavigation } from '../../hooks/useAppNavigation'
import Overview from './Overview'
import GigService from '../../services/GigService'
import { useGigsContext } from '../../hooks/useGigsContext'
import GigDescription from './Description'
import ScrollspyNav from 'react-scrollspy-nav'

interface TabPanelProps {
   children?: React.ReactNode
   index: number
   value: number
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         <Box height={'fit-content'} overflow="scroll" padding={2}>
            {value === index && children}
         </Box>
      </div>
   )
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

interface GigPageProps {
   page?: number
}

const Gig = ({ page }: GigPageProps) => {
   //const isSm = useMediaQuery('(max-width:600px)')
   const { goToUser, goToUserReviews } = useAppNavigation()
   const { evmAddress } = useWeb3Context()
   const params = useParams()
   const { gig, setGig } = useGigsContext()
   const isSm = useMediaQuery('(max-width:600px)')
   const [value, setValue] = React.useState(page ? page : 0)

   useEffect(() => {
      if (params?.gig && gig?.metadataHash !== params?.gig) {
         alert('running')
         GigService.perHash(params.gig)
            .then((data: any) => setGig(data))
            .catch((err) => console.error(err))
      }
   }, [params.gig, setGig, gig?.metadataHash])

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
   }

   const isUserProfile = React.useMemo(() => {
      return params.user === evmAddress
   }, [evmAddress, params.user])

   //const { authenticateUser } = useWeb3Context()

   //    useEffect(() => {
   //       authenticateUser()

   //    }, [])

   return (
      <>
         <Toolbar
            sx={{
               background: (theme) => theme.palette.secondary.main,
            }}
         />
         <Grid container columns={20}>
            <Grid md={13} sm={20} sx={{ width: isSm ? '100vw' : '' }}>
               <Toolbar
                  sx={{
                     zIndex: 1000,
                     position: 'sticky',
                     top: isSm ? '56px' : '64px',
                     height: '64px',
                     borderRadius: 0,
                     borderBottom: (theme) =>
                        `1px solid ${theme.palette.divider}`,

                     background: (theme) => theme.palette.secondary.main,
                  }}
                  style={{
                     paddingTop: 0,
                     paddingBottom: 0,
                  }}
               >
                  <Tabs
                     variant="scrollable"
                     scrollButtons="auto"
                     value={value}
                     onChange={handleChange}
                     aria-label="basic tabs example"
                     sx={{
                        '& .MuiTabs-indicator': {
                           backgroundImage: (theme) => theme.blockswan.rainbows,
                        },
                        '& .MuiTabs-flexContainer': {
                           height: '100%',
                        },
                        height: '100%',
                        width: '100%',
                     }}
                  >
                     {' '}
                     <ScrollspyNav
                        scrollTargetIds={['0', '1', '2']}
                        offset={100}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                     >
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Description" {...a11yProps(1)} />
                        <Tab label="About the seller" {...a11yProps(2)} />
                        <Tab label="Compare packages" {...a11yProps(3)} />
                        <Tab label="Reviews" {...a11yProps(4)} />
                     </ScrollspyNav>
                  </Tabs>
               </Toolbar>
               <TabPanel value={0} index={0}>
                  <Overview />
               </TabPanel>
               <TabPanel value={0} index={1}>
                  <GigDescription />
               </TabPanel>
               <TabPanel value={0} index={2}>
                  <Reviews />
               </TabPanel>
            </Grid>
            <Grid
               item
               md={7}
               sm={20}
               sx={{
                  overflow: 'visible',
                  position: 'relative',
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
               }}
            >
               <GigSide />
            </Grid>
         </Grid>
      </>
   )
}

export default Gig
