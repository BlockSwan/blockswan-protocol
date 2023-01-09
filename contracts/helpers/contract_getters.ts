import { MUSDC, User, BSWAN, AddressProvider, ProviderRegistry } from './../types';
import hre from "hardhat";
import { getContract } from '../utilities/tx';
import { ADDRESS_PROVIDER_ID, DAT_ID, USER_IMPL_ID } from './deploy_ids';
import { TrustData } from './types';


const getDAT = async (address?: string): Promise<BSWAN> => getContract("BSWAN", address || (await hre.deployments.get(DAT_ID)).address) as any;
const getMockUSDC = async (address?: string): Promise<MUSDC> => getContract("mUSDC", address || (await hre.deployments.get("mUSDC")).address) as any;

const getDATconfig = async (address?: string): Promise<TrustData> => {
	const dat = await getDAT(address);
	const conf: TrustData = {
		address: dat.address,
		owner: await dat.owner(),
		currency: await dat.currency(),
		decimals: await dat.decimals(),
		totalSupply: await (await dat.totalSupply()).toNumber(),
		minInvestment: await (await dat.minInvestment()).toNumber(),
		revenueCommitmentBasisPoints: await (await dat.revenueCommitmentBasisPoints()).toNumber(),
		investmentReserveBasisPoints: await (await dat.investmentReserveBasisPoints()).toNumber(),
		buySlopNum: await (await dat.buySlopeNum()).toNumber(),
		buySlopDen: await (await dat.buySlopeDen()).toNumber()
	}
	return conf
}

const getAddressProvider = async (address?: string): Promise<AddressProvider> => getContract("AddressProvider", address || (await hre.deployments.get(ADDRESS_PROVIDER_ID)).address) as any;
const getProviderRegistry = async (address?: string): Promise<ProviderRegistry> => getContract("ProviderRegistry", address || (await hre.deployments.get("ProviderRegistry")).address) as any;

const getUser = async (address?: string): Promise<User> => getContract("User", address || (await hre.deployments.get(USER_IMPL_ID)).address) as any;


const getUserLibraries = async () => {

	const userLogicArtifact = await hre.deployments.get("UserLogic");
	return {
		UserLogic: userLogicArtifact.address
	};
};

export {
	getDAT,
	getMockUSDC,
	getAddressProvider,
	getProviderRegistry,
	getDATconfig,
	getUserLibraries,
	getUser
}