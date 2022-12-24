import {
   Button,
   Collapse,
   Divider,
   FormHelperText,
   Typography,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { RequirementCard } from '../../../components/molecules/RequirementCard'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import { RequirementProps } from '../../../types/types'
import { RequirementForm } from './RequirementsForm'
import { defaultRequirement } from '../../../constants/default'

const NewGigRequirement = () => {
   const { gig, setGig } = useGigsContext()
   const { evmAddress } = useWeb3Context()
   const { goToNewGigDescription, goToNewGigGallery } =
      useAppNavigation()
   const [isFormVisible, setIsFormVisible] =
      useState<boolean>(false)
   const [editingIndex, setEditingIndex] = useState<
      number | undefined
   >(undefined)
   const [check, setCheck] = useState<boolean>(false)

   const handleIsFormVisible = () =>
      setIsFormVisible((curr) => !curr)

   const handleEditingIndex = (val: number | undefined) =>
      setEditingIndex(val)

   const addRequirements = (data: RequirementProps) => {
      let _requirements: RequirementProps[] =
         gig.requirements
      if (editingIndex !== undefined)
         _requirements[editingIndex] = data
      else _requirements.push(data)
      setGig({ ...gig, requirements: _requirements })
      handleIsFormVisible()
   }

   const deleteRequirement = (index: number) => {
      let _requirements = gig.requirements
      _requirements.splice(index, 1)

      setGig({ ...gig, requirements: _requirements })
   }

   const reqInForm = useMemo(() => {
      if (editingIndex === undefined)
         return defaultRequirement
      return gig?.requirements[editingIndex]
   }, [editingIndex, gig.requirements])

   const errorReq = useMemo(() => {
      if (gig?.requirements?.length <= 0) {
         return 'Please add at least one requirement.'
      }
      return ''
   }, [gig])

   const onNext = () => {
      setCheck(true)

      if (errorReq === '') goToNewGigGallery(evmAddress)
   }

   const viewFormButton = (
      <Button
         variant="contained"
         onClick={() => {
            handleIsFormVisible()
            handleEditingIndex(undefined)
         }}
      >
         + Add Requirement{' '}
      </Button>
   )

   return (
      <>
         <NewGigLayout
            step={3}
            setStep={() => {}}
            onBack={() => goToNewGigDescription(evmAddress)}
            onNext={onNext}
            children={
               <>
                  <Typography variant="body1">
                     Get all the information you need from
                     buyers to get started.
                     <br /> Add questions to help buyers
                     provide you with exactly what you need
                     to start working on their order.
                  </Typography>
                  <Divider>Your requirements</Divider>
                  {!isFormVisible && viewFormButton}

                  <Collapse in={isFormVisible}>
                     <RequirementForm
                        requirement={reqInForm}
                        onCreate={(
                           data: RequirementProps
                        ) => addRequirements(data)}
                        onCancel={() => {
                           handleIsFormVisible()
                           handleEditingIndex(undefined)
                        }}
                     />
                  </Collapse>

                  <TransitionGroup>
                     {!isFormVisible &&
                        gig?.requirements?.map(
                           (
                              req: RequirementProps,
                              index: number
                           ) => (
                              <Collapse
                                 key={`reqs-${index}`}
                                 sx={{ gap: 2, my: 2 }}
                              >
                                 <RequirementCard
                                    onDelete={() =>
                                       deleteRequirement(
                                          index
                                       )
                                    }
                                    onEdit={() => {
                                       handleIsFormVisible()
                                       handleEditingIndex(
                                          index
                                       )
                                    }}
                                    question={req?.question}
                                    required={req?.required}
                                    multiple={req?.multiple}
                                    type={req?.type}
                                    data={req?.data}
                                 />
                              </Collapse>
                           )
                        )}
                  </TransitionGroup>
                  <FormHelperText
                     sx={{
                        color: 'error.main',
                        display: check ? 'flex' : 'none',
                     }}
                  >
                     {errorReq}
                  </FormHelperText>
               </>
            }
         />
      </>
   )
}

export default NewGigRequirement
