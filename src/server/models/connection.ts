import * as pg from 'pg';

// export const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });
const config = {
  host: 'localhost',
  port: 5432,
  database: 'qrcodes'
};

export const pool = new pg.Pool(config);
