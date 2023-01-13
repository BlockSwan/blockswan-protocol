import { waitForTx } from '../../../utilities/tx';
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs';
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment';
import { ADDRESS_PROVIDER_ID, PROTOCOL_CONFIGURATOR_ID } from '../../../helpers/deploy_ids';
import { getAddressProvider, getBuyerEntryParams, getProtocolConfiguratorLibraries, getRetributionParams, getUserLibraries } from '../../../helpers/contract_getters';
import { BUYER_ENTRY_PARAMS, PRETTYJSON, PROTOCOL_CONFIGURATOR, RETRIBUTION_PARAMS } from '../../../helpers/constants';
import { setupBuyerAdminRoles, updateBuyerEntryParams, updateRetributionsParams } from '../../../helpers/init_helpers';
import { render } from 'prettyjson';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	await makeDeployment(func.id, async () => {
		const { getNamedAccounts, deployments } = hre;
		const { deploy } = deployments;
		const {
			deployer
		} = await getNamedAccounts()

		const { address: addressProviderAddress } = await deployments.get(ADDRESS_PROVIDER_ID);

		const protocolConfiguratorLibrairies = await getProtocolConfiguratorLibraries()

		// Deploy Protocol configurator contract

		const ProtocolConfiguratorArtifact = await deploy(PROTOCOL_CONFIGURATOR_ID, {
			contract: "ProtocolConfigurator",
			from: deployer,
			args: [addressProviderAddress],
			libraries: {
				...protocolConfiguratorLibrairies
			},
			...COMMON_DEPLOY_PARAMS,
		});

		let addressProviderInstance = await getAddressProvider(addressProviderAddress);
		// register the contract to the ACL_MANAGER
		waitForTx(
			await addressProviderInstance.addContract(PROTOCOL_CONFIGURATOR, ProtocolConfiguratorArtifact.address)
		)
		deployments.log(`[Deployments] PROTOCOL_CONFIGURATOR is registered to ${ ProtocolConfiguratorArtifact.address }`)
		await updateRetributionsParams(ProtocolConfiguratorArtifact.address, RETRIBUTION_PARAMS);
		let retribParams = await getRetributionParams();
		console.log(`New retribution params:\n\n`);
		console.log(render(retribParams, PRETTYJSON));

		await updateBuyerEntryParams(ProtocolConfiguratorArtifact.address, BUYER_ENTRY_PARAMS);
		let buyerEntryParams = await getBuyerEntryParams();
		console.log(`New buyer entry params:\n\n`);
		console.log(render(buyerEntryParams, PRETTYJSON));

	})
}

func.id = "protocolConfigurator";
func.tags = ["marketplace", "configurator"];
export default func