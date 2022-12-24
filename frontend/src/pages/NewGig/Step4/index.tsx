import {
   Grid,
   IconButton,
   Paper,
   Typography,
   Stack,
   Grow,
} from '@mui/material'
import { NewGigLayout } from '../../../layouts/NewGigLayout'
import ImageIcon from '@mui/icons-material/Image'
import { useGigsContext } from '../../../hooks/useGigsContext'
import { useState } from 'react'
import { Icon } from '../../../components/atoms/Icon'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import { useAppNavigation } from '../../../hooks/useAppNavigation'

const arr = [0, 1, 2]

const imgSX = {
   width: '100%',
   height: '200px',
}

const NewGigGallery = () => {
   const { gig, setGig } = useGigsContext()
   const { evmAddress } = useWeb3Context()
   const { goToNewGigRequirement, goToNewGigPublish } =
      useAppNavigation()
   const [hovered, setHovered] = useState<
      number | undefined
   >(undefined)

   const handleHovered = (data: number | undefined) =>
      setHovered(data)

   const onAddFile = (file: File) => {
      if (file !== undefined) {
         let _files: File[] = gig?.imgs
         _files.push(file)
         console.log(_files)
         setGig({ ...gig, imgs: _files })
      }
   }

   const onRemoveFile = (index: number) => {
      let _files: File[] = gig?.imgs
      _files.splice(index, 1)
      setGig({ ...gig, imgs: _files })
   }

   return (
      <NewGigLayout
         step={4}
         setStep={() => {}}
         onBack={() => goToNewGigRequirement(evmAddress)}
         onNext={() => goToNewGigPublish(evmAddress)}
         isNextDisabled={gig?.imgs?.length === 0}
         children={
            <>
               <Typography variant="body1">
                  Encourage buyers to choose your gig by
                  featuring a variety of your work
               </Typography>
               <Grid container spacing={2}>
                  {arr?.map((_, index: number) => (
                     <Grid
                        key={`image-${index}`}
                        item
                        xs={12}
                        md={4}
                     >
                        {!gig?.imgs[index] ? (
                           <IconButton
                              color="primary"
                              sx={{
                                 ...imgSX,
                                 background: (theme) =>
                                    theme.palette.secondary
                                       .light,
                              }}
                              aria-label="upload picture"
                              component="label"
                              onChange={(e: any) =>
                                 onAddFile(
                                    e?.target?.files[0]
                                 )
                              }
                              disabled={
                                 index > 0 &&
                                 !gig?.imgs[index - 1]
                              }
                           >
                              <input
                                 hidden
                                 accept="image/*"
                                 type="file"
                              />
                              <Stack
                                 justifyContent="center"
                                 alignItems={'center'}
                              >
                                 <ImageIcon
                                    sx={{ fontSize: 100 }}
                                 />
                                 <Typography>
                                    + Click to add a picture
                                 </Typography>
                              </Stack>
                           </IconButton>
                        ) : (
                           <Paper
                              elevation={3}
                              sx={{
                                 ...imgSX,
                                 position: 'relative',
                                 border: '1px solid',
                                 borderColor: 'divider',
                                 overflow: 'hidden',
                                 borderRadius: '8px',
                              }}
                           >
                              <img
                                 onMouseLeave={() =>
                                    handleHovered(undefined)
                                 }
                                 onMouseEnter={() =>
                                    handleHovered(index)
                                 }
                                 style={{
                                    objectFit: 'cover',

                                    width: '100%',
                                    height: '100%',
                                 }}
                                 alt={`img-${index}`}
                                 src={URL.createObjectURL(
                                    gig?.imgs[index]
                                 )}
                              />
                              <Grow in={hovered === index}>
                                 <Stack
                                    sx={{
                                       position: 'absolute',
                                       top: (theme) =>
                                          theme.spacing(1),
                                       right: (theme) =>
                                          theme.spacing(1),
                                    }}
                                    gap={1}
                                    onMouseEnter={() =>
                                       handleHovered(index)
                                    }
                                 >
                                    <Icon
                                       name="delete"
                                       onClick={() =>
                                          onRemoveFile(
                                             index
                                          )
                                       }
                                    />
                                 </Stack>
                              </Grow>
                           </Paper>
                        )}
                     </Grid>
                  ))}
               </Grid>
            </>
         }
      />
   )
}

export default NewGigGallery
