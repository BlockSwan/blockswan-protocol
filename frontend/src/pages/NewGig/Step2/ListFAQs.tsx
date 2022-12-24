import { FaqProps } from '../../../types/types'
import { TransitionGroup } from 'react-transition-group'
import {
   AccordionActions,
   Box,
   Collapse,
   Fade,
   Stack,
} from '@mui/material'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Icon } from '../../../components/atoms/Icon'
import { elements, renderInput } from './CreateFAQs'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FAQschema } from '../../../constants/yupSchemas'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
} from '../../../components/atoms/Accordion1'

interface ListFAQsProps {
   faqs: FaqProps[]
   onDelete: (value: number) => void
   onModify: (faq: FaqProps, index: number) => void
}

export const ListFAQs = ({
   faqs,
   onDelete,
   onModify,
}: ListFAQsProps) => {
   const [expanded, setExpanded] = React.useState<
      string | false
   >('panel1')
   const [selected, setSelected] = React.useState<number>(0)
   const [isEditing, setIsEditing] =
      React.useState<boolean>(false)

   const { handleSubmit, control, reset } = useForm({
      defaultValues: React.useMemo(() => {
         return faqs[selected]
      }, [selected, faqs]),
      resolver: yupResolver(FAQschema),
   })

   const handleIsEditing = (val: boolean) => {
      setIsEditing(val)
   }

   const handleChange =
      (panel: string | false, index: number) =>
      (
         event: React.SyntheticEvent,
         newExpanded: boolean
      ) => {
         setExpanded(newExpanded ? panel : false)
         setIsEditing(false)
         setSelected(index)
      }

   const handleCancel = () => {
      handleIsEditing(false)
      reset(faqs[selected])
   }

   const handleDelete = (val: number) => {
      handleIsEditing(false)
      setExpanded(false)
      setSelected(-1)
      onDelete(val)
   }

   const handleModify = (_toAdd: FaqProps) => {
      onModify(_toAdd, selected)
      handleIsEditing(false)
      setExpanded(false)
      setSelected(-1)
   }

   React.useEffect(() => {
      reset(faqs[selected])
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selected, faqs, isEditing])

   return (
      <>
         <TransitionGroup>
            {faqs.map((faq, index) => (
               <Collapse
                  key={`${faq?.question}-${index}`}
                  sx={{
                     gap: 2,
                     display: 'flex',
                     flexDirection: 'column',
                  }}
               >
                  <Accordion
                     expanded={expanded === `panel${index}`}
                     onChange={handleChange(
                        `panel${index}`,
                        index
                     )}
                  >
                     <AccordionSummary
                        aria-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                     >
                        <Typography>
                           {faq.question}
                        </Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        {!isEditing ? (
                           <Typography>
                              {faq.answer}
                           </Typography>
                        ) : (
                           <>
                              <TransitionGroup>
                                 {elements.map(
                                    (input, i) => (
                                       <Collapse
                                          key={input?.name}
                                          sx={{ gap: 2 }}
                                       >
                                          {renderInput({
                                             name: input?.name,
                                             placeholder:
                                                input?.placeholder,
                                             label: input?.label,
                                             required:
                                                input?.required,
                                             control:
                                                control,
                                             maxRows:
                                                input.maxRows,
                                             maxCount:
                                                input?.maxCount,
                                             rows: input?.rows,
                                             multiline:
                                                input?.multiline,
                                             index: i,
                                          })}
                                       </Collapse>
                                    )
                                 )}
                              </TransitionGroup>
                           </>
                        )}
                     </AccordionDetails>
                     <AccordionActions sx={{ p: 2 }}>
                        <Icon
                           name="delete"
                           onClick={() =>
                              handleDelete(index)
                           }
                        />

                        <Box flexGrow={1} />
                        {isEditing ? (
                           <Fade in={isEditing}>
                              <Stack
                                 direction="row"
                                 gap={2}
                              >
                                 <Icon
                                    name="cancel"
                                    onClick={() =>
                                       handleCancel()
                                    }
                                 />

                                 <Icon
                                    name="done"
                                    onClick={handleSubmit(
                                       handleModify
                                    )}
                                 />
                              </Stack>
                           </Fade>
                        ) : (
                           <Icon
                              onClick={() =>
                                 handleIsEditing(true)
                              }
                              name="edit"
                           />
                        )}
                     </AccordionActions>
                  </Accordion>
               </Collapse>
            ))}
         </TransitionGroup>
      </>
   )
}
