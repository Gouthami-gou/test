import mongoose from 'mongoose'

const subCategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "categories"
    },
    subCategory: {
        type: String
    }
}, {
        timestamps: true
    })

const subCategory = mongoose.model("subCategories", subCategorySchema)

export default subCategory
