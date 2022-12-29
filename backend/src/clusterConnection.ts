import { IPFSPath } from 'ipfs-core-types/src/utils'
import { IPFS, create } from 'ipfs-core'
import type { CID } from 'multiformats/cid'
import { nodeConfig } from './config/node'
import { logASCIIArt } from './scripts/logs'
import { addIpfsFile } from './utils/ipfs'
import { categories } from './constants/categories'
import { ADD_SUB } from './constants/pubsubs'
import { LOG_IPFS } from './utils/envs'

const loadNode = async () => {
	logASCIIArt()

	const node: IPFS = await create(nodeConfig)

	node.pubsub.subscribe(ADD_SUB, (msg) => {
		if (LOG_IPFS) {
			const buffer = Buffer.from(msg.data)
			const str = buffer.toString()
			console.log(`File ${ str } was added to the cluster!`)
		}
	})

	node.log?.tail()
	const id = await node.id()
	let peers = await node.swarm.peers()
	console.log(`Peer ID: ${ id.id }`)
	console.log(`Connected to ${ peers.length } peer(s)`)
	for (let i = 0; i < peers.length; i++) {
		console.log(peers[i])
		console.log(peers[i].peer)
	}
	console.log(`Total addresses: ${ id?.addresses?.length }`)
	console.log(`Listening on address: ${ id.addresses[0] }`)
	console.log(
		`Listening on port: ${ id.addresses[0].toString().split('/')[4] } `
	)

	const version = await node.version()
	console.log('Version:', version.version)

	// const file = await node.add({
	// 	path: 'hello.txt',
	// 	content: new TextEncoder().encode('Hello World 101')
	// })

	// console.log('Added file:', file.path, file.cid.toString())
	// try {
	// 	// @ts-expect-error CID has no toUpperCase method
	// 	file.cid.toUpperCase()
	// } catch (error) {

	// }

	// const content = await readIpfsFile(node, file.cid)

	// console.log('Added file contents:', content)

	const fileBuffer = Buffer.from(JSON.stringify(categories))
	let hash = await addIpfsFile(node, fileBuffer)

	// const cidString: any = 'QmcFFsJH4s9AXeT9VBs4xjyrkbZshJhspeES1TuBgVmNhi';
	// const cid: CID = cidString;

	// const content2 = await readIpfsFile(node, cid);
	// console.log(content2);

	return node
}

export { loadNode }
