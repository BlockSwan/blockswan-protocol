import { Request, Response } from 'express'
import { Metadata } from '../models/metadata.model'
import { Category } from '../models/category.model'
import { Gig } from '../models/gig.model'
import { readIpfsFile } from '../utils/ipfs'
import { IPFS } from 'ipfs-core-types'
import { IPFSPath } from 'ipfs-core-types/src/utils'

const getAllCategories = async (req: Request, res: Response, node: IPFS) => {
	Category.find({}, {})
		.populate({
			path: 'subCategories',
			select: '',
			populate: {
				path: 'booleanDeliverables',
				model: 'Metadata',
			},
		})
		.populate({
			path: 'subCategories',
			populate: {
				path: 'selectableDeliverables.data',
				model: 'Metadata',
			},
		})
		.exec(async function (usererr, categories) {
			// const gigsPerSubcategory = await Gig.aggregate([
			//     {
			//         $lookup: {
			//             from: 'subcategories',
			//             localField: 'subcategory',
			//             foreignField: '_id',
			//             as: 'subcategory',
			//         },
			//     },
			//     // Unwind the subcategory array
			//     {
			//         $unwind: '$subcategory',
			//     },

			//     {
			//         $lookup: {
			//             from: 'users',
			//             localField: 'seller',
			//             foreignField: '_id',
			//             as: 'seller',
			//         },
			//     },
			//     // Unwind the subcategory array
			//     {
			//         $unwind: '$seller',
			//     },

			//     // Perform a second left outer join with the categories collection
			//     {
			//         $lookup: {
			//             from: 'categories',
			//             localField: 'subcategory.category',
			//             foreignField: '_id',
			//             as: 'subcategory.category',
			//         },
			//     },
			//     // Unwind the category array
			//     {
			//         $unwind: '$subcategory.category',
			//     },

			//     // Group the documents by subcategory and count the number of gigs per subcategory
			//     {
			//         $group: {
			//             _id: '$subcategory._id',
			//             subcategoryName: { $first: '$subcategory.url' },
			//             categoryName: { $first: '$subcategory.category.url' },
			//             gigs: { $push: '$$ROOT' },
			//             count: { $sum: 1 },
			//         },
			//     },

			//     // Return all gigs for each subcategory
			//     {
			//         $project: {
			//             _id: 0,
			//             subcategoryName: '$subcategoryName',
			//             categoryName: '$categoryName',
			//             gigs: {
			//                 $map: {
			//                     input: '$gigs',
			//                     as: 'gig',
			//                     in: '$$gig',
			//                 },
			//             },
			//         },
			//     },
			// ])

			// gigsPerSubcategory?.forEach(async (el) => {
			//     el?.gigs.forEach(async (gig: any) => {
			//         gig?.imgs?.forEach(async (img: string, index: number) => {
			//             let hash = await readIpfsFile(node, img.toString())
			//             gig.imgs[index] = hash || ''
			//         })
			//     })
			// })

			if (usererr)
				return res.status(404).json({
					message: `Failed to load categories`,
				})
			let metadata = (await Metadata.find({})) || []
			return res.status(200).json({
				message: categories,
				metadata: metadata,
				//     gigs: gigsPerSubcategory,
			})
		})
}

export { getAllCategories }
