import { Signer, BigNumber } from 'ethers';
import { BSWAN, ERC20, MUSDC, User, AddressProvider, ProviderRegistry } from '../types';

type EvmAddress = string;

type SignerWithAddress = {
	signer: Signer;
	address: EvmAddress;
}

type TrustDeployOptions = {
	name: string,
	symbol: string,
	currency: EvmAddress,
	buySlopeNum: string,
	buySlopeDen: string | BigNumber,
	investmentReserveBasisPoints: string,
	revenueCommitmentBasisPoints: string,
	minInvestment: string,
}

type DeploymentEnv = {
	// admins & users
	deployer: SignerWithAddress
	protocolAdmin: SignerWithAddress
	// contracts
	dat: BSWAN
	USDC: ERC20,
}

export type TestEnv = {
	// admins & users
	deployer: SignerWithAddress
	protocolAdmin: SignerWithAddress
	users: SignerWithAddress[];

	// contracts
	dat: BSWAN
	mUSDC: MUSDC
	User: User,
	AddressProvider: AddressProvider,
	Registry: ProviderRegistry
}


type TrustData = {
	owner?: EvmAddress,
	address?: EvmAddress,
	currency?: EvmAddress,
	decimals: number,
	totalSupply: number,
	minInvestment: number,
	revenueCommitmentBasisPoints: number,
	investmentReserveBasisPoints: number,
	buySlopNum: number,
	buySlopDen: number,

}

enum ProtocolErrors {
	// REGISTRY
	INVALID_ADDRESS_PROVIDER_ID = "1", // The addresses provider is not valid
	ADDRESS_PROVIDER_ALREADY_ADDED = "2", // This addresses provider already exists
	ADDRESS_PROVIDER_NOT_REGISTERED = "3", // 'This addresses provider is not registered'

	// ADDRESSSES PROVIDER
	CONTRACT_NAME_ALREADY_USED = "4", // 'Requires that given _name does not already have non-zero registered contract address'
	ZERO_ADDRESS_IS_INVALID = "5", // the address provided is 0x00
	INDEX_OUT_OF_RANGE = "6", // the index provided is out of range

	// USER
	ADDRESS_ALREADY_USED = "7", // 'The address provided has already been unsed to initialise an account'
	INVALID_USER_ID = "8", // 'The userId is incorrect'
}

export {
	TrustData,
	EvmAddress,
	SignerWithAddress,
	DeploymentEnv,
	TrustDeployOptions,
	ProtocolErrors
}