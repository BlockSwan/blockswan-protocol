import { Request, Response } from 'express'
import { Metadata } from '../models/metadata.model'
import { Category } from '../models/category.model'

const getAllCategories = async (req: Request, res: Response) => {
	Category.find(
		{},
		{
			_id: 0,
		}
	)
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
			if (usererr)
				return res.status(404).json({
					message: `Failed to load categories`,
				})
			let metadata = await Metadata.find({}) || [];
			return res.status(200).json({
				message: categories,
				metadata: metadata,
			})
		})
}

export { getAllCategories }
