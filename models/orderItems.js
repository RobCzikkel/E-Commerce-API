const { pool } = require('./config');
const options = {capSQL: true};
const pgp = require('pg-promise')(options);

module.exports = class OrderItemModel {
    async createItem(params) {
        try {
            const statement = pgp.helpers.insert(params, null, 'order_item') + ' RETURNING *';
            const item = await pool.query(statement);

            return item.rows[0];
        } catch(error) {
            throw error;
        }
    }

    async deleteItem(id) {
        try {
            const result = await pool.query('DELETE FROM order_item WHERE id=$1', [id]);
            return result;
        } catch(error) {
            throw error;
        }
    }

    async updateItem(id, params) {
        try {
            const statement = pgp.helpers.update(params, null, 'order_item') + ` WHERE id=${id} RETURNING *`;
            const item = await pool.query(statement);
            return item.rows[0];
        } catch(error) {
            throw error
        }
    }
}