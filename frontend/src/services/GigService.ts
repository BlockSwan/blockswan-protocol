import { GigProps } from './../types/types';
import { API_ENDPOINT } from "../constants/config";
import { convertToBase64 } from '../utils/formatters';

const GigService = {
	create: async (props: GigProps, evmAddress: string) => {

		let files = [];

		if (props.imgs) {
			for (let i = 0; i < props.imgs.length; i++) {

				let file = await convertToBase64(props.imgs[i])
				files.push(file);


			}
		}

		console.log(files);


		return await fetch(`${ API_ENDPOINT }/gig/new`, {
			method: 'post',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...props, evmAddress: evmAddress, files: files }),
		}).then(async (data) => {
			let _d = await data?.json();
			console.log(_d);
		}).catch((err) => console.group(err));

	}
}

export default GigService;
