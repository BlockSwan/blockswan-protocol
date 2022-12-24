import { API_ENDPOINT } from "../constants/config";

const AuthService = {
	verify: async (idToken: any, evmAddress: string, appPubKey: string, defaultProfileImg: string, email: string, username: string) => {
		const res = await fetch(`${ API_ENDPOINT }/api/auth`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + idToken,
			},
			body: JSON.stringify({ appPubKey: appPubKey, evmAddress: evmAddress, defaultProfileImg: defaultProfileImg, email: email, username: username }),
		});
		const data = await res.json();
		return data;
	}
}

export default AuthService;
// const evmAddress: string = req.body.public_address;
// const defaultProfileImg = req.body.default_profile_img;
// const email = req.body.email;
// const username = req.body.username;