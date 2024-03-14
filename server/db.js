const { Pool } = require('pg');

const pool = new Pool({
  password: "28092002*",
  database: "users",
  port: 5432,
  host: "localhost",
  user: "postgres",
});

module.exports = pool;
