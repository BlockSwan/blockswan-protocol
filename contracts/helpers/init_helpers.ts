import { waitForTx } from './../utilities/tx';
import hre, { ethers, getNamedAccounts } from "hardhat";
import { isValidAddress } from '../utilities/utils';
import { getACLManager, getAddressProvider, getDAT, getGig, getMockUSDC, getOrder, getProtocolConfigurator, getUser, getXP } from './contract_getters';
import { red, bold } from "kleur"
import { BSWAN } from "../types"
import { BUYER_ADMIN_ROLE, BUYER_ROLE, MAX_SUPPLY, MAX_UINT_AMOUNT, ONE_THOUSAND_USDC, PRETTYJSON, RETRIBUTION_PARAMS, SELLER_ADMIN_ROLE, SELLER_ROLE, XP_VALUES } from './constants';
import { CreationParams, DelayTimestamp, EntryParams, OrderPriceParams, RetributionParams, SignerWithAddress } from './types';
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

	const ACLManager = await getACLManager(aclManagerAddress);
	const User = await getUser(userAddress);
	waitForTx(
		await ACLManager.grantRole(BUYER_ADMIN_ROLE, User.address)
	);
	console.log(`\nAdded BUYER_ADMIN_ROLE as admin of BUYER_ROLE\n`);
	waitForTx(
		await ACLManager.setRoleAdmin(BUYER_ROLE, BUYER_ADMIN_ROLE)
	);
	console.log(`\nGranted BUYER_ADMIN_ROLE to ${ User.address }\n`);

};

const setupSellerAdminRoles = async (aclManagerAddress: string | undefined, userAddress: string | undefined) => {

	const ACLManager = await getACLManager(aclManagerAddress);
	const User = await getUser(userAddress);
	waitForTx(
		await ACLManager.grantRole(SELLER_ADMIN_ROLE, User.address)
	);
	console.log(`\nAdded SELLER_ADMIN_ROLE as admin of SELLER_ROLE \n`);
	waitForTx(
		await ACLManager.setRoleAdmin(SELLER_ROLE, SELLER_ADMIN_ROLE)
	);
	console.log(`\nGranted BUYER_ADMIN_ROLE to ${ User.address }\n`);

};

const updateBuyerEntryParams = async (protocolConfiguratorAddress: string | undefined, entryParams: EntryParams) => {
	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the buyer entry params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateBuyerEntryParams(entryParams)
	)

}

const updateSellerEntryParams = async (protocolConfiguratorAddress: string | undefined, entryParams: EntryParams) => {
	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the seller entry params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateSellerEntryParams(entryParams)
	)
}


const updateRetributionsParams = async (protocolConfiguratorAddress: string | undefined, retribParams: RetributionParams) => {

	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the retribution params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateRetributionParams(retribParams)
	)
}

const updateGigCreationParams = async (protocolConfiguratorAddress: string | undefined, creationParams: CreationParams) => {

	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the gig creation params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateGigCreationParams(creationParams)
	)
}

const updateOrderCreationParams = async (protocolConfiguratorAddress: string | undefined, priceParams: OrderPriceParams) => {

	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the order creation params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateOrderCreationParams(priceParams)
	)
}

const updateSellerOrderParams = async (protocolConfiguratorAddress: string | undefined, priceParams: OrderPriceParams) => {

	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the seller-applied order params\n`);
	waitForTx(
		await ProtocolConfiguarator.updateSellerOrderFees(priceParams)
	)
}

const updateDelayTimestamp = async (protocolConfiguratorAddress: string | undefined, delays: DelayTimestamp) => {

	let ProtocolConfiguarator = await getProtocolConfigurator(protocolConfiguratorAddress);
	console.log(`\nUpdating the protocol delay timestamps\n`);
	waitForTx(
		await ProtocolConfiguarator.updateDelayTimestamp(delays)
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
	UserAddress: string | undefined,
	caller: SignerWithAddress) => {
	let USDC = await getMockUSDC(mUSDCaddress);
	let User = await getUser(UserAddress);
	waitForTx(await USDC.connect(caller.signer).increaseAllowance(User.address, MAX_SUPPLY))
}

const maxApproveGig = async (mUSDCaddress: string | undefined,

	GigAddress: string | undefined,
	caller: SignerWithAddress) => {
	let USDC = await getMockUSDC(mUSDCaddress);
	let Gig = await getGig(GigAddress);
	waitForTx(await USDC.connect(caller.signer).increaseAllowance(Gig.address, MAX_SUPPLY))
}

const maxApproveOrder = async (mUSDCaddress: string | undefined,
	OrderAddress: string | undefined,
	caller: SignerWithAddress) => {
	let USDC = await getMockUSDC(mUSDCaddress);
	let Order = await getOrder(OrderAddress);
	waitForTx(await USDC.connect(caller.signer).increaseAllowance(Order.address, MAX_SUPPLY))
}

const setupXPKeys = async (xpAddress: string | undefined) => {
	let XP = await getXP(xpAddress);
	XP_VALUES.forEach(async (keyValue) => {
		console.log(`${ keyValue.key } for ${ keyValue.amount }`);
		waitForTx(
			await XP.setXpAmount(keyValue.key.toString(), keyValue.amount)
		)
	})

}

export {
	updateDATconfig,
	addMarketplaceToRegistry,
	setupBuyerAdminRoles,
	setupSellerAdminRoles,
	updateBuyerEntryParams,
	mintUSDC,
	maxApproveDAT,
	maxApproveUser,
	updateRetributionsParams,
	updateSellerEntryParams,
	setupXPKeys,
	maxApproveGig,
	updateGigCreationParams,
	updateOrderCreationParams,
	updateSellerOrderParams,
	updateDelayTimestamp,
	maxApproveOrder


}