import { waitForTx } from '../../../utilities/tx';
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs';
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	await makeDeployment(func.id, async () => {
		const { getNamedAccounts, deployments } = hre;
		const { deploy } = deployments;
		const {
			deployer, registryOwner
		} = await getNamedAccounts()

		const ProviderRegistryArtifact = await deploy(
			'ProviderRegistry',
			{
				from: deployer,
				args: [deployer],
				...COMMON_DEPLOY_PARAMS,
			},
		)
		const RegistryInstance = await hre.ethers.getContractAt(
			ProviderRegistryArtifact.abi,
			ProviderRegistryArtifact.address,
		)
		await waitForTx(
			await RegistryInstance.transferOwnership(
				registryOwner,
			),
		)

		deployments.log(
			`[Deployment] Transferred ownership of ProviderRegistry to: ${ registryOwner } `,
		)

	})
}

func.id = 'ProviderRegistry';
func.tags = ['core', 'registry'];
export default func