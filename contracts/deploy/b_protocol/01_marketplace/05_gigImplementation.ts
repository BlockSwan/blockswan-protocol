import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    DAT_ID,
    GIG_IMPL_ID,
    USER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getGigLibraries,
    getMockUSDC,
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
        const { address: datAddress } = await deployments.get(DAT_ID)

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
        let mUSDCInstance = await getMockUSDC(mUSDCAddress)

        let gig = (
            await addressProviderInstance['getContract(bytes32)'](GIG)
        ).toString()
        let isAdded = gig === gigArtifact.address.toString()

        if (!isAdded) {
            console.log('adding GIG contract')
            waitForTx(
                await addressProviderInstance.addContract(
                    GIG,
                    gigArtifact.address
                )
            )
            gig = (
                await addressProviderInstance['getContract(bytes32)'](GIG)
            ).toString()
        }
        deployments.log(
            `[Deployments] GIG is registered to ${gigArtifact.address}`
        )
        let GigInstance = await getUser(gigArtifact.address)

        let allowance = (
            await mUSDCInstance.allowance(gigArtifact.address, datAddress)
        ).toString()

        if (allowance === '0') {
            console.log("GIG approves MAX_UINT to mUSDC for DAT's address")
            waitForTx(await GigInstance.approve(mUSDCAddress))
            allowance = (
                await mUSDCInstance.allowance(gigArtifact.address, datAddress)
            ).toString()
        }
        deployments.log(
            `[Deployments] GIG (${gigArtifact.address}) allowance ${allowance} mUSDC (${mUSDCAddress}) to DAT (${datAddress})`
        )

        let hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, gig)

        if (!hasXPGiverRole) {
            console.log('adding XP_GIVER_ROLE to GIG')
            waitForTx(
                await aclManager.grantRole(XP_GIVER_ROLE, gigArtifact.address)
            )
            hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, gig)
        }

        deployments.log(`[Deployments] GIG has the role XP_GIVER_ROLE`)
    })
}

func.id = 'gigImplementation'
func.tags = ['marketplace']
export default func
