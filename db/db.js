import * as dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

//new pool instance

const dbString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: dbString,
});

export default pool;
