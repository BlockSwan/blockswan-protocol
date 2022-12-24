import { countries } from '../../../constants/countries'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Collapse, Stack, Typography } from '@mui/material'
import FlagIcon from '@mui/icons-material/Flag'
import { Icon } from '../../../components/atoms/Icon'
import { Flag } from '../../../components/atoms/Flag'
import { CountryProps } from '../../../types/types'
import UserService from '../../../services/UserService'
import { useUsersContext } from '../../../hooks/useUsersContext'
import { defaultCountry } from '../../../constants/default'

export default function CountryForm() {
   const [isEditing, setIsEditing] =
      React.useState<boolean>(false)
   const { user, setUser } = useUsersContext()

   const handleIsEditing = () => setIsEditing((val) => !val)
   const [country, setCountry] =
      React.useState<CountryProps>(
         user?.country || defaultCountry
      )

   const [isError, setError] =
      React.useState<boolean>(false)

   const verifyCountry = (
      code: string | undefined,
      label: string | undefined
   ): boolean => {
      if (
         code === undefined ||
         label === undefined ||
         code?.length === 0 ||
         label?.length === 0
      ) {
         setError(true)
         return false
      } else {
         setError(false)
         return true
      }
   }
   const handleCountryChange = (
      code: string | undefined,
      label: string | undefined
   ) => {
      verifyCountry(code, label)
      setCountry({ code: code || '', label: label || '' })
   }

   const onClickAdd = () => {
      let isOk = verifyCountry(country.code, country.label)
      if (isOk && user) {
         handleIsEditing()
         UserService.editCountry(
            user.evmAddress,
            country
         ).then((data) => {
            if (data) setUser({ ...user, country: data })
         })
      }
   }

   return (
      <>
         <Collapse in={!isEditing} unmountOnExit>
            <Stack direction="row" alignItems={'center'}>
               <FlagIcon color="disabled" />
               <Typography
                  sx={{ ml: 1 }}
                  variant="overline"
               >
                  From
               </Typography>
               <Box flexGrow={1} />
               <Stack
                  direction="row"
                  gap={1}
                  alignItems="center"
               >
                  <Flag
                     width={'28px'}
                     height={'20px'}
                     code={user?.country?.code}
                  />
                  <Typography
                     sx={{ mr: 1 }}
                     fontWeight="bold"
                  >
                     {user?.country?.label}
                  </Typography>
               </Stack>
               <Icon
                  sizing="small"
                  name="edit"
                  onClick={() => handleIsEditing()}
                  iconColor="primary.light"
                  bgColor="secondary.light"
               />
            </Stack>
         </Collapse>
         <Collapse in={isEditing} unmountOnExit>
            <Stack direction="row" alignItems={'center'}>
               <Autocomplete
                  id="country-select-demo"
                  options={countries}
                  autoHighlight
                  fullWidth
                  size="small"
                  getOptionLabel={(option: any) =>
                     option.label
                  }
                  defaultValue={country}
                  renderOption={(
                     props: any,
                     option: any
                  ) => (
                     <Box
                        component="li"
                        sx={{
                           '& > img': {
                              mr: 2,
                              flexShrink: 0,
                           },
                        }}
                        {...props}
                     >
                        <Flag code={option?.code} />
                        {option.label} ({option.code})
                     </Box>
                  )}
                  onChange={(_event, value) =>
                     handleCountryChange(
                        value?.code,
                        value?.label
                     )
                  }
                  renderInput={(params: any) => (
                     <TextField
                        error={isError}
                        variant="filled"
                        {...params}
                        label="Choose a country"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'off', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
               <Box sx={{ ml: 1, mr: 1 }}>
                  <Icon
                     name="delete"
                     sizing="small"
                     onClick={handleIsEditing}
                  />
               </Box>
               <Icon
                  name="done"
                  sizing="small"
                  onClick={onClickAdd}
               />
            </Stack>
         </Collapse>
      </>
   )
}
