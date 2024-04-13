const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "asdf1234",
    host: "localhost",
    port: 4000
});

pool.query(`CREATE DATABASE yt_login_system`).then((response) => {
  console.log("database created ", response)
}).catch((err) => {
  console.log(err.message);
});

module.exports = pool;