import Order from '../models/Order.js'

const createOrder = async (order) => {
    const result = await Order.create(order)
    return result

}

const getAllOrder = async () => {
    return await Order.find()
}

const getOrderById = async (id) => {
    return await Order.findById(id)

}

const getOrderByUserId = async (userId) => {
    return await Order.find({ user: userId })

}

const updateOrderStatus = async (id, status) => {
    return await Order.findByIdAndUpdate(id, {
        orderStatus: status
    }, { new: true })
}

const updatePaymentStatus = async (id, status) => {
    return await Order.findByIdAndUpdate(id, {
        paymentStatus: status
    }, { new: true })
}

export const orderServices = { createOrder, getAllOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus }