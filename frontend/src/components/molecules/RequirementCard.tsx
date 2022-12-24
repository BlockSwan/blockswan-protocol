import {
   Avatar,
   Box,
   Divider,
   Paper,
   Typography,
} from '@mui/material'
import { RequirementProps } from '../../types/types'
import NotesIcon from '@mui/icons-material/Notes'
import AbcIcon from '@mui/icons-material/Abc'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { Stack } from '@mui/system'
import { Icon } from '../atoms/Icon'

type RequirementCardProps = RequirementProps & {
   onDelete: (
      event: React.MouseEvent<HTMLButtonElement>
   ) => void
   onEdit: (
      event: React.MouseEvent<HTMLButtonElement>
   ) => void
}

const getIconAndName = (name: string) => {
   switch (name) {
      case 'free-text':
         return {
            icon: <NotesIcon />,
            name: 'Free text',
         }
      case 'multiple-choice':
         return {
            icon: <AbcIcon />,
            name: 'Multiple choice',
         }
      case 'file-attachment':
         return {
            icon: <AttachFileIcon />,
            name: 'File attachment',
         }
      default:
         return {
            icon: null,
            name: '',
         }
   }
}

export const RequirementCard = (
   props: RequirementCardProps
) => {
   const {
      question,
      required,
      data,
      type,
      multiple,
      onDelete,
      onEdit,
   } = props
   return (
      <Paper sx={{ p: 2 }} elevation={3} variant="outlined">
         <Stack
            direction={'row'}
            gap={2}
            alignItems="center"
         >
            <Avatar>{getIconAndName(type).icon}</Avatar>
            <Stack
               direction={'column'}
               alignItems="start"
               gap={0}
            >
               <Typography
                  lineHeight={1}
                  sx={{ marginBottom: 0 }}
                  variant="overline"
               >
                  {required ? 'Required' : 'Not required'}
               </Typography>
               <Typography marginTop={0}>
                  {getIconAndName(type).name}{' '}
                  {type === 'multiple-choice' &&
                     `(${
                        !multiple
                           ? `only one pick`
                           : `multiple picks`
                     })`}
               </Typography>
            </Stack>
            <Box flexGrow={1} />
            <Icon name="edit" onClick={onEdit} />
            <Icon name="delete" onClick={onDelete} />
         </Stack>
         <Divider sx={{ my: 2 }} />
         <Typography variant="body2">
            {question}
         </Typography>{' '}
         <Stack
            direction={'row'}
            flexWrap="wrap"
            alignItems={'center'}
            gap={2}
         >
            {type === 'multiple-choice' &&
               data?.map((e, i) => (
                  <Stack
                     direction={'row'}
                     key={`opt-${i}-${e}`}
                     alignItems={'center'}
                     gap={2}
                  >
                     {i > 0 && (
                        <Typography variant="overline">
                           |
                        </Typography>
                     )}
                     <Typography variant="overline">
                        {e}
                     </Typography>
                  </Stack>
               ))}
         </Stack>
      </Paper>
   )
}
