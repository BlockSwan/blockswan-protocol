import { waitForTx } from './../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS, MARKETPLACE_NAME } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import { checkRequiredEnvironment } from '../../../helpers/marketPlaceConfigHelpers'
import { ACL_ADMIN, CORE_VERSION, DAT } from '../../../helpers/constants'
import { ADDRESS_PROVIDER_ID, DAT_ID } from '../../../helpers/deploy_ids'
import { addMarketplaceToRegistry } from '../../../helpers/init_helpers'
import { AddressProvider } from '../../../types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer, aclAdmin } = await getNamedAccounts()
        let marketplaceId = '10' // to be fetch by mocck impl.
        // 1. Deploy AddressProvider
        const addressProviderArtifact = await deploy(ADDRESS_PROVIDER_ID, {
            from: deployer,
            contract: 'AddressProvider',
            args: [MARKETPLACE_NAME, deployer],
            ...COMMON_DEPLOY_PARAMS,
        })
        const addressProviderInstance = (await hre.ethers.getContractAt(
            addressProviderArtifact.abi,
            addressProviderArtifact.address
        )) as AddressProvider

        let id = await addressProviderInstance.getMarketplaceId()
        let isIdSet = id === marketplaceId

        if (!isIdSet) {
            console.log('Setting the marketplace id at AddressProvider')
            // 2. Set the marketplace_id
            waitForTx(
                await addressProviderInstance.setMarketplaceId(marketplaceId)
            )
            console.log('Adding the marketplace to the ProviderRegistry')
            // 3. Add addresses_provider to Registry
            await addMarketplaceToRegistry(
                marketplaceId,
                addressProviderArtifact.address
            )
            id = await addressProviderInstance.getMarketplaceId()
        }
        console.log('Marketplace id: ', id)

        let admin = await addressProviderInstance['getContract(bytes32)'](
            ACL_ADMIN
        )
        let isAclAdminSet = admin === aclAdmin

        if (!isAclAdminSet) {
            console.log('setting the ACL_ADMIN at AddressProvider')
            waitForTx(
                await addressProviderInstance.addContract(ACL_ADMIN, deployer)
            )
            admin = await addressProviderInstance['getContract(bytes32)'](
                ACL_ADMIN
            )
        }
        deployments.log(
            `[Deployments] ACL_ADMIN is registered to ${deployer}\n=(${admin})`
        )

        let dat = await addressProviderInstance['getContract(bytes32)'](DAT)
        // 5. register the DAT
        const { address: datAddress } = await deployments.get(DAT_ID)
        let isDatSet = dat === datAddress
        if (!isDatSet) {
            console.log('setting the DAT at AddressProvider')
            waitForTx(
                await addressProviderInstance.addContract(DAT, datAddress)
            )
            dat = await addressProviderInstance['getContract(bytes32)'](DAT)
        }
        deployments.log(
            `[Deployments] DAT is registered to ${datAddress}\n=(${dat})`
        )

        // Deploy ProtocolDataProvider getters contract
        // // Set the ProtocolDataProvider if is not already set at addresses provider
    })
}

func.id = `AddressProvider:${MARKETPLACE_NAME}:blockswan-core@${CORE_VERSION}`
func.tags = ['marketplace', 'provider']
func.dependencies = ['periphery', 'core'] // "periphery-pre", "token-setup"
func.skip = async () => checkRequiredEnvironment()
export default func
