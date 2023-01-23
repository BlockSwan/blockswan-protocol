import { waitForTx } from '../../../utilities/tx';
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs';
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment';
import { ADDRESS_PROVIDER_ID, ORDER_IMPL_ID, } from '../../../helpers/deploy_ids';
import { getACLManager, getAddressProvider, getOrder, getOrderLibraries } from '../../../helpers/contract_getters';
import { ORDER, XP_GIVER_ROLE } from '../../../helpers/constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	await makeDeployment(func.id, async () => {
		const { getNamedAccounts, deployments } = hre;
		const { deploy } = deployments;
		const {
			deployer
		} = await getNamedAccounts()

		const { address: addressProviderAddress } = await deployments.get(ADDRESS_PROVIDER_ID);
		const { address: mUSDCAddress } = await deployments.get("mUSDC");

		const orderLibraries = await getOrderLibraries();
		// Deploy account contract
		const orderArtifact = await deploy(ORDER_IMPL_ID, {
			contract: "Order",
			from: deployer,
			args: [addressProviderAddress],
			libraries: {
				...orderLibraries,
			},
			...COMMON_DEPLOY_PARAMS,
		});

		let addressProviderInstance = await getAddressProvider(addressProviderAddress);
		let aclManager = await getACLManager();

		// 4. set the ACL_ADMIN
		waitForTx(
			await addressProviderInstance.addContract(ORDER, orderArtifact.address)
		)
		deployments.log(`[Deployments] ORDER is registered to ${ orderArtifact.address }`)
		let OrderInstance = await getOrder(orderArtifact.address);
		deployments.log(`[Deployments] ORDER approved MAX_UINT to mUSDC at ${ orderArtifact.address }`)
		waitForTx(
			await OrderInstance.approve(mUSDCAddress)
		)
		// give the XP_GIVER_ROLE
		waitForTx(
			await aclManager.grantRole(XP_GIVER_ROLE, orderArtifact.address)
		)
		deployments.log(`[Deployments] ORDER has the role XP_GIVER_ROLE`)
	})
}

func.id = "orderImplementation";
func.tags = ["marketplace"];
export default func