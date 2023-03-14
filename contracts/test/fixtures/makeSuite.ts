import { Signer } from 'ethers'
import { deployments } from 'hardhat'
import {
    getACLManager,
    getAddressProvider,
    getDAT,
    getDispute,
    getGig,
    getMockUSDC,
    getOrder,
    getProtocolConfigurator,
    getProviderRegistry,
    getUser,
    getXP,
    getJury,
    getFaucet,
    getMinimalForwarder,
} from '../../helpers/contract_getters'
import { SignerWithAddress, TestEnv } from '../../helpers/types'
import {
    getNamedSigners,
    getUnnamedSigners,
    getXRandomSigners,
} from '../../utilities/signers'

const makeSuite = deployments.createFixture(
    async ({ deployments, ethers }, _options) => {
        await deployments.fixture() // ensure a fresh deployments

        let namedSigners = await getNamedSigners()
        let unnamedSigners = await getUnnamedSigners()

        let testEnv = {} as TestEnv

        testEnv.deployer = namedSigners.deployer
        testEnv.protocolAdmin = namedSigners.protocolAdmin
        testEnv.registryOwner = namedSigners.registryOwner
        testEnv.aclAdmin = namedSigners.aclAdmin

        testEnv.users = unnamedSigners
        testEnv.judges = await getXRandomSigners(15)
        testEnv.XP = await getXP()
        testEnv.dat = await getDAT()
        testEnv.mUSDC = await getMockUSDC()
        testEnv.User = await getUser()
        testEnv.Gig = await getGig()
        testEnv.Order = await getOrder()
        testEnv.Dispute = await getDispute()
        testEnv.Jury = await getJury()
        testEnv.AddressProvider = await getAddressProvider()
        testEnv.ACLManager = await getACLManager()
        testEnv.Registry = await getProviderRegistry()
        testEnv.ProtocolConfigurator = await getProtocolConfigurator()
        testEnv.Faucet = await getFaucet()
        testEnv.MinimalForwarder = await getMinimalForwarder()
        return testEnv
    }
)

export default makeSuite
