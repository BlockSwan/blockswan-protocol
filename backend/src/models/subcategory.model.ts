import mongoose, { Schema, Model, Document, Types } from 'mongoose'
import { Category, CategoryDocument } from './category.model'
import { Metadata, MetadataDocument } from './metadata.model'

type SubCategoryDocument = Document & {
    name: string
    url: string
    description: string
    category: CategoryDocument
    booleanDeliverables: MetadataDocument[]
    selectableDeliverables: [
        {
            name: string
            data: MetadataDocument[]
        }
    ]
}

type SubCategoryInput = {
    name: SubCategoryDocument['name']
    url: SubCategoryDocument['url']
    //....
}

const subCategorySchema = new Schema(
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
        category: {
            type: Schema.Types.ObjectId,
            ref: () => Category,
        },
        booleanDeliverables: [
            {
                type: Schema.Types.ObjectId,
                ref: () => Metadata,
            },
        ],
        selectableDeliverables: [
            {
                name: Schema.Types.String,
                data: [
                    {
                        type: Schema.Types.ObjectId,
                        ref: () => Metadata,
                    },
                ],
            },
        ],
    },
    {
        collection: 'subcategories',
        timestamps: true,
    }
)

const SubCategory: Model<SubCategoryDocument> =
    mongoose.model<SubCategoryDocument>('SubCategory', subCategorySchema)

export { SubCategory, SubCategoryInput, SubCategoryDocument }
