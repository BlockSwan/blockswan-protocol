import { yupResolver } from '@hookform/resolvers/yup'
import {
   Autocomplete,
   Box,
   Collapse,
   Stack,
   TextField,
   Typography,
} from '@mui/material'
import React, { useState, useMemo, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TransitionGroup } from 'react-transition-group'
import { Icon } from '../../../components/atoms/Icon'
import { defaultEducation } from '../../../constants/default'

import { educationSchema } from '../../../constants/yupSchemas'
import { useUsersContext } from '../../../hooks/useUsersContext'
import { EducationProps } from '../../../types/types'
import UserService from '../../../services/UserService'
import {
   countries,
   getCountryNyName,
} from '../../../constants/countries'
import {
   getUnivesityByName,
   universities,
} from '../../../constants/universities'
import { majors } from '../../../constants/majors'
import { titles } from '../../../constants/titles'

function datesArray() {
   const today = new Date().getFullYear()

   const dates: any = []
   for (let i = today - 60; i <= today; i++) {
      dates.push(i.toString())
   }
   return dates.reverse()
}

type EducationChipProps = EducationProps & {
   onEdit?: () => void
   onDelete?: () => void
}

const EducationChip = ({
   onEdit = () => {},
   onDelete = () => {},
   ...props
}: EducationChipProps) => {
   const [isHovered, setIsHovered] =
      useState<boolean>(false)
   const handleIsHovered = () => setIsHovered((hov) => !hov)
   return (
      <Stack
         direction="column"
         onMouseEnter={handleIsHovered}
         onMouseLeave={handleIsHovered}
         sx={{ width: '100%' }}
      >
         <Stack
            direction="row"
            sx={{ width: '100%' }}
            alignItems={'start'}
            position="relative"
         >
            <Typography fontWeight={'bold'}>
               {props?.major} - {props?.title}
            </Typography>
            <Box flexGrow={1} />
            <Collapse
               sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
               }}
               orientation="horizontal"
               in={isHovered}
               unmountOnExit
            >
               <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent="flex-end"
                  gap={1}
               >
                  <Icon
                     name="delete"
                     onClick={onDelete}
                     sizing="small"
                  />
                  <Icon
                     name="edit"
                     onClick={onEdit}
                     sizing="small"
                  />
               </Stack>
            </Collapse>
         </Stack>
         <Typography width={'100%'} variant="body1">
            {props?.university}, {props?.country}
         </Typography>
         <Typography variant="body2">
            Graduated in {props?.year}
         </Typography>
      </Stack>
   )
}

