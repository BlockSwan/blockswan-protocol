import hre from 'hardhat'
//import { utils } from 'ethers'

import { EvmAddress } from '../helpers/types'

export const waitForTx = async (tx: any) => await tx.wait(1)

// export const evm_snapshot = async () => await hre.ethers.provider.send("evm_snapshot", []);

// export const evm_revert = async (id: any) => hre.ethers.provider.send("evm_revert", [id]);

export const getContract = async (
    id: string,
    address?: EvmAddress
): Promise<unknown> => {
    const artifact = await hre.deployments.getArtifact(id)
    return hre.ethers.getContractAt(
        artifact.abi,
        address || (await hre.deployments.get(id)).address
    )
}
