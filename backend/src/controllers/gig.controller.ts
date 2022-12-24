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
} from '../constants/errors'
import { addIpfsFile } from '../utils/ipfs'
import { User, UserDocument } from '../models/user.model'
import mongoose, { isObjectIdOrHexString } from 'mongoose'

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
                if (!seller || seller === null)
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
                    if (rel) return res.status(200).json({ message: newGig })
                    return res.status(500).json({ name: FAILED_GIG_CREATION })
                })
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(400).json({ name: FAILED_GIG_CREATION })
    }
}

export { saveGig }
