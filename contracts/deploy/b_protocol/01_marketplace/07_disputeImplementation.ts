import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    DAT_ID,
    DISPUTE_IMPL_ID,
    ORDER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getDispute,
    getDisputeLibraries,
    getMockUSDC,
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
        const { address: datAddress } = await deployments.get(DAT_ID)

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
        let mUSDCInstance = await getMockUSDC(mUSDCAddress)

        let dispute = (
            await addressProviderInstance['getContract(bytes32)'](DISPUTE)
        ).toString()
        let isAdded = dispute === disputeArtifact.address.toString()

        if (!isAdded) {
            console.log('adding DISPUTE contract')
            waitForTx(
                await addressProviderInstance.addContract(
                    DISPUTE,
                    disputeArtifact.address
                )
            )
            dispute = (
                await addressProviderInstance['getContract(bytes32)'](DISPUTE)
            ).toString()
        }

        deployments.log(
            `[Deployments] DISPUTE is registered to ${disputeArtifact.address}`
        )
        let DisputeInstance = await getDispute(disputeArtifact.address)

        let allowance = (
            await mUSDCInstance.allowance(disputeArtifact.address, datAddress)
        ).toString()

        if (allowance === '0') {
            console.log("DISPUTE approves MAX_UINT to mUSDC for DAT's address")
            waitForTx(await DisputeInstance.approve(mUSDCAddress))
            allowance = (
                await mUSDCInstance.allowance(
                    disputeArtifact.address,
                    datAddress
                )
            ).toString()
        }
        deployments.log(
            `[Deployments] DISPUTE (${disputeArtifact.address}) allowance ${allowance} mUSDC (${mUSDCAddress}) to DAT (${datAddress})`
        )
        let hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, dispute)

        if (!hasXPGiverRole) {
            console.log('adding XP_GIVER_ROLE to DISPUTE')
            waitForTx(
                await aclManager.grantRole(
                    XP_GIVER_ROLE,
                    disputeArtifact.address
                )
            )
            hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, dispute)
        }
        deployments.log(`[Deployments] DISPUTE has the role XP_GIVER_ROLE`)
    })
}

func.id = 'disputeImplementation'
func.tags = ['marketplace']
export default func
