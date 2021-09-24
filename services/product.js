const ProductInstance = require('../models/products');
const ProductModel = new ProductInstance();


module.exports = {

    getProductById: async (data) => {
        const response = await ProductModel.getProductById(data);
        return response;
    },

    getProductByCategory: async(data) => {
        const response = await ProductModel.getProductByCategory(data);
        return response;
    }
}