import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    DAT_ID,
    ORDER_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getMockUSDC,
    getOrder,
    getOrderLibraries,
} from '../../../helpers/contract_getters'
import { ORDER, XP_GIVER_ROLE } from '../../../helpers/constants'

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

        const orderLibraries = await getOrderLibraries()
        // Deploy account contract
        const orderArtifact = await deploy(ORDER_IMPL_ID, {
            contract: 'Order',
            from: deployer,
            args: [addressProviderAddress],
            libraries: {
                ...orderLibraries,
            },
            ...COMMON_DEPLOY_PARAMS,
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager()
        let mUSDCInstance = await getMockUSDC(mUSDCAddress)

        let order = (
            await addressProviderInstance['getContract(bytes32)'](ORDER)
        ).toString()
        let isAdded = order === orderArtifact.address.toString()

        if (!isAdded) {
            console.log('adding ORDER contract')
            waitForTx(
                await addressProviderInstance.addContract(
                    ORDER,
                    orderArtifact.address
                )
            )
            order = (
                await addressProviderInstance['getContract(bytes32)'](ORDER)
            ).toString()
        }
        deployments.log(
            `[Deployments] ORDER is registered to ${orderArtifact.address}`
        )
        let OrderInstance = await getOrder(orderArtifact.address)
        let allowance = (
            await mUSDCInstance.allowance(orderArtifact.address, datAddress)
        ).toString()

        if (allowance === '0') {
            console.log("ORDER approves MAX_UINT to mUSDC for DAT's address")
            waitForTx(await OrderInstance.approve(mUSDCAddress))
            allowance = (
                await mUSDCInstance.allowance(orderArtifact.address, datAddress)
            ).toString()
        }
        deployments.log(
            `[Deployments] ORDER (${orderArtifact.address}) allowance ${allowance} mUSDC (${mUSDCAddress}) to DAT (${datAddress})`
        )

        let hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, order)

        if (!hasXPGiverRole) {
            console.log('adding XP_GIVER_ROLE to ORDER')
            waitForTx(
                await aclManager.grantRole(XP_GIVER_ROLE, orderArtifact.address)
            )
            hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, order)
        }

        deployments.log(`[Deployments] ORDER has the role XP_GIVER_ROLE`)
    })
}

func.id = 'orderImplementation'
func.tags = ['marketplace']
export default func
