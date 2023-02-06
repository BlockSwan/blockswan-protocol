import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    GIG_IMPL_ID,
    USER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getGigLibraries,
    getUser,
    getUserLibraries,
} from '../../../helpers/contract_getters'
import { GIG, USER, XP_GIVER_ROLE } from '../../../helpers/constants'
import {
    setupBuyerAdminRoles,
    setupSellerAdminRoles,
} from '../../../helpers/init_helpers'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        const { address: addressProviderAddress } = await deployments.get(
            ADDRESS_PROVIDER_ID
        )
        const { address: mUSDCAddress } = await deployments.get('mUSDC')

        const gigLibraries = await getGigLibraries()
        // Deploy account contract
        const gigArtifact = await deploy(GIG_IMPL_ID, {
            contract: 'Gig',
            from: deployer,
            args: [addressProviderAddress],
            libraries: {
                ...gigLibraries,
            },
            ...COMMON_DEPLOY_PARAMS,
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager()

        // 4. set the ACL_ADMIN
        waitForTx(
            await addressProviderInstance.addContract(GIG, gigArtifact.address)
        )
        deployments.log(
            `[Deployments] GIG is registered to ${gigArtifact.address}`
        )
        let GigInstance = await getUser(gigArtifact.address)
        deployments.log(
            `[Deployments] GIG approved MAX_UINT to mUSDC at ${gigArtifact.address}`
        )
        waitForTx(await GigInstance.approve(mUSDCAddress))
        // give the XP_GIVER_ROLE
        waitForTx(
            await aclManager.grantRole(XP_GIVER_ROLE, gigArtifact.address)
        )
        deployments.log(`[Deployments] GIG has the role XP_GIVER_ROLE`)
    })
}

func.id = 'gigImplementation'
func.tags = ['marketplace']
export default func
