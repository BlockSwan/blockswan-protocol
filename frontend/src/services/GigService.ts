import { GigProps, SelectableDeliverablesProps } from './../types/types';
import { API_ENDPOINT } from "../constants/config";
import { convertToBase64 } from '../utils/formatters';

const GigService = {
	create: async (props: GigProps, evmAddress: string) => {

		let files = [];

		if (props.imgs) {
			for (let i = 0; i < props.imgs.length; i++) {

				if (typeof props.imgs[i] !== "string") {
					let file = await convertToBase64(props.imgs[i])
					files.push(file);
				} else files.push(props.imgs[i])
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
			return _d?.message;
		}).catch((err) => console.error(err));

	},
	pause: async (evmAddress: string, gigId: any, isPaused: boolean) => {
		const res = await fetch(`${ API_ENDPOINT }/gig/pause`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ evmAddress: evmAddress, gigId: gigId, isPaused: isPaused }),
		});
		const data = await res.json();
		return data?.message;
	},
	delete: async (evmAddress: string, gigId: any, isDeleted: boolean) => {
		const res = await fetch(`${ API_ENDPOINT }/gig/delete`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ evmAddress: evmAddress, gigId: gigId, isDeleted: isDeleted }),
		});
		const data = await res.json();
		return data?.message;
	},
	perSubCategory: async (subcategory: string, page: number, sortField: string, sortOrder: string, selectableDeliverables: SelectableDeliverablesProps[] | [], priceRange: number[] | null) => {
		const res = await fetch(`${ API_ENDPOINT }/gig/subcategory`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ subcategory: subcategory, page: page, sortField: sortField, sortOrder: sortOrder, selectableDeliverables: selectableDeliverables, priceRange: priceRange }),
		});
		const data = await res.json();
		console.log(data);
		return data;
	},
}

export default GigService;
