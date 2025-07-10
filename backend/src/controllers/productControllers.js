import { productServices } from "../services/productServices.js"


const createProduct = async (req, res) => {
    try {
        const product = req.body

        if (!product) {
            return res.status(400).json({ message: "Field cannot be empty" })
        }

        const data = await productServices.createProduct(req.body)

        res.status(200).json({
            message: "Product created successfully", data
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Error occurred" })

    }

}

const getAllProduct = async (req, res) => {
    try {

        console.log(req.query)

        //sending req.query to services
        const data = await productServices.getAllProduct(req.query)

        res.status(200).json({
            message: "All Product Fetched",
            data
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: "Error While Fetching Product" })
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await productServices.getProductById(id)

        res.status(200).json({
            message: "Success",
            data: data
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: "Error Occurred" })
    }
}
const deleteProductById = async (req, res) => {
    try {

        const id = req.params.id

        if (!req.params.id) {
            return res.status(400).json({ message: "Product ID is required" });

        }
        const data = await productServices.deleteProductById(id)
        res.status(200).json({ message: "Success", data })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Error while deleting" })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const product = req.body

        const data = await productServices.updateProduct(product, productId)
        res.status(200).json({ message: "Successfully Updated", data })

    } catch (error) {

        console.log(error.message)
        res.status(500).json({ message: "Error While updating", error: "error.message" })

    }
}
export { createProduct, getAllProduct, getProductById, deleteProductById, updateProduct }
