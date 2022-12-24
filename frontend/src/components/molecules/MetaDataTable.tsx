import {
   Box,
   Checkbox,
   Divider,
   Grid,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Paper,
   Typography,
   useMediaQuery,
} from '@mui/material'
//import RuleIcon from '@mui/icons-material/Rule'
import { useState } from 'react'
import { SelectableDeliverablesProps } from '../../types/types'
import DoneIcon from '@mui/icons-material/Done'

type MetaDataTableProps = {
   deliverables: SelectableDeliverablesProps[]

   onBoxClick: (
      newData: SelectableDeliverablesProps[]
   ) => void
   gigDeliverables: SelectableDeliverablesProps[]
}

export const MetaDataTable = ({
   deliverables,
   gigDeliverables,
   onBoxClick,
}: MetaDataTableProps) => {
   const [selected, setSelected] = useState(0)
   const isSm = useMediaQuery('(max-width:600px)')

   const removeDeliverable = (
      data: string,
      category: string
   ): SelectableDeliverablesProps[] => {
      let newDelivery =
         gigDeliverables ||
         ([] as SelectableDeliverablesProps[])
      const categoryIndex = newDelivery?.findIndex(
         (c) => c?.name === category
      )

      if (categoryIndex > -1) {
         let dataIndex = newDelivery[
            categoryIndex
         ]?.data?.findIndex((d) => d === data)
         if (dataIndex > -1) {
            newDelivery[categoryIndex]?.data?.splice(
               dataIndex,
               1
            )
         }
      }

      return newDelivery
   }

   const addNewDeliverable = (
      data: string,
      category: string
   ): SelectableDeliverablesProps[] => {
      let newDelivery =
         gigDeliverables ||
         ([] as SelectableDeliverablesProps[])
      // check if category exits
      const categoryIndex = newDelivery?.findIndex(
         (c) => c?.name === category
      )
      if (categoryIndex > -1) {
         newDelivery[categoryIndex]?.data?.push(data)
      } else {
         newDelivery?.push({
            name: category,
            data: [data],
         })
      }

      return newDelivery
   }

   const handleCheckBoxClick = (
      checked: boolean,
      data: string,
      category: string
   ): void => {
      console.log(checked, data, category)
      let newDeliverable =
         [] as SelectableDeliverablesProps[]
      if (checked)
         newDeliverable = addNewDeliverable(data, category)
      else
         newDeliverable = removeDeliverable(data, category)
      console.log(newDeliverable)
      onBoxClick(newDeliverable)
   }

   if (
      !deliverables ||
      deliverables?.length < 1 ||
      !deliverables[selected]
   )
      return null

   const Details = () => (
      <Grid sm={12} md={9} padding={2} width="100%">
         <Typography sx={{ pb: 2 }}>
            {selected % 2 === 0 ? 'Pick a' : 'Choose a'}{' '}
            {deliverables[selected]?.name}
         </Typography>
         <Divider />
         <Box display={'flex'} flexWrap="wrap">
            {selected !== undefined &&
               deliverables[selected]?.data?.map(
                  (m: any, index: number) => (
                     <ListItem
                        key={m?.name}
                        sx={{ width: '50%' }}
                     >
                        <Checkbox
                           onChange={(_, checked) => {
                              console.log(checked)
                              handleCheckBoxClick(
                                 checked,
                                 m?.name,
                                 deliverables[selected]
                                    ?.name
                              )
                           }}
                           checked={
                              gigDeliverables?.length > 0 &&
                              gigDeliverables[
                                 selected
                              ]?.data?.includes(m?.name)
                           }
                           color="success"
                        />
                        <ListItemText primary={m?.name} />
                     </ListItem>
                  )
               )}
         </Box>
      </Grid>
   )

   return (
      <Paper elevation={1}>
         <Grid container>
            <Grid sm={12} md={3} width="100%">
               <Paper
                  elevation={0}
                  sx={{
                     height: '100%',
                     width: '100%',
                     overflow: 'hidden',
                     backgroundColor: 'action.selected',
                     borderTopRightRadius: !isSm ? 0 : '',
                     borderBottomRightRadius: !isSm
                        ? 0
                        : '',
                  }}
               >
                  <List
                     disablePadding
                     sx={{
                        overflow: 'hidden',
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                     }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                  >
                     {deliverables?.map(
                        (
                           m: SelectableDeliverablesProps,
                           index: number
                        ) => (
                           <>
                              <ListItemButton
                                 key={m?._id}
                                 selected={
                                    index !== selected
                                 }
                                 onClick={() =>
                                    setSelected(index)
                                 }
                                 sx={{
                                    borderRight:
                                       !isSm &&
                                       index !== selected
                                          ? '1px solid'
                                          : '',

                                    borderBottom:
                                       index !==
                                       deliverables?.length -
                                          1
                                          ? '1px solid'
                                          : 'none',
                                    borderColor: 'divider',
                                 }}
                              >
                                 {' '}
                                 <ListItemIcon>
                                    <DoneIcon />
                                 </ListItemIcon>
                                 <ListItemText
                                    primary={m?.name}
                                 />
                              </ListItemButton>
                              {isSm &&
                                 index === selected && (
                                    <Details />
                                 )}
                           </>
                        )
                     )}
                  </List>
               </Paper>
            </Grid>
            {!isSm && <Details />}
         </Grid>
      </Paper>
   )
}
