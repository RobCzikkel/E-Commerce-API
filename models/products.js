const { pool } = require('./config');

module.exports = class ProductModel {

    async getProductById({id}) {
        try {
            const results = await pool.query('SELECT name, description, price FROM products WHERE id=$1', [id]);
            if (!results) {
                return null;
            }
            return results.rows[0];
        } catch(error) {
            throw error;
        }
    }

    async getProductByCategory({category}) {
        try {
            const results = await pool.query('SELECT name, description, price FROM products WHERE category=$1', [category]);
            if (!results) {
                return null;
            }
            return results.rows[0];
        } catch(error) {
            throw error;
        }
    }


}