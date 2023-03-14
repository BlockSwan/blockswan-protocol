import { HardhatRuntimeEnvironment, Network } from 'hardhat/types'
import hre from 'hardhat'
require('dotenv').config()

const checkRequiredEnvironment = () => {
    if (!process.env.MARKETPLACE_NAME) {
        console.error(
            `Skipping Marketplace deployment due to missing "MARKETPLACE_NAME" environment variable.`
        )
        return true
    }
    return false
}

const checkRequiredNetwork = ({
    requiredNetwork,
}: {
    requiredNetwork: string
}) => {
    if (hre.network.name !== requiredNetwork) {
        console.error(`Skipping deployment due to invalid network.`)
        return true
    }
    return false
}

export { checkRequiredEnvironment, checkRequiredNetwork }
