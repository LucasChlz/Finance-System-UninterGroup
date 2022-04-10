const { createPool } = require("mysql");


const pool = createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'financedb',
    connectionLimit:10
});

pool.getConnection((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = pool;