import React from 'react'
import {
   FormControl,
   FormHelperText,
   InputLabel,
   MenuItem,
   Select,
   SelectProps,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../../types/types'

export const FormInputDropdown: React.FC<
   FormInputProps & { options: any } & SelectProps
> = ({ name, control, label, options, ...selectProps }) => {
   const generateSingleOptions = () => {
      return options.map((option: any) => {
         return (
            <MenuItem
               key={option.value}
               value={option.value}
            >
               {option.label}
            </MenuItem>
         )
      })
   }

   return (
      <FormControl size={'small'}>
         <InputLabel>{label}</InputLabel>
         <Controller
            render={({
               field: { onChange, value },
               fieldState: { error },
            }) => (
               <>
                  {' '}
                  <Select
                     label={label}
                     onChange={onChange}
                     value={value}
                     variant="outlined"
                     {...selectProps}
                  >
                     {generateSingleOptions()}
                  </Select>
                  <FormHelperText
                     sx={{ color: 'error.main' }}
                  >
                     {error ? error.message : ''}
                  </FormHelperText>
               </>
            )}
            control={control}
            name={name}
         />
      </FormControl>
   )
}
