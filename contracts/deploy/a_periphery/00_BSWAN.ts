import { COMMON_DEPLOY_PARAMS } from '../../helpers/envs'
import { waitForTx } from '../../utilities/tx'
import { DeployFunction, DeployResult } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { TrustDeployOptions } from '../../helpers/types'
import { bgWhite, bgBlue, bold } from 'kleur'
import prettyjson from 'prettyjson'
import makeDeployment from '../../helpers/makeDeployment'
import { DAT_ID } from '../../helpers/deploy_ids'
import { BSWAN } from '../../types'
import { getDATconfig, getMockUSDC } from '../../helpers/contract_getters'
import {
    BUY_SLOPE_DEN,
    BUY_SLOPE_NUM,
    COMMITMENT_BASIS_POINTS,
    MAX_UINT_AMOUNT,
    MIN_INVESTMENT,
    RESERVE_BASIS_POINTS,
} from '../../helpers/constants'

const trustOptions: TrustDeployOptions = {
    name: 'BlockswanTrust',
    symbol: 'BSWAN',
    currency: '', //empty initialized
    buySlopeNum: BUY_SLOPE_NUM,
    buySlopeDen: BUY_SLOPE_DEN.toString(),
    investmentReserveBasisPoints: RESERVE_BASIS_POINTS,
    revenueCommitmentBasisPoints: COMMITMENT_BASIS_POINTS,
    minInvestment: MIN_INVESTMENT, // 100 USDC (6decimals)
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await makeDeployment(func.id, async () => {
        const { getNamedAccounts, deployments } = hre
        const { deploy } = deployments
        const { deployer, protocolAdmin } = await getNamedAccounts()

        const { address: mUSDC_address } = await deployments.get('mUSDC')
        const mUsdcInstance = await getMockUSDC(mUSDC_address)

        trustOptions.currency = mUSDC_address
        console.log(
            'Default DAT config:',
            '\n\n',
            prettyjson.render(trustOptions, { noColor: true }),
            '\n'
        )

        const bswanArtifact: DeployResult = await deploy(DAT_ID, {
            contract: 'BSWAN',
            from: deployer,
            args: [
                trustOptions.currency,
                trustOptions.buySlopeNum,
                trustOptions.buySlopeDen,
                trustOptions.investmentReserveBasisPoints,
                trustOptions.name,
                trustOptions.symbol,
            ],
            ...COMMON_DEPLOY_PARAMS,
        })
        const bswanInstance = (await hre.ethers.getContractAt(
            bswanArtifact.abi,
            bswanArtifact.address
        )) as BSWAN

        let allowance = await mUsdcInstance.allowance(
            deployer,
            bswanInstance.address
        )
        let isDeployed = Number(allowance) > 0

        if (!isDeployed) {
            console.log('Deployer allowance increased to MAX_UINT')
            waitForTx(
                await mUsdcInstance.increaseAllowance(
                    bswanInstance.address,
                    MAX_UINT_AMOUNT
                )
            )
            console.log('DAT config updated to default config')
            waitForTx(
                await bswanInstance.updateConfig(
                    protocolAdmin,
                    trustOptions.revenueCommitmentBasisPoints,
                    trustOptions.minInvestment
                )
            )
        }
        allowance = await mUsdcInstance.allowance(
            deployer,
            bswanInstance.address
        )

        deployments.log(
            `[Deployment] Deployer (${deployer}) has given an allowance of ${allowance.toString()} mUSDC to DAT(${
                bswanInstance.address
            })\n`,
            `\n[Deployment] DAT(${bswanInstance.address}) has the following config:\n`
        )
        let datValues = await getDATconfig()
        console.log(
            bold('DAT config:\n\n'),
            prettyjson.render(datValues, { noColor: true })
        )
    })
}

func.id = 'DAT'
func.tags = ['dat', 'bswan', 'periphery']
export default func
