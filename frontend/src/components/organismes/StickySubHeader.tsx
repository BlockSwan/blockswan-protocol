import { Toolbar, useMediaQuery } from '@mui/material'

const StickySubHeader = (props: any) => {
   const isSm = useMediaQuery('(max-width:600px)')
   return (
      <Toolbar
         sx={{
            zIndex: 1000,
            position: 'sticky',
            top: isSm ? '56px' : '64px',
            height: '64px',
            borderRadius: 0,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            width: '100%',

            background: (theme) => theme.palette.secondary.main,
         }}
         style={{
            paddingTop: 0,
            paddingBottom: 0,
         }}
      >
         {props.children}
      </Toolbar>
   )
}
export default StickySubHeader
