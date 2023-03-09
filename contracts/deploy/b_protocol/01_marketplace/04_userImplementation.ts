import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    DAT_ID,
    USER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getMockUSDC,
    getUser,
    getUserLibraries,
} from '../../../helpers/contract_getters'
import {
    BUYER_ADMIN_ROLE,
    SELLER_ADMIN_ROLE,
    USER,
    XP_GIVER_ROLE,
} from '../../../helpers/constants'
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

        const userLibraries = await getUserLibraries()
        // Deploy account contract
        const userArtifact = await deploy(USER_IMPL_ID, {
            contract: 'User',
            from: deployer,
            args: [addressProviderAddress],
            libraries: {
                ...userLibraries,
            },
            ...COMMON_DEPLOY_PARAMS,
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager()
        let mUSDCInstance = await getMockUSDC(mUSDCAddress)

        let user = (
            await addressProviderInstance['getContract(bytes32)'](USER)
        ).toString()
        let isAdded = user === userArtifact.address.toString()

        // 4. set the ACL_ADMIN
        if (!isAdded) {
            console.log('adding USER contract')
            waitForTx(
                await addressProviderInstance.addContract(
                    USER,
                    userArtifact.address
                )
            )
            user = await addressProviderInstance['getContract(bytes32)'](USER)
        }
        deployments.log(
            `[Deployments] USER is registered to ${userArtifact.address}\n= (${user})`
        )

        let isBuyerRole = await aclManager.hasRole(BUYER_ADMIN_ROLE, user)
        if (!isBuyerRole) {
            await setupBuyerAdminRoles(aclManager.address, userArtifact.address)
            isBuyerRole = await aclManager.hasRole(BUYER_ADMIN_ROLE, user)
        }

        let isSellerRole = await aclManager.hasRole(SELLER_ADMIN_ROLE, user)
        if (!isSellerRole) {
            await setupSellerAdminRoles(
                aclManager.address,
                userArtifact.address
            )
            isSellerRole = await aclManager.hasRole(SELLER_ADMIN_ROLE, user)
        }

        let UserInstance = await getUser(userArtifact.address)
        let allowance = (
            await mUSDCInstance.allowance(userArtifact.address, datAddress)
        ).toString()

        if (allowance === '0') {
            console.log(
                "User contracts approves MAX_UINT to mUSDC for DAT's address"
            )
            waitForTx(await UserInstance.approve(mUSDCAddress))
            allowance = (
                await mUSDCInstance.allowance(userArtifact.address, datAddress)
            ).toString()
        }

        deployments.log(
            `[Deployments] USER (${userArtifact.address}) allowance ${allowance} mUSDC (${mUSDCAddress}) to DAT (${datAddress})`
        )

        let hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, user)

        if (!hasXPGiverRole) {
            console.log('adding XP_GIVER_ROLE to USER')
            waitForTx(
                await aclManager.grantRole(XP_GIVER_ROLE, userArtifact.address)
            )
            hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, user)
        }

        deployments.log(`[Deployments] USER has the role XP_GIVER_ROLE`)
    })
}

func.id = 'userImplementation'
func.tags = ['marketplace']
export default func
