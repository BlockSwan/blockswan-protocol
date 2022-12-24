import { Metadata, MetadataDocument } from '../models/metadata.model'
import { categories } from '../constants/categories'
import { metadataArray } from '../constants/metadata'

import mongoose, { Types } from 'mongoose'
import { SubCategory } from '../models/subcategory.model'

const getMetadataFromName = (name: string): string[] | undefined => {
    let a = metadataArray?.find((e) => e?.name === name)
    return a?.data
}

// add all booleanDeliverables from categories.

export const initBooleanDeliverables = () => {
    console.log("Let's go")
    for (let cat of categories) {
        for (let subCat of cat.subCategories) {
            const { booleanDeliverables } = subCat
            for (let i = 0; i < booleanDeliverables?.length; i++) {
                var metadata: MetadataDocument = new Metadata({
                    _id: new mongoose.Types.ObjectId(),
                    name: booleanDeliverables[i],
                })

                metadata.save(function (err) {
                    if (err)
                        return console.log(
                            '\tFailed to save ' + booleanDeliverables[i]
                        )
                    console.log(
                        '\tSaved ' +
                            booleanDeliverables[i] +
                            ' at ' +
                            metadata?._id
                    )
                })
            }
        }
    }
}
// add all selectables deliverables from metadata.
export const initSelectableDeliberables = () => {
    console.log("Let's go")
    for (let j = 0; j < metadataArray?.length; j++) {
        const { data } = metadataArray[j]
        for (let i = 0; i < data?.length; i++) {
            var metadata: MetadataDocument = new Metadata({
                _id: new mongoose.Types.ObjectId(),
                name: data[i],
            })

            metadata.save(function (err) {
                if (err) return console.log('\tFailed to save ' + data[i])
                console.log('\tSaved ' + data[i] + ' at ' + metadata?._id)
            })
        }
    }
}

// add the corresponding booleanDeliverables to each subcategory.

export const addBooleanDeliverables = async () => {
    for (let cat of categories) {
        console.log(cat?.emoji + ' ' + cat.name)

        for (let subCat of cat?.subCategories) {
            const { booleanDeliverables } = subCat
            let subcategory = await SubCategory.findOne({
                name: subCat?.name,
            })
            if (subcategory) {
                console.log(
                    '\t\tAdding bool deliverables for ' + subcategory.name
                )
                for (let i = 0; i < booleanDeliverables?.length; i++) {
                    let metadata = await Metadata.findOne({
                        name: booleanDeliverables[i],
                    })
                    if (metadata) {
                        subcategory.booleanDeliverables.push(metadata?._id)
                        await subcategory?.save()
                        console.log('\t\tAdded ' + metadata.name)
                    }
                }
            } else
                return console.log(
                    '\t\tFailed to add bool deliverables for ' + subCat.name
                )
        }
    }
}
// add the selectables boolean delverables
export const addSelectableDeliverables = async () => {
    for (let cat of categories) {
        console.log(cat?.emoji + ' ' + cat.name)

        for (let subCat of cat?.subCategories) {
            const { selectableDeliverables } = subCat
            let subcategory = await SubCategory.findOne({
                name: subCat?.name,
            })
            if (subcategory && selectableDeliverables) {
                console.log(
                    '\t\tAdding selectable deliverables for ' + subcategory.name
                )
                for (let i = 0; i < selectableDeliverables?.length; i++) {
                    console.log(selectableDeliverables[i])
                    let data = getMetadataFromName(
                        selectableDeliverables[i].name
                    )

                    if (data) {
                        let metaData: any = []
                        for (let j = 0; j < data?.length; j++) {
                            let metadata = await Metadata.findOne({
                                name: data[j],
                            })

                            if (metadata) {
                                metaData.push(metadata?._id)
                                console.log('\t\tPushed ' + metadata.name)
                            }
                        }
                        subcategory?.selectableDeliverables.push({
                            name: selectableDeliverables[i].name,
                            data: metaData,
                        })
                        await subcategory?.save()
                        console.log(
                            '\t\tSaved ' + metaData + 'to ' + subcategory?.name
                        )
                    }
                }
            } else
                console.log(
                    '\t\tFailed to find deliverables for ' + subCat.name
                )
        }
    }
}
