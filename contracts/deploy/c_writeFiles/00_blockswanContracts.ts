import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../helpers/makeDeployment'
import { PRETTYJSON } from '../../helpers/constants'
import { render } from 'prettyjson'
import {
    getACLManager,
    getAddressProvider,
    getBlockswanContractsAddresses,
    getDAT,
    getDispute,
    getFaucet,
    getGig,
    getJury,
    getMinimalForwarder,
    getMockUSDC,
    getOrder,
    getProtocolConfigurator,
    getProviderRegistry,
    getUser,
    getXP,
} from '../../helpers/contract_getters'
import { BlockswanContractsAddresses } from '../../helpers/types'
import { getContract } from '../../utilities/tx'
import fs from 'fs'
import path from 'path'
import { checkRequiredNetwork } from '../../helpers/marketPlaceConfigHelpers'

const FILE_NAME = 'README.md'

const link = (contractAddress: string) =>
    `[${contractAddress}](https://mumbai.polygonscan.com/address/${contractAddress})`

function appendContractAddressesToFile(addresses: BlockswanContractsAddresses) {
    const content = `### Periphery

| Contract          | Address                                   |
| :---------------- | :---------------------------------------- |
| DAT               | ${link(addresses.periphery.DAT)}                |
| mUSDC             | ${link(addresses.periphery.mUSDC)}              |
| Faucet            | ${link(addresses.periphery.Faucet)}             |
| MinimalForwarder  | ${link(addresses.periphery.MinimalForwarder)}   |

### Protocol

#### Configurators

Smart-contracts responsible of the configuration of the blockswan protocol. (eg: containing params fees and access permissions between others)

| Contract              | Address                                                       |
| :-------------------- | :------------------------------------------------------------ |
| ACLManager            | ${link(
        addresses.protocol.configurators.ACLManager
    )}                |
| ProtocolConfigurator  | ${link(
        addresses.protocol.configurators.ProtocolConfigurator
    )}      |
| AddressProvider       | ${link(
        addresses.protocol.configurators.AddressProvider
    )}           |
| ProviderRegistry      | ${link(
        addresses.protocol.configurators.ProviderRegistry
    )}          |
    
#### Implementations

Smart-contracts containing the core data storage and calling the libraries via calldata to manipulate data.

| Contract  | Address                                       |
| :-------- | :-------------------------------------------- |
| Dispute   | ${link(addresses.protocol.implementations.Dispute)} |
| Gig       | ${link(addresses.protocol.implementations.Gig)}     |
| Jury      | ${link(addresses.protocol.implementations.Jury)}    |
| Order     | ${link(addresses.protocol.implementations.Order)}   |
| User      | ${link(addresses.protocol.implementations.User)}    |
| XP        | ${link(addresses.protocol.implementations.XP)}      |

#### Libraries

Blockswan business logics libraries called by the implementations.

| Contract                  | Address                                                   |
| :------------------------ | :-------------------------------------------------------- |
| DisputeDataLogic          | ${link(
        addresses.protocol.libraries.DisputeDataLogic
    )}          |
| DisputeLogic              | ${link(
        addresses.protocol.libraries.DisputeLogic
    )}              |
| GigDataLogic              | ${link(
        addresses.protocol.libraries.GigDataLogic
    )}              |
| GigLogic                  | ${link(
        addresses.protocol.libraries.GigLogic
    )}                  |
| JuryDataLogic             | ${link(
        addresses.protocol.libraries.JuryDataLogic
    )}             |
| JuryLogic                 | ${link(
        addresses.protocol.libraries.JuryLogic
    )}                 |
| OrderDataLogic            | ${link(
        addresses.protocol.libraries.OrderDataLogic
    )}            |
| OrderLogic                | ${link(
        addresses.protocol.libraries.OrderLogic
    )}                |
| RoundDataLogic            | ${link(
        addresses.protocol.libraries.RoundDataLogic
    )}            |
| RoundLogic                | ${link(
        addresses.protocol.libraries.RoundLogic
    )}                |
| UserDataLogic             | ${link(
        addresses.protocol.libraries.UserDataLogic
    )}             |
| UserLogic                 | ${link(
        addresses.protocol.libraries.UserLogic
    )}                 |
| VoteDataLogic             | ${link(
        addresses.protocol.libraries.VoteDataLogic
    )}             |
| VoteLogic                 | ${link(
        addresses.protocol.libraries.VoteLogic
    )}                 |
| InviterLogic              | ${link(
        addresses.protocol.libraries.InviterLogic
    )}              |
| InvoiceLogic              | ${link(
        addresses.protocol.libraries.InvoiceLogic
    )}              |
| ParamsLogic               | ${link(
        addresses.protocol.libraries.ParamsLogic
    )}               |
| SortitionSumTreeFactory   | ${link(
        addresses.protocol.libraries.SortitionSumTreeFactory
    )}   |

## Connect with the community

You can join at the [Discord](https://discord.com/invite/JtUtDDP9yh) channel or at the [Twitter](https://twitter.com/BlockSwanHQ) for asking questions about the protocol or talk about BlockSwan with other peers.
`

    try {
        const readmePath = path.join(__dirname, '../../', FILE_NAME)
        console.log(`Writing to file: ${readmePath}`)
        fs.appendFileSync(readmePath, content, 'utf-8')
    } catch (err) {
        console.log('Error appending data to file in sync mode', err)
    }
}
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        let blockswanContracts: BlockswanContractsAddresses =
            await getBlockswanContractsAddresses()
        console.log(render(blockswanContracts, PRETTYJSON))
        appendContractAddressesToFile(blockswanContracts)
        console.log('Contract addresses written to file')
    })
}

func.id = 'writeFiles'
func.tags = ['end', 'writeFiles']
func.skip = async () =>
    checkRequiredNetwork({
        requiredNetwork: 'mumbai',
    })
export default func