export default function EducationForm() {
   const { user, setUser } = useUsersContext()
   const [isFormVisible, setIsFormVisible] =
      useState<boolean>(false)
   const handleIsFormVisible = () =>
      setIsFormVisible((curr) => !curr)
   const [editingIndex, setEditingIndex] = useState<
      number | undefined
   >(undefined)

   const { handleSubmit, control, reset, watch } =
      useForm<EducationProps>({
         defaultValues: useMemo(() => {
            if (editingIndex !== undefined) {
               return user?.educations[editingIndex]
            } else return defaultEducation
         }, [editingIndex, user?.educations]),

         resolver: yupResolver(educationSchema),
      })

   useEffect(() => {
      if (editingIndex === undefined) {
         reset(defaultEducation)
      } else reset(user?.educations[editingIndex])

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [editingIndex, user?.educations])

   const handleEditingIndex = (
      data: number | undefined
   ) => {
      setEditingIndex(data)
   }

   const watchCounty = watch('country')

   const universityList = useMemo(() => {
      let list: any = universities
         .filter((elem) => elem.country === watchCounty)
         .splice(0, 30)
      // setValue('university', '')
      return list
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [watchCounty])

   const sendForm = (_educations: EducationProps[]) => {
      if (user) {
         UserService.editEducations(
            user.evmAddress,
            _educations
         )
            .then((data) => {
               setUser({
                  ...user,
                  educations: data,
               })
            })
            .catch((err) => console.error(err))
      }
   }

   const onConfirmForm = (_education: EducationProps) => {
      let _educations: EducationProps[] =
         user?.educations || []
      if (editingIndex === undefined) {
         _educations.push(_education)
      } else if (editingIndex !== undefined) {
         _educations[editingIndex] = _education
      }
      if (
         _educations !== undefined &&
         _educations !== null
      ) {
         sendForm(_educations || [])
         setEditingIndex(undefined)
         handleIsFormVisible()
      }
   }

   const onClickEdit = (index: number) => {
      handleIsFormVisible()
      handleEditingIndex(index)
   }

   const onClickDelete = (index: number) => {
      let _educations = user?.educations || []
      if (_educations[index] !== undefined) {
         _educations.splice(index, 1)
      }
      if (
         _educations !== undefined &&
         _educations !== null
      ) {
         sendForm(_educations || [])
      }
   }

   const onOpenForm = () => {
      handleIsFormVisible()
   }

   const onCancelForm = () => {
      handleEditingIndex(undefined)
      handleIsFormVisible()
   }

   const formVisibleButtons = (
      <Collapse
         orientation="horizontal"
         in={isFormVisible}
         unmountOnExit
      >
         <Stack
            direction={'row'}
            alignItems="center"
            gap={1}
            justifyContent="end"
         >
            <Icon
               name="cancel"
               onClick={onCancelForm}
               sizing="small"
            />

            <Icon
               name="done"
               sizing="small"
               onClick={handleSubmit(onConfirmForm)}
            />
         </Stack>
      </Collapse>
   )

   const form = (
      <Collapse
         sx={{
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
         }}
         in={isFormVisible}
         unmountOnExit
      >
         <Controller
            render={({
               field: { value, onChange },
               fieldState: { error },
            }) => (
               <Autocomplete
                  id="country"
                  options={countries}
                  fullWidth
                  onChange={(event, values, reasossn) =>
                     onChange(values?.label)
                  }
                  isOptionEqualToValue={(option, value) =>
                     option.label === value.label
                  }
                  value={getCountryNyName(value) || null}
                  size="small"
                  getOptionLabel={(option: any) => {
                     return option?.label
                  }}
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
                        {option?.label}
                     </Box>
                  )}
                  renderInput={(params: any) => (
                     <TextField
                        error={error}
                        variant="filled"
                        {...params}
                        label="In which country"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'off', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
            )}
            name="country"
            control={control}
         />
         <Controller
            render={({
               field: { value, onChange },
               fieldState: { error },
            }) => (
               <Autocomplete
                  sx={{ mt: 2 }}
                  id="university"
                  freeSolo={true}
                  disableClearable
                  options={universityList || []}
                  fullWidth
                  onChange={(
                     event,
                     values: any,
                     reason
                  ) => {
                     onChange(values?.name)
                  }}
                  isOptionEqualToValue={(option, value) =>
                     option.name === value.name
                  }
                  value={
                     getUnivesityByName(value) || {
                        name: '',
                        country: '',
                     }
                  }
                  size="small"
                  getOptionLabel={(option: any) =>
                     option?.name
                  }
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
                        {option?.name}
                     </Box>
                  )}
                  renderInput={(params: any) => (
                     <TextField
                        onChange={onChange}
                        error={error}
                        variant="filled"
                        {...params}
                        label="Choose the university"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'off', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
            )}
            name="university"
            control={control}
         />

         <Controller
            render={({
               field: { value, onChange },
               fieldState: { error },
            }) => (
               <Autocomplete
                  sx={{ mt: 2 }}
                  id="major"
                  options={majors}
                  fullWidth
                  onChange={(
                     event,
                     values: any,
                     reason
                  ) => {
                     onChange(values)
                  }}
                  isOptionEqualToValue={(option, value) =>
                     option === value
                  }
                  value={value || null}
                  size="small"
                  getOptionLabel={(option: any) => {
                     return option
                  }}
                  renderOption={(
                     props: any,
                     option: any
                  ) => (
                     <Box component="li" {...props}>
                        {option}
                     </Box>
                  )}
                  renderInput={(params: any) => (
                     <TextField
                        error={error}
                        variant="filled"
                        {...params}
                        label="Your major"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'off', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
            )}
            name="major"
            control={control}
         />

         <Stack
            direction="row"
            alignItems="center"
            marginTop={2}
         >
            <Controller
               render={({
                  field: { value, onChange },
                  fieldState: { error },
               }) => (
                  <Autocomplete
                     sx={{ mr: 1 }}
                     id="title"
                     options={titles}
                     fullWidth
                     freeSolo={false}
                     onChange={(
                        event,
                        values: any,
                        reason
                     ) => {
                        onChange(values)
                     }}
                     isOptionEqualToValue={(
                        option,
                        value
                     ) => option === value}
                     value={value || null}
                     size="small"
                     getOptionLabel={(option: any) => {
                        return option
                     }}
                     renderOption={(
                        props: any,
                        option: any
                     ) => (
                        <Box component="li" {...props}>
                           {option}
                        </Box>
                     )}
                     renderInput={(params: any) => (
                        <TextField
                           onChange={onChange}
                           error={error}
                           variant="filled"
                           {...params}
                           label="The title"
                           inputProps={{
                              ...params.inputProps,
                              autoComplete: 'off', // disable autocomplete and autofill
                           }}
                        />
                     )}
                  />
               )}
               name="title"
               control={control}
            />
            <Controller
               render={({
                  field: { value, onChange },
                  fieldState: { error },
               }) => (
                  <Autocomplete
                     id="year"
                     options={datesArray()}
                     fullWidth
                     onChange={(
                        event,
                        values: any,
                        reason
                     ) => {
                        onChange(values)
                     }}
                     isOptionEqualToValue={(
                        option,
                        value
                     ) => option === value}
                     value={value || null}
                     defaultValue={value}
                     size="small"
                     getOptionLabel={(option: any) => {
                        return option?.toString()
                     }}
                     renderOption={(
                        props: any,
                        option: any
                     ) => (
                        <Box component="li" {...props}>
                           {option}
                        </Box>
                     )}
                     renderInput={(params: any) => (
                        <TextField
                           onChange={onChange}
                           error={error}
                           variant="filled"
                           {...params}
                           label="Graduation year"
                           inputProps={{
                              ...params.inputProps,
                              autoComplete: 'off', // disable autocomplete and autofill
                           }}
                        />
                     )}
                  />
               )}
               name="year"
               control={control}
            />
         </Stack>
      </Collapse>
   )

   return (
      <>
         <Stack direction={'row'} alignItems="center">
            <Typography
               fontWeight={'bold'}
               variant="overline"
            >
               Education
            </Typography>
            <Box flexGrow={1} />
            <Collapse in={!isFormVisible} unmountOnExit>
               <Icon
                  onClick={() => {
                     onOpenForm()
                     reset()
                     handleEditingIndex(undefined)
                  }}
                  sizing="small"
                  name="add"
                  iconColor="primary.light"
                  bgColor="secondary.light"
               />
            </Collapse>
            {formVisibleButtons}
         </Stack>
         {form}
         <Collapse in={!isFormVisible} unmountOnExit>
            <TransitionGroup
               style={{
                  gap: 2,
               }}
            >
               {user?.educations?.map(
                  (l: EducationProps, index: number) => (
                     <Collapse
                        key={`skill-${index}`}
                        sx={{
                           width: '100%',
                           mt: index !== 0 ? 2 : 0,
                        }}
                     >
                        <EducationChip
                           {...l}
                           onEdit={() => onClickEdit(index)}
                           onDelete={() =>
                              onClickDelete(index)
                           }
                        />
                     </Collapse>
                  )
               )}
            </TransitionGroup>
         </Collapse>
      </>
   )
}
