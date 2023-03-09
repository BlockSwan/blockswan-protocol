import { COMMON_DEPLOY_PARAMS } from '../../helpers/envs'
import { waitForTx } from '../../utilities/tx'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../helpers/makeDeployment'
import { MIN_INVESTMENT, PRETTYJSON } from '../../helpers/constants'
import { render } from 'prettyjson'
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        let nativeBalance = await hre.ethers.provider.getBalance(deployer)
        console.log(
            render(
                {
                    deployer: deployer,
                    nativeBalance: nativeBalance.toString(),
                },
                PRETTYJSON
            ),
            '\n'
        )
        const mUSDC_artifact = await deploy('mUSDC', {
            from: deployer,
            args: [],
            ...COMMON_DEPLOY_PARAMS,
        })

        const mUSDC_instance = await hre.ethers.getContractAt(
            mUSDC_artifact.abi,
            mUSDC_artifact.address
        )
        let balance = await mUSDC_instance.balanceOf(deployer)
        let isDeployed: boolean = Number(balance) >= Number(MIN_INVESTMENT) * 2

        if (!isDeployed) {
            console.log(`Minting 2 * ${MIN_INVESTMENT} mUSDC to deployer`)
            await waitForTx(
                await mUSDC_instance.mint(Number(MIN_INVESTMENT) * 2)
            )
        }

        balance = await mUSDC_instance.balanceOf(deployer)

        deployments.log(
            `\n[Deployment] Deployer has ${balance} mUSDC (${mUSDC_artifact.address}) `
        )
    })
}

func.id = 'mUSDC'
func.tags = ['periphery', 'mock', 'usdc']
export default func
