import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useCategoriesContext } from '../hooks/useCategoriesContext'

import {
   Box,
   Stack,
   Toolbar,
   Typography,
   useMediaQuery,
   Chip,
   Grid,
} from '@mui/material'
import { AnimatedBanner } from '../components/molecules/AnimatedBanner'
import { Carousel } from '../components/organismes/MobileCarousel'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Accordion from '../components/atoms/Accordion'
import CategoryCard from '../components/molecules/CategoryCard'
import { UpAndDown } from '../anim/Transitions'
import { motion } from 'framer-motion'

const popularsSubCat = [
   'Dssign',
   'Prog',
   'Prog',
   'Prog',
   'Prog',
   'Prog',
   'Prog',
]

const Category = () => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { categories, getCategoryFromURL } =
      useCategoriesContext()

   let params = useParams()

   const { category } = params
   const selectedCategory = useMemo(() => {
      let cat = getCategoryFromURL(category, categories)
      return cat
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [category, categories?.message])

   return (
      <>
         <UpAndDown>
            <AnimatedBanner
               zIndex={0}
               width={isSm ? '100%' : 'calc(100vw - 270px)'}
               minHeight={isSm ? '500px' : '400px'}
               paddingY={2}
               top={0}
               position={'fixed'}
               display="flex"
               justifyContent="center"
               alignItems={'center'}
               alignContent="center"
               sx={{
                  color: (theme) =>
                     theme?.palette?.secondary?.main,
                  pt: '50px',
               }}
            >
               <Stack
                  direction="column"
                  gap={2}
                  padding={6}
                  width="fit-content"
                  justifyContent="center"
                  alignItems={'center'}
                  display={'flex'}
               >
                  <motion.div
                     animate={{ y: 0 }}
                     initial={{ y: -100 }}
                     transition={{
                        delay: 0.2,
                        duration: 0.2,
                     }}
                  >
                     <Typography zIndex={0} variant="h1">
                        {selectedCategory?.emoji}
                     </Typography>
                  </motion.div>
                  <motion.div
                     animate={{ y: 0 }}
                     initial={{ y: -100 }}
                     transition={{
                        delay: 0.2,
                        duration: 0.2,
                     }}
                  >
                     <Typography
                        zIndex={0}
                        sx={{ mb: 0 }}
                        textAlign="center"
                        fontWeight={'bold'}
                        variant="h4"
                        textTransform={'uppercase'}
                        gutterBottom
                     >
                        {selectedCategory?.name}
                     </Typography>
                     <Typography
                        zIndex={0}
                        textAlign="center"
                        fontWeight={900}
                        variant="h6"
                        gutterBottom
                     >
                        {selectedCategory?.description}
                     </Typography>
                  </motion.div>

                  <Box
                     overflow="hidden"
                     justifyContent="center"
                     alignItems={'center'}
                     display={'flex'}
                     textAlign="center"
                     zIndex={0}
                  >
                     <Carousel
                        style={{
                           textAlign: 'center',
                           justifyContent:
                              !isSm && 'center',
                        }}
                        minWidth={390}
                        maxWidth={630}
                     >
                        {popularsSubCat.map(
                           (p, index: number) => (
                              <Chip
                                 color="secondary"
                                 sx={{
                                    color: (theme) =>
                                       theme?.palette
                                          ?.secondary?.main,
                                    root: {
                                       '& .MuiChip-deleteIcon':
                                          {
                                             color: 'red',
                                          },
                                    },
                                 }}
                                 variant="outlined"
                                 label={p}
                                 onClick={() => {}}
                                 onDelete={() => {}}
                                 deleteIcon={
                                    <NavigateNextIcon />
                                 }
                              />
                           )
                        )}
                     </Carousel>
                  </Box>
               </Stack>
            </AnimatedBanner>

            <Toolbar
               sx={{ mb: isSm ? '440px' : '370px' }}
            />
            <Box
               position="relative"
               zIndex={10}
               bgcolor="secondary.light"
               borderTop={'1px solid'}
               borderColor={'divider'}
               boxShadow={5}
            >
               <Grid container padding={2} spacing={2}>
                  {selectedCategory?.subCategories.map(
                     (s: any, index: number) => (
                        <Grid
                           sm={12}
                           md={6}
                           item
                           sx={{ width: '100%' }}
                        >
                           <CategoryCard
                              elevation={3}
                              isActionButton={false}
                              name={s?.name}
                              description={s?.description}
                           />
                        </Grid>
                     )
                  )}
               </Grid>

               <Box
                  sx={{
                     flexGrow: 1,
                     p: 2,
                     justifyContent: 'center',
                     alignItems: 'center',
                     textAlign: 'center',
                  }}
               >
                  <Typography
                     fontWeight={900}
                     variant="h6"
                     gutterBottom
                  >
                     FAQs {selectedCategory?.name}
                  </Typography>
                  <Box
                     overflow="hidden"
                     justifyContent="center"
                     alignItems={'center'}
                     display={'flex'}
                     textAlign="center"
                  >
                     <Accordion
                        faqs={selectedCategory?.faqs}
                     />
                  </Box>
               </Box>
            </Box>
         </UpAndDown>
      </>
   )
}

export default Category
