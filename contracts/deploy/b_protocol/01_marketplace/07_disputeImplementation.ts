import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    DISPUTE_IMPL_ID,
    ORDER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getDispute,
    getDisputeLibraries,
    getOrder,
    getOrderLibraries,
} from '../../../helpers/contract_getters'
import { DISPUTE, ORDER, XP_GIVER_ROLE } from '../../../helpers/constants'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        const { address: addressProviderAddress } = await deployments.get(
            ADDRESS_PROVIDER_ID
        )
        const { address: mUSDCAddress } = await deployments.get('mUSDC')

        const disputeLibraries = await getDisputeLibraries()
        // Deploy account contract
        const disputeArtifact = await deploy(DISPUTE_IMPL_ID, {
            contract: 'Dispute',
            from: deployer,
            args: [addressProviderAddress],
            libraries: {
                ...disputeLibraries,
            },
            ...COMMON_DEPLOY_PARAMS,
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager()

        // 4. set the ACL_ADMIN
        waitForTx(
            await addressProviderInstance.addContract(
                DISPUTE,
                disputeArtifact.address
            )
        )
        deployments.log(
            `[Deployments] DISPUTE is registered to ${disputeArtifact.address}`
        )
        let DisputeInstance = await getDispute(disputeArtifact.address)
        deployments.log(
            `[Deployments] DISPUTE approved MAX_UINT to mUSDC at ${disputeArtifact.address}`
        )
        waitForTx(await DisputeInstance.approve(mUSDCAddress))
        // give the XP_GIVER_ROLE
        waitForTx(
            await aclManager.grantRole(XP_GIVER_ROLE, disputeArtifact.address)
        )
        deployments.log(`[Deployments] DISPUTE has the role XP_GIVER_ROLE`)
    })
}

func.id = 'disputeImplementation'
func.tags = ['marketplace']
export default func
