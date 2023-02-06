require('dotenv').config()

const WITH_RAMPAGE = process.env.WITH_RAMPAGE === 'true'
const LOG_ACTIONS = process.env.LOG_ACTIONS === 'true'
const MARKETPLACE_NAME = String(process.env.MARKETPLACE_NAME)

const COMMON_DEPLOY_PARAMS = {
    log: true,
    deterministicDeployment: false,
}

export { WITH_RAMPAGE, MARKETPLACE_NAME, COMMON_DEPLOY_PARAMS, LOG_ACTIONS }
