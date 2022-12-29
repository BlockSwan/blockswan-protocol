import { Request, Response } from 'express'
import { IPFS } from 'ipfs-core-types'
import { Gig, GigDocument, GigInput } from '../models/gig.model'
import { SubCategory } from '../models/subcategory.model'
import {
	MISSING_GIG_SUBCATEGORY,
	MISSING_SELLER_ID,
	FAILED_ADD_IPFS,
	FAILED_GIG_CREATION,
	CATCH_ERROR,
	MISSING_EVM_ADDRESS,
	FAILED_EDIT_GIG,
	FAILED_QUERY_USER,
} from '../constants/errors'
import { addIpfsFile } from '../utils/ipfs'
import { User, UserDocument } from '../models/user.model'
import mongoose, { isObjectIdOrHexString, mongo } from 'mongoose'
import { getUser } from './user.controller'

const saveGig = async (req: Request, res: Response, node: IPFS) => {
	try {
		let newGig = {} as GigInput
		let tmp = {} as any
		newGig.title = req.body.title
		let subcategory = await SubCategory.findOne({
			name: req?.body?.subcategory,
		})
		if (!subcategory)
			return res.status(400).json({ message: MISSING_GIG_SUBCATEGORY })
		newGig.subcategory = subcategory._id
		newGig.selectableDeliverables = req?.body?.selectableDeliverables
		newGig.tags = req?.body?.tags
		newGig.packages = req?.body?.packages
		newGig.description = req?.body?.description
		newGig.faqs = req?.body?.faqs
		newGig.requirements = req?.body?.requirements

		User.findOne({ evmAddress: req?.body?.evmAddress }).then(
			async (seller) => {
				if (!seller || seller === null || seller === undefined)
					return res.status(400).json({ name: MISSING_SELLER_ID })
				newGig.seller = seller._id

				let metadataHash = await addIpfsFile(
					node,
					Buffer.from(
						JSON.stringify({
							...newGig,
							sellerEvmAddress: seller.evmAddress,
						})
					)
				)
				if (!metadataHash)
					return res.status(400).json({ name: FAILED_ADD_IPFS })

				newGig.metadataHash = JSON.stringify(metadataHash)
				let imgs = []
				for (let i = 0; i < req.body.files?.length; i++) {
					//let img64 = req.body.files[i].split(',')[1];
					let img64 = req.body.files[i]
					let imgHash = await addIpfsFile(node, img64)

					imgs.push(imgHash)
				}
				newGig.imgs = imgs as string[]
				if (!req?.body._id) {


					let gig: GigDocument = new Gig({
						_id: new mongoose.Types.ObjectId(),
						seller: seller._id,
						...newGig,
					})

					gig.save(async function (err, newGig) {
						if (err) {
							console.log(err)
							return res
								.status(500)
								.json({ name: FAILED_GIG_CREATION })
						}

						let rel = await User.updateOne(
							{ evmAddress: seller?.evmAddress },
							{ $push: { gigs: newGig?._id } }
						)
						if (rel) {
							User.getByEvmAddress(seller.evmAddress || "", node).then((data) => {
								if (!data || data === undefined)
									return res.status(400).json({ message: FAILED_QUERY_USER })
								return res.status(200).json({ message: data })
							})
						}
						return res.status(500).json({ name: FAILED_GIG_CREATION })
					})
				} else {
					Gig.updateOne({ _id: req?.body._id }, {
						seller: seller._id,

						...newGig
					}).then(() => {
						User.getByEvmAddress(seller.evmAddress || "", node).then((data) => {
							if (!data || data === undefined)
								return res.status(400).json({ message: FAILED_QUERY_USER })
							return res.status(200).json({ message: data })
						})

					}).catch((err) => {
						console.error(err);
						return res.status(500).json({ name: "Failed to edit the gig" })
					})
				}
			}
		)
	} catch (err) {
		console.error(err)
		return res.status(400).json({ name: FAILED_GIG_CREATION })
	}
}

const pauseGig = async (req: Request, res: Response, node: IPFS) => {
	try {
		const { gigId, isPaused, evmAddress } = req?.body
		if (!gigId || isPaused === undefined || !evmAddress) return res.status(400).json({ name: "Missing gigId, isPaused and evmAddress" })
		await Gig.updateOne({
			_id: gigId,
		}, { isPaused: isPaused })
		User.getByEvmAddress(evmAddress, node).then((data) => {
			if (!data || data === undefined)
				return res.status(400).json({ message: FAILED_QUERY_USER })
			return res.status(200).json({ message: data })
		})
	} catch (err) {
		console.error(err)
		return res.status(400).json({ name: FAILED_EDIT_GIG })
	}
}

