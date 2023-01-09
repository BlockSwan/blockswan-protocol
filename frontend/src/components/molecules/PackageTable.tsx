import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, {
   TableCellBaseProps,
   tableCellClasses,
} from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
   Button,
   Checkbox,
   FormControl,
   Input,
   InputAdornment,
   InputLabel,
   InputProps,
   MenuItem,
   Select,
   styled as MuiStyled,
   TextField,
   TextFieldProps,
   Theme,
   Typography,
} from '@mui/material'
import ReportIcon from '@mui/icons-material/Report'

import { PackageProps, BoooleanDeliverablesProps } from '../../types/types'
import { delivery } from '../../constants/delivery'
import styled from 'styled-components'
import {
   isDeliverableOk,
   isNameOk,
   isPriceOk,
   isRevisionOk,
   isTimeDeliveryOk,
   verifyPackages,
} from '../../utils/verifiers'
import { revisions } from '../../constants/revisions'

type TableCellProps = TableCellBaseProps & {
   background?: string
   isBottom?: boolean
   isLeft?: boolean
   isRight?: boolean
   isInput?: boolean
   theme: Theme
}

export const StyledTableCell = MuiStyled(TableCell)(
   (props: TableCellProps) => ({
      [`&.${tableCellClasses.head}`]: {
         backgroundColor: props.background
            ? props.background
            : props.theme.palette.action.selected,
         borderBottom: props.isBottom ? '1px solid' : '',
         fontWeight: 'bold',

         borderLeft: props.isLeft ? '1px solid' : '',
         borderRight: props.isRight ? '1px solid' : '',
         borderColor: props.theme.palette.divider,
      },
      [`&.${tableCellClasses.body}`]: {
         fontSize: 14,
         position: 'relative',
         overflow: 'hidden',
         padding: props.isInput ? 0 : '',
         backgroundColor: props.background
            ? props.background
            : props.theme.palette.action.selected,
         borderBottom: props.isBottom ? '1px solid' : 'none',

         borderLeft: props.isLeft ? '1px solid' : '',
         borderRight: props.isRight ? '1px solid' : '',
         borderColor: props.theme.palette.divider,
         '.error': {
            color: props.theme.palette.error.main,
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '16px',
         },
      },
   })
)

let inputSX = {
   width: '100%',
   height: '100%',
   borderRadius: '0px',

   '& .MuiOutlinedInput-root': {
      height: '100%',
      border: 'none',

      '&.Mui-focused fieldset': {
         boxShadow: (theme: any) => ` inset ${theme.shadows[5]}`,

         borderRadius: '0px',
         '.label': {
            display: 'none',
         },
      },
   },

   fieldSet: { border: 'none' },
}

// const InputCell = styled.textarea`
//   padding: ${({ theme }) => theme.spacing(1)};
//   font-family: 'Saira';
//   width: 100%;
//   min-height: 1rem;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   border: none;
//   outline: none;
//   resize: none;
//   &:focus {
//     box-shadow: ${({ theme }) => ` inset ${theme.shadows[5]}`};
//   }
// `

// const rows = [
//    'Detail',
//    'Deliverable',
//    'Time delivery',
//    'Revisions',
//    'Price',
// ]

type PackageTableProps = {
   packages: PackageProps[]
   onCreatePackage: Function
   isCreatePackage: boolean
   booleanDeliverables: BoooleanDeliverablesProps[]
   onPackageChange: (newPackages: PackageProps[]) => void
   isErrorVisible?: boolean
   setIsPackagesValid: (val: any) => void
}

