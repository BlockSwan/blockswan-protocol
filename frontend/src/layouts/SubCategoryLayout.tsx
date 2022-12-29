import {
   Box,
   Stack,
   Toolbar,
   Typography,
   useMediaQuery,
   Paper,
   Grid,
   Divider,
   ListItemButton,
   List,
   ListItem,
   ListItemText,
   Switch,
   Collapse,
   Pagination,
   Select,
   Card,
   Zoom,
   Grow,
   Button,
} from '@mui/material'
import {
   Suspense,
   useEffect,
   useMemo,
   useState,
} from 'react'
import { useParams } from 'react-router-dom'
import { AnimatedBanner } from '../components/molecules/AnimatedBanner'
import GigCard from '../components/molecules/GigCard'
import PriceSlider from '../components/molecules/PriceSlider'
import { useCategoriesContext } from '../hooks/useCategoriesContext'
import { SubCategoryProps } from '../types/types'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Filter from '../components/molecules/Filter'
import { Icon } from '../components/atoms/Icon'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import DateRangeIcon from '@mui/icons-material/DateRange'
import GradeIcon from '@mui/icons-material/Grade'
import GigService from '../services/GigService'
import BouncingLoader from '../components/atoms/BouncingLoader'
export const SubCategoryLayout = () => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { categories, getCategoryFromURL } =
      useCategoriesContext()
   const params = useParams()
   const { category, subcategory } = params
   const [data, setData] = useState<any>(undefined)

   const selectedSubCategory: SubCategoryProps =
      useMemo(() => {
         let cat = getCategoryFromURL(category, categories)
         console.log(cat)
         let subCat = cat?.subCategories?.find(
            (c: SubCategoryProps) => c?.url === subcategory
         )
         return subCat
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [category, subcategory, categories?.message])

   const displayedGigs = useMemo(() => {
      let el = categories?.gigs?.find(
         (e: any) => e?.subcategoryName === subcategory
      )
      console.log(el?.gigs)
      return el?.gigs || []
   }, [subcategory, categories?.gigs])

   const [checked, setChecked] = useState<any[]>([])

   const [filter, setFilter] = useState<string>(
      'packages.price,asc'
   )

   const [dirty, setDirty] = useState<boolean>(false)
   const [priceRange, setPriceRange] = useState<number[]>([
      0, 1000000000000,
   ])

   const handleToggle =
      (name: string, value: string) => () => {
         const current = checked.find(
            (c) => c?.name === name
         )
         const currentIndex = checked.indexOf(current)
         const newChecked = [...checked]
         if (currentIndex === -1) {
            newChecked.push({ name: name, data: [value] })
         } else {
            const currentDataIndex =
               checked[currentIndex]?.data?.indexOf(value)
            const newData = [...checked[currentIndex]?.data]
            if (currentDataIndex === -1) {
               newData?.push(value)
            } else {
               newData.splice(currentDataIndex, 1)
            }
            newChecked[currentIndex].data = newData
         }
         setChecked(newChecked)
      }
   const [open, setOpen] = useState<string[]>([])

   const handleClick = (value: string) => () => {
      const currentOpen = open.indexOf(value)
      const newOpen = [...open]
      if (currentOpen === -1) {
         newOpen.push(value)
      } else {
         newOpen.splice(currentOpen, 1)
      }
      setOpen(newOpen)
   }

   function isChecked(title: string, data: string) {
      let el = checked?.find((e) => e?.name === title)
      return el?.data?.includes(data)
   }
   const [isLoading, setIsLoading] = useState<boolean>(true)

   function fetchGigs({
      pRange,
      _sort,
      _page,
   }: {
      pRange: number[] | null
      _sort?: string | null
      _page?: number | null
   }) {
      if (selectedSubCategory !== undefined) {
         setIsLoading(true)
         let sort = _sort?.split(',') || filter?.split(',')
         alert('fetching')
         GigService.perSubCategory(
            selectedSubCategory._id,
            _page || data?.page || 1,
            sort[0],
            sort[1],
            [],
            pRange
         ).then((data) => {
            setIsLoading(false)
            setData(data)
            console.log(data)
         })
      }
   }

   const onClickConfirm = () => {
      setDirty(false)
      fetchGigs({ pRange: priceRange, _page: 1 })
   }

   const onPageChange = (newPage: number) => {
      setData({ ...data, page: newPage })
      fetchGigs({ _page: newPage, pRange: priceRange })
   }

   useEffect(() => {
      fetchGigs({
         pRange: [0, 1000000000000000000],
         _page: 1,
      })

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const pagination = (
      <Pagination
         count={Math.ceil(data?.total / data?.perPage) || 0}
         shape="rounded"
         onChange={(_e, value) => onPageChange(value)}
         page={data?.page || 0}
      />
   )

   const sortList = [
      {
         value: 'packages.price,asc',
         icon: <PriceChangeIcon />,
         text: 'Price: Low to High',
      },
      {
         value: 'packages.price,des',
         icon: <PriceChangeIcon />,
         text: 'Price: High to Low',
      },

      {
         value: 'createdAt,des',
         icon: <DateRangeIcon />,
         text: 'Date: Newest to Oldest',
      },
      {
         value: 'createdAt,asc',
         icon: <DateRangeIcon />,
         text: 'Date: Oldest to Newest',
      },
   ]

   function getTextFromValue(value: string): string {
      return (
         sortList?.find((e) => e?.value === value)?.text ||
         ''
      )
   }

   const banner = useMemo(
      () => (
         <AnimatedBanner
            zIndex={0}
            width={isSm ? '100%' : 'calc(100vw - 270px)'}
            minHeight={isSm ? '250px' : '200px'}
            paddingY={2}
            top={0}
            position={'fixed'}
            display="flex"
            justifyContent="center"
            alignItems={'center'}
            alignContent="center"
         >
            <Stack
               direction="column"
               spacing={2}
               justifyContent="center"
               alignItems={'center'}
               display={'flex'}
               mt={10}
            >
               <Typography
                  sx={{ mb: 0 }}
                  textAlign="center"
                  fontWeight={'bold'}
                  variant="h4"
                  textTransform={'uppercase'}
                  gutterBottom
               >
                  {selectedSubCategory?.name}
               </Typography>
               <Typography
                  fontWeight={900}
                  variant="h6"
                  gutterBottom
               >
                  {selectedSubCategory?.description}
               </Typography>
            </Stack>
         </AnimatedBanner>
      ),
      [
         isSm,
         selectedSubCategory?.description,
         selectedSubCategory?.name,
      ]
   )

   return (
      <>
         <Toolbar />

         <Box
            height={isSm ? '200px' : '150px'}
            bgcolor="secondary.main"
         >
            {banner}
         </Box>

         <Box
            position="relative"
            zIndex={10}
            bgcolor="secondary.light"
            borderTop={'1px solid'}
            borderColor={'divider'}
            boxShadow={5}
         >
            <Grid container columns={20}>
               <Grid
                  md={6}
                  sm={20}
                  position="relative"
                  width="100%"
               >
                  <Paper
                     elevation={1}
                     sx={{
                        borderRadius: 0,
                        height: '100%',
                        borderRight: (theme) =>
                           `1px solid ${theme.palette.divider}`,

                        width: '100%',
                     }}
                  >
                     <Box
                        height={'fit-content'}
                        overflow="scroll"
                     >
                        <Box display={'flex'}>
                           <Paper
                              style={{
                                 width: '100%',
                                 gap: 2,
                              }}
                           >
                              <Collapse
                                 in={dirty}
                                 unmountOnExit
                              >
                                 <Box>
                                    <Stack
                                       direction={'row'}
                                    >
                                       <Button
                                          color="error"
                                          sx={{
                                             borderRadius: 0,
                                             height: '100%',
                                             width: '30%',
                                          }}
                                          variant="contained"
                                       >
                                          RESET
                                       </Button>
                                       <Button
                                          sx={{
                                             borderRadius: 0,
                                             height: '100%',
                                             width: '70%',
                                             color: 'white',
                                          }}
                                          onClick={
                                             onClickConfirm
                                          }
                                          color="success"
                                          variant="contained"
                                       >
                                          Apply filter
                                       </Button>
                                    </Stack>
                                    <Divider />
                                 </Box>
                              </Collapse>

                              <Box padding={2} gap={2}>
                                 <Typography
                                    fontWeight={'bold'}
                                 >
                                    Price Range
                                 </Typography>
                                 <PriceSlider
                                    value={priceRange}
                                    min={data?.lowestPrice}
                                    max={data?.highestPrice}
                                    onChange={(
                                       newValues: number[]
                                    ) => {
                                       setPriceRange(
                                          newValues
                                       )
                                       setDirty(true)
                                    }}
                                 />
                              </Box>
                              <Divider />
                              {selectedSubCategory?.selectableDeliverables?.map(
                                 (del, index: number) => (
                                    <List
                                       key={`deliverable-${del?.name}-${index}`}
                                    >
                                       <ListItemButton>
                                          <ListItemText
                                             sx={{
                                                fontWeight:
                                                   'bold',
                                             }}
                                             primary={
                                                <Typography
                                                   fontWeight={
                                                      'bold'
                                                   }
                                                >
                                                   {
                                                      del?.name
                                                   }
                                                </Typography>
                                             }
                                             onClick={handleClick(
                                                del?.name
                                             )}
                                          />{' '}
                                          {open?.includes(
                                             del?.name
                                          ) ? (
                                             <ExpandLess />
                                          ) : (
                                             <ExpandMore />
                                          )}
                                       </ListItemButton>
                                       <Collapse
                                          in={open?.includes(
                                             del?.name
                                          )}
                                          timeout="auto"
                                          unmountOnExit
                                       >
                                          <List
                                             disablePadding
                                             sx={{
                                                width: '100%',

                                                bgcolor:
                                                   'background.paper',
                                             }}
                                          >
                                             {del?.data?.map(
                                                (
                                                   data: any,
                                                   dIndex: number
                                                ) => (
                                                   <ListItem
                                                      key={`metadata-${data?.name}-${dIndex}`}
                                                   >
                                                      <ListItemText
                                                         id={`switch-list-label-${data?.name}`}
                                                         primary={
                                                            data?.name
                                                         }
                                                      />
                                                      <Switch
                                                         color="success"
                                                         edge="end"
                                                         onChange={handleToggle(
                                                            del?.name,
                                                            data?.name
                                                         )}
                                                         checked={isChecked(
                                                            del?.name,
                                                            data?.name
                                                         )}
                                                         inputProps={{
                                                            'aria-labelledby': `switch-list-label-${data?.name}`,
                                                         }}
                                                      />
                                                   </ListItem>
                                                )
                                             )}
                                          </List>
                                       </Collapse>

                                       <Divider />
                                    </List>
                                 )
                              )}
                              <List>
                                 <ListItemButton>
                                    <ListItemText
                                       sx={{
                                          fontWeight:
                                             'bold',
                                       }}
                                       primary={
                                          <Typography
                                             fontWeight={
                                                'bold'
                                             }
                                          >
                                             Included
                                          </Typography>
                                       }
                                       onClick={handleClick(
                                          'Included'
                                       )}
                                    />{' '}
                                    {open?.includes(
                                       'Included'
                                    ) ? (
                                       <ExpandLess />
                                    ) : (
                                       <ExpandMore />
                                    )}
                                 </ListItemButton>
                                 <Collapse
                                    in={open?.includes(
                                       'Included'
                                    )}
                                    timeout="auto"
                                    unmountOnExit
                                 >
                                    <List>
                                       {selectedSubCategory?.booleanDeliverables.map(
                                          (
                                             data: any,
                                             dIndex: number
                                          ) => (
                                             <ListItem
                                                key={`boolean-metadata-${data?.name}-${dIndex}`}
                                             >
                                                <ListItemText
                                                   id={`switch-list-label-${data?.name}`}
                                                   primary={
                                                      data?.name
                                                   }
                                                />
                                                <Switch
                                                   color="success"
                                                   edge="end"
                                                   onChange={handleToggle(
                                                      'Includes',
                                                      data?.name
                                                   )}
                                                   checked={isChecked(
                                                      'Includes',
                                                      data?.name
                                                   )}
                                                   inputProps={{
                                                      'aria-labelledby': `switch-list-label-${data?.name}`,
                                                   }}
                                                />
                                             </ListItem>
                                          )
                                       )}
                                    </List>
                                 </Collapse>
                              </List>
                              <Divider />

                              <Stack
                                 direction="column"
                                 width={'100%'}
                                 sx={{ p: 2, gap: 2 }}
                              >
                                 <Typography fontWeight="bold">
                                    Delivered in minimum
                                 </Typography>
                                 <Select variant="filled" />
                              </Stack>
                              <Divider />
                              <Stack
                                 direction="column"
                                 width={'100%'}
                                 sx={{ p: 2, gap: 2 }}
                              >
                                 <Typography fontWeight="bold">
                                    Number of revisions
                                    miniumum
                                 </Typography>
                                 <Select variant="filled" />
                              </Stack>
                           </Paper>
                        </Box>
                     </Box>
                  </Paper>
               </Grid>
               <Grid
                  md={14}
                  sm={20}
                  width="100%"
                  rowSpacing={2}
                  columnSpacing={2}
               >
                  <Toolbar>
                     {pagination}
                     <Box flexGrow={1} />
                     <Stack
                        direction={'row'}
                        gap={1}
                        alignItems={'end'}
                     >
                        <Typography>
                           Sort by{' '}
                           <strong>
                              {getTextFromValue(filter)}
                           </strong>
                        </Typography>
                        <Filter
                           selected={filter}
                           onMenuClick={(value: string) =>
                              setFilter(value)
                           }
                           list={sortList}
                        />
                     </Stack>
                  </Toolbar>
                  <Grid
                     container
                     rowSpacing={1}
                     columnSpacing={1}
                     columns={12}
                     sx={{ p: 2, pt: 0 }}
                  >
                     {!isLoading ? (
                        data?.gigs?.map(
                           (gig: any, index: number) => (
                              <Zoom
                                 style={{
                                    transitionDelay: `${
                                       index * 100
                                    }ms`,
                                 }}
                                 in={!isLoading}
                                 unmountOnExit
                                 key={gig?._id}
                              >
                                 <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    sm={6}
                                    display="flex"
                                 >
                                    {' '}
                                    <GigCard
                                       avatarSrc={
                                          gig?.seller
                                             ?.defaultProfileImg
                                       }
                                       username={
                                          gig?.seller
                                             ?.username
                                       }
                                       price={
                                          gig?.packages[0]
                                             ?.price
                                       }
                                       date={
                                          new Date(
                                             gig?.createdAt
                                          )
                                       }
                                       title={gig?.title}
                                       imgSrc={gig?.imgs[0]}
                                    />{' '}
                                 </Grid>
                              </Zoom>
                           )
                        )
                     ) : (
                        <Box
                           sx={{
                              display: 'flex',
                              width: '100%',
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                        >
                           <BouncingLoader />
                        </Box>
                     )}

                     {data?.gigs?.length === 0 && (
                        <Card
                           sx={{
                              width: '100%',
                              minHeight: '300px',
                              display: 'flex',
                              aligmItems: 'center',
                              justifyContent: 'center',
                              p: 2,
                           }}
                        >
                           <Stack
                              direction={'column'}
                              justifyContent="center"
                              alignItems={'center'}
                              gap={2}
                           >
                              <Icon
                                 sizing="medium"
                                 name="add"
                              />
                              <Typography
                                 textAlign={'center'}
                                 maxWidth={450}
                              >
                                 We're sorry, but there are
                                 no gigs matching your
                                 search criteria. Please try
                                 adjusting your filters or
                                 search terms and try again.
                              </Typography>
                           </Stack>
                        </Card>
                     )}
                  </Grid>
               </Grid>
            </Grid>
         </Box>
      </>
   )
}
