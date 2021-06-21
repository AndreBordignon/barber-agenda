const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "andrezin1",
  database: "barber-agenda",
});

module.exports = connection;
