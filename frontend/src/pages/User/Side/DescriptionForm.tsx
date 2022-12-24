import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
   Collapse,
   FormHelperText,
   Stack,
   Typography,
} from '@mui/material'
import { Icon } from '../../../components/atoms/Icon'
import { useUsersContext } from '../../../hooks/useUsersContext'
import UserService from '../../../services/UserService'

export default function DescriptionForm() {
   const { user, setUser } = useUsersContext()
   const [isEditing, setIsEditing] =
      React.useState<boolean>(false)
   const [isCheckOnce, setIsCheckOnce] =
      React.useState<boolean>(false)
   const handleIsEditing = () => setIsEditing((val) => !val)
   const [description, setDescription] = React.useState<
      string | undefined
   >(user?.description)

   const errorDescription = React.useMemo(() => {
      if (
         !description ||
         description === undefined ||
         description?.length === 1
      )
         return 'You need to add a description'
      if (description?.length <= 10)
         return '10 characters minimum'
      if (description?.length >= 100)
         return '100 characters maximum'

      return null
   }, [description])

   const handleDescription = (data: string | undefined) => {
      setDescription(data)
   }

   const onCreateDescription = () => {
      setIsCheckOnce(true)
      if (
         errorDescription === null &&
         user !== null &&
         description !== undefined
      ) {
         UserService.editDescription(
            user?.evmAddress,
            description
         )
            .then((data: string) => {
               console.log(data)
               setUser({ ...user, description: data })
            })
            .catch((err) => console.error(err))
         handleIsEditing()
      }
   }

   return (
      <>
         <Stack direction="row">
            <Typography
               fontWeight={'bold'}
               variant="overline"
            >
               Description
            </Typography>
            <Box flexGrow={1} />
            <Collapse
               unmountOnExit
               in={isEditing}
               orientation="horizontal"
            >
               <Stack
                  direction={'row'}
                  gap={1}
                  alignItems={'center'}
                  justifyContent="flex-end"
               >
                  <Icon
                     name="delete"
                     sizing="small"
                     onClick={handleIsEditing}
                  />

                  <Icon
                     name="done"
                     sizing="small"
                     onClick={onCreateDescription}
                  />
               </Stack>
            </Collapse>
            <Collapse
               unmountOnExit
               in={!isEditing}
               orientation="horizontal"
            >
               <Icon
                  sizing="small"
                  name="edit"
                  onClick={() => handleIsEditing()}
                  iconColor="primary.light"
                  bgColor="secondary.light"
               />
            </Collapse>
         </Stack>

         <Collapse in={isEditing} unmountOnExit>
            <TextField
               fullWidth
               error={
                  isCheckOnce && errorDescription !== null
               }
               multiline
               helperText={
                  <Stack
                     direction="row"
                     justifyContent={'space-between'}
                     width="100%"
                  >
                     <FormHelperText>
                        {isCheckOnce
                           ? errorDescription || ''
                           : ''}
                     </FormHelperText>
                     <Box flexGrow={1} />
                     <FormHelperText>
                        {description?.length}/100
                     </FormHelperText>
                  </Stack>
               }
               value={description}
               rows={3}
               variant="filled"
               onChange={(e) =>
                  handleDescription(e?.target?.value)
               }
            />
         </Collapse>
         <Collapse in={!isEditing} unmountOnExit>
            <Typography paragraph variant="body2">
               {user?.description}
            </Typography>
         </Collapse>
      </>
   )
}
