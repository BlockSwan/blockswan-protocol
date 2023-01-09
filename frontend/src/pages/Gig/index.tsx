import { Grid, Toolbar, Tab, useMediaQuery } from '@mui/material'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GigSide from './Side'
import Reviews from '../User/Main/Reviews'
import { useAppNavigation } from '../../hooks/useAppNavigation'
import Overview from './Overview'
import GigService from '../../services/GigService'
import { useGigsContext } from '../../hooks/useGigsContext'
import GigDescription from './Description'
import AboutSeller from './Seller'
import GigPacks from './Packs'

import {
   a11yProps,
   TabPanel,
   Tabs,
} from '../../components/organismes/TabPannel'
import StickySubHeader from '../../components/organismes/StickySubHeader'
import { LeftAndRight } from '../../anim/Transitions'

const tabs = [
   {
      name: 'Overview',
      id: 'overview',
      content: <Overview />,
   },
   {
      name: 'About the gig',
      id: 'about-gig',
      content: <GigDescription />,
   },
   {
      name: 'About the seller',
      id: 'about-seller',
      content: <AboutSeller />,
   },
   {
      name: 'Compare packages',
      id: 'packages',
      content: <GigPacks />,
   },
   { name: 'Reviews', id: 'reviews', content: <Reviews /> },
]

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
      // setValue(newValue)
   }

   const isUserProfile = React.useMemo(() => {
      return params.user === evmAddress
   }, [evmAddress, params.user])

   const refs = React.useRef<any[]>([])

   const addToRefs = (el: any) => {
      if (el && !refs.current.includes(el)) {
         refs?.current?.push(el)
      }
   }

   const handleClick = (index: number) => {
      // console.log(refs[id]?.current.offsetTop)
      console.log(refs)
      window.scrollTo({
         top: refs.current[index].offsetTop - 64 * 2,
         behavior: 'smooth',
      })
   }
   const [scrollPosition, setScrollPosition] = React.useState(0)

   useEffect(() => {
      function handleScroll() {
         setScrollPosition(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   function getOffsetTop(index: number) {
      return refs?.current[index]?.offsetTop
   }

   useEffect(() => {
      // Set the active tab based on the scroll position
      if (scrollPosition >= 0 && scrollPosition < getOffsetTop(0)) {
         setValue(0)
      } else if (
         scrollPosition >= getOffsetTop(0) &&
         scrollPosition < getOffsetTop(1)
      ) {
         setValue(1)
      } else if (
         scrollPosition >= getOffsetTop(1) &&
         scrollPosition < getOffsetTop(2)
      ) {
         setValue(2)
      } else if (
         scrollPosition >= getOffsetTop(2) &&
         scrollPosition < getOffsetTop(3)
      ) {
         setValue(3)
      } else {
         setValue(4)
      }
   }, [scrollPosition])
   //const { authenticateUser } = useWeb3Context()

   //    useEffect(() => {
   //       authenticateUser()

   //    }, [])

   return (
      <>
         <LeftAndRight>
            <>
               <Toolbar
                  sx={{
                     background: (theme) => theme.palette.secondary.main,
                  }}
               />
               <Grid container columns={20}>
                  <Grid
                     md={13}
                     sm={20}
                     sx={{
                        width: isSm ? '100vw' : '',
                        scrollBehavior: 'smooth',
                     }}
                  >
                     <StickySubHeader>
                        <Tabs
                           value={value}
                           onChange={handleChange}
                           aria-label="gig-tabs"
                        >
                           {tabs?.map((tab: any, index: number) => {
                              return (
                                 <Tab
                                    key={`${tab?.id}-${index}`}
                                    label={tab?.name}
                                    {...a11yProps(index)}
                                    onClick={() => handleClick(index)}
                                 />
                              )
                           })}
                        </Tabs>
                     </StickySubHeader>
                     {tabs?.map((tab: any, index: number) => (
                        <div
                           key={`tabpannel-${index}-${tab?.id}`}
                           ref={addToRefs}
                        >
                           <TabPanel value={0} index={0}>
                              {tab?.content}
                           </TabPanel>
                        </div>
                     ))}
                  </Grid>
                  <Grid
                     item
                     md={7}
                     sm={20}
                     sx={{
                        overflow: 'visible',
                        position: 'relative',
                        backgroundColor: (theme) =>
                           theme.palette.secondary.main,
                        borderLeft: (theme) =>
                           `1px solid ${theme.palette.divider}`,
                        width: isSm ? '100vw' : '',
                        scrollBehavior: 'smooth',
                     }}
                  >
                     <GigSide />
                  </Grid>
               </Grid>
            </>
         </LeftAndRight>
      </>
   )
}

export default Gig
