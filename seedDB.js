const faker = require('faker');
const options = {capSQL: true};
const pgp = require('pg-promise')(options);

// const Pool  = require('pg-pool');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'shop',
//     password: 'G00dvibes04',
//     port: 5432,
// })


// Seed users table
const createUser = () => ({
    username: faker.internet.userName(8).slice(0,8),
    email:faker.internet.email(),
    password: faker.internet.password(),
});


for (let i = 0; i < 10; i++) {
    const params = createUser();
    console.log(params)
    const statement = pgp.helpers.insert(params, null, 'users');
    console.log(statement)
    pool.query(statement);
};

// Seed products table

const createProduct = () => ({
    name: faker.commerce.productName().slice(0,15),
    description: faker.commerce.productDescription().slice(0,50),
    price: faker.commerce.price(),
    category: faker.commerce.department()
});


for (let i = 0; i < 10; i++) {
    const params = createProduct();
    console.log(params)
    const statement = pgp.helpers.insert(params, null, 'products');
    console.log(statement)
    pool.query(statement);
};

// Seed cart table
const createCart = () => ({
    user_id: 2
});


for (let i = 0; i < 10; i++) {
    const params = createCart();
    console.log(params)
    const statement = pgp.helpers.insert(params, null, 'cart');
    console.log(statement)
    pool.query(statement);
};

// Seed cart_item table

const getIDs = async() => {
    const arrayIDs = []
    const statement = 'SELECT id FROM products LIMIT 10';
    const prodIds = await pool.query(statement);
    prodIds.rows.map(item => arrayIDs.push(item.id));
    const id = arrayIDs[Math.trunc(Math.random() * 10) + 1]
    return id;
}

const createCartItem = async() => ({
    cart_id: 2,
    prod_id: await getIDs(),
    quantity: faker.datatype.number()
})

for (let i = 0; i < 10; i++) {
    createCartItem().then(prod => {
        const statement = pgp.helpers.insert(prod, null, 'cart_item');
        pool.query(statement);
    }).catch(error => console.log(error))
};

