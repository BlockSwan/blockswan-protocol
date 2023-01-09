import { waitForTx } from './../utilities/tx';
import hre from "hardhat";
import { isValidAddress } from '../utilities/utils';
import { getDAT } from './contract_getters';
import { red, bold } from "kleur"
import { BSWAN } from "../types"

const updateDATconfig = async (newOwner?: string) => {
	const dat = await getDAT() as BSWAN;
	if (!newOwner || !isValidAddress(newOwner))
		throw Error(red().bold('[updateDATconfig] Input parameter "newOwner" is missing or is not an address.'));
	dat.updateConfig(newOwner, 1, 2)
}


const addMarketplaceToRegistry = async (providerId: any, addressProvider: string | undefined) => {
	const providerRegistry = await hre.deployments.get("ProviderRegistry");
	const providerRegistryInstance = (await hre.ethers.getContractAt(providerRegistry.abi, providerRegistry.address));
	const providerRegistryOwner = await providerRegistryInstance.owner();
	if (!isValidAddress(addressProvider)) {
		throw Error('[addMarketplaceToRegistry] Input parameter "addressProvider" is missing or is not an address.');
	}
	const signer = await hre.ethers.getSigner(providerRegistryOwner);
	// Set the provider at the Registry
	await waitForTx(await providerRegistryInstance
		.connect(signer)
		.registerAddressProvider(addressProvider, providerId));
	console.log(`\nAdded AddresProvider with address "${ addressProvider }" to registry located at ${ providerRegistry.address }\n`);
};

export {
	updateDATconfig,
	addMarketplaceToRegistry
}