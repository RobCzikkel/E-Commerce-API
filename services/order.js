const OrderInstance = require('../models/orders');
const OrderModel = new OrderInstance();

module.exports = {

    getOrders: async(user_id) => {
        const response = await OrderModel.getOrders(user_id);
        return response;
    },

    findOrder: async(id) => {
        const response = await OrderModel.findOrder(id)
        return response;
    }
}