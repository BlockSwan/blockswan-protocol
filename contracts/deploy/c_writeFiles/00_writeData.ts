import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../helpers/makeDeployment'
import { PRETTYJSON } from '../../helpers/constants'
import { render } from 'prettyjson'
import { getBlockswanContractsAddresses } from '../../helpers/contract_getters'
import { BlockswanContractsAddresses } from '../../helpers/types'
import fs from 'fs'
import path from 'path'
import { checkRequiredNetwork } from '../../helpers/marketPlaceConfigHelpers'
import {
    appendContractAddressesToReadMe,
    writeContractAddressesToJSON,
} from '../../helpers/writeData'

const README_FILE = 'README.md'
const ADDRESS_FILE = 'contracts.json'

const func: DeployFunction = async function (_hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        let blockswanContracts: BlockswanContractsAddresses =
            await getBlockswanContractsAddresses()
        console.log(render(blockswanContracts, PRETTYJSON))
        appendContractAddressesToReadMe({
            addresses: blockswanContracts,
            fileName: README_FILE,
        })
        console.log(
            'Blockswan contract addresses written to file ' + README_FILE
        )
        writeContractAddressesToJSON({
            addresses: blockswanContracts,
            fileName: ADDRESS_FILE,
        })
        console.log(
            'Blockswan contract addresses written to file ' + ADDRESS_FILE
        )
    })
}

func.id = 'writeFiles'
func.tags = ['end', 'writeFiles']
func.skip = async () =>
    checkRequiredNetwork({
        requiredNetwork: 'mumbai',
    })
export default func
