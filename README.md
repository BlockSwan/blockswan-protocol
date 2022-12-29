```
______ _            _    _____
| ___ \ |          | |  /  ___|
| |_/ / | ___   ___| | _\ `--.__      ____ _ _ __
| ___ \ |/ _ \ / __| |/ /`--. \ \ /\ / / _` | '_ \
| |_/ / | (_) | (__|   </\__/ /\ V  V / (_| | | | |
\____/|_|\___/ \___|_|\_\____/  \_/\_/ \__,_|_| |_|
```

# Blockswan protocol (Still in development)

A dockerized application to run a blockswan node for a decentralised and non-custodial digital services marketplace. The node is composed of:

- NodeJS, Express backend running the API and a IPFS node connected to the blockswan cluster, replicating data to a MongoDB instance.
- React client interface

## HOW TO USE

Once you cloned the protocol repository, go to the frontend folder and create a `.env` file from the `.env.example` and open it.

```
cd frontend
cp .env.example .env
vim .env
```

Setup the frontend environment variables:

```
REACT_APP_BACKEND_IP=127.0.0.1
REACT_APP_BACKEND_PORT=4000
REACT_APP_BACKEND_HOST=http://
```

Go to the backend repository and repeat the process:

```
cd ../backend
cp .env.example .env
vim .env
```

Setup the backend environment variables:

```
IP=127.0.0.1
HOST=http://
PORT=4000
LOG_IPFS=false
MONGODB_URI=your-backup-mongodb-uri
```

Go to the root directory and start the docker containers

```
cd ..
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) to view the react interface in your browser.
Open [http://localhost:4000/api](http://localhost:4000/api) to get an API answer

## [Official links](https://resources.blockswan.app/)

## Connect with the community

You can join us in the [Discord]() or at the [Twitter](). Feel free to ask any questions about the protocol, talk about Blockswan, or exchange about the weather.
