import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
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
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager(aclManagerArtifact.address)

        // register the ACL_MANAGER
        waitForTx(
            await addressProviderInstance.addContract(
                ACL_MANAGER,
                aclManagerArtifact.address
            )
        )
        // give the PROTOCOL_ADMIN_ROLE
        waitForTx(await aclManager.grantRole(PROTOCOL_ADMIN_ROLE, aclAdmin))
        deployments.log(
            `[Deployments] PROTOCOL_ADMIN_ROLE granted to ${aclAdmin}`
        )
    })
}

func.id = 'aclPermissions'
func.tags = ['marketplace', 'permissions']
export default func
