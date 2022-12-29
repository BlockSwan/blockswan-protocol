import { Options } from 'ipfs-core/dist/src/types'
import { IP } from '../utils/envs'

const nodeConfig: Options = {
	repo: './ipfs/',

	config: {
		Addresses: {
			Swarm: [`/ip4/${ IP }/tcp/4001`],
			Gateway: '/ip4/0.0.0.0/tcp/8080',
			API: `/ip4/${ IP }/tcp/5001`,
		},
		Bootstrap: [],
	},
}

export { nodeConfig }
