require('dotenv').config();

const checkRequiredEnvironment = () => {
	if (!process.env.MARKETPLACE_NAME) {
		console.error(`Skipping Marketplace deployment due to missing "MARKETPLACE_NAME" environment variable.`);
		return true;
	}
	return false;
};

export {
	checkRequiredEnvironment
}