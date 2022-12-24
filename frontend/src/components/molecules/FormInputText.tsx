import { Box, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../../types/types'

export const FormInputText = ({
   name,
   control,
   label,
   placeholder,
   required,
   multiline,
   maxRows,
   helperText,
   maxCount,
   withErrorMsg = true,
   ...props
}: FormInputProps) => {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={props.defaultValue}
         render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
         }) => (
            <TextField
               {...props}
               helperText={
                  <Box display="flex">
                     {' '}
                     {error && withErrorMsg
                        ? error.message
                        : helperText}
                     <Box flexGrow={1} />{' '}
                     {maxCount &&
                        maxCount > 0 &&
                        `${value?.length || 0}/${maxCount}`}
                  </Box>
               }
               multiline={multiline}
               maxRows={maxRows}
               size="small"
               error={!!error}
               onChange={onChange}
               placeholder={placeholder}
               value={value}
               fullWidth
               label={label}
               variant={props.variant || 'outlined'}
               required={required}
            />
         )}
      />
   )
}
