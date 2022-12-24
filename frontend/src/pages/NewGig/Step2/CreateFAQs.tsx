import {
   Box,
   Button,
   Collapse,
   Stack,
   TextFieldProps,
} from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormInputText } from '../../../components/molecules/FormInputText'
import { FaqProps } from '../../../types/types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TransitionGroup } from 'react-transition-group'

type RenderInputProps = TextFieldProps & {
   name: string
   placeholder: string
   label: string
   required: boolean
   control?: any
   action?: boolean
   multiline?: boolean
   maxRows?: number
   maxCount?: number
   rows?: number
   index?: number
}

export const elements: RenderInputProps[] = [
   {
      name: 'question',
      placeholder:
         'i.e: Do you include a whitelist in the smart contract?',
      label: 'Add a question to help buyers',
      required: true,
      multiline: false,
      rows: 1,
   },

   {
      name: 'answer',
      placeholder:
         'Yes, I use a merkle tree to save the registered wallet addresses.',
      label: 'Provide the answer to that question',
      required: true,
      multiline: true,

      rows: 2,
      maxCount: 200,
   },
]

export function renderInput({
   name,
   placeholder,
   label,
   required,
   control,
   action,

   multiline,
   rows,
   index,
}: RenderInputProps) {
   return (
      <FormInputText
         sx={{ mt: index && index > 0 ? 2 : 1 }}
         name={name}
         control={control}
         label={label}
         multiline={multiline}
         placeholder={placeholder}
         required={required}
         rows={rows}
      />
   )
}

const FAQschema = yup.object().shape({
   question: yup.string().min(10).max(80).required(),
   answer: yup.string().min(10).max(200).required(),
})

interface CreateFAQsProps {
   defaultValue?: FaqProps
   onSubmit: (data: FaqProps) => void
}

export const CreateFAQs = ({
   defaultValue,
   onSubmit,
}: CreateFAQsProps) => {
   const [inputs, setInputs] = useState<
      [] | RenderInputProps[]
   >([])

   const { handleSubmit, control, reset, formState } =
      useForm({
         defaultValues: defaultValue,
         resolver: yupResolver(FAQschema),
      })
   const hideFaq = () => {
      setInputs([])
   }

   const addFaq = (faq: FaqProps) => {
      onSubmit(faq)
      hideFaq()
   }

   const viewFaq = () => {
      setInputs(elements)
   }

   React.useEffect(() => {
      if (formState.isSubmitSuccessful) {
         reset(defaultValue)
      }
   }, [formState, defaultValue, reset])

   const viewFaqButton = (
      <Button onClick={viewFaq} variant="contained">
         + Add FAQ
      </Button>
   )

   const addFaqButton = (
      <Stack
         sx={{ mt: 2 }}
         padding={0}
         direction={'row'}
         gap={2}
         alignItems={'start'}
         justifyContent="start"
      >
         <Box flexGrow={1} />
         <Button onClick={hideFaq} variant="text">
            Cancel
         </Button>
         <Button
            onClick={handleSubmit(addFaq)}
            variant="contained"
         >
            Create
         </Button>
      </Stack>
   )

   return (
      <>
         <TransitionGroup
            style={{
               gap: 2,
            }}
         >
            {inputs.map((input, i) => (
               <Collapse key={input?.name} sx={{ gap: 2 }}>
                  {renderInput({
                     name: input?.name,
                     placeholder: input?.placeholder,
                     label: input?.label,
                     required: input?.required,
                     control: control,
                     maxRows: input.maxRows,
                     maxCount: input?.maxCount,
                     rows: input?.rows,
                     multiline: input?.multiline,
                     index: i,
                  })}
                  {i === inputs?.length - 1 &&
                     inputs?.length > 0 &&
                     addFaqButton}
               </Collapse>
            ))}
         </TransitionGroup>
         {inputs?.length === 0 && viewFaqButton}
      </>
   )
}
