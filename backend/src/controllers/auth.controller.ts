import { Request, Response } from 'express'
import { IPFS } from 'ipfs-core-types'
import * as jose from 'jose'
import { User, UserInput } from '../models/user.model'
import { readIpfsFile } from '../utils/ipfs'

const verify = async (req: Request, res: Response, node: IPFS) => {
    try {
        // passed from the frontend in the Authorization header
        const idToken = req.headers.authorization?.split(' ')[1]

        // passed from the frontend in the request body
        const evmAddress = req.body.evmAddress
        const email = req.body.email
        const username = req.body.username
        const defaultProfileImg = req.body.defaultProfileImg
        const appPubKey = req.body.appPubKey
        if (!idToken || !appPubKey || !evmAddress)
            return res.status(400).json({ name: 'Missing elements' })

        // Get the JWK set used to sign the JWT issued by Web3Auth
        const jwks = jose.createRemoteJWKSet(
            new URL('https://api.openlogin.com/jwks')
        )
        if (!jwks) return res.status(400).json({ name: 'Missing JWK set' })

        // Verify the JWT using Web3Auth's JWKS
        const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
            algorithms: ['ES256'],
        })
        if (!jwtDecoded)
            return res.status(400).json({ name: 'Missing decoded JWK' })

        // Checking `app_pub_key` against the decoded JWT wallet's public_key
        if ((jwtDecoded.payload as any).wallets[0].public_key === appPubKey) {
            // Verified,  check if usser exists for evmAddress
            User.findOne({
                evmAddress: evmAddress,
            })
                .populate('gigs')
                .exec(async function (err, userData) {
                    if (err || userData === null || userData === undefined) {
                        let createdUser = await User.create({
                            evmAddress: evmAddress,
                            email: email,
                            username: username,
                            defaultProfileImg: defaultProfileImg,
                        })
                        if (createdUser) {
                            return res.status(200).json({ ...createdUser })
                        }
                        return res
                            .status(500)
                            .json({ name: 'Failed to create user' })
                    }
                    if (userData?.gigs === undefined)
                        return res.status(200).json({ ...userData })

                    for (let i = 0; i < userData?.gigs?.length; i++) {
                        if (
                            userData?.gigs[i].imgs === undefined ||
                            userData?.gigs[i].imgs?.length <= 0
                        )
                            return res.status(200).json({ ...userData })
                        if (userData?.gigs[i]?.imgs[0] !== undefined) {
                            let hash = userData?.gigs[i].imgs[0].toString()
                            console.log(hash)
                            userData.gigs[i].imgs[0] =
                                (await readIpfsFile(node, hash)) || ''
                            console.log(userData.gigs[i].imgs[0])
                        }
                    }
                    return res.status(200).json({ ...userData })
                })
        } else {
            return res
                .status(400)
                .json({ name: 'Verification Failed, wrong appPubKey' })
        }
    } catch (err) {
        console.error(err)
        return res
            .status(400)
            .json({ name: 'An error has occured. Try again later' })
    }
}

export { verify }
