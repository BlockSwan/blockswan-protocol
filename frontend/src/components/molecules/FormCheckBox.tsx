import React from 'react'
import {
   Checkbox,
   CheckboxProps,
   FormControl,
   FormControlLabel,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../../types/types'

export const FormCheckbox: React.FC<
   FormInputProps & CheckboxProps
> = ({
   name,
   control,
   setValue,
   label,
   ...checkBoxProps
}) => {
   return (
      <FormControl size={'small'} variant={'outlined'}>
         <FormControlLabel
            control={
               <Controller
                  name={name}
                  render={({
                     field: { onChange, value },
                     fieldState: { error },
                     formState,
                  }) => {
                     return (
                        <Checkbox
                           color={
                              error ? 'error' : 'success'
                           }
                           checked={value}
                           onChange={onChange}
                           {...checkBoxProps}
                        />
                     )
                  }}
                  control={control}
               />
            }
            label={label}
         />
      </FormControl>
   )
}
