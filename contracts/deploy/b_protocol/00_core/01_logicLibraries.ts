import { waitForTx } from './../../../utilities/tx';
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs';
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	await makeDeployment(func.id, async () => {
		const { getNamedAccounts, deployments } = hre;
		const { deploy } = deployments;
		const {
			deployer
		} = await getNamedAccounts()

		await deploy("UserLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
		});

		// await deploy("l_gig_logic", {
		// 	from: deployer,
		// 	...COMMON_DEPLOY_PARAMS,
		// });

	})
}

func.id = "logicLibraries";
func.tags = ["core", "logic"];
export default func