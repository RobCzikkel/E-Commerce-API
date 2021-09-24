const { pool } = require('./config');
const options = {capSQL: true};
const pgp = require('pg-promise')(options);

//
module.exports = class OrderModel {

   async getOrders(id) {
       try {
           const orders = await pool.query('SELECT * FROM order_detail WHERE user_id=$1', [id])
           return orders.rows

       } catch(error) {
           throw error
       }
   }

   async findOrder(id) {
        try {
            const orders = await pool.query('SELECT * FROM order_detail WHERE id=$1', [id])
            return orders.rows[0]

        } catch(error) {
            throw error
        }
    }

    async createOrder(params) {
        try {
            const statement = pgp.helpers.insert(params, null, 'order_detail') + ' RETURNING *';
            const order = await pool.query(statement);
            return order.rows[0]
        } catch(error) {
            throw error;
        }
    }
};


