const Pool  = require('pg-pool');

 const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'G00dvibes04',
    port: 5432,
}
const pool = new Pool(config)

module.exports = {
    pool
}