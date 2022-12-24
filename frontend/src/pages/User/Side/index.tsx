import {
   Avatar,
   Typography,
   Divider,
   Stack,
   Chip,
   Box,
   Alert,
   AlertTitle,
   Button,
   Collapse,
   Grow,
} from '@mui/material'
import ProgressLevel from '../../../components/atoms/ProgressLevel'
import { Rating } from '../../../components/atoms/Rating'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import { useState } from 'react'
import CountryForm from './CountryForm'
import { getTimeSince } from '../../../utils/formatters'
import DescriptionForm from './DescriptionForm'
import CheckIcon from '@mui/icons-material/Check'
import LanguageForm from './LanguageForm'
import SkillsForm from './SkillsForm'
import EducationForm from './EducationForm'
import CertificationForm from './CertificationForm'

const UserSide = () => {
   const { userData } = useWeb3Context()

   return (
      <>
         <Box
            padding={2}
            gap={2}
            justifyContent={'center'}
            alignItems="center"
            display="flex"
            flexDirection="column"
         >
            <Avatar
               src={userData?.defaultProfileImg}
               sx={{
                  boxShadow: (theme) => theme.shadows[1],
                  width: 150,
                  height: 150,
               }}
            ></Avatar>
            <Typography variant="h6" fontWeight={'bold'}>
               {userData?.username}
            </Typography>
            <ProgressLevel />
            <Rating
               value={3.7}
               readOnly={true}
               amount={12}
               precision={0.1}
               withGrade={true}
            />
         </Box>
         <Divider />
         <Box
            padding={2}
            justifyContent={'center'}
            display="flex"
            flexDirection="column"
         >
            <CountryForm />
            <Stack direction="row" alignItems={'center'}>
               <BeenhereIcon color="disabled" />
               <Typography
                  sx={{ ml: 1 }}
                  variant="overline"
               >
                  Member since
               </Typography>
               <Box flexGrow={1} />
               <Typography fontWeight="bold">
                  {getTimeSince(userData?.createdAt)}
               </Typography>
            </Stack>
         </Box>
         <Divider />
         <Box
            padding={2}
            justifyContent={'center'}
            display="flex"
            flexDirection="column"
         >
            <DescriptionForm />
         </Box>
         <Divider />
         <Box
            padding={2}
            justifyContent={'center'}
            display="flex"
            flexDirection="column"
         >
            <LanguageForm />
         </Box>
         <Divider />
         <Box
            padding={2}
            justifyContent={'center'}
            display="flex"
            flexDirection="column"
         >
            <SkillsForm />
         </Box>{' '}
         <Divider />
         <Box
            padding={2}
            justifyContent={'center'}
            display="flex"
            flexDirection="column"
         >
            <EducationForm />
         </Box>
         <Divider />
         <Box
            padding={2}
            justifyContent={'center'}
            display="flex"
            flexDirection="column"
         >
            <CertificationForm />
         </Box>
      </>
   )
}

export default UserSide
