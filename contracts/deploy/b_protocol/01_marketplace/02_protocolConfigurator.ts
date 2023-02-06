import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
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
import { line } from '../../../helpers/logs'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        const { address: addressProviderAddress } = await deployments.get(
            ADDRESS_PROVIDER_ID
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

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        // register the contract to the ACL_MANAGER
        waitForTx(
            await addressProviderInstance.addContract(
                PROTOCOL_CONFIGURATOR,
                ProtocolConfiguratorArtifact.address
            )
        )
        deployments.log(
            `[Deployments] PROTOCOL_CONFIGURATOR is registered to ${ProtocolConfiguratorArtifact.address}`
        )
        await updateRetributionsParams(
            ProtocolConfiguratorArtifact.address,
            RETRIBUTION_PARAMS
        )
        let retribParams = await getRetributionParams()
        console.log(`New retribution params:\n`)
        console.log(line(30))
        console.log(render(retribParams, PRETTYJSON))
        console.log(line(30))

        await updateBuyerEntryParams(
            ProtocolConfiguratorArtifact.address,
            BUYER_ENTRY_PARAMS
        )
        let buyerEntryParams = await getBuyerEntryParams()
        console.log(`New buyer entry params:\n`)
        console.log(line(30))
        console.log(render(buyerEntryParams, PRETTYJSON))
        console.log(line(30))

        await updateSellerEntryParams(
            ProtocolConfiguratorArtifact.address,
            SELLER_ENTRY_PARAMS
        )
        let sellerEntryParams = await getSellerEntryParams()
        console.log(`New seller entry params:\n`)
        console.log(line(30))
        console.log(render(sellerEntryParams, PRETTYJSON))
        console.log(line(30))

        await updateGigCreationParams(
            ProtocolConfiguratorArtifact.address,
            GIG_CREATION_PARAMS
        )
        let gigCreationParams = await getGigCreationParams()
        console.log(`New gig creation params:\n`)
        console.log(line(30))
        console.log(render(gigCreationParams, PRETTYJSON))
        console.log(line(30))

        await updateDelayTimestamp(
            ProtocolConfiguratorArtifact.address,
            DELAYS_TIMESTAMP
        )
        let delays = await getDelaysTimestamp()
        console.log(`New protocol delays timestamp:\n`)
        console.log(line(30))
        console.log(render(delays, PRETTYJSON))
        console.log(line(30))

        await updateSellerOrderParams(
            ProtocolConfiguratorArtifact.address,
            SELLER_ORDER_FEES_PARAMS
        )
        let sellerOrderParams = await getSellerOrderParams()
        console.log(`New protocol seller fees on order:\n`)
        console.log(line(30))
        console.log(render(sellerOrderParams, PRETTYJSON))
        console.log(line(30))

        await updateOrderCreationParams(
            ProtocolConfiguratorArtifact.address,
            ORDER_CREATION_PARAMS
        )
        let orderCreationParams = await getOrderCreationParams()
        console.log(`New protocol order creation params:\n`)
        console.log(line(30))
        console.log(render(orderCreationParams, PRETTYJSON))
        console.log(line(30))

        await updateDisputeParams(
            ProtocolConfiguratorArtifact.address,
            DISPUTE_PARAMS
        )
        let disputeParams = await getDisputeParams()
        console.log(`New dispute params:\n`)
        console.log(line(30))
        console.log(render(disputeParams, PRETTYJSON))
        console.log(line(30))
    })
}
func.id = 'protocolConfigurator'
func.tags = ['marketplace', 'configurator']
export default func
