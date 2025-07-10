import Product from "../model/Product.js"

// Create a new product document in the database
const createProduct = async (data) => {

    // `data` is an object containing the product info to save
    return await Product.create(data)
}

// Get all products with optional filters for brands, ram, and rom
const getAllProduct = async (query = {}) => {

    const filters = {}

    // If brands filter is provided (comma separated), convert to array and trim spaces
    if (query.brands) {
        filters.brand = { $in: query.brands.split(',').map(b => b.trim()) }

        console.log("Brands filter:", filters.brand)
    }

    // If ram filter is provided (comma separated numbers), convert to array of integers
    if (query.ram) {
        filters.ram = { $in: query.ram.split(',').map(n => parseInt(n)) }

        console.log("RAM filter:", filters.ram);
    }

    // If rom filter is provided (comma separated numbers), convert to array of integers

    if (query.rom) {
        filters.rom = { $in: query.rom.split(',').map(n => parseInt(n)) }
        console.log("ROM filter:", filters.rom);
    }



    // Return the filtered list of products from MongoDB collection

    return await Product.find(filters);
}

// Get a single product by its MongoDB document _id
const getProductById = async (id) => {
    return await Product.findById(id)
}

// Delete a product document by its _id
const deleteProductById = async (id) => {
    return await Product.findByIdAndDelete(id)
}

// Update a product document by its _id with new data, return updated document
const updateProduct = async (data, id) => {

    // `{ new: true }` option returns the updated document, not the old one
    return await Product.findByIdAndUpdate(id, data, { new: true })
}

// Export all service functions as an object for easy import/use elsewhere
export const productServices = { createProduct, getAllProduct, getProductById, deleteProductById, updateProduct }
// export { productServices 