import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    category: {
        type: String
    }
}, {
        timestamps: true
    })

const Category = mongoose.model('categories', categorySchema)

export default Category