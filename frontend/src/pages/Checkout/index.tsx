import {
   Box,
   Button,
   Card,
   Checkbox,
   Collapse,
   Divider,
   FormControl,
   FormHelperText,
   Grid,
   IconButton,
   InputLabel,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   MenuItem,
   Paper,
   Select,
   Skeleton,
   Stack,
   TextField,
   Toolbar,
   Typography,
   useMediaQuery,
} from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LeftAndRight } from '../../anim/Transitions'
import { Stepper } from '../../components/atoms/Stepper'
import StickySubHeader from '../../components/organismes/StickySubHeader'
import { defaultGig } from '../../constants/default'
import { useAppNavigation } from '../../hooks/useAppNavigation'
import { useGigsContext } from '../../hooks/useGigsContext'
import { useOrdersContext } from '../../hooks/useOrdersContext'
import { OrderProps, RequirementProps } from '../../types/types'
import { c2, tokenValueTxt } from '../../utils/formatters'
import CheckIcon from '@mui/icons-material/Check'
import { useProtocolContext } from '../../hooks/useProtocolContext'
import { Icon } from '../../components/atoms/Icon'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { TransitionGroup } from 'react-transition-group'
import { useUsersContext } from '../../hooks/useUsersContext'
import { useWeb3Context } from '../../hooks/useWeb3Context'
const steps = ['Requirements', 'Confirm & Pay']

type BalanceItemProps = {
   title: string
   text: string
   buttonText: string
   onClick: () => void
   target: number
   value: number
}

const BalanceItem = (props: BalanceItemProps) => {
   return (
      <Card
         sx={{
            gap: 2,
            flexDirection: 'column',
            display: 'flex',
            p: 2,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
         }}
         elevation={8}
      >
         <Typography variant="overline">
            {props.title?.toUpperCase()}
         </Typography>
         <Typography
            sx={{
               color:
                  props.value < props.target ? 'error.main' : 'success.main',
               mt: -3,
            }}
            variant="h6"
            fontWeight="bold"
         >
            {props.text}
         </Typography>

         <Button
            onClick={() => props.onClick()}
            size="small"
            disabled={props.value >= props.target}
            variant="contained"
            fullWidth
         >
            {props.buttonText}
         </Button>
      </Card>
   )
}

