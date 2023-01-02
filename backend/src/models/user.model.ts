import { IPFS } from 'ipfs-core-types'
import mongoose, { Schema, Model, Document, Error } from 'mongoose'
import { readIpfsFile } from '../utils/ipfs'
import { Category } from './category.model'
import { GigDocument, Gig } from './gig.model'

interface UserModel extends Model<UserDocument> {
    getByEvmAddress(
        evmAddress: string,
        node: IPFS
    ): Promise<UserDocument | null>
}

type UserDocument = Document & {
    username?: string | undefined
    email?: string | undefined
    password?: string | undefined
    evmAddress: string | undefined
    isOnline?: boolean | undefined
    defaultProfileImg?: string | undefined
    gigs?: GigDocument[] | undefined
    country?:
        | { code: string | undefined; label: string | undefined }
        | undefined
    description?: string | undefined
    languages?:
        | undefined
        | [{ language: string | undefined; level: string | undefined }]
    skills?: undefined | [string | undefined]
    educations?:
        | undefined
        | [
              {
                  country: string | undefined
                  university: string | undefined
                  title: string | undefined
                  major: string | undefined
                  year: number | undefined
              }
          ]
    certifications?: [
        {
            certificate: string | undefined
            certifier: string | undefined
            year: number | undefined
        }
    ]
}

type UserInput = {
    username?: UserDocument['username']
    email?: UserDocument['email']
    evmAddress?: UserDocument['evmAddress']
    isOnline?: UserDocument['isOnline']
    defaultProfileImg?: UserDocument['defaultProfileImg']
    gigs?: UserDocument['gigs']
    country?: UserDocument['country']
    description?: UserDocument['description']
    languages?: UserDocument['languages']
    skills?: UserDocument['skills']
    educations?: UserDocument['educations']
    certifications?: UserDocument['certifications']
}

const usersSchema = new Schema(
    {
        username: {
            type: Schema.Types.String,
            index: true,
        },
        email: {
            type: Schema.Types.String,
            unique: true,
        },
        password: {
            type: Schema.Types.String,
        },
        evmAddress: {
            type: Schema.Types.String,
            required: true,
            unique: true,
            index: true,
        },
        defaultProfileImg: {
            type: Schema.Types.String,
        },
        gigs: [
            {
                type: Schema.Types.ObjectId,
                ref: () => Gig,
            },
        ],
        isOnline: {
            type: Schema.Types.Boolean,
            default: false,
        },
        country: {
            label: {
                type: Schema.Types.String,
            },
            code: {
                type: Schema.Types.String,
            },
        },
        description: {
            type: Schema.Types.String,
        },
        languages: [
            {
                language: {
                    type: Schema.Types.String,
                },
                level: {
                    type: Schema.Types.String,
                },
            },
        ],
        skills: [
            {
                type: Schema.Types.String,
            },
        ],
        educations: [
            {
                country: {
                    type: Schema.Types.String,
                },
                university: {
                    type: Schema.Types.String,
                },
                title: {
                    type: Schema.Types.String,
                },
                major: {
                    type: Schema.Types.String,
                },
                year: {
                    type: Schema.Types.Number,
                },
            },
        ],
        certifications: [
            {
                certificate: {
                    type: Schema.Types.String,
                },
                certifier: {
                    type: Schema.Types.String,
                },
                year: {
                    type: Schema.Types.Number,
                },
            },
        ],
    },
    {
        collection: 'users',
        timestamps: true,
        statics: {
            async addGig(user: UserDocument, gig: GigDocument) {
                this.updateOne(
                    { evmAddress: user.evmAddress },
                    {
                        $push: { gigs: gig },
                    }
                )
            },
            async getByEvmAddress(
                evmAddress: string,
                node: IPFS
            ): Promise<UserDocument | null> {
                return new Promise((resolve, reject) => {
                    this.findOne({ evmAddress: evmAddress })
                        .populate({
                            path: 'gigs',
                            model: 'Gig',
                            match: { isDeleted: false },
                            populate: {
                                path: 'subcategory',
                                model: 'SubCategory',
                                populate: {
                                    path: 'category',
                                    model: 'Category',
                                },
                            },
                        })
                        .exec(async (err: any, res: any) => {
                            if (err || !res || res === undefined)
                                return reject(err)

                            if (res.gigs) {
                                for (let i = 0; i < res?.gigs?.length; i++) {
                                    if (
                                        !res?.gigs[i].imgs ||
                                        res?.gigs[i]?.imgs.length === 0
                                    )
                                        return resolve(res)

                                    let hash = res?.gigs[i].imgs[0].toString()
                                    res.gigs[i].imgs[0] =
                                        (await readIpfsFile(node, hash)) || ''

                                    if (res?.gigs[i]?.imgs[1]) {
                                        let hash =
                                            res?.gigs[i].imgs[1].toString()
                                        res.gigs[i].imgs[1] =
                                            (await readIpfsFile(node, hash)) ||
                                            ''
                                    }

                                    if (res?.gigs[i].imgs[2]) {
                                        let hash =
                                            res?.gigs[i].imgs[2].toString()
                                        res.gigs[i].imgs[2] =
                                            (await readIpfsFile(node, hash)) ||
                                            ''
                                    }
                                }
                            }
                            return resolve(res)
                        })
                })
            },
        },
    }
)

const User: UserModel = mongoose.model<UserDocument, UserModel>(
    'User',
    usersSchema
)

export { User, UserInput, UserDocument }
