import mongoose, { Schema, Model, Document, ObjectId } from 'mongoose'
import { User, UserDocument } from './user.model'
import { SubCategory, SubCategoryDocument } from './subcategory.model'

interface GigModel extends Model<GigDocument> {
	priceRange(
		subcategory: unknown
	): Promise<[{ highestPrice: number, lowestPrice: number }] | null>
}

type GigDocument = Document & {
	title: string
	subcategory: SubCategoryDocument
	selectablesDeliverables: [
		{
			name: string
			data: [string]
		}
	]
	tags: string[]
	packages: [
		{
			name: string
			deliverable: string
			delivery: number
			revision: string
			includes: [{ name: string }]
			price: number
		}
	]
	description: {
		html: string
		text: string
	}
	faqs?: [
		{
			question: string
			answer: string
		}
	]
	requirements?: [
		{
			type?: string
			question?: string
			required?: boolean
			multiple?: boolean
			data?: string[]
		}
	]
	imgs: string[]
	seller?: UserDocument
	metadataHash?: string
	creator?: UserDocument
	isPaused?: boolean,
	isDeleted?: boolean,
}

type GigInput = {
	title?: GigDocument['title']
	subcategory?: GigDocument['subcategory']
	selectableDeliverables?: GigDocument['selectablesDeliverables']
	tags?: GigDocument['tags']
	packages?: GigDocument['packages']
	description?: GigDocument['description']
	faqs?: GigDocument['faqs']
	requirements?: GigDocument['requirements']
	imgs?: GigDocument['imgs']
	seller?: GigDocument['seller']
	metadataHash?: GigDocument['metadataHash']
	creator?: GigDocument['creator']
	isPaused?: GigDocument['isPaused']
	isDeleted?: GigDocument['isDeleted']
}

const gigsSchema = new Schema(
	{
		title: {
			type: Schema.Types.String,
			index: true,
		},
		subcategory: {
			type: Schema.Types.ObjectId,
			ref: () => SubCategory,
		},
		selectableDeliverables: [
			{
				name: Schema.Types.String,
				data: [Schema.Types.String],
			},
		],
		tags: [
			{
				type: Schema.Types.String,
			},
		],
		packages: [
			{
				name: Schema.Types.String,
				deliverable: Schema.Types.String,
				delivery: Schema.Types.Number,
				revision: Schema.Types.String,
				includes: [{ name: Schema.Types.String }],
				price: Schema.Types.Number,
			},
		],
		description: {
			html: Schema.Types.String,
			text: Schema.Types.String,
		},
		faqs: [
			{
				question: Schema.Types.String,
				answer: Schema.Types.String,
			},
		],
		requirements: [
			{
				type: {
					type: Schema.Types.String,
				},
				question: Schema.Types.String,
				required: Schema.Types.Boolean,
				multiple: Schema.Types.Boolean,
				data: [Schema.Types.String],
			},
		],
		imgs: [Schema.Types.String],
		seller: {
			type: Schema.Types.ObjectId,
			ref: () => User,
		},
		metadataHash: {
			type: Schema.Types.String,
		},
		isPaused: {
			type: Schema.Types.Boolean,
			default: false
		},
		isDeleted: {
			type: Schema.Types.Boolean,
			default: false
		}
	},
	{
		collection: 'gigs',
		timestamps: true,
		statics: {
			async priceRange(subcategory: unknown) {
				return this.aggregate([
					{
						$match: {
							subcategory: { $eq: subcategory },
							isPaused: { $eq: false },
							isDeleted: { $eq: false },
						},
					},
					{
						$project: {
							prices: '$packages.price'
						}
					},
					{
						$unwind: '$prices'
					},
					{
						$group: {
							_id: null,
							highestPrice: { $max: '$prices' },
							lowestPrice: { $min: '$prices' }
						}
					}

				])
			}
		}
	}
)

const Gig: GigModel = mongoose.model<GigDocument, GigModel>('Gig', gigsSchema)

export { Gig, GigInput, GigDocument }
