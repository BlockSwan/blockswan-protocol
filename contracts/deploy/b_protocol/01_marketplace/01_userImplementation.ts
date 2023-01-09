import { waitForTx } from '../../../utilities/tx';
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs';
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment';
import { ADDRESS_PROVIDER_ID, USER_IMPL_ID } from '../../../helpers/deploy_ids';
import { getUserLibraries } from '../../../helpers/contract_getters';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	await makeDeployment(func.id, async () => {
		const { getNamedAccounts, deployments } = hre;
		const { deploy } = deployments;
		const {
			deployer
		} = await getNamedAccounts()

		const { address: addressProviderAddress } = await deployments.get(ADDRESS_PROVIDER_ID);


		const userLibraries = await getUserLibraries();
		// Deploy account contract
		await deploy(USER_IMPL_ID, {
			contract: "User",
			from: deployer,
			args: [addressProviderAddress],
			libraries: {
				...userLibraries,
			},
			...COMMON_DEPLOY_PARAMS,
		});
	})
}

func.id = "userImplementation";
func.tags = ["marketplace"];
export default func