import { yupResolver } from '@hookform/resolvers/yup'
import {
   Box,
   Button,
   Typography,
   useMediaQuery,
} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '../../../components/atoms/Icon'
import { FormCheckbox } from '../../../components/molecules/FormCheckBox'
import { FormInputDropdown } from '../../../components/molecules/FormInputDropdown'
import { FormInputText } from '../../../components/molecules/FormInputText'
import { Step3Requirements } from '../../../constants/yupSchemas'
import { RequirementProps } from '../../../types/types'
import OptionsForm from './OptionsForm'

interface RequirementFormProps {
   requirement?: RequirementProps
   onCreate: (data: RequirementProps) => void
   onCancel: () => void

   // handleRemoveOption: (item: string) => void
}

const optionsAnswerType = [
   {
      label: 'Free text',
      value: 'free-text',
   },
   {
      label: 'Multiple choice',
      value: 'multiple-choice',
   },
   {
      label: 'File attachment',
      value: 'file-attachment',
   },
]

export const RequirementForm = ({
   requirement,
   onCreate,
   onCancel,
}: RequirementFormProps) => {
   const {
      handleSubmit,
      resetField,
      control,
      reset,
      setValue,
      watch,
      formState: { errors },
   } = useForm<RequirementProps>({
      defaultValues: React.useMemo(() => {
         return requirement
      }, [requirement]),
      resolver: yupResolver(Step3Requirements),
   })

   React.useEffect(() => {
      reset({ ...requirement })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [requirement])

   const isSm = useMediaQuery('(max-width:600px)')

   const watchRequirementType = watch('type')
   const watchOptions = watch('data')

   function getType() {
      return typeof watchRequirementType === 'string'
         ? watchRequirementType
         : ''
   }

   const addOptions = (data: (string | undefined)[]) => {
      console.log(data)
      setValue('data', data)
   }

   const handleCancel = () => {
      reset()
      onCancel()
   }

   const onSubmitSuccess = (data: RequirementProps) => {
      reset()
      onCreate(data)
   }

   React.useEffect(() => {
      resetField('data')
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [watchRequirementType])

   const multiCheckBoxButtons = (
      <FormCheckbox
         control={control}
         setValue={setValue}
         name={'required'}
         label={
            'Is this field required when buying the gig?'
         }
      />
   )

   const questionInputField = (
      <FormInputText
         name={'question'}
         control={control}
         label={'The question they will answer'}
         placeholder={
            'i.e: Give me a pdf with all the details'
         }
         defaultValue={requirement?.question}
         required={true}
         multiline={true}
         rows={2}
         maxCount={80}
      />
   )
   const actionsFormButtons = (
      <Stack
         padding={0}
         direction={'row'}
         gap={2}
         alignItems={'start'}
         justifyContent="start"
      >
         <Box flexGrow={1} />
         <Button onClick={handleCancel} variant="text">
            Cancel
         </Button>
         <Icon
            name="done"
            onClick={handleSubmit(onSubmitSuccess, (data) =>
               console.log(data)
            )}
         />
      </Stack>
   )

   const answerTypeDropDown = (
      <Stack direction={isSm ? 'column' : 'row'} gap={2}>
         <FormInputDropdown
            options={optionsAnswerType}
            name="type"
            value={watchRequirementType}
            defaultValue={requirement?.type}
            control={control}
            label="Get in the form of"
            sx={{ width: '300px' }}
            placeholder="Select one"
         />{' '}
         {getType() === 'multiple-choice' && (
            <FormCheckbox
               control={control}
               setValue={setValue}
               name={'multiple'}
               label={
                  'Can buyers select more than one option?'
               }
            />
         )}
      </Stack>
   )

   const optionForm = (
      <>
         <OptionsForm
            verifyOn={errors.data}
            options={watchOptions || ['', '']}
            onOptionChange={addOptions}
            defaultValues={requirement?.data || []}
            maxLength={8}
         />
      </>
   )

   const InputFreeNote = (
      <Typography>
         Users will need to write you some text data
      </Typography>
   )

   const FileAttachamentNote = (
      <Typography>
         Users will need to attach some files
      </Typography>
   )

   function displayContent(selectedType: string) {
      switch (selectedType) {
         case 'multiple-choice':
            return optionForm
         case 'free-text':
            return InputFreeNote
         case 'file-attachment':
            return FileAttachamentNote
         default:
            return null
      }
   }

   return (
      <Box
         sx={{
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         {multiCheckBoxButtons}
         {questionInputField}
         {answerTypeDropDown}
         {displayContent(getType())}

         {actionsFormButtons}
      </Box>
   )
}
