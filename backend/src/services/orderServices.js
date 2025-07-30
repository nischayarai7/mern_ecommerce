import Order from '../models/Order.js'

const createOrder = async (order) => {
    const result = await Order.create(order)
    return result

}

const getAllOrder = async () => {

}

const getOrderById = async (id) => {

}


export const orderServices = { createOrder }