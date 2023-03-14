import {
   Button,
   Divider,
   Input,
   InputAdornment,
   Typography,
} from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Modal from '../../../components/molecules/Modal'
import { useWeb3Context } from '../../../hooks/useWeb3Context'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CryptoIcon from '../../../components/atoms/CryptoIcon'
type ClaimMaticModalProps = {
   opener: React.ReactNode
}

const ClaimMaticModal = (props: ClaimMaticModalProps) => {
   const { balances, evmAddress } = useWeb3Context()
   const { native } = balances

   const { opener } = props
   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)
   return (
      <React.Fragment>
         <div onClick={handleOpen}>{opener}</div>
         <Modal
            title="Claiming MATIC testnet tokens:"
            open={open}
            onClose={handleClose}
         >
            <React.Fragment>
               <Typography sx={{ mt: 2 }}>
                  MATIC tokens are used to pay for gas fees on the polygon
                  network.
               </Typography>
               <Divider textAlign="left" sx={{ mt: 2 }}>
                  <Typography sx={{ mt: 2 }} variant="overline">
                     WALLET DETAILS
                  </Typography>
               </Divider>
               <Stack direction="row" sx={{ width: '100%' }}></Stack>
               <Input
                  disableUnderline
                  readOnly
                  fullWidth
                  sx={{
                     fontSize: 12,
                  }}
                  startAdornment={
                     <InputAdornment position="start">
                        <AccountBalanceWalletIcon />
                     </InputAdornment>
                  }
                  value={evmAddress}
               />

               <Stack direction="row" display="flex" gap={2} sx={{ mt: 1 }}>
                  <CryptoIcon symbol="MATIC" />
                  <Typography>{native} MATIC</Typography>
               </Stack>
               <Divider sx={{ mt: 2 }} />
               <Typography sx={{ mt: 2 }}>
                  <b>How to claim MATIC tokens:</b>
               </Typography>
               <Typography sx={{ mt: 2 }}>
                  1. Go to the faucet website:{' '}
                  <a href="https://faucet.matic.network/">
                     https://faucet.matic.network/
                  </a>
               </Typography>
               <Typography sx={{ mt: 2 }}>
                  2. Paste your wallet address into the input field and click
                  "Submit"
               </Typography>
               <Typography sx={{ mt: 2 }}>
                  3. Wait for the transaction to be confirmed
               </Typography>
               <Typography sx={{ mt: 2 }}>
                  4. Refresh the page to see your MATIC balance
               </Typography>
               <Divider sx={{ mt: 2 }} />

               <pre>{JSON.stringify(balances, null, 4)}</pre>
            </React.Fragment>
         </Modal>
      </React.Fragment>
   )
}

// write a descirption of the matic token below:

export default ClaimMaticModal
