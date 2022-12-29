import {
   TextField,
   Select,
   MenuItem,
   Stack,
   InputLabel,
   FormControl,
   Autocomplete,
   FormHelperText,
} from '@mui/material'
import { MetaDataTable } from '../../../components/molecules/MetaDataTable'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useForm, Controller } from 'react-hook-form'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import {
   CategoryProps,
   GigProps,
   PackageProps,
   SelectableDeliverablesProps,
} from '../../../types/types'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'
import { useEffect } from 'react'

const schema = yup.object().shape({
   title: yup.string().min(20).max(80).required(),
   category: yup.string().required(),
   subcategory: yup.string().required(),
   tags: yup.array().required().min(1),
})

const NewGigOverview = () => {
   const { gig, setGig, isEditing } = useGigsContext()
   const {
      categories,
      getCategoryFromName,
      getSubCategoryFromNames,
   } = useCategoriesContext()
   const { evmAddress } = useWeb3Context()
   const { goToNewGigPrice } = useAppNavigation()
   const { handleSubmit, control, watch, setValue } =
      useForm({
         defaultValues: gig,
         resolver: yupResolver(schema),
      })

   const watchCategory: string = watch('category')
   const watchSubCategory: string = watch('subcategory')

   const goNextStep = (data: GigProps) => {
      setGig({ ...gig, ...data })
      console.log(data)
      goToNewGigPrice(evmAddress)
   }

   useEffect(() => {
      if (watchSubCategory !== gig?.subcategory) {
         setGig({
            ...gig,
            selectableDeliverables:
               [] as SelectableDeliverablesProps[],
            packages: [] as PackageProps[],
         })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [watchSubCategory, watchCategory])

   return (
      <>
         <NewGigLayout
            step={0}
            setStep={() => {}}
            onBack={() => {}}
            onNext={handleSubmit(goNextStep)}
         >
            <Controller
               name={'title'}
               control={control}
               render={({
                  field: { onChange, value },
                  fieldState: { error },
                  formState,
               }) => (
                  <TextField
                     helperText={
                        error ? error.message : null
                     }
                     size="small"
                     error={!!error}
                     onChange={onChange}
                     value={value}
                     fullWidth={true}
                     label={'First, a title'}
                     required={true}
                     placeholder="I will do ..."
                  />
               )}
            />
            <Stack
               gap={2}
               display="flex"
               alignItems="center"
               direction="row"
            >
               <FormControl fullWidth variant="standard">
                  <InputLabel id="category">
                     Category
                  </InputLabel>
                  <Controller
                     render={({
                        field: { onChange, value },
                        fieldState: { error },
                     }) => (
                        <>
                           <Select
                              onChange={onChange}
                              value={value}
                              fullWidth
                              required={true}
                              labelId="category"
                              id="category"
                              label="Category"
                              error={!!error}
                           >
                              {categories?.message?.map(
                                 (
                                    c: CategoryProps,
                                    index: number
                                 ) => (
                                    <MenuItem
                                       key={c?.name}
                                       value={c?.name}
                                    >
                                       {c?.emoji +
                                          '  ' +
                                          c?.name}
                                    </MenuItem>
                                 )
                              )}
                           </Select>
                           <FormHelperText
                              sx={{
                                 color: (theme) =>
                                    theme.palette.error
                                       .main,
                              }}
                           >
                              {error ? error.message : ''}
                           </FormHelperText>
                        </>
                     )}
                     control={control}
                     name={'category'}
                  />
               </FormControl>
               <FormControl fullWidth variant="standard">
                  <InputLabel id="subcategory">
                     Sub-category
                  </InputLabel>
                  <Controller
                     render={({
                        field: { onChange, value },
                        fieldState: { error },
                     }) => (
                        <>
                           <Select
                              onChange={onChange}
                              value={value}
                              fullWidth
                              required
                              labelId="subcategory"
                              id="subcategory"
                              label="Sub-Category"
                              error={!!error}
                           >
                              {getCategoryFromName(
                                 watchCategory
                              )?.subCategories?.map(
                                 (s: any) => (
                                    <MenuItem
                                       key={s?.name}
                                       value={s?.name}
                                    >
                                       {s?.name}
                                    </MenuItem>
                                 )
                              )}
                           </Select>
                           <FormHelperText
                              sx={{
                                 color: (theme) =>
                                    theme.palette.error
                                       .main,
                              }}
                           >
                              {error ? error.message : ''}
                           </FormHelperText>
                        </>
                     )}
                     control={control}
                     name={'subcategory'}
                  />
               </FormControl>
            </Stack>{' '}
            <MetaDataTable
               onBoxClick={(_deliverables) => {
                  console.log(_deliverables)
                  setValue(
                     'selectableDeliverables',
                     _deliverables
                  )
                  setGig({
                     ...gig,
                     selectableDeliverables: _deliverables,
                  })
               }}
               deliverables={
                  getSubCategoryFromNames(
                     watchCategory,
                     watchSubCategory
                  )?.selectableDeliverables
               }
               gigDeliverables={gig?.selectableDeliverables}
            />
            <Controller
               render={({
                  field: { onChange, value },
                  fieldState: { error },
               }) => (
                  <Autocomplete
                     id="tags"
                     multiple
                     freeSolo={true}
                     defaultValue={gig?.tags || []}
                     options={[]}
                     onChange={(e, d) => {
                        onChange(d)
                     }}
                     value={value}
                     renderInput={(params) => (
                        <>
                           <TextField
                              error={!!error}
                              {...params}
                              label="Add tags"
                              variant="outlined"
                              placeholder="eg: Web3 (Press enter to add)"
                           />
                           <FormHelperText error={!!error}>
                              {error ? error?.message : ''}
                           </FormHelperText>
                        </>
                     )}
                  />
               )}
               name="tags"
               control={control}
            />{' '}
         </NewGigLayout>
      </>
   )
}

export default NewGigOverview
