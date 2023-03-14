import { COMMON_DEPLOY_PARAMS } from '../../helpers/envs'
import { waitForTx } from '../../utilities/tx'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../helpers/makeDeployment'
import {
    FAUCET_AMOUNTS,
    FAUCET_DELAYS,
    MIN_INVESTMENT,
    ONE_ETH,
    PRETTYJSON,
} from '../../helpers/constants'
import { render } from 'prettyjson'
import {
    getFaucetSettings,
    getMinimalForwarder,
    getMockUSDC,
} from '../../helpers/contract_getters'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()
        let forwarder = await getMinimalForwarder()
        const faucetArtifact = await deploy('Faucet', {
            from: deployer,
            args: [FAUCET_DELAYS, FAUCET_AMOUNTS, forwarder.address],
            ...COMMON_DEPLOY_PARAMS,
        })

        let mUSDC = await getMockUSDC()

        const faucetInstance = await hre.ethers.getContractAt(
            faucetArtifact.abi,
            faucetArtifact.address
        )

        let erc20Balance = (
            await mUSDC.balanceOf(faucetArtifact.address)
        ).toNumber()
        if (erc20Balance < Number(MIN_INVESTMENT)) {
            waitForTx(await mUSDC.mint(Number(MIN_INVESTMENT) * 10))
            waitForTx(
                await mUSDC.transfer(
                    faucetInstance.address,
                    Number(MIN_INVESTMENT) * 10
                )
            )
            console.log(
                'Minting MIN_INVESTMENT * 10 and transferring to faucet'
            )
            erc20Balance = (
                await mUSDC.balanceOf(faucetArtifact.address)
            ).toNumber()
        }
        console.log(`Faucet has ${erc20Balance} mUSDC`)

        let nativeBalance = await hre.ethers.provider.getBalance(
            faucetArtifact.address
        )
        if (nativeBalance < ONE_ETH) {
            console.log(
                "Faucet doesn't have enough native balance, sending 10 MATIC"
            )
            waitForTx(
                await faucetInstance.fundNative({
                    value: hre.ethers.utils.parseEther('10'),
                })
            )
            nativeBalance = await hre.ethers.provider.getBalance(
                faucetArtifact.address
            )
        }
        deployments.log(`\nFaucet has ${nativeBalance} native tokens`)
        let params = await getFaucetSettings(faucetArtifact.address)
        console.log(render(params, PRETTYJSON))
    })
}

func.id = 'Faucet'
func.tags = ['periphery', 'faucet']
export default func
