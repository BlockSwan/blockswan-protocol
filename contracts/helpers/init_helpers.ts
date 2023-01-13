import { waitForTx } from './../utilities/tx';
import hre, { ethers, getNamedAccounts } from "hardhat";
import { isValidAddress } from '../utilities/utils';
import { getACLManager, getAddressProvider, getDAT, getMockUSDC, getProtocolConfigurator, getUser } from './contract_getters';
import { red, bold } from "kleur"
import { BSWAN } from "../types"
import { BUYER_ADMIN_ROLE, BUYER_ROLE, MAX_SUPPLY, MAX_UINT_AMOUNT, ONE_THOUSAND_USDC, PRETTYJSON, RETRIBUTION_PARAMS } from './constants';
import { EntryParams, RetributionParams, SignerWithAddress } from './types';
import { render } from 'prettyjson';
import { LOG_ACTIONS } from './envs';

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

const setupBuyerAdminRoles = async (aclManagerAddress: string | undefined, userAddress: string | undefined) => {

	const ACLManager = await getACLManager();
	const User = await getUser(userAddress);
	waitForTx(
		await ACLManager.grantRole(BUYER_ADMIN_ROLE, User.address)
	);
	console.log(`\nAdded BUYER_ADMIN role as admin of BUYER role\n`);
	waitForTx(
		await ACLManager.setRoleAdmin(BUYER_ROLE, BUYER_ADMIN_ROLE)
	);
	console.log(`\nGranted BUYER_ADMIN role to ${ User.address }\n`);

};

const updateBuyerEntryParams = async (protocolConfiguratorAddress: string | undefined, entryParams: EntryParams) => {



	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the buyer entry params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateBuyerEntryParams(entryParams)
	)

}


const updateRetributionsParams = async (protocolConfiguratorAddress: string | undefined, retribParams: RetributionParams) => {

	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the retribution params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateRetributionParams(retribParams)
	)

}

const mintUSDC = async (mUSDCaddress: string | undefined,

	caller: SignerWithAddress) => {
	let USDC = await getMockUSDC(mUSDCaddress);
	waitForTx(await USDC.connect(caller.signer).mint(ONE_THOUSAND_USDC))
	if (LOG_ACTIONS) (
		console.log(`${ caller.address } minted ${ ONE_THOUSAND_USDC } mUSDC`)
	)
}

const maxApproveDAT = async (mUSDCaddress: string | undefined,
	DATAddress: string | undefined,
	caller: SignerWithAddress) => {
	let USDC = await getMockUSDC(mUSDCaddress);
	let DAT = await getDAT(DATAddress);
	waitForTx(await USDC.connect(caller.signer).increaseAllowance(DAT.address, MAX_SUPPLY))
	waitForTx(await DAT.connect(caller.signer).increaseAllowance(DAT.address, MAX_SUPPLY))
}

const maxApproveUser = async (mUSDCaddress: string | undefined,
	DATAddress: string | undefined,
	UserAddress: string | undefined,
	caller: SignerWithAddress) => {
	let USDC = await getMockUSDC(mUSDCaddress);
	let User = await getUser(UserAddress);
	let DAT = await getDAT(DATAddress);
	waitForTx(await USDC.connect(caller.signer).increaseAllowance(User.address, MAX_SUPPLY))
	waitForTx(await DAT.connect(caller.signer).increaseAllowance(User.address, MAX_SUPPLY))
}

export {
	updateDATconfig,
	addMarketplaceToRegistry,
	setupBuyerAdminRoles,
	updateBuyerEntryParams,
	mintUSDC,
	maxApproveDAT,
	maxApproveUser,
	updateRetributionsParams
}