import {
    MUSDC,
    User,
    XP,
    Order,
    Gig,
    BSWAN,
    AddressProvider,
    ProtocolConfigurator,
    ProviderRegistry,
    ACLManager,
    Dispute,
    Jury,
} from './../types'
import hre from 'hardhat'
import { getContract } from '../utilities/tx'
import {
    ACL_MANAGER_ID,
    ADDRESS_PROVIDER_ID,
    DAT_ID,
    DISPUTE_IMPL_ID,
    GIG_IMPL_ID,
    JURY_IMPL_ID,
    ORDER_IMPL_ID,
    PROTOCOL_CONFIGURATOR_ID,
    USER_IMPL_ID,
    XP_ID,
} from './deploy_ids'
import {
    CreationParams,
    DelayTimestamp,
    DisputeParams,
    EntryParams,
    FeeParams,
    RetributionParams,
    TrustData,
} from './types'

const getDAT = async (address?: string): Promise<BSWAN> =>
    getContract(
        'BSWAN',
        address || (await hre.deployments.get(DAT_ID)).address
    ) as any
const getMockUSDC = async (address?: string): Promise<MUSDC> =>
    getContract(
        'mUSDC',
        address || (await hre.deployments.get('mUSDC')).address
    ) as any
const getXP = async (address?: string): Promise<XP> =>
    getContract(
        'XP',
        address || (await hre.deployments.get(XP_ID)).address
    ) as any

const getDATconfig = async (address?: string): Promise<TrustData> => {
    const dat = await getDAT(address)
    const conf: TrustData = {
        address: dat.address,
        owner: await dat.owner(),
        currency: await dat.currency(),
        decimals: await dat.decimals(),
        totalSupply: (await dat.totalSupply()).toNumber(),
        minInvestment: (await dat.minInvestment()).toNumber(),
        revenueCommitmentBasisPoints: (
            await dat.revenueCommitmentBasisPoints()
        ).toNumber(),
        investmentReserveBasisPoints: (
            await dat.investmentReserveBasisPoints()
        ).toNumber(),
        buySlopNum: (await dat.buySlopeNum()).toNumber(),
        buySlopDen: (await dat.buySlopeDen()).toNumber(),
    }
    return conf
}

const getBuyerEntryParams = async (address?: string): Promise<EntryParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getBuyerEntryParams()']()

    return {
        currencyValue: config[0].toNumber(),
        timeAdded: config[1].toNumber(),
        xpEarned: config[2].toNumber(),
        invitationEarned: config[3],
    }
}

const getSellerEntryParams = async (address?: string): Promise<EntryParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getSellerEntryParams()']()

    return {
        currencyValue: config[0].toNumber(),
        timeAdded: config[1].toNumber(),
        xpEarned: config[2].toNumber(),
        invitationEarned: config[3],
    }
}

const getGigCreationParams = async (
    address?: string
): Promise<CreationParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getGigCreationParams()']()
    return {
        currencyValue: config[0].toNumber(),
        xpEarned: config[1].toNumber(),
    }
}

const getRetributionParams = async (
    address?: string
): Promise<RetributionParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getRetributionParams()']()

    return new RetributionParams({
        affiliate: config[0].toNumber(),
        lvl0AffiliateShare: config[1].toNumber(),
    })
}

const getDelaysTimestamp = async (
    address?: string
): Promise<DelayTimestamp> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getDelayTimestamp()']()
    return {
        selfRefund: config[0].toNumber(),
        evidence: config[1].toNumber(),
        commit: config[2].toNumber(),
        vote: config[3].toNumber(),
        appeal: config[4].toNumber(),
    }
}

const getSellerOrderParams = async (address?: string): Promise<FeeParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getSellerOrderFees()']()
    return {
        flat: config[0].toNumber(),
        percent: config[1].toNumber(),
    }
}

const getOrderCreationParams = async (address?: string): Promise<FeeParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getOrderCreationParams()']()
    return {
        flat: config[0].toNumber(),
        percent: config[1].toNumber(),
    }
}

const getDisputeParams = async (address?: string): Promise<DisputeParams> => {
    const protocolConfig = await getProtocolConfigurator(address)
    const config = await protocolConfig['getDisputeParams()']()
    return {
        minStake: config[0].toNumber(),
        alpha: config[1].toNumber(),
        feePerJuror: config[2].toNumber(),
        maxVotes: config[3].toNumber(),
    }
}

const getAddressProvider = async (address?: string): Promise<AddressProvider> =>
    getContract(
        'AddressProvider',
        address || (await hre.deployments.get(ADDRESS_PROVIDER_ID)).address
    ) as any
const getProviderRegistry = async (
    address?: string
): Promise<ProviderRegistry> =>
    getContract(
        'ProviderRegistry',
        address || (await hre.deployments.get('ProviderRegistry')).address
    ) as any
