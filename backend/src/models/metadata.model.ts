import mongoose, { Schema, Model, Document } from 'mongoose'

type MetadataDocument = Document & {
    name: string
}

type MetadataInput = {
    name: MetadataDocument['name']
}

const metadataSchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
    },
    {
        collection: 'metadatas',
        timestamps: true,
    }
)

const Metadata: Model<MetadataDocument> = mongoose.model<MetadataDocument>(
    'Metadata',
    metadataSchema
)

export { Metadata, MetadataDocument, MetadataInput }
