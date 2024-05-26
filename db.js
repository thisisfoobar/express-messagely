/** Database connection for messagely. */

const { Client } = require("pg");
const { DB_NAME } = require("./config");
const password = require("./secretpassword")

const client = new Client({
  user: "thisisfoobar",
  host: "localhost",
  database: DB_NAME,
  password: password,
  port: 5432,
});

client.connect();

module.exports = client;
