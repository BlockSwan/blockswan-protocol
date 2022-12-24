import React, { useEffect, useState } from 'react'
import {
   Checkbox,
   FormControl,
   FormControlLabel,
   FormLabel,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../../types/types'

type FormInputMultiCheckboxProps = FormInputProps & {
   options?: any
   boxColor?:
      | 'error'
      | 'default'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | undefined
}

export const FormInputMultiCheckbox: React.FC<
   FormInputMultiCheckboxProps
> = ({
   name,
   control,
   setValue,
   label,
   options,
   boxColor,
}) => {
   const [selectedItems, setSelectedItems] = useState<any>(
      []
   )

   const handleSelect = (value: any) => {
      const isPresent = selectedItems.indexOf(value)
      if (isPresent !== -1) {
         const remaining = selectedItems.filter(
            (item: any) => item !== value
         )
         setSelectedItems(remaining)
      } else {
         setSelectedItems((prevItems: any) => [
            ...prevItems,
            value,
         ])
      }
   }

   useEffect(() => {
      setValue(name, selectedItems)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedItems])

   return (
      <FormControl size={'small'} variant={'outlined'}>
         <FormLabel component="legend">{label}</FormLabel>

         <div>
            {options &&
               options.map((option: any) => {
                  return (
                     <FormControlLabel
                        control={
                           <Controller
                              name={name}
                              render={() => {
                                 return (
                                    <Checkbox
                                       checked={selectedItems.includes(
                                          option.value
                                       )}
                                       color={
                                          boxColor ||
                                          'success'
                                       }
                                       onChange={() =>
                                          handleSelect(
                                             option.value
                                          )
                                       }
                                    />
                                 )
                              }}
                              control={control}
                           />
                        }
                        label={option.label}
                        key={option.value}
                     />
                  )
               })}
         </div>
      </FormControl>
   )
}
