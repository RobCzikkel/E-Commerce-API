const Pool  = require('pg-pool');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'G00dvibes04',
    port: 5432,
})

module.exports = {
    pool
}