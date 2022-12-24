import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { TransitionGroup } from 'react-transition-group'
import { TextFieldProps } from '@mui/material'
import { Icon } from '../../../components/atoms/Icon'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { optionSchema } from '../../../constants/yupSchemas'
import { FormInputText } from '../../../components/molecules/FormInputText'
import { getAlphabetCharacter } from '../../../utils/utils'
import { OptionsType } from '../../../types/types'

type RenderItemOptions = TextFieldProps & {
   item: string | undefined
   index: number
   control: any
   name: string
   label: string
   handleRemoveOption: (index: number) => void
   handleChange: (data: any) => void
   onBlur: (data: string) => void
}

interface OptionFormProps {
   options: (string | undefined)[]
   onOptionChange: (options: (string | undefined)[]) => void
   maxLength?: number
   verifyOn: any
   defaultValues: (string | undefined)[]
}

function renderOption({
   item,
   index,
   handleRemoveOption,
   handleChange,
   onBlur,
   ...inputProps
}: RenderItemOptions) {
   return (
      <ListItem
         sx={{ p: 0, gap: 2, alignItems: 'flex-start' }}
      >
         <FormInputText
            withErrorMsg={false}
            {...inputProps}
            maxCount={40}
            onBlur={(e) => onBlur(e.target?.value)}
            onChange={(e) => handleChange(e?.target?.value)}
         />
         {index > 1 && (
            <Icon
               name="delete"
               onClick={() => {
                  handleRemoveOption(index)
               }}
            />
         )}
      </ListItem>
   )
}
// setFruitsInBasket((prev) => [
//    ...prev.filter((i) => i !== item),
// ])

export default function OptionsForm({
   options,
   onOptionChange,
   maxLength,
   verifyOn,
}: OptionFormProps) {
   const {
      handleSubmit,
      control,
      trigger,
      setValue,
      watch,
   } = useForm<OptionsType>({
      defaultValues: {
         options: options,
      },
      resolver: yupResolver(optionSchema),
      mode: 'onChange',
   })

   const watchOptions = watch('options')

   const handleAddOption = (props: OptionsType) => {
      let _options = props.options
      _options.push('')
      console.log(options)
      setValue('options', _options)
   }

   const handleRemoveOption = (index: number) => {
      console.log(index)
      console.log(watchOptions)
      let _options = watchOptions
      _options.splice(index, 1)
      console.log(_options)
      setValue('options', _options)
   }

   const addOptionsButton = (
      <Icon
         name="add"
         onClick={handleSubmit(handleAddOption)}
      />
   )

   React.useEffect(() => {
      const subscription = watch(
         (value, { name, type }) => {
            if (value?.options !== undefined)
               onOptionChange(value?.options || [])
         }
      )
      return () => subscription.unsubscribe()

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [watch])

   React.useEffect(() => {
      trigger()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [verifyOn])

   return (
      <div>
         <Box sx={{ mt: 1, maxWidth: '500px' }}>
            <List>
               <TransitionGroup style={{ gap: 2 }}>
                  {watchOptions?.map((item, index) => (
                     <Collapse
                        key={`options-${index}`}
                        sx={{ gap: 2 }}
                     >
                        {renderOption({
                           item: item,
                           index: index,
                           handleRemoveOption: () =>
                              handleRemoveOption(index),
                           handleChange: (data) => {},
                           control: control,
                           name: `options.${index}`,
                           label: `Option ${getAlphabetCharacter(
                              index
                           )}`,
                           placeholder:
                              'i.e Cairo contract',
                           defaultValue: item,
                           onBlur: (data: any) => {},
                        })}
                     </Collapse>
                  ))}
               </TransitionGroup>
            </List>
         </Box>
         {maxLength &&
            watchOptions?.length <= maxLength &&
            addOptionsButton}
      </div>
   )
}
