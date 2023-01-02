import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
   Avatar,
   CardActionArea,
   CardHeader,
   Collapse,
   Divider,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Stack,
} from '@mui/material'
import { Box } from '@mui/system'
import { formatDate } from '../../utils/formatters'
import { Icon } from '../atoms/Icon'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
const url =
   'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Round-Up-Featured-Image.jpg'

const getIcon = (elem: string) => {
   switch (elem) {
      case 'Pause':
         return <PauseCircleIcon className="icon-menu" />
      case 'Edit':
         return <ModeEditIcon className="icon-menu" />
      case 'Delete':
         return <DeleteForeverIcon className="icon-menu" />
      case 'Activate':
         return <PlayCircleFilledWhiteIcon className="icon-menu" />
      default:
         return null
   }
}

interface GigCardProps {
   imgSrc?: string | undefined
   avatarSrc?: string
   username?: string
   title?: string
   price?: number
   onClick: Function
   date?: Date
   isUser?: boolean
   isPaused?: boolean
   onEdit: () => void
   onDelete: () => void
   onActivate: () => void
   onPause: () => void
   isNew: boolean
   onClickNew: () => void
}

GigCard.defaultProps = {
   imgSrc:
      'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Round-Up-Featured-Image.jpg',
   avatarSrc:
      'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Round-Up-Featured-Image.jpg',
   username: 'ANON',
   title: '',
   price: 0,
   isUser: false,
   isPaused: false,
   onEdit: () => {},
   onDelete: () => {},
   onActivate: () => {},
   onPause: () => {},
   isNew: false,
   onClickNew: () => {},
   onClick: () => {},
}

export default function GigCard(props: GigCardProps) {
   const now: any = Date.now()
   const [isEditing, setIsEditing] = React.useState<boolean>(false)

   const handleIsEditing = () => setIsEditing((curr) => !curr)

   let menus = React.useMemo(() => {
      let menu: any

      switch (props?.isPaused) {
         case true:
            menu = ['Edit', 'Activate', 'Delete']
            break
         default:
            menu = ['Edit', 'Pause', 'Delete']
            break
      }

      return menu
   }, [props?.isPaused])

   function handleOption(elem: string) {
      switch (elem) {
         case 'Pause':
            props?.onPause()
            break
         case 'Edit':
            props?.onEdit()
            break
         case 'Delete':
            props?.onDelete()
            break
         case 'Activate':
            props.onActivate()
            break
         default:
            break
      }
   }

   return (
      <Card
         sx={{
            minWidth: 300,
            width: '100%',
            maxWidth: 300,
            minHeight: '260px',
         }}
      >
         <Collapse in={!isEditing} unmountOnExit>
            <CardActionArea
               sx={{ position: 'relative' }}
               onClick={() => {
                  if (!props.isUser && !props.isNew) {
                     props.onClick()
                  } else if (!props.isNew) {
                     handleIsEditing()
                  } else props.onClickNew()
               }}
            >
               <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={props?.imgSrc || url}
               />

               <CardHeader
                  sx={{
                     display: props.isUser ? 'none' : 'flex',
                  }}
                  avatar={
                     <Avatar aria-label="recipe" src={props.avatarSrc || url}>
                        {props.username?.charAt(0)}
                     </Avatar>
                  }
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <Favorite />
                  //   </IconButton>
                  // }
                  title={props?.username || 'ANON'}
                  subheader={
                     props?.date ? formatDate(props?.date) : formatDate(now)
                  }
               />
               <Divider />
               <CardContent sx={{ p: 1.5, height: '60px' }}>
                  <Typography
                     sx={{ lineHeight: 1.3 }}
                     variant="body1"
                     color="text.secondary"
                  >
                     {props?.title}
                  </Typography>
               </CardContent>
               <CardActions sx={{ alignItems: 'center' }}>
                  {props?.isUser && (
                     <Icon
                        name="menu-horizon"
                        sizing="small"
                        iconColor="primary.main"
                        onClick={(_e) => {
                           _e.stopPropagation()
                           _e.preventDefault()
                           handleIsEditing()
                        }}
                     />
                  )}
                  <Box flexGrow={1} />
                  <Stack
                     direction="column"
                     spacing={0}
                     alignItems="end"
                     justifyContent={'center'}
                  >
                     <Typography
                        variant="overline"
                        sx={{ pb: 0, lineHeight: 1 }}
                     >
                        Starting at
                     </Typography>
                     <Typography sx={{ pt: 0 }} variant="h6" fontWeight={900}>
                        {props?.price}$
                     </Typography>
                  </Stack>
               </CardActions>
               {props?.isNew && (
                  <Box
                     sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        background: (theme) => theme.palette.secondary.dark,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                     }}
                  >
                     <Icon sizing="medium" name="add" />
                     <Typography variant="h6">Create a gig</Typography>
                  </Box>
               )}
            </CardActionArea>
         </Collapse>
         <Collapse in={isEditing && props.isUser} unmountOnExit>
            <CardContent
               sx={{
                  p: 0,
                  height: '100%',
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'column',
               }}
            >
               <List>
                  {menus.map((_e: string, i: number) => (
                     <ListItem
                        onClick={() => {}}
                        key={`menucard-${i}`}
                        disablePadding
                     >
                        <ListItemButton onClick={() => handleOption(_e)}>
                           <ListItemIcon>{getIcon(_e)}</ListItemIcon>
                           <ListItemText>{_e}</ListItemText>
                        </ListItemButton>
                     </ListItem>
                  ))}
               </List>
               <Box flexGrow={1} />
            </CardContent>
            <CardActions>
               <Icon
                  name="back"
                  sizing="small"
                  iconColor="primary.main"
                  onClick={handleIsEditing}
               />
            </CardActions>
         </Collapse>
      </Card>
   )
}
