import { MUSDC, User, BSWAN, AddressProvider, ProtocolConfigurator, ProviderRegistry, ACLManager } from './../types';
import hre from "hardhat";
import { getContract } from '../utilities/tx';
import { ACL_MANAGER_ID, ADDRESS_PROVIDER_ID, DAT_ID, PROTOCOL_CONFIGURATOR_ID, USER_IMPL_ID } from './deploy_ids';
import { EntryParams, RetributionParams, TrustData } from './types';


const getDAT = async (address?: string): Promise<BSWAN> => getContract("BSWAN", address || (await hre.deployments.get(DAT_ID)).address) as any;
const getMockUSDC = async (address?: string): Promise<MUSDC> => getContract("mUSDC", address || (await hre.deployments.get("mUSDC")).address) as any;

const getDATconfig = async (address?: string): Promise<TrustData> => {
	const dat = await getDAT(address);
	const conf: TrustData = {
		address: dat.address,
		owner: await dat.owner(),
		currency: await dat.currency(),
		decimals: await dat.decimals(),
		totalSupply: (await dat.totalSupply()).toNumber(),
		minInvestment: (await dat.minInvestment()).toNumber(),
		revenueCommitmentBasisPoints: (await dat.revenueCommitmentBasisPoints()).toNumber(),
		investmentReserveBasisPoints: (await dat.investmentReserveBasisPoints()).toNumber(),
		buySlopNum: (await dat.buySlopeNum()).toNumber(),
		buySlopDen: (await dat.buySlopeDen()).toNumber()
	}
	return conf
}

const getBuyerEntryParams = async (address?: string): Promise<EntryParams> => {
	const protocolConfig = await getProtocolConfigurator(address);
	const config = await protocolConfig['getBuyerEntryParams()']();

	return {
		currencyValue: config[0].toNumber(),
		timeAdded: config[1].toNumber(),
		xpEarned: config[2].toNumber(),
		invitationEarned: config[3],
	};

}

const getRetributionParams = async (address?: string): Promise<RetributionParams> => {
	const protocolConfig = await getProtocolConfigurator(address);
	const config = await protocolConfig['getRetributionParams()']();

	return new RetributionParams({
		affiliate: config[0].toNumber(),
		lvl0AffiliateShare: config[1].toNumber(),
	});

}


const getAddressProvider = async (address?: string): Promise<AddressProvider> => getContract("AddressProvider", address || (await hre.deployments.get(ADDRESS_PROVIDER_ID)).address) as any;
const getProviderRegistry = async (address?: string): Promise<ProviderRegistry> => getContract("ProviderRegistry", address || (await hre.deployments.get("ProviderRegistry")).address) as any;
const getACLManager = async (address?: string): Promise<ACLManager> => getContract("ACLManager", address || (await hre.deployments.get(ACL_MANAGER_ID)).address) as any;
const getProtocolConfigurator = async (address?: string): Promise<ProtocolConfigurator> => getContract("ProtocolConfigurator", address || (await hre.deployments.get(PROTOCOL_CONFIGURATOR_ID)).address) as any;
const getUser = async (address?: string): Promise<User> => getContract("User", address || (await hre.deployments.get(USER_IMPL_ID)).address) as any;


const getUserLibraries = async () => {

	const userLogicArtifact = await hre.deployments.get("UserLogic");
	const userDataLogicArtifact = await hre.deployments.get("UserDataLogic");
	const inviterLogic = await hre.deployments.get("InviterLogic");
	return {
		UserLogic: userLogicArtifact.address,
		InviterLogic: inviterLogic.address,
		UserData: userDataLogicArtifact.address
	};
};

const getProtocolConfiguratorLibraries = async () => {

	const paramsLogicArtifact = await hre.deployments.get("ParamsLogic");

	return {
		ParamsLogic: paramsLogicArtifact.address,

	};
};

export {
	getDAT,
	getProtocolConfigurator,
	getMockUSDC,
	getAddressProvider,
	getProviderRegistry,
	getDATconfig,
	getUserLibraries,
	getUser,
	getACLManager,
	getProtocolConfiguratorLibraries,
	getBuyerEntryParams,
	getRetributionParams

}