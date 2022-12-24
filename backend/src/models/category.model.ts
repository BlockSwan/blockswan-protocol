import mongoose, { Schema, Model, Document, Types } from 'mongoose'
import { SubCategory, SubCategoryDocument } from './subcategory.model'

type Faq = {
    question: string
    answer: string
}

type CategoryDocument = Document & {
    name: string
    url: string
    emoji: string
    description: string
    faqs?: Faq[] | []
    subCategories?: SubCategoryDocument[]
}

type CategoryInput = {
    name: CategoryDocument['name']
    url: CategoryDocument['url']
    emoji: CategoryDocument['emoji']
    description: CategoryDocument['description']
    faqs: CategoryDocument['faqs']
}

const categorySchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
        url: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: Schema.Types.String,
        },
        emoji: {
            type: Schema.Types.String,
        },
        faqs: {
            type: [
                {
                    question: Schema.Types.String,
                    answer: Schema.Types.String,
                },
            ],
            required: false,
        },
        subCategories: [
            {
                type: Schema.Types.ObjectId,
                ref: () => SubCategory,
            },
        ],
    },
    {
        collection: 'categories',
        timestamps: true,
    }
)

const Category: Model<CategoryDocument> = mongoose.model<CategoryDocument>(
    'Category',
    categorySchema
)

export { Category, CategoryInput, CategoryDocument }
