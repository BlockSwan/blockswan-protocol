import { ZERO_ADDRESS } from './../helpers/constants'
import { utils } from 'ethers'

export const isValidAddress = (value: string | undefined) =>
    !!value &&
    utils.isAddress(value) &&
    utils.getAddress(value) !== utils.getAddress(ZERO_ADDRESS)
