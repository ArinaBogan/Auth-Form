async function authUserDB(email, password) {
    const client = await pool.connect();
    const sql = "select * from users where email=$1 and password =$2";
    const data = (await client.query(sql, [email, password])).rows;
    return data;
  }