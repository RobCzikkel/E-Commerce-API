const CartInstance = require('../models/carts');
const CartItemInstance = require('../models/cartItem');
const OrderInstance = require('../models/orders');
const OrderItemInstance = require('../models/orderItems');
const OrderItemModel = new OrderItemInstance();
const CartModel = new CartInstance();
const CartItemModel = new CartItemInstance();
const OrderModel = new OrderInstance();

module.exports = {

    getCart: async(data) => {
        const cart = await CartModel.getCart(data);
        const items = await CartItemModel.getItems(cart.id);

        cart.items=  items
        return cart;
    },

    createCart: async(id) => {
        const response = await CartModel.createCart(id);
        return response;
    },

    createCartItem: async(user_id, data) => {
        const cart = await CartModel.getCart(user_id);
        const params = {cart_id: cart.id, ...data}
        const response = await CartItemModel.addItem(params);
        return response;
    },

    updateItem: async(id, params) => {
        const response = await CartItemModel.updateItem(id, params);
        return response;
    },

    deleteItem: async(id) => {
        const response = await CartItemModel.deleteItem(id);
        return response;
    },

    checkout: async(cart_id, user_id) => {
        const items = await CartItemModel.getItems(cart_id);

        const total = items.reduce((total, cur) => {
            return total += (Number(cur.price) * Number(cur.quantity))}, 0);

        const order = await OrderModel.createOrder({ user_id, total });
        const order_id = order.id;
        
        order.items = await Promise.all(items.map(async (item) => await OrderItemModel.createItem({order_id: order.id, price:item.price, quantity:item.quantity, prod_id:item.prod_id})));
      
        return order;

    }
}