import { waitForTx } from './../utilities/tx'
import hre from 'hardhat'
import { isValidAddress } from '../utilities/utils'
import {
    getACLManager,
    getDAT,
    getDelaysTimestamp,
    getDispute,
    getGig,
    getJury,
    getMockUSDC,
    getOrder,
    getProtocolConfigurator,
    getUser,
    getXP,
} from './contract_getters'
import { red, bold } from 'kleur'
import { BSWAN } from '../types'
import {
    BUYER_ADMIN_ROLE,
    BUYER_ROLE,
    MAX_SUPPLY,
    ONE_THOUSAND_USDC,
    SELLER_ADMIN_ROLE,
    SELLER_ROLE,
    XP_VALUES,
} from './constants'
import {
    CreationParams,
    DelayTimestamp,
    DisputeParams,
    EntryParams,
    FeeParams,
    RetributionParams,
    SignerWithAddress,
    ValidInput,
} from './types'
import { LOG_ACTIONS } from './envs'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { calcDisputeDelaysArrays } from '../utilities/helpers'

const updateDATconfig = async (newOwner?: string) => {
    const dat = (await getDAT()) as BSWAN
    if (!newOwner || !isValidAddress(newOwner))
        throw Error(
            red().bold(
                '[updateDATconfig] Input parameter "newOwner" is missing or is not an address.'
            )
        )
    dat.updateConfig(newOwner, 1, 2)
}

const addMarketplaceToRegistry = async (
    providerId: any,
    addressProvider: string | undefined
) => {
    const providerRegistry = await hre.deployments.get('ProviderRegistry')
    const providerRegistryInstance = await hre.ethers.getContractAt(
        providerRegistry.abi,
        providerRegistry.address
    )
    const providerRegistryOwner = await providerRegistryInstance.owner()
    if (!isValidAddress(addressProvider)) {
        throw Error(
            '[addMarketplaceToRegistry] Input parameter "addressProvider" is missing or is not an address.'
        )
    }
    const signer = await hre.ethers.getSigner(providerRegistryOwner)
    // Set the provider at the Registry
    await waitForTx(
        await providerRegistryInstance
            .connect(signer)
            .registerAddressProvider(addressProvider, providerId)
    )
    console.log(
        `\nAdded AddresProvider with address "${addressProvider}" to registry located at ${providerRegistry.address}\n`
    )
}

const setupBuyerAdminRoles = async (
    aclManagerAddress: string | undefined,
    userAddress: string | undefined
) => {
    const ACLManager = await getACLManager(aclManagerAddress)
    const User = await getUser(userAddress)
    waitForTx(await ACLManager.grantRole(BUYER_ADMIN_ROLE, User.address))
    console.log(`\nAdded BUYER_ADMIN_ROLE as admin of BUYER_ROLE\n`)
    waitForTx(await ACLManager.setRoleAdmin(BUYER_ROLE, BUYER_ADMIN_ROLE))
    console.log(`\nGranted BUYER_ADMIN_ROLE to ${User.address}\n`)
}

const setupSellerAdminRoles = async (
    aclManagerAddress: string | undefined,
    userAddress: string | undefined
) => {
    const ACLManager = await getACLManager(aclManagerAddress)
    const User = await getUser(userAddress)
    waitForTx(await ACLManager.grantRole(SELLER_ADMIN_ROLE, User.address))
    console.log(`\nAdded SELLER_ADMIN_ROLE as admin of SELLER_ROLE \n`)
    waitForTx(await ACLManager.setRoleAdmin(SELLER_ROLE, SELLER_ADMIN_ROLE))
    console.log(`\nGranted BUYER_ADMIN_ROLE to ${User.address}\n`)
}

const updateBuyerEntryParams = async (
    protocolConfiguratorAddress: string | undefined,
    entryParams: EntryParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the buyer entry params\n`)
    waitForTx(await ProtocolConfiguarator.updateBuyerEntryParams(entryParams))
}

const updateSellerEntryParams = async (
    protocolConfiguratorAddress: string | undefined,
    entryParams: EntryParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the seller entry params\n`)
    waitForTx(await ProtocolConfiguarator.updateSellerEntryParams(entryParams))
}

const updateRetributionsParams = async (
    protocolConfiguratorAddress: string | undefined,
    retribParams: RetributionParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the retribution params\n`)
    waitForTx(await ProtocolConfiguarator.updateRetributionParams(retribParams))
}

const updateGigCreationParams = async (
    protocolConfiguratorAddress: string | undefined,
    creationParams: CreationParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the gig creation params\n`)
    waitForTx(
        await ProtocolConfiguarator.updateGigCreationParams(creationParams)
    )
}

const updateOrderCreationParams = async (
    protocolConfiguratorAddress: string | undefined,
    priceParams: FeeParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the order creation params\n`)
    waitForTx(
        await ProtocolConfiguarator.updateOrderCreationParams(priceParams)
    )
}

const updateSellerOrderParams = async (
    protocolConfiguratorAddress: string | undefined,
    priceParams: FeeParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the seller-applied order params\n`)
    waitForTx(await ProtocolConfiguarator.updateSellerOrderFees(priceParams))
}

