import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS, MARKETPLACE_NAME } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ACL_MANAGER_ID,
    ADDRESS_PROVIDER_ID,
    USER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getUserLibraries,
} from '../../../helpers/contract_getters'
import {
    ACL_MANAGER,
    PROTOCOL_ADMIN_ROLE,
    USER,
} from '../../../helpers/constants'
import { setupBuyerAdminRoles } from '../../../helpers/init_helpers'
import { DEFAULT_BLOCK_GAS_LIMIT } from '../../../hardhat_config_helpers'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer, aclAdmin } = await getNamedAccounts()

        const { address: addressProviderAddress } = await deployments.get(
            ADDRESS_PROVIDER_ID
        )

        // Deploy ACLManager contract
        const aclManagerArtifact = await deploy(ACL_MANAGER_ID, {
            from: deployer,
            contract: 'ACLManager',
            args: [addressProviderAddress],
            ...COMMON_DEPLOY_PARAMS,
            //    gasLimit: Number(DEFAULT_BLOCK_GAS_LIMIT) * 1000,
        })
        deployments.log(
            `[Deployments] ACLManager is deployed at ${aclManagerArtifact.address}`
        )

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager(aclManagerArtifact.address)

        let isContractSet =
            (await addressProviderInstance['getContract(bytes32)'](
                ACL_MANAGER
            )) === aclManagerArtifact.address

        // register the ACL_MANAGER
        if (!isContractSet) {
            console.log(
                `Adding contract ACL_MANAGER ${aclManagerArtifact.address} to address provider`
            )
            waitForTx(
                await addressProviderInstance.addContract(
                    ACL_MANAGER,
                    aclManagerArtifact.address
                )
            )
        }
        let hasrole = await aclManager.hasRole(PROTOCOL_ADMIN_ROLE, aclAdmin)

        if (!hasrole) {
            console.log(`Granting PROTOCOL_ADMIN_ROLE to ${aclAdmin}`)
            waitForTx(await aclManager.grantRole(PROTOCOL_ADMIN_ROLE, aclAdmin))
        }

        hasrole = await aclManager.hasRole(PROTOCOL_ADMIN_ROLE, aclAdmin)
    })
}

func.id = 'aclPermissions'
func.tags = ['marketplace', 'permissions']
export default func
