import {
   Box,
   Chip,
   Grid,
   Stack,
   Toolbar,
   Typography,
   useMediaQuery,
} from '@mui/material'
import { SphereAnim } from '../anim/SphereAnim/SphereAnim'
import { UpAndDown } from '../anim/Transitions'
import { Line } from '../components/atoms/Line'
import { AnimatedBanner } from '../components/molecules/AnimatedBanner'
import CategoryCard from '../components/molecules/CategoryCard'
import GigCard from '../components/molecules/GigCard'
import { Carousel } from '../components/organismes/MobileCarousel'
import { useAppNavigation } from '../hooks/useAppNavigation'
import { useCategoriesContext } from '../hooks/useCategoriesContext'
import {
   TransitionGroup,
   CSSTransition,
} from 'react-transition-group'
const popularsCategory = [
   'Smartcontract',
   'Webdesign',
   'Translation',
]

const Home = () => {
   const { categories } = useCategoriesContext()
   const isSm = useMediaQuery('(max-width:600px)')
   const { goToCategory } = useAppNavigation()

   return (
      <>
         <UpAndDown>
            <Toolbar />

            <AnimatedBanner
               height={isSm ? '380px' : '300px'}
               width={isSm ? '100%' : 'calc(100vw - 270px)'}
               padding={2}
               position={'fixed'}
               display="flex"
               justifyContent="center"
               alignItems={'center'}
               alignContent="center"
               zIndex={0}
               sx={{
                  color: (theme) =>
                     theme?.palette?.secondary?.main,
               }}
            >
               <Stack
                  zIndex={0}
                  direction="column"
                  spacing={2}
                  width={'fit-content'}
               >
                  <Typography
                     fontWeight={900}
                     variant="h4"
                     gutterBottom
                  >
                     Get the best builders for your project
                  </Typography>

                  <Stack
                     spacing={2}
                     direction={isSm ? 'column' : 'row'}
                     alignItems={isSm ? 'start' : 'center'}
                  >
                     <Typography>Popular(s):</Typography>

                     {popularsCategory.map((c, i) => (
                        <Chip
                           key={`popular-${i}`}
                           color="secondary"
                           size="medium"
                           label={c}
                           variant="filled"
                           style={{
                              fontSize: '1.2rem',
                           }}
                           icon={
                              <Typography>🍷</Typography>
                           }
                           onClick={() => {}}
                        />
                     ))}
                  </Stack>
               </Stack>
            </AnimatedBanner>
            <Toolbar
               sx={{ mb: isSm ? '400px' : '245px' }}
            />
            <Box
               bgcolor="secondary.light"
               position="relative"
               zIndex={10}
            >
               <Box sx={{ flexGrow: 1, p: 2, pt: 0 }}>
                  <Box overflow="hidden">
                     <TransitionGroup>
                        <Carousel minWidth={390}>
                           <>
                              {Array.from(Array(5)).map(
                                 (_, index) => (
                                    <CSSTransition
                                       key={index}
                                       timeout={500}
                                       classNames="fade"
                                    >
                                       <GigCard
                                          key={index}
                                       />
                                    </CSSTransition>
                                 )
                              )}
                           </>
                        </Carousel>
                     </TransitionGroup>
                  </Box>
               </Box>

               <Box sx={{ flexGrow: 1, p: 2 }}>
                  <Typography
                     fontWeight={900}
                     variant="h4"
                     gutterBottom
                  >
                     Explore the categories
                  </Typography>
                  <Box overflow="hidden">
                     <Carousel minWidth={390}>
                        <>
                           {categories?.message?.map(
                              (cat: any, index: number) => (
                                 <CategoryCard
                                    onClick={() =>
                                       goToCategory(
                                          cat?.url
                                       )
                                    }
                                    name={cat?.name}
                                    description={
                                       cat?.description
                                    }
                                    emoji={cat?.emoji}
                                 />
                              )
                           )}
                        </>
                     </Carousel>
                  </Box>
               </Box>

               <Grid container spacing={2} padding={2}>
                  <Grid
                     item
                     sm={12}
                     md={6}
                     style={{ padding: 0 }}
                  >
                     <Box
                        justifyContent={'center'}
                        style={{
                           width: isSm ? '100vw' : '100%',
                           height: isSm ? '300px' : '100%',
                        }}
                     >
                        {' '}
                        <SphereAnim
                           width={isSm ? '15rem' : '25rem'}
                           height={isSm ? '15rem' : '25rem'}
                        />
                     </Box>
                  </Grid>
                  <Grid sm={12} md={6}>
                     <Box
                        sx={{
                           width: '100%',
                           flexGrow: 1,
                           p: 2,
                           overflow: 'hidden',
                           position: 'relative',
                        }}
                     >
                        <Typography
                           fontWeight={900}
                           sx={{ pb: 2 }}
                           variant="h5"
                        >
                           A world of freelance talents at
                           your fingertips
                        </Typography>
                        <Line />
                        <Box
                           sx={{
                              py: 2,
                              position: 'relative',
                           }}
                        >
                           <Typography
                              sx={{ pt: 2 }}
                              fontWeight={900}
                              variant="overline"
                           >
                              The best for every budget
                           </Typography>
                           <Typography variant="body1">
                              Find high quality services at
                              every price point. No hourly
                              rates, just project-based
                              pricing.
                           </Typography>
                        </Box>
                        <Line />
                        <Box
                           flexDirection="column"
                           sx={{ py: 2 }}
                        >
                           <Typography
                              fontWeight={900}
                              variant="overline"
                           >
                              Quality work done quickly
                           </Typography>
                           <Typography variant="body1">
                              Find the right freelancer to
                              begin working on your project
                              within minutes.
                           </Typography>
                        </Box>
                        <Line />
                        <Box sx={{ py: 2 }}>
                           <Typography
                              fontWeight={900}
                              variant="overline"
                           >
                              Protected payments, every time
                           </Typography>
                           <Typography variant="body1">
                              Always know what you'll pay
                              upfront. Your payment isn't
                              released until you approve the
                              work.
                           </Typography>
                        </Box>
                        <Line />
                        <Box
                           flexDirection="column"
                           sx={{ py: 2 }}
                        >
                           <Typography
                              fontWeight={900}
                              variant="overline"
                           >
                              Get involved within the
                              protocol
                           </Typography>
                           <Typography variant="body1">
                              Help users solve their
                              conflicts and invite builders
                              to the platform to capture
                              part of the value generated by
                              BlockSwan Family
                           </Typography>
                        </Box>
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </UpAndDown>
      </>
   )
}

export default Home