const getACLManager = async (address?: string): Promise<ACLManager> =>
    getContract(
        'ACLManager',
        address || (await hre.deployments.get(ACL_MANAGER_ID)).address
    ) as any
const getProtocolConfigurator = async (
    address?: string
): Promise<ProtocolConfigurator> =>
    getContract(
        'ProtocolConfigurator',
        address || (await hre.deployments.get(PROTOCOL_CONFIGURATOR_ID)).address
    ) as any
const getUser = async (address?: string): Promise<User> =>
    getContract(
        'User',
        address || (await hre.deployments.get(USER_IMPL_ID)).address
    ) as any
const getGig = async (address?: string): Promise<Gig> =>
    getContract(
        'Gig',
        address || (await hre.deployments.get(GIG_IMPL_ID)).address
    ) as any
const getOrder = async (address?: string): Promise<Order> =>
    getContract(
        'Order',
        address || (await hre.deployments.get(ORDER_IMPL_ID)).address
    ) as any

const getDispute = async (address?: string): Promise<Dispute> =>
    getContract(
        'Dispute',
        address || (await hre.deployments.get(DISPUTE_IMPL_ID)).address
    ) as any

const getJury = async (address?: string): Promise<Jury> =>
    getContract(
        'Jury',
        address || (await hre.deployments.get(JURY_IMPL_ID)).address
    ) as any

const getUserLibraries = async () => {
    const userLogicArtifact = await hre.deployments.get('UserLogic')
    const userDataLogicArtifact = await hre.deployments.get('UserDataLogic')
    const inviterLogic = await hre.deployments.get('InviterLogic')
    return {
        UserLogic: userLogicArtifact.address,
        InviterLogic: inviterLogic.address,
        UserDataLogic: userDataLogicArtifact.address,
    }
}

const getGigLibraries = async () => {
    const GigLogicArtifact = await hre.deployments.get('GigLogic')
    const GigDataLogicArtifact = await hre.deployments.get('GigDataLogic')
    const inviterLogic = await hre.deployments.get('InviterLogic')
    return {
        GigLogic: GigLogicArtifact.address,
        InviterLogic: inviterLogic.address,
        GigDataLogic: GigDataLogicArtifact.address,
    }
}

const getOrderLibraries = async () => {
    const OrderLogicArtifact = await hre.deployments.get('OrderLogic')
    const OrderDataLogicArtifact = await hre.deployments.get('OrderDataLogic')
    const inviterLogic = await hre.deployments.get('InviterLogic')
    return {
        OrderLogic: OrderLogicArtifact.address,
        InviterLogic: inviterLogic.address,
        OrderDataLogic: OrderDataLogicArtifact.address,
    }
}

const getDisputeLibraries = async () => {
    const DisputeLogicArtifact = await hre.deployments.get('DisputeLogic')
    const DisputeDataLogicArtifact = await hre.deployments.get(
        'DisputeDataLogic'
    )
    const RoundLogic = await hre.deployments.get('RoundLogic')
    const inviterLogic = await hre.deployments.get('InviterLogic')
    const SortitionTree = await hre.deployments.get('SortitionSumTreeFactory')
    return {
        DisputeLogic: DisputeLogicArtifact.address,
        DisputeDataLogic: DisputeDataLogicArtifact.address,
        RoundLogic: RoundLogic.address,
        InviterLogic: inviterLogic.address,
        SortitionSumTreeFactory: SortitionTree.address,
    }
}

const getJuryLibrairies = async () => {
    const JuryLogic = await hre.deployments.get('JuryLogic')
    const SortitionTree = await hre.deployments.get('SortitionSumTreeFactory')
    const JuryDataLogic = await hre.deployments.get('JuryDataLogic')
    return {
        JuryLogic: JuryLogic.address,
        SortitionSumTreeFactory: SortitionTree.address,
        JuryDataLogic: JuryDataLogic.address,
    }
}

const getProtocolConfiguratorLibraries = async () => {
    const paramsLogicArtifact = await hre.deployments.get('ParamsLogic')

    return {
        ParamsLogic: paramsLogicArtifact.address,
    }
}

export {
    getDAT,
    getProtocolConfigurator,
    getMockUSDC,
    getAddressProvider,
    getProviderRegistry,
    getDATconfig,
    getUserLibraries,
    getUser,
    getACLManager,
    getProtocolConfiguratorLibraries,
    getBuyerEntryParams,
    getSellerEntryParams,
    getRetributionParams,
    getXP,
    getGig,
    getGigLibraries,
    getGigCreationParams,
    getOrderLibraries,
    getOrder,
    getDelaysTimestamp,
    getSellerOrderParams,
    getOrderCreationParams,
    getDisputeLibraries,
    getDispute,
    getJury,
    getJuryLibrairies,
    getDisputeParams,
}
