import * as pg from 'pg';

// export const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });
const config = {
  host: 'localhost',
  database: 'tickets'
};

export const pool = new pg.Pool(this.config);
