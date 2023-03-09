import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS, MARKETPLACE_NAME } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import { bold } from 'kleur'
import {
    ADDRESS_PROVIDER_ID,
    PROTOCOL_CONFIGURATOR_ID,
} from '../../../helpers/deploy_ids'
import {
    getAddressProvider,
    getBuyerEntryParams,
    getDelaysTimestamp,
    getDisputeParams,
    getGigCreationParams,
    getOrderCreationParams,
    getProtocolConfiguratorLibraries,
    getRetributionParams,
    getSellerEntryParams,
    getSellerOrderParams,
    getUserLibraries,
} from '../../../helpers/contract_getters'
import {
    BUYER_ENTRY_PARAMS,
    DELAYS_TIMESTAMP,
    DISPUTE_PARAMS,
    GIG_CREATION_PARAMS,
    ORDER_CREATION_PARAMS,
    PRETTYJSON,
    PROTOCOL_CONFIGURATOR,
    RETRIBUTION_PARAMS,
    SELLER_ENTRY_PARAMS,
    SELLER_ORDER_FEES_PARAMS,
} from '../../../helpers/constants'
import {
    setupBuyerAdminRoles,
    updateBuyerEntryParams,
    updateDelayTimestamp,
    updateDisputeParams,
    updateGigCreationParams,
    updateOrderCreationParams,
    updateRetributionsParams,
    updateSellerEntryParams,
    updateSellerOrderParams,
} from '../../../helpers/init_helpers'
import { render } from 'prettyjson'
import { line, logParamaters } from '../../../helpers/logs'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        const { address: addressProviderAddress } = await deployments.get(
            ADDRESS_PROVIDER_ID
        )
        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )

        const protocolConfiguratorLibrairies =
            await getProtocolConfiguratorLibraries()

        // Deploy Protocol configurator contract

        const ProtocolConfiguratorArtifact = await deploy(
            PROTOCOL_CONFIGURATOR_ID,
            {
                contract: 'ProtocolConfigurator',
                from: deployer,
                args: [addressProviderAddress],
                libraries: {
                    ...protocolConfiguratorLibrairies,
                },
                ...COMMON_DEPLOY_PARAMS,
            }
        )

        let configurator = await addressProviderInstance[
            'getContract(bytes32)'
        ](PROTOCOL_CONFIGURATOR)
        let isConfiguratorAdded =
            configurator === ProtocolConfiguratorArtifact.address

        // register the contract to the ACL_MANAGER
        if (!isConfiguratorAdded) {
            console.log(
                'registring contract PROTOCOL_CONFIGURATOR in the AddressProvider'
            )
            waitForTx(
                await addressProviderInstance.addContract(
                    PROTOCOL_CONFIGURATOR,
                    ProtocolConfiguratorArtifact.address
                )
            )
        }
        deployments.log(
            `[Deployments] PROTOCOL_CONFIGURATOR is registered to ${ProtocolConfiguratorArtifact.address}`
        )

        /// RETRIBUTION PARAMS

        let retribParams = await getRetributionParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })

        let isUpdated =
            retribParams?.affiliate.toString() ===
            RETRIBUTION_PARAMS.affiliate.toString()

        if (!isUpdated) {
            await updateRetributionsParams(
                ProtocolConfiguratorArtifact.address,
                RETRIBUTION_PARAMS
            )
            retribParams = await getRetributionParams()
        }

        logParamaters({
            title: 'Retribution parameters',
            object: retribParams,
        })

        /// BUYER ENTRY PARAMS

        let buyerEntryParams = await getBuyerEntryParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            buyerEntryParams?.currencyValue.toString() ===
            BUYER_ENTRY_PARAMS.currencyValue.toString()

        if (!isUpdated) {
            await updateBuyerEntryParams(
                ProtocolConfiguratorArtifact.address,
                BUYER_ENTRY_PARAMS
            )
            buyerEntryParams = await getBuyerEntryParams()
        }

        logParamaters({
            title: 'Buyer Entry paramaters',
            object: buyerEntryParams,
        })

        /// SELLER ENTRY PARAMS

        let sellerEntryParams = await getSellerEntryParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            sellerEntryParams?.currencyValue.toString() ===
            SELLER_ENTRY_PARAMS.currencyValue.toString()
        if (!isUpdated) {
            await updateSellerEntryParams(
                ProtocolConfiguratorArtifact.address,
                SELLER_ENTRY_PARAMS
            )
            sellerEntryParams = await getSellerEntryParams()
        }

        logParamaters({
            title: 'Seller Entry paramaters',
            object: sellerEntryParams,
        })

        /// GIG CREATION PARAMS

        let gigCreationParams = await getGigCreationParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            gigCreationParams?.currencyValue.toString() ===
            GIG_CREATION_PARAMS.currencyValue.toString()
        if (!isUpdated) {
            await updateGigCreationParams(
                ProtocolConfiguratorArtifact.address,
                GIG_CREATION_PARAMS
            )
            console.log('done')
            gigCreationParams = await getGigCreationParams()
                .then((data) => {
                    return data
                })
                .catch(() => {
                    return null
                })
            console.log('fetch')
        }
        logParamaters({
            title: 'Gig creation paramaters',
            object: gigCreationParams,
        })

        /// PROTOCOL DELAYS

        let delays = await getDelaysTimestamp()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            delays?.appeal.toString() === DELAYS_TIMESTAMP.appeal.toString()
        if (!isUpdated) {
            await updateDelayTimestamp(
                ProtocolConfiguratorArtifact.address,
                DELAYS_TIMESTAMP
            )

            delays = await getDelaysTimestamp()
                .then((data) => {
                    return data
                })
                .catch(() => {
                    return null
                })
        }

        logParamaters({
            title: 'Protocol delays timestamp',
            object: delays,
        })

        /// SELLER ORDER PARAMS

        let sellerOrderParams = await getSellerOrderParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            sellerOrderParams?.flat.toString() ===
            SELLER_ORDER_FEES_PARAMS.flat.toString()
        if (!isUpdated) {
            await updateSellerOrderParams(
                ProtocolConfiguratorArtifact.address,
                SELLER_ORDER_FEES_PARAMS
            )
            sellerOrderParams = await getSellerOrderParams()
                .then((data) => {
                    return data
                })
                .catch(() => {
                    return null
                })
        }

        logParamaters({
            title: 'Seller order parameters',
            object: sellerOrderParams,
        })

        /// ORDER CREATION PARAMS

        let orderCreationParams = await getOrderCreationParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            orderCreationParams?.flat.toString() ===
            ORDER_CREATION_PARAMS.flat.toString()
        if (!isUpdated) {
            await updateOrderCreationParams(
                ProtocolConfiguratorArtifact.address,
                ORDER_CREATION_PARAMS
            )
            orderCreationParams = await getOrderCreationParams()
                .then((data) => {
                    return data
                })
                .catch(() => {
                    return null
                })
        }

        logParamaters({
            title: 'Order creation parameters',
            object: orderCreationParams,
        })

        /// DISPUTE PARAMS

        let disputeParams = await getDisputeParams()
            .then((data) => {
                return data
            })
            .catch(() => {
                return null
            })
        isUpdated =
            disputeParams?.alpha.toString() === DISPUTE_PARAMS.alpha.toString()
        if (!isUpdated) {
            await updateDisputeParams(
                ProtocolConfiguratorArtifact.address,
                DISPUTE_PARAMS
            )
            disputeParams = await getDisputeParams()
                .then((data) => {
                    return data
                })
                .catch(() => {
                    return null
                })
        }

        logParamaters({
            title: 'Dispute parameters',
            object: disputeParams,
        })
    })
}
func.id = 'protocolConfigurator'
func.tags = ['marketplace', 'configurator']
export default func
