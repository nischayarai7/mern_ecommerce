
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },

    productDescription: {
        type: String
    },

    price: {
        type: Number,
        required: true
    },

    ram: {
        type: Number,
        required: true
    },

    rom: {
        type: Number,
        required: true
    },

    display: {
        type: String,
        required: true
    },

    processor: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },


    stock: {
        type: Number,
        default: 0
    },

    imgUrl: {
        type: String
    },

    featured: {
        type: Boolean,
        default: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    rating: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", productSchema)
export default Product
