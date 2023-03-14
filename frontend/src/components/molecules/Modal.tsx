import * as React from 'react'
import Box from '@mui/material/Box'
import {
   Divider,
   Modal as MuiModal,
   ModalProps as MuiModalProps,
   Typography,
} from '@mui/material/'

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid divider',
   boxShadow: 24,
   p: 4,
   borderRadius: 2,
   outline: 'none',
}

type ModalProps = MuiModalProps & {
   title: string
}

export default function Modal(props: ModalProps) {
   const { children, title, ...other } = props
   return (
      <div>
         <MuiModal {...other}>
            <Box sx={style}>
               <Typography
                  fontWeight={'bold'}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
               >
                  {title}
               </Typography>
               <Divider sx={{ mt: 2 }} />
               {props.children}
            </Box>
         </MuiModal>
      </div>
   )
}
