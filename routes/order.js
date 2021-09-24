var express = require('express');
var ordersRouter = express.Router();

const OrderService = require('../services/order');


ordersRouter.get('/', async(req,res,next) => {
    try {
        const orders = await OrderService.getOrders(req.user.id);
        res.status(200).json(orders);
    } catch(error) {
        next(error);
    }
})
ordersRouter.get('/:id', async(req,res,next) => {
    try {
        const order = await OrderService.findOrder(req.params.id);
        res.status(200).json(order);
    } catch(error) {
        next(error)
    }
});



module.exports = ordersRouter;