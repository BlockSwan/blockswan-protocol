import { yupResolver } from '@hookform/resolvers/yup'
import {
   Autocomplete,
   Box,
   Collapse,
   Stack,
   TextField,
   Typography,
} from '@mui/material'
import { useState, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Icon } from '../../../components/atoms/Icon'
import { defaultLanguage } from '../../../constants/default'
import {
   getLanguageByName,
   languages,
} from '../../../constants/languages'
import { languageSchema } from '../../../constants/yupSchemas'
import { useUsersContext } from '../../../hooks/useUsersContext'
import { LanguageProps } from '../../../types/types'
import { Flag } from '../../../components/atoms/Flag'
import UserService from '../../../services/UserService'

function formatLanguage(s: string): string {
   s = s.replace('-', ' ')
   const words = s.split(' ')
   words.forEach((word, index) => {
      words[index] =
         word.charAt(0).toUpperCase() + word.slice(1)
   })
   s = words.join(' ')
   return s
}

type LanguageChipProps = LanguageProps & {
   onEdit?: () => void
   onDelete?: () => void
}

const LanguageChip = ({
   language,
   level,
   onEdit = () => {},
   onDelete = () => {},
}: LanguageChipProps) => {
   const [isHovered, setIsHovered] =
      useState<boolean>(false)
   const handleIsHovered = () => setIsHovered((hov) => !hov)
   return (
      <Box
         sx={{ width: '100%' }}
         display={'flex'}
         alignItems="center"
         gap={2}
         minHeight={30}
         onMouseEnter={handleIsHovered}
         onMouseLeave={handleIsHovered}
      >
         <Typography variant="body1">{language}</Typography>
         {' | '}
         <Typography sx={{ m: 0 }} variant="body2">
            {level}
         </Typography>
         <Box flexGrow={1} />
         <Collapse
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
      </Box>
   )
}

export default function LanguageForm() {
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
   } = useForm<LanguageProps>({
      defaultValues: useMemo(() => {
         if (editingIndex === undefined)
            return defaultLanguage
         else {
            if (
               user &&
               user?.languages[editingIndex] !== undefined
            ) {
               return user?.languages[editingIndex]
            } else return defaultLanguage
         }
      }, [editingIndex, user]),
      resolver: yupResolver(languageSchema),
   })

   const sendForm = (_languages: LanguageProps[]) => {
      if (user) {
         UserService.editLanguages(
            user.evmAddress,
            _languages
         )
            .then((data) => {
               setUser({
                  ...user,
                  languages: data,
               })
            })
            .catch((err) => console.error(err))
      }
   }

   const onConfirmForm = (data: LanguageProps) => {
      let _languages: LanguageProps[] =
         user?.languages || []
      if (editingIndex === undefined) {
         _languages.push(data)
      } else {
         _languages[editingIndex] = data
      }
      sendForm(_languages)
      handleIsFormVisible()
      setEditingIndex(undefined)
      reset()
   }

   const onClickEdit = (index: number) => {
      handleEditingIndex(index)
      setValue('language', user?.languages[index].language)
      setValue('level', user?.languages[index].level)
      handleIsFormVisible()
   }

   const onClickDelete = (index: number) => {
      let _languages = user?.languages || []
      if (_languages[index] !== undefined) {
         _languages.splice(index, 1)
      }
      sendForm(_languages)
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
                  id="languages"
                  options={languages}
                  autoHighlight
                  fullWidth
                  value={getLanguageByName(value)}
                  onChange={(_e, d) =>
                     setValue('language', d?.name)
                  }
                  size="small"
                  getOptionLabel={(option: any) =>
                     option.name
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
                        <Flag code={option?.code} />
                        {option?.name}
                     </Box>
                  )}
                  renderInput={(params: any) => (
                     <TextField
                        error={error}
                        variant="filled"
                        {...params}
                        label="Pick a language"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'off', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
            )}
            name="language"
            control={control}
         />
         <Controller
            render={({
               field: { onChange, value },
               fieldState: { error },
            }) => (
               <Autocomplete
                  id="level"
                  options={[
                     'native-bilingual',
                     'fluent',
                     'conversational',
                     '',
                  ]}
                  sx={{ mt: 2 }}
                  autoHighlight
                  fullWidth
                  value={value}
                  onChange={(_e, d) => setValue('level', d)}
                  size="small"
                  getOptionLabel={(option: any) => option}
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
                        {formatLanguage(option)}
                     </Box>
                  )}
                  renderInput={(params: any) => (
                     <TextField
                        error={error}
                        variant="filled"
                        {...params}
                        label="What is your level?"
                        inputProps={{
                           ...params.inputProps,
                           autoComplete: 'off', // disable autocomplete and autofill
                        }}
                     />
                  )}
               />
            )}
            name="level"
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
               Languages
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
            {user?.languages?.map(
               (l: LanguageProps, index: number) => (
                  <LanguageChip
                     key={`language-${index}`}
                     language={l?.language}
                     level={l?.level}
                     onEdit={() => onClickEdit(index)}
                     onDelete={() => onClickDelete(index)}
                  />
               )
            )}
         </Collapse>
      </>
   )
}