export default function PackageTable({
   packages,
   onCreatePackage = () => {},
   isCreatePackage = false,
   booleanDeliverables,
   onPackageChange,
   isErrorVisible,
   setIsPackagesValid,
}: PackageTableProps) {
   const onTitleChange = (value: string, packageIndex: number): void => {
      let newPackages = packages || ([] as PackageProps[])
      newPackages[packageIndex].name = value
      onPackageChange(newPackages)
   }

   const onCheckBoxClick = (
      checked: boolean,
      value: BoooleanDeliverablesProps,
      packageIndex: number
   ): void => {
      let newPackages = packages || ([] as PackageProps[])
      if (!newPackages[packageIndex]?.includes)
         newPackages[packageIndex].includes = [] as BoooleanDeliverablesProps[]

      if (checked) {
         const deliverableIndex = newPackages[
            packageIndex
         ]?.includes?.findIndex((c) => c?.name === value?.name)
         if (deliverableIndex === -1) {
            newPackages[packageIndex]?.includes?.push(value)
         }
      } else {
         const deliverableIndex = newPackages[
            packageIndex
         ]?.includes?.findIndex((c) => c?.name === value?.name)
         if (deliverableIndex > -1) {
            newPackages[packageIndex]?.includes?.splice(deliverableIndex, 1)
         }
      }

      onPackageChange(newPackages)
   }

   const onDeliverableChange = (value: any, packageIndex: number): void => {
      let newPackages = packages || ([] as PackageProps[])
      newPackages[packageIndex].deliverable = value
      onPackageChange(newPackages)
   }

   const onTimeDeliveryChange = (value: number, packageIndex: number): void => {
      let newPackages = packages || ([] as PackageProps[])
      newPackages[packageIndex].delivery = value
      console.log(newPackages)
      onPackageChange(newPackages)
   }

   const onRevesionChange = (value: string, packageIndex: number): void => {
      let newPackages = packages || ([] as PackageProps[])
      newPackages[packageIndex].revision = value
      onPackageChange(newPackages)
   }

   const onPriceChange = (value: number, packageIndex: number): void => {
      let newPackages = packages || ([] as PackageProps[])
      newPackages[packageIndex].price = value
      onPackageChange(newPackages)
   }

   const addNewPackages = (): void => {
      let newPackages = packages || ([] as PackageProps[])
      if (newPackages?.length <= 1) {
         newPackages.push({} as PackageProps)
         newPackages.push({} as PackageProps)
      }

      onPackageChange(newPackages)
   }

   const removePackage = (): void => {
      let newPackages = [] as PackageProps[]
      if (packages && packages[0]) newPackages?.push(packages[0])
      else newPackages.push({} as PackageProps)
      onPackageChange(newPackages)
   }

   const isListVisible = (index: number): boolean => {
      switch (isCreatePackage) {
         case true:
            if (index === 0) return true
            return false
         case false:
            return true
      }
   }

   React.useEffect(() => {
      let isValid: boolean = verifyPackages(packages)
      setIsPackagesValid(isValid)
   }, [packages, setIsPackagesValid])

   React.useEffect(() => {
      if (!isCreatePackage) addNewPackages()
      else removePackage()

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isCreatePackage])

   if (!booleanDeliverables || !packages || !packages[0]) return null

   return (
      <TableContainer variant="outlined" elevation={2} component={Paper}>
         <Table
            sx={{ minWidth: 650, position: 'relative' }}
            aria-label="simple table"
         >
            <TableHead>
               <TableRow>
                  <StyledTableCell
                     width={'25%'}
                     isLeft={false}
                  ></StyledTableCell>
                  <StyledTableCell width={'25%'} isLeft={true} align="center">
                     BASIC
                  </StyledTableCell>
                  <StyledTableCell width={'25%'} isLeft={true} align="center">
                     STANDARD
                  </StyledTableCell>
                  <StyledTableCell
                     width={'25%'}
                     isLeft={true}
                     isRight={false}
                     align="center"
                  >
                     PREMIUM
                  </StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               <TableRow>
                  <StyledTableCell isBottom={false}></StyledTableCell>
                  {['Basic', 'Standard', 'Premium']?.map((_, index: number) => (
                     <StyledTableCell
                        key={_ + '-details'}
                        align="center"
                        isLeft={true}
                        background="primary.main"
                        isInput={true}
                        isBottom={true}
                     >
                        {!isNameOk(packages[index]?.name) &&
                           isErrorVisible &&
                           packages[index] && <ReportIcon className="error" />}
                        <TextFieldForm
                           multiline
                           maxRows={1}
                           onLeaveInput={async (e) => {
                              await onTitleChange(e, index)
                           }}
                           InputProps={{
                              readOnly: isCreatePackage && index > 0,
                           }}
                           value={packages[index]?.name}
                           sx={inputSX}
                           placeholder="Name your package"
                        />
                     </StyledTableCell>
                  ))}
               </TableRow>
               <TableRow>
                  <StyledTableCell isBottom={false}></StyledTableCell>
                  {['Basic', 'Standard', 'Premium']?.map((_, index: number) => (
                     <StyledTableCell
                        key={`${_}-description`}
                        style={{ height: '5rem' }}
                        align="center"
                        isLeft={true}
                        background="primary.main"
                        isInput={true}
                        isBottom={true}
                     >
                        {!isDeliverableOk(packages[index]?.deliverable) &&
                           isErrorVisible &&
                           packages[index] && <ReportIcon className="error" />}

                        <TextFieldForm
                           //  onChange={(e) =>
                           //   editPackage(i, e.target.value, 'deliverable')
                           //   }

                           onLeaveInput={(e) => {
                              onDeliverableChange(e, index)
                           }}
                           InputProps={{
                              readOnly: isCreatePackage && index > 0,
                           }}
                           value={packages[index]?.deliverable || undefined}
                           key="deliverables"
                           multiline
                           maxRows={2}
                           sx={inputSX}
                           placeholder="Deliverables..."
                        />
                     </StyledTableCell>
                  ))}
               </TableRow>
               {booleanDeliverables?.map(
                  (deliverable: any, indexRow: number) => (
                     <TableRow key={`row-${deliverable}-${indexRow}`}>
                        <StyledTableCell isBottom={true}>
                           {deliverable?.name}
                        </StyledTableCell>

                        {['Basic', 'Standard', 'Premium']?.map(
                           (_: string, i: number) => (
                              <StyledTableCell
                                 align="center"
                                 isLeft={true}
                                 background="primary.main"
                                 isInput={true}
                                 isBottom={true}
                                 key={`pack-${_}-${i}`}
                              >
                                 <Checkbox
                                    onChange={(_, checked) =>
                                       onCheckBoxClick(
                                          checked,
                                          {
                                             name: deliverable?.name,
                                          },
                                          i
                                       )
                                    }
                                    checked={
                                       packages[i]?.includes?.findIndex(
                                          (c) => c?.name === deliverable?.name
                                       ) > -1
                                    }
                                    color="success"
                                 />
                              </StyledTableCell>
                           )
                        )}
                     </TableRow>
                  )
               )}
               <TableRow>
                  <StyledTableCell isBottom={true}>
                     Time Delivery
                  </StyledTableCell>
                  {['Basic', 'Standard', 'Premium']?.map((_, index: number) => (
                     <StyledTableCell
                        align="center"
                        key={_ + '-timedelivery'}
                        isLeft={true}
                        background="primary.main"
                        isInput={true}
                        isBottom={true}
                     >
                        {!isTimeDeliveryOk(packages[index]?.delivery) &&
                           packages[index] &&
                           isErrorVisible && <ReportIcon className="error" />}
                        <FormControl fullWidth>
                           <InputLabel
                              sx={{
                                 display:
                                    packages && packages[index]?.delivery
                                       ? 'none'
                                       : 'flex',
                              }}
                              id="time-delivery"
                           >
                              Time Delivery
                           </InputLabel>

                           <Select
                              onChange={(e: any) => {
                                 onTimeDeliveryChange(e?.target?.value, index)
                              }}
                              inputProps={{
                                 sx: {
                                    textAlign: 'start',
                                    InputLabel: {
                                       color: 'red',
                                    },
                                 },
                              }}
                              defaultValue={
                                 isListVisible(index)
                                    ? packages[index]?.delivery
                                    : ''
                              }
                              value={
                                 isListVisible(index)
                                    ? packages[index]?.delivery || ''
                                    : ''
                              }
                              placeholder="Time delivery"
                              labelId="time-delivery"
                              id="time-delivery"
                              sx={{
                                 fieldset: {
                                    border: 'none',
                                 },
                              }}
                           >
                              {isListVisible(index) &&
                                 delivery.map((d, dIndex) => (
                                    <MenuItem key={`${d}-${dIndex}`} value={d}>
                                       {d} day(s) delivery
                                    </MenuItem>
                                 ))}
                           </Select>
                        </FormControl>
                     </StyledTableCell>
                  ))}
               </TableRow>
               <TableRow>
                  <StyledTableCell isBottom={true}>Revisions</StyledTableCell>
                  {['Basic', 'Standard', 'Premium']?.map((_, index: number) => (
                     <StyledTableCell
                        align="center"
                        key={_ + '-revision'}
                        isLeft={true}
                        background="primary.main"
                        isInput={true}
                        isBottom={true}
                     >
                        {!isRevisionOk(packages[index]?.revision) &&
                           packages[index] &&
                           isErrorVisible && <ReportIcon className="error" />}
                        <FormControl fullWidth>
                           <InputLabel
                              sx={{
                                 display:
                                    packages && packages[index]?.revision
                                       ? 'none'
                                       : 'flex',
                              }}
                              id="revision"
                           >
                              Select
                           </InputLabel>

                           <Select
                              onChange={(e: any) => {
                                 onRevesionChange(e?.target?.value, index)
                              }}
                              inputProps={{
                                 sx: {
                                    textAlign: 'start',
                                    InputLabel: {
                                       color: 'red',
                                    },
                                 },
                              }}
                              defaultValue={
                                 isListVisible(index)
                                    ? packages[index]?.revision
                                    : ''
                              }
                              value={
                                 isListVisible(index)
                                    ? packages[index]?.revision || ''
                                    : ''
                              }
                              placeholder="Revisions"
                              labelId="revision"
                              id="revision"
                              sx={{
                                 fieldset: {
                                    border: 'none',
                                 },
                              }}
                           >
                              {isListVisible(index) &&
                                 revisions.map((d, dIndex) => (
                                    <MenuItem key={`${d}-${dIndex}`} value={d}>
                                       {d}{' '}
                                       {parseInt(d) >= 0 &&
                                          parseInt(d) <= 9 &&
                                          ' Revision(s)'}
                                    </MenuItem>
                                 ))}
                           </Select>
                        </FormControl>
                     </StyledTableCell>
                  ))}
               </TableRow>
               <TableRow>
                  <StyledTableCell isBottom={false}>Price in $</StyledTableCell>
                  {['Basic', 'Standard', 'Premium']?.map((_, index: number) => (
                     <StyledTableCell
                        key={`${_}-price`}
                        isLeft={true}
                        background="primary.main"
                        isInput={true}
                        isBottom={false}
                     >
                        {!isPriceOk(packages, index) &&
                           isErrorVisible &&
                           packages[index] && <ReportIcon className="error" />}
                        <FormControl fullWidth variant="outlined">
                           <PriceInput
                              readOnly={isCreatePackage && index > 0}
                              value={packages[index]?.price}
                              onLeaveInput={(data) =>
                                 onPriceChange(data, index)
                              }
                              placeholder={`${100 + index * 140}`}
                           />
                        </FormControl>
                     </StyledTableCell>
                  ))}
               </TableRow>
            </TableBody>
            {isCreatePackage && (
               <Overhead>
                  <Typography variant="body2">
                     Offer packages to meet the needs of more buyers
                  </Typography>
                  <Button
                     sx={{
                        border: (theme) =>
                           `1px solid ${theme.blockswan.rainbows}`,
                     }}
                     onClick={() => {
                        onCreatePackage()
                     }}
                     variant="outlined"
                  >
                     Create packages
                  </Button>
               </Overhead>
            )}
         </Table>
      </TableContainer>
   )
}

