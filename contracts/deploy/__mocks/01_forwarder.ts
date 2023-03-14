import { Signer } from 'ethers'
import { waitForTx } from '../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../helpers/makeDeployment'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy, log } = deployments
        const { deployer } = await getNamedAccounts()

        let forwarderArtefact = await deploy('MinimalForwarder', {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
        })
        log(`MinimalForwarder deployed at ${forwarderArtefact.address}`)
    })
}

func.id = 'forwarder'
func.tags = ['core', 'forwarder']
export default func
