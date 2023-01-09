import { MARKETPLACE_NAME } from "./envs";

const DAT_ID = `DAT_${ MARKETPLACE_NAME }`;
const ADDRESS_PROVIDER_ID = `AddressProvider_${ MARKETPLACE_NAME }`;

const IMPL_ID = "implementation";
const USER_IMPL_ID = `account_${ IMPL_ID }`;

const PROXY_ID = "proxy";

export {
	DAT_ID,
	IMPL_ID,
	PROXY_ID,
	USER_IMPL_ID,
	ADDRESS_PROVIDER_ID
}
