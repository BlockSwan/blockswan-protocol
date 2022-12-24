import { FormHelperText } from '@mui/material'
import { useMemo, useState } from 'react'
import Quill from '../../../classes/Quill'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import { FaqProps } from '../../../types/types'
import { CreateFAQs } from './CreateFAQs'
import { ListFAQs } from './ListFAQs'

const NewGigDescription = () => {
   const { gig, setGig } = useGigsContext()
   const { goToNewGigRequirement, goToNewGigPrice } =
      useAppNavigation()
   const { evmAddress } = useWeb3Context()

   const [isSubmit, setIsSubmit] = useState(false)

   const handleQuill = (
      htmlText: string,
      length: number,
      text: string
   ) => {
      setGig({
         ...gig,
         description: {
            html: htmlText,
            length: length,
            text: text,
         },
      })
   }

   const addFaq = (faq: FaqProps) => {
      let newFaqs: FaqProps[] = gig?.faqs
      if (!newFaqs) newFaqs = [] as FaqProps[]
      newFaqs.push(faq)
      setGig({ ...gig, faqs: newFaqs })
      console.log(newFaqs)
   }

   const deleteFaq = (index: number) => {
      let newFaqs: FaqProps[] = gig?.faqs
      if (!newFaqs) newFaqs = [] as FaqProps[]
      newFaqs?.splice(index, 1)
      setGig({ ...gig, faqs: newFaqs })
   }

   const modifyFaq = (newFaq: FaqProps, index: number) => {
      const { faqs } = gig
      let newFaqs: FaqProps[] = faqs || []
      if (newFaqs[index]) {
         newFaqs[index] = newFaq
      }

      setGig({ ...gig, faqs: newFaqs })
   }

   const errorDescription = useMemo(() => {
      if (
         !gig?.description?.text ||
         !gig?.description?.html ||
         gig?.description?.length < 100
      ) {
         return 'Please write a description of minimum 100 words'
      }
      return null
   }, [gig?.description])

   const errorFaq = useMemo(() => {
      console.log('checking')
      if (gig?.faqs?.length === 0)
         return 'Please add at least one FAQ to help buyers'
      return null
   }, [gig])

   const goNextStep = () => {
      setIsSubmit(true)
      if (!errorDescription && !errorFaq)
         goToNewGigRequirement(evmAddress)
   }
   return (
      <>
         <NewGigLayout
            step={2}
            setStep={() => {}}
            onBack={() => goToNewGigPrice(evmAddress)}
            onNext={goNextStep}
            children={
               <Quill
                  isError={true}
                  placeholder="Detail your gig here"
                  maxLength={200}
                  htmlText={gig?.description?.html}
                  onBlur={handleQuill}
                  helperText={
                     isSubmit && errorDescription
                        ? errorDescription
                        : null
                  }
                  length={gig?.description?.length}
                  text={gig?.description?.text}
               />
            }
            secondChildrenHeaderText={
               'Frequently asked questions'
            }
            secondChildren={
               <>
                  <CreateFAQs
                     defaultValue={{} as FaqProps}
                     onSubmit={addFaq}
                  />{' '}
                  <FormHelperText
                     sx={{ color: 'error.main' }}
                  >
                     {isSubmit && errorFaq}
                  </FormHelperText>
                  <ListFAQs
                     onModify={modifyFaq}
                     onDelete={deleteFaq}
                     faqs={gig?.faqs || []}
                  />
               </>
            }
         />
      </>
   )
}

export default NewGigDescription