const deleteGig = async (req: Request, res: Response, node: IPFS) => {
	try {
		const { gigId, isDeleted, evmAddress } = req?.body
		if (!gigId || isDeleted === undefined || !evmAddress) return res.status(400).json({ name: "Missing gigId, isDeleted and evmAddress" })
		await Gig.updateOne({
			_id: gigId,
		}, { isDeleted: isDeleted })
		User.getByEvmAddress(evmAddress, node).then((data) => {
			if (!data || data === undefined)
				return res.status(400).json({ message: FAILED_QUERY_USER })
			return res.status(200).json({ message: data })
		})

	} catch (err) {
		console.error(err)
		return res.status(400).json({ name: FAILED_EDIT_GIG })
	}
}


const getGigsPerSubCategory = async (req: Request, res: Response, node: IPFS) => {

	try {

		const page = req.body.page ? parseInt(req?.body?.page, 10) : 1;
		const perPage = 9

		const sortField = req.body.sortField || 'price';
		const sortOrder = req.body.sortOrder || 'asc';
		const subcategoryURL = req.body.subcategory;
		if (!subcategoryURL) return res.status(400).json({ name: "Missing subcategory" })

		const selectableDeliverables = req.body.selectableDeliverables
			? req.body.selectableDeliverables
			: [];

		const skip = (page - 1) * perPage;
		const limit = perPage;
		const subCatID = new mongoose.Types.ObjectId(subcategoryURL)
		const pipeline: any[] = [
			{
				$match: {
					subcategory: { $eq: subCatID },
					isPaused: { $eq: false },
					isDeleted: { $eq: false },
				},
			},
			{
				$lookup: {
					from: 'users',
					localField: 'seller',
					foreignField: '_id',
					as: 'seller',
				},
			},
			{
				$unwind: '$seller',
			},
			// {
			// 	$sort: { 'packages.price': 1 }
			// }
		];



		// Add a stage to the pipeline to filter by selectable deliverables if specified in the request query
		if (selectableDeliverables.length > 0) {
			console.log("With fiilter")
			console.log(selectableDeliverables);
			let arr = selectableDeliverables.reduce((acc: any, obj: any) => acc?.concat(obj?.data), [])
			console.log(JSON.stringify(arr, null, 4));

			// Push the $match stage to the pipeline
			pipeline.push(
				{
					$match: {
						'selectablesDeliverables.data': {
							$in: arr
						}
					}
				}
			);
		}
		const prices = await Gig.priceRange(subCatID);
		let minPrice, maxPrice;
		if (req?.body?.priceRange !== null) {
			minPrice = req?.body?.priceRange[0];
			maxPrice = req?.body?.priceRange[1];
		} else {
			minPrice = prices ? prices[0]?.lowestPrice : null
			maxPrice = prices ? prices[0]?.highestPrice : null
		}

		const priceFilter: any = {};

		priceFilter['packages.price'] = { $gte: minPrice, $lte: maxPrice }
		pipeline.push({ $match: priceFilter })


		// Add a stage to the pipeline to sort the results by the specified field and order
		const sort: any = {};
		sort[sortField] = sortOrder === 'asc' ? 1 : -1;
		pipeline.push({ $sort: sort });

		// Add a stage to the pipeline to skip and limit the results based on the pagination parameters
		pipeline.push({ $skip: skip });
		pipeline.push({ $limit: limit });
		// Execute the aggregate query using the pipeline

		const gigsPerSubcategory: any = await Gig.aggregate(pipeline);
		const count = await Gig.count({ subcategory: subCatID });





		let object = {
			page: page,
			perPage: perPage,
			total: count,
			gigs: gigsPerSubcategory,
			highestPrice: prices ? prices[0]?.highestPrice : null,
			lowestPrice: prices ? prices[0]?.lowestPrice : null
		}

		// Return the paginated and filtered results to the client
		return res.json(object);


	} catch (err) {
		console.error(err);
		return res.status(400).json({ name: "Failed to get gigs" })
	}
}


export { saveGig, pauseGig, deleteGig, getGigsPerSubCategory }
