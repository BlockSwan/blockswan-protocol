import { createContext, ReactNode, useEffect, useState } from 'react'

import { Web3Auth } from '@web3auth/modal'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
// import { CoinbaseAdapter } from '@web3auth/coinbase-adapter'
// import { WalletConnectV1Adapter } from '@web3auth/wallet-connect-v1-adapter'
// import { MetamaskAdapter } from '@web3auth/metamask-adapter'
// import { TorusWalletAdapter } from '@web3auth/torus-evm-adapter'
import RPC from '../classes/ethersRPC' // for using web3.js
import AuthService from '../services/AuthService'
import { getPublicCompressed } from '@toruslabs/eccrypto'

export const Web3Context = createContext<any>(null!)
interface Web3ContextProviderProps {
   children?: ReactNode
}

export const Web3ContextProvider = ({ children }: Web3ContextProviderProps) => {
   const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null)
   const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
      null
   )
   const [evmAddress, setEvmAddress] = useState<string | null>(null)
   const [userInfo, setUserInfo] = useState<any | null>(null)
   const [userData, setUserData] = useState<any | null>(null)
   const [balances, setBalances] = useState<any>({})
   // const [user, setUser] = useState<any | null>(null)
   const clientId =
      'BDY29ZodgKnnyrsKgwXlgcE58KL17B0DCUkqXnmpZtuT0m6GU6czH-jWO5xgY__7QdSMgIF_gQlqo58VQI0tBws'

   const init = async () => {
      try {
         const web3auth = new Web3Auth({
            clientId,
            chainConfig: {
               // this is ethereum chain config, change if other chain(Solana, Polygon)
               chainNamespace: CHAIN_NAMESPACES.EIP155,
               chainId: '0x13881',
               rpcTarget: 'https://rpc.ankr.com/polygon_mumbai',
               displayName: 'Polygon Mainnet',
               blockExplorer: 'https://mumbai.polygonscan.com/',
               ticker: 'MATIC',
               tickerName: 'Matic',
            },
            uiConfig: {
               theme: 'light',
               loginMethodsOrder: [
                  'twitter',
                  'discord',
                  'google',
                  'apple',
                  'linkedin',
                  'github',
                  'facebook',
               ],
               defaultLanguage: 'en',

               appLogo: 'https://testnet.blockswan.app/img/glyph.svg', // Your App Logo Here
            },
         })

         const openloginAdapter = new OpenloginAdapter({
            loginSettings: {
               mfaLevel: 'optional',
            },
            adapterSettings: {
               clientId,
               network: 'testnet',
               uxMode: 'popup',
               whiteLabel: {
                  name: 'Blockswan',
                  logoLight: 'https:testnet.blockswan.app/img/glyph.svg',
                  logoDark: 'https:testnet.blockswan.app/img/glyph.svg',
                  defaultLanguage: 'en',
                  dark: false,
               },
            },
         })
         web3auth.configureAdapter(openloginAdapter)

         // const coinbaseAdapter = new CoinbaseAdapter({
         //    clientId,
         // })
         // web3auth.configureAdapter(coinbaseAdapter)

         // // adding wallet connect v1 adapter

         // const walletConnectV1Adapter =
         //    new WalletConnectV1Adapter({
         //       adapterSettings: {
         //          bridge:
         //             'https://bridge.walletconnect.org',
         //       },
         //       clientId,
         //    })

         // web3auth.configureAdapter(
         //    walletConnectV1Adapter
         // )

         // // adding metamask adapter

         // const metamaskAdapter = new MetamaskAdapter({
         //    clientId,
         // })

         // // it will add/update  the metamask adapter in to web3auth class
         // web3auth.configureAdapter(metamaskAdapter)

         // const torusWalletAdapter =
         //    new TorusWalletAdapter({
         //       clientId,
         //    })

         // // it will add/update  the torus-evm adapter in to web3auth class
         // web3auth.configureAdapter(torusWalletAdapter)

         setWeb3auth(web3auth)

         // await web3auth.initModal()
         // if (web3auth.provider) {
         //    setProvider(web3auth.provider)
         // }
      } catch (error) {
         console.error(error)
      }
   }

   const authenticateUser = async () => {
      if (!web3auth) {
         uiConsole('web3auth not initialized yet')
         return
      }
      const idToken = await web3auth.authenticateUser()
      uiConsole(idToken)
   }

   const getUserInfo = async () => {
      if (!web3auth) {
         uiConsole('web3auth not initialized yet')
         return
      }
      const user = await web3auth.getUserInfo()

      return user
   }

   const logout = async () => {
      if (!web3auth) {
         uiConsole('web3auth not initialized yet')
         return
      }
      await web3auth.logout()
      setProvider(null)
   }

   const getChainId = async () => {
      if (!provider) {
         uiConsole('provider not initialized yet')
         return
      }
      const rpc = new RPC(provider)
      const chainId = await rpc.getChainId()
      uiConsole(chainId)
   }
   const getAccounts = async () => {
      if (!provider) {
         uiConsole('provider not initialized yet')
         return
      }
      const rpc = new RPC(provider)
      const address = await rpc.getAccounts()
      uiConsole(address)
   }

   const getBalance = async () => {
      if (!provider) {
         uiConsole('provider not initialized yet')
         return
      }
      const rpc = new RPC(provider)
      const balance = await rpc.getBalance()
      setBalances({ ...balances, native: Number(balance) })
      uiConsole(balance)
   }

   const sendTransaction = async () => {
      if (!provider) {
         uiConsole('provider not initialized yet')
         return
      }
      const rpc = new RPC(provider)
      const receipt = await rpc.sendTransaction()
      uiConsole(receipt)
   }

   const signMessage = async () => {
      if (!provider) {
         uiConsole('provider not initialized yet')
         return
      }
      const rpc = new RPC(provider)
      const signedMessage = await rpc.signMessage()
      uiConsole(signedMessage)
   }

   const getPrivateKey = async () => {
      if (!provider) {
         uiConsole('provider not initialized yet')
         return
      }
      const rpc = new RPC(provider)
      const privateKey = await rpc.getPrivateKey()
      uiConsole(privateKey)
   }

   const login = async () => {
      init()
      if (!web3auth) {
         alert('a')
         uiConsole('web3auth not initialized yet')
      }
      await web3auth?.initModal()
      const web3authProvider = await web3auth?.connect()
      if (web3authProvider) {
         const rpc = new RPC(web3authProvider)
         const address = await rpc.getAccounts()
         const _userInfo = await getUserInfo()
         const app_scoped_privkey: any = await web3authProvider.request({
            method: 'eth_private_key', // use "private_key" for other non-evm chains
         })
         const app_pub_key = getPublicCompressed(
            Buffer.from(app_scoped_privkey.padStart(64, '0'), 'hex')
         ).toString('hex')

         AuthService.verify(
            _userInfo?.idToken || '',
            address || '',
            app_pub_key || '',
            _userInfo?.profileImage || '',
            _userInfo?.email || '',
            _userInfo?.name || 'Anon'
         )
            .then(async (data: any) => {
               console.log(data)
               setUserData(data?._doc)
               setEvmAddress(address)
               setProvider(web3authProvider)
               setUserInfo(_userInfo)
               uiConsole('Logged in Successfully!')
            })
            .catch((err: any) => {
               console.log(err)
               setUserData(null)
               setEvmAddress(null)
               setProvider(null)
               setUserInfo(null)
               uiConsole('Login Failed!')
            })
      }
   }

   function uiConsole(...args: any[]): void {
      console.log(JSON.stringify(args || {}, null, 2))
      const el = document.querySelector('#console>p')
      if (el) {
         el.innerHTML = JSON.stringify(args || {}, null, 2)
      }
   }

   useEffect(() => {
      init()
   }, [])

   useEffect(() => {
      getBalance()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [provider])

   return (
      <Web3Context.Provider
         value={{
            balances,
            setBalances,
            provider,
            evmAddress,
            login,
            authenticateUser,
            getUserInfo,
            userInfo,
            logout,
            getChainId,
            getAccounts,
            getBalance,
            sendTransaction,
            signMessage,
            getPrivateKey,
            uiConsole,
            userData,
            setUserData,
         }}
      >
         {children}
         {/* <div
            id="console"
            style={{
               position: 'absolute',
               background: 'black',
               color: 'white',
               height: '100%',
               width: '100%',
               zIndex: 9999,
               top: 500,
               left: 0,
            }}
         >
            <p></p>
            <pre>{JSON.stringify(userInfo, null, 4)}</pre>
         </div> */}
      </Web3Context.Provider>
   )
}
