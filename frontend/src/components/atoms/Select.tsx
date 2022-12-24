import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

export const Select = () => {
   const [age, setAge] = useState('')

   const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string)
   }
   return (
      <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">
            Age
         </InputLabel>
         <MuiSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
         >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
         </MuiSelect>
      </FormControl>
   )
}
