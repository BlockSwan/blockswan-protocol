import {
   Divider,
   Stack,
   TableContainer,
   Typography,
   Paper,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
   styled,
   Checkbox,
   Button,
} from '@mui/material'
import { useMemo } from 'react'
import { StyledTableCell } from '../../../components/molecules/PackageTable'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { BoooleanDeliverablesProps, PackageProps } from '../../../types/types'
import { c2 } from '../../../utils/formatters'

function getPackType(index: number) {
   switch (index) {
      case 0:
         return 'Basic'
      case 1:
         return 'Standard'
      case 2:
         return 'Premium'
      default:
         return 'Basic'
   }
}

const GigPacks = () => {
   const { gig } = useGigsContext()
   const { packages } = gig

   const includes = useMemo(() => {
      let arr: string[] = []
      for (let i = 0; i < packages?.length; i++) {
         const { includes } = packages[i]
         for (let j = 0; j < includes?.length; j++) {
            const { name } = includes[j]
            if (!arr?.includes(name)) {
               arr?.push(name)
            }
         }
      }
      return arr
   }, [packages])

   function isChecked(data: string, index: number) {
      let el = packages[index]?.includes?.find((e: any) => e?.name === data)
      if (el) return true
      return false
   }

   return (
      <Stack gap={2}>
         <Divider />
         <Typography variant="h5" fontWeight="bold">
            Compare packages
         </Typography>
         <TableContainer variant="outlined" elevation={2} component={Paper}>
            <Table aria-label="gig-packages">
               <TableHead>
                  <TableRow>
                     <StyledTableCell
                        background="secondary.main"
                        isRight={true}
                     >
                        <Typography variant="overline">Offer</Typography>
                     </StyledTableCell>
                     {gig?.packages?.map(
                        (pack: PackageProps, index: number) => (
                           <StyledTableCell
                              background="secondary.main"
                              isRight={index !== gig?.packages?.length - 1}
                              key={`th-${index}`}
                           >
                              <Typography>{c2.format(pack?.price)}</Typography>
                              <Typography fontWeight="bold" variant="h6">
                                 {getPackType(index)}
                              </Typography>
                              <Typography variant="overline" fontWeight="bold">
                                 {pack?.name}
                              </Typography>
                              <Typography>{pack?.deliverable}</Typography>
                           </StyledTableCell>
                        )
                     )}
                  </TableRow>
               </TableHead>

               <TableBody>
                  {includes?.map((del: any, index: number) => (
                     <TableRow key={`td-booldel-${index}`}>
                        <StyledTableCell
                           background={'secondary.main'}
                           isRight={true}
                           isBottom={true}
                           sx={{ maxWidth: '160px' }}
                        >
                           <Typography lineHeight={0.2} variant="overline">
                              {del}
                           </Typography>
                        </StyledTableCell>
                        {gig?.packages?.map((pack: any, packIndex: number) => (
                           <StyledTableCell
                              background={'secondary.main'}
                              isRight={packIndex !== gig?.packages?.length - 1}
                              isBottom={true}
                              sx={{
                                 justifyContent: 'center',
                                 alignItems: 'center',
                              }}
                           >
                              <Checkbox
                                 sx={{ position: 'relative', margin: 'auto' }}
                                 color="success"
                                 readOnly
                                 checked={isChecked(del, packIndex)}
                              />
                           </StyledTableCell>
                        ))}
                     </TableRow>
                  ))}
                  <TableRow>
                     <StyledTableCell
                        background={'secondary.main'}
                        isRight={true}
                        isBottom={true}
                        sx={{ maxWidth: '160px' }}
                     >
                        <Typography lineHeight={0.2} variant="overline">
                           Revisions
                        </Typography>
                     </StyledTableCell>
                     {gig?.packages?.map((pack: any, packIndex: number) => (
                        <StyledTableCell
                           background={'secondary.main'}
                           isRight={packIndex !== gig?.packages?.length - 1}
                           isBottom={true}
                           sx={{
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                        >
                           <Typography>{pack?.revision}</Typography>
                        </StyledTableCell>
                     ))}
                  </TableRow>
                  <TableRow>
                     <StyledTableCell
                        background={'secondary.main'}
                        isRight={true}
                        isBottom={true}
                        sx={{ maxWidth: '160px' }}
                     >
                        <Typography lineHeight={0.2} variant="overline">
                           Time delivery
                        </Typography>
                     </StyledTableCell>
                     {gig?.packages?.map((pack: any, packIndex: number) => (
                        <StyledTableCell
                           background={'secondary.main'}
                           isRight={packIndex !== gig?.packages?.length - 1}
                           isBottom={true}
                           sx={{
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                        >
                           <Typography>{pack?.delivery} day(s)</Typography>
                        </StyledTableCell>
                     ))}
                  </TableRow>
                  <TableRow>
                     <StyledTableCell
                        background={'secondary.main'}
                        isRight={true}
                        isBottom={true}
                        sx={{ maxWidth: '160px' }}
                     >
                        <Typography lineHeight={0.2} variant="overline">
                           TOTAL
                        </Typography>
                     </StyledTableCell>
                     {gig?.packages?.map((pack: any, packIndex: number) => (
                        <StyledTableCell
                           background={'secondary.main'}
                           isRight={packIndex !== gig?.packages?.length - 1}
                           isBottom={true}
                           sx={{
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                        >
                           <Stack width="100%" gap={2}>
                              <Typography
                                 variant="subtitle1"
                                 textAlign="center"
                              >
                                 {c2.format(pack?.price)}
                              </Typography>
                              <Button variant="contained">Select</Button>
                           </Stack>
                        </StyledTableCell>
                     ))}
                  </TableRow>
               </TableBody>
            </Table>
         </TableContainer>
      </Stack>
   )
}

export default GigPacks
