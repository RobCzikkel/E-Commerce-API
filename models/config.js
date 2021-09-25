
const Pool  = require('pg-pool');
require('dotenv').config()
 

// This is needed for Heroku as it changes the env variable to production when deploying
const isProduction = process.env.NODE_ENV === 'production';

// We use this method for instead the object method below
const connectionString = `postgresql://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const pool = new Pool({
	connectionString:  isProduction ? process.env.DATABASE_URL : connectionString, //Heroku addon will provide with a string called DATABASE_URL
    ssl: {
        rejectUnauthorized: false
        }
});
// const config = {
//     user: process.env.DB_ADMIN,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// }

// const config = {
//     user: 'tdszxbhxyqxvyn',
//     host: 'ec2-54-145-110-118.compute-1.amazonaws.com',
//     database: 'dborv60r1692cf',
//     password: '949af96b7e7ed3d62fa9fa11f849e2d36efc7685bdcce963a92de93a05f8b4cc',
//     port: 5432,
// }
// const pool = new Pool(config)

module.exports = {
    pool
}