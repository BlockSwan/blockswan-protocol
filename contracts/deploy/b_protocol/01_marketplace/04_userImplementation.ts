import { waitForTx } from '../../../utilities/tx';
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs';
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment';
import { ADDRESS_PROVIDER_ID, USER_IMPL_ID } from '../../../helpers/deploy_ids';
import { getACLManager, getAddressProvider, getUser, getUserLibraries } from '../../../helpers/contract_getters';
import { USER, XP_GIVER_ROLE } from '../../../helpers/constants';
import { setupBuyerAdminRoles, setupSellerAdminRoles } from '../../../helpers/init_helpers';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	await makeDeployment(func.id, async () => {
		const { getNamedAccounts, deployments } = hre;
		const { deploy } = deployments;
		const {
			deployer
		} = await getNamedAccounts()

		const { address: addressProviderAddress } = await deployments.get(ADDRESS_PROVIDER_ID);
		const { address: mUSDCAddress } = await deployments.get("mUSDC");


		const userLibraries = await getUserLibraries();
		// Deploy account contract
		const userArtifact = await deploy(USER_IMPL_ID, {
			contract: "User",
			from: deployer,
			args: [addressProviderAddress],
			libraries: {
				...userLibraries,
			},
			...COMMON_DEPLOY_PARAMS,
		});

		let addressProviderInstance = await getAddressProvider(addressProviderAddress);
		let aclManager = await getACLManager();

		// 4. set the ACL_ADMIN
		waitForTx(
			await addressProviderInstance.addContract(USER, userArtifact.address)
		)
		deployments.log(`[Deployments] USER is registered to ${ userArtifact.address }`)
		await setupBuyerAdminRoles(aclManager.address, userArtifact.address);
		await setupSellerAdminRoles(aclManager.address, userArtifact.address);
		let UserInstance = await getUser(userArtifact.address);
		deployments.log(`[Deployments] USER approved MAX_UINT to mUSDC at ${ userArtifact.address }`)
		waitForTx(
			await UserInstance.approve(mUSDCAddress)
		)
		// give the XP_GIVER_ROLE
		waitForTx(
			await aclManager.grantRole(XP_GIVER_ROLE, userArtifact.address)
		)
		deployments.log(`[Deployments] USER has the role XP_GIVER_ROLE`)
	})
}

func.id = "userImplementation";
func.tags = ["marketplace"];
export default func