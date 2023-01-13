import { getDAT } from './contract_getters';
import { maxApproveDAT, mintUSDC } from './init_helpers';
import { SignerWithAddress } from './types';


const mintAndApproveDAT = async (mUSDCaddress: string | undefined,
	DATAddress: string | undefined,
	caller: SignerWithAddress) => {
	await mintUSDC(mUSDCaddress, caller);
	await maxApproveDAT(mUSDCaddress, DATAddress, caller);
}


export {
	mintAndApproveDAT
}
