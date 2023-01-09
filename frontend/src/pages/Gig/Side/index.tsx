import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { PackageProps } from '../../../types/types'
import { c2, getPackType } from '../../../utils/formatters'
import {
   Button,
   Card,
   CardContent,
   Checkbox,
   Collapse,
   Divider,
   Fade,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Skeleton,
   Stack,
   styled,
   Toolbar,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Icon, IconProps } from '../../../components/atoms/Icon'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { useOrdersContext } from '../../../hooks/useOrdersContext'
import { useUsersContext } from '../../../hooks/useUsersContext'
import { useWeb3Context } from '../../../hooks/useWeb3Context'

function tabTitle(index: number) {
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

interface TabPanelProps {
   children?: React.ReactNode
   index: number
   value: number
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

interface ItemProps {
   label: string
   checked?: boolean
   iconProps?: IconProps
}

function formatIncludes(packages: any) {
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
}

function isChecked(data: string, includes: any) {
   let el = includes?.find((e: any) => e?.name === data)
   if (el) return true
   return false
}

const Item = ({ label, iconProps, checked }: ItemProps) => (
   <ListItem disableGutters>
      <ListItemIcon>
         {checked !== undefined ? (
            <Checkbox checked={checked} color="success" readOnly />
         ) : (
            <Icon
               name={iconProps?.name || 'check'}
               sizing={iconProps?.sizing || 'small'}
               iconColor={iconProps?.iconColor || 'primary.light'}
            />
         )}
      </ListItemIcon>
      <ListItemText primary={label} />
   </ListItem>
)

Item.defaultProps = {
   label: '',
   iconProps: {
      name: 'time',
      sizing: 'small',
      iconColor: 'primary.light',
   },
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}
const StickyCard = styled(Box)(({ theme }) => ({
   alignSelf: 'start',
   borderRadius: 0,
   position: 'sticky',
   width: '100%',
   top: '64px',
   right: 0,
   overflow: 'scroll',
}))

export default function GigSide() {
   const [value, setValue] = React.useState<number>(0)
   const [isConfirm, setIsConfirm] = React.useState<boolean>(false)
   const [selected, setSelected] = React.useState<number>(0)
   const [qty, setQty] = React.useState<number>(1)
   const { isAuthenticated } = useUsersContext()
   const { login } = useWeb3Context()

   const incrQty = () => setQty((curr) => curr + 1)
   const decrQty = () => setQty((curr) => (curr === 1 ? 1 : curr - 1))
   const { gig } = useGigsContext()
   const { setOrder, order } = useOrdersContext()

   const { goToGigCheckout } = useAppNavigation()
   const { packages } = gig
   const [open, setOpen] = React.useState(false)
   const handleOpen = () => setOpen((curr) => !curr)

   const handleIsConfirm = () => setIsConfirm((curr) => !curr)
   const handleSelected = (num: number) => setSelected(num)

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
   }

   const onClickContinue = (num: number) => {
      handleIsConfirm()
      handleSelected(num)
   }

   const onClickContinue2 = () => {
      if (!isAuthenticated) login()
      else {
         setOrder({ ...order, qty: qty, package: selected })
         goToGigCheckout(gig?.seller?.evmAddress, gig?.metadataHash)
      }
   }

   const packs = (
      <>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
               variant="fullWidth"
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
               sx={{
                  minHeight: '64px',
                  '& .MuiTabs-indicator': {
                     height: '100%',
                     color: 'white',
                     backgroundImage: (theme) => theme.palette.primary.main,
                     borderRadius: '8px',
                     zIndex: 0,
                  },
                  '& .MuiTabs-flexContainer': {
                     height: '100%',
                  },

                  '& .MuiTab-root.Mui-selected': {
                     transition: '0.2s ease-in-out',
                     color: 'white',
                     zIndex: 1,
                  },

                  height: '100%',
               }}
            >
               {packages?.map((pack: PackageProps, index: number) => (
                  <Tab
                     sx={{ zIndex: 1 }}
                     key={`tab-${index}`}
                     label={tabTitle(index)}
                     {...a11yProps(index)}
                  />
               ))}
            </Tabs>
         </Box>
         {packages?.map((pack: PackageProps, index: number) => (
            <TabPanel value={value} index={index} key={`tab-panel-${index}`}>
               <Typography variant="h4" fontWeight="bold">
                  {c2.format(pack?.price)}
               </Typography>
               <Typography variant="overline">{pack?.name}</Typography>
               <Typography variant="body1">{pack?.deliverable}</Typography>
               <Stack direction="row">
                  <Item label={`${pack?.delivery} day(s)`} />
                  <Item
                     label={`${pack?.revision} revision(s)`}
                     iconProps={{ name: 'retry' }}
                  />
               </Stack>
               <List>
                  {formatIncludes(packages).map((inc, indexInc: number) => (
                     <Item
                        checked={isChecked(inc, pack?.includes)}
                        key={`includes-${index}-${indexInc}`}
                        label={inc || ''}
                     />
                  ))}
               </List>
               <Button
                  fullWidth
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={() => onClickContinue(index)}
               >
                  CONTINUE
               </Button>
               <Button fullWidth variant="text">
                  SEE PACKAGES
               </Button>
               <Divider />
            </TabPanel>
         ))}
         <Box flexGrow={1} flexDirection="column" display="flex" />
      </>
   )

   const skels = [4, 2, 4, 2, 1.5, 1.5, 1.5, 1.5]

   return (
      <StickyCard sx={{ width: '100%' }}>
         {!packages?.length && (
            <Box sx={{ width: '100%', p: 2 }}>
               {skels?.map((el: number, index: number) => (
                  <Skeleton
                     key={`skel-${index}`}
                     sx={{ width: '100%' }}
                     height={`${el}rem`}
                  />
               ))}
            </Box>
         )}
         <Fade
            in={!isConfirm && packages?.length}
            unmountOnExit
            {...(isConfirm ? {} : { timeout: 500 })}
         >
            <Box>{packs}</Box>
         </Fade>
         <Fade
            in={isConfirm}
            unmountOnExit
            {...(isConfirm ? { timeout: 1000 } : {})}
         >
            <Box
               sx={{
                  width: '100%',
                  position: 'relative',
                  maxHeight: 'calc(100vh - 64px)',
               }}
               padding={0}
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
                     onClick={handleIsConfirm}
                  />
                  <Typography sx={{ ml: 2 }} fontWeight={'bold'}>
                     Order options
                  </Typography>
               </Toolbar>
               <Box padding={2}>
                  <Card
                     variant="outlined"
                     sx={{
                        border: 2,
                        p: 2,
                        gap: 2,
                        borderColor: 'primary.main',
                     }}
                  >
                     <Stack
                        direction="row"
                        justifyContent="space-between"
                        width="100%"
                     >
                        <Typography variant={'h6'}>
                           {getPackType(selected)} {qty > 1 && `(x${qty})`}
                        </Typography>
                        <Typography>
                           {c2.format(packages[selected]?.price * qty)}
                        </Typography>
                     </Stack>
                     <Typography paragraph>
                        <strong>{packages[selected]?.name}</strong> |{' '}
                        {packages[selected]?.deliverable}
                     </Typography>
                  </Card>
                  <Divider sx={{ my: 2 }} />
                  <Card
                     sx={{
                        background: (theme) => theme?.palette?.secondary?.light,
                        p: 2,
                        gap: 2,
                     }}
                  >
                     <Typography variant="h3" fontWeight="bold">
                        {c2.format(packages[selected]?.price * qty)}
                     </Typography>
                     <Typography variant="overline" fontWeight="bold">
                        Single order {qty > 1 && `(x${qty})`}
                     </Typography>
                     <Divider sx={{ my: 2 }} />
                     <List>
                        <ListItemButton onClick={handleOpen}>
                           <ListItemIcon>
                              <Icon
                                 sizing="small"
                                 name="package"
                                 iconColor="primary.main"
                              />
                           </ListItemIcon>
                           <ListItemText
                              primary={`${getPackType(selected)} package${
                                 qty > 1 ? ` (x${qty})` : ''
                              }`}
                           />
                           {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                           <List component="div" disablePadding>
                              {packages[selected]?.includes?.map(
                                 (el: any, _i: number) => (
                                    <ListItemButton
                                       key={`list-includes-${_i}`}
                                       sx={{ pl: 4 }}
                                    >
                                       <ListItemText primary={el?.name} />
                                    </ListItemButton>
                                 )
                              )}
                           </List>
                        </Collapse>
                        <ListItem>
                           <ListItemIcon>
                              <Icon
                                 sizing="small"
                                 name="time"
                                 iconColor="primary.main"
                              />
                           </ListItemIcon>
                           <ListItemText
                              primary={`${packages[selected]?.delivery}-day delivery`}
                           />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon>
                              <Icon
                                 sizing="small"
                                 name="retry"
                                 iconColor="primary.main"
                              />
                           </ListItemIcon>
                           <ListItemText
                              primary={`${packages[selected]?.delivery} revision(s)`}
                           />
                        </ListItem>
                     </List>
                     <Divider sx={{ my: 2 }} />
                     <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width={'100%'}
                     >
                        <Typography>Gig Quantity</Typography>
                        <Stack direction={'row'} gap={2} alignItems={'center'}>
                           <Icon name="remove" onClick={decrQty} />
                           <Typography>{qty}</Typography>
                           <Icon name="add" onClick={incrQty} />
                        </Stack>
                     </Stack>
                  </Card>
               </Box>
               <Toolbar
                  sx={{
                     zIndex: 1000,
                     position: 'sticky',
                     bottom: 0,
                     borderTop: 1,
                     borderColor: 'divider',
                     backgroundColor: 'secondary.main',
                  }}
               >
                  <Stack width={'100%'} sx={{ my: 2 }}>
                     <Button
                        variant="contained"
                        fullWidth
                        onClick={onClickContinue2}
                     >
                        {isAuthenticated
                           ? ` Continue (${c2.format(
                                packages[selected]?.price * qty
                             )})`
                           : 'Connect'}
                     </Button>
                     {isAuthenticated && (
                        <Typography textAlign="center" variant="caption">
                           You won't be charged yet
                        </Typography>
                     )}
                  </Stack>
               </Toolbar>
            </Box>
         </Fade>
      </StickyCard>
   )
}
