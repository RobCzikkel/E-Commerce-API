var express = require('express');
const cart = require('../services/cart');
var cartsRouter = express.Router();

const CartService = require('../services/cart')




cartsRouter.get('/', async(req,res,next) => {
  try {
    // console.log(req.user.id)
    const result = await CartService.getCart(req.user.id);
    res.status(200).json(result);
  } catch(error) {
    next(error)
  }
});

cartsRouter.post('/', async(req,res,next) => {
  try {
    const result = await CartService.createCart(req.user.id);
    res.status(201).json(result);
  } catch(error) {
    next(error)
  }
})

cartsRouter.post('/items', async(req,res,next) => {
  try {
    const result = await CartService.createCartItem(req.user.id, req.body);
    res.status(200).json(result);
  } catch(error) {
    next(error)
  }
})

cartsRouter.put('/items/:id', async(req,res,next) => {
  try {
    const result = await CartService.updateItem(req.params.id, req.body);
    res.status(201).json(result);
  } catch(error) {
    next(error)
  }
})

cartsRouter.delete('/items/:id', async(req,res,next) => {
  try {
    const result = await CartService.deleteItem(req.params.id);
    res.status(201).json(result);
  } catch(error) {
    next(error)
  }
})

cartsRouter.post('/checkout', async(req,res,next) => {
  try {
    const { cart_id } = req.body;
    const result = await CartService.checkout(cart_id, 2);
    res.status(200).json(result);
  } catch(error) {
    next(error);
  }
})



module.exports = cartsRouter;