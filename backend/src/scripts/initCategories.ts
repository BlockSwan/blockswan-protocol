import { categories } from '../constants/categories'
import mongoose from 'mongoose'
import {
    Category,
    CategoryDocument,
    CategoryInput,
} from '../models/category.model'
import { SubCategory, SubCategoryDocument } from '../models/subcategory.model'

const saveCategorySuite = async (index: number) => {
    const { name, emoji, subCategories, url, faqs, description } =
        categories[index]

    var category: CategoryDocument = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        emoji: emoji,
        description: description,
        url: url,
        faqs: faqs,
    })

    let print = emoji + ' ' + name

    category.save(async function (err) {
        if (err) return console.log('\tFailed to save ' + print)
        console.log('\tSaved ' + print)

        for (let subcat of subCategories) {
            var subCategory: SubCategoryDocument = new SubCategory({
                name: subcat.name,
                description: subcat.description,
                url: subcat.url,
                category: category._id,
            })

            subCategory.save(function (err) {
                if (err) return console.log('\t\tFailed to save ' + subcat.name)
                // thats it!
            })

            category?.subCategories?.push(subCategory._id)
            await category.save()
            console.log('\t\tSaved ' + subcat?.name)
        }
    })
}

export const initCategories = async () => {
    // Loop through each category in the data
    for (let i = 0; i < categories.length; i++) {
        await saveCategorySuite(i)
    }
}
