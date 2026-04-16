const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hosteljinnah2018@",
  database: "airbnb",
});
module.exports = pool.promise();
