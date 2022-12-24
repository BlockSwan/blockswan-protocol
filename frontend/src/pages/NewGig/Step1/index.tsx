import { Stack, Typography, Checkbox } from '@mui/material'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import {
   GigProps,
   PackageProps,
} from '../../../types/types'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import PackageTable from '../../../components/molecules/PackageTable'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'
import { verifyPackages } from '../../../utils/verifiers'
import { useState, useMemo } from 'react'

const NewGigPrice = () => {
   const { getSubCategoryFromNames } =
      useCategoriesContext()
   const { gig, setGig } = useGigsContext()
   const { evmAddress } = useWeb3Context()
   const { goToNewGig, goToNewGigDescription } =
      useAppNavigation()

   const [isErrorVisible, setIsErrorVisible] =
      useState<boolean>(false)
   const [isValid, setIsValid] = useState<boolean>(false)
   const [isPackages, setIsPackages] = useState<boolean>(
      gig?.packages?.length > 1
   )

   const booleanDeliverables = useMemo(() => {
      let deliverables =
         getSubCategoryFromNames(
            gig?.category,
            gig?.subcategory
         )?.booleanDeliverables || []

      return deliverables
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [gig?.category, gig?.subcategory])

   const goBack = (data: GigProps) => {
      setGig({ ...gig, ...data })
      goToNewGig(evmAddress)
   }

   const Table = () => (
      <PackageTable
         isErrorVisible={isErrorVisible}
         isCreatePackage={!isPackages}
         packages={gig?.packages}
         setIsPackagesValid={(_isValid) => {
            setIsValid(_isValid)
            console.log(_isValid)
         }}
         booleanDeliverables={booleanDeliverables}
         onCreatePackage={() => {
            setIsPackages(!isPackages)
            setIsErrorVisible(false)
         }}
         onPackageChange={(newPackages: PackageProps[]) => {
            setGig({ ...gig, packages: newPackages })
         }}
      />
   )
   return (
      <>
         <NewGigLayout
            step={1}
            setStep={() => {}}
            onBack={() => goBack({} as GigProps)}
            onNext={() => {
               setIsErrorVisible(true)
               let _isValid: boolean = verifyPackages(
                  gig?.packages
               )
               if (_isValid)
                  goToNewGigDescription(evmAddress)
            }}
            action={
               <Stack
                  alignItems={'center'}
                  direction={'row'}
                  spacing={1}
               >
                  <Typography>Offer Package</Typography>
                  <Checkbox
                     checked={isPackages}
                     onClick={() => {
                        setIsPackages(!isPackages)
                        setIsErrorVisible(false)
                     }}
                     color="success"
                  />
               </Stack>
            }
         >
            {Table()}
            <Typography
               color="error"
               sx={{
                  display: isErrorVisible
                     ? isValid
                        ? 'none'
                        : 'flex'
                     : 'none',
               }}
            >
               You need to fill all the required fields!
            </Typography>{' '}
         </NewGigLayout>
      </>
   )
}

export default NewGigPrice
