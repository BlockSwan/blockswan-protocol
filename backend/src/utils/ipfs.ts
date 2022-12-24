import { IPFS } from 'ipfs-core'
import { IPFSPath } from 'ipfs-core-types/src/utils'
import type { CID } from 'multiformats/cid'
import { ADD_SUB } from '../constants/pubsubs'

const readIpfsFile = async (
    node: IPFS,
    cid: IPFSPath
): Promise<string | null> => {
    const decoder = new TextDecoder()
    let content = ''
    if (!cid) return null

    try {
        for await (const chunk of node.cat(cid)) {
            if (!chunk) return null
            content += decoder.decode(chunk, {
                stream: true,
            })
        }
    } catch (err) {
        return null
    }

    return content
}

const addIpfsFile = async (
    node: IPFS,
    file: Buffer
): Promise<IPFSPath | void> => {
    try {
        const results = await node.add(file, {
            wrapWithDirectory: false,
        })
        if (results) {
            node.pubsub.publish(
                ADD_SUB,
                new TextEncoder().encode(results?.cid.toString())
            )
        }
        return results?.cid.toString()
    } catch (error) {
        console.error(error)
    }
}

export { readIpfsFile, addIpfsFile }
