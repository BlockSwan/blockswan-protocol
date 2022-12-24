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
import {
   defaultCertifications,
   defaultEducation,
} from '../../../constants/default'

import { certificationSchema } from '../../../constants/yupSchemas'
import { useUsersContext } from '../../../hooks/useUsersContext'
import { CertificationProps } from '../../../types/types'
import UserService from '../../../services/UserService'

import { FormInputText } from '../../../components/molecules/FormInputText'

function datesArray() {
   const today = new Date().getFullYear()

   const dates: any = []
   for (let i = today - 60; i <= today; i++) {
      dates.push(i.toString())
   }
   return dates.reverse()
}

type CertificationChipProps = CertificationProps & {
   onEdit?: () => void
   onDelete?: () => void
}

const CertificationChip = ({
   onEdit = () => {},
   onDelete = () => {},
   ...props
}: CertificationChipProps) => {
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
               {props?.certificate}
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
            {props?.certifier} - {props?.year}
         </Typography>
      </Stack>
   )
}

export default function CertificationForm() {
   const { user, setUser } = useUsersContext()
   const [isFormVisible, setIsFormVisible] =
      useState<boolean>(false)
   const handleIsFormVisible = () =>
      setIsFormVisible((curr) => !curr)
   const [editingIndex, setEditingIndex] = useState<
      number | undefined
   >(undefined)

   const { handleSubmit, control, reset } =
      useForm<CertificationProps>({
         defaultValues: useMemo(() => {
            if (editingIndex !== undefined) {
               return user?.certifications[editingIndex]
            } else return defaultCertifications
         }, [editingIndex, user?.certifications]),

         resolver: yupResolver(certificationSchema),
      })

   useEffect(() => {
      if (editingIndex === undefined) {
         reset(defaultEducation)
      } else reset(user?.certifications[editingIndex])

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [editingIndex, user?.certifications])

   const handleEditingIndex = (
      data: number | undefined
   ) => {
      setEditingIndex(data)
   }

   const sendForm = (
      _certifications: CertificationProps[]
   ) => {
      if (user) {
         UserService.editCertifications(
            user.evmAddress,
            _certifications
         )
            .then((data) => {
               setUser({
                  ...user,
                  certifications: data,
               })
            })
            .catch((err) => console.error(err))
      }
   }

   const onConfirmForm = (
      _certification: CertificationProps
   ) => {
      let _certifications: CertificationProps[] =
         user?.certifications || []
      if (editingIndex === undefined) {
         _certifications.push(_certification)
      } else if (editingIndex !== undefined) {
         _certifications[editingIndex] = _certification
      }
      if (
         _certifications !== undefined &&
         _certifications !== null
      ) {
         sendForm(_certifications || [])
         setEditingIndex(undefined)
         handleIsFormVisible()
      }
   }

   const onClickEdit = (index: number) => {
      handleIsFormVisible()
      handleEditingIndex(index)
   }

   const onClickDelete = (index: number) => {
      let _certifications = user?.certifications || []
      if (_certifications[index] !== undefined) {
         _certifications.splice(index, 1)
      }
      if (
         _certifications !== undefined &&
         _certifications !== null
      ) {
         sendForm(_certifications || [])
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
         <FormInputText
            control={control}
            variant="filled"
            name="certificate"
            label={'Certificate'}
            placeholder="i.e: web3 dApp Progamming"
            withErrorMsg={false}
         />
         <FormInputText
            control={control}
            variant="filled"
            name="certifier"
            label={'The certifier name'}
            placeholder="i.e: Moralis"
            withErrorMsg={false}
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
                  isOptionEqualToValue={(option, value) =>
                     option === value
                  }
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
      </Collapse>
   )

   return (
      <>
         <Stack direction={'row'} alignItems="center">
            <Typography
               fontWeight={'bold'}
               variant="overline"
            >
               Certification(s)
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
               {user?.certifications?.map(
                  (
                     l: CertificationProps,
                     index: number
                  ) => (
                     <Collapse
                        key={`certifications-${index}`}
                        sx={{
                           width: '100%',
                           mt: index !== 0 ? 2 : 0,
                        }}
                     >
                        <CertificationChip
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
