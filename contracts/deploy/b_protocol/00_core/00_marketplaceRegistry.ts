import { Signer } from 'ethers'
import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import { time } from '@nomicfoundation/hardhat-network-helpers'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer, registryOwner } = await getNamedAccounts()

        const ProviderRegistryArtifact = await deploy('ProviderRegistry', {
            from: deployer,
            args: [deployer],
            ...COMMON_DEPLOY_PARAMS,
        })
        const RegistryInstance = await hre.ethers.getContractAt(
            ProviderRegistryArtifact.abi,
            ProviderRegistryArtifact.address
        )
        let owner = await RegistryInstance.owner()
        console.log(`ProviderRegistry owner is ${owner}`)
        let isOwnerShipAlreadyTransferred: boolean = owner === registryOwner

        if (!isOwnerShipAlreadyTransferred) {
            console.log(
                `Transferring ownership of ProviderRegistry to:\n
                ${registryOwner}`
            )
            waitForTx(await RegistryInstance.transferOwnership(registryOwner))
        }
        owner = await RegistryInstance.owner()
        deployments.log(
            `[Deployment] corresponding to account: ${registryOwner}\n= (${owner})`
        )
    })
}

func.id = 'ProviderRegistry'
func.tags = ['core', 'registry']
export default func
