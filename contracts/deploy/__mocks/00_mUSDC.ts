import { COMMON_DEPLOY_PARAMS } from '../../helpers/envs'
import { waitForTx } from '../../utilities/tx'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { bgBlue } from 'kleur'
import makeDeployment from '../../helpers/makeDeployment'
import { MIN_INVESTMENT } from '../../helpers/constants'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        console.log('Using account:\n', bgBlue(`${deployer}`), ' \n')

        const mUSDC_artifact = await deploy('mUSDC', {
            from: deployer,
            args: [],
            ...COMMON_DEPLOY_PARAMS,
        })

        const mUSDC_instance = await hre.ethers.getContractAt(
            mUSDC_artifact.abi,
            mUSDC_artifact.address
        )

        await waitForTx(await mUSDC_instance.mint(parseInt(MIN_INVESTMENT) * 2))

        const balance = await mUSDC_instance.balanceOf(deployer)

        deployments.log(
            `\n[Deployment] Deployer minted ${balance} mUSDC at: ${mUSDC_artifact.address} `
        )
    })
}

func.id = 'mUSDC'
func.tags = ['periphery', 'mock', 'usdc']
export default func
