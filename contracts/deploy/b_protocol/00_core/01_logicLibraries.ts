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


		let ParamsLogic = await deploy("ParamsLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
		})


		let InviterLogic = await deploy("InviterLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
		});

		let UserDataLogic = await deploy("UserDataLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
		});

		await deploy("UserLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
			libraries: {
				InviterLogic: InviterLogic.address,
				UserDataLogic: UserDataLogic.address
			}
		});

		let GigDataLogic = await deploy("GigDataLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
		});

		await deploy("GigLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
			libraries: {
				GigDataLogic: GigDataLogic.address,
			}
		});

		let OrderDataLogic = await deploy("OrderDataLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
		});

		await deploy("OrderLogic", {
			from: deployer,
			...COMMON_DEPLOY_PARAMS,
			libraries: {
				OrderDataLogic: OrderDataLogic.address,
			}
		});

	})
}

func.id = "logicLibraries";
func.tags = ["core", "logic"];
export default func