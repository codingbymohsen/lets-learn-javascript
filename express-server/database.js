const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "express_db",
});

async function createProduct(product) {
  pool.query("INSERT INTO PRODOCTS values()");
}

module.exports = { createProduct };
