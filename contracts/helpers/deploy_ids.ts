import { MARKETPLACE_NAME } from './envs'

const DAT_ID = `DAT_${MARKETPLACE_NAME}`
const ADDRESS_PROVIDER_ID = `AddressProvider_${MARKETPLACE_NAME}`

const IMPL_ID = 'implementation'
const ACL_MANAGER_ID = `ACLManager_${IMPL_ID}`
const XP_ID = `XP_${IMPL_ID}`
const PROTOCOL_CONFIGURATOR_ID = `ProtocolConfigurator_${IMPL_ID}`
const USER_IMPL_ID = `User_${IMPL_ID}`
const GIG_IMPL_ID = `Gig_${IMPL_ID}`
const ORDER_IMPL_ID = `Order_${IMPL_ID}`
const DISPUTE_IMPL_ID = `Dispute_${IMPL_ID}`
const JURY_IMPL_ID = `Jury_${IMPL_ID}`
const PROXY_ID = 'proxy'

export {
    DAT_ID,
    IMPL_ID,
    PROXY_ID,
    USER_IMPL_ID,
    GIG_IMPL_ID,
    ACL_MANAGER_ID,
    ADDRESS_PROVIDER_ID,
    PROTOCOL_CONFIGURATOR_ID,
    XP_ID,
    ORDER_IMPL_ID,
    DISPUTE_IMPL_ID,
    JURY_IMPL_ID,
}
