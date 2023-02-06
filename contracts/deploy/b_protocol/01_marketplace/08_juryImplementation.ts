import { waitForTx } from '../../../utilities/tx'
import { COMMON_DEPLOY_PARAMS } from '../../../helpers/envs'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import makeDeployment from '../../../helpers/makeDeployment'
import { ADDRESS_PROVIDER_ID, JURY_IMPL_ID } from '../../../helpers/deploy_ids'
import {
    getACLManager,
    getAddressProvider,
    getJury,
    getJuryLibrairies,
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

        // 4. set the ACL_ADMIN
        waitForTx(
            await addressProviderInstance.addContract(
                JURY,
                juryArtifact.address
            )
        )
        deployments.log(
            `[Deployments] JURY is registered to ${juryArtifact.address}`
        )
        let JuryInstance = await getJury(juryArtifact.address)
        deployments.log(
            `[Deployments] JURY approved MAX_UINT to mUSDC at ${juryArtifact.address}`
        )
        waitForTx(await JuryInstance.approve(mUSDCAddress))
        // give the XP_GIVER_ROLE
        waitForTx(
            await aclManager.grantRole(XP_GIVER_ROLE, juryArtifact.address)
        )
        deployments.log(`[Deployments] JURY has the role XP_GIVER_ROLE`)
    })
}

func.id = 'juryImplementation'
func.tags = ['marketplace']
export default func