const Checkout = () => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { gig } = useGigsContext()
   const { order, setOrder } = useOrdersContext()
   const { isAuthenticated, user } = useUsersContext()
   const { balances, getBalance } = useWeb3Context()
   const { calcBuyingPercentFee, calcTotalBuyingPrice, buyerFlatFee } =
      useProtocolContext()
   const { requirements } = gig
   const { goToGig } = useAppNavigation()
   const params = useParams()
   const [checkError, setCheckError] = useState<boolean>(false)
   const handlecheckError = () => setCheckError((curr) => !curr)
   const [step, setStep] = useState<number>(0)

   useEffect(() => {
      alert('b')
      getBalance()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      if (!gig || gig === defaultGig || !isAuthenticated) {
         if (params?.user !== undefined) {
            goToGig(params.user, params.gig)
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.user, params.gig])

   useEffect(() => {
      let brief: any = []
      for (let i = 0; i < requirements?.length; i++) {
         let el = {
            type: requirements[i]?.type,
            question: requirements[i]?.question,
            answers: [],
            files: [],
         }
         brief?.push(el)
      }
      setOrder({ ...order, brief: brief })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [gig?.packages, order.package])

   const onTextChange = (data: string, index: number) => {
      let _brief = order?.brief
      _brief[index].answers[0] = data
      setOrder({ ...order, brief: _brief })
   }

   const onSingleOptionChange = (data: string, index: number) => {
      let _brief = order?.brief
      const elemIndex = _brief[index].answers?.findIndex(
         (c: string) => c === data
      )
      if (elemIndex > -1) {
         _brief[index].answers?.splice(elemIndex, 1)
      } else {
         _brief[index].answers[0] = data
      }
      setOrder({ ...order, brief: _brief })
   }
   const onMultipleOptionChange = (
      data: string,
      index: number,
      dIndex: number
   ) => {
      let _brief = order?.brief

      const elemIndex = _brief[index].answers?.findIndex(
         (c: string) => c === data
      )
      if (elemIndex > -1) {
         _brief[index].answers?.splice(elemIndex, 1)
      } else {
         _brief[index].answers?.push(data)
      }

      console.log(data)
      console.log(_brief)
      setOrder({ ...order, brief: _brief })
   }

   const onAddFile = (file: File, index: number) => {
      if (file !== undefined) {
         let _brief = order?.brief
         _brief[index]?.files?.push(file)
         setOrder({ ...order, brief: _brief })
         console.log(_brief)
      }
   }

   const onRemoveFile = (index: number, bIndex: number) => {
      let _brief = order?.brief
      _brief[index]?.files?.splice(bIndex, 1)
      setOrder({ ...order, brief: _brief })
   }

   const errs = useMemo(() => {
      let errors: boolean[] = []
      const { brief } = order
      for (let i = 0; i < brief?.length; i++) {
         switch (requirements[i]?.type) {
            case 'free-text':
               errors.push(
                  requirements[i]?.required &&
                     (!brief[i]?.answers[0] ||
                        brief[i]?.answers[0]?.length < 10)
               )
               break
            case 'multiple-choice':
               errors.push(
                  requirements[i]?.required && !brief[i]?.answers?.length
               )

               break
            case 'file-attachment':
               errors.push(
                  requirements[i]?.required && !brief[i]?.files?.length
               )
               break
         }
      }
      return errors
   }, [requirements, order])

   const onClickContinue = () => {
      if (!checkError) {
         handlecheckError()
      }
      if (!errs?.includes(true)) {
         setStep(1)
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         })
      }
   }

   const step0 = (
      <>
         {requirements?.map((req: RequirementProps, index: number) => (
            <Card
               key={`req-${index}`}
               sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  border: errs[index] && checkError ? 1 : '',
                  borderColor: errs[index] && checkError ? 'error.main' : '',
               }}
            >
               <Typography>
                  {req?.question}
                  {req?.required ? '*' : ''}
               </Typography>

               {req?.type === 'free-text' && (
                  <TextField
                     fullWidth
                     onChange={(e: any) =>
                        onTextChange(e?.target?.value, index)
                     }
                     value={order?.brief[index]?.answers[0] || ''}
                     multiline
                     minRows={3}
                     placeholder="Type your answer here"
                     variant="filled"
                  />
               )}

               {req?.type === 'multiple-choice' &&
                  req?.data?.map((data: any, dIndex: number) => (
                     <Stack
                        key={`option-${index}-${dIndex}`}
                        direction="row"
                        gap={2}
                        alignItems={'center'}
                     >
                        <Checkbox
                           color="success"
                           checked={order?.brief[index]?.answers?.includes(
                              data
                           )}
                           disabled={
                              !req?.multiple &&
                              order?.brief[index]?.answers?.length &&
                              !order?.brief[index]?.answers?.includes(data)
                           }
                           onChange={() =>
                              req?.multiple
                                 ? onMultipleOptionChange(data, index, dIndex)
                                 : onSingleOptionChange(data, index)
                           }
                        />
                        <Typography>{data}</Typography>
                     </Stack>
                  ))}
               {req?.type === 'file-attachment' && (
                  <>
                     <Button
                        variant="contained"
                        component="label"
                        startIcon={<FileUploadIcon />}
                        onChange={(e: any) =>
                           onAddFile(e?.target?.files[0], index)
                        }
                        disabled={false}
                     >
                        {' '}
                        Add a file
                        <input
                           hidden
                           style={{ width: '100%' }}
                           accept="image/*"
                           type="file"
                        />
                     </Button>
                     <List>
                        <TransitionGroup>
                           {order?.brief[index]?.files?.map(
                              (item: any, bIndex: number) => (
                                 <Collapse key={`elem-${index}-${bIndex}`}>
                                    <ListItem
                                       secondaryAction={
                                          <Collapse in={true}>
                                             <Icon
                                                onClick={() =>
                                                   onRemoveFile(index, bIndex)
                                                }
                                                name="delete"
                                                sizing="small"
                                             />
                                          </Collapse>
                                       }
                                    >
                                       <ListItemIcon>
                                          <Icon
                                             name="file-attachment"
                                             sizing="small"
                                             bgColor="primary.main"
                                          />
                                       </ListItemIcon>
                                       <ListItemText primary={item?.name} />
                                    </ListItem>
                                 </Collapse>
                              )
                           )}
                        </TransitionGroup>
                     </List>
                  </>
               )}
            </Card>
         ))}
      </>
   )

   const step1 = (
      <>
         <Card
            sx={{
               p: 2,
               display: 'flex',
               flexDirection: 'column',
               gap: 2,
            }}
         >
            <Stack direction={'row'} gap={2} alignItems={'center'}>
               <Checkbox color="success" checked={true} />
               <Typography>Cryptocurrency</Typography>
            </Stack>
            <Divider />

            <FormControl fullWidth variant="filled" sx={{ m: 1 }}>
               <InputLabel id="demo-simple-select-filled-label">
                  Paying with wallet:
               </InputLabel>
               <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={user?.evmAddress || ''}
                  onChange={() => {}}
                  disabled
               >
                  <MenuItem value={user?.evmAddress}>
                     {user?.evmAddress}
                  </MenuItem>
               </Select>
            </FormControl>
            <Divider />
            <Grid container spacing={2} columns={12}>
               <Grid xs={12} item sm={12} md={4}>
                  <BalanceItem
                     title="USDC balance"
                     text={'983 USDC'}
                     onClick={() => {}}
                     buttonText={'Mint fake USDC'}
                     value={983}
                     target={1000}
                  />
               </Grid>
               <Grid xs={12} item sm={12} md={4}>
                  <BalanceItem
                     title="current allowance"
                     text={'500 USDC'}
                     onClick={() => {}}
                     buttonText={'Increase USDC allowance'}
                     value={500}
                     target={1500}
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <BalanceItem
                     title="native balance"
                     text={tokenValueTxt(balances?.native, 0, 'MATIC')}
                     onClick={() => {}}
                     buttonText={'Claim test MATIC'}
                     value={1200}
                     target={0.2}
                  />
               </Grid>
            </Grid>
         </Card>
      </>
   )

   return (
      <>
         <LeftAndRight>
            <>
               <Toolbar
                  sx={{
                     background: (theme) => theme.palette.secondary.main,
                  }}
               />

               <Grid container columns={20}>
                  <Grid sm={20} md={15} item sx={{ width: '100%' }}>
                     <StickySubHeader>
                        <Stepper
                           activeStep={step}
                           steps={steps}
                           style={{ width: '100%' }}
                        />
                     </StickySubHeader>
                     <Stack width={isSm ? '100vw' : '100%'} padding={2} gap={2}>
                        {step === 0 && step0}
                        {step === 1 && step1}
                     </Stack>
                  </Grid>
                  <Grid sm={20} md={5} item>
                     <Paper
                        sx={{
                           p: 0,
                           boxShadow: 0,
                           borderLeft: 1,
                           position: 'sticky',
                           alignSelf: 'start',
                           top: 64,
                           borderColor: 'divider',
                           borderRadius: 0,

                           display: 'flex',
                           flexDirection: 'column',
                           height: 'calc(100vh - 64px)',
                           maxHeight: 'calc(100vh - 64px)',
                           overflow: 'scroll',
                        }}
                     >
                        <Toolbar
                           sx={{
                              zIndex: 1000,
                              position: 'sticky',
                              top: 0,
                              borderBottom: 1,
                              borderColor: 'divider',
                              backgroundColor: 'secondary.main',
                           }}
                        >
                           <Icon
                              sizing="small"
                              bgColor="primary.main"
                              name="back"
                              onClick={() => {
                                 if (step === 0 && params?.user) {
                                    goToGig(params.user, params.gig)
                                 } else if (step === 1) {
                                    setStep(0)
                                 }
                              }}
                           />
                           <Typography sx={{ ml: 2 }} fontWeight={'bold'}>
                              Go back to {step === 0 ? 'gig' : 'requirements'}
                           </Typography>
                        </Toolbar>
                        <Stack
                           direction="column"
                           gap={2}
                           padding={2}
                           display="flex"
                           flexDirection="column"
                        >
                           <img
                              loading="lazy"
                              style={{
                                 width: '100%',
                                 borderRadius: '8px',
                              }}
                              src={gig?.imgs[0]}
                              alt="img-gig"
                           />
                           <Typography>{gig?.title}</Typography>
                           <Divider />
                           <Stack
                              direction={'row'}
                              justifyContent="space-between"
                              alignItems="center"
                              width="100%"
                           >
                              <Typography fontWeight="bold">
                                 {gig?.packages[order?.package]?.name}{' '}
                                 {order?.qty > 1 ? `x${order?.qty}` : ''}
                              </Typography>
                              <Typography>
                                 {c2.format(
                                    gig?.packages[order?.package]?.price *
                                       order?.qty
                                 )}
                              </Typography>
                           </Stack>
                           <List>
                              {gig?.packages[order?.package]?.includes?.map(
                                 (inc: any, index: number) => (
                                    <ListItem
                                       disableGutters
                                       disablePadding
                                       key={`listitem-${index}`}
                                    >
                                       <ListItemIcon>
                                          <CheckIcon color="success" />
                                       </ListItemIcon>
                                       <ListItemText
                                          sx={{ ml: -2 }}
                                          primaryTypographyProps={{
                                             variant: 'body1',
                                             fontSize: '0.8rem',
                                          }}
                                          primary={inc?.name}
                                       />
                                    </ListItem>
                                 )
                              )}
                           </List>
                           <Divider />{' '}
                           <Collapse in={step === 1} unmountOnExit>
                              <Stack gap={1}>
                                 <Stack
                                    direction={'row'}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    width="100%"
                                 >
                                    <Typography>Percentage fee</Typography>
                                    <Typography>
                                       {c2.format(
                                          calcBuyingPercentFee(
                                             gig?.packages[order?.package]
                                                ?.price * order?.qty
                                          )
                                       )}
                                    </Typography>
                                 </Stack>{' '}
                                 <Stack
                                    direction={'row'}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    width="100%"
                                 >
                                    <Typography>Flat fee</Typography>
                                    <Typography>
                                       {c2.format(buyerFlatFee)}
                                    </Typography>
                                 </Stack>
                              </Stack>
                              <Divider sx={{ my: 2 }} />
                              <Stack gap={1}>
                                 <Stack
                                    direction={'row'}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    width="100%"
                                 >
                                    <Typography fontWeight="bold" variant="h6">
                                       Total
                                    </Typography>
                                    <Typography>
                                       {c2.format(
                                          calcTotalBuyingPrice(
                                             gig?.packages[order?.package]
                                                ?.price * order?.qty
                                          )
                                       )}
                                    </Typography>
                                 </Stack>

                                 <Stack
                                    direction={'row'}
                                    justifyContent="space-between"
                                    alignItems="center"
                                    width="100%"
                                 >
                                    <Typography>Total delivery time</Typography>
                                    <Typography>
                                       {gig?.packages[order?.package]?.delivery}{' '}
                                       day(s)
                                    </Typography>
                                 </Stack>
                              </Stack>
                           </Collapse>
                        </Stack>
                        <Toolbar
                           sx={{
                              zIndex: 1000,
                              position: 'sticky',
                              bottom: 0,
                              borderTop: 1,
                              p: 2,
                              borderColor: 'divider',
                              backgroundColor: 'secondary.main',
                           }}
                        >
                           <Stack width={'100%'} sx={{ my: 2 }}>
                              <Button
                                 variant="contained"
                                 fullWidth
                                 onClick={() => {
                                    onClickContinue()
                                 }}
                              >
                                 {step === 0
                                    ? 'Continue'
                                    : `Pay (${c2.format(
                                         calcTotalBuyingPrice(
                                            gig?.packages[order?.package]
                                               ?.price * order?.qty
                                         )
                                      )})`}
                              </Button>
                              <Typography textAlign="center" variant="caption">
                                 You won't be charged yet
                              </Typography>
                              {step === 0 &&
                                 errs?.includes(true) &&
                                 checkError && (
                                    <FormHelperText
                                       sx={{
                                          color: 'error.main',
                                          width: '100%',
                                          textAlign: 'center',
                                       }}
                                    >
                                       Please fill all the requirements
                                    </FormHelperText>
                                 )}
                           </Stack>
                        </Toolbar>
                     </Paper>
                  </Grid>
               </Grid>
            </>
         </LeftAndRight>
      </>
   )
}

export default Checkout