type TextFieldFormProps = TextFieldProps & {
   onLeaveInput: (data: any) => void
}

const TextFieldForm = (props: TextFieldFormProps) => {
   const [isEditing, setIsEditing] = React.useState(false)
   return (
      <TextField
         onFocus={() => setIsEditing(true)}
         onBlur={async (e) => {
            setIsEditing(false)
            await props.onLeaveInput(e?.target?.value)
         }}
         {...props}
         value={
            !isEditing
               ? props?.InputProps?.readOnly
                  ? ''
                  : props?.value
               : undefined
         }
      />
   )
}
type PriceInputProps = InputProps & {
   onLeaveInput: (data: any) => void
}
const PriceInput = (props: PriceInputProps) => {
   const [isEditing, setIsEditing] = React.useState(false)
   return (
      <Input
         onFocus={() => setIsEditing(true)}
         onBlur={(e) => {
            setIsEditing(false)
            props.onLeaveInput(parseInt(e?.target?.value))
         }}
         {...props}
         value={!isEditing ? (props.readOnly ? '' : props?.value) : undefined}
         type="number"
         disableUnderline={true}
         sx={{
            root: { border: 'none' },
            input: { mr: 2, textAlign: 'end' },
         }}
         endAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
   )
}

const Overhead = styled.div`
   position: absolute;
   width: 50%;
   height: 100%;
   top: 0px;
   opacity: 0.9;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${({ theme }) => theme.spacing(2)};
   justify-content: center;
   right: 0px;
   background: ${({ theme }) => theme.palette.secondary.light};
   z-index: 1;
`
