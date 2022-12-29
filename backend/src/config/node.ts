import { Options } from 'ipfs-core/dist/src/types'

const nodeConfig: Options = {
	repo: './ipfs/',

	config: {
		Addresses: {
			Swarm: ['/ip4/172.20.10.3/tcp/4001'],
			Gateway: '/ip4/0.0.0.0/tcp/8080',
			API: '/ip4/172.20.10.3/tcp/5001',
		},
		Bootstrap: [],
	},
}

export { nodeConfig }
