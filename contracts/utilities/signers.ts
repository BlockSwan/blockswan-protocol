import { Signer } from 'ethers';
import hre, { ethers } from "hardhat";
import { SignerWithAddress } from '../helpers/types';
//import { Promise } from "bluebird";

const getEvmSigners = async () => {
	const ethersSigners = await hre.ethers.getSigners();
	return ethersSigners;
};

const getEvmSignersAddresses = async () => await Promise.all((await getEvmSigners()).map((signer) => signer.getAddress()));
const getFirstSigner = async () => (await getEvmSigners())[0];

const getRandomSigners = (amount: number) => {
	const signers = []
	for (let i = 0; i < amount; i++) {
		signers.push(ethers.Wallet.createRandom())
	}
	return signers;
}

const getRandomSigner = async (): Promise<SignerWithAddress> => {
	let wallet = ethers.Wallet.createRandom();
	let addr1 = await getFirstSigner();
	// add the provider from Hardhat
	wallet = wallet.connect(ethers.provider);
	// send ETH to the new wallet so it can perform a tx
	await addr1.sendTransaction({ to: wallet.address, value: ethers.utils.parseEther("1") });
	return {
		signer: wallet,
		address: await wallet.getAddress()
	};
}

const getNamedSigners = async (): Promise<any> => {
	let namedAccounts = await hre.getNamedAccounts();
	let namedSigners: any = {};
	Object.keys(namedAccounts).forEach(async (key: any) => {
		const signer = await ethers.getSigner(namedAccounts[key])
		namedSigners[key] = signer;
	});
	return namedSigners;
}

const getUnnamedSigners = async () => {
	let unnamedAccounts = await hre.getUnnamedAccounts();
	let unnamedSigners = [];
	for (let user of unnamedAccounts) {
		let signer: any = await ethers.getSigner(user)
		unnamedSigners.push({ signer: signer, address: user })
	}
	return unnamedSigners;
}

export {
	getEvmSigners,
	getRandomSigners,
	getEvmSignersAddresses,
	getFirstSigner,
	getNamedSigners,
	getUnnamedSigners,
	getRandomSigner
}