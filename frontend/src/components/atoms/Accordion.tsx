import * as React from 'react'
import {
   Accordion as MuiAccordion,
   Box,
} from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FaqProps } from '../../types/types'

interface AccordionProps {
   faqs: FaqProps[]
}
export default function Accordion({
   faqs,
}: AccordionProps) {
   const [expanded, setExpanded] = React.useState<
      string | false
   >(false)

   const handleChange =
      (panel: string) =>
      (
         event: React.SyntheticEvent,
         isExpanded: boolean
      ) => {
         setExpanded(isExpanded ? panel : false)
      }

   return (
      <Box gap={2} display="flex" flexDirection={'column'}>
         {faqs?.map((el, index) => (
            <MuiAccordion
               expanded={expanded === `panel${index}`}
               onChange={handleChange(`panel${index}`)}
            >
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
               >
                  <Typography>{el?.question}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>{el?.answer}</Typography>
               </AccordionDetails>
            </MuiAccordion>
         ))}
      </Box>
   )
}
