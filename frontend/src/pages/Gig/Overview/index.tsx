import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { ImagesCarousel } from '../../../components/molecules/ImagesCarousel'
import { Avatar, Box, Divider, useMediaQuery } from '@mui/material'
import { OnlineBadge } from '../../../components/atoms/Avatar'
import { Rating } from '../../../components/atoms/Rating'

const Overview = () => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { gig } = useGigsContext()
   const { goToCategory, goToSubCategory } = useAppNavigation()
   const { subcategory } = gig
   const { category } = subcategory
   const refCat = `/categories/${subcategory?.url}`
   const refSubCat = refCat + `/${category?.url}`
   function handleClick(
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) {
      event.preventDefault()
      console.info('You clicked a breadcrumb.')
   }

   const breadcrumbs = [
      <Link
         underline="hover"
         key="1"
         color="inherit"
         href={refCat}
         onClick={(_e) => {
            _e?.preventDefault()
            goToCategory(category?.url)
         }}
      >
         {category?.name}
      </Link>,
      <Link
         underline="hover"
         key="2"
         color="text.primary"
         href={refSubCat}
         onClick={(_e) => {
            _e?.preventDefault()
            goToSubCategory(category?.url, subcategory?.url)
         }}
      >
         {subcategory?.name}
      </Link>,
   ]

   return (
      <Stack spacing={2}>
         <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
         >
            {breadcrumbs}
         </Breadcrumbs>
         <Typography variant="h4">{gig?.title}</Typography>
         <Stack
            direction={!isSm ? 'row' : 'column'}
            alignItems={!isSm ? 'center' : 'start'}
            gap={!isSm ? 2 : 1}
         >
            <Stack
               alignItems={'center'}
               direction={'row'}
               spacing={1}
               position="relative"
            >
               {' '}
               <OnlineBadge
                  overlap="circular"
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'right',
                  }}
                  variant="dot"
               >
                  <Avatar src={gig?.seller?.defaultProfileImg} />{' '}
               </OnlineBadge>
               <Typography fontWeight={'bold'}>
                  {gig?.seller?.username}
               </Typography>
            </Stack>
            <Divider orientation={isSm ? 'horizontal' : 'vertical'} flexItem />
            <Box
               sx={{
                  display: isSm ? 'flex' : '',
                  justifyContent: isSm ? 'space-around' : '',
                  width: isSm ? '100%' : '',
               }}
            >
               <Rating amount={5} withGrade={true} value={4.2} />
               <Divider orientation="vertical" flexItem />
               <Typography variant="overline">2 order(s) in queue</Typography>
            </Box>
         </Stack>
         <ImagesCarousel array={gig?.imgs} />
      </Stack>
   )
}

export default Overview