const updateDelayTimestamp = async (
    protocolConfiguratorAddress: string | undefined,
    delays: DelayTimestamp
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the protocol delay timestamps\n`)
    waitForTx(await ProtocolConfiguarator.updateDelayTimestamp(delays))
}

const updateDisputeParams = async (
    protocolConfiguratorAddress: string | undefined,
    disputeParams: DisputeParams
) => {
    let ProtocolConfiguarator = await getProtocolConfigurator(
        protocolConfiguratorAddress
    )
    console.log(`\nUpdating the protocol dispute params\n`)
    waitForTx(await ProtocolConfiguarator.updateDisputeParams(disputeParams))
}

const mintUSDC = async (
    mUSDCaddress: string | undefined,

    caller: SignerWithAddress,

    factor: number = 1
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    waitForTx(
        await USDC.connect(caller.signer).mint(
            Number(ONE_THOUSAND_USDC) * factor
        )
    )
    if (LOG_ACTIONS)
        console.log(
            `${caller.address} minted ${
                Number(ONE_THOUSAND_USDC) * factor
            } mUSDC`
        )
}

const maxApproveDAT = async (
    mUSDCaddress: string | undefined,
    DATAddress: string | undefined,
    caller: SignerWithAddress
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    let DAT = await getDAT(DATAddress)
    waitForTx(
        await USDC.connect(caller.signer).increaseAllowance(
            DAT.address,
            MAX_SUPPLY
        )
    )
    waitForTx(
        await DAT.connect(caller.signer).increaseAllowance(
            DAT.address,
            MAX_SUPPLY
        )
    )
}

const maxApproveUser = async (
    mUSDCaddress: string | undefined,
    UserAddress: string | undefined,
    caller: SignerWithAddress
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    let User = await getUser(UserAddress)
    waitForTx(
        await USDC.connect(caller.signer).increaseAllowance(
            User.address,
            MAX_SUPPLY
        )
    )
}

const maxApproveGig = async (
    mUSDCaddress: string | undefined,

    GigAddress: string | undefined,
    caller: SignerWithAddress
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    let Gig = await getGig(GigAddress)
    waitForTx(
        await USDC.connect(caller.signer).increaseAllowance(
            Gig.address,
            MAX_SUPPLY
        )
    )
}

const maxApproveOrder = async (
    mUSDCaddress: string | undefined,
    OrderAddress: string | undefined,
    caller: SignerWithAddress
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    let Order = await getOrder(OrderAddress)
    waitForTx(
        await USDC.connect(caller.signer).increaseAllowance(
            Order.address,
            MAX_SUPPLY
        )
    )
}

const maxApproveJury = async (
    mUSDCaddress: string | undefined,
    JuryAddress: string | undefined,
    caller: SignerWithAddress
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    let Jury = await getJury(JuryAddress)
    waitForTx(
        await USDC.connect(caller.signer).increaseAllowance(
            Jury.address,
            MAX_SUPPLY
        )
    )
}

const maxApproveDispute = async (
    mUSDCaddress: string | undefined,
    DisputeAddress: string | undefined,
    caller: SignerWithAddress
) => {
    let USDC = await getMockUSDC(mUSDCaddress)
    let Dispute = await getDispute(DisputeAddress)
    waitForTx(
        await USDC.connect(caller.signer).increaseAllowance(
            Dispute.address,
            MAX_SUPPLY
        )
    )
}

const setupXPKeys = async (xpAddress: string | undefined) => {
    let XP = await getXP(xpAddress)
    XP_VALUES.forEach(async (keyValue) => {
        console.log(`${keyValue.key} for ${keyValue.amount}`)
        waitForTx(
            await XP.setXpAmount(keyValue.key.toString(), keyValue.amount)
        )
    })
}

const calcDisputeDelaysFromBlock = async (
    blockNumber?: number
): Promise<number[]> => {
    const ProtocolConfigurator = await getProtocolConfigurator()
    const delaysTimestamps = await getDelaysTimestamp(
        ProtocolConfigurator.address
    )
    const block = blockNumber ? blockNumber : await time.latestBlock()
    return calcDisputeDelaysArrays({
        blockNumber: block,
        evidenceDelay: Number(delaysTimestamps.evidence),
        commitDelay: Number(delaysTimestamps.commit),
        voteDelay: Number(delaysTimestamps.vote),
        appealDelay: Number(delaysTimestamps.appeal),
    })
}

export {
    updateDATconfig,
    addMarketplaceToRegistry,
    setupBuyerAdminRoles,
    setupSellerAdminRoles,
    updateBuyerEntryParams,
    mintUSDC,
    maxApproveDAT,
    maxApproveUser,
    updateRetributionsParams,
    updateSellerEntryParams,
    setupXPKeys,
    maxApproveGig,
    updateGigCreationParams,
    updateOrderCreationParams,
    updateSellerOrderParams,
    updateDelayTimestamp,
    maxApproveOrder,
    maxApproveDispute,
    maxApproveJury,
    updateDisputeParams,
    calcDisputeDelaysFromBlock,
}
