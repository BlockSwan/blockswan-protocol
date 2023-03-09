import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    USER_IMPL_ID,
    XP_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getUser,
    getUserLibraries,
    getXP,
} from '../../../helpers/contract_getters'
import {
    BECOME_BUYER,
    USER,
    XP,
    XP_GIVER_ROLE,
} from '../../../helpers/constants'
import {
    setupBuyerAdminRoles,
    setupSellerAdminRoles,
    setupXPKeys,
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

        // Deploy XP contract
        const XPArtifact = await deploy(XP_ID, {
            contract: 'XP',
            from: deployer,
            args: [addressProviderAddress],
            ...COMMON_DEPLOY_PARAMS,
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )

        let xp = await addressProviderInstance['getContract(bytes32)'](XP)
        let isAdded = xp === XPArtifact.address

        if (!isAdded) {
            console.log('Adding XP to address provider')
            waitForTx(
                await addressProviderInstance.addContract(
                    XP,
                    XPArtifact.address
                )
            )
            xp = await addressProviderInstance['getContract(bytes32)'](XP)
        }
        // Register the XP contract
        deployments.log(
            `[Deployments] XP is registered to ${XPArtifact.address}-(${xp})`
        )

        let XPInstance = await getXP(XPArtifact.address)
        const xpkey = await XPInstance.getXpAmount(BECOME_BUYER)

        if (!xpkey[0]) {
            await setupXPKeys(XPArtifact.address)
        }
        console.log('XP keys are set up')
    })
}

func.id = 'xp'
func.tags = ['marketplace']
export default func
