import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import {
    ADDRESS_PROVIDER_ID,
    DAT_ID,
    JURY_IMPL_ID,
} from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getJury,
    getJuryLibrairies,
    getMockUSDC,
} from '../../../helpers/contract_getters'
import { JURY, XP_GIVER_ROLE } from '../../../helpers/constants'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer } = await getNamedAccounts()

        const { address: addressProviderAddress } = await deployments.get(
            ADDRESS_PROVIDER_ID
        )
        const { address: mUSDCAddress } = await deployments.get('mUSDC')
        const { address: datAddress } = await deployments.get(DAT_ID)
        const juryLibraries = await getJuryLibrairies()
        // Deploy account contract
        const juryArtifact = await deploy(JURY_IMPL_ID, {
            contract: 'Jury',
            from: deployer,
            args: [addressProviderAddress],
            libraries: {
                ...juryLibraries,
            },
            ...COMMON_DEPLOY_PARAMS,
        })

        let addressProviderInstance = await getAddressProvider(
            addressProviderAddress
        )
        let aclManager = await getACLManager()
        let mUSDCInstance = await getMockUSDC(mUSDCAddress)

        let jury = (
            await addressProviderInstance['getContract(bytes32)'](JURY)
        ).toString()
        let isAdded = jury === juryArtifact.address.toString()

        if (!isAdded) {
            console.log('adding JURY contract')
            waitForTx(
                await addressProviderInstance.addContract(
                    JURY,
                    juryArtifact.address
                )
            )
            jury = (
                await addressProviderInstance['getContract(bytes32)'](JURY)
            ).toString()
        }
        deployments.log(
            `[Deployments] JURY is registered to ${juryArtifact.address}`
        )
        let JuryInstance = await getJury(juryArtifact.address)

        let allowance = (
            await mUSDCInstance.allowance(juryArtifact.address, datAddress)
        ).toString()

        if (allowance === '0') {
            console.log("JURY approves MAX_UINT to mUSDC for DAT's address")
            waitForTx(await JuryInstance.approve(mUSDCAddress))
            allowance = (
                await mUSDCInstance.allowance(juryArtifact.address, datAddress)
            ).toString()
        }
        deployments.log(
            `[Deployments] JURY (${juryArtifact.address}) allowance ${allowance} mUSDC (${mUSDCAddress}) to DAT (${datAddress})`
        )

        let hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, jury)

        if (!hasXPGiverRole) {
            console.log('adding XP_GIVER_ROLE to JURY')
            waitForTx(
                await aclManager.grantRole(XP_GIVER_ROLE, juryArtifact.address)
            )
            hasXPGiverRole = await aclManager.hasRole(XP_GIVER_ROLE, jury)
        }
        deployments.log(`[Deployments] JURY has the role XP_GIVER_ROLE`)
    })
}

func.id = 'juryImplementation'
func.tags = ['marketplace']
export default func
