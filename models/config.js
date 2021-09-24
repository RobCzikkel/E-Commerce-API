
const Pool  = require('pg-pool');
const process = require('process')
const path = require('path')
require('dotenv').config()
 

// const config = {
//     user: process.env.DB_ADMIN,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// }

const config = {
    user: 'tdszxbhxyqxvyn',
    host: 'ec2-54-145-110-118.compute-1.amazonaws.com',
    database: 'dborv60r1692cf',
    password: '949af96b7e7ed3d62fa9fa11f849e2d36efc7685bdcce963a92de93a05f8b4cc',
    port: 5432,
}
const pool = new Pool(config)

module.exports = {
    pool
}