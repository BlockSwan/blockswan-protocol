import express from 'express'
import cors from 'cors'
import { HOST, PORT } from './utils/envs'

import { connectToDatabase } from './databaseConnection'

import { loadMonitor } from './middlewares/monitor'

import { categoryRoute } from './routes/category.route'
import { statusRoute } from './routes/status.route'
import { authRoute } from './routes/auth.route'
import { loadNode } from './clusterConnection'
import { ipfsRoute } from './routes/ipfs.route'
import { IPFS } from 'ipfs-core'
import { gigRoute } from './routes/gig.route'
import { userRoute } from './routes/user.route'

const app = express()

// middlewaress
loadMonitor(app)

app.listen(PORT, async () => {
	await connectToDatabase()
	const node: IPFS = await loadNode()

	app.use(
		express.urlencoded({
			extended: true,
		})
	)
	app.use(express.json({ limit: '50mb' }))
	app.use(
		cors({
			origin: '*',
		})
	)
	app.use('/api/', statusRoute())
	app.use('/api/', categoryRoute(node))
	app.use('/api/', userRoute(node))
	app.use('/api/', authRoute(node))
	app.use('/gig/', gigRoute(node))
	app.use('/api/ipfs/', ipfsRoute(node))

	app.get('/api', (req, res) => {
		return res.json({
			message: 'Hello World!',
		})
	})

	console.log(`blockswan-node started on URL ${ HOST }:${ PORT } 🎉`)
})
