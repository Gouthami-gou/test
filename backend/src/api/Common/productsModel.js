import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "categories"
    },
    subCategory: {
        type:String
    },
    productName: {
        type: String
    },
    price: {
        type: String
    },
    modal: {
        type: String
    },
    description: {
        type: String
    }
}, {
        timestamps: true
    })

const Products = mongoose.model('products', productSchema)

export default Products