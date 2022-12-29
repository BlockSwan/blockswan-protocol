import mongoose from 'mongoose'
import { MONGODB_URI } from './utils/envs'

mongoose.Promise = global.Promise

const connectToDatabase = async (): Promise<void> => {
	//const options: ConnectionOptions = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };
	await mongoose.connect(MONGODB_URI) //add option
}

export { connectToDatabase }
