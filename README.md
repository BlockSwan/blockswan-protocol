```
______ _            _    _____
| ___ \ |          | |  /  ___|
| |_/ / | ___   ___| | _\ `--.__      ____ _ _ __
| ___ \ |/ _ \ / __| |/ /`--. \ \ /\ / / _` | '_ \
| |_/ / | (_) | (__|   </\__/ /\ V  V / (_| | | | |
\____/|_|\___/ \___|_|\_\____/  \_/\_/ \__,_|_| |_|
```

# Blockswan protocol

The Blockswan Protocol is a decentralized and non-custodial digital services marketplace, still in development. It is composed of a dockerized application to run a Blockswan node, which consists of a NodeJS, Express backend running the API and an IPFS node connected to the Blockswan cluster, replicating data to a MongoDB instance, as well as a React client interface.


## Repository structure

* `backend/`: Contains the NodeJS, Express backend that runs the API and the IPFS node that is connected to the Blockswan cluster. This replicates data to a MongoDB instance and sync blockchain events.
* `contracts/`: Contains the smart contracts used by the Blockswan Protocol.
* `frontend/`: Contains the React client interface for the Blockswan Protocol.
* `packages/`: Contains the multiple packages managed by Lerna.

## Usage

To use the Blockswan Protocol, follow the instructions below:

1.	Clone the Blockswan Protocol repository.
2.	Navigate to the `frontend/` folder and create a `.env` file from the `.env.example` file.

```shell
cd frontend
cp .env.example .env
vim .env
```

Set up the frontend environment variables by modifying the `.env` file as follows:

```shell
REACT_APP_BACKEND_IP=127.0.0.1
REACT_APP_BACKEND_PORT=4000
REACT_APP_BACKEND_HOST=http://
```

3.	Navigate to the backend folder and create a `.env` file from the `.env.example` file:

```shell
cd ../backend
cp .env.example .env
vim .env
```
	Set the backend environment variables as follows:

```shell
IP=127.0.0.1
HOST=http://
PORT=4000
LOG_IPFS=false
MONGODB_URI=your-backup-mongodb-uri
```

4.	Navigate back to the root directory and start the docker containers:

```shell
npm run blockswan
```

Open [http://localhost:3000](http://localhost:3000) to view the react interface in your browser.
Open [http://localhost:4000/api](http://localhost:4000/api) to get an API answer

## [Official links](https://resources.blockswan.app/)

## Connect with the community

You can join us in the [Discord]() or at the [Twitter](). Feel free to ask any questions about the protocol, talk about Blockswan, or exchange about the weather.
