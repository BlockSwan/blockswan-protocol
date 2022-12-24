import { yupResolver } from '@hookform/resolvers/yup'
import {
   Autocomplete,
   Box,
   Chip,
   Collapse,
   Stack,
   TextField,
   Typography,
} from '@mui/material'
import { useState, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TransitionGroup } from 'react-transition-group'
import { Icon } from '../../../components/atoms/Icon'
import { defaultSkill } from '../../../constants/default'
import { skillSchema } from '../../../constants/yupSchemas'
import { useUsersContext } from '../../../hooks/useUsersContext'

import UserService from '../../../services/UserService'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'

function getMetadataByName(
   _metadata: any[],
   name: string | undefined | null
) {
   let el = _metadata?.find((e) => e?.name === name)
   return el || null
}

type SkillChipProps = {
   onEdit?: () => void
   onDelete?: () => void
   name: string
}

const SkillChip = ({
   name,
   onEdit = () => {},
   onDelete = () => {},
}: SkillChipProps) => {
   const [isHovered, setIsHovered] =
      useState<boolean>(false)
   const handleIsHovered = () => setIsHovered((hov) => !hov)
   return (
      <Chip
         onMouseEnter={handleIsHovered}
         onMouseLeave={handleIsHovered}
         label={name}
         onDelete={onDelete}
         deleteIcon={
            <Collapse
               orientation="horizontal"
               in={isHovered}
               unmountOnExit
               sx={{ top: -2, position: 'relative' }}
            >
               <Icon
                  bgColor="inherit"
                  name="delete"
                  sizing="small"
               />
            </Collapse>
         }
      />
   )
}

export default function SkillsForm() {
   const { categories } = useCategoriesContext()
   const { user, setUser } = useUsersContext()
   const [isFormVisible, setIsFormVisible] =
      useState<boolean>(false)
   const handleIsFormVisible = () =>
      setIsFormVisible((curr) => !curr)
   const [editingIndex, setEditingIndex] = useState<
      number | undefined
   >(undefined)

   const handleEditingIndex = (data: number | undefined) =>
      setEditingIndex(data)

   const {
      handleSubmit,

      control,
      reset,
      setValue,
      watch,
   } = useForm<{ name: string | null | undefined }>({
      defaultValues: useMemo(() => {
         if (editingIndex === undefined) return defaultSkill
         else {
            if (
               user &&
               user?.skills[editingIndex] !== undefined &&
               user?.skills[editingIndex] !== null
            ) {
               return {
                  name: user?.skills[editingIndex] || '',
               }
            } else return defaultSkill
         }
      }, [editingIndex, user]),
      resolver: yupResolver(skillSchema),
   })

   const watchSkill = watch('name')

   const sendForm = (_skills: string[]) => {
      if (user) {
         UserService.editSkills(user.evmAddress, _skills)
            .then((data) => {
               setUser({
                  ...user,
                  skills: data,
               })
            })
            .catch((err) => console.error(err))
      }
   }

   const onConfirmForm = (props: {
      name: string | undefined | null
   }) => {
      let _skills: string[] =
         (user?.skills as string[]) || []
      if (
         editingIndex === undefined &&
         typeof props.name === 'string'
      ) {
         _skills.push(props.name)
      } else if (
         editingIndex !== undefined &&
         typeof props.name === 'string'
      ) {
         _skills[editingIndex] = props.name
      }
      if (_skills !== undefined && _skills !== null) {
         sendForm(_skills || [])
         handleIsFormVisible()
         setEditingIndex(undefined)
         reset()
      }
   }

   const onClickEdit = (index: number) => {
      handleEditingIndex(index)
      setValue('name', user?.skills[index] || '')
      handleIsFormVisible()
   }

   const onClickDelete = (index: number) => {
      let _skills =
         (user?.skills as string[]) || ([] as string[])
      if (_skills[index] !== undefined) {
         _skills.splice(index, 1)
      }
      if (_skills !== undefined && _skills !== null) {
         sendForm(_skills || [])
      }
   }

   const onOpenForm = () => {
      handleIsFormVisible()
   }

   const onCancelForm = () => {
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
               field: { value },
               fieldState: { error },
            }) => (
               <Autocomplete
                  id="name"
                  options={categories?.metadata || []}
                  freeSolo
                  fullWidth
                  value={
                     getMetadataByName(
                        categories?.metadata,
                        value
                     ) === undefined
                        ? value
                        : getMetadataByName(
                             categories?.metadata,
                             value
                          )
                  }
                  onInputChange={(_e, d) => {
                     console.log(d)
                     setValue('name', d || '')
                  }}
                  size="small"
                  getOptionLabel={(option: any) => {
                     return option?.name
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
                        {option?.name}
                     </Box>
                  )}
                  renderInput={(params: any) => (
                     <TextField
                        error={error}
                        variant="filled"
                        {...params}
                        label="Write your skill"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'on', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
            )}
            name="name"
            control={control}
         />
      </Collapse>
   )

   return (
      <>
         {watchSkill}
         <Stack direction={'row'} alignItems="center">
            <Typography
               fontWeight={'bold'}
               variant="overline"
            >
               Skills
            </Typography>
            <Box flexGrow={1} />
            <Collapse in={!isFormVisible} unmountOnExit>
               <Icon
                  onClick={onOpenForm}
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
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
               }}
            >
               {user?.skills?.map(
                  (
                     l: string | undefined | null,
                     index: number
                  ) => (
                     <Collapse
                        key={`skill-${index}`}
                        sx={{ width: 'fit-content' }}
                     >
                        <SkillChip
                           name={
                              typeof l === 'string' ? l : ''
                           }
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
