var express = require('express');
var productsRouter = express.Router();
 const productService = require('../services/product');

/* GET users listing. */
productsRouter.get('/:id', async (req,res,next) => {
  try {
    const result = await productService.getProductById(req.params);
    res.status(200).json(result);
  } catch(error) {
    res.status(404).json(error);
  }
  
});


productsRouter.get('/', async (req,res,next) => {
  try {
    const result = await productService.getProductByCategory(req.query);
    res.status(200).json(result);
  } catch(error) {
    res.status(404).json(error);
  }
  
});


module.exports = productsRouter;